import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
          {t("title")}
        </h2>
        <div className="prose prose-lg mx-auto">
          <p>{t("content1")}</p>
          <p>{t("content2")}</p>
          <p>{t("content3")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
