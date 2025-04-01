import Image from "next/image";
import CookieConsent from '../components/CookieConsent';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F3F7]">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
            src="/logo-nav.png"
            alt="APPS By Spirit"
            width={120}
            height={40}
            priority
          />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-[#8987A1] hover:text-[#621B93]">Accueil</a>
            <a href="#services" className="text-[#8987A1] hover:text-[#621B93]">Services</a>
            <a href="#pricing" className="text-[#8987A1] hover:text-[#621B93]">Tarifs</a>
            <a href="#bonus" className="text-[#8987A1] hover:text-[#621B93]">Bonus</a>
            <a href="#contact" className="text-[#8987A1] hover:text-[#621B93]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/logo-large.png"
              alt="APPS By Spirit"
              width={200}
              height={80}
              className="mx-auto mb-8"
            />
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <p className="text-2xl md:text-2xl lg:text-2xl text-[#621B93] font-semibold">Besoin d&apos;une application rapidement 🚀?</p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-[Clash Display]">Nous créons votre Application en 30 Jours</h2>
              <p className="text-2xl md:text-2xl lg:text-3xl font-medium font-[Clash Display]">(peut être même moins😎)</p>
            </div>
            <a href="#contact" className="bg-[#621B93] text-white px-8 py-3 rounded-full text-lg font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg inline-block">
              Je veux mon App →
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/qZ15w0c50ps?si=7qmwKZhO2riXswsd"
                title="APPS By Spirit Presentation"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#621B93] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[Clash Display]">Nous vous aidons à<br />RÉALISER VOS PROJETS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


            {/* Mobile + Web App Card */}
            <div className="bg-white p-8 rounded-3xl text-black flex flex-col items-center text-center">
              <div className="mb-6">
                <Image src="/mobile-icon.png" alt="Mobile" width={56} height={56} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application<br />Mobile + Web</h3>
              <p className="text-[#8987A1] mb-6">1 application mobile et une interface web</p>
              <div className="flex gap-4 justify-center">
                <Image src="/react.png" alt="React" width={24} height={24} />
                <Image src="/flutter.png" alt="Flutter" width={24} height={24} />
                <Image src="/ios.png" alt="iOS" width={24} height={24} />
                <Image src="/android.png" alt="Android" width={24} height={24} />
              </div>
            </div>

            {/* Responsive Web App Card */}
            <div className="bg-white p-8 rounded-3xl text-black flex flex-col items-center text-center">
              <div className="mb-6">
                <Image src="/web-icon.png" alt="Web" width={56} height={56} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application<br />Web responsive</h3>
              <p className="text-[#8987A1] mb-6">Application web + tableau de bord</p>
              <div className="flex gap-4 justify-center">
                <Image src="/react.png" alt="React" width={24} height={24} />
                <Image src="/next-js.png" alt="Next.js" width={24} height={24} />
                <Image src="/vue.png" alt="Vue.js" width={24} height={24} />
              </div>
            </div>

            {/* Multi Apps System Card */}
            <div className="bg-white p-8 rounded-3xl text-black flex flex-col items-center text-center">
              <div className="mb-6">
                <Image src="/window-web.png" alt="System" width={56} height={56} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Systèmes<br />Multi Apps</h3>
              <p className="text-[#8987A1] mb-6">Système complet avec plusieurs applications interconnectées</p>
              <div className="flex gap-4 justify-center">
                <Image src="/react.png" alt="React" width={24} height={24} />
                <Image src="/flutter.png" alt="Flutter" width={24} height={24} />
                <Image src="/next-js.png" alt="Next.js" width={24} height={24} />
                <Image src="/vue.png" alt="Vue.js" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Avec intégration</h3>
          <div className="flex justify-center items-center gap-4 mb-2">
            <span className="bg-[#621B93] text-white px-4 py-2 rounded-full">d&apos;outils IA</span>
            <Image src="/ai-icons.png" alt="AI Tools" width={136} height={40} />
          </div>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="bg-[#621B93] text-white px-4 py-2 rounded-full">et des agents personnalisés</span>
            <div className="flex gap-2">
              <Image src="/bot-icons.png" alt="Bot Icons" width={136} height={40} />
            </div>
          </div>
          <p className="text-[#8987A1]">et autres automatisations...</p>
        </div>
      </section>

      {/* 5 Steps Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Clash Display]">Votre App est prête</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-[#621B93] font-[Clash Display]">en 5 étapes clés</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Step 1 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step1.png" alt="Demande" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Demande<br />et Kick Off</h4>
              <p className="text-[#8987A1]">Soumettez une requête, connectez-vous, et réservez un call pour finaliser le cahier de charges.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step2.png" alt="Design" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Design prototype<br />(UX et MVP)</h4>
              <p className="text-[#8987A1]">Nous réalisons le design ou MVP (1 fonctionnalité clé) de votre projet que vous pourrez tester au bout de 10 jours.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step3.png" alt="Développement" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Développement<br />de l&apos;application</h4>
              <p className="text-[#8987A1]">Une fois le design validée, nous développons les interfaces et fonctionnalités de votre application.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Step 4 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step4.png" alt="Test" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Test et Déploiement</h4>
              <p className="text-[#8987A1]">Vous pourrez alors tester chaque aspect de votre application. Une fois validée, nous la déployons pour une utilisation fluide et sans tracas pour vos utilisateurs.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step5.png" alt="Maintenance" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Maintenance et prise en main</h4>
              <p className="text-[#8987A1]">Nous assurons la maintenance post déploiement (corrections, optimisation performance) sur 15 jours gratuitement, puis formons sur la prise en main et fournissons la documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F1F3F7]">
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#621B93] font-[Clash Display]">5 bonnes raisons</h2>
          <h3 className="text-2xl font-bold mb-12">de nous faire confiance</h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit1.png" alt="Design UX pro" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Design<br />UX pro</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit2.png" alt="Solution optimisée" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Solution<br />optimisée</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit3.png" alt="Livraison rapide" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Livraison<br />rapide</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit4.png" alt="Tarif compétitif" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Tarif<br />compétitif</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit5.png" alt="Espace client personnalisé" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Espace client<br />personnalisé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Clash Display]">Et un</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-[#621B93] font-[Clash Display]">Paiement flexible</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h4 className="text-4xl md:text-6xl font-bold text-[#621B93] mb-4">50%</h4>
              <p className="text-[#8987A1]">À l&apos;avance</p>
            </div>
            
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h4 className="text-4xl md:text-6xl font-bold text-[#621B93] mb-4">30%</h4>
              <p className="text-[#8987A1]">À la livraison</p>
            </div>
            
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h4 className="text-4xl md:text-6xl font-bold text-[#621B93] mb-4">20%</h4>
              <p className="text-[#8987A1]">À la maintenance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 30 Jours PRO Card */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h2 className="text-3xl font-bold mb-4 font-[Clash Display]">Pack MVP</h2>
              <p className="text-[#8987A1] mb-6">L&apos;essentiel pour créer et lancer votre solution</p>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="text-2xl font-bold">💰 À partir de 1,2 Million de FCFA</h3>
              </div>
              <p className="text-[#8987A1] mb-8">Environ 2000 $ ou 2000 Euro</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Design UX/UI professionnel</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Formation & documentation incluses</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Testée & optimisée avant livraison</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>15 jours de maintenance gratuite</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Code source fournis au solde</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Tableau de bord personnel</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>1 requête traitée à la fois</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Services complémentaires (sur devis)</p>
                </div>
              </div>

              <div className="mt-8">
                <a href="#contact" className="bg-[#621B93] text-white px-8 py-3 rounded-full text-lg font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg inline-block">
                  Soumettre une demande
                </a>
              </div>
            </div>

            {/* 10-20 jours PRO MAX Card */}
            <div className="bg-[#621B93] p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-white">
              <h2 className="text-3xl font-bold mb-4 font-[Clash Display]">Pack DREAM</h2>
              <p className="text-white/80 mb-6">IA et Experts dédiés : une offre tout-en-un</p>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="text-2xl font-bold">💰 À partir de 3 Million de FCFA</h3>
              </div>
              <p className="text-white/80 mb-8">Environ 5000 $ ou 5000 Euro</p>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="text-left">✓</span>
                  <p>Design UX/UI option premium</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-left">✓</span>
                  <p>Hébergement et domaine inclus (1an)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-left">✓</span>
                  <p>Multiple Applications (1-3 apps)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-left">✓</span>
                  <p>15 jours de maintenance en plus</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-left">✓</span>
                  <p>Équipe complète dédiée (6j/7)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-left">✓</span>
                  <p>Plusieurs requêtes en même temps</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-left">✓</span>
                  <p>Support prioritaire 6j/7</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-left">✓</span>
                  <p>Services complémentaires inclus (optionnel)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-left"></span>
                  <p>(Impressions et pubs sur devis)</p>
                </div>
              </div>

              <div className="mt-8">
                <a href="#contact" className="bg-white text-[#621B93] px-8 py-3 rounded-full text-lg font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg inline-block">
                  Soumettre une demande
                </a>
              </div>
            </div>
          </div>


      {/* Design Services Section */}
      <section id="bonus" className="py-16 bg-[#F1F3F7]">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-3xl md:text-4xl font-bold mb-4 font-[Clash Display]">En bonus: un accompagnement</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#621B93] font-[Clash Display]">en Communication et Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Branding Card */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <div className="flex justify-center mb-4">
                <Image src="/logo-icon.png" alt="Logo et Charte graphique" width={56} height={56} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Logo et Charte<br />graphique</h4>
              <p className="text-[#8987A1] text-center">Nous créons votre logo et une image de marque unique.</p>
            </div>

            {/* Digital Communications Card */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <div className="flex justify-center mb-4">
                <Image src="/com-icon.png" alt="Com digitale et impressions" width={56} height={56} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Com digitale et<br />impressions</h4>
              <p className="text-[#8987A1] text-center">Post réseaux sociaux, bannières, bâches, Roll-up, t-shirt, etc...</p>
            </div>

            {/* Photos and Videos Card */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <div className="flex justify-center mb-4">
                <Image src="/media-icon.png" alt="Photos, montage Vidéos et sons" width={56} height={56} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Photos, montage<br />Vidéos et sons</h4>
              <p className="text-[#8987A1] text-center">Spots vidéos, podcasts, édition, long métrage, etc...</p>
            </div>

            {/* Pitch Deck Card */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <div className="flex justify-center mb-4">
                <Image src="/pitch-icon.png" alt="Pitch Deck" width={56} height={56} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Pitch Deck</h4>
              <p className="text-[#8987A1] text-center">Présentations professionnelles, pitch de projets ou d&apos;affaires.</p>
            </div>

            {/* Consulting et Design Card */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] md:col-span-2">
              <div className="mb-4 flex justify-start">
                <Image src="/mobile-icon.png" alt="Consulting" width={56} height={56} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-left">Consulting et Design (UX/UI)</h3>
              <ul className="text-[#8987A1] mb-6 list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">Consulting UX, Research UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">Maquette UX/UI complete et moderne</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">Fichiers prêts au développement, espace collaboratif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">1 Révision gratuite (plus à 10% par révision)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">Ajout d&apos;autres écrans (sur devis)</span>
                </li>
              </ul>
            </div>

            {/* Design site web Card */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] md:col-span-2">
              <div className="mb-4 flex justify-start">
                <Image src="/web-icon.png" alt="Web Design" width={56} height={56} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-left">Design site web + landing page</h3>
              <ul className="text-[#8987A1] mb-6 list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">Hébergement, domaine (.com, .org, .ci) et formation incluse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">Hébergement et domaine inclus, tableau de bord Wordpress ou web</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">Intégrations WhatsApp, Mobile Money, CRM... (sur devis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">1 Correction post déploiement gratuite (plus à 10-30%/mois)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-left">Systèmes (eCommerce, marketplace, eLearning) sur devis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[Clash Display]">Contactez nous gratuitement</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-[#8987A1] mb-8 text-center">Notre objectif est de vous aider à concrétiser vos idées et offrir des solutions exceptionnelles à vos clients. Avec une passion pour l&apos;innovation et l&apos;excellence, nous nous engageons à fournir des solutions de premier ordre le plus rapidement et efficacement possible. Remplissez le formulaire pour démarrer.</p>
            
            <div className="flex justify-center">
              <a 
                href="https://apps.fillout.com/t/w5JSP5SoE8us" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#621B93] text-white px-6 py-3 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span className="text-xl">✨</span>
                <span>Soumettre ma demande</span>
              </a>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <a href="https://calendly.com/apps_meeting/apps_kickoff_call" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#621B93] text-white px-6 py-3 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <Image src="/calendly-icon.png" alt="Calendly" width={32} height={32} />
                Réserver un appel
              </a>
              <a
                href="mailto:apps@byspirit.org?subject=Demande d'informations"
                className="flex-1 bg-[#621B93] text-white px-6 py-3 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Image src="/email-icon.png" alt="Email" width={32} height={32} />
                Envoyer un mail
              </a>
              <button className="flex-1 bg-[#621B93] text-white px-6 py-3 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <a href="https://wa.me/message/NQI7SHLMUD5LK1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Image src="/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} />
                  Nous écrire
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-[#F1F3F7]">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex items-center justify-center">
            <Image src="/Apps By The Spirit sticker.webp" alt="Mobile" width={200} height={200} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Clash Display]">Nous formons également des</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-[#621B93] font-[Clash Display]">DESIGNERS et DÉVELOPPEURS LOW/NO CODE</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-left">Master UX Design avec Figma</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-left">Outils de développement Low/No Code IA</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-left">Design graphique</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-left">Gestion de projet de développement d&apos;applications</p>
            </div>
          </div>

          <button className="mt-8 bg-[#621B93] text-white px-8 py-3 rounded-full text-lg font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg">
            (Bientôt...)
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Clash Display]">Quelques questions fréquentes</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-[#621B93] font-[Clash Display]">FAQs</h3>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Comment commencer ?
                <span className="text-[#621B93] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[#8987A1]">Soumettez votre requête ou contactez-nous directement. Nous organiserons un appel pour discuter de votre projet en détail.</p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Si je veux juste un MVP ou une maquette est-ce possible ?
                <span className="text-[#621B93] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[#8987A1]">Oui, nous pouvons créer uniquement un MVP ou une maquette (Design UX/UI). Nous adaptons nos services à vos besoins spécifiques. Contacter nous pour plus de détails.</p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Combien de temps peut durer un projet ?
                <span className="text-[#621B93] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[#8987A1]">La durée standard est de 30 jours, mais elle peut varier selon la simplicité, la complexité du projet et les fonctionnalités requises.</p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Que se passe t&apos;il si je ne peux pas solder ?
                <span className="text-[#621B93] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[#8987A1]">Nous pouvons proposer des options de paiement flexibles et pouvons discuter d&apos;un plan de paiement adapté à votre situation. Le cas échéant, l&apos;accès à l&apos;application pourrait être limité. Contacter nous pour en discuter.</p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Que se passe t&apos;il si je ne suis pas satisfait ?
                <span className="text-[#621B93] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[#8987A1]">Nous nous assurons dès le départ d&apos;être aligné avec vous sur le cahier de charges, le design et les aspects techniques et opérationnels de votre projet. Nous travaillons en étroite collaboration avec vous tout au long du projet, en toute transparence et accord pour garantir votre satisfaction.</p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Et si je veux plus ou uniquement de la maintenance ?
                <span className="text-[#621B93] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[#8987A1]">Nous proposons des services de maintenance flexibles sur évaluation et devis, que ce soit pour nos projets avec vous ou des applications existantes.</p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Combien de fonctionnalités puis-je ajouter ?
                <span className="text-[#621B93] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[#8987A1]">Autant que vous le souhaitez. Toutefois cela dépend de la complexité, le budget, le délai, la pertinence pour les utilisateurs, la stabilité de la solution, et d&apos;autres aspects à prendre en compte. Nous pouvons vous conseiller sur les priorités et établir un plan d&apos;évolution.</p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Puis-je payer cash, ou en tranches ?
                <span className="text-[#621B93] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[#8987A1]">Oui, nous acceptons différentes modalités et moyens de paiement. Toutefois les échéanciers s&apos;appliquent selon vos besoins à partir d&apos;un certain montant. En deça, nous n&apos;acceptons que 50% à l&apos;avance, 30% à la livraison et 20% après la durée standard de maintenance post déploiement.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#621B93] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/logo-footer.png"
                alt="APPS By Spirit"
                width={160}
                height={60}
                className="mb-4"
              />
              <p className="text-sm mb-4">Agence de Design, développement<br />de solutions informatiques.</p>
              <p className="text-sm mb-4">Angré 7ème Tranche, rue L155,<br />en Face de la Pharmacie 7Lys, Kheris Workspace</p>
              <p className="text-sm flex items-center gap-2">
                <span>❤️</span>
                Fait avec amour par l&apos;Esprit par APPS By The Spirit
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Liens importants</h4>
              <div className="space-y-2">
                <a href="/gdpr-policy" className="block text-sm hover:text-white/80 transition-colors">Politique RGPD</a>
                <a href="https://www.behance.net/videme" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-white/80 transition-colors">Portfolio</a>
                <a href="https://www.linkedin.com/in/videme-montcho/" target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-white/80 transition-colors">LinkedIn</a>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <a href="https://wa.me/message/NQI7SHLMUD5LK1" target= "blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
}
