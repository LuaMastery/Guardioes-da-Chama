import React, { useState, useEffect, useRef } from 'react';
import { Book, Chapter, InteractiveComponentType } from './types';
import { LIBRARY_BOOKS } from './constants';
import { Flame, BookOpen, Scroll, X, ChevronRight, ChevronLeft, Menu, Shield, Terminal, Activity, Layers, MessageSquare, Code, AlertTriangle, Maximize2, Minimize2, User, Crown, Cpu, Bell, Gavel, Scale, Eye, ArrowRight, MessageCircle, Search, Send, Heart, ThumbsUp } from 'lucide-react';

declare var process: any;

// --- Audio System (UI SFX - Interface Sounds Only) ---

const useSound = () => {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playHover = () => {
    const ctx = initAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Som sutil de "tick" de ar/alta frequência
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.015, ctx.currentTime); // Volume muito baixo
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  };

  const playClick = () => {
    const ctx = initAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Som de "blip" suave e tecnológico
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  };

  return { playHover, playClick };
};

// --- Notifications System ---

interface NotificationUpdate {
  id: string;
  title: string;
  description: string;
  date: string;
  read: boolean;
}

const RECENT_UPDATES: NotificationUpdate[] = [
  { id: '1', title: 'Novo Capítulo: O Protocolo Fênix', description: 'Adicionado ao livro "Crisis Management". Aprenda como renascer um servidor.', date: 'Hoje', read: false },
  { id: '3', title: 'Modo Leitura', description: 'Agora com navegação lateral e melhor contraste.', date: '2 dias atrás', read: true },
];

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [updates, setUpdates] = useState(RECENT_UPDATES);
  const [permission, setPermission] = useState(Notification.permission);
  const { playHover, playClick } = useSound();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = updates.filter(u => !u.read).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    playClick();
    setIsOpen(!isOpen);
    if (!isOpen && unreadCount > 0) {
      // Mark as read after a delay
      setTimeout(() => {
        setUpdates(prev => prev.map(u => ({ ...u, read: true })));
      }, 2000);
    }
  };

  const requestNotificationPermission = async () => {
    playClick();
    if (!("Notification" in window)) {
      alert("Este navegador não suporta notificações.");
      return;
    }

    const permission = await Notification.requestPermission();
    setPermission(permission);

    if (permission === "granted") {
      new Notification("Guardiões da Chama", {
        body: "As notificações estão ativas. Você será avisado de novos capítulos.",
        icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png" // Generic flame icon fallback
      });
    }
  };

  const simulatePush = () => {
     if (Notification.permission === "granted") {
        playClick();
        const newUpdate = { 
            id: Date.now().toString(), 
            title: 'Alerta de Invasão (Simulação)', 
            description: 'Tráfego suspeito detectado na porta 27015. Verifique os logs.', 
            date: 'Agora', 
            read: false 
        };
        
        setUpdates(prev => [newUpdate, ...prev]);
        
        new Notification("Alerta do Guardião", {
            body: "Tráfego suspeito detectado na porta 27015.",
            icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png"
        });
     }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={handleToggle}
        onMouseEnter={playHover}
        className="relative p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
        title="Atualizações"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-flame-500 rounded-full animate-pulse shadow-[0_0_8px_#ff4500]"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-80 md:w-96 bg-zinc-950 border border-zinc-800 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          <div className="p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
            <h3 className="font-display text-sm font-bold text-white tracking-widest uppercase">Notificações</h3>
            <span className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">v1.4.0</span>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {permission === 'default' && (
              <div className="p-4 bg-flame-600/10 border-b border-flame-500/20">
                <p className="text-xs text-zinc-300 mb-3 leading-relaxed">
                  Ative as notificações para saber quando novos capítulos ou livros forem adicionados à biblioteca.
                </p>
                <button 
                  onClick={requestNotificationPermission}
                  onMouseEnter={playHover}
                  className="w-full py-2 bg-flame-600 hover:bg-flame-500 text-white text-xs font-bold uppercase tracking-widest rounded transition-colors"
                >
                  Ativar Push
                </button>
              </div>
            )}
            
            {permission === 'granted' && (
               <div className="px-4 py-2 bg-zinc-900/30 border-b border-white/5 flex justify-end">
                  <button 
                    onClick={simulatePush}
                    className="text-[10px] uppercase tracking-widest text-flame-500 hover:text-white transition-colors"
                  >
                    Simular Alerta
                  </button>
               </div>
            )}

            {updates.map(update => (
              <div key={update.id} className={`p-4 border-b border-white/5 hover:bg-zinc-900/50 transition-colors ${!update.read ? 'bg-zinc-900/20' : ''}`}>
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`text-sm font-bold ${!update.read ? 'text-white' : 'text-zinc-400'}`}>{update.title}</h4>
                  {!update.read && <span className="w-1.5 h-1.5 bg-flame-500 rounded-full mt-1.5"></span>}
                </div>
                <p className="text-xs text-zinc-500 mb-2 leading-relaxed">{update.description}</p>
                <span className="text-[10px] text-zinc-600 uppercase tracking-wider">{update.date}</span>
              </div>
            ))}
          </div>
          
          <div className="p-3 text-center bg-zinc-900/50 border-t border-white/5">
            <button className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">
              Marcar todas como lidas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Interactive Components ---

// 1. Console Simulator
const ConsoleSimulator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['> Conectado ao servidor Source Engine v1.35', '> Aguardando comando...']);
  const { playClick } = useSound();
  
  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      playClick();
      const cmd = input.trim();
      let response = '';
      
      if (cmd.startsWith('sm_ban')) {
        if (cmd.includes('"') && cmd.match(/\d+/)) {
           response = `> SUCESSO: Jogador banido. ID registrado no banco de dados.`;
        } else {
           response = `> ERRO DE SINTAXE: Use sm_ban "nome" <minutos> [motivo]`;
        }
      } else if (cmd === 'status') {
        response = `> hostname: Servidor Guardiões\n> map : de_dust2\n> players : 1 humans, 0 bots`;
      } else if (cmd === '') {
        response = '>';
      } else {
        response = `> Comando desconhecido: ${cmd}`;
      }
      
      setHistory([...history, `> ${cmd}`, response]);
      setInput('');
    }
  };

  return (
    <div className="my-8 rounded-lg overflow-hidden border border-zinc-700 bg-black font-mono text-sm shadow-2xl">
      <div className="bg-zinc-800 px-4 py-2 text-zinc-400 text-xs flex items-center gap-2">
        <Terminal className="w-3 h-3" /> CONSOLE DE ADMINISTRAÇÃO (Simulação)
      </div>
      <div className="p-4 h-64 overflow-y-auto space-y-1 text-green-500">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap opacity-90">{line}</div>
        ))}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-white animate-pulse">_</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none text-white w-full font-mono"
            placeholder="Digite um comando (ex: sm_ban ou status)..."
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

// 2. Flame Balance
const FlameBalance = () => {
  const [value, setValue] = useState(50);
  const { playHover } = useSound();
  
  let message = "";
  let color = "";
  
  if (value < 30) {
    message = "Muito Brando: O fogo se apaga. A toxicidade toma conta porque não há limites. Jogadores hardcore saem.";
    color = "text-blue-400";
  } else if (value > 70) {
    message = "Muito Rígido: O fogo queima a floresta. A comunidade morre sufocada. Ninguém se diverte.";
    color = "text-red-500";
  } else {
    message = "Equilíbrio do Guardião: Calor suficiente para acolher, limites firmes para proteger.";
    color = "text-flame-500";
  }

  return (
    <div className="my-12 p-8 border border-white/10 bg-zinc-900/50 rounded-xl">
      <h4 className="font-display text-white text-lg mb-6 flex items-center gap-2">
        <Activity className="w-5 h-5 text-flame-500" /> Calibrando a Intervenção
      </h4>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={value} 
        onChange={(e) => {
          setValue(Number(e.target.value));
          playHover(); 
        }}
        className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-flame-500"
      />
      <div className="flex justify-between text-xs text-zinc-500 mt-2 font-serif uppercase tracking-widest">
        <span>Anarquia</span>
        <span>Tirania</span>
      </div>
      <p className={`mt-6 text-center font-serif text-lg transition-colors duration-300 ${color}`}>
        {message}
      </p>
    </div>
  );
};

// 3. Server Layers
const ServerLayers = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const { playHover } = useSound();
  
  const layers = [
    { name: 'Edge / CDN', desc: 'Primeira barreira. Absorve ataques volumétricos massivos (L3/L4) longe do seu servidor.' },
    { name: 'Firewall de Hardware', desc: 'Filtra pacotes maliciosos via lista de controle (ACL) antes do SO.' },
    { name: 'Aplicação (Game Server)', desc: 'Onde o jogo roda. Vulnerável a exploits de L7. Precisa de patches constantes.' },
    { name: 'Database', desc: 'O coração sagrado. Nunca deve ser exposto publicamente (apenas localhost ou VPN).' }
  ];

  return (
    <div className="my-12 flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-4 text-zinc-400 text-sm uppercase tracking-widest">
        <Layers className="w-4 h-4" /> Camadas de Defesa
      </div>
      {layers.map((layer, idx) => (
        <div 
          key={idx}
          onMouseEnter={() => {
            setActiveLayer(idx);
            playHover();
          }}
          onMouseLeave={() => setActiveLayer(null)}
          className={`p-4 border transition-all duration-300 cursor-help ${
            activeLayer === idx 
              ? 'bg-zinc-800 border-flame-500 scale-105 shadow-[0_0_15px_rgba(255,69,0,0.3)]' 
              : 'bg-black border-zinc-800 hover:border-zinc-600'
          }`}
        >
          <div className="font-bold text-white font-display">{layer.name}</div>
          <div className={`text-sm text-zinc-400 mt-1 transition-all duration-300 ${activeLayer === idx ? 'opacity-100 max-h-20' : 'opacity-60 max-h-0 md:max-h-20 overflow-hidden'}`}>
            {layer.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

// 4. Dialogue Tree (Psychology)
interface DialogueScenario {
  text: string;
  options: {
    label: string;
    outcome: string;
    success: boolean;
  }[];
}

const DialogueTree = ({ data }: { data?: { scenarios: DialogueScenario[] } }) => {
  const [step, setStep] = useState(0);
  const { playHover, playClick } = useSound();
  
  const scenarios = data?.scenarios || [];
  
  if (scenarios.length === 0) {
    return (
      <div className="my-12 p-4 border border-red-900 bg-red-900/10 text-red-500 rounded">
        Carregando simulador... (Dados não encontrados)
      </div>
    );
  }

  const currentScenario = scenarios[Math.min(step, scenarios.length - 1)];
  const isFinished = step >= scenarios.length;

  return (
    <div className="my-12 bg-zinc-900 border border-zinc-700 p-6 rounded-lg">
       <div className="flex items-center gap-2 mb-6 text-flame-500 font-display">
         <MessageSquare className="w-5 h-5" /> Simulador de Decisões
       </div>
       
       {!isFinished ? (
         <>
           <p className="text-white text-lg mb-6 italic">"{currentScenario.text}"</p>
           <div className="space-y-3">
             {currentScenario.options.map((opt, idx) => (
               <button 
                 key={idx}
                 onMouseEnter={playHover}
                 onClick={() => {
                   playClick();
                   if (opt.success) setStep(step + 1);
                   else alert(opt.outcome);
                 }}
                 className="w-full text-left p-4 bg-black border border-zinc-800 hover:border-flame-500 hover:bg-zinc-800 transition-all rounded text-sm text-zinc-300"
               >
                 {opt.label}
               </button>
             ))}
           </div>
         </>
       ) : (
         <div className="text-center py-8">
           <h3 className="text-2xl text-flame-500 font-display mb-2">Situação Resolvida</h3>
           <p className="text-zinc-400">Você escolheu o caminho do Guardião. A chama permanece estável.</p>
           <button 
            onClick={() => { playClick(); setStep(0); }} 
            onMouseEnter={playHover}
            className="mt-4 text-xs uppercase tracking-widest text-zinc-500 hover:text-white"
           >
             Reiniciar
           </button>
         </div>
       )}
    </div>
  );
};

// 5. Regex Lab (AutoMod)
const RegexLab = () => {
  const [pattern, setPattern] = useState('b[a@]d');
  const [testString, setTestString] = useState('Esse é um bad server');
  const { playClick } = useSound();
  
  let match = false;
  try {
    const regex = new RegExp(pattern, 'i');
    match = regex.test(testString);
  } catch (e) {
    match = false;
  }

  return (
    <div className="my-12 bg-black border border-zinc-800 p-6 rounded-xl font-mono">
      <div className="flex items-center gap-2 mb-4 text-zinc-400 text-xs uppercase">
        <Code className="w-4 h-4" /> Laboratório Regex
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-zinc-500 text-xs mb-1">Padrão Regex (Javascript)</label>
          <input 
            type="text" 
            value={pattern}
            onClick={playClick}
            onChange={(e) => setPattern(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 text-flame-500 p-2 rounded focus:border-flame-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-zinc-500 text-xs mb-1">Texto de Teste</label>
          <input 
            type="text" 
            value={testString}
            onClick={playClick}
            onChange={(e) => setTestString(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 text-white p-2 rounded focus:border-white focus:outline-none"
          />
        </div>
        
        <div className={`p-4 rounded border ${match ? 'bg-red-900/20 border-red-500 text-red-500' : 'bg-green-900/20 border-green-500 text-green-500'}`}>
          {match ? '⚠️ MATCH DETECTADO (Seria punido)' : '✅ NENHUM MATCH (Passou)'}
        </div>
      </div>
    </div>
  );
};

// 6. Crisis Decision (Crisis Management)
const CrisisDecision = () => {
  const [outcome, setOutcome] = useState<string | null>(null);
  const { playHover, playClick } = useSound();

  return (
    <div className="my-12 p-6 border-l-4 border-red-600 bg-zinc-900">
      <div className="flex items-center gap-2 mb-4 text-red-500 font-bold uppercase tracking-widest text-sm">
        <AlertTriangle className="w-4 h-4" /> Simulação: Vazamento de Dados
      </div>
      
      {!outcome ? (
        <>
          <p className="text-white mb-6">
            Um hacker alega ter o banco de dados de IPs dos seus usuários e ameaça vazar em 1 hora se não receber admin. O que você faz primeiro?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onMouseEnter={playHover}
              onClick={() => { playClick(); setOutcome("bad"); }}
              className="p-4 bg-black border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-sm text-left transition-colors"
            >
              A. Tentar negociar tempo com o hacker no chat privado.
            </button>
            <button 
              onMouseEnter={playHover}
              onClick={() => { playClick(); setOutcome("good"); }}
              className="p-4 bg-black border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-sm text-left transition-colors"
            >
              B. Cortar comunicação, derrubar o servidor temporariamente e notificar a host.
            </button>
          </div>
        </>
      ) : (
        <div className="animate-in fade-in">
          {outcome === "bad" ? (
             <p className="text-red-400">ERRO CRÍTICO. Negociar valida o poder dele. Ele vai vazar de qualquer jeito ou pedir mais. Você perdeu tempo precioso de contenção.</p>
          ) : (
             <p className="text-green-400">CORRETO. Em vazamento, sua prioridade é estancar a sangria. Derrubar o serviço protege quem ainda não foi afetado e tira a alavanca de pressão do atacante.</p>
          )}
          <button 
            onMouseEnter={playHover}
            onClick={() => { playClick(); setOutcome(null); }} 
            className="mt-4 text-zinc-500 text-xs underline"
          >
            Tentar novamente
          </button>
        </div>
      )}
    </div>
  );
};


const UPDATES_DATA = [
  {
    version: 'v1.5.0',
    name: 'A Arte da Influência & Favoritos',
    date: '09/03/2026 18:30',
    description: 'Adicionado o novo livro "A Arte da Influência" com 16 capítulos interativos. Implementado o sistema de Favoritos para salvar seus livros preferidos. Nova página "Sobre" e página dedicada de Atualizações. Melhoria visual nos cards de Tópicos de Discussão.',
    details: [
      'Novo livro "A Arte da Influência" com 16 capítulos focados em popularidade e networking.',
      'Simuladores interativos adicionados: FlameBalance, DialogueTree e CrisisDecision.',
      'Sistema de favoritos utilizando LocalStorage para persistência dos dados.',
      'Página "Sobre" detalhando a missão e os valores dos Guardiões da Chama.',
      'Efeitos de hover aprimorados nos tópicos de discussão para melhor feedback visual.'
    ]
  },
  {
    version: 'v1.4.0',
    name: 'Expansão da Biblioteca',
    date: '09/03/2026 18:20',
    description: 'Adicionado mais informações detalhadas em todos os livros da biblioteca. Atualização dos créditos para incluir o nome original do autor.',
    details: [
      'Descrições de todos os 10 livros originais foram expandidas para maior clareza.',
      'O nome do autor na seção de Créditos foi atualizado para "Doom Reaper (Rhuan de Cillo Silva)".',
      'Pequenos ajustes de tipografia nas descrições dos livros.'
    ]
  },
  {
    version: 'v1.3.0',
    name: 'Animações de Leitura',
    date: '09/03/2026 18:12',
    description: 'Implementada animação de zoom-in suave ao abrir a modal do leitor, melhorando a transição e a experiência do usuário.',
    details: [
      'Adicionada classe animate-in fade-in zoom-in-95 na ReaderModal.',
      'Transições mais suaves ao trocar de capítulos.',
      'Otimização de performance na renderização da modal.'
    ]
  }
];

const UpdatesSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedUpdate, setExpandedUpdate] = useState<string | null>(null);
  const { playHover, playClick } = useSound();

  const filteredUpdates = UPDATES_DATA.filter(update => 
    update.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    update.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    update.version.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-32 px-6 bg-void-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl text-white mb-8 flex items-center gap-4">
          <Bell className="w-8 h-8 text-flame-500" /> Atualizações do Sistema
        </h2>
        
        <div className="relative mb-12 group">
           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-flame-500 transition-colors" />
           </div>
           <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border border-zinc-800 rounded-lg leading-5 bg-zinc-950 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:bg-zinc-900 focus:border-flame-500 transition-all font-sans"
              placeholder="Buscar atualizações por nome, versão ou descrição..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
           />
        </div>

        <div className="space-y-8">
          {filteredUpdates.length > 0 ? filteredUpdates.map((update, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-white/5 p-8 rounded-xl relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-flame-500"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="font-display text-2xl text-white">{update.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500">{update.date}</span>
                  <span className="text-xs font-bold uppercase tracking-widest bg-flame-500/20 text-flame-500 px-3 py-1 rounded border border-flame-500/30">
                    {update.version}
                  </span>
                </div>
              </div>
              <p className="font-serif text-zinc-400 leading-relaxed mb-6">
                {update.description}
              </p>
              
              {expandedUpdate === update.version ? (
                <div className="animate-in fade-in slide-in-from-top-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 border-t border-white/5 pt-4">Detalhes da Atualização:</h4>
                  <ul className="space-y-2 mb-6">
                    {update.details.map((detail, i) => (
                      <li key={i} className="text-sm text-zinc-400 font-serif flex items-start gap-2">
                        <span className="text-flame-500 mt-1">•</span> {detail}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onMouseEnter={playHover}
                    onClick={() => { playClick(); setExpandedUpdate(null); }}
                    className="text-xs uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Ocultar Detalhes <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); setExpandedUpdate(update.version); }}
                  className="text-xs uppercase tracking-widest font-bold text-flame-500 hover:text-white transition-colors flex items-center gap-1"
                >
                  Ver Mais <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )) : (
            <div className="py-12 text-center border border-dashed border-zinc-800 rounded-xl">
                <p className="text-zinc-500 font-serif italic">Nenhuma atualização encontrada para "{searchQuery}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const SobreSection = () => (
  <section className="py-32 px-6 bg-void-900 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-4xl text-white mb-8 text-center">Sobre o Guardiões da Chama</h2>
      <div className="prose prose-invert prose-lg mx-auto font-serif text-zinc-300 leading-loose">
        <p>
          Nosso propósito é fornecer um refúgio e um centro de treinamento para aqueles que dedicam seu tempo a manter comunidades online seguras, saudáveis e divertidas.
        </p>
        <p>
          Os livros em nossa biblioteca não são apenas guias técnicos; são compêndios de filosofia, psicologia e táticas de gestão de crises. Eles ajudarão você a entender a mente dos trolls, a configurar servidores impenetráveis e a liderar com empatia e firmeza.
        </p>
        <p>
          Acreditamos que a moderação é uma arte invisível. Quando bem feita, ninguém percebe. Mas o impacto de um bom Guardião reverbera na vida de milhares de jogadores.
        </p>
      </div>
    </div>
  </section>
);

// --- Main Components ---

const Header = ({ onNavigate }: { onNavigate: (page: 'home' | 'library' | 'philosophy' | 'sobre' | 'credits' | 'updates') => void }) => {
  const { playHover, playClick } = useSound();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-void-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => { playClick(); onNavigate('home'); }}
          onMouseEnter={playHover}
        >
          <div className="relative">
            <Flame className="w-8 h-8 text-flame-500 animate-pulse-slow" />
            <div className="absolute inset-0 bg-flame-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-flame-500 transition-colors">
            GUARDIÕES DA CHAMA
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onMouseEnter={playHover}
            onClick={() => { playClick(); onNavigate('philosophy'); }} 
            className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold"
          >
            Filosofia
          </button>
          <button 
            onMouseEnter={playHover}
            onClick={() => { playClick(); onNavigate('library'); }} 
            className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold"
          >
            Biblioteca
          </button>
          <button 
            onMouseEnter={playHover}
            onClick={() => { playClick(); onNavigate('sobre'); }} 
            className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold"
          >
            Sobre
          </button>
           <button 
            onMouseEnter={playHover}
            onClick={() => { playClick(); onNavigate('credits'); }} 
            className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold"
          >
            Créditos
          </button>
          
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          
          <button 
            onMouseEnter={playHover}
            onClick={() => { playClick(); onNavigate('updates'); }}
            className="relative p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
            title="Atualizações"
          >
            <Bell className="w-5 h-5" />
          </button>
        </nav>
        
        <div className="md:hidden flex items-center gap-4">
           <button 
             onClick={() => { playClick(); onNavigate('updates'); }}
             className="relative p-2 text-zinc-400 hover:text-white"
           >
             <Bell className="w-5 h-5" />
           </button>
           <Menu className="w-6 h-6 text-white" />
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onEnter }: { onEnter: () => void }) => {
  const { playHover, playClick } = useSound();
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-void-900 to-void-900 z-0"></div>
      
      <div className="z-10 text-center max-w-4xl animate-float">
        <div className="mb-6 flex justify-center">
          <Shield className="w-16 h-16 text-flame-500 opacity-80" />
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
          PROTEJA <br/> A <span className="text-flame-500">CHAMA</span>
        </h1>
        <p className="font-serif text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A moderação não é sobre punição. É sobre preservar a luz em um mundo digital escuro.
          <br/><span className="text-sm text-zinc-600 mt-4 block italic">Você não escolheu ser um guardião. Nasceu assim.</span>
        </p>
        
        <button 
          onMouseEnter={playHover}
          onClick={() => { playClick(); onEnter(); }}
          className="group relative px-8 py-4 bg-transparent border border-zinc-700 text-white font-display font-bold tracking-widest overflow-hidden hover:border-flame-500 transition-colors duration-300"
        >
          <span className="relative z-10 group-hover:text-flame-500 transition-colors">ABRIR BIBLIOTECA</span>
          <div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </section>
  );
};

// --- Debate Logic ---

interface Comment {
  id: string;
  author: string;
  text: string;
  likes: number;
  time: string;
}

interface TopicData {
  id: string;
  icon: any;
  title: string;
  question: string;
  comments: Comment[];
}

const DebateModal = ({ 
  topic, 
  onClose,
  onAddComment,
  onLikeComment
}: { 
  topic: TopicData; 
  onClose: () => void;
  onAddComment: (text: string, author: string) => void;
  onLikeComment: (commentId: string) => void;
}) => {
  const [step, setStep] = useState<'login' | 'discussion'>('login');
  const [username, setUsername] = useState('');
  const [newComment, setNewComment] = useState('');
  const { playClick, playHover } = useSound();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      playClick();
      setStep('discussion');
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      playClick();
      onAddComment(newComment, username);
      setNewComment('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in p-4">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 border-b border-white/5 bg-zinc-900/30">
           <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <topic.icon className="w-6 h-6 text-flame-500" />
              </div>
              <h3 className="text-xl font-display text-white">{topic.title}</h3>
           </div>
           <p className="text-zinc-400 font-serif italic border-l-2 border-flame-500 pl-4">"{topic.question}"</p>
        </div>

        <div className="h-[400px] overflow-y-auto p-8 relative">
          {step === 'login' ? (
            <div className="h-full flex flex-col items-center justify-center animate-in slide-in-from-bottom-4">
               <h4 className="text-white font-display text-lg mb-6">Identificação Necessária</h4>
               <form onSubmit={handleLogin} className="w-full max-w-xs">
                 <div className="mb-4">
                   <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Nome ou Codinome</label>
                   <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 text-white p-3 rounded focus:border-flame-500 outline-none transition-colors"
                    placeholder="Ex: Guardião01"
                    autoFocus
                   />
                 </div>
                 <button 
                  type="submit"
                  disabled={!username.trim()}
                  onMouseEnter={playHover}
                  className="w-full py-3 bg-flame-600 hover:bg-flame-500 disabled:opacity-50 disabled:cursor-not-allowed text-white uppercase tracking-widest font-bold text-xs rounded transition-all"
                 >
                   Entrar no Debate
                 </button>
               </form>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in">
              {topic.comments.length === 0 ? (
                <p className="text-zinc-500 text-center italic">Seja o primeiro a compartilhar sua sabedoria.</p>
              ) : (
                topic.comments.map(comment => (
                  <div key={comment.id} className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
                        <User className="w-4 h-4 text-zinc-400" />
                     </div>
                     <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-sm font-bold text-white">{comment.author}</span>
                          <span className="text-xs text-zinc-600">{comment.time}</span>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-2">{comment.text}</p>
                        <button 
                          onClick={() => { playClick(); onLikeComment(comment.id); }}
                          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-flame-500 transition-colors group"
                        >
                          <Heart className="w-3 h-3 group-hover:fill-current" /> {comment.likes}
                        </button>
                     </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {step === 'discussion' && (
          <div className="p-4 bg-zinc-900 border-t border-white/5">
            <form onSubmit={handleSubmitComment} className="flex gap-4">
               <input 
                type="text" 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Contribua com sua visão..."
                className="flex-1 bg-black border border-zinc-800 text-white px-4 py-3 rounded-lg focus:border-flame-500 outline-none text-sm"
               />
               <button 
                type="submit"
                disabled={!newComment.trim()}
                className="p-3 bg-zinc-800 hover:bg-flame-500 text-white rounded-lg disabled:opacity-50 transition-colors"
               >
                 <Send className="w-5 h-5" />
               </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const DiscussionTopicsSection = ({ topics, onOpenTopic }: { topics: TopicData[], onOpenTopic: (topic: TopicData) => void }) => {
  const { playHover, playClick } = useSound();

  return (
    <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Tópicos de Discussão</h2>
              <p className="font-serif text-zinc-400 max-w-2xl">
                A moderação não é uma ciência exata. Participe do debate sobre as questões éticas que definem nossa função.
              </p>
           </div>
           <button 
             onMouseEnter={playHover}
             className="flex items-center gap-2 text-flame-500 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors"
           >
             Ver todos os tópicos <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              onMouseEnter={playHover}
              className="group p-8 bg-zinc-900/30 border border-white/5 hover:bg-zinc-900 hover:border-flame-500/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,69,0,0.15)] transition-all duration-500 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-10 transition-opacity">
                <topic.icon className="w-24 h-24 text-white" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:border-flame-500 group-hover:shadow-[0_0_15px_rgba(255,69,0,0.2)] transition-all">
                  <topic.icon className="w-6 h-6 text-zinc-400 group-hover:text-flame-500 transition-colors" />
                </div>
                
                <h3 className="font-display text-xl text-white mb-4 group-hover:text-flame-500 transition-colors">{topic.title}</h3>
                <p className="font-serif text-sm text-zinc-400 leading-relaxed mb-8 border-l border-zinc-800 pl-4 group-hover:border-zinc-600 transition-colors">
                  "{topic.question}"
                </p>

                <div className="flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                      <MessageCircle className="w-3 h-3" />
                      <span>{topic.comments.length} Opiniões</span>
                   </div>
                   <button 
                    onClick={() => { playClick(); onOpenTopic(topic); }}
                    className="text-xs uppercase tracking-widest font-bold text-white opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                   >
                     Debater
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => (
  <section className="py-32 px-6 bg-void-900">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-4xl text-white mb-12 text-center">O Manifesto do Guardião</h2>
      <div className="prose prose-invert prose-lg mx-auto font-serif text-zinc-300 leading-loose">
        <p className="first-letter:text-5xl first-letter:text-flame-500 first-letter:float-left first-letter:mr-3">
          Existe um tipo de pessoa que sente o mundo digital de forma diferente. Enquanto outros veem apenas pixels e avatares, você vê intenções, dores e esperanças.
        </p>
        <p>
          Quando uma comunidade adoece, você sente fisicamente. O caos não é apenas barulho para você; é uma dissonância que precisa ser resolvida. Por muito tempo, você achou que essa sensibilidade era uma fraqueza. Que você levava as coisas "muito a sério".
        </p>
        <blockquote className="border-l-2 border-flame-500 pl-6 my-8 italic text-white text-xl">
          "A toxicidade é o que resta quando a chama da esperança se apaga."
        </blockquote>
        <p>
          Mas a verdade é que o mundo precisa de quem leve a sério. Sem Guardiões, o fogo da comunidade se apaga ou vira um incêndio incontrolável. Aqui, ensinamos você a manusear essa chama. A proteger os outros sem se queimar.
        </p>
        <p>
          Você não está banindo uma pessoa. Está protegendo milhares de experiências. Bem-vindo ao seu propósito.
        </p>
      </div>
    </div>
  </section>
);

const CreditsSection = () => (
    <section className="py-32 px-6 bg-void-900 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center w-full">
         <h2 className="font-display text-4xl text-white mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">Arquitetos da Chama</h2>
         <p className="font-serif text-zinc-500 italic mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">Aqueles que construíram o templo e acenderam a luz.</p>
         
         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Doom Reaper Card */}
            <div className="group relative p-8 border border-flame-500/20 bg-zinc-900/30 rounded-xl hover:bg-zinc-900/80 hover:border-flame-500/50 transition-all duration-500 animate-in slide-in-from-left-8 duration-1000 delay-200 col-span-2 md:col-span-1 md:col-start-1 md:col-end-3 lg:col-span-2 lg:w-1/2 lg:mx-auto">
               <div className="absolute inset-0 bg-gradient-to-br from-flame-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
               <div className="relative z-10 flex flex-col items-center">
                   <div className="w-16 h-16 rounded-full bg-black border border-flame-500/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,69,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,69,0,0.3)] transition-all">
                       <Crown className="w-8 h-8 text-flame-500" />
                   </div>
                   <h3 className="font-display text-2xl text-white mb-2 tracking-wide">Doom Reaper (Rhuan de Cillo Silva)</h3>
                   <p className="font-serif text-flame-500/80 text-sm uppercase tracking-widest mb-6">Visionário & Autor</p>
                   <p className="text-zinc-400 text-sm leading-relaxed">
                       Pela concepção filosófica, curadoria do conhecimento arcano e custódia da chama original. A mente que imaginou um refúgio para os protetores digitais.
                   </p>
               </div>
            </div>
         </div>

         <div className="mt-24 pt-12 border-t border-white/5 text-center animate-in fade-in duration-1000 delay-500">
             <p className="text-xs text-zinc-600 uppercase tracking-[0.2em]">Guardiões da Chama © 2024</p>
         </div>
      </div>
    </section>
);

const LibraryTooltip = ({ book, x, y }: { book: Book; x: number; y: number }) => {
  // Simple check to flip tooltip if it's too close to right edge
  const isRightEdge = typeof window !== 'undefined' && x > window.innerWidth - 350;
  const leftPos = isRightEdge ? x - 330 : x + 20;

  return (
    <div 
      className="fixed z-50 w-80 p-5 bg-zinc-950/95 border border-flame-500/40 rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-md text-left pointer-events-none animate-in fade-in zoom-in-95 duration-200"
      style={{ top: y + 10, left: leftPos }}
    >
        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
            <span className="text-[10px] uppercase tracking-widest text-flame-500 font-bold flex items-center gap-1">
              <Shield className="w-3 h-3"/> {book.difficulty}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-zinc-500">{book.platform}</span>
        </div>
        
        <h4 className="font-display text-lg text-white font-bold leading-tight mb-1">{book.title}</h4>
        <p className="font-serif text-xs text-zinc-500 italic mb-4">{book.subtitle}</p>
        
        <p className="font-serif text-xs text-zinc-300 leading-relaxed mb-4 border-l border-zinc-700 pl-3">
          {book.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
             {book.tags.map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-zinc-800 text-zinc-400 bg-zinc-900 rounded">
                {tag}
                </span>
            ))}
        </div>
    </div>
  );
};

const BookCard: React.FC<{ 
  book: Book; 
  onClick: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}> = ({ book, onClick, onMouseMove, onMouseLeave, isFavorite, onToggleFavorite }) => {
  const { playHover, playClick } = useSound();
  
  return (
    <div 
      onMouseEnter={playHover}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => { playClick(); onClick(); }}
      className="group relative h-96 bg-zinc-900/50 border border-white/5 p-8 flex flex-col justify-between cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,69,0,0.15)] hover:border-flame-500/50 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-50 group-hover:opacity-80 transition-opacity"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs uppercase tracking-widest text-flame-500 font-bold">{book.difficulty}</span>
          <BookOpen className="w-5 h-5 text-zinc-600 group-hover:text-flame-500 transition-colors" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl text-white font-bold mb-2 group-hover:text-flame-500 transition-colors leading-tight">
          {book.title}
        </h3>
        <p className="font-serif text-sm text-zinc-400 italic mb-4">{book.subtitle}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {book.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 border border-zinc-800 text-zinc-500">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto flex justify-between items-end">
        <div className="flex-1 pr-4">
           <p className="text-sm text-zinc-400 line-clamp-3 font-serif leading-relaxed mb-6 border-l border-zinc-700 pl-4 group-hover:border-flame-500 transition-colors">
            {book.description}
           </p>
           <div className="flex items-center text-xs font-bold tracking-widest text-white uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Ler Escritura <ChevronRight className="w-4 h-4 ml-1" />
           </div>
        </div>
        <div className="flex flex-col items-center gap-3 z-20 shrink-0">
          <span className="text-[10px] text-zinc-600 font-mono opacity-50 group-hover:opacity-100 transition-opacity">#{book.id}</span>
          <button 
            onClick={(e) => { e.stopPropagation(); playClick(); onToggleFavorite(); }}
            className={`p-2 rounded-full backdrop-blur-md border ${isFavorite ? 'bg-flame-500/20 border-flame-500 text-flame-500' : 'bg-black/20 border-white/10 text-zinc-500 hover:text-white'} transition-colors`}
            title={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Library = ({ onOpenBook }: { onOpenBook: (book: Book) => void }) => {
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [tooltip, setTooltip] = useState<{ book: Book, x: number, y: number } | null>(null);
  const { playHover, playClick } = useSound();

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('guardians_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('guardians_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (bookId: string) => {
    setFavorites(prev => 
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  const filteredBooks = LIBRARY_BOOKS.filter(book => {
    const matchLevel = filterLevel === 'all' || book.difficulty === filterLevel;
    const matchPlatform = filterPlatform === 'all' 
      || (filterPlatform === 'Steam' && book.platform.includes('Steam'))
      || (filterPlatform === 'Discord' && book.platform.includes('Discord'))
      || (filterPlatform === 'Server' && book.platform.includes('Servidor'))
      || (filterPlatform === 'Geral' && book.platform.includes('Geral'));
    
    const query = searchQuery.toLowerCase();
    const matchSearch = searchQuery === '' || 
        book.title.toLowerCase().includes(query) ||
        book.id.toLowerCase().includes(query) ||
        book.tags.some(tag => tag.toLowerCase().includes(query));

    const matchFavorite = !showFavoritesOnly || favorites.includes(book.id);

    return matchLevel && matchPlatform && matchSearch && matchFavorite;
  });

  const handleMouseMove = (e: React.MouseEvent, book: Book) => {
    setTooltip({ book, x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <section className="py-24 px-6 min-h-screen bg-void-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl text-white mb-6">A Biblioteca</h2>
          
          {/* Search Bar */}
          <div className="relative mb-8 max-w-xl group">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-flame-500 transition-colors" />
             </div>
             <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 border border-zinc-800 rounded-lg leading-5 bg-zinc-950 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:bg-zinc-900 focus:border-flame-500 transition-all font-sans"
                placeholder="Buscar por título, tag ou ID (ex: b1)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>

          <div className="flex flex-col md:flex-row gap-6 border-b border-white/10 pb-6">
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
              {['all', 'Iniciante', 'Intermediário', 'Avançado', 'Mestre'].map(level => (
                <button
                  key={level}
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); setFilterLevel(level); }}
                  className={`text-sm uppercase tracking-widest font-semibold whitespace-nowrap ${filterLevel === level ? 'text-flame-500' : 'text-zinc-600 hover:text-zinc-400'}`}
                >
                  {level === 'all' ? 'Todos Níveis' : level}
                </button>
              ))}
            </div>
            <div className="w-px bg-white/10 hidden md:block"></div>
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
              {['all', 'Steam', 'Discord', 'Server', 'Geral'].map(plat => (
                <button
                  key={plat}
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); setFilterPlatform(plat); }}
                  className={`text-sm uppercase tracking-widest font-semibold whitespace-nowrap ${filterPlatform === plat ? 'text-flame-500' : 'text-zinc-600 hover:text-zinc-400'}`}
                >
                  {plat === 'all' ? 'Todas Plataformas' : plat}
                </button>
              ))}
            </div>
            <div className="w-px bg-white/10 hidden md:block"></div>
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
               <button
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); setShowFavoritesOnly(!showFavoritesOnly); }}
                  className={`text-sm uppercase tracking-widest font-semibold whitespace-nowrap flex items-center gap-2 ${showFavoritesOnly ? 'text-flame-500' : 'text-zinc-600 hover:text-zinc-400'}`}
                >
                  <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} /> Favoritos
                </button>
            </div>
          </div>
        </div>

        {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map(book => (
                <BookCard 
                key={book.id} 
                book={book} 
                onClick={() => onOpenBook(book)} 
                onMouseMove={(e) => handleMouseMove(e, book)}
                onMouseLeave={handleMouseLeave}
                isFavorite={favorites.includes(book.id)}
                onToggleFavorite={() => toggleFavorite(book.id)}
                />
            ))}
            </div>
        ) : (
            <div className="py-20 text-center border border-dashed border-zinc-800 rounded-xl">
                <p className="text-zinc-500 font-serif italic">Nenhum tomo encontrado com essas especificações.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setFilterLevel('all'); setFilterPlatform('all'); }}
                  className="mt-4 text-xs uppercase tracking-widest text-flame-500 hover:text-white transition-colors"
                >
                    Limpar Filtros
                </button>
            </div>
        )}
      </div>
      {tooltip && <LibraryTooltip book={tooltip.book} x={tooltip.x} y={tooltip.y} />}
    </section>
  );
};

const ReaderModal = ({ book, onClose }: { book: Book; onClose: () => void }) => {
  const [activeChapterId, setActiveChapterId] = useState(book.chapters[0].id);
  const activeChapter = book.chapters.find(c => c.id === activeChapterId) || book.chapters[0];
  const contentRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSound();
  const [isReadingMode, setIsReadingMode] = useState(false);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeChapterId]);

  const renderInteractiveComponent = (type: InteractiveComponentType, data?: any) => {
    switch (type) {
      case 'ConsoleSimulator': return <ConsoleSimulator />;
      case 'FlameBalance': return <FlameBalance />;
      case 'ServerLayers': return <ServerLayers />;
      case 'DialogueTree': return <DialogueTree data={data} />;
      case 'RegexLab': return <RegexLab />;
      case 'CrisisDecision': return <CrisisDecision />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex bg-void-900 animate-in fade-in zoom-in-95 duration-500">
      {/* Sidebar Navigation - HIDE in Reading Mode */}
      {!isReadingMode && (
        <div className="w-80 border-r border-white/5 flex flex-col bg-zinc-950 hidden md:flex shrink-0">
          <div className="p-8 border-b border-white/5">
            <h3 className="font-display text-xl text-white font-bold leading-tight">{book.title}</h3>
            <p className="font-serif text-sm text-zinc-500 italic mt-2">{book.subtitle}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-1 scrollbar-thin scrollbar-thumb-zinc-800">
            {book.chapters.map((chapter, idx) => (
              <button
                key={chapter.id}
                onMouseEnter={playHover}
                onClick={() => { playClick(); setActiveChapterId(chapter.id); }}
                className={`w-full text-left p-3 text-sm font-sans transition-all rounded-lg ${
                  activeChapterId === chapter.id 
                    ? 'bg-zinc-900 text-flame-500 border-l-2 border-flame-500' 
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
                }`}
              >
                <span className="opacity-50 mr-2">{idx + 1}.</span> {chapter.title.replace(/^\d+\.\s/, '')}
              </button>
            ))}
          </div>
          <div className="p-6 border-t border-white/5">
            <button 
              onMouseEnter={playHover}
              onClick={() => { playClick(); onClose(); }}
              className="flex items-center text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold"
            >
              <X className="w-4 h-4 mr-2" /> Fechar Livro
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-void-900 relative">
        {/* Mobile Close Button - Hide in Reading Mode for immersion, but keep logic if needed or let Exit Button handle it */}
        {!isReadingMode && (
           <div className="md:hidden absolute top-4 right-4 z-50">
             <button 
              onClick={() => { playClick(); onClose(); }} 
              className="p-2 bg-zinc-800 rounded-full text-white"
             >
               <X className="w-5 h-5"/>
             </button>
           </div>
        )}
        
        {/* Floating Exit Reading Mode Button */}
        {isReadingMode && (
          <button
            onClick={() => { playClick(); setIsReadingMode(false); }}
            className="fixed top-6 right-6 z-50 p-3 bg-void-900/90 text-zinc-500 hover:text-flame-500 border border-zinc-800 rounded-full transition-all shadow-xl backdrop-blur-sm animate-in fade-in zoom-in duration-300"
            title="Sair do Modo Leitura"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Floating Navigation Arrows - Only in Reading Mode */}
        {isReadingMode && (
          <>
             <button
                disabled={book.chapters.findIndex(c => c.id === activeChapterId) === 0}
                onMouseEnter={playHover}
                onClick={() => {
                   playClick();
                   const idx = book.chapters.findIndex(c => c.id === activeChapterId);
                   if (idx > 0) setActiveChapterId(book.chapters[idx-1].id);
                }}
                className="fixed left-8 top-1/2 -translate-y-1/2 z-40 p-4 text-zinc-700 hover:text-flame-500 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none hidden lg:block hover:scale-110"
                title="Capítulo Anterior"
             >
                <ChevronLeft className="w-12 h-12" />
             </button>

             <button
                disabled={book.chapters.findIndex(c => c.id === activeChapterId) === book.chapters.length - 1}
                onMouseEnter={playHover}
                onClick={() => {
                   playClick();
                   const idx = book.chapters.findIndex(c => c.id === activeChapterId);
                   if (idx < book.chapters.length - 1) setActiveChapterId(book.chapters[idx+1].id);
                }}
                className="fixed right-8 top-1/2 -translate-y-1/2 z-40 p-4 text-zinc-700 hover:text-flame-500 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none hidden lg:block hover:scale-110"
                title="Próximo Capítulo"
             >
                <ChevronRight className="w-12 h-12" />
             </button>
          </>
        )}
        
        <div ref={contentRef} className="flex-1 overflow-y-auto p-6 md:p-16 lg:p-24 w-full">
           <div className={`max-w-4xl mx-auto transition-all duration-500 ${isReadingMode ? 'max-w-3xl' : ''}`}>
             
             {/* Header Controls - Hide in Reading Mode */}
             {!isReadingMode && (
               <div className="flex flex-col gap-4 mb-4">
                 
                 <div className="flex items-center justify-between">
                   <span className="text-flame-500 text-xs font-bold tracking-[0.2em] uppercase block">Capítulo {book.chapters.findIndex(c => c.id === activeChapterId) + 1}</span>
                   
                   <div className="flex items-center gap-2">
                      
                      {/* Reading Mode Toggle */}
                      <button
                        onClick={() => { playClick(); setIsReadingMode(true); }}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-flame-500 hover:border-flame-500 transition-all ml-2"
                        title="Modo Leitura (Foco)"
                      >
                         <BookOpen className="w-4 h-4" />
                      </button>

                       {/* Quick Jump Dropdown with Label - REPLACED WITH LABELED VERSION */}
                       <div className="flex items-center gap-3 ml-2 pl-3 border-l border-zinc-800">
                            <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Saltar para:</span>
                            <div className="relative group">
                            <select
                                value={activeChapterId}
                                onChange={(e) => {
                                    playClick();
                                    setActiveChapterId(e.target.value);
                                }}
                                className="appearance-none bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs uppercase tracking-wider py-2 pl-3 pr-8 rounded cursor-pointer hover:border-flame-500 hover:text-white focus:outline-none focus:border-flame-500 transition-colors"
                            >
                                {book.chapters.map((chapter, idx) => (
                                    <option key={chapter.id} value={chapter.id} className="bg-zinc-900">
                                        {idx + 1}. {chapter.title.replace(/^\d+\.\s/, '').substring(0, 25)}{chapter.title.length > 25 ? '...' : ''}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500 group-hover:text-flame-500 transition-colors">
                                <ChevronRight className="h-3 w-3 rotate-90" />
                            </div>
                            </div>
                        </div>
                   </div>
                 </div>
               </div>
             )}

             <h1 className={`font-display text-3xl md:text-5xl text-white mb-12 leading-tight transition-all ${isReadingMode ? 'text-center mt-12' : ''}`}>{activeChapter.title.replace(/^\d+\.\s/, '')}</h1>
             
             <div 
               className={`prose prose-invert prose-lg md:prose-xl font-serif text-zinc-300 leading-loose prose-headings:font-display prose-headings:text-white prose-blockquote:border-flame-500 prose-blockquote:text-zinc-400 prose-a:text-flame-500 prose-strong:text-white prose-code:text-flame-500 prose-code:bg-zinc-900 prose-code:px-1 prose-code:rounded prose-code:font-normal prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800 transition-opacity duration-500 ${isReadingMode ? 'opacity-90' : ''}`}
               dangerouslySetInnerHTML={{ __html: activeChapter.content }}
             />

             {/* Render Interactive Component if present and not rewriting */}
             {activeChapter.interactiveComponent && (
               <div className="mt-8 animate-in slide-in-from-bottom-4 duration-700">
                 {renderInteractiveComponent(activeChapter.interactiveComponent, activeChapter.interactiveData)}
               </div>
             )}
             
             {/* Footer Navigation - Always visible now */}
             <div className="mt-24 pt-12 border-t border-white/5 flex justify-between">
                <button 
                  disabled={book.chapters.findIndex(c => c.id === activeChapterId) === 0}
                  onMouseEnter={playHover}
                  onClick={() => {
                      playClick();
                      const idx = book.chapters.findIndex(c => c.id === activeChapterId);
                      if (idx > 0) setActiveChapterId(book.chapters[idx-1].id);
                  }}
                  className="text-zinc-500 hover:text-white disabled:opacity-20 transition-colors uppercase tracking-widest text-sm font-bold"
                >
                  Anterior
                </button>
                <button 
                  disabled={book.chapters.findIndex(c => c.id === activeChapterId) === book.chapters.length - 1}
                  onMouseEnter={playHover}
                  onClick={() => {
                      playClick();
                      const idx = book.chapters.findIndex(c => c.id === activeChapterId);
                      if (idx < book.chapters.length - 1) setActiveChapterId(book.chapters[idx+1].id);
                  }}
                  className="text-flame-500 hover:text-white disabled:opacity-20 transition-colors uppercase tracking-widest text-sm font-bold"
                >
                  Próximo
                </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

const INITIAL_COMMENTS: Comment[] = [
  { id: '1', author: 'CyberSage', text: 'Acredito que a reabilitação só é possível se houver remorso genuíno.', likes: 12, time: '2h atrás' },
  { id: '2', author: 'NullPointer', text: 'Segurança primeiro. Prefiro um falso positivo do que um servidor comprometido.', likes: 8, time: '5h atrás' }
];

const INITIAL_TOPICS: TopicData[] = [
  {
    id: 't1',
    icon: Scale,
    title: "Justiça Restaurativa",
    question: "O banimento deve ser o fim da linha ou o início da reabilitação? Devemos punir o passado ou educar para o futuro?",
    comments: [...INITIAL_COMMENTS]
  },
  {
    id: 't2',
    icon: Eye,
    title: "Privacidade vs Segurança",
    question: "É ético monitorar mensagens privadas (DMs) se isso impedir um ataque ao servidor? Onde termina a proteção e começa a vigilância?",
    comments: [...INITIAL_COMMENTS]
  },
  {
    id: 't3',
    icon: Gavel,
    title: "O Juiz Algoritmo",
    question: "Automatizar punições com IA remove o viés humano ou remove a compaixão necessária para julgar contextos complexos?",
    comments: [...INITIAL_COMMENTS]
  }
];

const App = () => {
  const [view, setView] = useState<'home' | 'library' | 'philosophy' | 'sobre' | 'credits' | 'updates'>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<TopicData | null>(null);
  
  // Initialize topics from Local Storage if available, otherwise use initial data
  const [topics, setTopics] = useState<TopicData[]>(() => {
    try {
      const saved = localStorage.getItem('guardians_debate_storage');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge saved comments into INITIAL_TOPICS structure to preserve Icons and static data
        // while loading user generated content.
        return INITIAL_TOPICS.map(topic => {
          const savedTopic = parsed.find((p: any) => p.id === topic.id);
          if (savedTopic && savedTopic.comments) {
            return { ...topic, comments: savedTopic.comments };
          }
          return topic;
        });
      }
    } catch (e) {
      console.error("Failed to load debates from storage", e);
    }
    return INITIAL_TOPICS;
  });

  // Save to Local Storage whenever topics change
  useEffect(() => {
    const dataToSave = topics.map(t => ({
      id: t.id,
      comments: t.comments
    }));
    localStorage.setItem('guardians_debate_storage', JSON.stringify(dataToSave));
  }, [topics]);

  const handleNavigate = (page: 'home' | 'library' | 'philosophy' | 'sobre' | 'credits' | 'updates') => {
    setView(page);
    window.scrollTo(0, 0);
  };

  const handleAddComment = (text: string, author: string) => {
    if (!selectedTopic) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author,
      text,
      likes: 0,
      time: 'Agora'
    };

    const updatedTopics = topics.map(topic => {
      if (topic.id === selectedTopic.id) {
        return {
          ...topic,
          comments: [newComment, ...topic.comments]
        };
      }
      return topic;
    });

    setTopics(updatedTopics);
    // Update the currently open modal's topic data as well
    setSelectedTopic(prev => prev ? { ...prev, comments: [newComment, ...prev.comments] } : null);
  };

  const handleLikeComment = (commentId: string) => {
     if (!selectedTopic) return;

     const updatedTopics = topics.map(topic => {
        if (topic.id === selectedTopic.id) {
            const updatedComments = topic.comments.map(c => 
                c.id === commentId ? { ...c, likes: c.likes + 1 } : c
            );
            return { ...topic, comments: updatedComments };
        }
        return topic;
     });

     setTopics(updatedTopics);
     // Update local state to reflect like immediately
     setSelectedTopic(prev => {
        if (!prev) return null;
        return {
            ...prev,
            comments: prev.comments.map(c => c.id === commentId ? { ...c, likes: c.likes + 1 } : c)
        }
     });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-orange-500/30">
      <Header onNavigate={handleNavigate} />
      
      <main>
        {view === 'home' && (
          <>
             <Hero onEnter={() => handleNavigate('library')} />
             <DiscussionTopicsSection topics={topics} onOpenTopic={setSelectedTopic} />
          </>
        )}
        
        {view === 'philosophy' && (
          <PhilosophySection />
        )}

        {view === 'sobre' && (
          <SobreSection />
        )}

        {view === 'library' && (
          <Library onOpenBook={setSelectedBook} />
        )}

        {view === 'credits' && (
          <CreditsSection />
        )}

        {view === 'updates' && (
          <UpdatesSection />
        )}
      </main>

      {selectedBook && (
        <ReaderModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
      
      {selectedTopic && (
        <DebateModal 
            topic={selectedTopic} 
            onClose={() => setSelectedTopic(null)} 
            onAddComment={handleAddComment}
            onLikeComment={handleLikeComment}
        />
      )}
    </div>
  );
};

export default App;