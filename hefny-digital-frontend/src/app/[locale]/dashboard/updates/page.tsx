import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UpdatesPage() {
  const updates = [
    {
      id: 1,
      title: "New Feature: Client Portal",
      date: "2023-06-05",
      description:
        "We've launched a new client portal for easier project tracking.",
    },
    {
      id: 2,
      title: "Maintenance Scheduled",
      date: "2023-06-10",
      description: "Scheduled maintenance on June 15th from 2 AM to 4 AM EST.",
    },
    {
      id: 3,
      title: "New Team Member",
      date: "2023-06-01",
      description: "Please welcome Sarah to our design team!",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Updates</h1>
      <div className="space-y-4">
        {updates.map((update) => (
          <Card key={update.id}>
            <CardHeader>
              <CardTitle>{update.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">{update.date}</p>
              <p>{update.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
