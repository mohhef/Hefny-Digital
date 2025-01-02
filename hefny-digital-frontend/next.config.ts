const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
    images: {
        domains: ['images.unsplash.com'],
    },
};

module.exports = withNextIntl(config);