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
  Clock,
  Target,
  Calendar,
} from "lucide-react";
import fold2 from "@/assets/fold-2-resultados.png";
import fold3 from "@/assets/fold-3-como-funciona.png";

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
    <header style={{ background: '#fff', borderBottom: '1px solid #f3f4f6' }} className="relative z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#22c55e"/>
              <path d="M10 22L16 10L22 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 18H19.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 20, color: '#111827', letterSpacing: '-0.02em' }}>Ailton</span>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {['Como funciona', 'Para quem é', 'Benefícios', 'Depoimentos', 'FAQ'].map(link => (
            <a key={link} href="#" style={{ fontFamily: 'Inter', fontSize: 14, color: '#374151', fontWeight: 500, textDecoration: 'none' }}
              className="transition hover:opacity-70">{link}</a>
          ))}
        </nav>

        {/* CTA button */}
        <a
          href="#contato"
          style={{
            background: 'transparent',
            border: '2px solid #22c55e',
            color: '#22c55e',
            borderRadius: 6,
            padding: '8px 18px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: '0.03em',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
          className="hidden md:inline-flex items-center hover:bg-green-50"
        >
          QUERO ACESSO ANTECIPADO
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ background: '#fff' }} className="relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT COLUMN */}
          <div>
            {/* Accent line */}
            <div style={{ width: 48, height: 4, background: 'linear-gradient(90deg, #22c55e, #3b82f6)', borderRadius: 999, marginBottom: 28 }} />

            {/* Headline */}
            <h1 style={{
              fontFamily: 'Inter',
              fontWeight: 900,
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              lineHeight: 1.05,
              color: '#111827',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              O FIM DO<br />
              TREINAMENTO<br />
              COMERCIAL<br />
              TRADICIONAL
            </h1>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'Inter',
              fontSize: 17,
              color: '#4b5563',
              lineHeight: 1.6,
              marginBottom: 36,
              fontWeight: 400,
            }}>
              O agro não precisa de novos cursos.<br />
              Precisa de um coach no bolso do vendedor<br />
              24 horas por dia.
            </p>

            {/* CTA Button */}
            <a
              href="#contato"
              id="hero-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#22c55e',
                color: '#fff',
                borderRadius: 8,
                padding: '16px 28px',
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                boxShadow: '0 4px 20px rgba(34,197,94,0.35)',
                transition: 'all 0.2s',
                marginBottom: 40,
              }}
              className="hover:opacity-90 hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              QUERO ACESSO ANTECIPADO
            </a>

            {/* Feature badges */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 8 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ background: '#f0fdf4', borderRadius: '50%', padding: 8, marginTop: 2 }}>
                  <Clock size={16} color="#22c55e" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 13, color: '#111827' }}>24h com você</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#6b7280', marginTop: 2 }}>No bolso do vendedor,<br />sempre que precisar.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ background: '#eff6ff', borderRadius: '50%', padding: 8, marginTop: 2 }}>
                  <Target size={16} color="#3b82f6" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 13, color: '#111827' }}>Respostas práticas</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#6b7280', marginTop: 2 }}>Orientação personalizada<br />para cada negociação.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ background: '#f0fdf4', borderRadius: '50%', padding: 8, marginTop: 2 }}>
                  <TrendingUp size={16} color="#22c55e" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 13, color: '#111827' }}>Mais resultados</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#6b7280', marginTop: 2 }}>Conversas melhores,<br />mais vendas fechadas.</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Phone Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* Decorative green arc */}
            <div style={{
              position: 'absolute',
              right: -40,
              bottom: -20,
              width: 180,
              height: 180,
              borderRadius: '50%',
              border: '3px solid #22c55e',
              opacity: 0.15,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              right: -20,
              bottom: 0,
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '2px solid #3b82f6',
              opacity: 0.1,
              pointerEvents: 'none',
            }} />

            {/* Phone */}
            <div className="phone-mockup">
              {/* Notch */}
              <div className="phone-notch" />

              {/* Screen */}
              <div className="phone-screen">
                {/* Status bar */}
                <div style={{ background: '#075e54', padding: '6px 16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#fff', fontSize: 11, fontWeight: 600 }}>11:30</span>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    <span style={{ color: '#fff', fontSize: 10 }}>▐▐▐</span>
                    <span style={{ color: '#fff', fontSize: 10 }}>WiFi</span>
                    <span style={{ color: '#fff', fontSize: 10 }}>▮</span>
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="wapp-header">
                  <div style={{ color: '#fff', fontSize: 18, cursor: 'pointer' }}>←</div>
                  <div className="wapp-avatar">
                    <svg viewBox="0 0 36 36" fill="none" width="36" height="36">
                      <circle cx="18" cy="18" r="18" fill="#25d366"/>
                      <circle cx="18" cy="14" r="6" fill="#fff" opacity="0.9"/>
                      <ellipse cx="18" cy="28" rx="10" ry="7" fill="#fff" opacity="0.9"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>Treinador</div>
                    <div style={{ color: '#aed6b8', fontSize: 10 }}>online</div>
                  </div>
                  <div style={{ display: 'flex', gap: 14, color: '#fff', fontSize: 14 }}>
                    <span>📹</span><span>📞</span><span>⋮</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="wapp-messages">
                  {/* Vendedor */}
                  <div className="wapp-bubble sent">
                    Ailton, cliente falou que meu produto é 30 reais mais caro por saca. Como quebro isso?
                    <div className="wapp-time">10:13 ✓✓</div>
                  </div>

                  {/* Treinador */}
                  <div style={{ display: 'flex', gap: 6, alignSelf: 'flex-start', maxWidth: '88%' }}>
                    <div className="wapp-avatar" style={{ width: 26, height: 26, flexShrink: 0, alignSelf: 'flex-end' }}>
                      <svg viewBox="0 0 36 36" fill="none" width="26" height="26">
                        <circle cx="18" cy="18" r="18" fill="#25d366"/>
                        <circle cx="18" cy="14" r="6" fill="#fff" opacity="0.9"/>
                        <ellipse cx="18" cy="28" rx="10" ry="7" fill="#fff" opacity="0.9"/>
                      </svg>
                    </div>
                    <div className="wapp-bubble received">
                      Opa! Antes do plano, me responde: qual o perfil desse cliente e qual problema ele tem que sua semente resolve?
                      <div className="wapp-time">10:15</div>
                    </div>
                  </div>

                  {/* Vendedor */}
                  <div className="wapp-bubble sent">
                    Fazendeiro de soja, 800 ha. Perde produtividade com pragas. Minha semente resolve, mas ele só vê preço.
                    <div className="wapp-time">10:16 ✓✓</div>
                  </div>

                  {/* Treinador */}
                  <div style={{ display: 'flex', gap: 6, alignSelf: 'flex-start', maxWidth: '88%' }}>
                    <div className="wapp-avatar" style={{ width: 26, height: 26, flexShrink: 0, alignSelf: 'flex-end' }}>
                      <svg viewBox="0 0 36 36" fill="none" width="26" height="26">
                        <circle cx="18" cy="18" r="18" fill="#25d366"/>
                        <circle cx="18" cy="14" r="6" fill="#fff" opacity="0.9"/>
                        <ellipse cx="18" cy="28" rx="10" ry="7" fill="#fff" opacity="0.9"/>
                      </svg>
                    </div>
                    <div className="wapp-bubble received">
                      Perfeito. O que você falou quando ele disse que tava caro?
                      <div className="wapp-time">10:17</div>
                    </div>
                  </div>

                  {/* Vendedor */}
                  <div className="wapp-bubble sent">
                    Falei que era mais resistente e dava mais produtividade. Ele disse 'depois eu vejo' e não voltou.
                    <div className="wapp-time">10:18 ✓✓</div>
                  </div>

                  {/* Treinador */}
                  <div style={{ display: 'flex', gap: 6, alignSelf: 'flex-start', maxWidth: '92%' }}>
                    <div className="wapp-avatar" style={{ width: 26, height: 26, flexShrink: 0, alignSelf: 'flex-end' }}>
                      <svg viewBox="0 0 36 36" fill="none" width="26" height="26">
                        <circle cx="18" cy="18" r="18" fill="#25d366"/>
                        <circle cx="18" cy="14" r="6" fill="#fff" opacity="0.9"/>
                        <ellipse cx="18" cy="28" rx="10" ry="7" fill="#fff" opacity="0.9"/>
                      </svg>
                    </div>
                    <div className="wapp-bubble received">
                      Pronto. O erro não foi o preço — foi não traduzir os 15% a mais de produtividade em dinheiro no bolso dele. Vou montar um plano pra você voltar com argumento que ele não ignora. Topa?
                      <div className="wapp-time">10:19</div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="wapp-input-bar">
                  <span style={{ fontSize: 16, color: '#888' }}>😊</span>
                  <div className="wapp-input-field">Mensagem</div>
                  <span style={{ fontSize: 14, color: '#888' }}>📎</span>
                  <span style={{ fontSize: 14, color: '#888' }}>📷</span>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: '#22c55e', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 14,
                  }}>🎤</div>
                </div>
              </div>
            </div>
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
