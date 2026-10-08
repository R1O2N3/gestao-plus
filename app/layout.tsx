import type { ReactNode } from "react";

export const metadata = {
  title: "GESTÃO+ CLOUD",
  description: "Sistema de Gestão Empresarial"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
