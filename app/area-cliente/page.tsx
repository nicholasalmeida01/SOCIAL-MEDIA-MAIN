import type { Metadata } from "next";
import LoginForm from "@/components/portal/LoginForm";

export const metadata: Metadata = {
  title: "Área do Cliente — Play to Play",
};

export default function AreaClientePage() {
  return <LoginForm />;
}
