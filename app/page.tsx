import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';

const bookingUrl = 'https://linktr.ee/dragiovannabenavides';
const instagramUrl = 'https://www.instagram.com/dragiovannabenavides/';

const treatments = [
  {
    number: '01',
    name: 'Signature Face™',
    label: 'Método autoral',
    description: 'Uma leitura global da face para criar um plano que respeita proporções, movimento e identidade.',
  },
  {
    number: '02',
    name: 'Toxina botulínica',
    label: 'Expressão preservada',
    description: 'Suavidade estratégica para linhas de expressão, mantendo leveza e comunicação no olhar.',
  },
  {
    number: '03',
    name: 'Preenchimento labial',
    label: 'Contorno & hidratação',
    description: 'Desenho labial personalizado para valorizar forma, proporção e naturalidade em cada perfil.',
  },
  {
    number: '04',
    name: 'Contorno facial',
    label: 'Precisão de perfil',
    description: 'Pontos de luz e estrutura planejados para equilibrar ângulos sem apagar os seus traços.',
  },
  {
    number: '05',
    name: 'Ultraformer MPT',
    label: 'Tecnologia',
    description: 'Ultrassom micro e macrofocado dentro de um protocolo individual de firmeza e estímulo de colágeno.',
  },
];

const results = [
  { src: '/resultado-perfil.webp', alt: 'Comparativo de perfil após plano de harmonização facial', label: 'Perfil & proporção' },
  { src: '/resultado-nariz.webp', alt: 'Comparativo de resultado em perfil nasal', label: 'Detalhe & equilíbrio' },
  { src: '/resultado-signature.webp', alt: 'Comparativo facial do Método Signature Face', label: 'Signature Face™' },
];

const faqs = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'Começamos com uma conversa sobre o que você percebe e o que deseja preservar. Em seguida, faço uma análise facial completa e apresento um plano de tratamento individual — com prioridades, possibilidades e limites claros.',
  },
  {
    question: 'O resultado pode ficar natural?',
    answer: 'Naturalidade é o ponto de partida do meu trabalho. A técnica, a quantidade e o tempo de cada etapa são definidos de acordo com a sua anatomia, expressão e objetivo, sem fórmulas prontas.',
  },
  {
    question: 'Quanto tempo duram os resultados?',
    answer: 'A duração varia conforme o procedimento, o produto, o metabolismo e os hábitos de cada pessoa. Essa expectativa é explicada de forma individual durante a avaliação.',
  },
  {
    question: 'Onde são realizados os atendimentos?',
    answer: 'Os atendimentos acontecem em São Paulo. Ao solicitar seu agendamento, você recebe as informações de local, horários disponíveis e preparo, quando necessário.',
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Dra. Giovanna Benavides — início">
          <span className="brand-mark" aria-hidden="true">GB</span>
          <span className="brand-copy">
            <strong>Giovanna Benavides</strong>
            <small>Face Design</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#metodo">O método</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#sobre">A doutora</a>
        </nav>
        <a className="header-cta" href={bookingUrl} target="_blank" rel="noreferrer">
          Agendar consulta <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <div id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Face design com foco em naturalidade</p>
            <h1>Seu rosto.<br /><em>Sua assinatura.</em></h1>
            <p className="hero-lead">
              Uma estética que não transforma quem você é — apenas revela a sua versão mais segura,
              harmônica e singular.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                Quero minha avaliação <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#metodo">Conheça o método <ArrowDown aria-hidden="true" /></a>
            </div>
            <div className="hero-signature">
              <span>Signature Face™</span>
              <small>Método autoral</small>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <Image
                className="hero-photo hero-photo-desktop"
                src="/hero-dra-desktop.webp"
                alt="Dra. Giovanna Benavides em seu consultório"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 48vw"
              />
              <Image
                className="hero-photo hero-photo-mobile"
                src="/hero-dra-desktop.webp"
                alt=""
                aria-hidden="true"
                fill
                sizes="100vw"
              />
            </div>
            <div className="hero-orbit" aria-hidden="true"><span>01</span><i /></div>
            <p className="hero-caption">São Paulo · Brasil<br />CROSP 169986</p>
          </div>
        </section>

        <section className="method section-shell" id="metodo">
          <div className="section-index">
            <span>01</span><i />
            <small>Filosofia</small>
          </div>
          <div className="method-intro">
            <p className="section-kicker">O Método Signature Face™</p>
            <h2>Harmonia que nasce<br />da <em>escuta.</em></h2>
          </div>
          <div className="method-copy">
            <p className="method-lead">Não existe um rosto ideal.<br />Existe o seu rosto, bem compreendido.</p>
            <p>
              Antes de qualquer procedimento, existe uma leitura: de proporções, movimento,
              personalidade e intenção. O Signature Face™ organiza essa visão em um plano autoral,
              construído para valorizar — nunca padronizar.
            </p>
          </div>

          <div className="method-visual">
            <Image
              src="/giovanna-procedimento.webp"
              alt="Dra. Giovanna acompanhando um procedimento de harmonização orofacial"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="method-badge"><span>360°</span><small>Leitura facial</small></div>
          </div>

          <div className="method-steps" aria-label="Etapas do método">
            <article>
              <span>01</span>
              <h3>Escuta</h3>
              <p>Entender o que você sente, deseja e quer preservar.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Leitura</h3>
              <p>Observar a face em repouso, movimento e diferentes ângulos.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Assinatura</h3>
              <p>Construir um plano coerente com a sua identidade e o seu tempo.</p>
            </article>
          </div>
        </section>

        <section className="treatments" id="tratamentos">
          <div className="treatments-head section-shell">
            <div className="section-index light">
              <span>02</span><i />
              <small>Possibilidades</small>
            </div>
            <div>
              <p className="section-kicker">Tratamentos</p>
              <h2>Um plano.<br /><em>Não uma prateleira.</em></h2>
            </div>
            <p className="treatments-intro">
              Procedimentos são ferramentas. A indicação certa nasce da avaliação do conjunto —
              e pode combinar técnicas em diferentes momentos.
            </p>
          </div>

          <div className="treatment-list section-shell">
            {treatments.map((treatment) => (
              <article className="treatment-row" key={treatment.number}>
                <span className="treatment-number">{treatment.number}</span>
                <div>
                  <p>{treatment.label}</p>
                  <h3>{treatment.name}</h3>
                </div>
                <p className="treatment-description">{treatment.description}</p>
                <span className="treatment-arrow" aria-hidden="true"><ArrowUpRight /></span>
              </article>
            ))}
          </div>
          <div className="treatments-foot section-shell">
            <p>Todo procedimento depende de avaliação clínica individual.</p>
            <a href={bookingUrl} target="_blank" rel="noreferrer">Descobrir meu plano <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="results section-shell" id="resultados">
          <div className="results-heading">
            <div className="section-index">
              <span>03</span><i />
              <small>Resultados</small>
            </div>
            <div>
              <p className="section-kicker">Antes & depois</p>
              <h2>Resultados que<br /><em>sussurram.</em></h2>
            </div>
            <p>O detalhe que ninguém sabe explicar — mas todo mundo percebe.</p>
          </div>

          <div className="results-grid">
            {results.map((result, index) => (
              <figure className={`result-card result-card-${index + 1}`} key={result.src}>
                <div>
                  <Image src={result.src} alt={result.alt} fill sizes="(max-width: 700px) 100vw, 38vw" />
                </div>
                <figcaption><span>0{index + 1}</span>{result.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="results-note">Imagens de casos reais. Os resultados são individuais e podem variar de pessoa para pessoa.</p>
        </section>

        <section className="editorial-quote">
          <div className="quote-photo">
            <Image
              src="/giovanna-hero.webp"
              alt="Dra. Giovanna Benavides em seu consultório"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="quote-copy">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>Técnica só faz sentido<br />quando respeita<br /><em>a sua identidade.</em></blockquote>
            <p>Dra. Giovanna Benavides</p>
          </div>
        </section>

        <section className="about section-shell" id="sobre">
          <div className="section-index">
            <span>04</span><i />
            <small>A doutora</small>
          </div>
          <div className="about-title">
            <p className="section-kicker">Dra. Giovanna Benavides</p>
            <h2>Ciência no olhar.<br /><em>Sensibilidade nas mãos.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              Cirurgiã-dentista com atuação em harmonização orofacial e criadora do Método
              Signature Face™, Giovanna conduz cada atendimento com uma ideia simples:
              a estética mais sofisticada é aquela que continua parecendo sua.
            </p>
            <p>
              Seu trabalho une análise facial, planejamento cuidadoso e uma linguagem estética
              contemporânea — sempre com foco em naturalidade, proporção e decisões compartilhadas.
            </p>
            <div className="about-credentials">
              <span><strong>CROSP</strong> 169986</span>
              <span><strong>Atendimento</strong> São Paulo</span>
              <span><strong>Foco</strong> Naturalidade</span>
            </div>
          </div>
          <a className="about-link" href={instagramUrl} target="_blank" rel="noreferrer">
            Acompanhar no Instagram <ArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <section className="faq section-shell" id="duvidas">
          <div className="faq-title">
            <p className="section-kicker">Antes da sua consulta</p>
            <h2>Boas decisões<br />começam com <em>clareza.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary><span>0{index + 1}</span>{faq.question}<Plus aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <p className="section-kicker">Sua jornada começa aqui</p>
          <h2>Pronta para reconhecer<br /><em>a sua melhor versão?</em></h2>
          <p>Uma consulta. Uma leitura completa. Um plano com a sua assinatura.</p>
          <a className="button-light" href={bookingUrl} target="_blank" rel="noreferrer">
            Agendar minha avaliação <ArrowUpRight aria-hidden="true" />
          </a>
          <span className="cta-monogram" aria-hidden="true">GB</span>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">GB</span>
          <div><strong>Dra. Giovanna Benavides</strong><small>Face Design · CROSP 169986</small></div>
        </div>
        <div className="footer-links">
          <a href="#metodo">O método</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#resultados">Resultados</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="footer-contact">
          <p>São Paulo · Brasil</p>
          <a href={bookingUrl} target="_blank" rel="noreferrer">Agendar consulta <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <p className="footer-legal">© 2026 Dra. Giovanna Benavides. Conteúdo informativo; não substitui avaliação profissional.</p>
      </footer>

      <a className="mobile-booking" href={bookingUrl} target="_blank" rel="noreferrer">
        Agendar avaliação <ArrowUpRight aria-hidden="true" />
      </a>
    </main>
  );
}
