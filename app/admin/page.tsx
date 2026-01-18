"use client";

import { useEffect, useState } from "react";

const statCards = [
  { label: "Visitantes (7d)", value: "—", helper: "Conecte o Vercel Analytics para ver dados reais." },
  { label: "Tempo médio na página", value: "—", helper: "Métricas de engajamento aparecem após integração." },
  { label: "Páginas mais vistas", value: "—", helper: "Listagem disponível via API do Vercel Analytics." },
];

const expectedUser = "admin";
const expectedPassword = "123257941502@#";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ user: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-auth");
    if (saved === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (credentials.user === expectedUser && credentials.password === expectedPassword) {
      sessionStorage.setItem("admin-auth", "true");
      setIsAuthenticated(true);
      return;
    }

    setError("Credenciais inválidas. Tente novamente.");
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background px-4 py-16">
        <div className="container mx-auto max-w-md">
          <div className="rounded-2xl border border-white/10 bg-card/60 p-8 shadow-xl backdrop-blur">
            <h1 className="text-2xl font-semibold text-white">Login Admin</h1>
            <p className="mt-2 text-sm text-white/60">
              Acesso simples no navegador. Use as credenciais fornecidas.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="user" className="text-sm text-white/70">
                  Usuário
                </label>
                <input
                  id="user"
                  value={credentials.user}
                  onChange={(event) => setCredentials({ ...credentials, user: event.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm text-white/70">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                />
              </div>

              {error ? <p className="text-sm text-red-400">{error}</p> : null}

              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-4 py-3 font-semibold text-white transition hover:bg-accent/90"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="container mx-auto max-w-5xl space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Admin</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Analytics</h1>
          <p className="text-white/60 max-w-2xl">
            Configure o Vercel Analytics para acompanhar visitas, tempo na página e páginas mais acessadas.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-card/60 p-6 shadow-lg backdrop-blur"
            >
              <p className="text-sm text-white/60">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm text-white/50">{stat.helper}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-white/10 bg-card/60 p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Próximos passos</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>1. Ative o Vercel Analytics no projeto Vercel.</li>
            <li>2. Adicione a variável de ambiente com o token de leitura da API.</li>
            <li>3. Substitua os cards acima pelos dados retornados da API.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
