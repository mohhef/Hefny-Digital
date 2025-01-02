import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function InvoicesPage() {
  const invoices = [
    {
      id: 1,
      number: "INV-001",
      amount: 1000,
      status: "Paid",
      date: "2023-05-15",
    },
    {
      id: 2,
      number: "INV-002",
      amount: 1500,
      status: "Pending",
      date: "2023-06-01",
    },
    {
      id: 3,
      number: "INV-003",
      amount: 2000,
      status: "Overdue",
      date: "2023-05-20",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.number}</TableCell>
              <TableCell>${invoice.amount}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
