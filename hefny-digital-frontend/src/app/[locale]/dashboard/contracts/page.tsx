import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ContactsPage() {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      lastContact: "2023-06-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      lastContact: "2023-05-28",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      lastContact: "2023-05-25",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Last Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.lastContact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
