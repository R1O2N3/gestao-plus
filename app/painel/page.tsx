
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function PainelPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;

    async function verificar() {
      const { data, error } = await supabase.auth.getUser();

      if (!ativo) return;

      if (error || !data.user) {
        router.replace("/login");
        return;
      }

      setEmail(data.user.email || "");
      setCarregando(false);
    }

    verificar();

    return () => {
      ativo = false;
    };
  }, [router]);

  async function sair() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  if (carregando) {
    return <p style={{ padding: 30 }}>Verificando acesso...</p>;
  }

  return (
    <main style={{
      padding: 32,
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>GESTÃO+ CLOUD</h1>
      <h2>Painel de Gestão</h2>
      <p>Bem-vindo, {email}!</p>
      <p>Autenticação realizada com sucesso.</p>

      <button onClick={sair}>
        Sair do sistema
      </button>
    </main>
  );
}
