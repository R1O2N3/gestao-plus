"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function entrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: senha
      });

      if (error) {
        setErro("E-mail ou senha inválidos.");
        return;
      }

      router.push("/painel");
    } catch {
      setErro("Não foi possível conectar. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f1f5f9",
      padding: 20,
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{
        width: "100%",
        maxWidth: 400,
        background: "#fff",
        padding: 32,
        borderRadius: 12,
        boxShadow: "0 4px 20px #00000012"
      }}>
        <h1 style={{ color: "#163b65", marginBottom: 8 }}>
          GESTÃO+ CLOUD
        </h1>
        <p style={{ color: "#64748b" }}>
          Acesse sua plataforma de gestão
        </p>

        <form onSubmit={entrar}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={campo}
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            required
            autoComplete="current-password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            style={campo}
          />

          {erro && (
            <p role="alert" style={{ color: "#b91c1c" }}>
              {erro}
            </p>
          )}

          <button
            type="submit"
            disabled={carregando}
            style={{
              width: "100%",
              padding: 14,
              background: "#163b65",
              color: "white",
              border: 0,
              borderRadius: 8,
              cursor: carregando ? "wait" : "pointer"
            }}
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </section>
    </main>
  );
}

const campo: React.CSSProperties = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  padding: 12,
  marginTop: 8,
  marginBottom: 20,
  border: "1px solid #cbd5e1",
  borderRadius: 8
};
