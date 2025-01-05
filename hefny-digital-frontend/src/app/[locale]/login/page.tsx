"use client";

import Navbar from "@/components/Navbar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const t = useTranslations("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear any existing errors

    if (email === "admin" && password === "123test") {
      console.log("Login successful");
      // @ts-expect-error idk
      router.push("/dashboard");
    } else {
      setError(t("invalidCredentials"));
    }
  };

  return (
    <div>
      <Navbar bookingPage={true} />
      <Card className="container mx-auto p-4 max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{t("title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>
                  {error} {/* @ts-expect-error idk */}
                  <Link href="/#contact" className="underline font-medium">
                    {t("contactSupport")}
                  </Link>
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t("email")}
              </label>
              <Input
                id="email"
                type="text"
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
          <Link href="/#contact" className="text-sm text-gray-600">
            {t("contactUs")}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
