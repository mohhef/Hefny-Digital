"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const t = useTranslations("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log("Login attempt with:", email, password);
    // For now, we'll just redirect to the dashboard
    // @ts-expect-error idk
    router.push(`/dashboard`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{t("title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t("email")}
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                {t("password")}
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {t("loginButton")}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">{t("contactUs")}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
