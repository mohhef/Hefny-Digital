import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

interface FounderProfileProps {
  founder: "mohamed" | "amr";
}
export default function FounderProfile({ founder }: FounderProfileProps) {
  const t = useTranslations("founderProfile");

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h3 className="text-2xl font-semibold mb-1 text-blue-700">
        {t(`${founder}.name`)}
      </h3>
      <p className="text-lg font-medium text-gray-600 mb-3">
        {t(`${founder}.role`)}
      </p>
      <p className="text-gray-600 mb-4">{t(`${founder}.description`)}</p>
      <h4 className="font-semibold mb-2 text-gray-800">
        {t("expertiseTitle")}
      </h4>
      <ul className="space-y-2">
        {t.raw(`${founder}.expertise`).map((item: string, index: number) => (
          <li key={index} className="flex items-center rtl:flex-row-reverse">
            <Check
              className="text-green-500 mr-2 rtl:ml-2 rtl:mr-0"
              size={16}
            />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
