import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, CheckCircle2, ChevronDown, ChevronUp, AlertCircle,
  BrainCircuit, HeartHandshake, Lightbulb, CheckIcon, XIcon, Quote,
  Check, X, Play, MessageCircle, Star, Package, ShieldCheck, Layers, Video
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen text-warm-text bg-warm-bg overflow-x-hidden selection:bg-warm-cta selection:text-white">
      <HeroSection />
      <PainMirrorSection />
      <AggravationSection />
      <LearningSection />
      <IncludedSection />
      <ForWhomSection />
      <AuthoritySection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}

// ---------------------------
// 1. HERO SECTION
// ---------------------------
function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-5 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-warm-text/5 text-warm-text font-medium text-xs md:text-sm mb-6 tracking-wide uppercase">
          MÉTODO MIE · DAPHNE LUCCHESI
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-[64px] font-semibold leading-tight mb-6 text-balance">
          O Método MIE é o <span className="text-warm-cta">passo a passo pra você sair do caos da sua rotina</span>, parar de viver no limite e <span className="underline decoration-warm-cta/50 decoration-4 md:decoration-8 underline-offset-[4px] md:underline-offset-[8px]">fazer seu filho te ouvir e te respeitar.</span>
        </h1>
        <p className="text-base md:text-xl text-warm-text/80 mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed text-balance">
          Um método criado para mães que estão no limite: para você sair do ciclo de exaustão, resgatar o respeito do seu filho e ainda ter energia no final do dia sem grito, sem ameaça e sem se sentir esgotada todos os dias.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 mb-4 md:mb-6">
          <motion.a
            href="https://pay.hotmart.com/D98669955Q?off=rjq2k9zs&bid=1777993356404"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-warm-cta hover:bg-warm-cta-hover text-white px-6 py-4 md:px-8 md:py-5 rounded-full text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto block sm:inline-block text-center"
          >
            QUERO TRANSFORMAR MINHA ROTINA AGORA
          </motion.a>
        </div>

        <div className="text-warm-text/80 font-medium text-sm md:text-base mb-8">
          12x de R$99,92 · <span className="font-light">ou R$997,00 à vista</span>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-6 mt-4 md:mt-8 text-xs md:text-sm text-warm-text/60">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-warm-cta" /> +3.000 mães transformadas</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-warm-cta" /> 7 dias de garantia incondicional</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-warm-cta" /> Sem burocracia</span>
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------
// 2. ESPELHO DA DOR
// ---------------------------
function PainMirrorSection() {
  const cards = [
    {
      num: "01",
      text: "Você pede uma vez. Ele ignora."
    },
    {
      num: "02",
      text: "Você pede de novo. Nada."
    },
    {
      num: "03",
      text: "Você já avisa que está ficando brava. Ainda nada.",
      featured: true
    },
    {
      num: "04",
      text: "Aí você explode."
    },
    {
      num: "05",
      text: "E só então ele te ouve."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-warm-bg/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 text-balance text-warm-text">
          Você se reconhece aqui?
        </h2>
        <p className="text-center text-warm-text/80 mb-10 md:mb-16 text-lg md:text-xl font-medium">
          O dia começa, e você já está sem paciência
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl flex flex-col justify-center bg-white shadow-xl shadow-warm-text/5 border border-warm-text/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-warm-text/10 transition-all duration-300 ${card.featured ? 'ring-2 ring-warm-cta sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="text-sm font-serif font-bold text-warm-cta mb-3">{card.num}</div>
              <p className="text-base md:text-lg font-medium leading-relaxed text-warm-text text-balance">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center px-4 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium text-warm-text/90 mb-8 leading-relaxed text-balance">
            O problema não é sua falta de paciência. É que seu filho aprendeu, sem querer, que só precisa te ouvir quando você chega no limite.
          </p>
          <p className="text-lg md:text-2xl font-serif italic text-warm-text/80 text-balance mb-10">
            "Não é fraqueza. É que ninguém te ensinou o que fazer quando educar com amor não parece funcionar."
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// 3. AGRAVAMENTO
// ---------------------------
function AggravationSection() {
  const cases = [
    "Repete a mesma coisa dez vezes sem resultado",
    "Ameaça, cede quando está cansada, e perde a autoridade sem querer",
    "Grita, se arrepende, e sente culpa o resto do dia",
    "Tenta ser diferente no dia seguinte e o ciclo recomeça",
    "E sem mudar a estrutura, o ciclo se repete indefinidamente."
  ];

  const future = [
    "Você vai gritar mais, sentir mais culpa e se afastar emocionalmente do filho que ama",
    "Ele vai aprender a negociar tudo e desafiar cada limite que você tentar colocar",
    "A relação vai ficar mais tensa, com mais cobrança e menos conexão",
    "Comportamentos ansiosos no filho tendem a aumentar quando a rotina não tem direção"
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-warm-text text-white">
      <div className="max-w-4xl mx-auto mb-20 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-balance">O que está acontecendo</h2>
        <p className="text-white/80 mb-10 md:mb-12 text-lg md:text-xl font-light">
          Você não está falhando como mãe. Você está presa num ciclo.
        </p>
        
        <div className="space-y-4 md:space-y-6">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 md:gap-4 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-warm-cta shrink-0 mt-0.5" />
              <p className="text-base md:text-lg font-light leading-relaxed text-left">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-balance">O que acontece se nada mudar</h2>
        <p className="text-white/80 mb-10 md:mb-12 text-lg md:text-xl font-light">
          Criança sem limite vira adolescente sem controle. Os próximos meses com a mesma rotina:
        </p>

        <div className="space-y-4 md:space-y-6">
          {future.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 md:gap-4 p-5 md:p-6 bg-[#eb3b5a] text-white rounded-2xl border border-[#fa8231]/30 shadow-2xl shadow-red-900/40 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-0.5 opacity-80" />
              <p className="text-base md:text-lg font-medium leading-relaxed text-left relative z-10">{item}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center px-4 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// 4. O QUE VOCÊ VAI APRENDER
// ---------------------------
function LearningSection() {
  const blocks = [
    {
      num: "01",
      title: "Quebrar o ciclo de repetição",
      desc: "Você vai parar de ser ignorada, não gritando mais alto, mas falando de um jeito que cria obediência real."
    },
    {
      num: "02",
      title: "Criar uma rotina que sustenta você",
      desc: "Não uma rotina rígida, mas uma que funciona no dia caótico, quando você está cansada e tudo parece demais."
    },
    {
      num: "03",
      title: "Resolver o celular e a tela sem guerra",
      desc: "Estratégias simples que reduzem o conflito sem virar o dia de cabeça pra baixo."
    },
    {
      num: "04",
      title: "Agir sem explodir, mesmo exausta",
      desc: "Ferramentas práticas pra você responder em vez de reagir nos momentos em que é mais difícil."
    },
    {
      num: "05",
      title: "Entender o que você herdou",
      desc: "Quebrar os ciclos da sua própria infância que aparecem no seu jeito de criar."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-warm-bg relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 text-balance">
          A virada
        </h2>
        <p className="text-center text-warm-text/80 mb-4 text-lg md:text-xl font-medium">
          Você não precisa de mais paciência. Você precisa de método.
        </p>
        <p className="text-center text-warm-text/70 mb-10 md:mb-16 text-base md:text-lg max-w-3xl mx-auto text-balance">
          Paciência acaba. Método não. A diferença entre uma mãe exausta e uma mãe presente não é força de vontade, é estrutura.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-warm-text/5 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="text-sm font-serif font-semibold text-warm-cta mb-3">{block.num}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-balance">{block.title}</h3>
              <p className="text-sm md:text-base text-warm-text/70 leading-relaxed">{block.desc}</p>
            </motion.div>
          ))}
        </div>

        <CTAButton className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}

// ---------------------------
// 4.5. O QUE ESTÁ INCLUÍDO (NEW)
// ---------------------------
function IncludedSection() {
  const items = [
    {
      num: "01",
      icon: <Play className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" />,
      title: "Método completo em aulas online",
      desc: "Conteúdo 100% online, passo a passo para aplicar no dia a dia. Sem teoria vazia, só o que funciona na rotina real de uma mãe."
    },
    {
      num: "02",
      icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" />,
      title: "30 dias de acompanhamento direto",
      desc: "Respostas em áudio no WhatsApp para a sua realidade específica. Não é suporte genérico, é orientação personalizada com a Daphne."
    },
    {
      num: "03",
      icon: <Video className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" />,
      title: "Aulas ao vivo quinzenais por 1 ano",
      desc: "Para ajustar, corrigir e te manter no caminho, porque educar filho não é um evento, é um processo que evolui."
    },
    {
      num: "04",
      icon: <Layers className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" />,
      title: "Banco de analogias prontas",
      desc: "Para você explicar temas difíceis de um jeito que seu filho entende: mentira, bullying, exclusão, medo, limites."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-warm-bg/50 border-t border-warm-text/5 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 text-balance">
          Tudo que você recebe
        </h2>
        <p className="text-center text-warm-text/70 mb-10 md:mb-16 text-lg md:text-xl font-medium">
          O Método MIE e os Bônus incluídos hoje.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl flex gap-4 md:gap-6 items-start shadow-xl shadow-warm-text/5 border border-warm-text/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-warm-text/10 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Highlight bar top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warm-cta to-warm-cta-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-12 h-12 md:w-16 md:h-16 bg-warm-bg shrink-0 flex items-center justify-center rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                {item.num === "04" ? <Package className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" /> : item.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-warm-cta transition-colors duration-300">{item.title}</h3>
                <p className="text-sm md:text-base text-warm-text/80 leading-relaxed font-medium">{item.desc}</p>
                {["02", "03", "04"].includes(item.num) && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warm-cta/10 text-warm-cta text-xs font-bold uppercase tracking-wider border border-warm-cta/20 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-warm-cta" /> Bônus Especial
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// 5. PARA QUEM É / NÃO É
// ---------------------------
function ForWhomSection() {
  return (
    <section className="py-16 md:py-24 px-5 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 md:mb-16 text-balance">
          Antes de comprar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 rounded-3xl border border-warm-text/10 overflow-hidden">
          
          <div className="p-6 md:p-12 bg-white">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-6 md:mb-8 flex items-center gap-3">
              <CheckIcon className="w-6 h-6 md:w-8 md:h-8 text-green-500" /> Para você se...
            </h3>
            <ul className="space-y-4">
              {[
                "Está exausta de repetir e não ser ouvida", 
                "Quer respeito sem precisar gritar", 
                "Sente que perdeu o controle da rotina", 
                "Está disposta a mudar a forma de agir", 
                "Quer uma relação melhor com seu filho"
              ].map((t, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-warm-text/80 items-start">
                  <Check className="w-5 h-5 text-green-500 shrink-0" /> <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-12 bg-red-50">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 md:mb-8 flex items-center gap-3 text-red-950">
              <XIcon className="w-6 h-6 md:w-8 md:h-8 text-red-600" /> Não é para você se...
            </h3>
            <ul className="space-y-4">
              {[
                "Acha que o filho vai mudar sozinho", 
                "Quer uma solução mágica sem mudar nada", 
                "Não está disposta a questionar seus padrões"
              ].map((t, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-red-950 font-medium items-start">
                  <X className="w-5 h-5 text-red-600 shrink-0" /> <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <CTAButton className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}

// ---------------------------
// 6. AUTORIDADE
// ---------------------------
function AuthoritySection() {
  return (
    <section className="py-16 md:py-24 px-5 bg-warm-bg border-t border-b border-warm-text/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20">
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-warm-text/5 relative">
            <img 
              src="https://i.postimg.cc/TY20fTtz/DAPHNE-LUCCHESI-BOSS-(8).webp" 
              alt="Dáphne Lucchesi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-warm-cta font-medium uppercase tracking-wider text-xs md:text-sm mb-3 md:mb-4 block">Quem criou o método</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-balance">Daphne Lucchesi</h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-warm-text/80 font-light leading-relaxed">
            <p>
              Pedagoga · Especialista em Neurociência e Inteligência Emocional · Mãe de três filhas.
            </p>
            <p>
              Daphne deixou a sala de aula para se dedicar ao que mais importa: a saúde mental das mães e a criação dos filhos com base na educação respeitosa.
            </p>
            <p>
              Ela não vende teoria. Vende o que viveu, estudou e aplicou com suas próprias filhas e depois ensinou para milhares de outras mães.
            </p>
            <p>
              É a prova de que é possível sair da maternidade de exaustão e entrar na maternidade presente.
            </p>
          </div>
          
          <CTAButton className="mt-10 md:mt-12 md:justify-start" />
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// 7. DEPOIMENTOS
// ---------------------------
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mãe aluna do Método MIE",
      videoId: "_bHhsar4wic"
    },
    {
      name: "Mãe aluna do Método MIE",
      videoId: "UMq4mopoQ88"
    },
    {
      name: "Mãe aluna do Método MIE",
      videoId: "egYcOblj4II"
    },
    {
      name: "Mãe aluna do Método MIE",
      videoId: "4-vXdq0WtEc"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 md:mb-16 text-balance">
          Resultados reais de quem aplica o método
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-warm-bg/30 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center p-4"
            >
              <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black/10 relative shadow-inner">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${test.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <div className="mt-4 font-semibold text-warm-text text-center text-sm md:text-base">{test.name}</div>
            </motion.div>
          ))}
        </div>

        <CTAButton className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}

// ---------------------------
// 8. CTA FINAL (Virada de Chave)
// ---------------------------
function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 px-5 bg-warm-text text-white relative text-center overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl text-warm-text">
        <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold mb-4 text-balance tracking-tight leading-tight">
          Hoje você decide sair do ciclo de exaustão
        </h2>
        
        <p className="text-base md:text-lg text-warm-text/70 mb-10 text-balance">
          Tenha acesso a todo o método, bônus e acompanhamento.
        </p>

        <div className="bg-warm-bg/50 rounded-[1.5rem] p-8 md:p-10 mb-10 border border-warm-text/5 text-center max-w-2xl mx-auto">
          <div className="text-warm-text/60 text-xs md:text-sm mb-2 font-medium">Investimento:</div>
          <div className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            12x R$ 99,92
          </div>
          <div className="text-warm-text/60 text-sm md:text-base font-medium">
            ou R$ 997,00 à vista
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <motion.a
            href="https://pay.hotmart.com/D98669955Q?off=rjq2k9zs&bid=1777993356404"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-warm-cta hover:bg-warm-cta-hover text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-xl shadow-warm-cta/30 transition-all duration-300 w-full md:w-auto inline-block text-center"
          >
            Quero o Método MIE agora
          </motion.a>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-warm-text/70 font-medium">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-warm-cta" /> Pagamento seguro</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-warm-cta" /> Acesso imediato</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-warm-cta" /> Garantia de 7 dias</span>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-warm-cta/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-warm-cta/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}

// ---------------------------
// 9. FAQ
// ---------------------------
function FAQSection() {
  const faqs = [
    {
      q: "Funciona para filhos de qual idade?",
      a: "O método foi desenvolvido especialmente para crianças e adolescentes, de 2 a 18 anos. Durante o acompanhamento, a Daphne orienta de acordo com a realidade do seu filho."
    },
    {
      q: "Quanto tempo vou precisar dedicar por dia?",
      a: "O método foi pensado para mães que já não têm tempo sobrando. As aulas são curtas e práticas. O que você vai aprender não exige mais tempo, exige mudar a forma de usar o tempo que você já tem."
    },
    {
      q: "Funciona mesmo se meu filho for muito agitado ou resistente?",
      a: "Especialmente nesses casos. O método foi criado exatamente para situações onde o 'não' não funciona, onde a criança negocia tudo e onde o grito virou a única ferramenta que parece dar resultado."
    },
    {
      q: "E se eu tentar e não funcionar para mim?",
      a: "Você tem 7 dias de garantia incondicional. Se sentir que não é para você, devolve o dinheiro sem perguntas. Sem burocracia."
    },
    {
      q: "O acesso é para sempre?",
      a: "Você terá acesso a todo o conteúdo gravado + aulas ao vivo por 1 ano completo a partir da sua compra."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-warm-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 text-balance">
          Dúvidas frequentes
        </h2>
        <p className="text-center text-warm-text/70 mb-10 md:mb-16 text-lg md:text-xl font-medium">
          O que as mães costumam perguntar
        </p>
        
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <CTAButton className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-warm-text/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 md:px-6 md:py-5 flex justify-between items-center text-left focus:outline-none focus-visible:bg-warm-text/5"
      >
        <span className="font-semibold text-base md:text-lg pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-warm-cta shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-warm-cta shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-warm-text/70 leading-relaxed font-light border-t border-warm-text/5 pt-3 md:pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------
// FOOTER
// ---------------------------
function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-white text-center text-warm-text/50 text-xs md:text-sm px-5">
      <p>&copy; {new Date().getFullYear()} Dáphne Lucchesi. Todos os direitos reservados.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-6">
        <a href="#" className="hover:text-warm-cta transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-warm-cta transition-colors">Política de Privacidade</a>
      </div>
    </footer>
  );
}

// ---------------------------
// REUSABLE CTA
// ---------------------------
function CTAButton({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center w-full ${className}`}>
      <motion.a
        href="https://pay.hotmart.com/D98669955Q?off=rjq2k9zs&bid=1777993356404"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-warm-cta hover:bg-warm-cta-hover text-white px-6 py-4 md:px-8 md:py-5 rounded-full text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto block sm:inline-block text-center"
      >
        QUERO TRANSFORMAR MINHA ROTINA AGORA
      </motion.a>
    </div>
  );
}
