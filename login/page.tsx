"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
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
        setErro("Não foi possível entrar. Confira seu e-mail e senha.");
      } else {
        window.location.href = "/painel";
      }
    } catch {
      setErro("Erro de conexão. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "#f1f5f9",
      padding: 20,
      fontFamily: "Arial, sans-serif"
    }}>
      <form onSubmit={entrar} style={{
        background: "white",
        padding: 32,
        borderRadius: 12,
        width: "100%",
        maxWidth: 380,
        boxSizing: "border-box"
      }}>
        <h1>GESTÃO+ CLOUD</h1>
        <p>Entre com seu e-mail e senha</p>

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            padding: 12,
            margin: "8px 0 18px"
          }}
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          required
          value={senha}
          onChange={e => setSenha(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            padding: 12,
            margin: "8px 0 18px"
          }}
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
            background: "#163b65",
            color: "white",
            border: 0,
            padding: 14,
            width: "100%",
            borderRadius: 8
          }}
        >
          {carregando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
  
