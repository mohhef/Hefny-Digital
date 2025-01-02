import { Check } from "lucide-react";

interface FounderProfileProps {
  name: string;
  role: string;
  description: string;
  expertise: string[];
}

export default function FounderProfile({
  name,
  role,
  description,
  expertise,
}: FounderProfileProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h3 className="text-2xl font-semibold mb-1 text-blue-700">{name}</h3>
      <p className="text-lg font-medium text-gray-600 mb-3">{role}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <h4 className="font-semibold mb-2 text-gray-800">Areas of Expertise:</h4>
      <ul className="space-y-2">
        {expertise.map((item, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-2" size={16} />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
