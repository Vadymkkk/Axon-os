import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, Briefcase, Rocket, ArrowLeft, Search, Wrench, 
  Globe, Smartphone, Bot, Users, BarChart, Network, 
  CheckCircle2, XCircle, FileText, Clock, Shield, TrendingUp, Eye,
  Microscope, Dna, Zap, Check, MessageCircle, Phone, FileSpreadsheet, 
  LayoutTemplate, Share2, Mic, Database, PenTool, BrainCircuit, 
  LineChart, SlidersHorizontal, FolderOpen, FileCheck, Box, Activity,
  Terminal, Palette, CreditCard, Cpu, UserX, ZapOff, ShieldCheck,
  Headphones, DollarSign, Code2, PieChart, Target, Layers, Calculator, LayoutDashboard, Home
} from 'lucide-react';

type View = 'home' | 'business' | 'principle' | 'tools' | 'audit' | 'agents' | 'assistants' | 'ecosystem' | 'websites' | 'webapps' | 'expert';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  return (
    <div className="min-h-screen p-6 md:p-12 flex flex-col">
      <AnimatePresence mode="wait">
        {currentView === 'home' && <HomeView key="home" onNavigate={setCurrentView} />}
        {currentView === 'business' && <BusinessView key="business" onNavigate={setCurrentView} />}
        {currentView === 'principle' && <PrincipleView key="principle" onNavigate={setCurrentView} />}
        {currentView === 'tools' && <ToolsView key="tools" onNavigate={setCurrentView} />}
        {currentView === 'audit' && <AuditView key="audit" onNavigate={setCurrentView} />}
        {currentView === 'agents' && <AgentsView key="agents" onNavigate={setCurrentView} />}
        {currentView === 'assistants' && <AssistantsView key="assistants" onNavigate={setCurrentView} />}
        {currentView === 'ecosystem' && <EcosystemView key="ecosystem" onNavigate={setCurrentView} />}
        {currentView === 'websites' && <WebsitesView key="websites" onNavigate={setCurrentView} />}
        {currentView === 'webapps' && <WebAppsView key="webapps" onNavigate={setCurrentView} />}
        {currentView === 'expert' && <ExpertView key="expert" onNavigate={setCurrentView} />}
      </AnimatePresence>
    </div>
  );
}

const SmartCenter = () => {
  const [factIndex, setFactIndex] = useState(0);
  const facts = [
    { number: "+240%", text: "Конверсії", subtext: "AXON Sales Agent", color: "text-cyan-400" },
    { number: "60%", text: "Економії", subtext: "AXON Support Agent", color: "text-fuchsia-400" },
    { number: "0%", text: "Вигорання", subtext: "AXON Expert Launch", color: "text-purple-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-80 md:h-96 flex items-center justify-center mb-16 overflow-hidden rounded-3xl bg-[#050505] border border-white/5 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />

      {/* Core Sphere Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#22d3ee] to-[#e879f9] blur-[80px]"
      />
      
      {/* Core Sphere Solid */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#e879f9]/20 backdrop-blur-xl border border-white/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]"
      />

      {/* Particles Container 1 */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/5 border-dashed"
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#22d3ee] rounded-full shadow-[0_0_15px_#22d3ee]" />
        <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-[#e879f9] rounded-full shadow-[0_0_10px_#e879f9]" />
        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white]" />
      </motion.div>

      {/* Particles Container 2 */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 md:w-[400px] md:h-[400px] rounded-full border border-white/5"
      >
        <div className="absolute bottom-0 left-1/4 w-2.5 h-2.5 bg-[#e879f9] rounded-full shadow-[0_0_12px_#e879f9]" />
        <div className="absolute top-1/4 right-0 w-2 h-2 bg-[#22d3ee] rounded-full shadow-[0_0_10px_#22d3ee]" />
      </motion.div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full w-full pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={factIndex}
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className={`text-6xl md:text-8xl font-black mb-2 tracking-tighter ${facts[factIndex].color} drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]`}>
              {facts[factIndex].number}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              {facts[factIndex].text}
            </div>
            <div className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-[0.2em] bg-black/60 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md">
              {facts[factIndex].subtext}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const HomeView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center flex-1 max-w-4xl mx-auto w-full py-12"
    >
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm font-medium text-white/80 tracking-wider">AXON OS // СИСТЕМА АКТИВНА</span>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Чому ШІ-інструменти — це <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">не розкіш, а виживання?</span>
          </h1>
        </div>
        <div className="inline-block p-5 px-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-4">
          <p className="text-xl md:text-2xl font-light italic text-white/90">
            "Людина — це помилки. ШІ — це математична точність."
          </p>
        </div>
      </div>

      <SmartCenter />

      <div className="text-center mb-8">
        <p className="text-lg md:text-xl text-white/70 font-medium">
          Не чекайте, поки конкуренти впровадять це першими.<br className="hidden sm:block" /> Обирайте свій шлях:
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl items-start">
        <div className="flex-1 w-full flex flex-col">
          <div className="relative group w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <GlassButton 
              onClick={() => onNavigate('business')} 
              icon={<Briefcase className="w-6 h-6 text-cyan-400" />}
              className="relative !bg-[#050505] hover:!bg-[#111]"
            >
              Я власник бізнесу
            </GlassButton>
          </div>
        </div>
        
        <div className="flex-1 w-full flex flex-col">
          <div className="relative group w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <GlassButton 
              onClick={() => onNavigate('expert')} 
              icon={<Rocket className="w-6 h-6 text-purple-400" />}
              className="relative !bg-[#050505] hover:!bg-[#111]"
            >
              Я експерт
            </GlassButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BusinessView = ({ onNavigate }: { onNavigate: (v: View) => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="flex flex-col flex-1 max-w-4xl mx-auto w-full pt-12"
  >
    <BackButton onClick={() => onNavigate('home')} onHome={() => onNavigate('home')} />
    
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-3 flex flex-wrap items-center gap-4">
        <Briefcase className="text-blue-400 w-8 md:w-10 h-8 md:h-10 shrink-0" /> 
        <span>Я власник <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">бізнесу</span></span>
      </h2>
      <p className="text-white/50 text-lg">Оберіть розділ для продовження</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GlassCard 
        onClick={() => onNavigate('principle')}
        className="p-6 sm:p-8 cursor-pointer hover:bg-white/10 transition-colors group"
      >
        <div className="p-4 rounded-2xl bg-blue-500/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
          <Search className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold mb-3">
          Принцип <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">роботи</span>
        </h3>
        <p className="text-white/50 leading-relaxed">Як ми аналізуємо та покращуємо ваш бізнес за допомогою штучного інтелекту.</p>
      </GlassCard>

      <GlassCard 
        onClick={() => onNavigate('tools')}
        className="p-6 sm:p-8 cursor-pointer hover:bg-white/10 transition-colors group"
      >
        <div className="p-4 rounded-2xl bg-purple-500/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
          <Wrench className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold mb-3">
          Інструменти для <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">бізнесу</span>
        </h3>
        <p className="text-white/50 leading-relaxed">Каталог ШІ-рішень, прайс-лист та порівняння з ручною роботою.</p>
      </GlassCard>
    </div>
  </motion.div>
);

const PrincipleView = ({ onNavigate }: { onNavigate: (v: View) => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="flex flex-col flex-1 max-w-6xl mx-auto w-full pt-12 pb-20"
  >
    <BackButton onClick={() => onNavigate('business')} onHome={() => onNavigate('home')} />
    
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-3">
        Як ми <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">працюємо</span>
      </h2>
      <p className="text-white/50 text-lg">Чек-ап вашого бізнесу</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
      {/* Step 1 */}
      <GlassCard className="p-6 sm:p-8 relative overflow-hidden group flex flex-col h-full">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
            <Microscope className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold leading-tight">
            Крок 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Глибоке сканування</span>
          </h3>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
          <p className="text-blue-200/80 italic text-sm leading-relaxed">
            «Ми не ворожимо на кавовій гущі. Ми робимо "МРТ" вашого маркетингу та продажів.»
          </p>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">Трафік:</strong> куди витікають гроші?</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">Дзвінки:</strong> що насправді кажуть менеджери?</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">Скрипти:</strong> вони працюють чи просто існують?</span>
          </li>
        </ul>

        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-200/80 text-center">
          Чим більше даних ми "проскануємо", тим чіткішим буде діагноз.
        </div>
      </GlassCard>

      {/* Step 2 */}
      <GlassCard className="p-6 sm:p-8 relative overflow-hidden group flex flex-col h-full">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-400 opacity-50 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
            <Dna className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold leading-tight">
            Крок 2: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Лабораторний висновок</span>
          </h3>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
          <p className="text-purple-200/80 italic text-sm leading-relaxed">
            «Ми розшифровуємо ДНК вашого клієнта, перетворюючи хаос даних на чітку структуру.»
          </p>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">Портрет ЦА:</strong> хто приносить гроші, а хто — тільки клопіт.</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">Слабкі зони:</strong> де саме "болить" ваш відділ продажів.</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">Тренди:</strong> чому в один час ви на коні, а в інший — у ямі.</span>
          </li>
        </ul>
      </GlassCard>

      {/* Step 3 */}
      <GlassCard className="p-6 sm:p-8 relative overflow-hidden group flex flex-col h-full">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-50 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold leading-tight">
            Крок 3: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Рецепт на зростання</span>
          </h3>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
          <p className="text-emerald-200/80 italic text-sm leading-relaxed">
            «Ми видаємо план лікування та список "вітамінів" для росту вашої бізнес-ракети.»
          </p>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">Нові скрипти:</strong> ваші менеджери заговорять по-іншому.</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">Автоматизація:</strong> ми покажемо, які ШІ-інструменти замінять рутину.</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-white/80 leading-relaxed"><strong className="text-white">План впровадження:</strong> від теорії до перших грошей.</span>
          </li>
        </ul>
      </GlassCard>
    </div>

    <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
      <p className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
        Ви можете лікуватися самі за нашим рецептом або довірити "операцію" нам.
      </p>
    </div>
  </motion.div>
);

const ToolsView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  const [showBrief, setShowBrief] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-1 max-w-4xl mx-auto w-full pt-12 pb-20"
    >
      <BackButton onClick={() => onNavigate('business')} onHome={() => onNavigate('home')} />
      
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Інструменти для <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">бізнесу</span>
        </h2>
        <p className="text-white/50 text-lg">Каталог рішень та прайс-лист</p>
      </div>

      <div className="space-y-6 mb-16">
        <ToolCard 
          icon={<Globe className="w-7 h-7 text-blue-400" />}
          title="Сайти"
          price="від $300"
          description="Розробка за 3 дні. Інтеграція ШІ-модулів."
          contrast="Звичайний сайт — це просто картинка. Наш сайт — це активний інструмент збору даних."
          onClick={() => onNavigate('websites')}
        />
        <ToolCard 
          icon={<Smartphone className="w-7 h-7 text-purple-400" />}
          title="Веб-додатки"
          price="від $650"
          description="Кастомні сервіси (примірочні, калькулятори, ШІ-фільтри)."
          onClick={() => onNavigate('webapps')}
        />
        <ToolCard 
          icon={<Bot className="w-7 h-7 text-emerald-400" />}
          title="ШІ Агенти"
          price="від $1200"
          description="Автономні співробітники для CRM та пошти."
          contrast="Менеджер може забути відповісти або помилитися. Агент діє миттєво за протоколом 24/7."
          onClick={() => onNavigate('agents')}
        />
        
        <ToolCard 
          icon={<Users className="w-7 h-7 text-orange-400" />}
          title="Асистенти"
          price="від $400"
          description="Спеціалізовані бойові одиниці для конкретних завдань (Sales, HR, Support)."
          contrast="Ручна робота: Пропуски лідів, довгі відповіді, людський фактор. Асистент: Миттєва реакція, 100% точність."
          onClick={() => onNavigate('assistants')}
        />

        <ToolCard 
          icon={<BarChart className="w-7 h-7 text-cyan-400" />}
          title="Послуги Аудиту"
          price="від $300"
          description="Глибокий розбір окремих блоків бізнесу через ШІ."
          onClick={() => onNavigate('audit')}
        />
        <ToolCard 
          icon={<Network className="w-7 h-7 text-indigo-400" />}
          title="ШІ Екосистема"
          price="від $4000"
          description="Business Autopilot. Глобальна архітектура, де всі ШІ-агенти працюють як єдиний організм."
          contrast="Замість розрізнених відділів — синхронізована нейромережа вашого бізнесу."
          onClick={() => onNavigate('ecosystem')}
        />
      </div>

      <div className="flex justify-center">
        <button 
          onClick={() => setShowBrief(true)}
          className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
        >
          <FileText className="w-5 h-5" />
          Отримати бриф для точного розрахунку кошторису та термінів
        </button>
      </div>

      <AnimatePresence>
        {showBrief && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mt-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center backdrop-blur-md"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <p className="text-emerald-100 font-medium text-lg">Запит на бриф відправлено. Ми зв'яжемося з вами найближчим часом.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ToolCard = ({ icon, title, price, description, contrast, onClick }: any) => (
  <div onClick={onClick} className={onClick ? "cursor-pointer group" : ""}>
    <GlassCard className={`p-8 h-full ${onClick ? "group-hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] relative overflow-hidden" : ""}`}>
      {onClick && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium border border-white/5">{price}</span>
          </div>
          <p className="text-white/70 mb-5 leading-relaxed text-lg">{description}</p>
          {contrast && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-sm mb-4">
              <div className="text-white/60 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-white/80 leading-relaxed">{contrast}</span>
              </div>
            </div>
          )}
          {onClick && (
            <div className="inline-flex items-center gap-2 text-cyan-400 font-medium opacity-80 group-hover:opacity-100 transition-opacity mt-2">
              Детальніше <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  </div>
);

const GlassButton = ({ children, onClick, icon, className = "" }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center justify-between w-full p-5 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group shadow-xl hover:shadow-2xl ${className}`}
  >
    <div className="flex items-center gap-4 sm:gap-5 text-left">
      <div className="flex items-center justify-center p-3 rounded-2xl bg-white/5 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors border border-white/5 shrink-0">
        {icon}
      </div>
      <span className="text-xl sm:text-2xl font-medium tracking-wide">{children}</span>
    </div>
    <ChevronRight className="text-white/30 group-hover:text-white/80 transition-colors w-6 h-6 shrink-0 ml-2 sm:ml-4" />
  </button>
);

const GlassCard = ({ children, className = "", onClick }: any) => (
  <div 
    onClick={onClick}
    className={`rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl ${className}`}
  >
    {children}
  </div>
);

const BackButton = ({ onClick, onHome }: any) => (
  <div className="sticky top-4 z-50 bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center px-4 py-3 h-16 mb-10 shadow-2xl justify-between">
    <button 
      onClick={onClick}
      className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group shrink-0"
    >
      <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
        <ArrowLeft className="w-5 h-5" />
      </div>
      <span className="font-medium hidden sm:block">Назад</span>
    </button>
    
    <div 
      className="flex-1 overflow-hidden ml-6 md:ml-12 flex items-center relative"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <div className="animate-marquee whitespace-nowrap flex gap-12 pr-12 text-white/10 font-black tracking-[0.2em] text-lg uppercase">
        <span>AXON</span><span>AXON</span><span>AXON</span><span>AXON</span><span>AXON</span>
        <span>AXON</span><span>AXON</span><span>AXON</span><span>AXON</span><span>AXON</span>
        <span>AXON</span><span>AXON</span><span>AXON</span><span>AXON</span><span>AXON</span>
        <span>AXON</span><span>AXON</span><span>AXON</span><span>AXON</span><span>AXON</span>
      </div>
    </div>

    {onHome && (
      <button 
        onClick={onHome}
        className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group shrink-0 ml-6"
      >
        <span className="font-medium hidden sm:block">Додому</span>
        <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
          <Home className="w-5 h-5" />
        </div>
      </button>
    )}
  </div>
);

const AuditView = ({ onNavigate }: { onNavigate: (v: View) => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="flex flex-col flex-1 max-w-6xl mx-auto w-full pt-12 pb-20"
  >
    <BackButton onClick={() => onNavigate('tools')} onHome={() => onNavigate('home')} />
    
    <div className="mb-16 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
        <BrainCircuit className="w-10 h-10" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
        AI-Аудит: Глибоке занурення у <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ДНК вашого бізнесу</span>
      </h2>
      <p className="text-white/60 text-xl leading-relaxed">
        Ми не просто дивимось на цифри. Ми збираємо ваш бізнес в єдиний цифровий потік і пропускаємо його через Ансамбль із 7 спеціалізованих нейромереж.
      </p>
    </div>

    {/* Stage 1: Consolidation */}
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 text-xl font-bold border border-blue-500/30 shrink-0">1</span>
        <h3 className="text-3xl font-bold">
          Консолідація <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">(Збір даних)</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <GlassCard className="p-8 h-full">
          <p className="text-xl text-white/90 mb-8 font-medium">Ми об'єднуємо все, що зазвичай лежить окремо:</p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-white/5 shrink-0 h-fit"><MessageCircle className="w-6 h-6 text-blue-400" /></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Комунікації</h4>
                <p className="text-white/60">Записи дзвінків, чати Instagram, Telegram, WhatsApp.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-white/5 shrink-0 h-fit"><FileSpreadsheet className="w-6 h-6 text-purple-400" /></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Матеріали</h4>
                <p className="text-white/60">Скрипти продажів (старі та діючі), внутрішні таблиці, регламенти.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-white/5 shrink-0 h-fit"><Globe className="w-6 h-6 text-emerald-400" /></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Ресурси</h4>
                <p className="text-white/60">Сайти, соцмережі, рекламні креативи, бюджети.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200">
            <strong>Мета:</strong> Створити "цифровий зліпок" компанії без втрати жодної деталі.
          </div>
        </GlassCard>
        
        {/* Visual: Cube with streams */}
        <div className="relative h-full min-h-[300px] flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl border border-white/5" />
          <div className="relative w-48 h-48">
            <motion.div 
              animate={{ rotateY: 360, rotateX: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full relative transform-style-3d"
            >
              <div className="absolute inset-0 border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm rounded-xl shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center">
                <Database className="w-16 h-16 text-blue-400 opacity-80" />
              </div>
            </motion.div>
            {/* Floating icons flowing in */}
            <motion.div animate={{ x: [50, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -right-12 top-4"><Phone className="w-6 h-6 text-white/50" /></motion.div>
            <motion.div animate={{ x: [-50, 0], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute -left-12 bottom-4"><MessageCircle className="w-6 h-6 text-white/50" /></motion.div>
            <motion.div animate={{ y: [-50, 0], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: 1 }} className="absolute left-1/2 -top-12 -translate-x-1/2"><LayoutTemplate className="w-6 h-6 text-white/50" /></motion.div>
          </div>
        </div>
      </div>
    </div>

    {/* Stage 2: 7 AI Models */}
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 text-xl font-bold border border-purple-500/30 shrink-0">2</span>
        <h3 className="text-3xl font-bold">
          Синхронний Аналіз <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">(Консиліум 7 нейромереж)</span>
        </h3>
      </div>
      <p className="text-xl text-white/70 mb-8 max-w-3xl">
        Ваші дані аналізує наш унікальний Агент, який підключений до 7 різних ШІ-моделей одночасно. Кожна працює у своїй стихії:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AiModelCard icon={<Globe />} title="Web-Сканер" color="text-blue-400" glow="group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]">
          "Листає" ваші сайти як живий користувач, знаходячи технічні та логічні помилки.
        </AiModelCard>
        <AiModelCard icon={<Share2 />} title="Social Auditor" color="text-pink-400" glow="group-hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]">
          Аналізує соцмережі на відповідність трендам та залученість.
        </AiModelCard>
        <AiModelCard icon={<Mic />} title="Voice-to-Text Pro" color="text-emerald-400" glow="group-hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]">
          Транскрибує кожен дзвінок, розрізняючи емоції та порушення скриптів.
        </AiModelCard>
        <AiModelCard icon={<FileSpreadsheet />} title="Data Scientist" color="text-cyan-400" glow="group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          Прораховує таблиці та виявляє закономірності у цифрах.
        </AiModelCard>
        <AiModelCard icon={<PenTool />} title="Content Expert" color="text-orange-400" glow="group-hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]">
          Оцінює тексти та візуал на силу впливу.
        </AiModelCard>
        <AiModelCard icon={<Network />} title="Logic Master" color="text-indigo-400" glow="group-hover:shadow-[0_0_30px_rgba(129,140,248,0.3)]">
          Перевіряє скрипти продажів на логічні пастки.
        </AiModelCard>
        <AiModelCard icon={<BrainCircuit />} title="Strategist AI" color="text-purple-400" glow="group-hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]" className="sm:col-span-2 lg:col-span-3 xl:col-span-2">
          Збирає всі дані в єдину дорожню карту.
        </AiModelCard>
      </div>
    </div>

    {/* Stage 3: Results */}
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 text-xl font-bold border border-emerald-500/30 shrink-0">3</span>
        <h3 className="text-3xl font-bold">
          Висновок та Стратегія <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">(Результат)</span>
        </h3>
      </div>
      <p className="text-xl text-white/70 mb-8 max-w-3xl">
        Ви отримуєте не просто "звіт", а інструкцію до дії:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <GlassCard className="p-8">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-red-500/10 shrink-0"><XCircle className="w-6 h-6 text-red-400" /></div>
              <div>
                <strong className="text-white text-lg block mb-1">Слабкі місця:</strong>
                <span className="text-white/60">Де саме ви втрачаєте гроші прямо зараз.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 shrink-0"><LineChart className="w-6 h-6 text-blue-400" /></div>
              <div>
                <strong className="text-white text-lg block mb-1">Аналіз прогресії:</strong>
                <span className="text-white/60">Точні інтервали, коли бізнес працював ефективно, а коли — деградував (і чому).</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0"><CheckCircle2 className="w-6 h-6 text-emerald-400" /></div>
              <div>
                <strong className="text-white text-lg block mb-1">Рекомендації:</strong>
                <span className="text-white/60">Нові KPI, готові скрипти, стратегії просування та контент-план.</span>
              </div>
            </li>
          </ul>
        </GlassCard>

        {/* Timeline Graph Visual */}
        <GlassCard className="p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-4 left-4 text-sm font-medium text-white/40 uppercase tracking-wider">Аналіз прогресії</div>
          <div className="w-full h-40 mt-6 relative flex items-end">
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              
              {/* Line */}
              <path d="M0,25 Q15,5 30,20 T60,35 T85,15 T100,10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              
              {/* Data points */}
              <circle cx="15" cy="11" r="2.5" fill="#34d399" className="animate-pulse" /> {/* Peak */}
              <circle cx="60" cy="35" r="2.5" fill="#f87171" className="animate-pulse" /> {/* Dip */}
              <circle cx="85" cy="15" r="2.5" fill="#34d399" className="animate-pulse" /> {/* Peak */}
            </svg>
            
            {/* Tooltips */}
            <div className="absolute left-[15%] top-[10%] -translate-x-1/2 -translate-y-full pb-2">
              <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs px-2 py-1 rounded backdrop-blur-md whitespace-nowrap">Ефективно</div>
            </div>
            <div className="absolute left-[60%] bottom-[5%] -translate-x-1/2 translate-y-full pt-2">
              <div className="bg-red-500/20 border border-red-500/30 text-red-300 text-xs px-2 py-1 rounded backdrop-blur-md whitespace-nowrap">Просадка</div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Before/After Slider */}
      <h4 className="text-2xl font-medium mb-6 text-center">Трансформація даних</h4>
      <BeforeAfterSlider />
    </div>

    {/* Footer Slogan */}
    <div className="text-center p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-white/90">
        "Це як консиліум найкращих лікарів світу, які зібралися в одній кімнаті спеціально заради вашого бізнесу. Поки ви п'єте каву, 7 суперкомп'ютерів шукають спосіб зробити вас багатшими."
      </p>
    </div>

  </motion.div>
);

const AiModelCard = ({ icon, title, children, color, glow, className = "" }: any) => (
  <div className={`p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group cursor-default ${glow} ${className}`}>
    <div className={`p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform duration-300 ${color}`}>
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-sm text-white/60 leading-relaxed">{children}</p>
  </div>
);

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div 
      className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden cursor-ew-resize border border-white/10 select-none touch-none"
      onPointerDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (isDragging) {
          handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }
      }}
      onPointerUp={(e) => {
        setIsDragging(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
    >
      {/* Before (Chaos) */}
      <div className="absolute inset-0 bg-[#1a0f14] flex flex-col items-center justify-center p-8">
        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 text-sm font-bold border border-red-500/20 backdrop-blur-md z-10 uppercase tracking-wider">До</div>
        <div className="relative w-full max-w-md h-full flex items-center justify-center opacity-40">
          <FolderOpen className="absolute top-1/4 left-1/4 w-16 h-16 text-red-400/50 -rotate-12" />
          <FileText className="absolute bottom-1/3 right-1/4 w-12 h-12 text-orange-400/50 rotate-12" />
          <FileSpreadsheet className="absolute top-1/3 right-1/3 w-14 h-14 text-yellow-400/50 rotate-45" />
          <MessageCircle className="absolute bottom-1/4 left-1/3 w-10 h-10 text-pink-400/50 -rotate-45" />
          <div className="absolute w-full h-full border-2 border-dashed border-red-500/20 rounded-xl" />
        </div>
      </div>

      {/* After (Structured) */}
      <div 
        className="absolute inset-0 bg-[#0f1a17] flex flex-col items-center justify-center p-8" 
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      >
        <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold border border-emerald-500/20 backdrop-blur-md z-10 uppercase tracking-wider">Після</div>
        <div className="w-full max-w-md bg-white/5 border border-emerald-500/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
            <Activity className="w-6 h-6 text-emerald-400" />
            <div className="h-4 w-32 bg-emerald-400/20 rounded" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check className="w-4 h-4 text-emerald-400" /></div>
              <div className="h-2 w-full bg-white/10 rounded" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check className="w-4 h-4 text-emerald-400" /></div>
              <div className="h-2 w-3/4 bg-white/10 rounded" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check className="w-4 h-4 text-emerald-400" /></div>
              <div className="h-2 w-5/6 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div className="absolute top-0 bottom-0 w-1 bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
          <SlidersHorizontal className="w-5 h-5 text-black" />
        </div>
      </div>
    </div>
  );
};

const AgentsView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-1 max-w-5xl mx-auto w-full pt-12 pb-24"
    >
      <BackButton onClick={() => onNavigate('tools')} onHome={() => onNavigate('home')} />
      
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-emerald-400 tracking-wider uppercase">Digital Employee</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          ШІ-Агенти: Коли інтелект <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">отримує руки</span>
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Агент — це не софт. Це автономна бойова одиниця вашого бізнесу, здатна закривати повний цикл задач без вашої участі.
        </p>
      </div>

      {/* Hard Skills Bento Grid */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8 flex flex-wrap items-center gap-3">
          <Cpu className="w-8 h-8 text-emerald-400 shrink-0" /> 
          <span>Hard Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Агента</span></span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 md:col-span-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-colors" />
            <div className="p-3 rounded-xl bg-cyan-500/10 w-fit mb-4 border border-cyan-500/20">
              <Terminal className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-white">
              Код та <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Архітектура</span>
            </h4>
            <p className="text-white/60 leading-relaxed">Самостійне написання, тестування та деплой коду. Агент може створювати скрипти, парсери та інтеграції на льоту.</p>
          </GlassCard>

          <GlassCard className="p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-500/20 transition-colors" />
            <div className="p-3 rounded-xl bg-pink-500/10 w-fit mb-4 border border-pink-500/20">
              <Palette className="w-6 h-6 text-pink-400" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Дизайн</span>
            </h4>
            <p className="text-white/60 leading-relaxed">Генерація UI/UX, банерів та креативів для рекламних кампаній.</p>
          </GlassCard>

          <GlassCard className="p-6 relative overflow-hidden group md:col-span-3 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-50" />
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="p-3 rounded-xl bg-emerald-500/10 w-fit mb-4 border border-emerald-500/20">
                  <CreditCard className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-white">
                  Фінансова <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Автономія</span>
                </h4>
                <p className="text-white/70 leading-relaxed text-lg">
                  Агенти інтегруються з фінансовими інструментами через API. Вони здатні самостійно:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-3 text-white/80"><Check className="w-5 h-5 text-emerald-400" /> Закуповувати трафік у рекламних кабінетах</li>
                  <li className="flex items-center gap-3 text-white/80"><Check className="w-5 h-5 text-emerald-400" /> Оплачувати підписки на сервіси</li>
                  <li className="flex items-center gap-3 text-white/80"><Check className="w-5 h-5 text-emerald-400" /> Проводити розрахунки з контрагентами</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-4 border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full blur-md opacity-50 animate-pulse" />
                  <CreditCard className="w-12 h-12 text-white absolute" />
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 relative overflow-hidden group">
            <div className="p-3 rounded-xl bg-purple-500/10 w-fit mb-4 border border-purple-500/20">
              <MessageCircle className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-xl font-medium mb-2 text-white">Комунікації</h4>
            <p className="text-white/60 leading-relaxed">Переговори з клієнтами, закриття угод, технічний саппорт у будь-яких месенджерах.</p>
          </GlassCard>

          <GlassCard className="p-6 md:col-span-2 relative overflow-hidden group">
            <div className="p-3 rounded-xl bg-orange-500/10 w-fit mb-4 border border-orange-500/20">
              <Activity className="w-6 h-6 text-orange-400" />
            </div>
            <h4 className="text-xl font-medium mb-2 text-white">Глибинна Аналітика</h4>
            <p className="text-white/60 leading-relaxed">Обробка терабайтів даних за мілісекунди для прийняття надшвидких фінансових та маркетингових рішень.</p>
          </GlassCard>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Людина <span className="text-white/30 mx-2">vs</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Агент AXON</span>
        </h3>
        
        <div className="overflow-x-auto">
          <div className="min-w-[700px] border border-white/10 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
              <div className="p-6 text-white/50 font-medium">Критерій</div>
              <div className="p-6 border-l border-white/10 flex items-center gap-3">
                <UserX className="w-5 h-5 text-red-400" /> 
                <span className="font-medium text-white/80">Звичайна людина</span>
              </div>
              <div className="p-6 border-l border-white/10 flex items-center gap-3 bg-emerald-500/5">
                <Bot className="w-5 h-5 text-emerald-400" /> 
                <span className="font-medium text-emerald-400">Агент AXON</span>
              </div>
            </div>
            
            {/* Rows */}
            <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors">
              <div className="p-6 text-white/80 font-medium flex items-center gap-3"><Zap className="w-4 h-4 text-white/40" /> Швидкість реакції</div>
              <div className="p-6 border-l border-white/5 text-white/60">Години / Дні</div>
              <div className="p-6 border-l border-white/5 text-emerald-300 font-medium bg-emerald-500/5">Мілісекунди</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors">
              <div className="p-6 text-white/80 font-medium flex items-center gap-3"><CreditCard className="w-4 h-4 text-white/40" /> Ціна</div>
              <div className="p-6 border-l border-white/5 text-white/60">$2000+ / міс (зарплата + податки)</div>
              <div className="p-6 border-l border-white/5 text-emerald-300 font-medium bg-emerald-500/5">Фіксована вартість інфраструктури</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors">
              <div className="p-6 text-white/80 font-medium flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-white/40" /> Помилки</div>
              <div className="p-6 border-l border-white/5 text-white/60">Емоційний фактор, втома, неуважність</div>
              <div className="p-6 border-l border-white/5 text-emerald-300 font-medium bg-emerald-500/5">Математична точність 99.9%</div>
            </div>
            
            <div className="grid grid-cols-3 hover:bg-white/5 transition-colors">
              <div className="p-6 text-white/80 font-medium flex items-center gap-3"><Clock className="w-4 h-4 text-white/40" /> Доступність</div>
              <div className="p-6 border-l border-white/5 text-white/60">8 годин / 5 днів на тиждень</div>
              <div className="p-6 border-l border-white/5 text-emerald-300 font-medium bg-emerald-500/5">24/7/365 без відпусток та лікарняних</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center relative group max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
        <button 
          className="relative w-full py-6 px-8 rounded-2xl bg-[#050505] border border-white/10 text-white font-semibold text-xl hover:bg-[#111] transition-colors flex items-center justify-center gap-4"
          onClick={() => window.open('https://t.me/blvckvvs', '_blank')}
        >
          <Bot className="w-7 h-7 text-emerald-400" />
          Впровадити агента, який почне приносити прибуток сьогодні
        </button>
      </div>
    </motion.div>
  );
};

const AssistantsView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-1 max-w-6xl mx-auto w-full pt-12 pb-24"
    >
      <BackButton onClick={() => onNavigate('tools')} onHome={() => onNavigate('home')} />
      
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-sm font-medium text-orange-400 tracking-wider uppercase">Каталог Асистентів</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Бойові одиниці, <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">готові до інтеграції</span>
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Кожен асистент — це гнучка архітектура, яка <strong className="text-white">кастомізується під специфічний запит</strong> вашого бізнесу.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            id: 'support',
            title: 'Support-Асистент',
            price: '$500',
            icon: <Headphones className="w-5 h-5" />,
            colorClass: 'text-cyan-400',
            bgClass: 'bg-cyan-500/10',
            borderHover: 'hover:border-cyan-500/30',
            desc: 'Закриває 90% звернень клієнтів за мілісекунди. Усуває черги та людський фактор.',
            stack: 'Омніканальність (TG, Web), CRM-інтеграція, RAG-база знань.',
            roi: 'Знижує витрати на саппорт на 80%'
          },
          {
            id: 'sales',
            title: 'Sales-Асистент',
            price: '$800',
            icon: <DollarSign className="w-5 h-5" />,
            colorClass: 'text-emerald-400',
            bgClass: 'bg-emerald-500/10',
            borderHover: 'hover:border-emerald-500/30',
            desc: 'Прогріває лідів, кваліфікує їх та доводить до оплати. Не вигорає, працює 24/7.',
            stack: 'NLP-переговори, генерація інвойсів, автоматичні фолоу-апи.',
            roi: 'Знижує вартість залучення клієнта (CAC) вдвічі'
          },
          {
            id: 'hr',
            title: 'HR-Скринер',
            price: '$600',
            icon: <Users className="w-5 h-5" />,
            colorClass: 'text-purple-400',
            bgClass: 'bg-purple-500/10',
            borderHover: 'hover:border-purple-500/30',
            desc: 'Автоматизує найм: від парсингу резюме до проведення первинних інтерв\'ю.',
            stack: 'Аналіз CV, скоринг кандидатів, авто-призначення зустрічей.',
            roi: 'Економить 40+ годин роботи рекрутера щотижня'
          },
          {
            id: 'executive',
            title: 'Executive-Асистент',
            price: '$1,000',
            icon: <Briefcase className="w-5 h-5" />,
            colorClass: 'text-blue-400',
            bgClass: 'bg-blue-500/10',
            borderHover: 'hover:border-blue-500/30',
            desc: 'Бере на себе мікроменеджмент, планування та зведення звітів для керівника.',
            stack: 'Календарне планування, email-фільтрація, executive summary.',
            roi: 'Звільняє 3-4 години часу CEO щодня'
          },
          {
            id: 'tech',
            title: 'Tech-Асистент',
            price: '$1,200',
            icon: <Code2 className="w-5 h-5" />,
            colorClass: 'text-orange-400',
            bgClass: 'bg-orange-500/10',
            borderHover: 'hover:border-orange-500/30',
            desc: 'Автоматично тестує код, знаходить баги та моніторить стабільність інфраструктури.',
            stack: 'CI/CD інтеграції, авто-написання тестів, 24/7 моніторинг логів.',
            roi: 'Замінює штат з 2-х QA-інженерів'
          },
          {
            id: 'design',
            title: 'Design-Генератор',
            price: '$400',
            icon: <Palette className="w-5 h-5" />,
            colorClass: 'text-pink-400',
            bgClass: 'bg-pink-500/10',
            borderHover: 'hover:border-pink-500/30',
            desc: 'Масово створює креативи для рекламних кампаній та адаптує їх під різні формати.',
            stack: 'Генерація зображень, ресайз під соцмережі, A/B тестування.',
            roi: 'Знижує витрати на продакшен креативів на 70%'
          },
          {
            id: 'finance',
            title: 'Finance-Аудитор',
            price: '$1,500',
            icon: <PieChart className="w-5 h-5" />,
            colorClass: 'text-yellow-400',
            bgClass: 'bg-yellow-500/10',
            borderHover: 'hover:border-yellow-500/30',
            desc: 'Контролює cash flow, звіряє рахунки та сигналізує про касові розриви.',
            stack: 'API-банкінг, генерація P&L звітів, авто-оплата рахунків.',
            roi: 'Нуль помилок у звітності, економія на рутині'
          },
          {
            id: 'niche',
            title: 'Custom-Асистент',
            price: 'від $700',
            icon: <Target className="w-5 h-5" />,
            colorClass: 'text-red-400',
            bgClass: 'bg-red-500/10',
            borderHover: 'hover:border-red-500/30',
            desc: 'Розробляється під унікальний бізнес-процес вашої компанії. Від логістики до виробництва.',
            stack: 'Будь-які API, кастомні LLM-моделі, інтеграція з внутрішнім ПЗ.',
            roi: 'Необмежений потенціал масштабування'
          }
        ].map((assistant) => (
          <GlassCard key={assistant.id} className={`p-6 hover:bg-white/5 transition-colors group flex flex-col h-full border-white/5 ${assistant.borderHover}`}>
            <div className="flex items-start justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-lg ${assistant.bgClass} ${assistant.colorClass} group-hover:scale-110 transition-transform shrink-0`}>
                  {assistant.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">{assistant.title}</h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium border border-white/5 text-white/90 shrink-0 mt-1">{assistant.price}</span>
            </div>
            <p className="text-sm text-white/60 mb-6 flex-grow">{assistant.desc}</p>
            <div className="space-y-4 text-sm mt-auto">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-white/40 block text-xs mb-1 uppercase tracking-wider">Стек можливостей</span>
                <span className="text-white/80 font-medium">{assistant.stack}</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-emerald-400 font-semibold block">ROI Показник</span>
                  <span className="text-white/70">{assistant.roi}</span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
};

const EcosystemView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-1 max-w-6xl mx-auto w-full pt-12 pb-24"
    >
      <BackButton onClick={() => onNavigate('tools')} onHome={() => onNavigate('home')} />
      
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">Premium Segment</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          ШІ Екосистема: <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Business Autopilot</span>
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Глобальна архітектура, де Sales, Support, HR та Finance працюють як <strong className="text-white">єдиний організм</strong>.
        </p>
      </div>

      <GlassCard className="p-8 mb-16 border-indigo-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Математика <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">ефективності</span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Разова інвестиція <strong className="text-white">від $4000</strong>. Результат — економія десятків тисяч доларів щомісяця на фонді оплати праці. Система виключає людський фактор, лікарняні та вигорання.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="p-5 rounded-xl bg-black/40 border border-white/10 flex-1 min-w-[140px]">
                <div className="text-indigo-400 font-bold text-3xl mb-1">100%</div>
                <div className="text-sm text-white/50 font-medium">Синхронізація відділів</div>
              </div>
              <div className="p-5 rounded-xl bg-black/40 border border-white/10 flex-1 min-w-[140px]">
                <div className="text-emerald-400 font-bold text-3xl mb-1">0</div>
                <div className="text-sm text-white/50 font-medium">Помилок через втому</div>
              </div>
              <div className="p-5 rounded-xl bg-black/40 border border-white/10 flex-1 min-w-[140px]">
                <div className="text-purple-400 font-bold text-3xl mb-1">24/7</div>
                <div className="text-sm text-white/50 font-medium">Безперервна робота</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 shrink-0">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-center shadow-[0_0_30px_rgba(99,102,241,0.15)]">
              <div className="text-sm text-indigo-300 font-medium mb-3 uppercase tracking-wide">Вартість впровадження</div>
              <div className="text-5xl font-bold text-white mb-3">від $4000</div>
              <div className="text-sm text-white/60">Один раз. Працює завжди.</div>
            </div>
          </div>
        </div>
      </GlassCard>

      <h3 className="text-2xl font-bold mb-8 text-center">
        Архітектура <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">єдиного організму</span>
      </h3>
      <div className="relative mb-20 max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center z-10 shadow-[0_0_50px_rgba(99,102,241,0.3)] backdrop-blur-md">
          <Network className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-28 sm:gap-x-48 sm:gap-y-16 relative z-0">
          <GlassCard className="p-4 sm:p-6 text-center border-white/10 relative group hover:border-emerald-500/30 transition-colors">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-lg">Sales-Вузол</h4>
            <p className="text-xs sm:text-sm text-white/50 leading-tight">Генерація та закриття угод</p>
          </GlassCard>
          <GlassCard className="p-4 sm:p-6 text-center border-white/10 relative group hover:border-cyan-500/30 transition-colors">
            <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-lg">Support-Вузол</h4>
            <p className="text-xs sm:text-sm text-white/50 leading-tight">Миттєва підтримка клієнтів</p>
          </GlassCard>
          <GlassCard className="p-4 sm:p-6 text-center border-white/10 relative group hover:border-purple-500/30 transition-colors">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-lg">HR-Вузол</h4>
            <p className="text-xs sm:text-sm text-white/50 leading-tight">Скринінг та онбординг</p>
          </GlassCard>
          <GlassCard className="p-4 sm:p-6 text-center border-white/10 relative group hover:border-yellow-500/30 transition-colors">
            <PieChart className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-lg">Finance-Вузол</h4>
            <p className="text-xs sm:text-sm text-white/50 leading-tight">Аудит та контроль cash flow</p>
          </GlassCard>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <GlassCard className="p-8 border-white/5 hover:bg-white/5 transition-colors">
          <Database className="w-10 h-10 text-blue-400 mb-5" />
          <h4 className="text-xl font-semibold text-white mb-3">Власна база знань (RAG)</h4>
          <p className="text-white/60 leading-relaxed">
            Система завантажує кожен ваш документ, регламент та історію комунікацій. ШІ приймає рішення на основі ваших реальних даних, а не загальних алгоритмів.
          </p>
        </GlassCard>
        <GlassCard className="p-8 border-white/5 hover:bg-white/5 transition-colors">
          <Cpu className="w-10 h-10 text-orange-400 mb-5" />
          <h4 className="text-xl font-semibold text-white mb-3">API-Інтеграція</h4>
          <p className="text-white/60 leading-relaxed">
            Безшовне підключення до будь-якого софту: CRM, ERP, банкінг, месенджери. Екосистема керує вашими програмами так само, як це робить людина.
          </p>
        </GlassCard>
        <GlassCard className="p-8 border-white/5 hover:bg-white/5 transition-colors">
          <ShieldCheck className="w-10 h-10 text-emerald-400 mb-5" />
          <h4 className="text-xl font-semibold text-white mb-3">Повна безпека даних</h4>
          <p className="text-white/60 leading-relaxed">
            Ізольовані контури даних. Жоден байт корпоративної інформації не потрапляє у відкритий доступ. Строгий контроль доступу та шифрування.
          </p>
        </GlassCard>
      </div>

      <div className="text-center relative group max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
        <button 
          className="relative w-full py-6 px-8 rounded-2xl bg-[#050505] border border-white/10 text-white font-semibold text-xl hover:bg-[#111] transition-colors flex items-center justify-center gap-4"
          onClick={() => window.open('https://t.me/blvckvvs', '_blank')}
        >
          <Zap className="w-7 h-7 text-indigo-400" />
          Запустити Business Autopilot
        </button>
      </div>
    </motion.div>
  );
};

const WebsitesView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-1 max-w-6xl mx-auto w-full pt-12 pb-24"
    >
      <BackButton onClick={() => onNavigate('tools')} onHome={() => onNavigate('home')} />
      
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">Точка збору даних</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Живі ШІ-Сайти: <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Вхідні ворота для ваших агентів</span>
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Купувати сайт без ШІ-модулів у 2026 році — це викидати гроші на вітер. Звичайний сайт — це мертва візитка. AXON створює <strong className="text-white">активний інструмент</strong>, який працює на вас.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <GlassCard className="p-8 border-red-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 rounded-xl bg-red-500/10 text-red-400 shrink-0">
              <XCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Мертва візитка <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">(Минуле)</span>
            </h3>
          </div>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-3 text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
              <p>Просто висить в інтернеті як статична картинка.</p>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
              <p>Пасивно чекає, поки клієнт сам здогадається подзвонити.</p>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
              <p>Застаріває за рік. Потребує постійних ручних правок.</p>
            </li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 border-blue-500/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              ШІ-Сайт <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AXON (2026)</span>
            </h3>
          </div>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-3 text-white/80">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
              <p>Активно збирає, структурує та аналізує дані відвідувачів.</p>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
              <p>Кваліфікує ліда ще до дзвінка через вбудовані мікро-агенти.</p>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
              <p>Інтегрується з екосистемою та еволюціонує разом з бізнесом.</p>
            </li>
          </ul>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <GlassCard className="p-8 border-white/5 hover:bg-white/5 transition-colors">
          <Zap className="w-10 h-10 text-yellow-400 mb-5" />
          <h4 className="text-xl font-semibold text-white mb-3">
            Швидкість як <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">релігія</span>
          </h4>
          <p className="text-white/60 leading-relaxed">
            Запуск за 72 години. Жодних місяців очікування та "правок шрифтів". Ми розгортаємо готову бойову одиницю швидше, ніж ваші конкуренти встигнуть провести нараду.
          </p>
        </GlassCard>
        <GlassCard className="p-8 border-white/5 hover:bg-white/5 transition-colors">
          <BrainCircuit className="w-10 h-10 text-purple-400 mb-5" />
          <h4 className="text-xl font-semibold text-white mb-3">
            Інтелектуальні <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">форми</span>
          </h4>
          <p className="text-white/60 leading-relaxed">
            Забудьте про "Залиште email". Наші форми — це мікро-агенти. Вони аналізують ліда в реальному часі, кваліфікують його та передають у CRM вже з готовим профілем.
          </p>
        </GlassCard>
        <GlassCard className="p-8 border-white/5 hover:bg-white/5 transition-colors">
          <Code2 className="w-10 h-10 text-emerald-400 mb-5" />
          <h4 className="text-xl font-semibold text-white mb-3">
            Технологічний <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">стек</span>
          </h4>
          <p className="text-white/60 leading-relaxed">
            React, Tailwind, Next.js. Блискавичне завантаження, ідеальна архітектура, SEO-оптимізація "з коробки". Ваш сайт працює швидше, ніж думка клієнта.
          </p>
        </GlassCard>
        <GlassCard className="p-8 border-white/5 hover:bg-white/5 transition-colors">
          <Palette className="w-10 h-10 text-pink-400 mb-5" />
          <h4 className="text-xl font-semibold text-white mb-3">
            Естетика <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">AXON OS</span>
          </h4>
          <p className="text-white/60 leading-relaxed">
            Темно. Стильно. Дорого. Дизайн, який транслює домінування на ринку. Жодних шаблонів з 2010-х — лише преміальний мінімалізм.
          </p>
        </GlassCard>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
          <div className="text-left">
            <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Інвестиція</div>
            <div className="text-2xl font-bold text-white">від $300</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-left">
            <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Термін</div>
            <div className="text-2xl font-bold text-white">3 дні</div>
          </div>
        </div>
        
        <button 
          className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-3"
          onClick={() => window.open('https://t.me/blvckvvs', '_blank')}
        >
          <Globe className="w-6 h-6" />
          Замовити ШІ-Сайт
        </button>
      </div>
    </motion.div>
  );
};

const WebAppsView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-1 max-w-6xl mx-auto w-full pt-12 pb-24"
    >
      <BackButton onClick={() => onNavigate('tools')} onHome={() => onNavigate('home')} />
      
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">Інструмент для роботи</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Веб-додатки AXON: <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Індивідуальні цифрові рішення</span>
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Ми створюємо не просто сторінки, а <strong className="text-white">складні сервіси з унікальною логікою</strong>, що вирішують специфічні завдання вашого бізнесу. Перехід від "сайту для інформації" до "інструменту для роботи".
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <GlassCard className="p-8 border-white/5 hover:border-purple-500/30 transition-colors group">
          <Calculator className="w-10 h-10 text-purple-400 mb-5 group-hover:scale-110 transition-transform" />
          <h4 className="text-xl font-semibold text-white mb-3">
            Інтелектуальні <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">калькулятори</span>
          </h4>
          <p className="text-white/60 leading-relaxed">
            Розрахунок вартості складних послуг, логістичних маршрутів або окупності інвестицій з миттєвою видачею результату. Автоматизуйте прорахунки, які раніше робили менеджери.
          </p>
        </GlassCard>
        <GlassCard className="p-8 border-white/5 hover:border-pink-500/30 transition-colors group">
          <Eye className="w-10 h-10 text-pink-400 mb-5 group-hover:scale-110 transition-transform" />
          <h4 className="text-xl font-semibold text-white mb-3">
            ШІ-примірочні та <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">візуалізатори</span>
          </h4>
          <p className="text-white/60 leading-relaxed">
            Інструменти, що дозволяють клієнту побачити результат до покупки (наприклад, примірка дисків на авто або б'юті-фільтри) за допомогою доповненої реальності або ШІ.
          </p>
        </GlassCard>
        <GlassCard className="p-8 border-white/5 hover:border-blue-500/30 transition-colors group">
          <LayoutDashboard className="w-10 h-10 text-blue-400 mb-5 group-hover:scale-110 transition-transform" />
          <h4 className="text-xl font-semibold text-white mb-3">
            Внутрішні <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CRM-системи</span>
          </h4>
          <p className="text-white/60 leading-relaxed">
            Легкі та швидкі кастомні панелі керування для ваших співробітників. Жодного зайвого функціоналу — тільки ваші дані та ваші унікальні бізнес-процеси.
          </p>
        </GlassCard>
        <GlassCard className="p-8 border-white/5 hover:border-emerald-500/30 transition-colors group">
          <SlidersHorizontal className="w-10 h-10 text-emerald-400 mb-5 group-hover:scale-110 transition-transform" />
          <h4 className="text-xl font-semibold text-white mb-3">
            Складні фільтри та <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">бази даних</span>
          </h4>
          <p className="text-white/60 leading-relaxed">
            Системи підбору товарів чи послуг на основі десятків параметрів, що працюють миттєво. Клієнт знаходить саме те, що йому потрібно, за лічені секунди.
          </p>
        </GlassCard>
      </div>

      <GlassCard className="p-8 md:p-12 mb-16 border-purple-500/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Технологічна <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">перевага</span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Ми використовуємо сучасну зв'язку <strong className="text-white">Next.js + Supabase</strong>. Це дозволяє вашому додатку "літати", витримувати будь-які навантаження та легко масштабуватися від 10 до 100 000 користувачів без втрати швидкості.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white/80">
                Next.js
              </div>
              <div className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white/80">
                Supabase
              </div>
              <div className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white/80">
                Tailwind CSS
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 shrink-0">
            <div className="p-8 rounded-2xl bg-black/60 border border-white/10 relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">ROI Показник</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Такий додаток замінює години роботи консультантів, дозволяючи клієнту самостійно пройти <strong className="text-white">90% шляху до покупки</strong>.
              </p>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
          <div className="text-left">
            <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Інвестиція</div>
            <div className="text-2xl font-bold text-white">від $650</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-left">
            <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Цінність</div>
            <div className="text-2xl font-bold text-white">Enterprise-рівень</div>
          </div>
        </div>
        
        <button 
          className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center gap-3"
          onClick={() => window.open('https://t.me/blvckvvs', '_blank')}
        >
          <Smartphone className="w-6 h-6" />
          Замовити Веб-додаток
        </button>
      </div>
    </motion.div>
  );
};

const ExpertAutonomyGrid = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mb-20 p-8 md:p-16 bg-[#020202] rounded-3xl border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
      
      {/* Terminal Header */}
      <div className="absolute top-6 left-6 flex gap-6 font-mono text-[10px] sm:text-xs text-white/40 tracking-widest z-20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          STATUS: ACTIVE
        </div>
        <div className="hidden sm:block">LOAD: 0%</div>
        <div className="text-pink-500/80">ROAS: 5.2x</div>
      </div>

      <div className="relative h-[400px] md:h-[300px] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 mt-8">
        
        {/* Connecting Lines (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-pink-500/0 z-0">
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
          />
        </div>
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[60%] bg-gradient-to-b from-cyan-500/0 via-purple-500/50 to-pink-500/0 z-0">
           <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
            className="w-full h-1/3 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"
          />
        </div>

        {/* Connecting Lines (Mobile) */}
        <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-cyan-500/0 via-purple-500/50 to-pink-500/0 z-0">
           <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/3 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"
          />
        </div>

        {/* Traffic Node (Top on mobile, Left on desktop) */}
        <div className="absolute md:relative top-[5%] md:top-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:absolute md:left-[10%] z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center relative backdrop-blur-sm">
            <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-[ping_3s_ease-in-out_infinite]" />
            <Activity className="w-6 h-6 text-cyan-400" />
            {/* Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  x: [Math.random() * 40 - 20, 0],
                  y: [Math.random() * 40 - 20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-cyan-300 rounded-full"
              />
            ))}
          </div>
          <div className="mt-3 font-mono text-xs text-cyan-400/70 tracking-widest uppercase">Traffic</div>
        </div>

        {/* Center Node: EXPERT CORE */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/10 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border-t border-r border-purple-500/30"
            />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/5 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <BrainCircuit className="w-8 h-8 text-white/80" />
            </div>
          </div>
          <div className="absolute -bottom-8 font-mono text-sm text-white tracking-[0.3em] font-bold">
            EXPERT CORE
          </div>
        </div>

        {/* Sales Node (Right on desktop, Bottom Right on mobile) */}
        <div className="absolute md:relative bottom-[10%] md:bottom-auto right-[15%] md:right-auto md:absolute md:right-[10%] z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-pink-500/30 bg-pink-500/5 flex items-center justify-center relative backdrop-blur-sm overflow-hidden">
             {/* Micro-graph */}
             <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center gap-1 p-3 opacity-60">
                {[40, 60, 30, 80, 50, 90].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: "10%" }}
                    animate={{ height: [`${h}%`, `${Math.max(10, h - 20)}%`, `${Math.min(100, h + 20)}%`] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, repeatType: "mirror" }}
                    className="w-1.5 bg-pink-500 rounded-t-sm"
                  />
                ))}
             </div>
          </div>
          <div className="mt-3 font-mono text-xs text-pink-400/70 tracking-widest uppercase">Sales</div>
        </div>

        {/* Support Node (Bottom Left on mobile, Bottom Center on desktop) */}
        <div className="absolute md:relative bottom-[10%] md:bottom-auto left-[15%] md:left-auto md:absolute md:bottom-[0%] z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-center relative backdrop-blur-sm overflow-hidden">
            <MessageCircle className="w-5 h-5 text-emerald-400/50 absolute" />
            {/* Collapsing Messages */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: [0, 1, 0], y: [10, 0, -10], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                  className="w-8 h-2 bg-emerald-500/40 rounded-full mb-1"
                />
              ))}
            </div>
          </div>
          <div className="mt-3 font-mono text-xs text-emerald-400/70 tracking-widest uppercase">Support</div>
        </div>

      </div>
    </div>
  );
};

const ExpertView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col flex-1 max-w-6xl mx-auto w-full pt-12 pb-24"
    >
      <BackButton onClick={() => onNavigate('home')} onHome={() => onNavigate('home')} />
      
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">Масштабування експертності</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          AI-Запуски для Експертів: <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Ти створюєш контент — ШІ будує бізнес</span>
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Перетвори свої знання (коучинг, б'юті, викладання) на масштабну IT-систему. З AXON ти переходиш із ліги ремісників у лігу <strong className="text-white">технологічних підприємців</strong>.
        </p>
      </div>

      <ExpertAutonomyGrid />

      {/* Tools Section */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Інструменти твого <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI-Запуску</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="p-8 border-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <Bot className="w-10 h-10 text-blue-400 mb-5 relative z-10" />
            <h4 className="text-xl font-semibold text-white mb-3 relative z-10">
              Агент-<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Куратор</span>
            </h4>
            <p className="text-white/60 leading-relaxed relative z-10">
              ШІ, який <strong className="text-white">знає твою методику напам'ять</strong>. Він перевіряє домашні завдання 24/7, дає фідбек у твоєму стилі (tone of voice) та мотивує учнів не кидати курс.
            </p>
          </GlassCard>
          
          <GlassCard className="p-8 border-purple-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <Globe className="w-10 h-10 text-purple-400 mb-5 relative z-10" />
            <h4 className="text-xl font-semibold text-white mb-3 relative z-10">
              Автономний <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ШІ-Сайт</span>
            </h4>
            <p className="text-white/60 leading-relaxed relative z-10">
              Сайт, який не просто показує програму, а <strong className="text-white">сам продає курс</strong>. Вбудований Sales-агент спілкується з лідами прямо у віджеті або месенджерах, закриваючи заперечення.
            </p>
          </GlassCard>

          <GlassCard className="p-8 border-pink-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <Smartphone className="w-10 h-10 text-pink-400 mb-5 relative z-10" />
            <h4 className="text-xl font-semibold text-white mb-3 relative z-10">
              Кастомний <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Додаток</span>
            </h4>
            <p className="text-white/60 leading-relaxed relative z-10">
              Потужний бонус до навчання. Наприклад, <strong className="text-white">ШІ-калькулятор калорій</strong> для нутриціолога або <strong className="text-white">віртуальна примірочна</strong> для стиліста. Це підвищує чек у рази.
            </p>
          </GlassCard>
        </div>
      </div>

      {/* Stages Section */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Етапи AI-Запуску <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">"Під Ключ"</span>
        </h3>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 shrink-0 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xl border border-purple-500/30">1</div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Оцифрування експертності <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">(RAG)</span>
              </h4>
              <p className="text-white/60">Ми завантажуємо ваші лекції, пости, голосові повідомлення та методички у векторну базу даних. ШІ стає вашим цифровим клоном.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-500/30">2</div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Розробка <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">інфраструктури</span>
              </h4>
              <p className="text-white/60">Створюємо ШІ-сайт для конвертації трафіку, налаштовуємо Sales-агента для продажів у Telegram/Instagram та розробляємо кастомний додаток-бонус.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">3</div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Автоматизація виконання <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">(Fulfillment)</span>
              </h4>
              <p className="text-white/60">Підключаємо Агента-Куратора до вашої платформи (GetCourse, Telegram-канал). Він автоматично видає доступи, перевіряє ДЗ та відповідає на запитання учнів.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 shrink-0 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-xl border border-pink-500/30">4</div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Масштабування</span>
              </h4>
              <p className="text-white/60">Ви записуєте новий контент, а система автономно обробляє тисячі учнів без розширення штату кураторів та менеджерів з продажу.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center relative group max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
        <button 
          className="relative w-full py-6 px-8 rounded-2xl bg-[#050505] border border-white/10 text-white font-semibold text-xl hover:bg-[#111] transition-colors flex items-center justify-center gap-4"
          onClick={() => window.open('https://t.me/andrew_polozovskiy', '_blank')}
        >
          <Rocket className="w-7 h-7 text-purple-400" />
          Обговорити мій AI-Запуск
        </button>
      </div>
    </motion.div>
  );
};
