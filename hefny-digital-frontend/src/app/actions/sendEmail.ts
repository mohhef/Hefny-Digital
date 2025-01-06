'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  console.log('Environment Variables:')
  console.log('EMAIL_HOST:', process.env.EMAIL_HOST)
  console.log('EMAIL_PORT:', process.env.EMAIL_PORT)
  console.log('EMAIL_SECURE:', process.env.EMAIL_SECURE)
  console.log('EMAIL_USER:', process.env.EMAIL_USER)
  console.log('EMAIL_PASS:', 'REDACTED') // Don't log the actual password
  console.log('EMAIL_FROM:', process.env.EMAIL_FROM)
  console.log('EMAIL_TO:', process.env.EMAIL_TO)

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const company = formData.get('company') as string
  const message = formData.get('message') as string

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Message: ${message}
    `,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  }

  try {
    console.log('Attempting to send email...')
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
    return { success: true, message: 'Email sent successfully' }
  } catch (error: unknown) {
    console.error('Error sending email:', error)
    
    if (error instanceof Error) {
      return { 
        success: false, 
        message: 'Failed to send email', 
        error: error.message 
      }
    } else {
      return { 
        success: false, 
        message: 'Failed to send email', 
        error: 'An unknown error occurred' 
      }
    }
  }
}

