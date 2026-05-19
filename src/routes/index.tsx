import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  TrendingUp,
  Brain,
  Sprout,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-agent.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agroach — Treinador comercial com IA no WhatsApp para o agro" },
      {
        name: "description",
        content:
          "Agente de IA que treina, acompanha e potencializa times comerciais do agronegócio direto no WhatsApp. Aumente conversão e padronize a abordagem da sua equipe.",
      },
      { property: "og:title", content: "Agroach — Treinador comercial com IA no WhatsApp" },
      {
        property: "og:description",
        content:
          "Agente de IA que treina times comerciais do agro direto no WhatsApp.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden grain">
      <Nav />
      <Hero />
      <Bento />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gradient-mint)] glow-mint">
          <Sprout className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
        </div>
        <span className="font-display text-xl font-bold tracking-tight">Agroach</span>
      </div>
      <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a href="#recursos" className="transition hover:text-foreground">Recursos</a>
        <a href="#como-funciona" className="transition hover:text-foreground">Como funciona</a>
        <a href="#contato" className="transition hover:text-foreground">Contato</a>
      </nav>
      <a
        href="#contato"
        className="rounded-full bg-[var(--gradient-mint)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        Falar com vendas
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-mint" />
            Novo · Treinador de IA para times do agro
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
            O <span className="text-gradient-mint">coach comercial</span> que vive no WhatsApp do seu time.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Um agente de IA que treina vendedores do agronegócio em tempo real, padroniza
            a abordagem e transforma cada conversa em oportunidade fechada.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-mint)] px-7 py-4 text-sm font-semibold text-primary-foreground glow-mint transition hover:opacity-90"
            >
              Começar agora
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition hover:bg-card"
            >
              Ver como funciona
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["Integração nativa com WhatsApp", "Treinamentos diários", "Métricas por vendedor"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-mint)] opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bento-card">
            <img
              src={heroImg}
              alt="Visualização do agente de IA conectando time comercial ao agro"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bento() {
  return (
    <section id="recursos" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Tudo que seu time precisa para <span className="text-gradient-mint">vender mais</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Uma plataforma desenhada para o ritmo e a linguagem de quem vende no agro.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
        <BentoCard className="md:col-span-3 md:row-span-2" icon={Brain} title="Treinamento contextual">
          <p>
            O agente analisa cada conversa do vendedor e devolve feedback acionável em
            segundos — como um gerente sênior sussurrando no ouvido em cada negociação.
          </p>
          <div className="mt-6 space-y-3 rounded-2xl border border-border bg-background/40 p-4 text-sm">
            <ChatBubble role="vendedor">
              "Cliente disse que o preço da semente está alto…"
            </ChatBubble>
            <ChatBubble role="agente">
              Reforce custo por hectare e ROI da safra. Cite o case da Fazenda São João.
            </ChatBubble>
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-3" icon={MessageCircle} title="Vive no WhatsApp">
          Sem novos apps, sem fricção. Conecta no número que seu time já usa todos os dias no campo.
        </BentoCard>

        <BentoCard className="md:col-span-2" icon={TrendingUp} title="+38% conversão">
          Média observada em times que usam o Agroach por 90 dias.
        </BentoCard>

        <BentoCard className="md:col-span-1" icon={Zap} title="Tempo real">
          Respostas em &lt;2s.
        </BentoCard>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <BentoCard icon={BarChart3} title="Painel por vendedor">
          Acompanhe performance individual, gaps de discurso e evolução semanal.
        </BentoCard>
        <BentoCard icon={Sprout} title="Especialista em agro">
          Modelo treinado em ciclos de safra, insumos, defensivos, máquinas e crédito rural.
        </BentoCard>
        <BentoCard icon={Sparkles} title="Playbooks vivos">
          Atualize a abordagem comercial uma vez — o time inteiro aprende na hora.
        </BentoCard>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bento-card p-6 md:p-8 ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/10 text-mint">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold md:text-2xl">{title}</h3>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </div>
  );
}

function ChatBubble({ role, children }: { role: "vendedor" | "agente"; children: React.ReactNode }) {
  const isAgent = role === "agente";
  return (
    <div className={`flex ${isAgent ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
          isAgent
            ? "bg-[var(--gradient-mint)] text-primary-foreground"
            : "bg-card text-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Conecte o WhatsApp",
      desc: "Integração em minutos com o número comercial do seu time, sem trocar de ferramenta.",
    },
    {
      n: "02",
      title: "Configure o playbook",
      desc: "Definimos juntos o discurso, produtos e objeções típicas da sua operação no agro.",
    },
    {
      n: "03",
      title: "Time treina vendendo",
      desc: "Cada conversa vira aprendizado. O agente acompanha, sugere e mede em tempo real.",
    },
  ];
  return (
    <section id="como-funciona" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl">Como funciona</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Do setup à primeira venda assistida em menos de uma semana.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="bento-card p-8">
            <div className="font-display text-5xl font-bold text-gradient-mint">{s.n}</div>
            <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bento-card p-10 md:p-16">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--gradient-mint)] opacity-30 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Pronto para treinar seu time enquanto ele vende?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Agende uma demonstração de 20 minutos e veja o Agroach em ação com um caso real
              da sua operação.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="mailto:contato@agroach.ai"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-mint)] px-8 py-4 text-sm font-semibold text-primary-foreground glow-mint transition hover:opacity-90"
            >
              Agendar demonstração
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Sprout className="h-4 w-4 text-mint" />
          <span>© {new Date().getFullYear()} Agroach. Feito para o agro.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacidade</a>
          <a href="#" className="hover:text-foreground">Termos</a>
        </div>
      </div>
    </footer>
  );
}
