import React, { useState, useEffect, useRef } from 'react';
import { Flame, BookOpen, Scroll, X, ChevronRight, ChevronLeft, Menu, Shield, Terminal, Activity, Layers, MessageSquare, Code, AlertTriangle, Maximize2, Minimize2, User, Crown, Cpu, Bell, Gavel, Scale, Eye, ArrowRight, MessageCircle, Search, Send, Heart, ThumbsUp } from 'lucide-react';

declare var process: any;

export enum Difficulty {
  Iniciante = 'Iniciante',
  Intermediario = 'Intermediário',
  Avancado = 'Avançado',
  Mestre = 'Mestre',
}

export enum Platform {
  Geral = 'Filosofia Geral',
  Steam = 'Steam',
  Discord = 'Discord',
  Servidores = 'Servidores Dedicados',
}

export type InteractiveComponentType = 
  | 'ConsoleSimulator' 
  | 'FlameBalance' 
  | 'ServerLayers' 
  | 'DialogueTree' 
  | 'RegexLab' 
  | 'CrisisDecision';

export interface Chapter {
  id: string;
  title: string;
  content: string; // HTML-like string
  interactiveComponent?: InteractiveComponentType; // Identificador do componente interativo
  interactiveData?: any; // Dados flexíveis para o componente (ex: cenários de diálogo)
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  difficulty: Difficulty;
  platform: Platform;
  tags: string[];
  description: string;
  chapters: Chapter[];
}
export const LIBRARY_BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'A Chama Inicial',
    subtitle: 'O despertar de um Guardião',
    difficulty: Difficulty.Iniciante,
    platform: Platform.Geral,
    tags: ['Filosofia', 'Fundamentos', 'Identidade'],
    description: 'Um guia para entender por que você sente o que sente e como transformar sua sensibilidade em proteção. Descubra como a empatia se torna sua maior arma tática.',
    chapters: [
      {
        id: 'c1-1',
        title: '1. O Peso da Diferença',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Você não escolheu se sentir assim. A sensação de desconforto quando vê injustiça, o aperto no peito quando lê palavras de ódio em um chat de jogo, a solidão de parecer ser o único a se importar. Isso não é um defeito de fabricação.
          </p>
          <p class="my-6">
            O mundo tenta nos dizer que a insensibilidade é força. "É só um jogo", eles dizem. "Não leve a sério", repetem. Mas para você, a internet não é um lugar etéreo e falso. É onde as mentes se encontram. E onde mentes se encontram, há realidade.
          </p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A chama que você carrega</h3>
          <p class="mb-6">
            Imagine que cada comunidade é uma fogueira na noite escura da floresta. A maioria das pessoas vem apenas para se aquecer. Elas riem, bebem, contam histórias. Mas existem os lobos. E existe o vento. E existe a chuva.
          </p>
          <p class="mb-6 border-l-2 border-flame-500 pl-4 italic text-zinc-400">
            "Sua sensibilidade não é fraqueza. É o sensor que detecta a fumaça antes do incêndio."
          </p>
        `
      },
      { 
        id: 'c1-2', 
        title: '2. A Balança Emocional', 
        interactiveComponent: 'FlameBalance',
        content: `
          <p class="mb-6">Um dos maiores erros do moderador iniciante é a falta de calibração. Movido pela paixão de "limpar" a comunidade, ele muitas vezes se torna um tirano, extinguindo qualquer centelha de diversão em nome da ordem.</p>
          <p class="mb-6">Você precisa entender que conflito é parte da natureza humana. Nem toda discussão é toxicidade. Nem todo palavrão é ódio. O Guardião sabe diferenciar o fogo que aquece do fogo que queima.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">O Paradoxo da Tolerância</h3>
          <p>Você deve encontrar o ponto onde a liberdade individual não fere a segurança coletiva. Use o simulador abaixo para entender como o excesso ou a falta de intervenção afetam o ecossistema.</p>
        ` 
      },
      { 
        id: 'c1-3', 
        title: '3. A Solidão do Poder', 
        content: `
          <p class="mb-6">Assim que você aceita o distintivo (ou o cargo de Admin), algo muda. Seus amigos de jogo agora hesitam antes de fazer piadas perto de você. O silêncio aumenta. Essa é a solidão do trono.</p>
          <p>Não tente ser "amigão" de todos para compensar isso. Isso leva ao favoritismo. Aceite que o Guardião caminha ligeiramente separado do grupo, não por arrogância, mas para ter uma visão clara do horizonte.</p>
          <p>Você perderá a inocência de ser apenas um jogador. Mas ganhará o propósito de ser um protetor.</p>
        ` 
      },
      { 
        id: 'c1-4', 
        title: '4. Documentação: Seu Escudo', 
        content: `
          <p class="mb-6">Em um mundo de "ele disse, ela disse", a prova é rei. Nunca puna sem provas. Nunca bana sem um registro.</p>
          <p>Printscreens, logs de chat, demos gravadas. Mantenha um "Livro das Sombras" (ou um canal privado no Discord) onde cada infração grave é catalogada. Isso não é burocracia; é sua defesa contra acusações de abuso de poder no futuro.</p>
          <p>Um Guardião sem provas é apenas um tirano com uma opinião.</p>
        ` 
      },
      { 
        id: 'c1-5', 
        title: '5. Quando Você Errar', 
        content: `
          <p class="mb-6">Você vai banir um inocente. Você vai perder a paciência. Você vai julgar mal uma situação. Você é humano.</p>
          <p>A diferença entre um moderador ruim e um Guardião é como lidam com o erro. O ruim dobra a aposta e usa o ego para se defender. O Guardião pede desculpas publicamente.</p>
          <p>O pedido de desculpas de um líder não diminui sua autoridade; ele a solidifica. A comunidade passa a confiar que, se você punir, é porque é justo, não porque é orgulhoso.</p>
        ` 
      },
      { 
        id: 'c1-6', 
        title: '6. Métricas que Importam', 
        content: `
          <p class="mb-6">Não meça seu sucesso pelo número de banimentos. Um hospital lotado não significa que a cidade é saudável.</p>
          <p>Meça seu sucesso pelo silêncio pacífico. Pela retenção de novos jogadores. Pela quantidade de "GGs" no final da partida. Se o número de banimentos está caindo mas o servidor está cheio, você venceu.</p>
        ` 
      },
      { 
        id: 'c1-7', 
        title: '7. Burnout: Quando a Chama Queima Você', 
        content: `
          <p class="mb-6">Você sentirá cansaço. Ler ódio todos os dias envenena a alma. Se você não fizer pausas, você se tornará aquilo que jurou combater: um ser amargo e reativo.</p>
          <p>Reconheça os sinais: Irritabilidade com novatos, cinismo, sensação de que "nada adianta". Quando isso acontecer, retire o manto. Descanse. A fogueira não vai apagar se você dormir uma noite.</p>
        ` 
      },
      { 
        id: 'c1-8', 
        title: '8. O Legado', 
        content: `
          <p class="mb-6">Um dia você vai parar. O jogo vai morrer ou você vai crescer. O que resta?</p>
          <p>Não são os servidores configurados. São as pessoas que você protegeu. O garoto que sofria bullying e encontrou no seu servidor um refúgio. A garota que aprendeu a liderar observando você. Esse é o legado da chama. Ela continua queimando em outras tochas.</p>
        ` 
      },
      {
        id: 'c1-9',
        title: '9. O Poder da Comunicação Transparente',
        interactiveComponent: 'DialogueTree',
        interactiveData: {
          scenarios: [
            {
              text: "CENÁRIO: O servidor caiu por 4 horas devido a um erro seu na configuração. O Discord está em chamas. O que você anuncia?",
              options: [
                { label: "Silêncio Total (esperar voltar)", outcome: "Erro. O silêncio gera pânico e teorias da conspiração. A confiança é corroída.", success: false },
                { label: "Mentira Confortável ('Foi culpa do Datacenter!')", outcome: "Erro. Mentira tem perna curta. Quando descobrirem (e descobrem), sua palavra valerá zero para sempre.", success: false },
                { label: "Verdade Dolorosa ('Errei na config. Revertendo backup. Volta em 30min.')", outcome: "Sucesso. Vulnerabilidade gera autoridade. Eles sabem que você é humano e honesto.", success: true }
              ]
            }
          ]
        },
        content: `
          <p class="mb-6">A confiança é a moeda mais valiosa de um Guardião. E a confiança não se constrói quando tudo vai bem; ela se constrói na crise.</p>
          <p class="mb-6">Quando o servidor cai, quando um admin abusa do poder, quando há um vazamento de dados... seu instinto será se esconder ou mentir para "proteger a imagem" do servidor. <strong>Não faça isso.</strong></p>
          <p>A comunidade perdoa incompetência (todos erram), mas não perdoa desonestidade. Se você errou, admita rápido, explique o porquê e mostre a solução. A transparência radical transforma uma multidão irritada em um exército de aliados compreensivos.</p>
        `
      },
      {
        id: 'c1-10',
        title: '10. O Observador Invisível',
        content: `
          <p class="mb-6">Há um paradoxo na moderação: quanto melhor você faz seu trabalho, menos ele é notado. Se você remove o lixo antes que alguém veja, ninguém sabe que você limpou.</p>
          <p>Você precisa fazer as pazes com a invisibilidade. Não espere aplausos. O Guardião trabalha nas sombras para que os outros possam brincar na luz. Sua recompensa é interna: saber que aquele espaço existe porque você o sustenta.</p>
        `
      },
      {
        id: 'c1-11',
        title: '11. Morte do Ego',
        content: `
          <p class="mb-6">O maior inimigo de um Guardião não é o troll, é o seu próprio ego. O momento em que você pune alguém porque "ele me desafiou" e não porque "ele quebrou a regra", você deixou de ser Guardião e virou ditador.</p>
          <p>Pratique a dissociação. Quando xingam seu nick de Admin, não estão xingando *você*. Estão xingando a autoridade que você representa. Não leve para o pessoal.</p>
        `
      },
      {
        id: 'c1-12',
        title: '12. A Cadeira Vazia',
        content: `
          <p class="mb-6">Sempre pergunte: "Quem não está aqui?". Comunidades tóxicas expulsam os sensíveis, as mulheres, as minorias, os novatos tímidos. Se o seu chat é "super ativo" mas todos pensam igual e agem igual, você falhou.</p>
          <p>O Guardião protege o assento daquele que ainda não chegou. Você mantém o ambiente seguro para que a diversidade possa florescer, não apenas sobreviver.</p>
        `
      },
      {
        id: 'c1-13',
        title: '13. Jardinagem Comunitária',
        content: `
          <p class="mb-6">Não pense em si mesmo como uma polícia, mas como um jardineiro. A polícia aparece quando o crime acontece. O jardineiro nutre o solo diariamente.</p>
          <p>Regar as flores (elogiar bons comportamentos) é tão importante quanto arrancar ervas daninhas (banir tóxicos). Se você só arranca e nunca rega, terá um deserto limpo, mas sem vida.</p>
        `
      },
      {
        id: 'c1-14',
        title: '14. Rituais do Guardião',
        content: `
          <p class="mb-6">A consistência vence a intensidade. Crie rituais. Cheque os logs com o café da manhã. Dê "Bom dia" no chat geral. Verifique as apelações toda sexta.</p>
          <p>A ordem se mantém através da rotina. Sua presença constante, mesmo que silenciosa, cria uma sensação subconsciente de segurança nos jogadores.</p>
        `
      }
    ]
  },
  {
    id: 'b2',
    title: 'Psicologia da Toxicidade',
    subtitle: 'Entendendo a escuridão para dissipá-la',
    difficulty: Difficulty.Intermediario,
    platform: Platform.Geral,
    tags: ['Psicologia', 'Comportamento', 'Defesa Mental'],
    description: 'Um estudo profundo sobre por que as pessoas ferem umas às outras online e como desarmar o ódio sem lutar. Aprenda a ler nas entrelinhas do comportamento humano digital.',
    chapters: [
      {
        id: 'c2-1',
        title: '1. A Origem da Dor',
        content: `
          <p class="mb-6">Ninguém nasce troll. A toxicidade é, quase sempre, o grito de uma ferida não curada. O agressor transfere sua dor interna para o ambiente externo.</p>
          <p class="mb-6">Entender isso muda tudo. Você para de sentir raiva e começa a sentir uma piedade distante. Isso é crucial para sua sobrevivência.</p>
          <ul class="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
             <li>O tóxico quer atenção porque se sente invisível.</li>
             <li>O tóxico quer controle porque sua vida real é caótica.</li>
             <li>O tóxico quer rebaixar os outros porque se sente pequeno.</li>
          </ul>
        `
      },
      { 
        id: 'c2-2', 
        title: '2. Simulador de Desescalada', 
        interactiveComponent: 'DialogueTree',
        interactiveData: {
          scenarios: [
            {
              text: "Usuário 'DarkWolf' diz: 'Esse servidor é um lixo, os admins são uns inúteis que só banem quem não pagou VIP!'",
              options: [
                { label: "Banir imediatamente por desrespeito", outcome: "Fracasso. Você confirmou a narrativa dele de que admins são tiranos. Ele voltará com outra conta, mais odioso.", success: false },
                { label: "Responder: 'Se não gosta, sai fora.'", outcome: "Fracasso. Você desceu ao nível dele. A comunidade vê dois imaturos brigando.", success: false },
                { label: "Responder: 'Wolf, entendo que esteja frustrado. O que aconteceu especificamente?'", outcome: "Sucesso. Você validou a emoção sem validar o insulto. Ele agora precisa explicar a lógica ou parecer bobo.", success: true }
              ]
            },
            {
              text: "DarkWolf responde: 'Fui kickado ontem por matar o admin no jogo! Abuso de poder!'",
              options: [
                { label: "Checar logs silenciosamente antes de responder", outcome: "Sucesso. Guardiões agem baseados em dados, não em palavras.", success: true },
                { label: "Dizer: 'Mentiroso, nossos admins não fazem isso.'", outcome: "Risco. E se ele estiver certo? Nunca defenda cegamente sem provas.", success: false }
              ]
            }
          ]
        },
        content: `
          <p class="mb-6">A maioria dos moderadores falha porque tenta "vencer" a discussão. Mas contra um troll, vencer é perder. O objetivo deles é arrastar você para a lama.</p>
          <p class="mb-6">A técnica correta é a <strong>Validação Desarmante</strong>. Você ignora o insulto, valida a emoção por trás dele, e força o usuário a racionalizar seu comportamento.</p>
          <p>Use o simulador abaixo para treinar essa habilidade vital.</p>
        ` 
      },
      { 
        id: 'c2-3', 
        title: '3. Psicologia de Massa', 
        content: `
          <p class="mb-6">Uma pessoa é inteligente; uma multidão é uma besta irracional. Quando o "efeito manada" começa, a moralidade individual é suspensa.</p>
          <p>Seu papel é identificar o "Líder do Motim". Geralmente há 1 ou 2 instigadores e 20 seguidores. Remova cirurgicamente os instigadores (mute, não ban) e a multidão se dispersará confusa.</p>
        ` 
      },
      { 
        id: 'c2-4', 
        title: '4. O Vampiro de Atenção', 
        content: `
          <p class="mb-6">Este arquétipo não se importa se a atenção é positiva ou negativa. Ele só quer ser visto. Se você xinga, ele ganha. Se você bane com um texto longo, ele ganha (e posta o print no Twitter).</p>
          <p>A única arma contra o Vampiro é o vácuo. O "Shadowban" ou o banimento silencioso, sem alarde, sem palco. Corte o oxigênio e a chama dele morrerá.</p>
        ` 
      },
      { 
        id: 'c2-5', 
        title: '5. O Advogado de Regras', 
        content: `
          <p class="mb-6">O "Rules Lawyer" é aquele usuário tóxico que anda no limite exato da regra. Ele não xinga, mas provoca. Ele não faz spam, mas inunda o chat com "conteúdo".</p>
          <p>Ele usa a letra da lei para violar o espírito da lei. Não debata lógica com ele; você vai perder. Apele para o "Propósito da Comunidade". Se a presença dele drena a diversão, ele deve ser removido, mesmo que tecnicamente não tenha quebrado a regra #4 parágrafo B.</p>
        ` 
      },
      { 
        id: 'c2-6', 
        title: '6. Síndrome do Impostor', 
        content: `
          <p class="mb-6">Muitos Guardiões sentem que são uma fraude. "Quem sou eu para julgar os outros?".</p>
          <p>Esse sentimento é bom. Ele te mantém humilde. Tenha medo do moderador que *sabe* que está sempre certo. A dúvida é sua aliada, desde que não te paralise. Você não está lá para ser perfeito, está lá para ser o melhor esforço possível.</p>
        ` 
      },
      { 
        id: 'c2-7', 
        title: '7. Redenção é Possível?', 
        content: `
          <p class="mb-6">Sim. Pessoas mudam, especialmente adolescentes. O troll de 14 anos pode virar o melhor moderador aos 18.</p>
          <p>Permita apelos de banimento. Dê segundas chances (mas raramente terceiras). A história de um inimigo que virou aliado é a vitória final do Guardião.</p>
        ` 
      },
      {
        id: 'c2-8',
        title: '8. O Efeito Espectador Digital',
        content: `
          <p class="mb-6">Quanto mais pessoas veem uma infração, menor a chance de alguém reportar. Todos acham que "alguém já deve ter avisado".</p>
          <p>Você precisa quebrar essa inércia. Eduque sua comunidade: "Se você viu, reporte". Crie mecanismos fáceis e anônimos de denúncia. O mal triunfa quando os bons observam em silêncio.</p>
        `
      },
      {
        id: 'c2-9',
        title: '9. Relações Parassociais',
        content: `
          <p class="mb-6">Jogadores muitas vezes criam vínculos imaginários com Admins ou Donos. Eles acham que são seus amigos íntimos só porque jogam no seu servidor.</p>
          <p>Quando você precisa puni-los, a reação é de "traição pessoal". Entenda que o ódio deles vem da quebra dessa fantasia. Mantenha uma distância profissional saudável. Você é o Guardião, não o melhor amigo de todos.</p>
        `
      },
      {
        id: 'c2-10',
        title: '10. Gamificação do Ódio',
        content: `
          <p class="mb-6">Para alguns grupos, ser banido é um esporte. Eles competem para ver quem é banido mais rápido (Speedrun de Ban). Se você reage com raiva, você deu a eles o troféu.</p>
          <p>Bane-os com tédio. Mensagens padrão, sem emoção, sem palco. Transforme a "vitória" deles em um evento burocrático e sem graça.</p>
        `
      },
      {
        id: 'c2-11',
        title: '11. A Espiral do Silêncio',
        content: `
          <p class="mb-6">Se uma minoria barulhenta expressa opiniões tóxicas e ninguém rebate, a maioria moderada se cala por medo de isolamento. O servidor parece mais tóxico do que realmente é.</p>
          <p>O Guardião deve ser a voz que quebra o silêncio, permitindo que os moderados voltem a falar. Sua intervenção sinaliza: "É seguro ser sensato aqui".</p>
        `
      },
      {
        id: 'c2-12',
        title: '12. Luto e Banimento',
        content: `
          <p class="mb-6">Para um jogador que investiu 2.000 horas no seu servidor, um banimento permanente é uma morte digital. Ele perderá amigos, status e rotina.</p>
          <p>Espere reações de luto: Negação ("Eu não fiz nada"), Raiva ("Admin lixo"), Barganha ("Pago para voltar"), Depressão e Aceitação. Trate o processo com a seriedade de quem encerra um ciclo de vida.</p>
        `
      }
    ]
  },
  {
    id: 'b3',
    title: 'Arquitetura de Servidores',
    subtitle: 'O templo precisa de alicerces',
    difficulty: Difficulty.Avancado,
    platform: Platform.Servidores,
    tags: ['Linux', 'Segurança', 'Performance'],
    description: 'Conhecimento técnico bruto dissecado. De nada adianta a filosofia se o servidor cai sob ataque. Domine a infraestrutura para garantir um refúgio inabalável.',
    chapters: [
      {
        id: 'c3-1',
        title: '1. Bare Metal vs Cloud',
        content: `
          <p class="mb-6">A nuvem é flexível, mas o metal é fiel. Para jogos competitivos (CS2, Rust), você precisa de estabilidade de clock da CPU.</p>
          <p>Servidores compartilhados (VPS barato) sofrem do problema do "vizinho barulhento". Se outro cliente na mesma máquina física processar dados pesados, seu jogo terá lag (micro-stuttering). Para comunidades sérias, alugue Dedicados (Bare Metal).</p>
        `
      },
      { 
        id: 'c3-2', 
        title: '2. Defesa em Profundidade', 
        interactiveComponent: 'ServerLayers',
        content: `
          <p class="mb-6">Segurança não é um muro; é um labirinto. Você deve assumir que uma camada falhará.</p>
          <p>Muitos admins deixam a porta SSH (22) aberta para o mundo com senha "123456". Isso é suicídio. Use chaves RSA, mude a porta, configure Fail2Ban e IPTables.</p>
          <p>Explore as camadas abaixo para entender onde cada ataque é mitigado.</p>
        ` 
      },
      { 
        id: 'c3-3', 
        title: '3. A Tríade da Performance', 
        content: `
          <p class="mb-6">Um servidor lento mata a comunidade mais rápido que um admin tóxico. Entenda os gargalos:</p>
          <ul class="list-disc pl-6 space-y-2 text-zinc-300">
             <li><strong>CPU (Single Thread):</strong> Jogos como Minecraft e Source usam principalmente 1 núcleo. Clock alto (4.5Ghz+) vence muitos núcleos.</li>
             <li><strong>RAM:</strong> Importante para mapas grandes (Rust, DayZ), mas velocidade (DDR4/5) importa mais que quantidade para performance de tick.</li>
             <li><strong>I/O (Disco):</strong> Essencial para salvamento de mundo e logs. Nunca use HDD. NVMe é obrigatório.</li>
          </ul>
        ` 
      },
      { 
        id: 'c3-4', 
        title: '4. Backups: A Única Certeza', 
        content: `
          <p class="mb-6">Existem dois tipos de admins: os que perderam dados e os que vão perder. RAID não é backup (RAID é redundância de uptime).</p>
          <p>Siga a regra 3-2-1: 3 cópias dos dados, em 2 mídias diferentes, 1 delas fora do local (offsite). Use scripts automáticos (cron jobs) que enviam o banco de dados para um S3 ou Google Drive toda madrugada.</p>
        ` 
      },
      { 
        id: 'c3-5', 
        title: '5. Docker e Containers', 
        content: `
          <p class="mb-6">Não rode servidores soltos no sistema operacional. Se um processo for comprometido, o hacker tem acesso a tudo.</p>
          <p>Use Docker (ou Pterodactyl Panel). Isso isola cada servidor de jogo em sua própria "cela". Se o servidor de Minecraft for invadido, o servidor de CS2 ao lado continua seguro. Além disso, facilita backups e atualizações.</p>
        ` 
      },
      { 
        id: 'c3-6', 
        title: '6. Anatomia de um DDoS', 
        content: `
          <p class="mb-6">DDoS (Distributed Denial of Service) não é mágica. É engarrafamento. O atacante envia tantos pacotes falsos que os pacotes reais dos jogadores não conseguem passar.</p>
          <p>Não tente mitigar DDoS caseiro com firewall do Windows. Você precisa de proteção na borda (Edge), antes que o tráfego chegue ao seu cabo. Use serviços como Cloudflare Spectrum, OVH Game Firewall ou Path.net.</p>
        ` 
      },
      { 
        id: 'c3-7', 
        title: '7. Monitoramento (Observabilidade)', 
        content: `
          <p class="mb-6">Você não pode consertar o que não vê. Instale Grafana e Prometheus.</p>
          <p>Você precisa de gráficos em tempo real de CPU, RAM, uso de rede e Tickrate do servidor. Quando o lag começar, você olhará o gráfico e saberá exatamente se foi um pico de CPU (plugin mal feito) ou rede (ataque).</p>
        ` 
      },
      {
        id: 'c3-8',
        title: '8. Latência: A Distância da Realidade',
        content: `
          <p class="mb-6">Ping não é apenas um número; é a distância entre a intenção do jogador e a realidade do servidor. Um servidor justo deve estar geograficamente centralizado.</p>
          <p>Entenda o "Lag Compensation". O servidor "rebobina" a simulação para ver se o tiro acertou no momento em que o jogador clicou. Configurar isso errado (\`sv_maxunlag\`) cria a sensação de injustiça ("morri atrás da parede").</p>
        `
      },
      {
        id: 'c3-9',
        title: '9. A Santidade do Banco de Dados',
        content: `
          <p class="mb-6">Seus logs e dados de usuários são sagrados. SQL Injection não é apenas um bug; é uma profanação do templo.</p>
          <p>Sempre sanitize inputs. Nunca construa queries concatenando strings. O "Livro dos Nomes" (sua tabela de users) deve ser ilegível para quem não tem a chave.</p>
        `
      },
      {
        id: 'c3-10',
        title: '10. Balanceamento de Carga',
        content: `
          <p class="mb-6">Quando sua comunidade cresce, um servidor não basta. Você precisará de um BungeeCord (Minecraft) ou redirecionamentos.</p>
          <p>Aprenda a distribuir o peso. O Lobby não deve rodar na mesma máquina que o Survival pesado. Divida para conquistar. Se um cai, os outros sustentam a chama.</p>
        `
      },
      {
        id: 'c3-11',
        title: '11. Zero Trust Architecture',
        content: `
          <p class="mb-6">Nunca confie na rede interna. Assuma que um invasor já está dentro. Cada serviço deve exigir autenticação, mesmo que esteja conversando com outro serviço no mesmo servidor (localhost).</p>
          <p>Mure cada componente. Se o invasor pular o muro do Website, ele ainda deve encontrar o muro do Banco de Dados trancado.</p>
        `
      },
      {
        id: 'c3-12',
        title: '12. O Custo da Permanência',
        content: `
          <p class="mb-6">Servidores custam dinheiro. Eletricidade, link, hardware. Muitos projetos morrem porque o Guardião subestimou o custo financeiro a longo prazo.</p>
          <p>Planeje a sustentabilidade financeira antes de abrir. Doações? VIPs? O modelo deve sustentar a arquitetura, ou o templo ruirá por falta de manutenção.</p>
        `
      }
    ]
  },
  {
    id: 'b4',
    title: 'Comandos Steam',
    subtitle: 'As ferramentas do ofício',
    difficulty: Difficulty.Iniciante,
    platform: Platform.Steam,
    tags: ['RCON', 'Source', 'GoldSrc'],
    description: 'Não apenas a sintaxe, mas o peso ético de cada comando. Quando usar, por que usar e como reverter. O poder absoluto exige responsabilidade e precisão cirúrgica.',
    chapters: [
      {
        id: 'c4-1',
        title: '1. O Console da Verdade',
        interactiveComponent: 'ConsoleSimulator',
        content: `
          <p class="mb-6">O console RCON (Remote Control) é a linha direta com o cérebro do servidor. Diferente de menus visuais, ele não pede confirmação. Ele obedece.</p>
          <p class="mb-6">Aprender a sintaxe crua é vital para momentos onde plugins visuais falham ou quando você precisa agir via celular/web.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">Simulação Prática</h3>
          <p class="mb-4">Use o simulador abaixo para treinar a sintaxe exata do SourceMod.</p>
        `
      },
      { 
        id: 'c4-2', 
        title: '2. A Anatomia do Banimento', 
        content: `
          <p class="mb-6">Um banimento no ecossistema Steam é rastreado pelo <strong>SteamID64</strong> (ex: 76561198000000000). Nomes mudam. IPs mudam (VPN). O SteamID é eterno.</p>
          <p>Sempre bane pelo ID, nunca pelo nome. Se você banir o nome "Player", qualquer inocente que usar esse nome será chutado. Use ferramentas como steamid.io para encontrar o identificador real antes de digitar o comando.</p>
        ` 
      },
      { 
        id: 'c4-3', 
        title: '3. Mute vs Gag vs Silence', 
        content: `
          <p class="mb-6">A resposta proporcional é a marca do sábio.</p>
          <ul class="list-disc pl-6 space-y-2 text-zinc-300">
             <li><strong>sm_mute:</strong> Tira a voz. Use para quem grita, põe música ou tem microfone ruim.</li>
             <li><strong>sm_gag:</strong> Tira o chat de texto. Use para spam, insultos escritos ou spoilers.</li>
             <li><strong>sm_silence:</strong> Aplica ambos. Use para toxicidade completa.</li>
          </ul>
          <p>Muitas vezes, um mute de 30 minutos educa mais que um ban de 1 dia.</p>
        ` 
      },
      { 
        id: 'c4-4', 
        title: '4. SourceBans e Logs', 
        content: `
          <p class="mb-6">Comunidades grandes usam sistemas centralizados como SourceBans. Isso permite que um ban em um servidor (ex: Mix 1) se aplique a todos (Mix 2, Surf, DM).</p>
          <p>Além disso, cria um portal público de vergonha/transparência. Jogadores podem ver por que foram banidos e contestar. A transparência gera confiança na staff.</p>
        ` 
      },
      { 
        id: 'c4-5', 
        title: '5. A Senha RCON', 
        content: `
          <p class="mb-6">Seu arquivo \`server.cfg\` contém a \`rcon_password\`. Quem tem isso, é Deus no servidor.</p>
          <p>Nunca envie esse arquivo pelo Discord. Nunca digite a senha rcon no chat do jogo (os logs capturam). Se um admin sair da equipe brigado, mude a senha RCON imediatamente.</p>
        ` 
      },
      { 
        id: 'c4-6', 
        title: '6. Evidências: Demos e Prints', 
        content: `
          <p class="mb-6">O comando \`record [nome]\` no console do cliente grava tudo que você vê. Isso é uma "demo".</p>
          <p>Para casos de Wallhack ou Aimbot, a demo é a única prova irrefutável. Aprenda a usar o \`demoui\` (Shift+F2) para assistir em câmera lenta e ver se a mira travou através da parede.</p>
        ` 
      },
      { 
        id: 'c4-7', 
        title: '7. O Comando de Anúncio', 
        content: `
          <p class="mb-6">\`sm_psay\` (Private Say), \`sm_csay\` (Center Say) e \`sm_hsay\` (Hint Say).</p>
          <p>Use com sabedoria. Texto no centro da tela interrompe o jogo e irrita os jogadores. Use apenas para avisos críticos ("Reinício em 5 minutos"). Para avisos comportamentais, use o chat normal ou privado.</p>
        ` 
      },
      { 
        id: 'c4-8', 
        title: '8. O Perdão (Unban)', 
        content: `
          <p class="mb-6">Remover um banimento (\`sm_unban\`) é tecnicamente fácil, mas politicamente perigoso.</p>
          <p>Se você desbanir o amigo de um admin sem processo de apelo, você destrói a moral da equipe. Todo desbanimento deve ser público, justificado e registrado no banco de dados.</p>
        ` 
      },
      {
        id: 'c4-9',
        title: '9. Gestão de Mapas (Pacing)',
        content: `
          <p class="mb-6">O comando \`changelevel\` força a troca imediata (brutal). O comando \`sm_setnextmap\` agenda a troca para o fim do round (suave).</p>
          <p>O Guardião entende o ritmo. Não troque o mapa quando a partida está no clímax. A gestão do mapa dita o humor do servidor. Mapas muito grandes esvaziam servidores com pouca gente.</p>
        `
      },
      {
        id: 'c4-10',
        title: '10. Executando Configs',
        content: `
          <p class="mb-6">Nunca digite 50 comandos na mão. Use arquivos \`.cfg\`. O comando \`exec live.cfg\` pode, em um segundo, transformar um servidor "4fun" em um servidor competitivo de campeonato.</p>
          <p>A automação via configs garante que você nunca esqueça de ligar o \`mp_friendlyfire\` em partidas sérias.</p>
        `
      },
      {
        id: 'c4-11',
        title: '11. Interpretando o Status',
        content: `
          <p class="mb-6">O comando \`status\` é sua ferramenta de inteligência. Ele mostra IP, Ping, Loss e SteamID.</p>
          <p>Aprenda a ler as entrelinhas. Jogadores com Pings idênticos? Provavelmente estão na mesma LAN house ou usando o mesmo VPN. Jogadores com perda de pacote (Loss) alta? Não os puna por jogarem mal; eles estão lagados.</p>
        `
      },
      {
        id: 'c4-12',
        title: '12. Whitelisting (A Corda de Veludo)',
        content: `
          <p class="mb-6">Em momentos de crise ou exclusividade, \`sv_password\` não é suficiente. Use sistemas de Whitelist que checam o SteamID na conexão.</p>
          <p>Isso permite criar santuários onde apenas os iniciados podem entrar, protegendo a chama de ventos externos muito fortes.</p>
        `
      },
      {
        id: 'c4-13',
        title: '13. Gravidade e Física',
        content: `
          <p class="mb-6">Comandos como \`sv_gravity\` podem ser divertidos em eventos, mas destrutivos em jogo sério.</p>
          <p>Use a física com parcimônia. Um evento de "baixa gravidade" pode aliviar a tensão após uma discussão acalorada, lembrando a todos que, no fim, é um jogo.</p>
        `
      }
    ]
  },
  {
    id: 'b5',
    title: 'AutoMod Mestre',
    subtitle: 'A sentinela que nunca dorme',
    difficulty: Difficulty.Intermediario,
    platform: Platform.Discord,
    tags: ['Automação', 'Regex', 'Filtros'],
    description: 'Como configurar robôs para fazer o trabalho sujo, permitindo que você foque no trabalho humano. A automação é o escudo invisível que protege a sanidade da equipe.',
    chapters: [
      {
        id: 'c5-1',
        title: '1. A Filosofia da Automação',
        content: `
          <p class="mb-6">Humanos precisam dormir. Bots não. O AutoMod deve ser configurado para lidar com o "lixo óbvio" (spam, links de phishing, gore), deixando os humanos livres para julgar "nuances" (sarcasmo, discussões acaloradas).</p>
          <p>Não tente criar um bot que entenda contexto. Foque em padrões absolutos.</p>
        `
      },
      { 
        id: 'c5-2', 
        title: '2. Expressões Regulares (Regex)', 
        interactiveComponent: 'RegexLab',
        content: `
          <p class="mb-6">Para capturar toxicidade, palavras simples não bastam. Trolls usam "b.a.n.i.d.o", "b@nido" ou "b4nido". Regex é a linguagem para capturar padrões, não apenas palavras.</p>
          <p class="mb-6">Use o laboratório abaixo para testar padrões. Tente criar um que pegue a palavra "bad" mesmo se escrita como "b.a.d" ou "b4d". (Dica: <code>b[\\W_]*[a4@][\\W_]*d</code>)</p>
        ` 
      },
      { 
        id: 'c5-3', 
        title: '3. Falsos Positivos', 
        content: `
          <p class="mb-6">O maior pecado de um AutoMod é punir o inocente. O "Problema de Scunthorpe" ocorre quando filtros ingênuos bloqueiam palavras normais que contêm substrings ofensivas (ex: bloquear "analista" porque contém "anal").</p>
          <p>Sempre use "word boundaries" (\b) em seus regex e crie uma lista de exceções (allowlist) antes de ativar o filtro em produção.</p>
        ` 
      },
      { 
        id: 'c5-4', 
        title: '4. Proteção contra Raids', 
        content: `
          <p class="mb-6">Um Raid é quando centenas de contas (bots ou usuários) entram simultaneamente para inundar o chat. O AutoMod deve ter um "Modo Pânico".</p>
          <p>Configure regras de limiar: "Se mais de 10 usuários entrarem em 10 segundos, travar o servidor". "Se um usuário postar mais de 5 mensagens em 2 segundos, silenciar por 1 hora".</p>
        ` 
      },
      { 
        id: 'c5-5', 
        title: '5. Phishing e Links', 
        content: `
          <p class="mb-6">"Ganhe Nitro Grátis!" - 99% dos hacks vêm de links. O AutoMod deve bloquear domínios desconhecidos por padrão.</p>
          <p>Use uma "Whitelist" de domínios permitidos (youtube, twitch, steamcommunity) e bloqueie todo o resto, ou use bots especializados que consultam bancos de dados de phishing em tempo real.</p>
        ` 
      },
      { 
        id: 'c5-6', 
        title: '6. Comandos de Nuke', 
        content: `
          <p class="mb-6">Quando um canal é irremediavelmente poluído (gore, spam massivo), não apague mensagem por mensagem.</p>
          <p>Tenha um comando de "Nuke" (ex: via bot Carl). Ele clona o canal, deleta o antigo e ajusta as permissões do novo em 1 segundo. É a limpeza total pelo fogo. Use apenas em emergências.</p>
        ` 
      },
      { 
        id: 'c5-7', 
        title: '7. Logs de Auditoria', 
        content: `
          <p class="mb-6">O AutoMod também precisa ser vigiado. Periodicamente, revise o canal de logs do AutoMod.</p>
          <p>Se ele está silenciando muitas pessoas por engano, afrouxe a regra. Se o chat está tóxico e ele não pega nada, aperte. É um organismo vivo que precisa de ajuste constante.</p>
        ` 
      },
      {
        id: 'c5-8',
        title: '8. O Canal Honeypot',
        content: `
          <p class="mb-6">Crie um canal invisível para usuários normais, mas visível para bots. Se alguém postar lá, é 100% de certeza que é um bot de spam automatizado.</p>
          <p>O AutoMod deve banir instantaneamente qualquer um que escreva nesse canal armadilha. É a defesa passiva perfeita.</p>
        `
      },
      {
        id: 'c5-9',
        title: '9. Slowmode Estratégico',
        content: `
          <p class="mb-6">O Slowmode não é apenas para parar spam; é para forçar o pensamento. Em discussões acaloradas, um slowmode de 30 segundos obriga as pessoas a condensarem seus argumentos em um texto único, em vez de enviar 20 linhas furiosas.</p>
          <p>Use a automação para ativar o slowmode assim que a velocidade do chat exceder um limite saudável.</p>
        `
      },
      {
        id: 'c5-10',
        title: '10. Filtros de Imagem (AI)',
        content: `
          <p class="mb-6">Regex não lê pixels. Para conter gore e nudes, você precisa de bots modernos que usam IA para escanear imagens.</p>
          <p>Embora não sejam perfeitos, eles são a primeira linha de defesa contra ataques visuais que podem traumatizar sua comunidade. Configure-os para deletar e enviar para aprovação da staff.</p>
        `
      },
      {
        id: 'c5-11',
        title: '11. Banimentos Cruzados',
        content: `
          <p class="mb-6">Toxicidade viaja. Existem bots que compartilham "Blacklists" entre servidores confiáveis.</p>
          <p>Se um usuário foi banido de 5 servidores parceiros por racismo, seu AutoMod pode barrá-lo na porta. Mas cuidado: confie apenas em listas de guardiões que compartilham sua filosofia.</p>
        `
      },
      {
        id: 'c5-12',
        title: '12. A Exceção da Regra',
        content: `
          <p class="mb-6">Cargos superiores (Veteranos, Boosters) devem ter imunidade leve a certos filtros (como links ou caps lock). Isso reduz a fricção com membros confiáveis.</p>
          <p>Configure seu AutoMod para ignorar certas roles, mas nunca ignore a role "Everyone".</p>
        `
      }
    ]
  },
  {
    id: 'b6',
    title: 'Crisis Management',
    subtitle: 'Quando o céu cai',
    difficulty: Difficulty.Avancado,
    platform: Platform.Geral,
    tags: ['Crise', 'PR', 'Legal'],
    description: 'Protocolos para os piores dias: Raids massivos, vazamento de dados, ameaças reais e revoltas comunitárias. Esteja preparado para ser a âncora quando a tempestade chegar.',
    chapters: [
      {
        id: 'c6-1',
        title: '1. O Protocolo de Contenção',
        interactiveComponent: 'CrisisDecision',
        content: `
          <p class="mb-6">Em uma crise, a velocidade vence a perfeição. Se dados estão vazando ou gore está sendo postado, sua prioridade não é investigar quem fez, mas fechar as comportas.</p>
          <p>Tenha um botão de "Lockdown" pré-configurado que remove permissões de fala de todos os cargos, exceto Staff, em todos os canais.</p>
        `
      },
      { 
        id: 'c6-2', 
        title: '2. A Sala de Guerra', 
        content: `
          <p class="mb-6">Durante o caos, o chat da Staff vira uma bagunça. Crie um canal de voz "Sala de Guerra" onde apenas os líderes falam. O resto ouve e executa.</p>
          <p>Centralize a comunicação. Informações contraditórias vindas de moderadores diferentes causam pânico na base de usuários. Nomeie um "Porta-Voz" oficial para updates públicos.</p>
        ` 
      },
      { 
        id: 'c6-3', 
        title: '3. Ameaças Reais e Suicídio', 
        content: `
          <p class="mb-6">Eventualmente, alguém ameaçará tirar a própria vida ou atacar uma escola no seu servidor. Não pague para ver.</p>
          <p><strong>Não tente ser herói ou psicólogo.</strong> Colete os dados (IP, e-mail, mensagens), reporte para a plataforma (Discord Trust & Safety é rápido nisso) e, se possível, contate autoridades locais se a localização for conhecida. Sua responsabilidade é reportar, não resolver.</p>
        ` 
      },
      { 
        id: 'c6-4', 
        title: '4. O "Post Mortem"', 
        content: `
          <p class="mb-6">Após a tempestade, vem o aprendizado. Escreva um documento público detalhando: O que aconteceu? Por que aconteceu? O que fizemos para consertar? O que faremos para prevenir?</p>
          <p>Assumir a culpa (se houver) gera respeito. Culpar "hackers" ou terceiros gera desconfiança. A verdade reconstrói a chama.</p>
        ` 
      },
      { 
        id: 'c6-5', 
        title: '5. Revolta Interna (Motim)', 
        content: `
          <p class="mb-6">O pior pesadelo: quando seus próprios moderadores se revoltam contra você e começam a destruir o servidor.</p>
          <p class="mb-6">Remova todas as permissões imediatamente. Não tente argumentar enquanto eles têm a arma na mão. Recupere o controle técnico primeiro, dialogue depois.</p>
          
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A Chave Mestra (The Crown Jewel)</h3>
          <p class="mb-6">Você precisa ter uma conta "Dono" que <strong>nunca</strong> é usada para o dia a dia. Ela não entra em call, ela não joga. Ela existe apenas para uma coisa: manter a estrutura de permissões raiz.</p>
          <ul class="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
              <li><strong>Isolamento Total:</strong> O 2FA dessa conta está em um dispositivo físico diferente (um celular antigo na gaveta).</li>
              <li><strong>Hierarquia Absoluta:</strong> No Discord, o cargo dessa conta deve estar acima de todos os outros e ter a permissão "Administrator" travada. Ninguém, nem o Head Admin, pode banir ou gerenciar essa conta.</li>
          </ul>

          <h3 class="text-2xl font-display text-white mt-8 mb-4">Protocolo de Recuperação (Kill Switch)</h3>
          <p class="mb-6">Quando o motim começa, você não tem tempo para clicar em 20 nomes e remover cargos um por um. Você precisa de um botão nuclear.</p>
          <div class="bg-black border border-zinc-800 p-4 rounded mb-6 font-mono text-sm text-flame-500">
              <p class="opacity-50 mb-2">// Exemplo de script de emergência para Bot de Gestão</p>
              <p>> !system_override --auth [SEGREDO_ALFANUMERICO]</p>
              <p>> Executing: "STRIP_ALL_STAFF_ROLES"</p>
              <p>> Status: All moderators demoted to 'User'. Hierarchy reset.</p>
          </div>
          <p>Se você não tem um bot customizado para isso, o procedimento manual no Discord é: Configurações do Servidor > Cargos > Mover o cargo "Traidor" para baixo do cargo do seu Bot de Defesa, e então usar o Bot para banir todos com aquele cargo em massa.</p>
        ` 
      },
      { 
        id: 'c6-6', 
        title: '6. Fake News e Rumores', 
        content: `
          <p class="mb-6">Em crises, rumores se espalham mais rápido que fatos. "O dono roubou o dinheiro das doações!".</p>
          <p>Crie um canal de \`#anuncios-oficiais\` que seja a única fonte de verdade. Use linguagem clara, sóbria e direta. Não entre em brigas no chat geral. Poste o fato e fixe-o.</p>
        ` 
      },
      { 
        id: 'c6-7', 
        title: '7. Saúde Mental Pós-Crise', 
        content: `
          <p class="mb-6">Depois que a adrenalina baixa, vem o trauma. Sua equipe pode ficar com medo de moderar.</p>
          <p>Faça uma reunião de "descompressão". Deixe que falem como se sentiram. Agradeça. Dê folga. Mostre que você se importa mais com eles do que com o servidor.</p>
        ` 
      },
      {
        id: 'c6-8',
        title: '8. O "Cisne Cinza"',
        content: `
          <p class="mb-6">Algumas crises são imprevisíveis (Cisnes Negros), mas a maioria são "Cisnes Cinzas": eventos improváveis, mas previsíveis. Você sabe que um dia o servidor vai crashar. Você sabe que um dia um admin vai surtar.</p>
          <p>Não espere acontecer para pensar no plano. Tenha templates de texto prontos. Tenha backups prontos. A preparação transforma o pânico em procedimento.</p>
        `
      },
      {
        id: 'c6-9',
        title: '9. Ordens Judiciais',
        content: `
          <p class="mb-6">Se a polícia bater à sua porta digital (intimação para entregar logs de IP), não brinque. Coopere dentro da lei.</p>
          <p>Tenha um termo de privacidade claro que avisa aos usuários que dados podem ser entregues às autoridades em caso de crime. O Guardião protege a comunidade, não criminosos.</p>
        `
      },
      {
        id: 'c6-10',
        title: '10. Entretenimento no Escuro',
        content: `
          <p class="mb-6">Se o servidor vai ficar offline por 24 horas para manutenção de emergência, não deixe a comunidade no escuro total.</p>
          <p>Abra um canal de "Karaokê" no Discord ou organize um jogo de navegador (Gartic). Mantenha a chama social acesa mesmo quando a casa técnica está em reforma.</p>
        `
      },
      {
        id: 'c6-11',
        title: '11. Doxing da Staff',
        content: `
          <p class="mb-6">Em crises graves, usuários vingativos podem tentar vazar dados pessoais (endereço, nome real) da sua staff.</p>
          <p>Instrua seus guardiões a trancarem redes sociais pessoais. Se ocorrer, bana o infrator imediatamente e reporte à plataforma. Um ataque à vida real de um guardião é a linha vermelha final.</p>
        `
      },
      {
        id: 'c6-12',
        title: '12. O Protocolo Fênix: Renascer das Cinzas',
        content: `
          <p class="mb-6">Quando a reputação de um servidor é irreparavelmente danificada — seja por um escândalo da administração, um hack catastrófico ou uma toxicidade sistêmica — tentar consertar é como tentar desqueimar uma torrada. Às vezes, a única solução honrosa é a morte seguida de renascimento.</p>
          
          <h3 class="text-2xl font-display text-white mt-8 mb-4">1. O Sacrifício Calculado</h3>
          <p class="mb-6">O Protocolo Fênix exige o fechamento total da marca antiga. O Discord é arquivado (não deletado, para memória), o site sai do ar. O nome morre. Isso estanca o sangramento de reputação imediatamente.</p>
          
          <h3 class="text-2xl font-display text-white mt-8 mb-4">2. A Arca de Noé (Retenção de Núcleo)</h3>
          <p class="mb-6">Antes de fechar, identifique os "Portadores da Chama" — os 20% de jogadores e staff que geram 80% do valor positivo. Convide-os secretamente para um Discord de transição. Eles não são apenas jogadores; são os co-fundadores da nova cultura. Sem eles, o novo servidor é apenas um prédio vazio.</p>
          
          <h3 class="text-2xl font-display text-white mt-8 mb-4">3. Rebranding Total</h3>
          <p class="mb-6">Não mude apenas o logo. Mude a paleta de cores, a linguagem e a estrutura de regras. Se o servidor antigo tinha uma estética agressiva e escura, faça o novo limpo e luminoso. A dissociação visual ajuda a mente dos usuários a aceitar que "as coisas mudaram".</p>
          
          <h3 class="text-2xl font-display text-white mt-8 mb-4">4. A Narrativa de Retorno</h3>
          <p class="mb-6">Não esconda que vocês são a mesma equipe (a internet sempre descobre). Controle a narrativa: "Nós enterramos o Servidor X para que pudéssemos construir algo melhor com o que aprendemos. O Servidor Y é a nossa redenção." A vulnerabilidade gera confiança. A arrogância de fingir ser novo gera desdém.</p>
        `
      }
    ]
  },
  {
    id: 'b7',
    title: 'Constituição Comunitária',
    subtitle: 'Leis escritas em pedra',
    difficulty: Difficulty.Intermediario,
    platform: Platform.Geral,
    tags: ['Regras', 'Direito Digital', 'Ética'],
    description: 'Por que "não seja babaca" não funciona. Como escrever regras claras, justas e aplicáveis que moldam a cultura. A lei escrita é o contrato social que sustenta a paz.',
    chapters: [
      {
        id: 'c7-1',
        title: '1. O Mito do Bom Senso',
        content: `
          <p class="mb-6">"Bom senso" não existe globalmente. O que é piada em uma cultura é ofensa mortal em outra. Regras vagas como "Respeite a todos" são inúteis na hora de aplicar uma punição controversa.</p>
          <p>Seja específico. Em vez de "Sem spam", use "Máximo de 3 mensagens consecutivas ou imagens repetidas". Regras claras protegem o usuário (que sabe o limite) e o moderador (que tem base para agir).</p>
        `
      },
      { 
        id: 'c7-2', 
        title: '2. A Trindade da Lei', 
        content: `
          <p class="mb-6">Toda regra deve passar por três filtros:</p>
          <ol class="list-decimal pl-6 space-y-2 text-zinc-300">
             <li><strong>Clareza:</strong> Uma criança de 10 anos entende?</li>
             <li><strong>Necessidade:</strong> Essa regra previne um problema real ou apenas satisfaz o ego do dono?</li>
             <li><strong>Exequibilidade:</strong> Temos ferramentas para fiscalizar isso? (Proibir DM é impossível de fiscalizar, por exemplo).</li>
          </ol>
        ` 
      },
      { 
        id: 'c7-3', 
        title: '3. Regras Ocultas (Etiqueta)', 
        content: `
          <p class="mb-6">Além da constituição escrita, existe a "cultura" do servidor. Coisas que não dão ban, mas geram desprezo social (ex: pedir cargo, mendigar itens).</p>
          <p>Documente isso em um guia de "Boas Maneiras". Eduque antes de legislar. A cultura forte auto-regula o comportamento melhor que a polícia.</p>
        ` 
      },
      { 
        id: 'c7-4', 
        title: '4. O Contrato Social', 
        content: `
          <p class="mb-6">Ao entrar, o usuário aceita trocar parte de sua liberdade absoluta pela segurança e convívio do grupo. Relembre-os disso.</p>
          <p>A moderação não é opressão; é a garantia de que esse contrato está sendo cumprido. Você não tira a liberdade de fala; você tira a liberdade de assédio para garantir a liberdade de existência dos outros.</p>
        ` 
      },
      { 
        id: 'c7-5', 
        title: '5. Brechas Legais (Loophoeling)', 
        content: `
          <p class="mb-6">Evite regras excessivamente detalhadas, pois elas convidam à busca de brechas. "Proibido insultar a mãe" convida o troll a insultar o pai.</p>
          <p>Use uma "Cláusula Guarda-Chuva": "A staff reserva o direito de punir comportamentos que prejudiquem a comunidade, mesmo que não listados explicitamente". Isso fecha as brechas.</p>
        ` 
      },
      { 
        id: 'c7-6', 
        title: '6. Processo de Apelação', 
        content: `
          <p class="mb-6">Uma justiça sem chance de defesa é tirania. Crie um formulário de apelação (Google Forms ou Bot).</p>
          <p>Pergunte: "Por que você foi banido?" e "Por que devemos te aceitar de volta?". Se o usuário não souber dizer por que foi banido, ele não aprendeu nada. O apelo é o teste final de aprendizado.</p>
        ` 
      },
      { 
        id: 'c7-7', 
        title: '7. Democracia vs Ditadura', 
        content: `
          <p class="mb-6">Comunidades não são democracias. São ditaduras benevolentes. Se você deixar os usuários votarem em tudo, eles votarão por anarquia ou linchamentos.</p>
          <p>Ouça a comunidade (feedback), mas decida como liderança. Você tem a visão do todo; o usuário tem a visão do próprio umbigo.</p>
        ` 
      },
      {
        id: 'c7-8',
        title: '8. Jurisdição (O que acontece na DM...)',
        content: `
          <p class="mb-6">Uma das questões mais difíceis: Você deve punir alguém por algo que disseram no privado? Geralmente, a resposta é não, a menos que ameace a segurança do servidor (convite para raid, assédio grave).</p>
          <p>Defina claramente os limites da sua jurisdição. Você é o Guardião da Praça Pública, não o espião dos quartos privados.</p>
        `
      },
      {
        id: 'c7-9',
        title: '9. A Fronteira NSFW',
        content: `
          <p class="mb-6">Conteúdo adulto é nitroglicerina. Se permitido, deve ser trancado atrás de canais com verificação de idade rigorosa.</p>
          <p>Se sua comunidade tem menores, a política de tolerância zero é a única opção segura. Uma imagem errada pode derrubar seu servidor inteiro pelos Termos de Serviço da plataforma.</p>
        `
      },
      {
        id: 'c7-10',
        title: '10. Retroatividade',
        content: `
          <p class="mb-6">Você criou uma nova regra hoje. Pode banir alguém que fez aquilo ontem? Não. "Nullum crimen sine lege" (Não há crime sem lei anterior).</p>
          <p>Aplique regras daqui para frente. Dê um período de anistia e educação quando mudar a constituição.</p>
        `
      },
      {
        id: 'c7-11',
        title: '11. Barreiras de Linguagem',
        content: `
          <p class="mb-6">Se seu servidor é global, defina o idioma oficial. Permitir todos os idiomas torna a moderação impossível (você não sabe se estão xingando em Tagalo).</p>
          <p>Seja claro: "Português/Inglês apenas nos canais públicos". Crie canais específicos para outros idiomas se houver demanda.</p>
        `
      },
      {
        id: 'c7-12',
        title: '12. A Cláusula do Pôr do Sol',
        content: `
          <p class="mb-6">Regras envelhecem. Aquela regra sobre "não usar bugs da versão 1.2" é inútil na versão 5.0.</p>
          <p>Revise sua constituição a cada 6 meses. Remova o entulho. Leis mortas diminuem o respeito pelas leis vivas.</p>
        `
      }
    ]
  },
  {
    id: 'b8',
    title: 'Mentoria de Guardiões',
    subtitle: 'Passando a tocha',
    difficulty: Difficulty.Avancado,
    platform: Platform.Geral,
    tags: ['Liderança', 'RH', 'Ensino'],
    description: 'Você não pode proteger o mundo sozinho. Como encontrar, treinar e liderar a próxima geração de moderadores. O verdadeiro legado de um líder é a equipe que ele deixa para trás.',
    chapters: [
      {
        id: 'c8-1',
        title: '1. O Perfil do Guardião',
        content: `
          <p class="mb-6">Não recrute quem *pede* para ser moderador. Quem busca poder geralmente não deve tê-lo.</p>
          <p>Busque o "jardineiro silencioso". Aquele usuário que ajuda novatos sem ninguém ver, que reporta bugs discretamente, que acalma discussões sem ter cargo. O Guardião nasce do serviço, não da ambição.</p>
        `
      },
      { 
        id: 'c8-2', 
        title: '2. O Método Sombra', 
        content: `
          <p class="mb-6">Não dê o martelo de ban imediatamente. Use o sistema de "Shadowing". O trainee acompanha um moderador sênior, vendo ele agir, lendo os logs de decisões, mas sem poder de ação.</p>
          <p>Depois, ele sugere a punição e o sênior aplica. Só quando o julgamento dele estiver alinhado com a filosofia da casa, ele ganha o botão vermelho.</p>
        ` 
      },
      { 
        id: 'c8-3', 
        title: '3. Feedback e Erro', 
        content: `
          <p class="mb-6">Seu moderador vai errar. Vai banir injustamente num dia ruim. Como líder, sua reação define o futuro dele.</p>
          <p>Se você punir o erro publicamente, ele ficará com medo de agir e se tornará passivo. Corrija no privado, apoie no público. Ensine a pedir desculpas. A autoridade se recupera; a confiança quebrada com a liderança, não.</p>
        ` 
      },
      { 
        id: 'c8-4', 
        title: '4. Rotação e Descanso', 
        content: `
          <p class="mb-6">Moderação voluntária é trabalho emocional não remunerado. Crie escalas. Force férias. "Nesta semana, fulano está proibido de olhar o canal de denúncias".</p>
          <p>Proteja seus guardiões para que eles possam proteger a comunidade.</p>
        ` 
      },
      { 
        id: 'c8-5', 
        title: '5. O Momento da Demissão', 
        content: `
          <p class="mb-6">O momento mais difícil. Às vezes, um bom amigo é um péssimo moderador. Ele pode ser parcial, inativo ou tóxico.</p>
          <p>Remova o cargo com dignidade. "Você é importante para a comunidade, mas o cargo exige X e você não pode dar X agora". Não humilhe. Permita que ele volte a ser um usuário normal e amado.</p>
        ` 
      },
      { 
        id: 'c8-6', 
        title: '6. Hierarquia vs Círculo', 
        content: `
          <p class="mb-6">Evite muitas patentes (Helper -> Jr Mod -> Mod -> Sr Mod -> Admin -> Head Admin). Isso cria burocracia e "fome de promoção".</p>
          <p>Mantenha a estrutura plana. Trainee (aprendendo) e Guardião (pleno). Cargos especiais apenas para funções técnicas. O foco deve ser o trabalho, não a medalha no peito.</p>
        ` 
      },
      { 
        id: 'c8-7', 
        title: '7. Os Ex-Guardiões', 
        content: `
          <p class="mb-6">Crie um cargo de "Veterano" ou "Aposentado" para ex-staff. Eles deram seu tempo e sangue.</p>
          <p>Eles são os anciões da tribo. Mesmo sem poder de banir, a palavra deles tem peso. Honre sua história.</p>
        ` 
      },
      {
        id: 'c8-8',
        title: '8. Viés Inconsciente',
        content: `
          <p class="mb-6">Todos nós temos preconceitos. Treine sua equipe para reconhecê-los. "Estou punindo este usuário mais severamente porque ele escreve mal? Ou porque o nome dele me irrita?".</p>
          <p>A justiça exige autoanálise constante. O Guardião deve limpar suas lentes antes de julgar o mundo.</p>
        `
      },
      {
        id: 'c8-9',
        title: '9. Testes de Estresse',
        content: `
          <p class="mb-6">Antes de promover alguém, veja como reagem sob pressão. Simule um cenário de crise. Coloque-os para lidar com o usuário mais chato do servidor.</p>
          <p>Habilidade técnica se ensina. Paciência e caráter, não. Descubra o ponto de quebra antes que ele aconteça em produção.</p>
        `
      },
      {
        id: 'c8-10',
        title: '10. Canais de Desabafo',
        content: `
          <p class="mb-6">A staff precisa de um "Vestiário". Um canal privado onde podem xingar, reclamar e chorar sem serem julgados.</p>
          <p>O que acontece no vestiário, fica no vestiário. Permitir essa ventilação de pressão evita que ela exploda em cima dos usuários.</p>
        `
      },
      {
        id: 'c8-11',
        title: '11. A Moeda da Gratidão',
        content: `
          <p class="mb-6">Se você não pode pagar salário, pague em propósito e reconhecimento. Dê crédito público. Dê skins exclusivas. Faça com que eles se sintam parte de uma elite honrada.</p>
          <p>A maior recompensa para um voluntário é sentir que seu trabalho importa.</p>
        `
      },
      {
        id: 'c8-12',
        title: '12. O Plano de Sucessão',
        content: `
          <p class="mb-6">E se você morrer amanhã? O servidor morre junto?</p>
          <p>Um verdadeiro líder prepara seu substituto. Compartilhe as senhas (de forma segura/contingencial). Documente os processos. A prova final de sucesso de um Guardião é tornar-se desnecessário.</p>
        `
      }
    ]
  },
  {
    id: 'b9',
    title: 'Discord do Zero',
    subtitle: 'Construindo a casa',
    difficulty: Difficulty.Iniciante,
    platform: Platform.Discord,
    tags: ['Setup', 'Permissões', 'Bots'],
    description: 'Passo a passo técnico para criar um servidor Discord seguro, organizado e bonito. A primeira impressão do seu servidor define o respeito que ele receberá.',
    chapters: [
      {
        id: 'c9-1',
        title: '1. A Hierarquia de Poder',
        content: `
          <p class="mb-6">O sistema de permissões do Discord é uma cascata. O cargo mais alto vence. Nunca, jamais, dê a permissão "Administrador" para bots ou cargos que não sejam o dono, a menos que seja estritamente necessário.</p>
          <p>Configure permissões canal por canal, mas use as Categorias para sincronizar. É mais fácil gerenciar 5 categorias do que 50 canais.</p>
        `
      },
      { 
        id: 'c9-2', 
        title: '2. O Canal de Logs', 
        content: `
          <p class="mb-6">O canal mais importante do seu servidor é um que ninguém vê: os Logs. Tudo deve ser registrado: mensagens apagadas, edições, trocas de nome, entradas e saídas.</p>
          <p>Bots como Dyno ou Carl-bot são essenciais aqui. Quando uma crise estoura, os logs são sua caixa-preta.</p>
        ` 
      },
      { 
        id: 'c9-3', 
        title: '3. Onboarding', 
        content: `
          <p class="mb-6">A primeira impressão define o comportamento. Use a ferramenta nativa de Onboarding do Discord para guiar o usuário aos canais que ele gosta.</p>
          <p>Um usuário confuso fica irritado. Um usuário bem recebido, que escolhe seus cargos e vê apenas o que interessa, tende a ser mais pacífico.</p>
        ` 
      },
      { 
        id: 'c9-4', 
        title: '4. Webhooks e Segurança', 
        content: `
          <p class="mb-6">Webhooks são poderosos para integrar notícias e logs externos, mas se a URL vazar, qualquer um pode postar como se fosse o sistema. Trate URLs de Webhook como senhas de banco.</p>
          <p>Nunca crie um Webhook em um canal público onde ele possa ser "lido" por bots maliciosos que varrem a API.</p>
        ` 
      },
      { 
        id: 'c9-5', 
        title: '5. Sistema de Tickets', 
        content: `
          <p class="mb-6">Não faça suporte via DM. DMs são terra sem lei, sem logs e sem testemunhas. O usuário pode te insultar e apagar a mensagem.</p>
          <p>Use bots de Tickets (Ticket Tool). Isso cria um canal temporário visível apenas para a staff e o usuário. Tudo fica registrado, e qualquer staff disponível pode atender. Profissionalize o atendimento.</p>
        ` 
      },
      { 
        id: 'c9-6', 
        title: '6. Segurança de Voz', 
        content: `
          <p class="mb-6">Raids de voz (gritaria, gemidão) são destrutivos. Configure o canal de voz para exigir "Verificação de Celular" ou tempo mínimo de conta.</p>
          <p>Tenha um bot de música ou moderação que possa "calar" todos no canal com um comando. Em eventos, use o modo "Priority Speaker" para que apenas o host seja ouvido sobre os outros.</p>
        ` 
      },
      { 
        id: 'c9-7', 
        title: '7. Identidade Visual (Emojis)', 
        content: `
          <p class="mb-6">Emojis customizados são a alma da cultura do servidor. Eles criam pertencimento.</p>
          <p>Crie emojis que representem as piadas internas e os valores da comunidade. Um emoji de "GG" estilizado vale mais que mil palavras.</p>
        ` 
      },
      {
        id: 'c9-8',
        title: '8. Canais de Fórum',
        content: `
          <p class="mb-6">Para discussões profundas ou suporte técnico, o chat linear é péssimo. Use Forum Channels. Eles organizam tópicos como uma biblioteca.</p>
          <p>Isso evita que a mesma pergunta seja feita 10 vezes. Transforma o caos do chat em conhecimento indexado.</p>
        `
      },
      {
        id: 'c9-9',
        title: '9. Canais de Anúncio',
        content: `
          <p class="mb-6">Use a flag "Announcement Channel" para que outros servidores possam seguir suas notícias. É uma ferramenta poderosa de marketing.</p>
          <p>Mas use com parcimônia. Cada vez que você "Publica" uma notícia, você envia uma notificação para milhares de pessoas. Se usar para bobagens, as pessoas deixarão de seguir.</p>
        `
      },
      {
        id: 'c9-10',
        title: '10. Integrações (Connections)',
        content: `
          <p class="mb-6">Vincule cargos à Twitch, YouTube ou Patreon. Isso automatiza recompensas e cria status instantâneo.</p>
          <p>Verificar a conta externa também é uma ótima barreira contra bots. Um bot pode criar uma conta Discord em 1 segundo, mas dificilmente terá uma conta Steam nível 10 vinculada.</p>
        `
      },
      {
        id: 'c9-11',
        title: '11. Stage Channels',
        content: `
          <p class="mb-6">Para eventos comunitários, podcasts ou reuniões gerais (Town Halls), use o Stage. Ele organiza a plateia e os oradores.</p>
          <p>É o púlpito do Guardião. Use-o para humanizar a staff, fazendo sessões de perguntas e respostas ao vivo.</p>
        `
      },
      {
        id: 'c9-12',
        title: '12. Server Insights',
        content: `
          <p class="mb-6">Se você tem acesso aos Insights, use-os. Veja em que horário seu servidor é mais ativo. Veja de onde vêm os novos membros.</p>
          <p>Dados vencem achismos. Se os dados mostram que ninguém clica no canal de #memes, delete-o. Mantenha a casa limpa e eficiente.</p>
        `
      }
    ]
  },
  {
    id: 'b10',
    title: 'Plugins e Mods',
    subtitle: 'Estendendo a realidade',
    difficulty: Difficulty.Intermediario,
    platform: Platform.Servidores,
    tags: ['Minecraft', 'SourceMod', 'Oxide'],
    description: 'O paradoxo da escolha. Como escolher e configurar plugins que melhoram o jogo sem destruir sua essência. Menos é mais quando se trata de modificar a experiência original.',
    chapters: [
      {
        id: 'c10-1',
        title: '1. Vanilla vs Modded',
        content: `
          <p class="mb-6">A tentação de instalar 100 plugins é grande. "Olha, um plugin de chapéus! Um de rastro de fogo! Um de música!"</p>
          <p>Cada plugin é um ponto de falha. Cada plugin adiciona carga à CPU. Cada plugin dilui a experiência original. A melhor moderação é invisível; o melhor servidor parece "nativo", mas com superpoderes sutis de administração.</p>
        `
      },
      { 
        id: 'c10-2', 
        title: '2. O Ciclo de Updates', 
        content: `
          <p class="mb-6">Jogos atualizam (Rust toda primeira quinta do mês, CS2 aleatoriamente). Plugins quebram. Se seu servidor depende de plugins para funcionar (ex: um modo de jogo custom), ele morrerá a cada update.</p>
          <p>Tenha um servidor de testes (Staging). Nunca aplique updates na produção sem testar se a "cola" dos plugins ainda segura a estrutura.</p>
        ` 
      },
      { 
        id: 'c10-3', 
        title: '3. Economia e Pay-to-Win', 
        content: `
          <p class="mb-6">Monetizar é necessário para pagar o host, mas vender vantagens injustas (armas, desbanimentos) destrói a integridade competitiva.</p>
          <p>Venda cosméticos. Venda conveniência (fila preferencial, skins, cores de nome). Nunca venda poder. A chama do jogador se apaga quando ele percebe que o jogo foi manipulado pela carteira de outro.</p>
        ` 
      },
      { 
        id: 'c10-4', 
        title: '4. Open Source e Confiança', 
        content: `
          <p class="mb-6">Cuidado com plugins compilados (.dll, .jar) de fontes desconhecidas. Eles podem conter backdoors que dão OP ao criador.</p>
          <p>Sempre que possível, use plugins Open Source de comunidades renomadas (AlliedModders, SpigotMC). Leia o código ou peça para alguém ler. A segurança do seu templo depende do que você deixa entrar nele.</p>
        ` 
      },
      { 
        id: 'c10-5', 
        title: '5. Configuração é Arte', 
        content: `
          <p class="mb-6">Baixar o plugin é 10%. Configurar o arquivo .json ou .cfg é 90%. Não use os valores padrão (default).</p>
          <p>Traduza as mensagens para o idioma da sua comunidade. Ajuste os tempos de cooldown. A personalização mostra carinho. Um servidor com mensagens em inglês padrão parece abandonado ou preguiçoso.</p>
        ` 
      },
      { 
        id: 'c10-6', 
        title: '6. Anti-Cheat Server-side', 
        content: `
          <p class="mb-6">VAC e EasyAntiCheat não são suficientes. Plugins server-side (GrimAC, Little Anti-Cheat) analisam o comportamento impossível (movimento, ângulos).</p>
          <p>Mas cuidado: eles geram falsos positivos com lag. Configure para *notificar* os admins em vez de banir automaticamente, a menos que a violação seja flagrante (voar).</p>
        ` 
      },
      { 
        id: 'c10-7', 
        title: '7. Debugging de Conflitos', 
        content: `
          <p class="mb-6">O servidor crashou. O log diz "Segmentation Fault". Bem-vindo à vida de admin.</p>
          <p>Aprenda a técnica da bissecção: Remova metade dos plugins. O erro parou? Então o culpado está na metade removida. Se não, está na metade ativa. Repita até isolar o culpado. Paciência é sua maior ferramenta técnica.</p>
        ` 
      },
      {
        id: 'c10-8',
        title: '8. Poluição Visual (HUDs)',
        content: `
          <p class="mb-6">Muitos plugins adicionam informações na tela (Dano, FPS, Bem-vindo, Relógio). Cuidado.</p>
          <p>O jogador quer ver o jogo, não sua UI mal desenhada em Neon. Mantenha a interface limpa. Menos é mais. A imersão é frágil.</p>
        `
      },
      {
        id: 'c10-9',
        title: '9. Sistemas de Permissão (Permissions)',
        content: `
          <p class="mb-6">Plugins usam "nodes" de permissão (ex: \`essentials.fly\`). Gerenciar isso manualmente é loucura.</p>
          <p>Use gestores como LuckPerms ou Oxide Groups. Crie grupos lógicos (VIP, Mod, Admin) e atribua os nodes aos grupos, nunca aos usuários individuais. A organização hierárquica salva vidas.</p>
        `
      },
      {
        id: 'c10-10',
        title: '10. Conectividade de Dados (MySQL)',
        content: `
          <p class="mb-6">Não use arquivos planos (.txt, .json) para guardar dados de plugins se puder evitar. Use MySQL/SQLite.</p>
          <p>Isso permite que você exiba estatísticas no site do servidor, compartilhe dinheiro entre servidores e faça backups mais seguros. Dados estruturados são dados poderosos.</p>
        `
      },
      {
        id: 'c10-11',
        title: '11. Mapas Customizados',
        content: `
          <p class="mb-6">Nada define a identidade de um servidor como um mapa único. Mas mapas customizados exigem download.</p>
          <p>Garanta que seu FastDL (Fast Download) esteja configurado. Se o jogador demorar mais de 3 minutos para entrar, ele desiste. A paciência do usuário moderno é mínima.</p>
        `
      },
      {
        id: 'c10-12',
        title: '12. Vantagens VIP Equilibradas',
        content: `
          <p class="mb-6">Ao criar plugins para VIPs, pense: "Isso faz ele ganhar ou apenas se divertir?".</p>
          <p>Skin de arma? Ótimo. Dano em dobro? Terrível. Acesso a comando de teleporte? Depende do jogo. O equilíbrio financeiro não pode custar o equilíbrio do gameplay.</p>
        `
      },
      {
        id: 'c10-13',
        title: '13. O Inferno das Dependências',
        content: `
          <p class="mb-6">O plugin A precisa da biblioteca B, que precisa da versão X do jogo, que conflita com o plugin C.</p>
          <p>Antes de instalar, leia a documentação de dependências. Mantenha um diagrama do que liga com o que. Evite plugins "abandonware" que não são atualizados há anos.</p>
        `
      }
    ]
  },
  {
    id: 'b11',
    title: 'A Arte da Influência',
    subtitle: 'Como ser uma lenda na comunidade',
    difficulty: Difficulty.Avancado,
    platform: Platform.Geral,
    tags: ['Carisma', 'Networking', 'Popularidade'],
    description: 'Um guia sobre como construir uma reputação inabalável, ser amado pelos membros e se tornar uma das pessoas mais famosas e respeitadas do servidor. A verdadeira influência nasce do valor que você entrega.',
    chapters: [
      {
        id: 'c11-1',
        title: '1. O Magnetismo Pessoal',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">A popularidade não se exige, se atrai. Pessoas magnéticas não são necessariamente as mais barulhentas, mas as que fazem os outros se sentirem importantes. O verdadeiro carisma é a habilidade de iluminar a sala sem ofuscar os outros.</p>
          <p class="mb-6">Quando você ouve ativamente, lembra de detalhes das conversas anteriores e celebra as vitórias dos outros, você cria uma gravidade social irresistível. Não se trata de ser o centro das atenções, mas de ser o centro de gravidade que mantém a comunidade unida.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A Ilusão do Protagonismo</h3>
          <p class="mb-6">Muitos acham que para ser famoso é preciso falar o tempo todo. Na verdade, as pessoas mais influentes são aquelas que fazem perguntas brilhantes e deixam os outros brilharem. Quando você faz alguém se sentir inteligente, essa pessoa associa esse sentimento positivo a você.</p>
        `
      },
      {
        id: 'c11-2',
        title: '2. Consistência e Presença',
        content: `
          <p class="mb-6">A fama na comunidade vem da repetição. Aparecer uma vez e fazer um grande evento é bom, mas estar presente todos os dias, cumprimentando e ajudando, constrói lendas. A confiança é construída em gotas e perdida em baldes.</p>
          <p class="mb-6">Seja a constante positiva. Quando as pessoas pensarem no servidor, seu nome deve ser o primeiro a vir à mente como sinônimo de boa companhia. Isso exige disciplina. Haverá dias em que você não vai querer interagir, mas o verdadeiro influenciador sabe que sua presença é um pilar para os outros.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">O Ritual do "Bom Dia"</h3>
          <p class="mb-6">Pode parecer simples, mas ser a pessoa que sempre dá bom dia, que sempre se despede, que sempre nota quando alguém novo entra, cria uma âncora emocional. Você se torna a mobília reconfortante da casa digital.</p>
        `
      },
      {
        id: 'c11-3',
        title: '3. Criação de Valor',
        content: `
          <p class="mb-6">Você quer ser famoso? Resolva problemas. Crie guias, organize torneios, faça memes de qualidade, ajude os novatos. A influência é diretamente proporcional ao valor que você injeta no ecossistema.</p>
          <p class="mb-6">A popularidade vazia (baseada apenas em falar muito) desaparece rápido. A popularidade baseada em utilidade e entretenimento cria raízes profundas. Se você desaparecer amanhã, o que a comunidade perderia? Se a resposta for "nada", você não é influente, apenas barulhento.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A Moeda Social</h3>
          <p class="mb-6">Conhecimento, humor e organização são moedas sociais. Distribua-as generosamente. Quem acumula conhecimento sem compartilhar é um bibliotecário trancado; quem compartilha é um mestre reverenciado.</p>
        `
      },
      {
        id: 'c11-4',
        title: '4. O Equilíbrio do Ego',
        interactiveComponent: 'FlameBalance',
        content: `
          <p class="mb-6">O maior risco da fama é a arrogância. Quanto mais popular você se torna, mais humilde você deve agir. O ego é o veneno que corrói a influência de dentro para fora.</p>
          <p class="mb-6">O verdadeiro ícone da comunidade é acessível. Ele não se isola em canais VIP, ele desce para jogar com os iniciantes. A humildade blinda sua reputação contra a inveja. Se você se coloca em um pedestal, as pessoas vão querer derrubá-lo. Se você se senta no chão com eles, eles vão querer levantá-lo.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A Calibração da Fama</h3>
          <p class="mb-6">Use o simulador abaixo para entender como o excesso de ego ou a falsa modéstia afetam sua imagem. Encontre o equilíbrio do Guardião.</p>
        `
      },
      {
        id: 'c11-5',
        title: '5. A Arte da Escuta Ativa',
        content: `
          <p class="mb-6">A maioria das pessoas não escuta para entender, escuta para responder. O influenciador mestre faz o oposto. Ele lê as entrelinhas. Ele percebe quando um membro está frustrado antes mesmo que a pessoa reclame abertamente.</p>
          <p class="mb-6">A escuta ativa transforma interações superficiais em conexões profundas. Quando você repete o que a pessoa disse com suas próprias palavras ("Então o que você está dizendo é..."), você valida a existência dela. Em um mundo digital onde todos gritam, quem sabe ouvir se torna um rei.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">O Silêncio Estratégico</h3>
          <p class="mb-6">Não tenha medo do silêncio no chat de voz. Pausas bem colocadas dão peso às suas palavras. Falar menos faz com que, quando você finalmente falar, todos parem para ouvir.</p>
        `
      },
      {
        id: 'c11-6',
        title: '6. Resolução de Conflitos',
        interactiveComponent: 'DialogueTree',
        interactiveData: {
          scenarios: [
            {
              text: "Dois membros influentes estão brigando no chat geral e dividindo a comunidade. Como você intervém?",
              options: [
                { label: "Tomar o lado de quem está tecnicamente certo", outcome: "Erro. Você alienou metade da comunidade e transformou um conflito pessoal em uma guerra civil.", success: false },
                { label: "Mandar os dois calarem a boca e ameaçar ban", outcome: "Erro. Você usou força bruta, perdendo o respeito de ambos e parecendo um tirano.", success: false },
                { label: "Chamar ambos para uma call privada e atuar como mediador neutro", outcome: "Sucesso. Você tirou o palco público deles, validou as emoções de ambos e resolveu o problema na raiz. Sua influência cresce.", success: true }
              ]
            }
          ]
        },
        content: `
          <p class="mb-6">A verdadeira influência é testada no fogo do conflito. Quando a comunidade está dividida, todos olham para os líderes informais. Como você reage define seu status.</p>
          <p class="mb-6">Nunca tome partido publicamente em brigas mesquinhas. Seja a Suíça. Seja a voz da razão que acalma os ânimos. O pacificador ganha o respeito de ambos os lados da trincheira.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">O Teste do Mediador</h3>
          <p class="mb-6">Treine sua capacidade de desescalar conflitos no simulador abaixo. Lembre-se: o objetivo não é descobrir quem está certo, mas restaurar a paz.</p>
        `
      },
      {
        id: 'c11-7',
        title: '7. O Poder das Alianças',
        content: `
          <p class="mb-6">Nenhum rei governa sozinho. A influência é uma rede, não uma torre. Você precisa de aliados em diferentes "panelinhas" ou subgrupos do servidor.</p>
          <p class="mb-6">Faça amizade com os construtores, com os jogadores competitivos, com os artistas, com os novatos. Quando você tem pontes em todas as ilhas, você se torna o continente. Se alguém tentar atacar sua reputação, seus aliados o defenderão antes mesmo que você precise falar.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A Teia de Aranha Social</h3>
          <p class="mb-6">Conecte pessoas. "Ei João, o Marcos também adora esse jogo, vocês deveriam jogar juntos". Quando você é o arquiteto de novas amizades, você se torna inesquecível para ambas as partes.</p>
        `
      },
      {
        id: 'c11-8',
        title: '8. Liderança pelo Exemplo',
        content: `
          <p class="mb-6">As palavras movem, mas o exemplo arrasta. Se você quer que a comunidade seja menos tóxica, seja o poço de positividade. Se quer que as pessoas ajudem os novatos, seja o primeiro a recebê-los.</p>
          <p class="mb-6">A hipocrisia é o assassino mais rápido da influência. Você não pode exigir respeito se trata os outros com desdém. A coroa da influência é pesada porque exige que você viva de acordo com os padrões que prega.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">O Efeito Espelho</h3>
          <p class="mb-6">A comunidade é um reflexo de seus líderes. Se você é caótico, o chat será caótico. Se você é focado e gentil, o ambiente se moldará à sua imagem.</p>
        `
      },
      {
        id: 'c11-9',
        title: '9. Comunicação Carismática',
        content: `
          <p class="mb-6">A forma como você escreve importa. Mensagens curtas, secas e sem pontuação transmitem desinteresse. Textos longos demais transmitem desespero por atenção.</p>
          <p class="mb-6">Aprenda a usar o humor autodepreciativo. Rir de si mesmo é a maior demonstração de autoconfiança. Use emojis com sabedoria para transmitir tom. A comunicação digital carece de linguagem corporal; suas palavras e formatação são seu corpo agora.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A Arte do Storytelling</h3>
          <p class="mb-6">Pessoas esquecem fatos, mas lembram de histórias. Quando for explicar algo ou compartilhar uma experiência, transforme em uma narrativa. Heróis, vilões, desafios e superação. Transforme o mundano em épico.</p>
        `
      },
      {
        id: 'c11-10',
        title: '10. Gestão de Crises de Imagem',
        interactiveComponent: 'CrisisDecision',
        content: `
          <p class="mb-6">Um dia, você vai errar. Vai fazer uma piada de mau gosto, vai perder a paciência, vai ofender alguém. A forma como você lida com a queda define se você vai se levantar mais forte ou desaparecer.</p>
          <p class="mb-6">A regra de ouro: Peça desculpas rápido, sem justificativas ("Desculpe SE você se ofendeu" não é um pedido de desculpas). Assuma a culpa, mostre que aprendeu e siga em frente. A internet tem memória curta para quem é humilde, mas memória eterna para quem é arrogante.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">O Tribunal da Internet</h3>
          <p class="mb-6">Teste seus instintos de relações públicas no simulador abaixo. Um passo em falso pode custar sua reputação.</p>
        `
      },
      {
        id: 'c11-11',
        title: '11. O Mentor Silencioso',
        content: `
          <p class="mb-6">A verdadeira marca de uma lenda não é quantos seguidores ela tem, mas quantos líderes ela criou. Escolha membros promissores e invista neles.</p>
          <p class="mb-6">Ensine o que você sabe. Dê a eles os holofotes. Quando seus "pupilos" tiverem sucesso, o respeito deles por você se tornará devoção. A influência multiplicada é muito mais forte que a influência centralizada.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">Passando a Tocha</h3>
          <p class="mb-6">Não tenha medo de ser ofuscado. Um mestre se orgulha quando o aluno o supera. Isso prova a qualidade do seu ensino.</p>
        `
      },
      {
        id: 'c11-12',
        title: '12. A Psicologia da Multidão',
        content: `
          <p class="mb-6">Entender como a massa se move é crucial. Em momentos de hype (um novo jogo, uma grande atualização), surfe a onda. Seja o organizador do caos positivo.</p>
          <p class="mb-6">Em momentos de revolta, seja a rocha. A multidão busca âncoras emocionais. Se todos estão em pânico e você está calmo, você automaticamente se torna o líder da situação, mesmo sem ter um cargo oficial.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">Lendo a Sala</h3>
          <p class="mb-6">Aprenda a sentir o "clima" do servidor. Há dias para brincadeiras e dias para seriedade. O influenciador que faz piada no dia do luto perde o respeito instantaneamente.</p>
        `
      },
      {
        id: 'c11-13',
        title: '13. Criando Rituais Comunitários',
        content: `
          <p class="mb-6">Comunidades fortes são construídas em cima de tradições. A "Sexta-feira do Terror", o "Campeonato Mensal de X1", o "Meme da Semana".</p>
          <p class="mb-6">Seja o criador ou o guardião desses rituais. Tradições criam nostalgia e pertencimento. Quando você é o rosto de uma tradição amada, você se torna parte da história do servidor.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A Força do Hábito</h3>
          <p class="mb-6">Rituais dão às pessoas algo pelo qual ansiar. Em um mundo digital efêmero, a previsibilidade de um evento divertido é um oásis.</p>
        `
      },
      {
        id: 'c11-14',
        title: '14. Lidando com Haters e Inveja',
        content: `
          <p class="mb-6">A popularidade atrai a inveja como a luz atrai mariposas. Haverá pessoas que o odiarão simplesmente porque os outros o amam. É a taxa que se paga pelo sucesso.</p>
          <p class="mb-6">Nunca lute na lama com eles. Seus haters querem sua atenção para roubar sua relevância. Ignore-os com elegância. Deixe que seus aliados o defendam. O silêncio diante do ódio é a maior demonstração de poder.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">O Escudo de Teflon</h3>
          <p class="mb-6">Deixe as críticas infundadas escorregarem. Absorva apenas o feedback construtivo. Se você reagir a cada provocação, você se tornará um fantoche nas mãos dos seus inimigos.</p>
        `
      },
      {
        id: 'c11-15',
        title: '15. O Legado do Influenciador',
        content: `
          <p class="mb-6">Toda jornada tem um fim. Um dia você vai jogar menos, vai entrar menos no Discord, vai seguir com sua vida real. O que você deixa para trás?</p>
          <p class="mb-6">Se a comunidade desmoronar sem você, você falhou como líder. Se ela continuar próspera, usando as piadas que você criou, mantendo os rituais que você iniciou, você alcançou a imortalidade digital.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">A Saída Graciosa</h3>
          <p class="mb-6">Saiba quando dar um passo para trás. Não se torne o "velho amargurado" que reclama que o servidor não é mais como antigamente. Celebre a nova geração.</p>
        `
      },
      {
        id: 'c11-16',
        title: '16. A Coroa Invisível',
        content: `
          <p class="mb-6">A verdadeira influência não precisa de cargos, tags coloridas ou permissões de administrador. A coroa mais pesada é aquela que ninguém pode ver, mas todos sabem que você usa.</p>
          <p class="mb-6">Você chegou ao ápice. Você é respeitado, amado e ouvido. Use esse poder para o bem. Proteja os fracos, eleve os novatos e mantenha a chama da comunidade acesa. Você não é apenas famoso; você é uma lenda.</p>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">O Fim da Jornada</h3>
          <p class="mb-6">A arte da influência é, no fundo, a arte de amar as pessoas. Quem ama a comunidade, é amado de volta. Vá e construa seu império de positividade.</p>
        `
      }
    ]
  }
];

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleMobileNav = (page: 'home' | 'library' | 'philosophy' | 'sobre' | 'credits' | 'updates') => {
    playClick();
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

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
           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-zinc-950 border-b border-white/5 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-2">
            <button onClick={() => handleMobileNav('philosophy')} className="p-4 text-left text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg uppercase tracking-widest text-sm font-bold">Filosofia</button>
            <button onClick={() => handleMobileNav('library')} className="p-4 text-left text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg uppercase tracking-widest text-sm font-bold">Biblioteca</button>
            <button onClick={() => handleMobileNav('sobre')} className="p-4 text-left text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg uppercase tracking-widest text-sm font-bold">Sobre</button>
            <button onClick={() => handleMobileNav('credits')} className="p-4 text-left text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg uppercase tracking-widest text-sm font-bold">Créditos</button>
          </div>
        </div>
      )}
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
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
          PROTEJA <br/> A <span className="text-flame-500">CHAMA</span>
        </h1>
        <p className="font-serif text-base sm:text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
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
          className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 border-b border-white/5 bg-zinc-900/30">
           <div className="flex items-center gap-4 mb-4 pr-8">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg shrink-0">
                <topic.icon className="w-6 h-6 text-flame-500" />
              </div>
              <h3 className="text-lg md:text-xl font-display text-white">{topic.title}</h3>
           </div>
           <p className="text-zinc-400 font-serif italic border-l-2 border-flame-500 pl-4 text-sm md:text-base">"{topic.question}"</p>
        </div>

        <div className="h-[400px] overflow-y-auto p-4 md:p-8 relative">
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

const DiscussionTopicsSection = () => {
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
        </div>

        <div className="flex items-center justify-center p-16 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/20">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-zinc-500" />
            </div>
            <h3 className="font-display text-2xl text-white mb-3">Em Desenvolvimento</h3>
            <p className="font-serif text-zinc-400 max-w-md mx-auto leading-relaxed">
              O salão de debates está sendo preparado. Em breve você poderá discutir questões éticas e compartilhar experiências com outros Guardiões.
            </p>
          </div>
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
           <div className="flex items-center text-xs font-bold tracking-widest text-white uppercase md:opacity-0 group-hover:opacity-100 transform md:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Ler Escritura <ChevronRight className="w-4 h-4 ml-1" />
           </div>
        </div>
        <div className="flex flex-col items-center gap-3 z-20 shrink-0">
          <span className="text-[10px] text-zinc-600 font-mono md:opacity-50 group-hover:opacity-100 transition-opacity">#{book.id}</span>
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
        
        <div ref={contentRef} className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-16 lg:p-24 w-full">
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
                                className="appearance-none max-w-[140px] sm:max-w-xs bg-zinc-900 border border-zinc-700 text-zinc-300 text-[10px] sm:text-xs uppercase tracking-wider py-2 pl-3 pr-8 rounded cursor-pointer hover:border-flame-500 hover:text-white focus:outline-none focus:border-flame-500 transition-colors"
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

             <h1 className={`font-display text-2xl sm:text-3xl md:text-5xl text-white mb-8 md:mb-12 leading-tight transition-all ${isReadingMode ? 'text-center mt-12' : ''}`}>{activeChapter.title.replace(/^\d+\.\s/, '')}</h1>
             
             <div 
               className={`prose prose-invert prose-base sm:prose-lg md:prose-xl font-serif text-zinc-300 leading-loose prose-headings:font-display prose-headings:text-white prose-blockquote:border-flame-500 prose-blockquote:text-zinc-400 prose-a:text-flame-500 prose-strong:text-white prose-code:text-flame-500 prose-code:bg-zinc-900 prose-code:px-1 prose-code:rounded prose-code:font-normal prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800 transition-opacity duration-500 ${isReadingMode ? 'opacity-90' : ''}`}
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
             <DiscussionTopicsSection />
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