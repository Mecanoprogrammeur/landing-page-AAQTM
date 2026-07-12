const { useState, useEffect, useRef } = React;

// Simple components for custom SVGs to replace Lucide React for perfect reliability without CDN fetch lag.
const ShieldAlert = () => (
  <svg className="w-6 h-6 text-champagne" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const Heart = ({ className = "w-6 h-6" }) => (
  <svg className={`${className} text-champagne`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const CheckCircle = () => (
  <svg className="w-5 h-5 text-champagne flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const Sparkles = () => (
  <svg className="w-6 h-6 text-champagne" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  // Monitor scroll for Navbar transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main Page CTA link
  const checkoutUrl = "https://wbamapto.mychariow.online/prd_bfz1xz9g";

  return (
    <div className="relative min-h-screen bg-obsidienne text-ivoire">
      {/* A. NAVBAR — "L'Île Flottante" */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-full border transition-all duration-500 ease-out flex items-center justify-between px-6 py-3 ${
        isScrolled 
          ? "bg-obsidienne/80 backdrop-blur-xl border-ardoise/20 shadow-lg shadow-black/40" 
          : "bg-transparent border-transparent"
      }`}>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-champagne" />
          <span className="font-serif italic font-bold tracking-wider text-champagne text-lg">Rêvothèque</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#hero" className="hover:text-champagne transition-colors hover-lift">Le Guide</a>
          <a href="#features" className="hover:text-champagne transition-colors hover-lift">Pourquoi ?</a>
          <a href="#manifeste" className="hover:text-champagne transition-colors hover-lift">Notre Vision</a>
          <a href="#protocol" className="hover:text-champagne transition-colors hover-lift">Méthode</a>
          <a href="#pricing" className="hover:text-champagne transition-colors hover-lift">Offre</a>
        </div>
        <a 
          href={checkoutUrl}
          className="bg-champagne text-obsidienne font-semibold px-5 py-2 rounded-full text-xs uppercase tracking-wider btn-magnetic overflow-hidden relative shadow-md shadow-champagne/10 hover:shadow-champagne/20"
        >
          Acheter
        </a>
      </nav>

      {/* B. HERO SECTION — "Le Plan d'Ouverture" */}
      <header id="hero" ref={heroRef} className="relative h-screen w-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 overflow-hidden">
        {/* Background Image with Deep Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidienne via-obsidienne/60 to-obsidienne/20 z-10"></div>
        <div className="absolute inset-0 bg-radial-gradient z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl select-none hero-content">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20 text-champagne text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse"></span>
            Ebook Premium & Bonus inclus
          </div>
          <h1 className="leading-[1.1] mb-8">
            <span className="block text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-ivoire">
              L'amour véritable rencontre
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl font-serif italic text-champagne leading-none mt-2">
              La clarté.
            </span>
          </h1>
          <p className="text-ardoise-200 text-base md:text-xl max-w-2xl mb-8 leading-relaxed text-ivoire/85">
            Le guide ultime pour briser les schémas amoureux qui vous font souffrir, guérir vos blessures invisibles et construire enfin une relation saine, équilibrée et durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={checkoutUrl}
              className="group bg-champagne hover:bg-champagne/90 text-obsidienne font-bold px-8 py-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl shadow-champagne/10 hover:shadow-champagne/20"
            >
              <span>Télécharger l'ebook pour 6 999 FCFA</span>
              <ArrowRight />
            </a>
            <a 
              href="#features" 
              className="px-8 py-4 rounded-2xl border border-ivoire/20 text-ivoire font-semibold bg-obsidienne/40 backdrop-blur-sm hover:bg-obsidienne/80 transition-colors flex items-center justify-center"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </header>

      {/* GSAP Hero Animation Hook */}
      <HeroAnimation />

      {/* Quick intro: "Tu mérites un amour..." */}
      <section className="bg-obsidienne py-24 px-6 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center"><Heart className="w-10 h-10 text-champagne animate-pulse" /></div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
            Tu mérites un amour qui te <span className="font-serif italic text-champagne">choisit vraiment</span>.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left text-ivoire/80 text-base leading-relaxed">
            <div className="space-y-6">
              <p>Tu en as assez de retomber constamment sur les mêmes profils de personnes ? De tout donner sans jamais recevoir l'attention et le respect que tu mérites en retour ?</p>
              <p>Tu vois tes relations démarrer avec beaucoup d'espoir et d'intensité... pour finalement s'éteindre dans la même douleur lancinante.</p>
            </div>
            <div className="space-y-6">
              <p>Et si le problème n'était pas que tu attires les mauvaises personnes... Mais que certaines blessures invisibles du passé influencent inconsciemment les partenaires que tu choisis d'aimer ?</p>
              <p className="border-l-2 border-champagne/50 pl-4 italic text-ivoire font-medium">
                La bonne nouvelle, c'est que ces schémas ne sont pas une fatalité. Ils peuvent être compris, guéris et remplacés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C. FONCTIONNALITES — "Artefacts Fonctionnels Interactifs" */}
      <section id="features" className="py-24 px-6 bg-sombreCard/40 border-y border-ardoise/20 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-champagne font-mono mb-4">Fonctionnalités Interactives</h2>
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans">
              3 Piliers de <span className="font-serif italic text-champagne">Régénération</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* CARD 1 — "Mélangeur Diagnostique" */}
            <div className="bg-obsidienne/80 border border-ardoise/20 rounded-[2rem] p-8 flex flex-col justify-between min-h-[480px] hover:border-champagne/30 transition-colors">
              <div>
                <div className="p-3 bg-champagne/5 w-fit rounded-2xl mb-6 border border-champagne/10">
                  <ShieldAlert />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2">1. Briser les Schémas Répétitifs</h3>
                <p className="text-sm text-ivoire/60 leading-relaxed mb-8">
                  Décelez les blocages inconscients qui sabotent vos relations amoureuses.
                </p>
              </div>
              
              {/* Stacked Cards Mixer */}
              <DiagnosticMixer />
            </div>

            {/* CARD 2 — "Machine à Écrire Télémétrie" */}
            <div className="bg-obsidienne/80 border border-ardoise/20 rounded-[2rem] p-8 flex flex-col justify-between min-h-[480px] hover:border-champagne/30 transition-colors">
              <div>
                <div className="p-3 bg-champagne/5 w-fit rounded-2xl mb-6 border border-champagne/10">
                  <Sparkles />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2">2. Guérir & Reconstruire l'Estime</h3>
                <p className="text-sm text-ivoire/60 leading-relaxed mb-8">
                  Identifiez vos propres forces intérieures pour stabiliser votre confiance relationnelle.
                </p>
              </div>

              {/* Monospace Typewriter Console */}
              <TelemetryConsole />
            </div>

            {/* CARD 3 — "Planificateur Protocole Curseur" */}
            <div className="bg-obsidienne/80 border border-ardoise/20 rounded-[2rem] p-8 flex flex-col justify-between min-h-[480px] hover:border-champagne/30 transition-colors">
              <div>
                <div className="p-3 bg-champagne/5 w-fit rounded-2xl mb-6 border border-champagne/10">
                  <svg className="w-6 h-6 text-champagne" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2">3. Fixer des Limites & Flags</h3>
                <p className="text-sm text-ivoire/60 leading-relaxed mb-8">
                  Reconnaissez immédiatement les Red & Green Flags avant de vous attacher.
                </p>
              </div>

              {/* Cursor Protocol Scheduler Grid */}
              <CursorProtocolScheduler />
            </div>
          </div>
        </div>
      </section>

      {/* D. PHILOSOPHIE — "Le Manifeste" */}
      <section id="manifeste" className="relative min-h-[70vh] flex items-center py-32 px-6 overflow-hidden bg-obsidienne">
        {/* Parallax texture background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidienne via-transparent to-obsidienne z-10"></div>

        <div className="max-w-5xl mx-auto relative z-20 text-left space-y-12">
          <p className="text-xs uppercase tracking-widest text-champagne font-mono">Le Manifeste</p>
          <div className="space-y-8">
            <p className="text-xl md:text-3xl text-ivoire/60 leading-relaxed max-w-3xl">
              La plupart des guides de développement personnel se concentrent sur : <span className="text-ivoire font-semibold">des conseils de séduction éphémères et des règles de jeu superficielles</span>.
            </p>
            <hr className="border-ardoise/20 w-32" />
            <p className="text-3xl md:text-6xl font-extrabold tracking-tight text-ivoire leading-tight">
              Nous nous concentrons sur : <span className="font-serif italic text-champagne block mt-4">la guérison de vos blessures intérieures pour vous ouvrir à un amour authentique et durable.</span>
            </p>
          </div>
        </div>
      </section>

      {/* E. PROTOCOLE — "Archive Empilée Sticky" */}
      <section id="protocol" className="relative z-30">
        <StickyCardStack />
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-24 px-6 bg-sombreCard/30 border-y border-ardoise/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-champagne font-mono mb-4">Programme de Transformation</h2>
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight">Ce que vous allez apprendre</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Comprendre pourquoi vous attirez toujours les mêmes schémas amoureux et comment briser ce cycle.",
              "Identifier les croyances invisibles et les mémoires d'enfance qui sabotent vos relations actuelles.",
              "Découvrir votre profil d'attachement grâce à notre quiz exclusif inclus dans le guide.",
              "Développer une confiance naturelle qui attire sans avoir besoin de jouer un rôle ou de forcer.",
              "Reconnaître immédiatement les Red Flags chez un partenaire potentiel avant qu'il ne soit trop tard.",
              "Identifier les Green Flags indispensables qui révèlent une relation saine et sécurisante.",
              "Utiliser la célèbre méthode scientifique des 36 questions pour créer une connexion authentique.",
              "Définir des standards relationnels inébranlables pour ne plus jamais accepter moins que ce que vous méritez."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-obsidienne/60 border border-ardoise/10 hover:border-champagne/20 transition-all">
                <CheckCircle />
                <p className="text-sm md:text-base text-ivoire/80 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK COVERS & BONUS PRESENTATION */}
      <section className="py-24 px-6 bg-obsidienne">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-champagne font-mono mb-4">Le Pack Complet</h2>
            <p className="text-3xl md:text-5xl font-extrabold tracking-tight">Le Guide & 2 Bonus Offerts</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Cover image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm rounded-[2rem] overflow-hidden shadow-2xl shadow-black/80 border border-ardoise/20">
                <img 
                  src="./assets/cover.jpg" 
                  alt="Attirer l'Amour que tu Mérites Ebook Cover" 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidienne via-transparent to-transparent opacity-40"></div>
              </div>
            </div>

            {/* Pack contents column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Product 1: The Ebook */}
              <div className="p-6 rounded-[2rem] bg-sombreCard/60 border border-ardoise/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-champagne/10 text-champagne px-3 py-1 rounded-full text-xs font-mono">LIVRE PRINCIPAL</div>
                  <h3 className="text-lg font-bold">L'Ebook Premium "Attirer l'Amour que Tu Mérites"</h3>
                </div>
                <p className="text-sm text-ivoire/70 leading-relaxed">
                  Votre feuille de route pas à pas pour guérir des blessures passées. Un format digital compatible avec tous vos appareils (smartphone, tablette, ordinateur) pour lire où vous voulez.
                </p>
              </div>

              {/* Bonus 1 */}
              <div className="p-6 rounded-[2rem] bg-sombreCard/60 border border-ardoise/20 relative overflow-hidden">
                <div className="absolute right-4 top-4 bg-champagne text-obsidienne text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">Offert</div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-champagne/10 text-champagne px-3 py-1 rounded-full text-xs font-mono">BONUS PREMIUM 1</div>
                  <h3 className="text-lg font-bold">Le Carnet de Transformation (30 Jours)</h3>
                </div>
                <p className="text-sm text-ivoire/70 leading-relaxed mb-2">
                  La transformation vient de l'action. Ce carnet de bord interactif vous guide pas à pas pendant un mois avec des exercices d'écriture guidée, de réflexion émotionnelle et d'affirmation pour ancrer de nouvelles habitudes.
                </p>
                <span className="text-xs text-champagne font-semibold font-mono">Valeur habituelle : 9 999 FCFA</span>
              </div>

              {/* Bonus 2 */}
              <div className="p-6 rounded-[2rem] bg-sombreCard/60 border border-ardoise/20 relative overflow-hidden">
                <div className="absolute right-4 top-4 bg-champagne text-obsidienne text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">Offert</div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-champagne/10 text-champagne px-3 py-1 rounded-full text-xs font-mono">BONUS PREMIUM 2</div>
                  <h3 className="text-lg font-bold">La Checklist Exclusive</h3>
                </div>
                <p className="text-sm text-ivoire/70 leading-relaxed mb-2">
                  "Suis-je prête pour une relation saine ?" Une auto-évaluation complète et révélatrice pour identifier instantanément vos points forts relationnels et vos axes de guérison avant de vous lancer.
                </p>
                <span className="text-xs text-champagne font-semibold font-mono">Valeur habituelle : 4 999 FCFA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. ADHESION / TARIFICATION — "Offre de Lancement" */}
      <section id="pricing" className="py-28 px-6 bg-sombreCard/40 border-t border-ardoise/20 relative z-30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-1 bg-champagne/5 rounded-full border border-champagne/20 mb-6">
            <span className="bg-champagne text-obsidienne text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Offre Spéciale de Lancement</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            Investir dans ton <span className="font-serif italic text-champagne">futur amoureux</span>
          </h2>
          
          {/* Main Pricing Box */}
          <div className="bg-obsidienne border border-champagne/30 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-champagne/5 relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-champagne/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-champagne/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="text-ardoise/80 line-through text-lg font-bold mb-1">14 999 FCFA</div>
              <div className="text-champagne font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">6 999 FCFA</div>
              
              <ul className="space-y-4 text-left max-w-md mx-auto mb-10 text-ivoire/85">
                <li className="flex items-center gap-3"><CheckCircle /> <span>Ebook Premium Complet "Attirer l'Amour que tu Mérites"</span></li>
                <li className="flex items-center gap-3"><CheckCircle /> <span>Bonus 1 : Le Carnet de Transformation (30 jours)</span></li>
                <li className="flex items-center gap-3"><CheckCircle /> <span>Bonus 2 : La Checklist Exclusive d'Auto-Évaluation</span></li>
                <li className="flex items-center gap-3"><CheckCircle /> <span>Téléchargement immédiat et accès à vie</span></li>
                <li className="flex items-center gap-3"><CheckCircle /> <span>Compatible smartphone, liseuse, tablette & PC</span></li>
              </ul>

              <a 
                href={checkoutUrl}
                className="group w-full max-w-md bg-champagne hover:bg-champagne/90 text-obsidienne font-bold py-5 rounded-2xl flex items-center justify-center transition-all duration-300 text-lg shadow-xl shadow-champagne/10 hover:shadow-champagne/20"
              >
                <span>Télécharger l'ebook pour 6 999 FCFA</span>
                <ArrowRight />
              </a>

              <p className="text-xs text-ivoire/40 mt-4 flex items-center gap-2 justify-center">
                <svg className="w-4 h-4 text-champagne" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Paiement 100% sécurisé via Chariow
              </p>
            </div>
          </div>

          <div className="mt-16 text-center text-ivoire/60 max-w-xl mx-auto space-y-6 text-sm">
            <p>
              Continuer à espérer que la prochaine relation sera différente... Ou comprendre enfin pourquoi les précédentes n'ont pas fonctionné afin de ne plus jamais répéter les mêmes erreurs ?
            </p>
            <p className="font-semibold text-champagne italic">
              L'amour que tu recherches commence par la meilleure compréhension de toi-même.
            </p>
          </div>
        </div>
      </section>

      {/* G. PIED DE PAGE */}
      <footer className="bg-sombreCard rounded-t-[4rem] pt-20 pb-10 px-6 border-t border-ardoise/20 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-champagne" />
                <span className="font-serif italic font-bold tracking-wider text-champagne text-xl">Rêvothèque</span>
              </div>
              <p className="text-sm text-ivoire/65 max-w-sm leading-relaxed">
                Des ebooks inspirants en développement personnel et relations humaines pour éclairer votre quotidien et transformer vos connexions en un clic.
              </p>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-champagne font-mono">Découvrir</h4>
                <ul className="space-y-2 text-sm text-ivoire/60">
                  <li><a href="#hero" className="hover:text-champagne transition-colors">Le Guide</a></li>
                  <li><a href="#features" className="hover:text-champagne transition-colors">Fonctionnalités</a></li>
                  <li><a href="#protocol" className="hover:text-champagne transition-colors">Notre Méthode</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-champagne font-mono">Boutique</h4>
                <ul className="space-y-2 text-sm text-ivoire/60">
                  <li><a href={checkoutUrl} className="hover:text-champagne transition-colors">Chariow Checkout</a></li>
                  <li><a href="#pricing" className="hover:text-champagne transition-colors">Offre de Lancement</a></li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1 space-y-4">
                <h4 className="text-xs uppercase tracking-wider text-champagne font-mono">Réseaux</h4>
                <ul className="space-y-2 text-sm text-ivoire/60">
                  <li><a href="#" className="hover:text-champagne transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-champagne transition-colors">TikTok</a></li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-ardoise/10 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-ivoire/40">
              © {new Date().getFullYear()} Rêvothèque. Tous droits réservés.
            </p>
            
            {/* Status Pulse */}
            <div className="flex items-center gap-2 bg-obsidienne/60 border border-ardoise/20 px-3.5 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">Système Opérationnel</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ----------------------------------------------------
// Sub-Components for Interactive Widgets & GSAP
// ----------------------------------------------------

/**
 * GSAP Hero Entry Animation Trigger Component
 */
function HeroAnimation() {
  useEffect(() => {
    // GSAP context standard lifecycle
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      // Animate Hero Text and CTAs
      tl.fromTo(".hero-content > *", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, delay: 0.2 }
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}

/**
 * Card 1: DiagnosticMixer Component
 * Cyling vertical deck of relation schemas.
 */
function DiagnosticMixer() {
  const originalCards = [
    {
      id: "sauveur",
      title: "Le Sauveur",
      desc: "Tout donner pour réparer ou sauver l'autre, en oubliant totalement ses propres besoins fondamentaux.",
      color: "border-red-500/20 bg-[#1D1315]"
    },
    {
      id: "anxieux",
      title: "L'Anxieux",
      desc: "Peur panique de l'abandon qui pousse à fusionner trop vite et à accepter des comportements toxiques.",
      color: "border-amber-500/20 bg-[#1E1914]"
    },
    {
      id: "evitant",
      title: "L'Évitant",
      desc: "Attirer des partenaires émotionnellement indisponibles pour justifier inconsciemment sa propre peur de l'intimité.",
      color: "border-purple-500/20 bg-[#17131D]"
    }
  ];

  const [cards, setCards] = useState(originalCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-60 w-full flex items-center justify-center overflow-hidden">
      {cards.map((card, index) => {
        // Compute stacked styles
        let translateY = index * 24; // 0px, 24px, 48px
        let scale = 1 - index * 0.05; // 1, 0.95, 0.9
        let opacity = index === 0 ? 1 : index === 1 ? 0.75 : 0.4;
        let zIndex = 30 - index * 10; // 30, 20, 10

        return (
          <div
            key={card.id}
            className={`absolute w-[95%] p-5 rounded-2xl border text-left shadow-lg ${card.color}`}
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              opacity: opacity,
              zIndex: zIndex,
              transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease, z-index 0.8s step-end"
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-champagne"></span>
              <h4 className="text-sm font-bold text-champagne tracking-wide uppercase font-mono">{card.title}</h4>
            </div>
            <p className="text-xs leading-relaxed text-ivoire/80 font-sans">
              {card.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Card 2: TelemetryConsole Component
 * Monospace typing effect for telemetry diagnostics.
 */
function TelemetryConsole() {
  const logs = [
    "Vérification du profil... Blessures émotionnelles détectées.",
    "Traitement : Pacification de la peur de l'abandon en cours...",
    "Optimisation : Recharge de l'estime de soi stabilisée à [100%].",
    "Protocole actif : Prête à accueillir une relation équilibrée."
  ];

  const [currentText, setCurrentText] = useState("");
  const [logIndex, setLogIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = logs[logIndex];
    
    if (!isDeleting && charIndex < fullText.length) {
      // Type character
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 50);
    } else if (isDeleting && charIndex > 0) {
      // Delete character
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 25);
    } else if (charIndex === fullText.length && !isDeleting) {
      // Wait before deleting
      timer = setTimeout(() => setIsDeleting(true), 3500);
    } else if (charIndex === 0 && isDeleting) {
      // Move to next log
      setIsDeleting(false);
      setLogIndex(prev => (prev + 1) % logs.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, logIndex]);

  return (
    <div className="w-full bg-[#0D0D12]/90 border border-ardoise/20 rounded-2xl p-5 font-mono text-[11px] leading-relaxed text-emerald-400 space-y-4 shadow-inner">
      <div className="flex items-center justify-between border-b border-ardoise/10 pb-2">
        <span className="text-[10px] text-ivoire/40">console://revotheque.io</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[9px] uppercase tracking-wider text-emerald-500 font-bold">Flux en direct</span>
        </div>
      </div>
      <div className="h-28 space-y-2 flex flex-col justify-end">
        <div className="text-ivoire/40">&gt; initialisation_guerison_processus()</div>
        <div className="text-emerald-300">
          &gt; {currentText}
          <span className="inline-block w-1.5 h-3.5 bg-champagne ml-0.5 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}

/**
 * Card 3: CursorProtocolScheduler Component
 * Grid demonstrating a click protocol with cursor SVG.
 */
function CursorProtocolScheduler() {
  const days = [
    { label: "L", state: "normal" },
    { label: "M", state: "normal" },
    { label: "M", state: "normal" },
    { label: "J", state: "normal" },
    { label: "V", state: "active" }, // Target Day
    { label: "S", state: "normal" },
    { label: "D", state: "normal" }
  ];

  const [activeCell, setActiveCell] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [clickScale, setClickScale] = useState(1);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Complete simulated UI cycle using GSAP inside an infinite loop
    let ctx = gsap.context(() => {
      const runCycle = () => {
        // Reset states
        setActiveCell(false);
        setIsSaved(false);
        setClickScale(1);

        const tl = gsap.timeline({ 
          onComplete: () => {
            setTimeout(runCycle, 2000); // restart cycle
          } 
        });

        // 1. Move cursor to Friday (index 4)
        tl.to(cursorRef.current, {
          x: 95,
          y: 40,
          duration: 1.5,
          ease: "power2.inOut"
        });

        // 2. Click effect
        tl.to(cursorRef.current, {
          scale: 0.8,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            setActiveCell(true);
            setClickScale(0.95);
            setTimeout(() => setClickScale(1), 150);
          }
        });

        // 3. Move cursor to "Save" Button
        tl.to(cursorRef.current, {
          x: 120,
          y: 110,
          duration: 1.2,
          ease: "power2.inOut",
          delay: 0.5
        });

        // 4. Click Save
        tl.to(cursorRef.current, {
          scale: 0.8,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            setIsSaved(true);
          }
        });

        // 5. Move cursor out of view
        tl.to(cursorRef.current, {
          x: 260,
          y: 160,
          duration: 1,
          ease: "power2.in",
          delay: 1
        });
      };

      runCycle();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#0D0D12]/90 border border-ardoise/20 rounded-2xl p-5 overflow-hidden shadow-inner h-44 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-ardoise/10 pb-2">
        <span className="text-[10px] text-ivoire/40">protocole://limites_saines</span>
        <span className="text-[9px] uppercase tracking-wider text-champagne font-bold">V-Green Flag</span>
      </div>

      <div 
        className="grid grid-cols-7 gap-2 my-2 transition-transform duration-150"
        style={{ transform: `scale(${clickScale})` }}
      >
        {days.map((day, i) => {
          const isActive = day.state === "active" && activeCell;
          return (
            <div
              key={i}
              className={`h-10 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold transition-all duration-500 border ${
                isActive
                  ? "bg-champagne text-obsidienne border-champagne"
                  : "bg-sombreCard/60 border-ardoise/20 text-ivoire/40"
              }`}
            >
              <span>{day.label}</span>
              {isActive && <span className="text-[7px] leading-none mt-0.5 text-obsidienne uppercase font-black font-sans">Oui</span>}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center gap-3">
        <div className="text-[9px] text-ivoire/50">Statut : {isSaved ? <span className="text-emerald-400 font-bold">Standards Enregistrés ✓</span> : <span>Configuration...</span>}</div>
        <button 
          className={`px-4 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-wider transition-colors font-sans border ${
            isSaved 
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" 
              : "bg-champagne/10 text-champagne border-champagne/20"
          }`}
        >
          Sauvegarder
        </button>
      </div>

      {/* Simulated Cursor SVG */}
      <svg
        ref={cursorRef}
        className="absolute w-5 h-5 z-40 pointer-events-none drop-shadow-md text-champagne"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{
          top: "10px",
          left: "10px",
          transformOrigin: "top left"
        }}
      >
        <path d="M4.5 3v15.2l3.8-3.8 2.6 6 2.3-1-2.6-6h5.4L4.5 3z" stroke="black" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * Card Stack Component (Section E)
 * Using standard CSS sticky positioning together with GSAP ScrollTrigger monitoring to update visual filters (scale, blur, opacity).
 * Fully functional and avoids code execution errors under complex scroll heights.
 */
function StickyCardStack() {
  const cards = [
    {
      step: "Étape 01",
      title: "Décoder ses blessures",
      desc: "Le point de départ indispensable. Apprenez à mettre des mots sur vos schémas amoureux répétitifs pour comprendre les mécanismes psychologiques sous-jacents qui se cachent derrière chaque déception.",
      visualType: "helix"
    },
    {
      step: "Étape 02",
      title: "Guérir en profondeur",
      desc: "Pacifiez les échos du passé. Ce protocole vous guide pour restaurer la relation la plus importante : celle que vous entretenez avec vous-même, afin de rebâtir une estime inébranlable.",
      visualType: "laser"
    },
    {
      step: "Étape 03",
      title: "Attirer l'évidence",
      desc: "Reconnaissez immédiatement les Red Flags, posez vos limites sans culpabiliser et accueillez naturellement un partenaire émotionnellement disponible prêt à construire une vie saine à deux.",
      visualType: "ecg"
    }
  ];

  // GSAP animation triggers for stacked cards
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray(".sticky-card");
      
      cardElements.forEach((card, index) => {
        if (index === cardElements.length - 1) return; // Skip last card

        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 15vh",
            end: "bottom 15vh",
            scrub: true,
            invalidateOnRefresh: true,
          },
          scale: 0.9,
          opacity: 0.4,
          filter: "blur(8px)",
          ease: "none"
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-24 px-6 max-w-4xl mx-auto space-y-24">
      <div className="text-center mb-12">
        <h2 className="text-xs uppercase tracking-widest text-champagne font-mono mb-4">Le Protocole</h2>
        <p className="text-3xl md:text-5xl font-extrabold tracking-tight">Le Chemin Vers Votre Révolution</p>
      </div>

      <div className="relative space-y-20">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="sticky-card bg-[#12121A] border border-ardoise/20 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center min-h-[400px] w-full"
            style={{
              // Add progressive margin-top to separate stack layers when sticky pinned
              marginTop: `${idx * 16}px`
            }}
          >
            <div className="w-full md:w-1/2 space-y-6">
              <span className="font-mono text-sm tracking-widest text-champagne font-bold">{card.step}</span>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">{card.title}</h3>
              <p className="text-sm md:text-base text-ivoire/75 leading-relaxed">{card.desc}</p>
            </div>
            
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-64 h-64 bg-obsidienne/80 rounded-[2rem] border border-ardoise/20 flex items-center justify-center overflow-hidden relative shadow-inner">
                {card.visualType === "helix" && <RotatingHelix />}
                {card.visualType === "laser" && <LaserScanner />}
                {card.visualType === "ecg" && <EcgPulse />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Geometric Rotating Shapes component
 */
function RotatingHelix() {
  const shapeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(shapeRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg ref={shapeRef} className="w-40 h-40 text-champagne/40" viewBox="0 0 100 100" fill="none" stroke="currentColor">
      {/* Dynamic Concentric Rings */}
      <circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="5 5" />
      <circle cx="50" cy="50" r="30" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="20" strokeWidth="2" strokeDasharray="10 3" />
      <circle cx="50" cy="50" r="10" strokeWidth="1" />
      {/* Geometry axes */}
      <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.5" strokeDasharray="2 2" />
    </svg>
  );
}

/**
 * Scanning laser animation component
 */
function LaserScanner() {
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { y: 15 },
        { y: 245, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4">
      {/* Dots grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-3 p-6 opacity-20">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-champagne"></div>
        ))}
      </div>
      
      {/* Scanning Laser Line */}
      <div 
        ref={lineRef} 
        className="w-[90%] left-[5%] absolute h-0.5 bg-champagne shadow-lg shadow-champagne/80 z-20"
      ></div>
    </div>
  );
}

/**
 * ECG heartbeat wave SVG animation
 */
function EcgPulse() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="w-52 h-24 text-champagne" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="3">
        <path 
          d="M 10 50 L 50 50 L 60 30 L 70 70 L 80 50 L 110 50 L 120 15 L 135 85 L 145 50 L 190 50" 
          strokeDasharray="400"
          strokeDashoffset="400"
          className="ecg-path"
        />
      </svg>
      <style>{`
        .ecg-path {
          animation: drawEcg 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        @keyframes drawEcg {
          0% {
            stroke-dashoffset: 400;
          }
          40% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// Mount React App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

