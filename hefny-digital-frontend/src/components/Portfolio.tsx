"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations("portfolio");

  const projects = [
    {
      id: 1,
      title: t("project1"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: t("project2"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: t("project3"),
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
