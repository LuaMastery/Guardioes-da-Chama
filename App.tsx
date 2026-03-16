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
          <p class="my-6 text-lg leading-relaxed">
            O mundo tenta nos dizer que a insensibilidade é força. "É só um jogo", eles dizem. "Não leve a sério", repetem. Mas para você, a internet não é um lugar etéreo e falso. É onde as mentes se encontram. E onde mentes se encontram, há realidade. As emoções geradas por pixels na tela são tão reais quanto as geradas por interações físicas.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Chama que Você Carrega</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Imagine que cada comunidade online é uma fogueira na noite escura da floresta. A maioria das pessoas vem apenas para se aquecer. Elas riem, bebem, contam histórias e aproveitam o calor. Mas existem os lobos que rondam nas sombras. Existe o vento frio do cinismo. E existe a chuva da toxicidade constante.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Enquanto os outros apenas olham para o fogo, você olha para a escuridão ao redor. Você percebe quando a lenha está acabando. Você nota quando alguém é empurrado para longe do calor. Essa percepção aguçada é o que te separa do usuário comum.
          </p>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "Sua sensibilidade não é fraqueza. É o sensor de fumaça da sua comunidade. É o alarme que detecta o incêndio antes que ele consuma a casa."
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            Aceite esse peso. Não tente anestesiar sua empatia para "se encaixar" na cultura tóxica. A internet já tem pessoas insensíveis o suficiente. O que falta são Guardiões dispostos a sentir o desconforto para proteger os outros.
          </p>
        `
      },
      { 
        id: 'c1-2', 
        title: '2. A Balança Emocional', 
        interactiveComponent: 'FlameBalance',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Um dos maiores erros do moderador iniciante é a falta de calibração. Movido pela paixão recém-descoberta de "limpar" a comunidade, ele muitas vezes se torna um tirano acidental, extinguindo qualquer centelha de diversão em nome de uma ordem estéril.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Você precisa entender que o conflito é parte inerente da natureza humana, especialmente em ambientes competitivos. Nem toda discussão acalorada é toxicidade. Nem todo palavrão solto no calor do momento é um discurso de ódio. O verdadeiro Guardião sabe diferenciar o fogo que aquece (a rivalidade saudável, a provocação amigável) do fogo que queima (o assédio, o preconceito, a perseguição).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Paradoxo da Tolerância</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O filósofo Karl Popper descreveu o "Paradoxo da Tolerância": se uma sociedade é tolerante sem limites, sua capacidade de ser tolerante será eventualmente destruída pelos intolerantes. Em termos de moderação, isso significa que você não pode tolerar a toxicidade em nome da "liberdade de expressão".
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            No entanto, a moderação excessiva cria um ambiente sufocante onde ninguém ousa falar por medo de punição. O chat morre. A comunidade se torna um cemitério silencioso.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-8">
            <li><strong>Falta de Intervenção:</strong> Os tóxicos dominam. Os bons jogadores vão embora silenciosamente. O servidor vira um esgoto.</li>
            <li><strong>Excesso de Intervenção:</strong> O medo domina. A espontaneidade morre. O servidor vira uma ditadura entediante.</li>
            <li><strong>O Ponto de Equilíbrio:</strong> Regras claras, aplicadas com contexto e empatia. Punições proporcionais.</li>
          </ul>
          <p class="text-lg leading-relaxed mb-6">
            Você deve encontrar o ponto exato onde a liberdade individual de um jogador não fere a segurança psicológica do coletivo. Use o simulador abaixo para entender visualmente como o excesso ou a falta de intervenção afetam a "chama" do ecossistema.
          </p>
        ` 
      },
      { 
        id: 'c1-3', 
        title: '3. A Solidão do Poder', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Assim que você aceita o distintivo, a tag de Admin, ou o cargo de Moderador no Discord, uma mudança invisível, mas palpável, acontece. A dinâmica das suas amizades online se altera.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Seus amigos de jogo, com quem você costumava rir e falar bobagens, agora hesitam antes de fazer uma piada mais pesada perto de você. O silêncio no canal de voz aumenta quando você entra. As pessoas começam a medir as palavras. Essa é a inevitável solidão do trono.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Armadilha do "Admin Amigão" e o Desafio da Imparcialidade</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O instinto natural de muitos novos moderadores é tentar compensar essa distância sendo excessivamente lenientes com seus amigos. Eles tentam ser o "Admin Amigão", fechando os olhos para infrações menores cometidas por pessoas próximas para provar que "o poder não subiu à cabeça".
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Isso é um erro fatal. O favoritismo destrói a credibilidade de um Guardião mais rápido do que qualquer outra coisa. Se a comunidade perceber que as regras se aplicam aos novatos, mas não aos seus amigos do clã, sua autoridade moral evapora instantaneamente. Manter-se imparcial quando um amigo de longa data quebra uma regra grave é um dos testes mais difíceis da moderação. Exige a frieza de separar a pessoa da ação, aplicando a punição necessária sem transformar isso em um ataque pessoal.
          </p>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "Aceite que o Guardião caminha ligeiramente separado do grupo. Não por arrogância, mas para ter uma visão clara e imparcial do horizonte."
            </p>
          </div>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Dividindo o Peso: O Sistema de Múltiplos Níveis</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A solidão do poder não significa que você deve carregar o servidor inteiro nas costas. Para evitar o esgotamento (burnout) e garantir decisões mais justas, é vital criar um sistema de moderação com múltiplos níveis de permissão. Uma hierarquia bem definida protege o servidor e distribui a pressão.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Ajudantes / Suporte (Tier 1):</strong> Focados em tirar dúvidas, orientar novatos e organizar canais. Eles não têm poder de banimento, mas podem silenciar usuários temporariamente (mute) para conter confusões imediatas. São os olhos e ouvidos da comunidade.</li>
            <li><strong>Moderadores (Tier 2):</strong> A linha de frente. Têm permissão para aplicar punições padrão (kick, banimentos temporários) baseadas nas regras escritas. Eles lidam com o fluxo diário de toxicidade e quebras de regras claras.</li>
            <li><strong>Administradores / Sêniores (Tier 3):</strong> Focados em casos complexos, apelações de banimento, configuração de bots (AutoMod) e gerenciamento da equipe de Tier 1 e 2. Eles detêm o poder de banimento permanente e gerenciam a infraestrutura do servidor.</li>
          </ul>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Delegação e Coesão da Equipe</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Delegar não é apenas dar permissões; é dar autonomia com responsabilidade. Confie na sua equipe de Tier 1 e 2 para resolver problemas cotidianos sem precisar da sua aprovação constante. Se um moderador tomou uma decisão questionável, nunca o desautorize publicamente no chat geral. Chame-o no privado, entenda o contexto, oriente-o e, se necessário, revertam a ação juntos.
          </p>
          <p class="text-lg leading-relaxed">
            Para manter a coesão, crie um canal privado exclusivo para a staff onde vocês possam desabafar, discutir casos difíceis e alinhar o entendimento das regras. Você perderá a inocência despreocupada de ser apenas mais um jogador no servidor. Mas, em troca, ganhará o propósito profundo de ser um líder. A solidão em relação à comunidade é real, mas dentro da sua equipe de moderação, vocês devem formar uma frente unida e inquebrável.
          </p>
        ` 
      },
      { 
        id: 'c1-4', 
        title: '4. Documentação: Seu Escudo', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Em um mundo digital feito de "ele disse, ela disse", a prova documental é o rei absoluto. A memória humana é falha, e a manipulação é a ferramenta favorita dos trolls. Nunca puna alguém baseado apenas em boatos. Nunca bana alguém sem um registro permanente do motivo.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Quando um jogador tóxico é banido, a primeira reação dele frequentemente é ir a fóruns públicos, grupos de Facebook ou ao dono do servidor para se fazer de vítima. Ele dirá que você abusou do poder, que ele "não fez nada demais", e que você tem uma vingança pessoal contra ele.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Livro das Sombras</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Para se defender dessas narrativas, você precisa de um "Livro das Sombras" — um canal privado no Discord, uma planilha, ou um sistema de tickets onde cada infração grave é meticulosamente catalogada.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Printscreens:</strong> Capture a tela inteira, mostrando o contexto da conversa, não apenas a ofensa isolada.</li>
            <li><strong>Logs de Chat:</strong> Exporte os logs do servidor (se disponíveis) mostrando a data e hora exatas.</li>
            <li><strong>Demos/Vídeos:</strong> Para jogos como CS2 ou Rust, grave clipes curtos provando o uso de cheats ou griefing.</li>
            <li><strong>SteamID/DiscordID:</strong> Sempre registre os IDs únicos, pois nomes podem ser facilmente alterados.</li>
          </ul>
          <p class="text-lg leading-relaxed">
            Isso não é burocracia inútil; é a armadura que protege sua integridade. Quando o jogador banido vier chorar injustiça, você simplesmente apresenta o dossiê. A discussão acaba ali. Um Guardião sem provas documentais é apenas um tirano com uma opinião.
          </p>
        ` 
      },
      { 
        id: 'c1-5', 
        title: '5. Quando Você Errar', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Aceite esta verdade inegável agora mesmo: você vai errar. Você vai banir um inocente por engano. Você vai perder a paciência em um dia ruim e ser rude com um novato. Você vai julgar mal uma situação complexa. Você é humano, e a fadiga da moderação cobra seu preço.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            A diferença fundamental entre um moderador ruim e um verdadeiro Guardião não é a ausência de erros, mas a forma como eles lidam com o erro depois que ele acontece.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Veneno do Ego</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O moderador ruim, quando confrontado com seu próprio erro, dobra a aposta. Ele usa o ego como escudo. Ele inventa justificativas retroativas ("Ah, mas ele merecia por outra coisa"), silencia quem aponta o erro, ou simplesmente se recusa a reverter a punição para "não parecer fraco". Isso destrói a confiança da comunidade de forma irreparável.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O Guardião, por outro lado, engole o orgulho. Ele pede desculpas publicamente. Ele reverte a punição injusta imediatamente. Ele explica o processo de pensamento que o levou ao erro e como pretende evitar que aconteça novamente.
          </p>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "O pedido de desculpas sincero de um líder não diminui sua autoridade; ele a solidifica."
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            A comunidade passa a confiar profundamente em você. Eles sabem que, se você punir alguém, é porque você genuinamente acredita que é o certo e justo, e não porque você é orgulhoso demais para voltar atrás. A vulnerabilidade é a forma mais alta de força.
          </p>
        ` 
      },
      { 
        id: 'c1-6', 
        title: '6. Métricas que Importam', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Como você sabe se está fazendo um bom trabalho? Muitos moderadores caem na armadilha de medir seu sucesso pela quantidade de punições aplicadas. Eles exibem seus "100 bans no mês" como se fossem medalhas de guerra.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Isso é uma ilusão perigosa. Um hospital lotado de pacientes doentes não significa que a cidade é saudável; significa que há uma epidemia. Da mesma forma, um servidor com centenas de banimentos diários não é um servidor bem moderado; é um ambiente tóxico que está falhando em educar ou filtrar sua base de jogadores.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Silêncio Pacífico</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O verdadeiro sucesso da moderação é invisível. Você deve medir seu sucesso por métricas muito mais sutis e difíceis de quantificar:
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Silêncio Pacífico:</strong> A ausência de drama no chat geral. As pessoas conversando sobre o jogo, não brigando sobre política ou insultos.</li>
            <li><strong>Retenção de Novatos:</strong> Quantos jogadores novos entram no servidor e decidem ficar para o dia seguinte? Um ambiente acolhedor retém jogadores; um ambiente tóxico os expulsa em 5 minutos.</li>
            <li><strong>A Cultura do "GG":</strong> A quantidade de "Good Game" (Bom Jogo) no final de uma partida, mesmo do time que perdeu. Isso indica respeito mútuo.</li>
          </ul>
          <p class="text-lg leading-relaxed">
            Se o número de banimentos que você aplica está caindo mês a mês, mas o servidor continua cheio e ativo, parabéns: você não está apenas punindo o crime, você está prevenindo-o. Você mudou a cultura do local. Você venceu.
          </p>
        ` 
      },
      { 
        id: 'c1-7', 
        title: '7. Burnout: Quando a Chama Queima Você', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            A moderação comunitária é um trabalho emocionalmente exaustivo. Ler mensagens de ódio, mediar conflitos infantis, lidar com ameaças e ver o pior lado da humanidade todos os dias, de graça, envenena a alma lentamente.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Se você não estiver vigilante, a fadiga por compaixão (Burnout) vai te atingir. E quando isso acontece, você corre o risco de se tornar exatamente aquilo que jurou combater: um indivíduo amargo, cínico, reativo e tóxico.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Reconhecendo os Sinais</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O Burnout não acontece da noite para o dia. Ele se infiltra através de pequenos sintomas:
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Irritabilidade Extrema:</strong> Você perde a paciência com perguntas simples de novatos que antes você responderia com prazer.</li>
            <li><strong>Cinismo:</strong> Você começa a assumir que todo jogador é um troll em potencial, perdendo a fé na comunidade.</li>
            <li><strong>Apatia:</strong> A sensação esmagadora de que "nada do que eu faço adianta, eles sempre voltam".</li>
            <li><strong>Punições Desproporcionais:</strong> Você começa a banir permanentemente por infrações mínimas, apenas para não ter que lidar com a pessoa.</li>
          </ul>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "O Guardião não pode proteger a vila se ele mesmo estiver morrendo de exaustão."
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            Quando você reconhecer esses sinais, a única cura é o afastamento. Retire o manto. Feche o Discord. Vá jogar um jogo single-player. Vá caminhar. A fogueira da comunidade não vai se apagar se você dormir uma noite inteira ou tirar um fim de semana de folga. Delegue suas funções e descanse. Sua saúde mental é mais importante que qualquer servidor.
          </p>
        ` 
      },
      { 
        id: 'c1-8', 
        title: '8. O Legado', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Um dia, inevitavelmente, sua jornada como Guardião chegará ao fim. O jogo que você modera pode perder popularidade e os servidores serem desligados. Ou, mais provavelmente, a sua própria vida vai mudar: novas responsabilidades, novos interesses, menos tempo livre. Você vai pendurar o manto.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Quando esse dia chegar, e você olhar para trás, o que realmente terá importado? O que resta de todas aquelas horas não remuneradas gastas lendo logs e resolvendo disputas?
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Que Realmente Fica</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Não são os plugins perfeitamente configurados. Não são as regras meticulosamente escritas no canal de #regras. Não é o número de membros no servidor. Tudo isso é efêmero e digital.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O seu legado são as pessoas. É o garoto de 14 anos que sofria bullying na escola e encontrou no seu servidor o único lugar onde se sentia seguro e respeitado. É a garota que, observando a sua forma justa e firme de liderar, encontrou a confiança para se tornar líder na própria vida. É o jogador tóxico que, após ser banido e depois perdoado por você, aprendeu uma lição sobre segundas chances e mudou seu comportamento.
          </p>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "Esse é o verdadeiro legado da chama. Ela não se apaga quando você sai; ela continua queimando nas tochas daqueles que você protegeu e inspirou."
            </p>
          </div>
          <p class="text-lg leading-relaxed">
            Você não está apenas gerenciando um servidor de jogo. Você está modelando comportamento cívico em um espaço digital. Você está ensinando, pelo exemplo, como seres humanos devem tratar uns aos outros. E isso ecoa pela eternidade.
          </p>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            A confiança é a moeda mais valiosa e volátil que um Guardião possui. Ela leva meses para ser acumulada e pode ser gasta em um único segundo de má decisão. E a verdade fundamental sobre a confiança é que ela não se constrói quando tudo vai bem; ela é forjada na fornalha da crise.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Quando o servidor cai no meio de um torneio, quando um administrador abusa do poder e a comunidade descobre, quando há um vazamento de dados... seu primeiro instinto, puramente humano, será o de se esconder. Ou pior, o instinto de mentir para "proteger a imagem" do servidor ou a sua própria.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Transparência Radical</h3>
          <p class="mb-6 text-lg leading-relaxed">
            <strong>Não ceda a esse instinto.</strong> A comunidade online é incrivelmente astuta. Eles descobrem a verdade. E enquanto eles perdoam a incompetência (pois sabem que todos erram), eles <em>nunca</em> perdoam a desonestidade.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se você cometeu um erro grave, a melhor estratégia de Relações Públicas é a verdade nua e crua. Admita o erro rapidamente, antes que os rumores se espalhem. Explique exatamente o que aconteceu, sem jargões técnicos para confundir. E, mais importante, mostre o plano de ação para resolver o problema e garantir que não se repita.
          </p>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "A transparência radical tem um efeito mágico: ela desarma a raiva. Ela transforma uma multidão com tochas e forcados em um exército de aliados compreensivos dispostos a ajudar."
            </p>
          </div>
        `
      },
      {
        id: 'c1-10',
        title: '10. O Observador Invisível',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Há um paradoxo cruel e belo na arte da moderação: quanto melhor você faz o seu trabalho, menos ele é notado. A moderação perfeita é invisível para o usuário comum.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Se você remove o lixo (o spam, o ódio, o assédio) antes que alguém o veja, ninguém saberá que você limpou o ambiente. Os jogadores entrarão no servidor, terão uma experiência incrível, farão amigos e pensarão: "Nossa, que comunidade naturalmente maravilhosa!". Eles não verão as horas que você passou filtrando a toxicidade para que essa ilusão de naturalidade existisse.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Recompensa Interna</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Você precisa fazer as pazes com essa invisibilidade. Se você assumiu o manto de Guardião buscando glória, fama, aplausos ou o reconhecimento constante dos jogadores, você se frustrará rapidamente e se tornará ressentido.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O Guardião trabalha nas sombras para que os outros possam brincar na luz. Sua recompensa não vem de elogios públicos, mas de uma satisfação interna, silenciosa e profunda. É a satisfação de olhar para um chat vibrante e saudável e saber, no fundo do seu coração: "Esse espaço existe porque eu o sustento".
          </p>
        `
      },
      {
        id: 'c1-11',
        title: '11. Morte do Ego',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            O maior inimigo de um Guardião não é o troll mais persistente, nem o hacker mais habilidoso. O seu maior inimigo mora dentro de você: é o seu próprio ego.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            O poder, mesmo o pequeno poder de banir alguém de um servidor de Discord, é inebriante. É muito fácil cruzar a linha sutil entre "proteger a comunidade" e "exigir submissão". O momento exato em que você pune um jogador porque "ele me desafiou" ou "ele feriu meu orgulho", e não porque "ele quebrou uma regra clara", é o momento em que você deixa de ser um Guardião e se torna um pequeno ditador.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arte da Dissociação</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Para sobreviver a longo prazo, você deve praticar a arte da dissociação emocional. Quando um jogador tóxico xinga o seu nick, insulta a sua inteligência ou ameaça a sua família, você precisa entender uma verdade libertadora: eles não estão xingando <em>você</em>, a pessoa real por trás do teclado. Eles nem te conhecem.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Eles estão xingando o uniforme. Estão atacando a autoridade que você representa, a parede que os impede de fazer o que querem.
          </p>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "Não leve para o lado pessoal. Deixe os insultos passarem por você como vento através de uma rede. Responda com a frieza da regra, não com o calor do ego."
            </p>
          </div>
        `
      },
      {
        id: 'c1-12',
        title: '12. A Cadeira Vazia',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Um dos exercícios mentais mais poderosos para um moderador é olhar para a sua comunidade ativa e fazer a seguinte pergunta: "Quem <em>não</em> está aqui?".
          </p>
          <p class="my-6 text-lg leading-relaxed">
            É fácil olhar para um chat geral bombando, com centenas de mensagens por minuto, e pensar que o servidor é um sucesso. Mas comunidades tóxicas também são altamente ativas. A diferença é que a toxicidade age como um filtro implacável. Ela expulsa os sensíveis, as mulheres, as minorias, os jogadores casuais, os novatos tímidos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Protegendo o Invisível</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Se o seu chat é "super ativo", mas todos os membros pensam exatamente igual, usam as mesmas gírias agressivas e atacam qualquer opinião divergente, você não tem uma comunidade; você tem uma câmara de eco. Você falhou como Guardião.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O verdadeiro Guardião não protege apenas os membros vocais que já estão lá. Ele protege a "cadeira vazia" — o assento daquele jogador que ainda não chegou, mas que um dia vai entrar no servidor. Você mantém o ambiente limpo e seguro para que a diversidade possa não apenas sobreviver, mas florescer quando chegar.
          </p>
        `
      },
      {
        id: 'c1-13',
        title: '13. Jardinagem Comunitária',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Mude a sua metáfora mental. Pare de pensar em si mesmo como um policial patrulhando as ruas em busca de criminosos. Comece a pensar em si mesmo como um jardineiro cuidando de um ecossistema delicado.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            A polícia é reativa; ela aparece quando o crime já aconteceu. O jardineiro é proativo; ele nutre o solo diariamente para que as plantas cresçam fortes e sufoquem as ervas daninhas naturalmente.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Regando as Flores</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Muitos moderadores focam 100% da sua energia em punir o mau comportamento (arrancar ervas daninhas). Isso é necessário, mas insuficiente. Regar as flores — isto é, reconhecer, elogiar e recompensar publicamente os bons comportamentos — é infinitamente mais poderoso para moldar a cultura.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li>Destaque jogadores que ajudam novatos.</li>
            <li>Crie cargos ou tags especiais para membros positivos.</li>
            <li>Agradeça publicamente quando alguém reporta um problema de forma educada.</li>
          </ul>
          <p class="text-lg leading-relaxed">
            Se você só arranca as ervas daninhas e nunca rega as flores, você acabará com um deserto: um lugar limpo, sem toxicidade, mas completamente sem vida e sem alegria.
          </p>
        `
      },
      {
        id: 'c1-14',
        title: '14. Rituais do Guardião',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            A motivação é passageira; a disciplina é permanente. Em comunidades online, a consistência vence a intensidade todas as vezes. Um moderador que faz um "expurgo" furioso uma vez por mês é muito menos eficaz do que um Guardião que faz pequenas manutenções diárias.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Para manter a consistência sem enlouquecer, você precisa criar rituais. Hábitos inquebráveis que estruturam o seu trabalho de moderação e o integram à sua rotina sem que ele domine a sua vida.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Força da Rotina</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Ritual da Manhã:</strong> Checar os logs de banimento e os reports pendentes enquanto toma o café da manhã.</li>
            <li><strong>O Ritual da Presença:</strong> Entrar no chat geral todos os dias no mesmo horário apenas para dar um "Bom dia" ou "Boa noite", marcando presença.</li>
            <li><strong>O Ritual da Justiça:</strong> Reservar a sexta-feira à noite exclusivamente para ler apelações de banimento com calma.</li>
          </ul>
          <p class="text-lg leading-relaxed">
            A ordem em uma comunidade não se mantém através do medo de punições severas, mas através da rotina previsível. A sua presença constante, estruturada e calma, mesmo que silenciosa na maior parte do tempo, cria uma sensação subconsciente de segurança e estabilidade nos jogadores. Eles sabem que o Guardião está na muralha.
          </p>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Ninguém nasce troll. A toxicidade que você vê no chat global, os insultos gratuitos no canal de voz, o griefing intencional na base de um novato... tudo isso é, quase sempre, o grito distorcido de uma ferida não curada.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O agressor online está, na grande maioria das vezes, transferindo sua dor interna, sua frustração com a vida real ou sua sensação de impotência para o ambiente digital, onde as consequências parecem menores.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Lente da Compaixão Tática</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Entender a origem da dor muda completamente a forma como você modera. Você para de reagir com raiva (que é o que o troll quer) e começa a reagir com uma piedade distante e clínica. Isso é crucial para a sua própria sobrevivência emocional como Guardião.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
             <li><strong>A Busca por Atenção:</strong> O tóxico frequentemente age assim porque se sente invisível no mundo real. Ser odiado online é, para ele, melhor do que ser ignorado. Qualquer resposta sua alimenta essa fome.</li>
             <li><strong>A Ilusão de Controle:</strong> Quando a vida real de alguém é caótica (problemas familiares, fracasso escolar/profissional), destruir a experiência de outra pessoa em um jogo dá a ele uma falsa sensação de poder e controle sobre o ambiente.</li>
             <li><strong>O Espelho Quebrado:</strong> O tóxico tenta rebaixar os outros porque, no fundo, se sente pequeno. Ele não consegue elevar a si mesmo, então tenta puxar todos para o seu nível de miséria.</li>
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
              text: "Usuário 'DarkWolf' diz no chat global: 'Esse servidor é um lixo completo, os admins são uns inúteis ditadores que só banem quem não pagou VIP!'",
              options: [
                { label: "Banir imediatamente por desrespeito à staff", outcome: "Fracasso. Você confirmou a narrativa dele de que admins são tiranos que não aceitam críticas. Ele voltará com uma conta alternativa (smurf), ainda mais odioso, e outros jogadores podem achar que você foi excessivamente autoritário.", success: false },
                { label: "Responder no chat: 'Se não gosta do servidor, a porta da rua é serventia da casa. Sai fora.'", outcome: "Fracasso. Você desceu ao nível dele. A comunidade agora está assistindo a dois indivíduos imaturos brigando no chat. Você perdeu a postura de Guardião.", success: false },
                { label: "Responder: 'Wolf, entendo que você esteja frustrado com alguma coisa. O que aconteceu especificamente para você dizer isso?'", outcome: "Sucesso. Você usou a Validação Desarmante. Você validou a emoção (frustração) sem validar o insulto. Ele agora é forçado a explicar a lógica do seu problema (o que é difícil quando se está apenas com raiva) ou parecerá irracional para o resto da comunidade.", success: true }
              ]
            },
            {
              text: "DarkWolf responde: 'Fui kickado ontem à noite por matar o admin no jogo! Abuso de poder ridículo!'",
              options: [
                { label: "Checar os logs do servidor silenciosamente antes de dar qualquer resposta", outcome: "Sucesso. Guardiões agem baseados em dados, não em palavras ou emoções. Você precisa verificar se a alegação dele tem algum fundo de verdade antes de se posicionar.", success: true },
                { label: "Dizer: 'Mentiroso, nossos admins são treinados e nunca fariam isso.'", outcome: "Risco Crítico. E se ele estiver certo? E se um admin realmente abusou do poder? Nunca defenda sua equipe cegamente sem provas. Se você estiver errado, sua credibilidade será destruída para sempre.", success: false }
              ]
            }
          ]
        },
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A maioria dos moderadores iniciantes falha miseravelmente porque tenta "vencer" a discussão contra um jogador tóxico. Mas entenda: contra um troll, tentar vencer é a garantia de perder.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O objetivo do troll não é provar um ponto lógico; o objetivo dele é arrastar você para a lama, fazer você perder a paciência e reagir de forma emocional. Se você se irrita, ele venceu o "jogo" dele.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Validação Desarmante</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A técnica correta e profissional é a <strong>Validação Desarmante</strong>. Você ignora completamente o insulto ou a provocação, valida a emoção subjacente (raiva, frustração) e força o usuário a racionalizar seu comportamento ou explicar o problema real.
          </p>
          <p class="text-lg leading-relaxed">
            Use o simulador acima para treinar essa habilidade vital. A desescalada é a arte de apagar um incêndio retirando o oxigênio dele, em vez de jogar água (que muitas vezes só espalha as chamas).
          </p>
        ` 
      },
      { 
        id: 'c2-3', 
        title: '3. Psicologia de Massa', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Uma pessoa sozinha pode ser inteligente, racional e ponderada. Uma multidão, no entanto, é frequentemente uma besta irracional, movida por emoções primitivas e contágio social.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Quando o "efeito manada" começa em um servidor (um motim no chat, um ataque coordenado a um jogador, uma rebelião contra uma nova regra), a moralidade individual é temporariamente suspensa. Pessoas normais fazem coisas horríveis porque "todo mundo está fazendo".
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Cortando a Cabeça da Serpente</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Tentar argumentar com uma multidão enfurecida é inútil. Tentar banir todos os 50 participantes destruirá sua comunidade. Seu papel como Guardião é identificar a estrutura do motim.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Os Instigadores:</strong> Em qualquer motim digital, há geralmente apenas 1 ou 2 instigadores reais. Eles são os arquitetos do caos, jogando gasolina na fogueira.</li>
            <li><strong>Os Seguidores:</strong> Os outros 48 são apenas seguidores, pessoas que foram sugadas pela energia do momento ou que têm medo de ficar de fora da "piada".</li>
            <li><strong>A Solução Cirúrgica:</strong> Remova cirurgicamente os instigadores (um mute temporário longo ou um banimento rápido, sem aviso prévio). Sem a liderança vocal, a multidão rapidamente perde a energia, fica confusa e se dispersa. O silêncio repentino dos líderes quebra o transe coletivo.</li>
          </ul>
        ` 
      },
      { 
        id: 'c2-4', 
        title: '4. O Vampiro de Atenção', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Este é um dos arquétipos mais perigosos e comuns na internet. O Vampiro de Atenção não se importa se a atenção que recebe é positiva (elogios) ou negativa (ódio, xingamentos, punições). Ele é um buraco negro emocional; ele só quer ser visto a qualquer custo.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se você discute com ele, ele ganha. Se a comunidade o xinga, ele ganha. Se você o bane com um texto longo e dramático explicando o porquê, ele ganha (e provavelmente vai postar o print do seu texto no Twitter ou Reddit como um troféu).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arma do Vácuo</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A única arma eficaz contra o Vampiro de Atenção é o vácuo absoluto. A indiferença é o alho para esse vampiro.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Shadowban:</strong> Em plataformas que suportam (como Discord), o "Shadowban" (onde ele acha que está falando, mas ninguém mais vê suas mensagens) é a punição perfeita. Ele grita no vazio até se cansar e ir embora sozinho.</li>
            <li><strong>A Punição Silenciosa:</strong> Se o shadowban não for possível, o banimento deve ser rápido, clínico e silencioso. Sem anúncios no chat geral, sem mensagens privadas de aviso. Apenas o corte repentino do acesso.</li>
            <li><strong>Instrua a Comunidade:</strong> Ensine seus jogadores regulares a usar o comando de "Block" ou "Mute" local. Quando a comunidade ignora o Vampiro coletivamente, ele morre de inanição.</li>
          </ul>
        ` 
      },
      { 
        id: 'c2-5', 
        title: '5. O Advogado de Regras', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O "Rules Lawyer" (Advogado de Regras) é aquele usuário incrivelmente tóxico que domina a arte de andar na linha tênue do limite exato das regras escritas.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Ele não usa palavrões (então o filtro automático não o pega), mas usa sarcasmo passivo-agressivo constante. Ele não faz spam rápido, mas inunda o chat com "conteúdo" inútil a cada 30 segundos. Ele sabe exatamente como irritar os outros sem quebrar tecnicamente nenhuma regra específica.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Espírito vs. A Letra da Lei</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O erro do moderador inexperiente é tentar debater lógica ou reescrever as regras para enquadrar o Advogado. Você vai perder esse jogo, porque ele tem mais tempo livre que você.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Regra de Ouro (Catch-all):</strong> Todo servidor deve ter uma regra fundamental, algo como: "A administração reserva-se o direito de remover qualquer jogador cuja presença seja consistentemente prejudicial à diversão e ao bem-estar da comunidade, independentemente de regras específicas."</li>
            <li><strong>O Julgamento pelo Propósito:</strong> Ele usa a <em>letra</em> da lei para violar o <em>espírito</em> da lei. Apele para o "Propósito da Comunidade". Se a presença dele drena a energia do servidor, causa brigas constantes e afasta bons jogadores, ele deve ser removido.</li>
            <li><strong>A Punição:</strong> "Você não quebrou a regra X, mas seu comportamento geral é incompatível com a cultura que estamos construindo aqui. Adeus."</li>
          </ul>
        ` 
      },
      { 
        id: 'c2-6', 
        title: '6. Síndrome do Impostor', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Muitos Guardiões, especialmente os mais empáticos e dedicados, sofrem de Síndrome do Impostor. É aquela voz sussurrando na sua cabeça: "Quem sou eu para julgar os outros? Eu também cometo erros. Será que eu fui injusto? Será que eu mereço esse cargo?".
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A ironia é que os piores moderadores (os tiranos com complexo de deus) nunca sentem isso. Eles têm certeza absoluta de sua própria retidão.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Dúvida como Bússola Moral</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Esse sentimento de inadequação não é uma fraqueza; é a prova de que você se importa. É a sua bússola moral funcionando.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Abrace a Dúvida:</strong> Tenha muito medo do moderador que <em>sabe</em> que está sempre certo. A dúvida saudável obriga você a revisar as provas, consultar outros membros da staff e buscar ser justo, não apenas rápido.</li>
            <li><strong>Ação Apesar do Medo:</strong> A dúvida é sua aliada, desde que não a deixe paralisá-lo. Haverá momentos em que a decisão não é clara (uma área cinzenta). Você terá que tomar uma decisão imperfeita com informações incompletas.</li>
            <li><strong>O Melhor Esforço:</strong> Lembre-se: você não está lá para ser um juiz perfeito e infalível. Você está lá para oferecer o seu melhor esforço possível para proteger a comunidade. Se você agir com boa fé, os erros serão perdoados.</li>
          </ul>
        ` 
      },
      { 
        id: 'c2-7', 
        title: '7. Redenção é Possível?', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A internet tem uma memória implacável e uma tendência a cancelar pessoas para sempre. Como Guardião, você deve se perguntar: o banimento permanente é sempre a única solução? A redenção é possível?
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A resposta curta é sim. Pessoas mudam, especialmente em comunidades de jogos onde grande parte da base de usuários é composta por adolescentes. O cérebro de um jovem de 14 anos ainda está em desenvolvimento; o troll insuportável de hoje pode se tornar o membro mais prestativo da comunidade aos 18.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Caminho de Volta</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Um sistema de justiça comunitária saudável deve ter espaço para o perdão, mas um perdão estruturado e condicional.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Sistema de Apelação:</strong> Permita que jogadores banidos enviem apelações (através de um formulário ou ticket). A regra de ouro da apelação é: se o jogador continuar culpando os outros ou a staff, o banimento se mantém. Se ele assumir a responsabilidade ("Eu errei, fui imaturo, peço desculpas"), considere a redução da pena.</li>
            <li><strong>O Período de Quarentena:</strong> Se você desbanir alguém, coloque-o em "liberdade condicional". Qualquer infração menor nos próximos 30 dias resulta em banimento permanente sem direito a nova apelação.</li>
            <li><strong>A Vitória Final:</strong> A história de um "inimigo" que foi tratado com justiça, percebeu seu erro e voltou para se tornar um aliado leal é a vitória final de um Guardião. É a prova de que seu sistema não apenas pune, mas reabilita.</li>
          </ul>
        ` 
      },
      {
        id: 'c2-8',
        title: '8. O Efeito Espectador Digital',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O "Efeito Espectador" é um fenômeno psicológico bem documentado: quanto mais pessoas testemunham uma emergência (ou uma infração), menor a probabilidade de qualquer uma delas intervir.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Na internet, isso é amplificado. Se alguém está sendo assediado no chat geral com 500 pessoas online, 499 pessoas vão pensar: "Alguém já deve ter reportado isso para a staff" ou "Não é problema meu, não vou me envolver".
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Quebrando a Inércia</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Você não pode estar em todos os lugares ao mesmo tempo. Você precisa que a comunidade seja seus olhos e ouvidos, mas para isso, você precisa quebrar a inércia do espectador.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Educação Constante:</strong> Lembre a comunidade regularmente (em anúncios ou mensagens automáticas) de que a staff depende dos reports deles. "Se você viu algo errado, reporte. Não assuma que outra pessoa já fez isso."</li>
            <li><strong>Fricção Zero:</strong> O processo de denúncia deve ser absurdamente fácil e, acima de tudo, <em>anônimo</em>. Se um jogador tiver que expor seu nome para denunciar um clã tóxico, ele não o fará por medo de retaliação. Use sistemas de tickets privados.</li>
            <li><strong>O Mal Triunfa no Silêncio:</strong> Uma comunidade onde os bons jogadores observam o assédio em silêncio já está morta, mesmo que os servidores ainda estejam online. Capacite os bons a falarem.</li>
          </ul>
        `
      },
      {
        id: 'c2-9',
        title: '9. Relações Parassociais',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Uma relação parassocial é um vínculo psicológico unilateral. Ocorre frequentemente com YouTubers e Streamers, mas também acontece fortemente com Donos de Servidores e Admins.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Jogadores que passam 8 horas por dia no seu servidor começam a sentir que conhecem você intimamente. Eles leem seus anúncios, veem você interagir no chat e criam uma imagem mental de que vocês são "amigos", mesmo que você nunca tenha falado diretamente com eles.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Ilusão da Intimidade</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Essa ilusão é perigosa quando a moderação se faz necessária.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Sensação de Traição:</strong> Quando você precisa punir um jogador que desenvolveu essa relação parassocial com você, a reação dele não será de raiva comum, mas de <em>traição pessoal profunda</em>. Ele sentirá que um "amigo" o apunhalou pelas costas.</li>
            <li><strong>A Reação Desproporcional:</strong> É por isso que alguns jogadores banidos dedicam meses de suas vidas a tentar destruir a reputação de um servidor. O ódio deles é o amor parassocial que azedou.</li>
            <li><strong>A Distância Profissional:</strong> Entenda a origem desse ódio para não levar para o lado pessoal. Mantenha uma distância profissional saudável. Seja amigável, seja acessível, mas deixe claro através de suas ações imparciais que você é o Guardião do servidor, não o melhor amigo de cada um dos 5.000 membros.</li>
          </ul>
        `
      },
      {
        id: 'c2-10',
        title: '10. Gamificação do Ódio',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Para certos subgrupos da internet (fóruns anônimos, grupos de griefers), ser banido de um servidor não é uma punição; é um esporte. É um jogo dentro do jogo.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Eles competem entre si para ver quem consegue o banimento mais rápido (Speedrun de Ban), quem consegue a reação mais irritada do Admin, ou quem consegue fazer o servidor cair.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Negando o Troféu</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Se você reage com raiva, se você xinga de volta, se você faz um discurso moralista antes de banir, você acabou de dar a eles exatamente o que eles queriam: o "conteúdo" (o print da sua raiva) para postar no grupo deles. Você deu a eles o troféu.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Burocracia do Tédio:</strong> A única forma de vencer a gamificação do ódio é tornar o processo extremamente entediante.</li>
            <li><strong>Bans Robóticos:</strong> Bane-os com mensagens padrão, sem emoção, sem palco. "Banido por violação da regra 3." Fim. Nenhuma exclamação, nenhum sermão.</li>
            <li><strong>A Frustração do Vazio:</strong> Quando eles percebem que não conseguem arrancar nenhuma reação emocional de você, o "jogo" perde a graça. Eles vão procurar outro servidor onde os Admins sejam mais fáceis de manipular emocionalmente.</li>
          </ul>
        `
      },
      {
        id: 'c2-11',
        title: '11. A Espiral do Silêncio',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A "Espiral do Silêncio" é uma teoria da ciência política que se aplica perfeitamente a comunidades online. Ela postula que as pessoas têm medo do isolamento social e, portanto, tendem a permanecer em silêncio se sentem que suas opiniões estão em minoria.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O perigo ocorre quando uma <em>minoria barulhenta</em> e tóxica domina o chat. A <em>maioria moderada</em> e sensata lê aquilo, acha que a toxicidade é a nova norma aceita, e se cala por medo de ser atacada.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Guardião como Quebrador de Espirais</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Isso cria uma ilusão de ótica: o servidor parece muito mais tóxico do que realmente é, porque os bons jogadores pararam de falar.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Intervenção Visível:</strong> O Guardião deve ser a voz que quebra o silêncio. Quando você intervém publicamente para parar um comportamento tóxico, você não está apenas punindo o infrator; você está enviando um sinal de fumaça para a maioria silenciosa.</li>
            <li><strong>Sinalizando Segurança:</strong> Sua ação diz: "A toxicidade não é a norma aqui. É seguro ser sensato. É seguro falar".</li>
            <li><strong>O Retorno da Maioria:</strong> Assim que a minoria barulhenta é silenciada pela moderação, você verá a maioria moderada voltar a interagir no chat. Você resgatou a cultura do servidor.</li>
          </ul>
        `
      },
      {
        id: 'c2-12',
        title: '12. Luto e Banimento',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Para um jogador casual, ser banido é um pequeno inconveniente. Ele simplesmente abre outro jogo. Mas para um jogador hardcore, que investiu 2.000 horas no seu servidor, construiu bases, formou clãs e fez amigos diários, um banimento permanente é uma verdadeira <em>morte digital</em>.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Ele perderá repentinamente seu status social, sua rotina diária e o contato com sua tribo. A dor psicológica é real.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Os Estágios do Luto Digital</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Ao lidar com o banimento de veteranos, espere que eles passem pelos clássicos estágios do luto, e prepare-se para lidar com cada um deles sem ceder:
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Negação:</strong> "Eu não fiz nada! Foi meu irmão caçula que usou o PC! O anti-cheat está bugado!" (Mantenha-se firme nas provas).</li>
            <li><strong>Raiva:</strong> "Admin lixo, servidor corrupto, vou derrubar essa porcaria!" (Ignore as ameaças, não responda à raiva com raiva).</li>
            <li><strong>Barganha:</strong> "Por favor, eu pago 100 dólares de VIP se você me desbanir. Eu apago todos os meus itens." (Nunca aceite suborno, isso destrói a integridade do servidor).</li>
            <li><strong>Depressão e Aceitação:</strong> Eventualmente, eles desistem e seguem em frente. Trate todo o processo com a seriedade fria de quem encerra um ciclo de vida digital. Não zombe da dor deles, mesmo que eles mereçam o banimento.</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A fundação de qualquer comunidade online é o hardware onde ela reside. A escolha entre Bare Metal (servidor dedicado físico) e Cloud (VPS, instâncias virtuais) ditará a estabilidade do seu projeto nos momentos mais críticos.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A nuvem é flexível, escalável e fácil de configurar. Mas o metal é fiel. Para jogos competitivos e simulações em tempo real (como CS2, Rust, ou servidores massivos de Minecraft), a consistência do clock da CPU é tudo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Problema do Vizinho Barulhento</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Servidores virtuais compartilhados (VPS baratos) sofrem de um mal crônico: o "vizinho barulhento" (Noisy Neighbor). Você aluga uma "fatia" de um servidor físico. Se outro cliente na mesma máquina decidir compilar um kernel ou rodar um banco de dados pesado, a CPU física sofrerá gargalos.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Micro-stuttering:</strong> No seu jogo, isso se traduz em "micro-stuttering" (engasgos de milissegundos). O ping dos jogadores continuará baixo (ex: 20ms), mas o jogo parecerá travado. O servidor não consegue processar os "ticks" a tempo.</li>
            <li><strong>A Solução Dedicada:</strong> Para comunidades sérias, onde a integridade competitiva importa, alugue Bare Metal. Você tem a máquina inteira para si. Se houver lag, a culpa é exclusivamente do seu código ou da sua configuração, não de um vizinho invisível.</li>
            <li><strong>O Meio-Termo (VDS):</strong> Se o orçamento for apertado, procure por VDS (Virtual Dedicated Server) com "Dedicated CPU Threads". Isso garante que os núcleos virtuais alugados não sejam compartilhados com mais ninguém.</li>
          </ul>
        `
      },
      { 
        id: 'c3-2', 
        title: '2. Defesa em Profundidade', 
        interactiveComponent: 'ServerLayers',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Segurança não é um muro de pedra; é um labirinto com várias portas trancadas. O conceito militar de "Defesa em Profundidade" (Defense in Depth) assume que, eventualmente, uma camada de segurança irá falhar.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se um invasor passar pelo seu firewall, ele deve encontrar um sistema de autenticação forte. Se ele passar pela autenticação, deve encontrar permissões restritas (Least Privilege).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Fechando as Portas do Castelo</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Muitos administradores iniciantes alugam um servidor Linux e deixam a porta SSH (22) aberta para o mundo inteiro, protegida apenas pela senha "admin123". Isso é suicídio digital. Bots escaneiam a internet 24/7 procurando essas portas abertas.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Chaves RSA/Ed25519:</strong> Desative completamente o login por senha no SSH (<code>PasswordAuthentication no</code>). Exija autenticação por chave criptográfica. Se o invasor não tiver o arquivo da sua chave privada, ele não entra, mesmo que saiba a senha.</li>
            <li><strong>Fail2Ban:</strong> Instale o Fail2Ban. Ele monitora os logs do sistema. Se um IP errar a senha/chave 5 vezes seguidas, o Fail2Ban bloqueia esse IP no firewall (iptables/ufw) automaticamente.</li>
            <li><strong>Mude a Porta Padrão:</strong> Mudar a porta SSH de 22 para algo como 49152 não impede um ataque direcionado, mas elimina 99% do "ruído de fundo" de bots automatizados que só escaneiam a porta 22.</li>
          </ul>
          <p class="text-lg leading-relaxed mt-6">Explore o diagrama interativo acima para entender como as diferentes camadas (Rede, SO, Aplicação) interagem para mitigar ataques específicos.</p>
        ` 
      },
      { 
        id: 'c3-3', 
        title: '3. A Tríade da Performance', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Um servidor lento mata uma comunidade mais rápido do que um administrador tóxico. Jogadores toleram bugs, toleram regras rígidas, mas não toleram "rubberbanding" (voltar no tempo) ou tiros que não registram.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Para otimizar um servidor, você precisa entender a Tríade da Performance: CPU, RAM e I/O (Disco). Otimizar a peça errada é jogar dinheiro fora.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Diagnosticando o Gargalo</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
             <li><strong>CPU (Single-Thread vs Multi-Thread):</strong> A grande maioria dos motores de jogos (Minecraft, Source Engine) processa a lógica principal do mundo em uma única thread (um único núcleo). Ter um processador Xeon de 32 núcleos a 2.0GHz será horrível. Você precisa de processadores com alto clock single-core (ex: i9 ou Ryzen 9 a 4.5GHz+).</li>
             <li><strong>RAM (Capacidade vs Velocidade):</strong> A quantidade de RAM (16GB, 32GB) dita o tamanho do mundo e o número de mods/plugins que você pode carregar. Mas a <em>velocidade</em> da RAM (DDR4 3200MHz vs DDR5 6000MHz) afeta a rapidez com que a CPU acessa esses dados, impactando diretamente o Tickrate.</li>
             <li><strong>I/O (Disco):</strong> Essencial para o salvamento do mundo (world saves) e leitura de banco de dados. Um salvamento de mundo em um HDD mecânico pode travar o servidor por 5 segundos. O uso de SSDs NVMe é absolutamente obrigatório para servidores modernos.</li>
          </ul>
        ` 
      },
      { 
        id: 'c3-4', 
        title: '4. Backups: A Única Certeza', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Existem apenas dois tipos de administradores de servidores no mundo: os que já perderam todos os dados da comunidade e os que ainda vão perder. A única diferença entre uma tragédia e um contratempo é a sua política de backups.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Muitos confiam no RAID (espelhamento de discos) como backup. <strong>RAID NÃO É BACKUP.</strong> RAID é redundância de hardware para manter o servidor online se um disco queimar. Se você deletar acidentalmente o banco de dados, o RAID copiará a deleção perfeitamente para o segundo disco em milissegundos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Regra de Ouro: 3-2-1</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Para garantir que o legado da sua comunidade sobreviva a incêndios em data centers, invasões hackers ou erros humanos catastróficos, implemente a regra 3-2-1:
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>3 Cópias:</strong> Mantenha pelo menos três cópias dos seus dados (os dados originais de produção + dois backups).</li>
            <li><strong>2 Mídias Diferentes:</strong> Armazene as cópias em dois tipos diferentes de mídia de armazenamento (ex: o SSD do servidor e um HD externo/Storage Box).</li>
            <li><strong>1 Cópia Offsite:</strong> Mantenha pelo menos uma cópia fisicamente separada do servidor principal (Offsite). Se o seu servidor está na OVH no Canadá, seu backup offsite deve estar na AWS nos EUA, ou no Google Drive, ou até mesmo baixado no seu PC local via script FTP na madrugada.</li>
          </ul>
        ` 
      },
      { 
        id: 'c3-5', 
        title: '5. Docker e Containers', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            No passado, instalávamos o banco de dados (MySQL), o servidor web (Apache) e o servidor de jogo (Minecraft/CS) todos diretamente no mesmo sistema operacional (Bare Metal). Isso é um pesadelo de segurança e manutenção.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se um plugin malicioso no servidor de jogo conseguir explorar uma vulnerabilidade, o hacker ganha acesso ao usuário do sistema operacional e, consequentemente, pode ler as senhas do banco de dados ou desfigurar o site.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Isolamento em Celas (Containerização)</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O padrão moderno da indústria é o uso de Containers (como Docker). O Docker encapsula cada aplicação em sua própria "cela" isolada, com suas próprias dependências, sem que uma interfira na outra.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Isolamento de Processos:</strong> Se o servidor de jogo dentro do container for comprometido, o hacker fica preso dentro daquele container. Ele não consegue ver o banco de dados que está rodando em outro container isolado.</li>
            <li><strong>Facilidade de Migração:</strong> Com Docker, a configuração do seu servidor vira código (Dockerfile/docker-compose.yml). Se a máquina física queimar, você aluga outra, roda um comando, e toda a infraestrutura (banco, web, jogo) sobe exatamente como era, em minutos.</li>
            <li><strong>Painéis Modernos:</strong> Ferramentas como Pterodactyl Panel usam Docker por baixo dos panos para gerenciar múltiplos servidores de jogos na mesma máquina com segurança total.</li>
          </ul>
        ` 
      },
      { 
        id: 'c3-6', 
        title: '6. Anatomia de um DDoS', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Um ataque DDoS (Distributed Denial of Service) não é um "hack" mágico que invade seu servidor. É força bruta estúpida. É um engarrafamento intencional.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Imagine que seu servidor é um restaurante com uma porta estreita. O atacante contrata milhares de zumbis (botnets) para ficarem parados na porta do restaurante, sem entrar nem sair. Os seus jogadores reais (clientes legítimos) não conseguem passar pela porta. O servidor não caiu; ele apenas não consegue ouvir os jogadores legítimos por causa do barulho dos zumbis.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Mitigação na Borda (Edge)</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O maior erro de iniciantes é tentar instalar firewalls de software (como iptables avançados ou UFW) no próprio servidor para bloquear DDoS. Isso não funciona para ataques volumétricos. Se o atacante enviar 10 Gigabits de lixo para um servidor que tem um cabo de 1 Gigabit, o cabo vai entupir antes mesmo de chegar ao seu firewall de software.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Proteção Inline:</strong> A única defesa real contra DDoS volumétrico é a proteção "na borda" (Edge Protection). O tráfego deve ser filtrado <em>antes</em> de chegar ao seu cabo.</li>
            <li><strong>Provedores Especializados:</strong> Você deve hospedar seu servidor em data centers que ofereçam mitigação DDoS em nível de hardware (roteadores de borda). Empresas como OVH (Game Anti-DDoS), Path.net, ou serviços de proxy reverso como Cloudflare Spectrum são essenciais.</li>
            <li><strong>Escondendo o IP Real:</strong> Se você usa um proxy (como um BungeeCord protegido ou Cloudflare), o IP real do seu servidor (Backend) nunca deve ser público. Se o atacante descobrir o IP real, ele fará o ataque contornando o proxy.</li>
          </ul>
        ` 
      },
      { 
        id: 'c3-7', 
        title: '7. Monitoramento (Observabilidade)', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Você não pode consertar o que não consegue ver. Quando os jogadores começam a gritar "LAG!" no chat, se você não tem ferramentas de monitoramento, você está apenas adivinhando a causa.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A observabilidade é a diferença entre um amador que reinicia o servidor rezando para resolver o problema, e um profissional que sabe exatamente qual plugin causou o pico de CPU às 20:14.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Stack de Telemetria</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Instale um stack de monitoramento moderno, como Prometheus (para coletar os dados) e Grafana (para visualizar os gráficos).
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Métricas de Hardware:</strong> Monitore o uso de CPU (por núcleo), RAM, I/O de disco e tráfego de rede (In/Out). Um pico repentino no tráfego de entrada (In) pode indicar o início de um ataque DDoS.</li>
            <li><strong>Métricas da Aplicação:</strong> Monitore o Tickrate (TPS) do servidor de jogo, o número de jogadores online e o tempo de resposta do banco de dados. Se o TPS cai sempre que o servidor atinge 50 jogadores, você encontrou seu limite atual.</li>
            <li><strong>Alertas Automatizados:</strong> Configure o Grafana para enviar uma mensagem para um canal privado do seu Discord se o uso de CPU passar de 90% por mais de 5 minutos, ou se o servidor ficar offline. Saiba do problema antes dos jogadores.</li>
          </ul>
        ` 
      },
      {
        id: 'c3-8',
        title: '8. Latência: A Distância da Realidade',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Ping não é apenas um número no canto da tela; é a distância temporal entre a intenção do jogador e a realidade simulada pelo servidor. Em jogos competitivos, milissegundos definem vitórias.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Um servidor justo deve estar geograficamente centralizado em relação à sua base de jogadores. Se o seu público é brasileiro, hospedar na Europa para economizar 10 dólares resultará em uma experiência frustrante para todos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Ilusão do Lag Compensation</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Para lidar com a latência inevitável da internet, motores de jogos modernos usam "Lag Compensation".
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Máquina do Tempo:</strong> Quando um jogador atira, o servidor "rebobina" a simulação do mundo para o exato milissegundo em que o jogador clicou (baseado no ping dele), para ver se o alvo estava realmente lá.</li>
            <li><strong>O Limite da Ilusão:</strong> Se você permitir que jogadores com 300ms de ping se beneficiem do Lag Compensation, os jogadores com ping baixo sentirão que estão "morrendo atrás da parede", porque o servidor validou um tiro de alguém que estava vendo o passado distante.</li>
            <li><strong>Configuração Estrita:</strong> Configure limites rígidos (ex: <code>sv_maxunlag</code> na Source Engine). Expulse automaticamente jogadores com ping consistentemente acima de 150ms para proteger a integridade da partida para a maioria.</li>
          </ul>
        `
      },
      {
        id: 'c3-9',
        title: '9. A Santidade do Banco de Dados',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Se o servidor de jogo é o corpo da sua comunidade, o banco de dados é a alma. É lá que residem os inventários, as carteiras virtuais, as senhas e os bans.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Ataques de SQL Injection (SQLi) não são apenas bugs; são profanações desse templo. Um SQLi bem-sucedido permite que um jogador comum dê a si mesmo 1 milhão de moedas, ou pior, delete a tabela inteira de usuários.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Protegendo o Cofre</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A segurança do banco de dados não é opcional, é o requisito número um antes de abrir o servidor ao público.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Sanitização Absoluta:</strong> Nunca, sob nenhuma circunstância, construa queries SQL concatenando strings diretamente com o input do usuário. Use sempre Prepared Statements (Queries Parametrizadas). Isso neutraliza 99% dos ataques de injeção.</li>
            <li><strong>Princípio do Menor Privilégio:</strong> O usuário do banco de dados que o servidor de jogo usa não deve ser o 'root'. Crie um usuário específico que só tenha permissão de leitura e escrita (SELECT, INSERT, UPDATE) nas tabelas específicas do jogo. Ele não deve ter permissão para dar DROP em tabelas.</li>
            <li><strong>Acesso Local Apenas:</strong> O banco de dados nunca deve estar exposto à internet pública (porta 3306 aberta). Ele deve aceitar conexões apenas do <code>localhost</code> ou da rede privada interna (VPC) onde os servidores de jogo estão.</li>
          </ul>
        `
      },
      {
        id: 'c3-10',
        title: '10. Balanceamento de Carga',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O sucesso é um problema maravilhoso de se ter. Quando sua comunidade cresce além da capacidade de um único núcleo de CPU, você não pode simplesmente "comprar um servidor maior". Você precisa escalar horizontalmente.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Isso significa dividir o peso entre várias instâncias ou até mesmo várias máquinas físicas, criando uma rede interconectada.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Dividir para Conquistar</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A arquitetura de rede (como o BungeeCord/Velocity no Minecraft) permite que os jogadores se conectem a um "Lobby" leve e sejam redirecionados para servidores de jogo mais pesados de forma transparente.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Isolamento de Carga:</strong> O servidor de Lobby, que lida apenas com chat e portais, não deve rodar na mesma máquina que o servidor Survival pesado, que está calculando física e milhares de entidades.</li>
            <li><strong>Redundância:</strong> Se o servidor de Minigames cair, o resto da rede (Lobby, Factions) continua online. Os jogadores não são desconectados da rede inteira, apenas redirecionados de volta ao Lobby.</li>
            <li><strong>Sincronização:</strong> O desafio da escala horizontal é manter os dados sincronizados. Você precisará de um banco de dados central (MySQL) e, para dados em tempo real (como chat global ou status online), um sistema de pub/sub como o Redis.</li>
          </ul>
        `
      },
      {
        id: 'c3-11',
        title: '11. Zero Trust Architecture',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O modelo de segurança antigo assumia que o perigo estava do lado de fora (a internet) e que tudo do lado de dentro (a rede local) era seguro. A arquitetura "Zero Trust" (Confiança Zero) destrói essa ilusão.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Você deve assumir que a rede interna já está comprometida. Se um invasor conseguir entrar em um container menos importante (como o servidor web do fórum), ele não deve ter acesso livre ao resto da infraestrutura.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Muros Internos</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Cada componente do seu servidor deve tratar os outros componentes com suspeita.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Autenticação Interna:</strong> Mesmo que o servidor de jogo e o banco de dados estejam na mesma máquina (localhost), a conexão entre eles deve exigir senha forte.</li>
            <li><strong>Redes Virtuais (VLANs/Docker Networks):</strong> Isole os serviços. O container do servidor web não precisa e não deve ter rota de rede para o container do servidor de jogo, a menos que haja uma API específica e autenticada entre eles.</li>
            <li><strong>Auditoria Contínua:</strong> Monitore não apenas o tráfego externo, mas o tráfego interno. Um pico de transferência de dados do banco de dados para o servidor web no meio da madrugada pode indicar uma exfiltração de dados (roubo de senhas).</li>
          </ul>
        `
      },
      {
        id: 'c3-12',
        title: '12. O Custo da Permanência',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A arquitetura mais perfeita do mundo desmoronará se você não puder pagar a conta de luz no final do mês. Servidores de alta performance, proteção DDoS de borda e backups offsite custam dinheiro real e contínuo.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Muitos projetos brilhantes morrem no terceiro mês porque o Guardião subestimou o custo financeiro a longo prazo e tentou bancar tudo do próprio bolso.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Sustentabilidade Ética</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Você precisa planejar a monetização antes de abrir as portas, mas deve fazê-lo sem destruir a integridade do jogo.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Transparência de Custos:</strong> Seja honesto com a comunidade. Mostre uma barra de progresso mensal com os custos reais do servidor. Jogadores são muito mais propensos a doar quando sabem exatamente para onde o dinheiro está indo.</li>
            <li><strong>Cosméticos vs Pay-to-Win:</strong> Venda status, não poder. Venda tags coloridas no chat, chapéus virtuais, ou acesso a canais VIP no Discord. Nunca venda armas mais fortes, invencibilidade ou o direito de quebrar as regras. O Pay-to-Win destrói a comunidade a longo prazo.</li>
            <li><strong>O Fundo de Emergência:</strong> O objetivo financeiro não deve ser apenas pagar o mês atual, mas construir um fundo de reserva para pagar 3 meses de servidor caso as doações sequem. Isso tira a pressão das suas costas e garante a permanência do templo.</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O console RCON (Remote Control) é a linha direta com o cérebro do servidor. Diferente de menus visuais (como o menu de admin do SourceMod), o console não pede confirmação. Ele não tem botões de "Tem certeza?". Ele apenas obedece.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Aprender a sintaxe crua dos comandos é vital. Menus visuais podem quebrar após atualizações do jogo, ou você pode precisar administrar o servidor remotamente via celular ou terminal web onde interfaces gráficas não existem.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Precisão Cirúrgica</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Um erro de digitação no console pode ser catastrófico. Digitar <code>kick all</code> em vez de <code>kick "nome do jogador"</code> esvaziará seu servidor instantaneamente.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Aspas são suas amigas:</strong> Sempre use aspas duplas ao redor de nomes de jogadores que contêm espaços. <code>sm_ban "João das Neves" 0 "Hacker"</code>. Sem as aspas, o servidor tentará banir um jogador chamado "João" pelo motivo "das Neves".</li>
            <li><strong>O Autocomplete:</strong> Acostume-se a usar a tecla TAB. Digite <code>sm_b</code> e aperte TAB para ver todas as opções (ban, burn, blind). Isso evita erros de digitação e revela comandos que você nem sabia que existiam.</li>
            <li><strong>O Log de Eco:</strong> Tudo o que você digita no RCON fica registrado nos logs do servidor. Não use o console para desabafar ou testar senhas.</li>
          </ul>
          <h3 class="text-2xl font-display text-white mt-8 mb-4">Simulação Prática</h3>
          <p class="mb-4 text-lg leading-relaxed">Use o simulador abaixo para treinar a sintaxe exata do SourceMod e entender como o servidor interpreta seus comandos.</p>
        `
      },
      { 
        id: 'c4-2', 
        title: '2. A Anatomia do Banimento', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            No ecossistema Steam (e na maioria das plataformas modernas), o nome de um jogador é apenas uma máscara temporária. Nomes mudam. IPs mudam (com reinicialização de roteador ou VPN). O que permanece é o identificador único da conta.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Na Steam, esse identificador é o <strong>SteamID</strong> (que pode se apresentar em formatos como STEAM_0:1:1234567 ou o SteamID64, ex: 76561198000000000).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Banindo a Alma, Não a Máscara</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A regra de ouro da moderação técnica é: <strong>Sempre bane pelo ID, nunca pelo nome.</strong>
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Risco do Nome:</strong> Se você usar o comando <code>sm_ban "Player" 0</code>, e o hacker mudar de nome um segundo antes de você apertar Enter, você pode acabar banindo um novato inocente que acabou de entrar com o nome padrão "Player".</li>
            <li><strong>O Comando Status:</strong> Antes de qualquer punição severa, digite <code>status</code> no console. Isso listará todos os jogadores, seus IDs e IPs. Copie o SteamID do infrator.</li>
            <li><strong>A Execução Limpa:</strong> Use o comando com o ID: <code>sm_ban "#STEAM_0:1:1234567" 0 "Uso de Aimbot"</code>. O símbolo <code>#</code> antes do ID (em alguns sistemas) garante que o servidor procure especificamente por aquele identificador, ignorando nomes.</li>
          </ul>
        ` 
      },
      { 
        id: 'c4-3', 
        title: '3. Mute vs Gag vs Silence', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A resposta proporcional é a marca de um Guardião sábio. Banir um jogador do servidor inteiro porque ele estava tocando música alta no microfone é como usar uma bazuca para matar um mosquito.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O SourceMod (e sistemas similares) oferece ferramentas cirúrgicas para isolar o problema sem remover o jogador da partida.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Arsenal do Silêncio</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
             <li><strong>sm_mute (Voz):</strong> Corta exclusivamente o canal de voz (microfone) do jogador. <em>Uso ideal:</em> Crianças gritando, pessoas com microfones com estática horrível, ou jogadores tocando música (mic spam). Eles ainda podem digitar e jogar normalmente.</li>
             <li><strong>sm_gag (Texto):</strong> Corta exclusivamente o chat de texto. <em>Uso ideal:</em> Jogadores fazendo spam de binds de texto, enviando IPs de outros servidores (propaganda), ou xingando por escrito. Eles ainda podem falar no microfone.</li>
             <li><strong>sm_silence (Total):</strong> Aplica o Mute e o Gag simultaneamente. <em>Uso ideal:</em> Toxicidade completa, racismo, ou jogadores que, ao serem mutados no microfone, começam a xingar no chat de texto.</li>
          </ul>
          <p class="text-lg leading-relaxed mt-6">
            <strong>Dica de Ouro:</strong> Muitas vezes, um <code>sm_silence</code> de 30 minutos educa muito mais do que um banimento de 1 dia. O jogador é forçado a continuar jogando, mas como um fantasma mudo, observando a comunidade interagir sem ele. É uma punição psicológica altamente eficaz.
          </p>
        ` 
      },
      { 
        id: 'c4-4', 
        title: '4. SourceBans e Logs', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Quando sua comunidade cresce de um único servidor para uma rede (ex: um servidor de Mix, um de Surf e um de Deathmatch), gerenciar banimentos localmente em cada máquina torna-se impossível.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se um hacker é banido no servidor de Mix, ele não deveria conseguir entrar no servidor de Surf cinco minutos depois. A solução para isso é a centralização.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Teia Global (SourceBans/MaterialAdmin)</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Sistemas como SourceBans (ou suas ramificações modernas) conectam todos os seus servidores a um único banco de dados MySQL externo.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Banimento Global:</strong> Quando um admin digita <code>sm_ban</code> no Servidor A, o plugin envia o SteamID para o banco de dados central. Imediatamente, os Servidores B e C atualizam suas listas. O infrator é expulso da rede inteira.</li>
            <li><strong>O Portal da Transparência:</strong> Esses sistemas geram um site público (ex: bans.suacomunidade.com). Qualquer jogador pode ver quem foi banido, por qual admin, a duração e o motivo exato.</li>
            <li><strong>A Confiança da Comunidade:</strong> A transparência gera confiança. Quando os jogadores veem que a staff está ativamente punindo infratores (e que os motivos são justos e documentados), eles se sentem mais seguros e respeitam mais a autoridade dos Guardiões.</li>
          </ul>
        ` 
      },
      { 
        id: 'c4-5', 
        title: '5. A Senha RCON', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O arquivo <code>server.cfg</code> é o coração da configuração do seu servidor. Dentro dele, reside a variável mais perigosa de todas: a <code>rcon_password</code>.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Quem possui essa senha tem acesso absoluto (nível Deus) ao servidor, podendo executar qualquer comando remotamente, desde mudar o mapa até desligar a máquina (<code>quit</code>).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Segredo Mais Bem Guardado</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O vazamento da senha RCON é a causa número um de servidores "hackeados" (que na verdade foram apenas sequestrados por negligência).
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Nunca compartilhe em texto claro:</strong> Nunca envie o arquivo <code>server.cfg</code> pelo Discord para um amigo "dar uma olhada". Nunca cole a senha em chats.</li>
            <li><strong>O Perigo do Chat do Jogo:</strong> Se você precisar se autenticar no jogo (<code>rcon_password "suasenha"</code>), faça isso SEMPRE no console (aspa/til). Se você digitar isso no chat de texto do jogo por engano, todos os jogadores verão, e os logs registrarão para sempre.</li>
            <li><strong>Rotação de Chaves:</strong> Se um administrador sênior (que tinha acesso ao RCON) sair da equipe, especialmente se a saída for conflituosa, mude a senha RCON nos próximos 5 minutos. Não confie na boa vontade de ex-membros ressentidos.</li>
          </ul>
        ` 
      },
      { 
        id: 'c4-6', 
        title: '6. Evidências: Demos e Prints', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Em um tribunal comunitário, a palavra de um administrador tem peso, mas não é absoluta. Para banimentos permanentes, especialmente por uso de trapaças (cheats), você precisa de provas irrefutáveis.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A ferramenta mais poderosa no arsenal da Source Engine (e em muitos outros jogos) é a gravação de Demos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Testemunha Ocular Digital</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O comando <code>record [nome_do_arquivo]</code> no console do cliente grava absolutamente tudo o que está sendo renderizado na sua tela, incluindo os movimentos exatos do mouse do jogador que você está espectando.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Olho Clínico:</strong> Para casos de Wallhack (ver através das paredes) ou Aimbot (mira automática), a demo é essencial. Você pode usar o comando <code>demoui</code> (ou Shift+F2) para abrir o reprodutor, pausar, avançar frame a frame e observar se a mira do suspeito "travou" de forma não natural na cabeça de um inimigo através de uma porta.</li>
            <li><strong>SourceTV / GOTV:</strong> Configure seu servidor para gravar demos automaticamente de todas as partidas (SourceTV). Assim, se alguém denunciar um hacker após o jogo terminar, você tem a gravação completa do servidor (com a visão de todos os jogadores) salva no FTP.</li>
            <li><strong>O Fim das Discussões:</strong> Quando um jogador banido for ao fórum reclamar de "abuso de poder", responder ao tópico anexando o arquivo <code>.dem</code> encerra a discussão instantaneamente e prova para a comunidade que a staff age com base em fatos.</li>
          </ul>
        ` 
      },
      { 
        id: 'c4-7', 
        title: '7. O Comando de Anúncio', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A comunicação da staff com o servidor deve ser clara, mas não intrusiva. O SourceMod oferece várias formas de enviar mensagens, cada uma com um nível diferente de urgência.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Saber qual comando usar separa o administrador profissional do amador que gosta de chamar atenção.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Hierarquia dos Avisos</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>sm_say (Chat Global):</strong> Envia uma mensagem destacada no chat de texto para todos. <em>Uso ideal:</em> Avisos gerais, lembretes de regras.</li>
            <li><strong>sm_psay (Private Say):</strong> Envia uma mensagem direta apenas para um jogador específico. <em>Uso ideal:</em> Avisos comportamentais discretos ("Por favor, pare de xingar no microfone"). É a melhor forma de corrigir alguém sem envergonhá-lo publicamente.</li>
            <li><strong>sm_csay (Center Say):</strong> Coloca um texto gigante no meio da tela de todos os jogadores. <em>Uso ideal:</em> <strong>Apenas emergências absolutas.</strong> "O SERVIDOR SERÁ REINICIADO EM 1 MINUTO". Usar isso para dar "Bom dia" é um abuso de poder que irrita os jogadores e atrapalha a visão do jogo.</li>
            <li><strong>sm_hsay (Hint Say):</strong> Mostra uma pequena caixa de texto na parte inferior da tela. <em>Uso ideal:</em> Avisos importantes, mas não urgentes.</li>
          </ul>
        ` 
      },
      { 
        id: 'c4-8', 
        title: '8. O Perdão (Unban)', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Remover um banimento (<code>sm_unban</code>) é tecnicamente a coisa mais fácil do mundo. Politicamente, é a mais perigosa.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O perdão, quando mal administrado, destrói a moral da equipe de moderação e a credibilidade das regras.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Burocracia Necessária</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Nunca desbana alguém "porque ele pediu desculpas no privado".
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Processo de Apelo:</strong> Todo jogador banido deve ter o direito de apelar, mas isso deve ser feito através de um canal oficial (fórum, ticket no Discord), não por mensagens diretas aos admins.</li>
            <li><strong>A Regra do Autor:</strong> Idealmente, apenas o administrador que aplicou o banimento (ou um superior) deve ter a autoridade para removê-lo. Se Admin A bane e Admin B desbane porque é amigo do jogador, a equipe se fragmentará.</li>
            <li><strong>Registro Público:</strong> Se um banimento for revogado (seja por um erro da staff ou por uma segunda chance concedida), o motivo do unban deve ser registrado no sistema (ex: SourceBans) para que todos os outros admins saibam o que aconteceu.</li>
          </ul>
        ` 
      },
      {
        id: 'c4-9',
        title: '9. Gestão de Mapas (Pacing)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O administrador não é apenas um policial; ele é o DJ da festa. A escolha e o momento da troca de mapas ditam o ritmo (pacing) e o humor do servidor.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Trocar o mapa no momento errado pode esvaziar um servidor lotado em segundos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arte da Transição</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>changelevel vs sm_setnextmap:</strong> O comando <code>changelevel [mapa]</code> força a troca imediata. É brutal e interrompe o jogo no meio. Use apenas se o mapa atual estiver quebrado. O comando <code>sm_setnextmap [mapa]</code> agenda a troca para o fim natural da partida. É a forma educada de mudar o cenário.</li>
            <li><strong>Lendo a Sala:</strong> Se a partida está empatada (14 a 14) e a tensão está no máximo, NUNCA force uma troca de mapa. Deixe o clímax acontecer.</li>
            <li><strong>Tamanho do Mapa vs População:</strong> Se o servidor está esvaziando (ex: de madrugada), force a troca para um mapa menor (ex: de <code>de_dust2</code> para <code>cs_italy</code> ou um mapa de arena). Mapas gigantes com poucos jogadores resultam em tédio, e o tédio mata o servidor.</li>
          </ul>
        `
      },
      {
        id: 'c4-10',
        title: '10. Executando Configs',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Um servidor pode ter múltiplas personalidades. De tarde, pode ser um ambiente casual "4fun". À noite, pode sediar um campeonato sério.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Mudar as regras do jogo manualmente (digitando 50 comandos de tempo de round, gravidade, dano amigo) é receita para o desastre. Você vai esquecer algo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Magia do .cfg</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Arquivos de configuração (<code>.cfg</code>) são scripts de texto simples que contêm listas de comandos.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Transformação Instantânea:</strong> Ao digitar <code>exec campeonato.cfg</code> no console, o servidor lê e aplica dezenas de regras em um milissegundo. O dano amigo é ativado, o tempo de round é ajustado, o chat de voz com os mortos é desativado.</li>
            <li><strong>O Botão de Pânico:</strong> Tenha sempre um <code>exec default.cfg</code> pronto. Se você bagunçar as configurações testando algo, esse comando restaura o servidor para o estado normal de fábrica.</li>
            <li><strong>Organização:</strong> Mantenha suas configs organizadas na pasta <code>cfg/</code> do servidor. Crie configs para treinos (<code>treino.cfg</code> com munição infinita e granadas visíveis) e para partidas oficiais (<code>live.cfg</code>).</li>
          </ul>
        `
      },
      {
        id: 'c4-11',
        title: '11. Interpretando o Status',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O comando <code>status</code> é a sua ferramenta de inteligência mais básica e mais subestimada. Ele não serve apenas para pegar o SteamID de alguém; ele conta a história da conexão de cada jogador.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Aprender a ler as entrelinhas do <code>status</code> permite que você resolva problemas antes que eles virem reclamações.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Lendo a Matrix</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Ping e Loss:</strong> Um jogador está "teleportando" pelo mapa e os outros estão reclamando? Olhe o status. Se o Ping dele estiver em 300ms ou o Loss (perda de pacotes) estiver acima de 5%, a culpa é da internet dele. Não o acuse de usar "speedhack"; apenas peça gentilmente para ele arrumar a conexão ou o kicke por ping alto.</li>
            <li><strong>IPs Idênticos:</strong> Dois jogadores com nomes diferentes, mas com o exato mesmo IP? Eles estão na mesma casa (irmãos), na mesma LAN house, ou usando a mesma VPN. Se um deles estiver usando cheat, o outro provavelmente é uma conta secundária (smurf) do mesmo dono.</li>
            <li><strong>Tempo de Conexão:</strong> O status mostra há quanto tempo o jogador está no servidor. Útil para verificar se alguém está ausente (AFK) ocupando vaga há horas.</li>
          </ul>
        `
      },
      {
        id: 'c4-12',
        title: '12. Whitelisting (A Corda de Veludo)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Existem momentos em que a comunidade precisa fechar as portas. Seja para um treino de equipe, um campeonato fechado, ou para se proteger de um ataque coordenado de trolls.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Colocar uma senha (<code>sv_password "senha123"</code>) é o método amador. Senhas vazam.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Segurança Baseada em Identidade</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O método profissional é o Whitelisting (Lista Branca).
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Como Funciona:</strong> Em vez de pedir uma senha, o servidor verifica o SteamID do jogador no momento em que ele tenta conectar. Se o ID não estiver na lista de convidados aprovados, a conexão é rejeitada instantaneamente.</li>
            <li><strong>Proteção Absoluta:</strong> Mesmo se o jogador souber o IP e a porta do servidor, ele não entra. É a defesa definitiva contra invasores indesejados durante eventos privados.</li>
            <li><strong>Grupos da Steam:</strong> Plugins avançados permitem atrelar a Whitelist a um Grupo da Steam. Se o jogador for membro do grupo oficial da sua comunidade, ele entra. Se não for, fica de fora. Isso automatiza o processo e incentiva os jogadores a se juntarem ao seu grupo.</li>
          </ul>
        `
      },
      {
        id: 'c4-13',
        title: '13. Gravidade e Física',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A Source Engine é famosa por sua física. Como administrador, você tem o poder de alterar as leis fundamentais do universo do jogo.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Comandos como <code>sv_gravity</code> (gravidade) e <code>sv_friction</code> (atrito) podem transformar um jogo de tiro tático em um caos absoluto.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Poder da Descompressão</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Embora destrutivos em partidas sérias, esses comandos são ferramentas valiosas de gestão de comunidade.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Quebrando o Gelo:</strong> Após uma partida extremamente tensa e tóxica, onde os jogadores estão estressados, mudar a gravidade para 200 (o padrão é 800) e permitir que todos deem saltos gigantescos quebra a tensão imediatamente. O riso substitui a raiva.</li>
            <li><strong>Eventos de Fim de Semana:</strong> Usar configurações físicas anormais (como atrito zero, fazendo todos deslizarem como se estivessem no gelo) é ótimo para eventos casuais de fim de semana, mantendo o servidor interessante e imprevisível.</li>
            <li><strong>A Regra do Retorno:</strong> Nunca esqueça de voltar as configurações ao normal (<code>exec default.cfg</code>) quando a brincadeira acabar. Um servidor que esquece a gravidade baixa ligada será abandonado pelos jogadores sérios no dia seguinte.</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Humanos precisam dormir. Humanos se cansam, perdem a paciência e cometem erros de julgamento quando estão exaustos. Bots não.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A automação não existe para substituir o Guardião, mas para ser seu escudo. O AutoMod deve ser configurado para lidar com o "lixo óbvio", deixando os humanos livres para julgar as "nuances".
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Divisão do Trabalho</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Domínio do Bot (Preto e Branco):</strong> Spam de links, convites de outros servidores, palavras proibidas (slurs raciais/homofóbicos), flood de caracteres (ex: "AAAAAAAAAAAA") e raids de contas recém-criadas. O bot age em milissegundos, sem emoção.</li>
            <li><strong>O Domínio Humano (Tons de Cinza):</strong> Sarcasmo, discussões passivo-agressivas, assédio sutil, "trolling" complexo e disputas de ego. Um bot não entende contexto; se você tentar fazê-lo entender, ele punirá inocentes.</li>
            <li><strong>A Regra de Ouro:</strong> Nunca configure um bot para banir permanentemente por infrações de "área cinzenta". O bot deve deletar a mensagem, alertar o usuário (warn) e notificar a staff. O banimento definitivo por comportamento complexo exige um clique humano.</li>
          </ul>
        `
      },
      { 
        id: 'c5-2', 
        title: '2. Expressões Regulares (Regex)', 
        interactiveComponent: 'RegexLab',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Filtros de palavras simples são inúteis contra trolls dedicados. Se você proibir a palavra "idiota", eles escreverão "1diota", "i.d.i.o.t.a", ou "idíota".
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Para capturar a intenção, e não apenas a ortografia, você precisa dominar as Expressões Regulares (Regex). Regex é uma linguagem de programação focada em encontrar padrões em textos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arte da Captura</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Com Regex, você não procura por uma palavra; você cria uma "rede" que captura todas as mutações possíveis daquela palavra.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Substituição de Caracteres (Leetspeak):</strong> Trolls substituem letras por números ou símbolos (A = 4, @; E = 3; I = 1, !). Um regex básico como <code>[aA4@]+</code> captura qualquer variação da letra A.</li>
            <li><strong>Espaçamento e Pontuação:</strong> Para evitar o filtro, eles inserem espaços ou pontos (ex: "b a n i d o"). O padrão <code>\\s*</code> ou <code>[\\W_]*</code> entre as letras ignora qualquer lixo que eles coloquem no meio da palavra.</li>
            <li><strong>O Laboratório:</strong> Use o componente interativo abaixo para testar seus padrões. Tente criar um Regex que capture a palavra "bad" mesmo se escrita como "b.a.d", "b4d", ou "b a d". (Dica: <code>b[\\W_]*[a4@][\\W_]*d</code>)</li>
          </ul>
        ` 
      },
      { 
        id: 'c5-3', 
        title: '3. Falsos Positivos', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O maior pecado de um AutoMod não é deixar um troll escapar; é punir um inocente. Quando o bot silencia alguém injustamente, a comunidade perde a confiança no sistema.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Isso é conhecido como o "Problema de Scunthorpe" (nomeado após uma cidade inglesa cujos moradores eram bloqueados de criar contas na AOL porque o nome da cidade continha uma substring ofensiva).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Prevenção de Injustiças</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Word Boundaries (Limites de Palavra):</strong> Se você banir a palavra "anal", você bloqueará pessoas tentando escrever "analista" ou "canal". Em Regex, use <code>\\b</code> (word boundary) ao redor da palavra: <code>\\banal\\b</code>. Isso garante que o filtro só atue se a palavra estiver isolada.</li>
            <li><strong>A Allowlist (Lista Branca):</strong> Antes de ativar um filtro agressivo, crie uma lista de exceções. Se o seu filtro de links bloqueia tudo, certifique-se de colocar domínios como <code>youtube.com</code>, <code>tenor.com</code> e <code>prnt.sc</code> na allowlist.</li>
            <li><strong>O Modo Silencioso (Shadow Testing):</strong> Quando criar um filtro novo e complexo, não o configure para deletar mensagens ou punir imediatamente. Configure-o apenas para enviar um alerta para um canal privado da staff. Observe os alertas por alguns dias para ver se há falsos positivos antes de "armar" a bomba.</li>
          </ul>
        ` 
      },
      { 
        id: 'c5-4', 
        title: '4. Proteção contra Raids', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Um Raid (Ataque) ocorre quando dezenas ou centenas de contas (geralmente bots, mas às vezes usuários coordenados) entram no seu servidor simultaneamente para inundar os canais com spam, pornografia ou ofensas.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Nenhum humano consegue banir 50 contas por segundo. O AutoMod deve ter um "Modo Pânico" pré-configurado.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Defesa de Fronteira</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Limiares de Entrada (Join Thresholds):</strong> Configure o bot (ex: Dyno, Carl-bot) para agir se detectar um pico anormal. Exemplo: "Se mais de 10 usuários entrarem em 10 segundos, ative o Modo Raid".</li>
            <li><strong>Ações do Modo Raid:</strong> Quando ativado, o bot deve automaticamente: 1) Aumentar o nível de verificação do servidor para o máximo (exigir telefone verificado). 2) Silenciar o canal de boas-vindas. 3) Enviar um alerta (ping) para os administradores.</li>
            <li><strong>Quarentena de Novatos:</strong> Contas criadas há menos de 24 horas não devem ter permissão para enviar links, imagens ou mencionar <code>@everyone</code>. Isso neutraliza 90% dos bots de spam de criptomoedas e phishing.</li>
          </ul>
        ` 
      },
      { 
        id: 'c5-5', 
        title: '5. Phishing e Links', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            "Ganhe 1 mês de Discord Nitro Grátis! Clique aqui: d1scord-n1tro.com". Esta é a isca mais velha da internet, e todos os dias alguém cai nela.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A maioria das contas que enviam esses links não são trolls; são membros antigos da sua própria comunidade que tiveram seus tokens roubados (foram hackeados) e agora estão sendo usados como zumbis para espalhar o vírus.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Quarentena Digital</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Bloqueio por Padrão (Default Deny):</strong> Em canais gerais de bate-papo, a abordagem mais segura é proibir TODOS os links, exceto os de uma Allowlist estrita (YouTube, Twitch, Spotify, Steam). Se alguém quiser compartilhar um link obscuro, deve enviá-lo em um canal específico (ex: <code>#links-e-midia</code>).</li>
            <li><strong>Bots Especializados:</strong> Utilize bots focados em segurança (como o Beemo ou o Fish) que mantêm bancos de dados atualizados em tempo real com milhares de domínios maliciosos conhecidos. Eles banem o usuário zumbi antes mesmo de você ver a mensagem.</li>
            <li><strong>A Punição para Zumbis:</strong> Quando o bot detectar um link de phishing enviado por um membro antigo, a ação não deve ser um banimento permanente imediato. A ação ideal é um "Quarantine" (remover todos os cargos e dar um cargo de "Hackeado" que só vê um canal explicando como recuperar a conta).</li>
          </ul>
        ` 
      },
      { 
        id: 'c5-6', 
        title: '6. Comandos de Nuke', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Existem situações em que um canal é irremediavelmente poluído. Talvez um raid tenha postado 500 imagens ilegais (gore/CP) enquanto a staff dormia.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Tentar deletar mensagem por mensagem, ou usar o comando <code>purge 100</code> repetidas vezes, é lento, ineficiente e expõe a staff a conteúdo traumatizante por muito tempo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Limpeza pelo Fogo</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O comando "Nuke" (oferecido por bots como Carl-bot ou Dyno) é o botão vermelho de emergência.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Como Funciona:</strong> Ao digitar <code>!nuke</code> em um canal, o bot instantaneamente clona o canal (copiando o nome, tópico e todas as permissões exatas), deleta o canal original (destruindo todo o conteúdo malicioso) e coloca o clone no mesmo lugar. O processo leva menos de 2 segundos.</li>
            <li><strong>Restrição de Acesso:</strong> Este é um comando de destruição em massa. Apenas Administradores Sêniores (ou o Dono) devem ter permissão para usá-lo. Se um moderador júnior tiver sua conta hackeada e acesso ao comando Nuke, ele pode apagar o servidor inteiro em minutos.</li>
            <li><strong>O Pós-Nuke:</strong> Após usar o comando, o canal estará limpo, mas o histórico de conversas saudáveis também terá sido apagado. Use apenas quando o canal estiver além da salvação.</li>
          </ul>
        ` 
      },
      { 
        id: 'c5-7', 
        title: '7. Logs de Auditoria', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Um AutoMod que age no escuro é um tirano invisível. Todo bot de moderação deve ter um canal de logs (ex: <code>#mod-logs</code>) rigorosamente configurado para registrar cada ação que ele toma.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se o bot deletar uma mensagem, aplicar um mute ou banir um usuário, o log deve ser a sua caixa-preta. Ele precisa mostrar quem enviou a mensagem, o conteúdo exato que foi apagado, o horário da infração e, crucialmente, qual regra ou expressão regular (regex) foi acionada para causar a punição.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Vigiando o Vigia</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Revisão Periódica e Ajuste Fino:</strong> O Administrador Sênior deve ler os logs do AutoMod semanalmente, como um detetive analisando evidências. Se o bot está silenciando muitas pessoas por engano (falsos positivos), a regra correspondente precisa ser afrouxada ou reescrita. Se o chat está tóxico e o bot não está pegando nada, as regras precisam ser apertadas. O log é o termômetro da sua automação.</li>
            <li><strong>Transparência Interna da Staff:</strong> Todos os moderadores humanos devem ter acesso de leitura aos logs do bot. Isso permite que eles entendam imediatamente por que um usuário está reclamando de ter sido mutado e possam explicar a situação com base em fatos, ou reverter a punição se o bot tiver errado.</li>
            <li><strong>O Organismo Vivo:</strong> O AutoMod não é um software que você configura uma vez e esquece. A linguagem da internet muda, novas gírias surgem, e as táticas dos trolls evoluem constantemente. O AutoMod deve evoluir junto com eles, e os logs são o mapa que guia essa evolução.</li>
            <li><strong>Auditoria de Permissões:</strong> Certifique-se de que o canal de logs seja estritamente privado. Apenas a equipe de moderação deve ter acesso. Vazamento de logs pode expor métodos de detecção e permitir que mal-intencionados aprendam a burlar suas defesas.</li>
          </ul>
        ` 
      },
      {
        id: 'c5-8',
        title: '8. O Canal Honeypot',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Uma das defesas passivas mais elegantes e letais contra bots de spam automatizados é o "Honeypot" (Pote de Mel).
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            É uma armadilha simples, mas incrivelmente eficaz, baseada na forma como os scripts de spam operam. Eles não "leem" a tela como humanos; eles varrem a API do Discord em busca de qualquer canal onde tenham permissão para enviar mensagens.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Armadilha Invisível</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Configuração da Isca:</strong> Crie um canal de texto com um nome atrativo para bots, como <code>#regras-secretas</code> ou <code>#anuncios-vip</code>. Configure as permissões do Discord para que a role <code>@everyone</code> NÃO possa "Ler Histórico de Mensagens" nem "Ver Canal". Para um usuário humano normal, este canal simplesmente não existe.</li>
            <li><strong>O Gatilho Silencioso:</strong> O segredo da armadilha: deixe a permissão de "Enviar Mensagens" ativada para <code>@everyone</code> neste canal invisível. Muitos bots de spam rudimentares ignoram a restrição de visualização e tentam enviar mensagens para qualquer ID de canal que aceite texto.</li>
            <li><strong>A Execução Implacável:</strong> Como um humano normal não consegue ver o canal, ele nunca escreverá lá acidentalmente. Se uma mensagem aparecer naquele canal, é 100% de certeza que foi enviada por um script automatizado fazendo spam em massa. Configure seu AutoMod (ou um bot customizado) para banir instantaneamente e permanentemente qualquer conta que envie uma mensagem no canal Honeypot.</li>
            <li><strong>Manutenção da Armadilha:</strong> Ocasionalmente, limpe as mensagens do canal Honeypot para mantê-lo organizado, embora o foco principal seja o banimento automático. Certifique-se de que nenhum cargo de usuário comum ganhe permissão de visualização acidentalmente.</li>
          </ul>
        `
      },
      {
        id: 'c5-9',
        title: '9. Slowmode Estratégico',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O Slowmode (Modo Lento) é frequentemente subestimado, visto apenas como uma ferramenta bruta para parar o spam. Mas seu verdadeiro poder é psicológico e tático.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O Slowmode força o pensamento e a deliberação. Ele transforma uma gritaria caótica e reativa em uma conversa estruturada, onde cada palavra "custa" tempo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Controle do Ritmo</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Acalmando os Ânimos (De-escalation):</strong> Em discussões acaloradas sobre política, religião ou balanceamento de jogos, as pessoas tendem a enviar mensagens curtas, rápidas e furiosas (ex: "Você é burro", "Não", "Leia de novo"). Ativar um slowmode de 30 segundos ou 1 minuto obriga o usuário a condensar todos os seus argumentos em um único parágrafo bem pensado. O ódio perde a velocidade e a impulsividade é punida pela espera.</li>
            <li><strong>Automação de Velocidade (Raid Protection):</strong> Bots avançados podem monitorar a "velocidade" do chat (mensagens por segundo). Configure o bot para ativar automaticamente um slowmode de 5 a 10 segundos se o canal ficar muito rápido (um sinal claro de raid ou histeria coletiva), e desativá-lo gradualmente quando a poeira baixar.</li>
            <li><strong>Eventos e Anúncios Ao Vivo:</strong> Durante eventos de grande escala (ex: transmissões, sorteios, AMAs), um slowmode de 2 minutos no canal de chat geral permite que todos falem e participem, mas impede que a tela role tão rápido que a leitura se torne impossível. Isso garante que a voz da comunidade seja ouvida, mas de forma digerível.</li>
            <li><strong>A Arte da Comunicação:</strong> Quando ativar o slowmode manualmente em resposta a uma crise, sempre envie uma mensagem clara explicando o motivo: "Slowmode ativado temporariamente para acalmar os ânimos e permitir que todos leiam as mensagens. Respirem fundo."</li>
          </ul>
        `
      },
      {
        id: 'c5-10',
        title: '10. Filtros de Imagem (IA)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Regex não lê pixels. Um troll mal-intencionado e experiente pode contornar todos os seus filtros de texto mais complexos simplesmente escrevendo ofensas em uma imagem, ou pior, enviando imagens com conteúdo ilegal, gore ou pornográfico.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Para proteger a comunidade de ataques visuais (que são frequentemente muito mais traumatizantes e danosos que texto puro), você precisa do poder da Inteligência Artificial.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Visão Computacional na Moderação</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Bots de Moderação Visual:</strong> Ferramentas modernas (frequentemente embutidas no próprio AutoMod nativo do Discord ou em bots premium de segurança) escaneiam cada imagem enviada usando modelos de IA treinados especificamente para detectar nudez (NSFW), violência extrema, armas e até mesmo texto embutido em imagens (OCR).</li>
            <li><strong>A Margem de Erro (Falsos Positivos Visuais):</strong> A IA é poderosa, mas não é perfeita. Ela pode confundir uma foto de um cotovelo com nudez, ou um desenho artístico abstrato com gore. Por isso, a ação automática da IA para imagens ambíguas nunca deve ser o banimento imediato sem revisão.</li>
            <li><strong>O Fluxo de Trabalho Seguro:</strong> Configure o filtro de imagem para agir em duas etapas: 1) Deletar a imagem suspeita imediatamente do chat público para proteger os membros. 2) Enviar a imagem original para um canal privado e restrito da staff (ex: <code>#nsfw-logs</code>) com botões interativos de "Aprovar (Restaurar)" ou "Banir Usuário". Isso protege a comunidade instantaneamente enquanto mantém o julgamento final, o contexto e a punição nas mãos humanas.</li>
            <li><strong>Ataques de QR Code:</strong> Esteja ciente de que trolls podem enviar QR codes que levam a sites de phishing ou malware. Alguns bots avançados conseguem ler e bloquear URLs maliciosas dentro de QR codes.</li>
          </ul>
        `
      },
      {
        id: 'c5-11',
        title: '11. Banimentos Cruzados (Cross-Bans)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A toxicidade viaja rápido. Um troll dedicado que destrói a comunidade A provavelmente fará exatamente o mesmo na comunidade B assim que for banido.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Em ecossistemas conectados (ex: vários servidores de uma mesma organização de e-sports, uma aliança de guildas de MMO, ou servidores de streamers amigos), a inteligência compartilhada e a defesa mútua são a melhor estratégia.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Lista Negra Compartilhada</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Bots de Sincronização e Federação:</strong> Bots específicos de segurança permitem que você crie ou assine "Blacklists" globais mantidas por outras comunidades confiáveis. Se um usuário for banido por racismo ou doxxing no Servidor A, o bot o banirá preventivamente no Servidor B antes mesmo que ele consiga entrar ou falar.</li>
            <li><strong>O Perigo do Abuso e do Efeito Cascata:</strong> Banimentos cruzados são ferramentas extremamente perigosas se mal administradas. Se você assinar a lista de um administrador tirano ou emocionalmente instável que bane pessoas por discordarem dele, seu servidor perderá membros inocentes e sua reputação será manchada por associação.</li>
            <li><strong>A Regra de Ouro da Aliança:</strong> Apenas compartilhe banimentos e assine listas de comunidades que possuam <em>exatamente</em> a mesma filosofia de moderação, o mesmo rigor ético e o mesmo processo de apelação que a sua. A confiança absoluta na fonte dos banimentos é fundamental.</li>
            <li><strong>Auditoria de Cross-Bans:</strong> Sempre configure o bot para registrar o motivo original do banimento e o servidor de origem no seu próprio canal de logs. Se um usuário apelar do banimento no seu servidor, você precisa saber de onde a punição se originou para investigar.</li>
          </ul>
        `
      },
      {
        id: 'c5-12',
        title: '12. A Exceção da Regra',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Regras absolutas e cegas criam atrito desnecessário. Um filtro de Caps Lock que pune um membro veterano e querido por comemorar histericamente um título do seu time ("CAMPEÃO!!!") gera ressentimento e faz o AutoMod parecer um inimigo, não um protetor.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O AutoMod deve ser implacável e desconfiado com novatos desconhecidos, mas flexível e compreensivo com aqueles que já provaram seu valor e lealdade à comunidade ao longo do tempo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Hierarquia da Confiança</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Imunidade Baseada em Cargos:</strong> Configure seu AutoMod para ignorar certas regras "menores" (como limite de links, excesso de emojis, Caps Lock ou flood leve) para cargos superiores e de confiança (Veteranos, VIPs, Boosters de longa data). Eles conquistaram o direito de serem um pouco mais expressivos e caóticos sem a ameaça constante de um mute automático.</li>
            <li><strong>Canais de Exceção (Zonas Livres):</strong> O contexto importa. O filtro de palavrões pode estar estritamente ativo no canal <code>#geral</code>, mas completamente desativado no canal <code>#bar-noturno</code> (restrito para maiores de 18 anos). O filtro de imagens e GIFs pode ser rigoroso em todo lugar, exceto no canal <code>#memes-e-shitpost</code>.</li>
            <li><strong>A Linha Inegociável (Zero Tolerância):</strong> A imunidade tem limites claros. Regras contra discurso de ódio, racismo, doxxing (vazamento de dados pessoais), ameaças reais e phishing NUNCA devem ter exceções, nem mesmo para os moderadores mais antigos ou para o próprio Dono do servidor. A segurança fundamental não tem hierarquia.</li>
            <li><strong>Transparência nas Exceções:</strong> Deixe claro nas regras do servidor onde as exceções se aplicam. "O canal #memes tem regras relaxadas para spam de imagens, mas as regras de respeito mútuo ainda se aplicam."</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A armadilha mais comum de novos administradores é criar uma regra única: "Use o bom senso". O problema é que o "bom senso" não existe globalmente.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O que é uma piada inofensiva em uma cultura pode ser uma ofensa mortal em outra. O que um adolescente acha normal, um adulto pode achar inaceitável.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Lei Precisa de Fronteiras</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Subjetividade é o Inimigo:</strong> Regras vagas como "Respeite a todos" ou "Não seja tóxico" são inúteis na hora de aplicar uma punição controversa. O usuário sempre argumentará: "Mas eu não fui tóxico, foi só uma brincadeira".</li>
            <li><strong>Seja Específico e Mensurável:</strong> Em vez de "Sem spam", use "Máximo de 3 mensagens consecutivas ou imagens repetidas em menos de 10 segundos".</li>
            <li><strong>Proteção Dupla:</strong> Regras claras protegem o usuário (que sabe exatamente onde está o limite) e protegem o moderador (que tem uma base sólida e inquestionável para agir).</li>
          </ul>
        `
      },
      { 
        id: 'c7-2', 
        title: '2. A Trindade da Lei', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Antes de adicionar qualquer regra à sua constituição, ela deve passar por um teste rigoroso. Regras em excesso sufocam a comunidade; regras inúteis diminuem o respeito pelas regras vitais.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Toda regra deve passar por três filtros fundamentais, que chamamos de Trindade da Lei.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Os Três Filtros</h3>
          <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-6">
             <li><strong>Clareza (O Teste da Criança):</strong> Uma criança de 10 anos consegue ler a regra e entender exatamente o que é proibido? Se houver jargão jurídico ou ambiguidade, reescreva.</li>
             <li><strong>Necessidade (O Teste do Ego):</strong> Essa regra previne um problema real que já aconteceu ou tem alta probabilidade de acontecer? Ou ela existe apenas para satisfazer o ego do dono ou microgerenciar o comportamento alheio?</li>
             <li><strong>Exequibilidade (O Teste da Realidade):</strong> Temos ferramentas e tempo para fiscalizar isso de forma justa para todos? (Por exemplo, "Proibido xingar em call privada" é uma regra impossível de fiscalizar e, portanto, inútil).</li>
          </ol>
        ` 
      },
      { 
        id: 'c7-3', 
        title: '3. Regras Ocultas (Etiqueta)', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Além da constituição escrita e punitiva (as regras que dão ban), existe a "cultura" do servidor. São as regras não escritas de convivência.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Coisas que não justificam um banimento, mas que geram atrito, irritação e desprezo social (ex: pedir cargo de moderação, mendigar itens no jogo, usar @everyone para bobagens).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Educação antes da Legislação</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Guia de Boas Maneiras:</strong> Documente esses comportamentos em um canal separado, como "Dicas de Convivência" ou "Etiqueta do Servidor".</li>
            <li><strong>A Força da Cultura:</strong> Uma cultura forte auto-regula o comportamento muito melhor que a polícia. Quando um novato quebra a etiqueta, a própria comunidade o orienta antes que a moderação precise intervir.</li>
            <li><strong>Punições Sociais:</strong> A quebra de etiqueta geralmente resulta em punições sociais (ser ignorado, receber reações de palhaço) em vez de punições formais (mutes ou bans).</li>
          </ul>
        ` 
      },
      { 
        id: 'c7-4', 
        title: '4. O Contrato Social', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Um servidor não é um espaço público governamental onde a "liberdade de expressão" irrestrita se aplica. É um espaço privado, como a sala da sua casa.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Ao entrar, o usuário aceita implicitamente (e explicitamente, ao clicar no botão de regras do Discord) trocar parte de sua liberdade absoluta pela segurança e pelo convívio harmonioso do grupo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Moderação como Garantia</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Não é Opressão:</strong> A moderação não é opressão; é a garantia de que esse contrato social está sendo cumprido por todos.</li>
            <li><strong>O Paradoxo da Tolerância:</strong> Você não tira a liberdade de fala de alguém por tirania; você tira a liberdade de assédio de um indivíduo para garantir a liberdade de existência e expressão pacífica de todos os outros.</li>
            <li><strong>Relembre o Contrato:</strong> Quando usuários reclamarem de "censura" ao terem mensagens tóxicas apagadas, relembre-os educadamente dos termos que aceitaram ao entrar.</li>
          </ul>
        ` 
      },
      { 
        id: 'c7-5', 
        title: '5. Brechas Legais (Loophoeling)', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Se você tentar prever e listar cada infração possível, criará um documento de 50 páginas que ninguém lerá. Pior: regras excessivamente detalhadas convidam os "advogados de regras" a buscarem brechas.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se a regra diz "Proibido insultar a mãe", o troll se sentirá no direito de insultar o pai, argumentando que "não está nas regras".
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Cláusula Guarda-Chuva</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Fechando as Brechas:</strong> Toda constituição precisa de uma regra final, ampla e inquestionável.</li>
            <li><strong>Exemplo Prático:</strong> "A administração reserva-se o direito de punir comportamentos que prejudiquem a comunidade, causem desconforto generalizado ou burlem o espírito das regras, mesmo que a atitude não esteja listada explicitamente aqui."</li>
            <li><strong>Uso com Sabedoria:</strong> Esta cláusula é uma arma nuclear. Use-a apenas contra trolls mal-intencionados que tentam "jogar com o sistema", nunca para punir usuários bem-intencionados que cometeram erros genuínos.</li>
          </ul>
        ` 
      },
      { 
        id: 'c7-6', 
        title: '6. Processo de Apelação', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Uma justiça sem chance de defesa ou redenção é tirania. Moderadores são humanos, cometem erros, agem de cabeça quente ou interpretam contextos de forma errada.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Todo banimento permanente deve ter um caminho (mesmo que difícil) para apelação.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Teste do Aprendizado</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Ferramenta:</strong> Crie um formulário (Google Forms, Typeform) ou use um bot específico para apelações de ban.</li>
            <li><strong>As Perguntas Cruciais:</strong> Não pergunte apenas "Por que devemos te desbanir?". Pergunte primeiro: "Por que você foi banido?".</li>
            <li><strong>A Avaliação:</strong> Se o usuário responder "Fui banido por um admin abusivo sem motivo", ele não aprendeu nada e o banimento deve ser mantido. Se ele responder "Fui banido porque perdi a cabeça e xinguei um membro, entendo que quebrei a regra 3", ele demonstra autoconsciência e merece ter seu caso revisado. O apelo é o teste final de maturidade.</li>
          </ul>
        ` 
      },
      { 
        id: 'c7-7', 
        title: '7. Democracia vs Ditadura', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Comunidades online não são democracias. São, na melhor das hipóteses, ditaduras benevolentes. Se você deixar os usuários votarem em absolutamente tudo, eles votarão por anarquia, itens grátis ou linchamentos virtuais.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A liderança exige tomar decisões impopulares para a saúde a longo prazo do servidor.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Ouvir vs. Obedecer</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Valor do Feedback:</strong> Ouça a comunidade constantemente. Crie canais de sugestões e faça enquetes sobre mudanças estéticas ou eventos. O feedback é vital para saber onde o calo aperta.</li>
            <li><strong>A Decisão Final:</strong> No entanto, a decisão final sobre regras, punições e economia do servidor deve ser da liderança. Você tem a visão do todo e os dados do servidor; o usuário comum tem apenas a visão do próprio umbigo.</li>
            <li><strong>Transparência:</strong> Quando tomar uma decisão impopular, explique o <em>porquê</em>. A comunidade aceita melhor uma regra dura se entender a lógica por trás dela.</li>
          </ul>
        ` 
      },
      {
        id: 'c7-8',
        title: '8. Jurisdição (O que acontece na DM...)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Uma das questões éticas mais difíceis da moderação: Você deve punir alguém no seu servidor por algo que disseram em uma mensagem privada (DM) ou em outro servidor?
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Geralmente, a resposta é não. Você é o Guardião da Praça Pública, não a polícia global da internet.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Os Limites da Jurisdição</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Regra Geral:</strong> O que acontece fora do servidor, fica fora do servidor. Instrua os usuários a usarem a ferramenta de "Bloquear" do Discord para brigas pessoais em DMs.</li>
            <li><strong>As Exceções (Ameaças à Comunidade):</strong> A única vez em que você deve intervir em assuntos externos é quando eles ameaçam a segurança do seu servidor. Isso inclui: convites para raidar seu servidor organizados em DMs, assédio grave e contínuo contra seus membros (stalking), ou atividades ilegais.</li>
            <li><strong>Provas:</strong> Nunca aja com base em prints de DMs facilmente falsificáveis sem investigar o contexto.</li>
          </ul>
        `
      },
      {
        id: 'c7-9',
        title: '9. A Fronteira NSFW',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Conteúdo adulto (NSFW - Not Safe For Work) é nitroglicerina pura para a gestão de comunidades. As plataformas (Discord, Twitch, etc.) têm regras draconianas sobre isso.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se permitido, deve ser tratado com extremo cuidado. Se proibido, a tolerância deve ser zero.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Gerenciando o Risco</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Comunidades Mistas (Menores Presentes):</strong> Se o seu servidor permite menores de 18 anos, a política de tolerância zero para NSFW é a única opção segura. Uma única imagem ilegal postada e não apagada pode derrubar seu servidor inteiro e banir sua conta.</li>
            <li><strong>Canais Segregados:</strong> Se você optar por ter canais NSFW, eles devem ser marcados com a tag oficial do Discord (que exige confirmação de idade) e trancados atrás de cargos específicos que os usuários devem solicitar ativamente.</li>
            <li><strong>A Regra do Avatar:</strong> Avatares e banners de perfil são visíveis em todos os canais. Portanto, eles <em>nunca</em> podem ser NSFW, mesmo que o usuário só participe de canais adultos.</li>
          </ul>
        `
      },
      {
        id: 'c7-10',
        title: '10. Retroatividade',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Você percebeu um comportamento irritante que não estava nas regras e decidiu criar uma regra hoje proibindo-o. Você pode banir o usuário que fez aquilo ontem?
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Não. O princípio jurídico "Nullum crimen sine lege" (Não há crime sem lei anterior) se aplica perfeitamente aqui.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Implementando Novas Leis</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Daqui para Frente:</strong> Aplique regras apenas a partir do momento em que são anunciadas publicamente.</li>
            <li><strong>Período de Anistia:</strong> Quando fizer uma grande revisão nas regras, dê um período de "graça" ou anistia de alguns dias. Use avisos verbais em vez de punições severas para educar a comunidade sobre a mudança.</li>
            <li><strong>Aviso de Atualização:</strong> Use o recurso de "Onboarding" do Discord ou bots para forçar os usuários a aceitarem as novas regras antes de voltarem a falar no servidor.</li>
          </ul>
        `
      },
      {
        id: 'c7-11',
        title: '11. Barreiras de Linguagem',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Se o seu servidor atrai um público global, a barreira do idioma se tornará um pesadelo de moderação rapidamente.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Permitir todos os idiomas no chat geral torna a moderação impossível, pois sua staff não saberá se os usuários estão tendo uma conversa amigável ou trocando insultos pesados em um idioma desconhecido.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Organizando a Torre de Babel</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Idioma Oficial:</strong> Defina claramente o idioma oficial do servidor (ex: "Apenas Português e Inglês nos canais públicos").</li>
            <li><strong>Canais Regionais:</strong> Se houver uma grande demanda de uma nacionalidade específica (ex: muitos jogadores espanhóis), crie um canal específico para eles (#chat-espanol) e, idealmente, recrute um moderador bilíngue para cuidar dessa área.</li>
            <li><strong>Punição Educativa:</strong> Quando alguém falar o idioma errado no chat principal, não bana. Apenas avise: "Please use English in this channel" e direcione-os para o canal correto.</li>
          </ul>
        `
      },
      {
        id: 'c7-12',
        title: '12. A Cláusula do Pôr do Sol',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Regras envelhecem. A comunidade muda, o jogo muda, o Discord adiciona novas ferramentas. Aquela regra gigante sobre "não usar bugs da versão 1.2" é inútil quando o jogo está na versão 5.0.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Uma constituição cheia de regras mortas e irrelevantes diminui o respeito pelas regras que ainda importam.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Manutenção da Lei</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Revisão Semestral:</strong> Agende uma revisão completa das regras a cada 6 meses com sua equipe de moderação.</li>
            <li><strong>Remova o Entulho:</strong> Se uma regra não foi aplicada nenhuma vez no último ano, considere removê-la. Simplifique. Quanto mais curto for o canal de regras, maior a chance de alguém realmente lê-lo.</li>
            <li><strong>A Evolução do Servidor:</strong> A constituição deve ser um documento vivo, que cresce e se adapta junto com a comunidade que ele protege.</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A regra de ouro do recrutamento de moderação: Nunca dê poder a quem o deseja desesperadamente. Quem busca o cargo pelo status geralmente será um tirano.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O verdadeiro Guardião nasce do serviço, não da ambição.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Buscando o Jardineiro Silencioso</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Sinais Positivos:</strong> Procure aquele usuário que ajuda os novatos no chat de dúvidas sem ninguém pedir. Aquele que reporta bugs discretamente na DM da staff em vez de fazer escândalo no chat geral.</li>
            <li><strong>O Pacificador Natural:</strong> Observe quem consegue acalmar uma discussão acalorada sem ter nenhum cargo ou autoridade formal. Essa pessoa já é um moderador, só falta a tag.</li>
            <li><strong>Maturidade Emocional:</strong> Habilidade técnica (saber usar comandos de bot) se ensina em 10 minutos. Maturidade emocional, paciência e empatia não se ensinam. Contrate pelo caráter, treine a técnica.</li>
          </ul>
        `
      },
      { 
        id: 'c8-2', 
        title: '2. O Método Sombra', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Dar o "martelo de ban" imediatamente a um novo moderador é uma receita para o desastre. O poder inebria e a inexperiência causa injustiças.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A transição de usuário comum para autoridade deve ser gradual e supervisionada.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Treinamento Prático</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Fase de Observação:</strong> O "Trainee" não tem permissões de punição. Ele apenas acompanha um moderador sênior (sua "sombra"), lendo os logs de decisões e entendendo a lógica por trás de cada ação.</li>
            <li><strong>A Fase de Sugestão:</strong> O Trainee começa a sugerir punições no chat privado da staff. "Acho que esse usuário merece um mute de 1 hora por spam". O sênior avalia, corrige se necessário, e aplica a punição.</li>
            <li><strong>A Formatura:</strong> Só quando o julgamento do Trainee estiver perfeitamente alinhado com a filosofia da casa, ele ganha as permissões reais.</li>
          </ul>
        ` 
      },
      { 
        id: 'c8-3', 
        title: '3. Feedback e Erro', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Seu moderador vai errar. É uma certeza matemática. Ele vai banir alguém injustamente num dia em que estiver estressado, ou vai interpretar uma piada como ofensa.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Como você, o líder, reage a esse erro define o futuro desse moderador e da sua equipe.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arte da Correção</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Elogie em Público, Corrija no Privado:</strong> Nunca, sob nenhuma circunstância, dê bronca em um moderador no chat geral ou na frente de outros membros da staff. Isso destrói a confiança e cria moderadores passivos com medo de agir.</li>
            <li><strong>Foco no Aprendizado:</strong> Chame-o na DM. "Entendo por que você baniu o João, mas nossa política para esse caso é apenas um mute. Vamos reverter e conversar com ele".</li>
            <li><strong>Ensine a Pedir Desculpas:</strong> Um moderador que sabe pedir desculpas a um usuário por um erro ganha o triplo de respeito. A autoridade se recupera; a confiança quebrada pela arrogância, não.</li>
          </ul>
        ` 
      },
      { 
        id: 'c8-4', 
        title: '4. Rotação e Descanso', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Moderação voluntária é um trabalho emocionalmente exaustivo e não remunerado. Lidar com o pior lado da internet todos os dias causa "Burnout" (esgotamento) rápido.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se você não cuidar da saúde mental da sua equipe, você perderá seus melhores talentos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Protegendo os Protetores</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Escalas de Trabalho:</strong> Não espere que seus moderadores estejam online 24/7. Defina "turnos" informais ou garanta que a carga seja dividida.</li>
            <li><strong>Férias Forçadas:</strong> Se você notar um moderador ficando irritadiço ou punindo com muita severidade, force um descanso. "Tire o fim de semana de folga, não abra o canal de denúncias, vá jogar algo diferente".</li>
            <li><strong>A Regra do Desligamento:</strong> Incentive a equipe a mutar o servidor quando estiverem focados em suas vidas reais. O servidor sobrevive algumas horas sem eles; a saúde mental deles não sobrevive à vigilância constante.</li>
          </ul>
        ` 
      },
      { 
        id: 'c8-5', 
        title: '5. O Momento da Demissão', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O momento mais difícil da liderança. Às vezes, um bom amigo se revela um péssimo moderador. Ele pode se tornar inativo, parcial, abusivo ou simplesmente perder o interesse.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Manter um moderador ruim por pena destrói a moral do resto da equipe e a confiança da comunidade.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Demissão Honrosa</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Seja Direto e Gentil:</strong> Não enrole. "João, você é importante para a comunidade e um ótimo amigo, mas o cargo exige presença constante e você não está podendo dar isso agora. Vou remover suas permissões para tirar esse peso de você".</li>
            <li><strong>Não Humilhe:</strong> Nunca faça um espetáculo da demissão. Faça no privado.</li>
            <li><strong>A Porta Aberta:</strong> Permita que ele volte a ser um usuário normal e amado. Se a demissão for por inatividade, deixe claro que ele pode tentar voltar quando tiver mais tempo.</li>
          </ul>
        ` 
      },
      { 
        id: 'c8-6', 
        title: '6. Hierarquia vs Círculo', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Muitos servidores criam hierarquias complexas: Helper -> Trial Mod -> Junior Mod -> Mod -> Senior Mod -> Head Admin -> Co-Owner.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Isso é um erro terrível. Cria burocracia, política interna e "fome de promoção". As pessoas começam a trabalhar pela tag, não pela comunidade.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Estrutura Plana</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Simplifique:</strong> Mantenha a estrutura o mais horizontal possível. Trainee (aprendendo), Moderador (pleno) e Administrador (acesso técnico ao servidor/bot).</li>
            <li><strong>Foco no Trabalho:</strong> Quando todos têm o mesmo cargo, o foco volta a ser o trabalho de moderação e não a competição por quem tem a cor mais brilhante no nome.</li>
            <li><strong>Liderança Natural:</strong> Em uma estrutura plana, os verdadeiros líderes (Senior Mods) emergem naturalmente pelo respeito que conquistam da equipe, não por uma tag artificial.</li>
          </ul>
        ` 
      },
      { 
        id: 'c8-7', 
        title: '7. Os Ex-Guardiões', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Crie um cargo de "Veterano" ou "Aposentado" para ex-membros da staff que saíram em bons termos. Eles deram seu tempo, sangue e sanidade pela comunidade.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Eles são os anciões da tribo. Mesmo sem o poder de banir, a palavra deles tem um peso enorme.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Honrando a História</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Símbolo de Respeito:</strong> Um cargo cosmético (com uma cor distinta) mostra à comunidade atual que o trabalho duro é reconhecido e lembrado, mesmo depois que a pessoa "pendura as chuteiras".</li>
            <li><strong>O Conselho dos Sábios:</strong> Mantenha um canal privado onde a staff atual pode pedir conselhos aos veteranos. Eles já passaram por crises semelhantes e têm uma perspectiva valiosa e menos emocional.</li>
            <li><strong>A Porta Giratória:</strong> Tratar bem os ex-guardiões garante que, se um dia eles tiverem tempo novamente, voltarão felizes para ajudar a equipe.</li>
          </ul>
        ` 
      },
      {
        id: 'c8-8',
        title: '8. Viés Inconsciente',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Todos nós temos preconceitos. Treine sua equipe para reconhecê-los. "Estou punindo este usuário mais severamente porque ele escreve mal? Ou porque o nome dele me irrita?".
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A justiça exige autoanálise constante. O Guardião deve limpar suas lentes antes de julgar o mundo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Calibrando a Bússola Moral</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Teste da Troca de Nomes:</strong> Ensine a equipe a fazer este exercício mental: "Se o meu melhor amigo no servidor tivesse postado exatamente a mesma mensagem, eu daria o mesmo ban?". Se a resposta for não, há um viés operando.</li>
            <li><strong>Revisão por Pares:</strong> Casos complexos ou punições permanentes (bans) nunca devem ser decididos por uma única pessoa. Exija que pelo menos dois moderadores concordem antes de puxar o gatilho.</li>
            <li><strong>O "Amigo" Infrator:</strong> A regra de ouro do viés: Um moderador <em>nunca</em> deve julgar ou punir um usuário com quem tem uma relação pessoal (amizade próxima ou inimizade declarada). O caso deve ser repassado.</li>
          </ul>
        `
      },
      {
        id: 'c8-9',
        title: '9. Testes de Estresse',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Antes de promover alguém, veja como reagem sob pressão. Simule um cenário de crise. Coloque-os para lidar com o usuário mais chato e argumentativo do servidor.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Habilidade técnica se ensina em um tutorial de 5 minutos. Paciência, resiliência e caráter, não.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Descobrindo o Ponto de Quebra</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Cenário do Troll:</strong> Observe como o candidato lida com provocações sutis. Ele perde a calma e ameaça banir imediatamente? Ou ele mantém a postura profissional e aplica as regras friamente?</li>
            <li><strong>A Crise Simulada:</strong> Crie um problema falso no chat da staff (ex: "Alguém vazou prints nossos!"). Avalie quem entra em pânico e quem foca em encontrar a solução e acalmar os ânimos.</li>
            <li><strong>O Valor da Frieza:</strong> Um moderador que não se deixa levar pela emoção vale por dez moderadores que conhecem todos os comandos do bot de cor, mas explodem na primeira ofensa.</li>
          </ul>
        `
      },
      {
        id: 'c8-10',
        title: '10. Canais de Desabafo',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A staff precisa de um "Vestiário". Um canal privado, longe dos olhos da comunidade, onde podem xingar, reclamar, chorar e rir do absurdo da situação sem serem julgados.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O que acontece no vestiário, fica no vestiário. Permitir essa ventilação de pressão evita que ela exploda em cima dos usuários.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Válvula de Escape</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Segurança Psicológica:</strong> A equipe deve sentir que pode dizer "Eu não aguento mais o usuário X" sem ser repreendida por falta de profissionalismo. É um espaço seguro para emoções cruas.</li>
            <li><strong>Humor Negro como Defesa:</strong> Muitas vezes, a equipe usará humor sarcástico ou negro para lidar com o estresse de ver o pior da internet. Entenda isso como um mecanismo de defesa, não como maldade.</li>
            <li><strong>O Limite do Vestiário:</strong> A única regra do vestiário é que o desabafo não pode se transformar em um plano de vingança real contra um usuário. A ação oficial deve ser sempre profissional.</li>
          </ul>
        `
      },
      {
        id: 'c8-11',
        title: '11. A Moeda da Gratidão',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Se você não pode pagar um salário financeiro, pague em propósito, reconhecimento e status. Dê crédito público pelas vitórias.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A maior recompensa para um voluntário é sentir que seu trabalho importa e é valorizado pela liderança.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Recompensando o Voluntariado</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Elogios Específicos:</strong> Não diga apenas "bom trabalho". Diga "A forma como você desescalou aquela briga ontem à noite salvou o servidor de um drama gigante. Obrigado".</li>
            <li><strong>Perks Exclusivos:</strong> Dê à staff acesso a canais VIP, emojis personalizados, cores de nome exclusivas ou até mesmo pequenos presentes (jogos na Steam, Nitro) se o servidor gerar alguma receita.</li>
            <li><strong>O Escudo do Líder:</strong> A maior prova de gratidão que um líder pode dar é defender sua equipe publicamente quando a comunidade os ataca por aplicarem uma regra impopular.</li>
          </ul>
        `
      },
      {
        id: 'c8-12',
        title: '12. O Plano de Sucessão',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            E se você, o dono do servidor, ficar sem internet por um mês? E se você decidir focar nos estudos? O servidor morre junto com a sua ausência?
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Um verdadeiro líder prepara seu substituto. A prova final de sucesso de um Guardião é tornar-se desnecessário.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Garantindo o Legado</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Descentralização do Conhecimento:</strong> Se apenas você sabe como configurar o bot de segurança, você é um ponto único de falha. Documente os processos e treine seus administradores.</li>
            <li><strong>O Braço Direito:</strong> Identifique e cultive um "Co-Owner" ou Administrador Chefe em quem você confia cegamente para tomar decisões executivas na sua ausência.</li>
            <li><strong>A Transferência de Poder:</strong> Se chegar o dia em que você precisar abandonar o projeto definitivamente, passe a coroa (a posse do servidor) com dignidade para o seu sucessor, em vez de deixar a comunidade apodrecer sem liderança.</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            O sistema de permissões do Discord é como uma cachoeira: o que acontece no topo flui para baixo, mas com uma regra de ouro: o cargo mais alto na lista do usuário sempre vence conflitos de permissão global.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            O erro mais comum e perigoso de um novato é distribuir a permissão de "Administrador" (a permissão suprema que ignora todas as outras regras) como se fosse doce. Nunca, jamais, dê essa permissão para bots de música, bots de diversão ou para moderadores juniores. Se um bot com "Administrador" for hackeado, seu servidor será deletado em 5 segundos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Regra do Menor Privilégio</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Aplique o princípio de segurança da informação: dê a cada cargo apenas as permissões estritamente necessárias para que ele cumpra sua função.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Membros Comuns:</strong> Ler, Escrever, Conectar na Voz. Desative "Mencionar @everyone" e "Gerenciar Mensagens".</li>
            <li><strong>Moderadores:</strong> Expulsar, Banir, Gerenciar Mensagens, Mover Membros. Não precisam de "Gerenciar Servidor" ou "Gerenciar Cargos".</li>
            <li><strong>Bots:</strong> Dê apenas o que o bot pede. Se um bot de música pede "Banir Membros", desconfie e negue.</li>
          </ul>
          <p class="text-lg leading-relaxed">
            Configure as permissões canal por canal apenas quando houver exceções. A melhor prática é configurar as permissões nas <strong>Categorias</strong> e deixar os canais dentro dela sincronizados. É infinitamente mais fácil auditar e gerenciar 5 categorias do que 50 canais individuais.
          </p>
        `
      },
      { 
        id: 'c9-2', 
        title: '2. O Canal de Logs', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            O canal mais importante do seu servidor é um canal que 99% dos usuários nunca verão: o canal de Logs de Moderação. Ele é a caixa-preta do seu avião.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            O Discord possui um "Registro de Auditoria" nativo, mas ele é limitado e difícil de ler rapidamente. Para uma moderação eficaz, você precisa de um bot dedicado (como Dyno, Carl-bot ou ProBot) configurado para registrar cada respiração que acontece no servidor em um canal de texto privado para a staff.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Que Deve Ser Registrado?</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Mensagens Apagadas e Editadas:</strong> Essencial. Trolls adoram xingar e apagar a mensagem 2 segundos depois para se fingirem de inocentes. O log captura o fantasma.</li>
            <li><strong>Entradas e Saídas (Join/Leave):</strong> Para rastrear raids ou usuários que entram, fazem spam e saem rapidamente (hit-and-run).</li>
            <li><strong>Mudanças de Apelido (Nickname):</strong> Para rastrear quem está tentando se passar por um Admin ou usando nomes ofensivos.</li>
            <li><strong>Ações de Moderação:</strong> Quem baniu quem? Quem mutou quem? Isso evita que moderadores abusem do poder nas sombras.</li>
          </ul>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "Quando uma crise estoura, a memória humana falha. O log é frio, exato e imparcial. Ele é o seu melhor amigo."
            </p>
          </div>
        ` 
      },
      { 
        id: 'c9-3', 
        title: '3. Onboarding (A Primeira Impressão)', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            A primeira impressão que um usuário tem ao entrar no seu servidor define o comportamento dele pelos próximos meses. Se ele entra e vê 40 canais diferentes, 5 pings de @everyone e um bot gritando regras em caixa alta, ele vai se sentir sobrecarregado e irritado.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Um usuário confuso é um usuário propenso a quebrar regras por acidente ou a sair imediatamente. A solução é usar a ferramenta nativa de <strong>Onboarding (Integração)</strong> do Discord.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Jornada do Novo Membro</h3>
          <p class="mb-6 text-lg leading-relaxed">
            O Onboarding permite que você crie um questionário simples antes de o usuário ver o servidor.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Pergunte o que ele quer ver:</strong> "Você joga CS2 ou Valorant?". Baseado na resposta, ele ganha um cargo que libera apenas os canais daquele jogo.</li>
            <li><strong>Pergunte sobre notificações:</strong> "Quer ser avisado sobre torneios?". Isso evita que você precise usar @everyone, usando pings de cargos específicos.</li>
            <li><strong>Esconda a bagunça:</strong> Configure o servidor para que, por padrão, o usuário veja apenas 3 ou 4 canais essenciais (Regras, Anúncios, Chat Geral). O resto ele desbloqueia se quiser.</li>
          </ul>
          <p class="text-lg leading-relaxed">
            Um servidor limpo e personalizado transmite profissionalismo. E as pessoas tendem a respeitar mais os lugares que parecem profissionais.
          </p>
        ` 
      },
      { 
        id: 'c9-4', 
        title: '4. Webhooks e Segurança', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Webhooks são ferramentas incríveis. Eles permitem que serviços externos (como YouTube, Twitter, GitHub ou seu próprio site) enviem mensagens formatadas e bonitas diretamente para um canal do Discord, sem precisar programar um bot inteiro.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            No entanto, eles são uma das maiores falhas de segurança em servidores mal configurados.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A URL é a Chave do Cofre</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Quando você cria um Webhook, o Discord gera uma URL única. Qualquer pessoa ou script que tenha essa URL pode enviar mensagens para aquele canal, com o nome e a foto de perfil que quiser. Não há verificação de senha.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Nunca exponha a URL:</strong> Trate a URL do Webhook como a senha do seu banco. Nunca a cole no chat, nem mesmo para testar.</li>
            <li><strong>Cuidado com canais públicos:</strong> Se você criar um Webhook em um canal onde todos podem ler, e um bot malicioso estiver varrendo a API do Discord, ele pode capturar a URL e começar a postar spam de phishing no seu canal de anúncios.</li>
            <li><strong>Auditoria:</strong> Verifique regularmente a aba "Integrações" nas configurações do servidor e delete Webhooks antigos ou que você não reconhece.</li>
          </ul>
        ` 
      },
      { 
        id: 'c9-5', 
        title: '5. Sistema de Tickets', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A regra de ouro do suporte comunitário: <strong>Não faça suporte via Mensagem Direta (DM).</strong>
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            DMs são terra sem lei. Não há logs do servidor, não há testemunhas e não há como outros moderadores ajudarem. O usuário pode te insultar, apagar a mensagem e depois dizer que você o tratou mal. Além disso, centralizar o suporte na sua DM vai destruir sua saúde mental e sua caixa de entrada.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Profissionalizando o Atendimento</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Use bots de Tickets (como Ticket Tool ou Ticketmaster). Eles funcionam assim:
          </p>
          <ol class="list-decimal pl-6 space-y-3 text-zinc-300 mb-6">
            <li>O usuário clica em um botão em um canal público (ex: #suporte).</li>
            <li>O bot cria um canal de texto temporário e privado, visível apenas para o usuário e para o cargo de Staff.</li>
            <li>Qualquer moderador online pode assumir o caso.</li>
            <li>Quando o problema é resolvido, o canal é fechado e o bot gera um log (transcrição) de toda a conversa, salvando-o no seu canal de Logs.</li>
          </ol>
          <p class="text-lg leading-relaxed">
            Isso protege a staff de assédio em DMs, distribui a carga de trabalho e garante que todas as interações oficiais estejam documentadas.
          </p>
        ` 
      },
      { 
        id: 'c9-6', 
        title: '6. Segurança de Voz', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Canais de texto são fáceis de moderar porque deixam rastros. Canais de voz são o faroeste. Raids de voz — onde grupos entram tocando áudios estourados, gritando ofensas ou gemidões — podem destruir a paz do servidor em segundos e são difíceis de provar depois que acontecem.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Você precisa construir defesas ativas e passivas para os canais de voz.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Táticas de Defesa</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Barreiras de Entrada:</strong> Não permita que contas criadas há 5 minutos entrem na voz. Exija um cargo que só é obtido após 10 minutos no servidor, ou exija "Verificação de Celular" (nível de segurança Mais Alto do Discord).</li>
            <li><strong>O Botão de Pânico:</strong> Tenha um bot de moderação configurado com um comando rápido (ex: \`!muteall\`) que tire a permissão de falar de todos no canal instantaneamente, exceto da staff.</li>
            <li><strong>Priority Speaker (Voz Prioritária):</strong> Em canais de eventos ou reuniões, dê essa permissão apenas ao host. Quando ele fala, o volume de todos os outros é reduzido automaticamente (ducking).</li>
            <li><strong>Sem Vídeo para Novatos:</strong> Desative a permissão de "Vídeo" e "Compartilhar Tela" para o cargo @everyone. Libere apenas para membros verificados. Isso evita transmissões de conteúdo chocante (gore/NSFW).</li>
          </ul>
        ` 
      },
      { 
        id: 'c9-7', 
        title: '7. Identidade Visual (Emojis)', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Um servidor de Discord sem emojis customizados é como um país sem bandeira. Os emojis são a linguagem visual da sua comunidade, a forma mais rápida de expressar cultura e piadas internas.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Eles criam um senso de pertencimento imediato. Quando um novato entende quando usar o emoji de "pepe_suando" ou o emoji com o rosto do dono do servidor distorcido, ele se sente parte da tribo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arte da Reação</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Emojis Utilitários:</strong> Tenha emojis claros de "Certo" (✅), "Errado" (❌), "Aviso" (⚠️) para usar em anúncios e regras.</li>
            <li><strong>Emojis de Engajamento:</strong> Crie emojis que as pessoas queiram usar para reagir a mensagens (risadas, surpresa, "F" para respeito).</li>
            <li><strong>Stickers:</strong> Se o seu servidor tiver boosts suficientes, use stickers para reações maiores e mais expressivas.</li>
          </ul>
          <p class="text-lg leading-relaxed">
            Dica de ouro: Se um meme nascer organicamente no chat geral, transforme-o em emoji no mesmo dia. Isso mostra que a staff está prestando atenção e valoriza a cultura criada pelos usuários.
          </p>
        ` 
      },
      {
        id: 'c9-8',
        title: '8. Canais de Fórum',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            O chat linear (o canal de texto comum) é excelente para conversas rápidas e caóticas. Mas é absolutamente terrível para discussões profundas, suporte técnico, sugestões ou tutoriais.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Se alguém faz uma pergunta complexa no chat geral, a resposta se perde em 5 minutos sob uma avalanche de memes. É aqui que entram os <strong>Forum Channels (Canais de Fórum)</strong>.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Organizando o Caos</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Canais de fórum organizam as conversas em tópicos (threads) persistentes, como o Reddit.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Tags Obrigatórias:</strong> Force os usuários a categorizar seus posts (ex: [Bug], [Sugestão], [Dúvida]). Isso facilita a filtragem.</li>
            <li><strong>Resolução:</strong> Quando uma dúvida for respondida, a staff pode "trancar" o post e marcá-lo como resolvido.</li>
            <li><strong>Conhecimento Indexado:</strong> Com o tempo, seu canal de Fórum se torna uma enciclopédia pesquisável. A mesma pergunta não precisará ser respondida 10 vezes.</li>
          </ul>
        `
      },
      {
        id: 'c9-9',
        title: '9. Canais de Anúncio',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            A flag "Announcement Channel" (Canal de Anúncios) transforma um canal de texto comum em um megafone inter-servidores. Quando você publica uma mensagem nele, os usuários podem "Seguir" o canal para receber essas mensagens diretamente em seus próprios servidores.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            É uma ferramenta incrivelmente poderosa de marketing e retenção, mas que exige responsabilidade.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Peso do Botão "Publicar"</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Cada vez que você clica em "Publicar", você está enviando um ping para milhares de pessoas em dezenas de outros servidores.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Use com Parcimônia:</strong> Publique apenas atualizações maiores (wipes, novos torneios, mudanças drásticas de regras).</li>
            <li><strong>Não Publique Bobagens:</strong> Se você usar o canal de anúncios para postar um meme ou dar "bom dia", os administradores de outros servidores vão parar de seguir o seu canal imediatamente por causa do spam.</li>
            <li><strong>Formatação Impecável:</strong> Uma mensagem publicada deve ser visualmente perfeita. Use negrito, emojis e links claros.</li>
          </ul>
        `
      },
      {
        id: 'c9-10',
        title: '10. Integrações (Connections)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            O Discord não existe no vácuo. Ele é o hub central que conecta todas as outras plataformas da sua comunidade. Usar as "Integrações" nativas automatiza o trabalho e aumenta a segurança.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Conectando Mundos</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Twitch/YouTube:</strong> Vincule sua conta para que o Discord crie automaticamente um cargo para seus "Subs" ou "Membros". Isso libera canais exclusivos sem que você precise dar o cargo manualmente.</li>
            <li><strong>Patreon:</strong> Sincronize os tiers de doação com cargos no servidor, automatizando a entrega de recompensas.</li>
            <li><strong>Barreira de Segurança:</strong> Exigir que o usuário tenha uma conta da Steam, Twitter ou Xbox vinculada ao perfil do Discord para ganhar acesso ao servidor é uma das melhores defesas contra bots de spam. Um bot cria uma conta no Discord em segundos, mas dificilmente terá uma conta Steam nível 10 vinculada.</li>
          </ul>
        `
      },
      {
        id: 'c9-11',
        title: '11. Stage Channels',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Para eventos comunitários, podcasts, entrevistas ou reuniões gerais (Town Halls), os canais de voz normais se tornam um caos incontrolável se houver mais de 20 pessoas. O <strong>Stage Channel (Palco)</strong> resolve isso.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            O Stage divide a sala claramente entre "Oradores" (no palco) e "Plateia" (mutados por padrão).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Púlpito do Guardião</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Use o Stage para humanizar a sua staff. Faça sessões de perguntas e respostas (Q&A) ao vivo.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Levantar a Mão:</strong> Os membros da plateia podem "levantar a mão" virtualmente. Os moderadores aprovam e os sobem ao palco para falar.</li>
            <li><strong>Música de Fundo:</strong> Use um bot de música no palco tocando algo relaxante (lo-fi) enquanto as pessoas entram, antes do evento começar.</li>
            <li><strong>Gravação:</strong> Se o servidor tiver boosts, você pode gravar o áudio do Stage nativamente para postar depois.</li>
          </ul>
        `
      },
      {
        id: 'c9-12',
        title: '12. Server Insights',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            A intuição é boa, mas os dados são melhores. Se o seu servidor for uma Comunidade (Community Server) com mais de 500 membros, você terá acesso à aba <strong>Server Insights (Análises do Servidor)</strong>.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Muitos donos de servidor ignoram essa aba. Isso é pilotar um avião de olhos vendados.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Dados Vencem Achismos</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Horários de Pico:</strong> Veja em que dias e horários seu servidor é mais ativo. Agende torneios ou anúncios importantes para esses momentos.</li>
            <li><strong>Retenção de Novos Membros:</strong> Descubra se as pessoas estão saindo nos primeiros 5 minutos. Se sim, seu Onboarding está ruim ou há toxicidade na porta de entrada.</li>
            <li><strong>Canais Fantasmas:</strong> Veja quais canais têm zero mensagens na última semana. Não tenha pena: delete-os. Um servidor com poucos canais altamente ativos parece muito mais vivo do que um servidor com 50 canais mortos. Mantenha a casa limpa.</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A tentação de instalar 100 plugins é grande, especialmente quando você descobre o poder de moldar o jogo à sua vontade. "Olha, um plugin de chapéus! Um de rastro de fogo! Um de música no lobby!"
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            No entanto, cada plugin adicionado é um passo para longe da experiência original (Vanilla) que atraiu os jogadores em primeiro lugar.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Filosofia do "Menos é Mais"</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Custo Oculto:</strong> Cada plugin é um ponto de falha potencial. Cada plugin adiciona carga à CPU e memória do servidor. Cada plugin dilui a identidade do seu servidor em um mar de distrações.</li>
            <li><strong>A Moderação Invisível:</strong> O melhor servidor modded é aquele que parece "nativo", mas possui superpoderes sutis de administração nos bastidores (logs avançados, anti-cheat silencioso, ferramentas de rollback).</li>
            <li><strong>O Foco na Jogabilidade:</strong> Antes de instalar um plugin, pergunte-se: "Isso melhora o loop principal do jogo ou é apenas um truque barato que os jogadores vão usar por 5 minutos e esquecer?".</li>
          </ul>
        `
      },
      { 
        id: 'c10-2', 
        title: '2. O Ciclo de Updates', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Jogos online são organismos vivos. Eles atualizam constantemente (Rust toda primeira quinta do mês, CS2 aleatoriamente). E quando o jogo atualiza, a fundação sobre a qual seus plugins foram construídos muda.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Plugins quebram. Se o seu servidor depende de 50 plugins para funcionar (ex: um modo de jogo totalmente customizado), ele morrerá a cada update oficial.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Sobrevivendo ao Dia do Patch</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Servidor de Testes (Staging):</strong> Nunca, sob nenhuma circunstância, aplique updates do jogo ou de plugins diretamente no servidor de produção (onde os jogadores estão). Tenha um servidor local ou barato apenas para testar se a "cola" dos plugins ainda segura a estrutura após o update.</li>
            <li><strong>Dependências Críticas:</strong> Identifique quais plugins são vitais (ex: sistema de login, economia) e quais são cosméticos. Se um plugin cosmético quebrar, desative-o e abra o servidor. Se um crítico quebrar, você terá que esperar o desenvolvedor do plugin lançar uma correção.</li>
            <li><strong>A Regra das 24 Horas:</strong> Em grandes atualizações de jogos, evite atualizar seu servidor nas primeiras 24 horas, a menos que seja forçado. Deixe que outros donos de servidores encontrem os bugs críticos primeiro.</li>
          </ul>
        ` 
      },
      { 
        id: 'c10-3', 
        title: '3. Economia e Pay-to-Win', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Monetizar o servidor é necessário para pagar os custos de hospedagem (host), proteção DDoS e talvez o seu tempo. Mas a forma como você monetiza define a alma da sua comunidade.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Vender vantagens injustas (armas exclusivas, kits de recursos absurdos, desbanimentos) destrói a integridade competitiva do jogo.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Ética da Monetização</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Morte pelo P2W:</strong> A chama do jogador gratuito se apaga no momento em que ele percebe que perdeu uma batalha não por falta de habilidade, mas porque o oponente abriu a carteira. Sem jogadores gratuitos (o "conteúdo" do servidor), os VIPs não têm com quem jogar e o servidor morre.</li>
            <li><strong>O Que Vender:</strong> Venda cosméticos (skins, chapéus, cores de nome no chat). Venda conveniência (fila preferencial para entrar no servidor cheio, slots extras em inventários virtuais que não afetam o combate).</li>
            <li><strong>O Apoio Genuíno:</strong> Construa uma comunidade tão boa que os jogadores comprem o VIP não pela vantagem, mas para garantir que o servidor continue existindo no mês que vem.</li>
          </ul>
        ` 
      },
      { 
        id: 'c10-4', 
        title: '4. Open Source e Confiança', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O ecossistema de plugins é vasto e, muitas vezes, não regulamentado. Instalar um plugin é literalmente dar a um código de terceiros acesso total ao "cérebro" do seu servidor.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Cuidado extremo com plugins compilados (.dll, .jar) baixados de fóruns obscuros ou Discord de desconhecidos.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Segurança do Templo</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Risco de Backdoors:</strong> Um plugin malicioso pode conter um "backdoor" (porta dos fundos) que dá permissão de Administrador (OP) silenciosamente ao criador do plugin quando ele entra no seu servidor, permitindo que ele destrua tudo.</li>
            <li><strong>A Força do Open Source:</strong> Sempre que possível, priorize plugins de código aberto (Open Source) hospedados no GitHub ou em comunidades renomadas (AlliedModders, SpigotMC, uMod). O código aberto permite que centenas de outros desenvolvedores auditem o código em busca de malícias.</li>
            <li><strong>A Regra da Reputação:</strong> Se você precisar usar um plugin fechado/pago, compre apenas de criadores com reputação estabelecida e milhares de downloads verificados.</li>
          </ul>
        ` 
      },
      { 
        id: 'c10-5', 
        title: '5. Configuração é Arte', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O trabalho de um administrador de servidor não termina quando ele arrasta o arquivo do plugin para a pasta <code>/plugins</code>. Na verdade, baixar o plugin é apenas 10% do trabalho.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Configurar os arquivos <code>.json</code>, <code>.yml</code> ou <code>.cfg</code> é onde a verdadeira mágica acontece. Não use os valores padrão (default).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Personalização como Diferencial</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Tradução e Tom de Voz:</strong> Traduza todas as mensagens do plugin para o idioma da sua comunidade. Mais do que isso, adapte o tom. Em vez do padrão "You do not have permission", use algo que combine com o tema do seu servidor (ex: "Os deuses negaram seu pedido, mortal").</li>
            <li><strong>Balanceamento Fino:</strong> Ajuste os tempos de recarga (cooldowns), os preços na economia, as chances de drop. O padrão do desenvolvedor do plugin raramente se encaixa perfeitamente na economia específica do seu servidor.</li>
            <li><strong>A Marca do Cuidado:</strong> Um servidor com mensagens em inglês padrão, com a formatação original do plugin, grita "preguiça". A personalização detalhada mostra carinho e profissionalismo, características que retêm jogadores.</li>
          </ul>
        ` 
      },
      { 
        id: 'c10-6', 
        title: '6. Anti-Cheat Server-side', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            Sistemas anti-cheat nativos (como VAC ou EasyAntiCheat) operam no cliente (no PC do jogador). Eles procuram por assinaturas de programas conhecidos. O problema é que cheats privados e novos burlam essas defesas facilmente.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            A sua segunda linha de defesa deve ser um <strong>Anti-Cheat Server-side</strong> (baseado no servidor).
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Matemática Não Mente</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Plugins server-side (como GrimAC no Minecraft ou Little Anti-Cheat no Rust) não procuram por programas no PC do usuário. Eles analisam a <em>física</em> e a <em>matemática</em> do que o jogador está fazendo dentro do jogo.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Movimento Impossível:</strong> O jogador se moveu 50 blocos em 1 segundo? A física do jogo diz que a velocidade máxima é 10. O servidor detecta a anomalia (Speedhack/Fly) e cancela o movimento (rubberbanding).</li>
            <li><strong>Ângulos de Visão (Aimbot):</strong> O jogador virou a câmera 180 graus em 1 milissegundo e acertou um tiro na cabeça repetidas vezes? O servidor registra o padrão robótico.</li>
            <li><strong>O Perigo dos Falsos Positivos:</strong> O maior desafio do server-side é o lag (ping alto). Um jogador lagado pode parecer estar se teletransportando. <strong>Regra de ouro:</strong> Configure o anti-cheat server-side para <em>notificar</em> a staff silenciosamente em caso de suspeita, e não para banir automaticamente, a menos que a violação seja matematicamente impossível de ser lag (ex: voar por 10 segundos).</li>
          </ul>
        ` 
      },
      { 
        id: 'c10-7', 
        title: '7. Debugging de Conflitos', 
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            O servidor crashou. O console está cuspindo linhas vermelhas de erro. O log diz "Segmentation Fault" ou "NullPointerException". Bem-vindo à verdadeira vida de um administrador de servidores.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            Quando você tem 40 plugins instalados, descobrir qual deles está causando o crash depois de uma atualização do jogo é como procurar uma agulha em um palheiro em chamas.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Técnica da Bissecção (Busca Binária)</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Não tente ler milhares de linhas de código se você não for programador. Use a lógica:
          </p>
          <ol class="list-decimal pl-6 space-y-3 text-zinc-300 mb-6">
            <li>Faça um backup do servidor (sempre).</li>
            <li>Remova <strong>metade</strong> dos plugins (ex: do 1 ao 20). Reinicie o servidor.</li>
            <li>O erro parou? Se sim, o plugin culpado está na metade que você removeu. Se o erro continuar, o culpado está na metade que ficou (do 21 ao 40).</li>
            <li>Pegue a metade que contém o erro e divida novamente (ex: remova 10 plugins).</li>
            <li>Repita o processo até isolar o único plugin que está quebrando o servidor.</li>
          </ol>
          <p class="text-lg leading-relaxed">
            Paciência e método são suas maiores ferramentas técnicas. Nunca faça alterações "no chute".
          </p>
        ` 
      },
      {
        id: 'c10-8',
        title: '8. Poluição Visual (HUDs)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            A interface do usuário (UI) e o Heads-Up Display (HUD) originais de um jogo foram projetados por profissionais de design para serem imersivos e informativos na medida certa.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            O erro mais amador que um dono de servidor pode cometer é instalar dezenas de plugins que vomitam texto na tela do jogador.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Morte da Imersão</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Efeito Las Vegas:</strong> Um letreiro gigante de "BEM-VINDO" piscando em neon no meio da tela, um relógio no canto superior direito, um contador de FPS no canto esquerdo, notificações de dano voando a cada tiro e o link do Discord rodando no rodapé. Isso não é um jogo, é um outdoor.</li>
            <li><strong>Fadiga Visual:</strong> O jogador quer ver o jogo, os inimigos e o ambiente. Poluição visual causa cansaço e irritação.</li>
            <li><strong>A Regra do "Menos é Mais":</strong> Se uma informação não for absolutamente crítica para a sobrevivência ou para o objetivo imediato do jogador nos próximos 5 segundos, ela não deve estar permanentemente na tela. Use o chat de texto para informações secundárias ou crie menus que o jogador abre apenas quando quiser (ex: \`/stats\`).</li>
          </ul>
        `
      },
      {
        id: 'c10-9',
        title: '9. Sistemas de Permissão (Permissions)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Quase todos os plugins complexos utilizam um sistema de "nodes" (nós) de permissão. Um node é uma string de texto que representa uma ação específica, como <code>essentials.teleport</code> ou <code>admin.ban</code>.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Tentar gerenciar essas permissões dando nodes individuais para cada jogador é o caminho mais rápido para a loucura administrativa e para brechas de segurança.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arquitetura de Grupos</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Você deve usar um plugin gerenciador de permissões (como LuckPerms no Minecraft ou Oxide Groups no Rust) para criar uma hierarquia lógica e escalável.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Crie Grupos (Roles):</strong> Defina grupos claros e com propósitos específicos: <code>Membro</code>, <code>VIP_Prata</code>, <code>VIP_Ouro</code>, <code>Ajudante</code>, <code>Moderador</code>, <code>Admin</code>.</li>
            <li><strong>Atribua Nodes aos Grupos:</strong> Dê a permissão <code>essentials.fly</code> apenas para o grupo <code>VIP_Ouro</code>. Dê <code>admin.ban</code> apenas para o grupo <code>Moderador</code>. Nunca dê permissões globais (como <code>*</code>) para ninguém além do dono.</li>
            <li><strong>Herança (Inheritance):</strong> Configure os grupos para herdarem permissões. O <code>Moderador</code> deve herdar todas as permissões do <code>VIP_Ouro</code>, que herda todas do <code>Membro</code>. Assim, você não precisa reescrever as permissões básicas para a staff ou VIPs superiores.</li>
            <li><strong>Atribuição Dinâmica:</strong> Quando alguém comprar VIP, o sistema da loja (como Tebex ou CraftingStore) deve simplesmente movê-lo do grupo <code>Membro</code> para o <code>VIP_Ouro</code> temporariamente. Ele ganha todas as permissões instantaneamente e as perde quando o tempo expirar.</li>
          </ul>
        `
      },
      {
        id: 'c10-10',
        title: '10. Conectividade de Dados (MySQL)',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Por padrão, a maioria dos plugins salva seus dados (dinheiro dos jogadores, inventários, bans, tempo de jogo) em arquivos planos locais, como <code>.txt</code>, <code>.json</code> ou <code>.yml</code>, dentro da pasta do servidor.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Isso é aceitável para um servidor pequeno com 10 amigos, mas é um pesadelo de performance, segurança e escalabilidade para servidores profissionais.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Evolução para Bancos de Dados</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Sempre que um plugin oferecer a opção de usar um banco de dados externo (MySQL, MariaDB, PostgreSQL), use-a.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Performance e Concorrência:</strong> Bancos de dados são softwares dedicados e otimizados para ler e escrever milhares de linhas por segundo simultaneamente. Arquivos <code>.json</code> grandes causam lag no servidor (travadinhas) toda vez que o plugin precisa salvar os dados de todos os jogadores ao mesmo tempo.</li>
            <li><strong>Sincronização (Cross-Server):</strong> Se você tem uma rede com múltiplos servidores (ex: Lobby, Survival 1, Survival 2), usar o mesmo banco de dados MySQL permite que o jogador mantenha seu dinheiro, rank, cosméticos e banimentos sincronizados magicamente entre todos eles.</li>
            <li><strong>Integração Web e APIs:</strong> Com os dados em um MySQL, você pode facilmente criar um site para o seu servidor que mostre um ranking (Leaderboard) em tempo real, um histórico público de bans (punições) ou uma loja automática que entrega os itens no jogo.</li>
          </ul>
        `
      },
      {
        id: 'c10-11',
        title: '11. Mapas Customizados e FastDL',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Nada define a identidade visual e a jogabilidade de um servidor de forma tão profunda quanto um mapa customizado. Ele diferencia o seu servidor de milhares de outros que usam apenas os mapas padrão do jogo.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            No entanto, mapas customizados (assim como modelos 3D, sons e texturas) exigem que o jogador faça o download desses arquivos antes de conseguir entrar no servidor.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Barreira da Impaciência</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A paciência do jogador moderno é medida em segundos. Se a tela de carregamento demorar mais de 2 ou 3 minutos porque ele está baixando um mapa de 200MB, ele vai cancelar a conexão e procurar outro servidor.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Gargalo do Servidor de Jogo:</strong> O servidor de jogo (ex: o processo do CS2, GMod ou Rust) é péssimo para transferir arquivos. Ele limita a velocidade de download severamente (geralmente a poucos KB/s) para não causar lag de rede nos jogadores que já estão jogando.</li>
            <li><strong>A Solução FastDL (Fast Download):</strong> Você deve hospedar os arquivos do mapa em um servidor web separado (um servidor HTTP/Nginx comum, como uma hospedagem de sites barata). Você então configura o servidor de jogo (no arquivo <code>server.cfg</code>) para apontar para essa URL (ex: <code>sv_downloadurl "http://fastdl.meuservidor.com/csgo"</code>).</li>
            <li><strong>O Resultado:</strong> Quando o jogador conecta, o jogo ignora o servidor de jogo para o download e baixa os arquivos do servidor web na velocidade máxima da internet do jogador, reduzindo o tempo de espera de 10 minutos para 10 segundos.</li>
          </ul>
        `
      },
      {
        id: 'c10-12',
        title: '12. Vantagens VIP Equilibradas',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A monetização é o sangue que mantém o servidor online e permite que ele cresça. Vender pacotes VIP é a forma mais comum e eficaz de arrecadação.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            No entanto, a forma como você configura os plugins VIP define se o seu servidor terá uma vida longa e próspera ou se morrerá em um mês por falta de jogadores.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Veneno do Pay-to-Win (P2W)</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Se você vender vantagens que afetam diretamente o combate ou a economia competitiva, os jogadores gratuitos (que são 90% da sua base e o verdadeiro "conteúdo" do servidor) vão se frustrar e ir embora. Sem jogadores gratuitos, os VIPs não têm com quem jogar, e o servidor morre.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O que NÃO vender (Poder):</strong> Dano extra, vida extra, armas exclusivas que matam com um tiro, kits de recursos absurdos no primeiro dia de wipe, imunidade a regras, comandos de teletransporte em combate.</li>
            <li><strong>O que VENDER (Conveniência e Cosméticos):</strong> Fila preferencial (pular a fila de espera quando o servidor está lotado), skins exclusivas de armas/roupas, tags coloridas e brilhantes no chat, acesso a comandos cosméticos (ex: <code>/hat</code>, <code>/dance</code>), slots extras em inventários virtuais, pets que não ajudam no combate.</li>
          </ul>
          <div class="my-8 p-6 bg-zinc-900/50 border-l-4 border-flame-500 rounded-r-lg">
            <p class="italic text-xl text-zinc-300 font-serif">
              "Um jogador deve comprar VIP para apoiar o servidor que ele ama e se destacar na multidão, não porque ele se sente obrigado a comprar para conseguir competir e não ser esmagado."
            </p>
          </div>
        `
      },
      {
        id: 'c10-13',
        title: '13. O Inferno das Dependências',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left">
            O ecossistema de plugins é uma teia de aranha. Muitos plugins não funcionam sozinhos; eles dependem de outros plugins (bibliotecas ou APIs) para executar funções complexas.
          </p>
          <p class="my-6 text-lg leading-relaxed">
            O "Inferno das Dependências" ocorre quando o Plugin A precisa da Biblioteca B (versão 1.0), mas o Plugin C precisa da mesma Biblioteca B (versão 2.0). O servidor entra em colapso.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Gerenciando o Caos</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Leia a Documentação:</strong> Antes de baixar um plugin, leia a página inteira. Se ele disser "Requer Vault e ProtocolLib", você <em>precisa</em> baixar esses dois antes.</li>
            <li><strong>Mantenha-se Atualizado, mas com Cuidado:</strong> Atualizar a biblioteca principal pode quebrar 5 plugins menores que dependiam da versão antiga. Sempre teste atualizações em um servidor de testes (Staging) antes da produção.</li>
            <li><strong>Fuja de Abandonware:</strong> Se um plugin não recebe atualizações do desenvolvedor há mais de 2 anos, não o instale, mesmo que pareça funcionar. Na próxima grande atualização do jogo, ele vai quebrar e você não terá suporte. Procure alternativas mantidas ativamente (forks).</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A popularidade não se exige, se atrai. Pessoas magnéticas não são necessariamente as mais barulhentas, mas as que fazem os outros se sentirem importantes. O verdadeiro carisma é a habilidade de iluminar a sala sem ofuscar os outros.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Quando você ouve ativamente, lembra de detalhes das conversas anteriores e celebra as vitórias dos outros, você cria uma gravidade social irresistível. Não se trata de ser o centro das atenções, mas de ser o centro de gravidade que mantém a comunidade unida.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Ilusão do Protagonismo</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Muitos acham que para ser famoso em um servidor é preciso falar o tempo todo, postar memes a cada 5 minutos ou ter o maior nível no bot de XP. Isso é ser <em>notório</em>, não influente.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Holofote Invertido:</strong> As pessoas mais influentes são aquelas que fazem perguntas brilhantes e deixam os outros brilharem. Quando você faz alguém se sentir inteligente ou engraçado, essa pessoa associa esse sentimento positivo a você.</li>
            <li><strong>A Memória Afetiva:</strong> Lembrar do nome do cachorro de um membro, ou perguntar como foi a prova que ele comentou semana passada, vale mais do que mil mensagens genéricas de "bom dia".</li>
          </ul>
        `
      },
      {
        id: 'c11-2',
        title: '2. Consistência e Presença',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A fama na comunidade vem da repetição. Aparecer uma vez, fazer um grande evento e sumir por um mês não constrói influência. A confiança é construída em gotas diárias e perdida em baldes.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Seja a constante positiva. Quando as pessoas pensarem no servidor, seu nome deve ser o primeiro a vir à mente como sinônimo de boa companhia e estabilidade.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Ritual do "Bom Dia"</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Pode parecer simples, mas rituais criam cultura.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Seja o Anfitrião:</strong> Ser a pessoa que sempre dá bom dia, que sempre se despede quando vai dormir, que sempre nota quando alguém novo entra no chat de voz, cria uma âncora emocional.</li>
            <li><strong>A Mobília Reconfortante:</strong> Você se torna parte da rotina das pessoas. Elas entram no servidor <em>esperando</em> ver você lá. Essa previsibilidade gera conforto e lealdade.</li>
            <li><strong>Disciplina nos Dias Ruins:</strong> Haverá dias em que você não vai querer interagir. O verdadeiro influenciador sabe que sua presença é um pilar. Um simples "Estou ocupado hoje, mas um abraço pra vocês" mantém a conexão viva.</li>
          </ul>
        `
      },
      {
        id: 'c11-3',
        title: '3. Criação de Valor',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Você quer ser famoso? Resolva problemas. A influência é diretamente proporcional ao valor que você injeta no ecossistema da comunidade.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A popularidade vazia (baseada apenas em falar muito ou postar fotos) desaparece rápido. A popularidade baseada em utilidade e entretenimento cria raízes profundas.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Moeda Social</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Se você desaparecer amanhã, o que a comunidade perderia? Se a resposta for "nada", você não é influente, apenas barulhento.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Construtor de Guias:</strong> Seja a pessoa que escreve o tutorial de como instalar o modpack. Seja quem explica a meta do jogo para os novatos.</li>
            <li><strong>O Organizador:</strong> Crie mini-eventos não oficiais. "Sexta-feira à noite vamos todos jogar Gartic no canal de voz 3". Tome a iniciativa.</li>
            <li><strong>O Curador:</strong> Compartilhe notícias relevantes, memes de alta qualidade (não spam), ou dicas úteis. Quem acumula conhecimento sem compartilhar é um bibliotecário trancado; quem compartilha é um mestre reverenciado.</li>
          </ul>
        `
      },
      {
        id: 'c11-4',
        title: '4. O Equilíbrio do Ego',
        interactiveComponent: 'FlameBalance',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            O maior risco da fama é a arrogância. Quanto mais popular você se torna, mais humilde você deve agir. O ego é o veneno que corrói a influência de dentro para fora.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            O verdadeiro ícone da comunidade é acessível. Ele não se isola em canais VIP trancados com seus 3 amigos mais próximos. Ele desce para a arena e joga com os iniciantes.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Calibração da Fama</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A humildade blinda sua reputação contra a inveja.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Efeito Pedestal:</strong> Se você se coloca em um pedestal, as pessoas vão procurar seus defeitos para derrubá-lo. Se você se senta no chão com eles, eles vão querer levantá-lo.</li>
            <li><strong>Autodepreciação Estratégica:</strong> Rir dos próprios erros (aquela jogada horrível que você fez, ou um erro de digitação engraçado) mostra que você é humano e seguro de si.</li>
            <li><strong>Use o simulador abaixo:</strong> Entenda como o excesso de ego (arrogância) ou a falsa modéstia (insegurança) afetam sua imagem. Encontre o equilíbrio do Guardião.</li>
          </ul>
        `
      },
      {
        id: 'c11-5',
        title: '5. A Arte da Escuta Ativa',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A maioria das pessoas não escuta para entender, escuta apenas esperando a sua vez de falar. O influenciador mestre faz o oposto. Ele lê as entrelinhas.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Ele percebe quando um membro está frustrado ou triste antes mesmo que a pessoa reclame abertamente no chat.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Silêncio Estratégico</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A escuta ativa transforma interações superficiais em conexões profundas.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Validação:</strong> Quando você repete o que a pessoa disse com suas próprias palavras ("Então o que você está dizendo é que se sentiu injustiçado porque..."), você valida a existência dela. Em um mundo digital onde todos gritam, quem sabe ouvir se torna um rei.</li>
            <li><strong>O Peso das Palavras:</strong> Não tenha medo do silêncio no chat de voz. Pausas bem colocadas dão peso às suas palavras. Falar menos faz com que, quando você finalmente falar, todos parem para ouvir.</li>
            <li><strong>Evite o "Eu também":</strong> Se alguém conta uma história triste, não roube os holofotes contando uma história "pior" sua. Apenas ouça e ofereça suporte.</li>
          </ul>
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
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A verdadeira influência não é construída apenas nos dias de festa, mas testada no fogo do conflito. Quando a comunidade está dividida e o chat está pegando fogo, todos olham para os líderes informais.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Como você reage sob pressão define seu status permanente na hierarquia social do servidor.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arte da Neutralidade Ativa</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Nunca tome partido publicamente em brigas mesquinhas. Seja a Suíça, mas uma Suíça armada com empatia.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Desarme a Plateia:</strong> O maior combustível de uma briga de internet é a plateia. Chame os envolvidos para uma DM ou um canal de voz privado. Sem público, 90% do ego desaparece.</li>
            <li><strong>Valide as Emoções, Não os Fatos:</strong> Você não precisa concordar com o que a pessoa fez, mas precisa validar como ela se sente. "Eu entendo porque você ficou com raiva quando ele disse aquilo" acalma os ânimos muito mais rápido do que "Você está errado nas regras".</li>
            <li><strong>O Teste do Mediador:</strong> Treine sua capacidade de desescalar conflitos no simulador abaixo. Lembre-se: o objetivo do influenciador não é descobrir quem está certo, mas restaurar a paz e a coesão do grupo.</li>
          </ul>
        `
      },
      {
        id: 'c11-7',
        title: '7. O Poder das Alianças',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Nenhum rei governa sozinho, e nenhum influenciador sobrevive isolado. A influência é uma rede, não uma torre. Você precisa de aliados em diferentes "panelinhas" ou subgrupos do servidor.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Se você só conversa com os jogadores de PvP, você é invisível para os construtores. Se você só fala com os veteranos, os novatos não te conhecem.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Teia de Aranha Social</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Quando você tem pontes em todas as ilhas, você se torna o continente.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Arquiteto de Conexões:</strong> Conecte pessoas. "Ei João, o Marcos também adora fazer farms de redstone, vocês deveriam jogar juntos". Quando você é a ponte que cria novas amizades, você se torna inesquecível para ambas as partes.</li>
            <li><strong>O Escudo Invisível:</strong> Se alguém tentar atacar sua reputação no chat, você não precisará dizer uma palavra. Seus aliados de diferentes grupos o defenderão antes mesmo que você veja a mensagem. Essa é a verdadeira prova de influência.</li>
          </ul>
        `
      },
      {
        id: 'c11-8',
        title: '8. Liderança pelo Exemplo',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            As palavras movem, mas o exemplo arrasta. A comunidade é um espelho de seus líderes informais e formais. Se você quer que o servidor seja menos tóxico, você deve ser o poço inesgotável de positividade.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A hipocrisia é o assassino mais rápido e letal da influência. Você não pode exigir respeito se trata os novatos com desdém.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Peso da Coroa</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A coroa da influência é pesada porque exige que você viva, todos os dias, de acordo com os padrões que prega.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Efeito Espelho:</strong> Se você é caótico e xinga quando perde, o chat será caótico. Se você é focado, elogia boas jogadas (mesmo dos adversários) e mantém a calma, o ambiente se moldará à sua imagem.</li>
            <li><strong>Seja o Primeiro a Agir:</strong> Se alguém faz uma pergunta no chat de ajuda e todos ignoram, seja o primeiro a responder. A inércia social é quebrada por um único ato de liderança.</li>
          </ul>
        `
      },
      {
        id: 'c11-9',
        title: '9. Comunicação Carismática',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            No mundo digital, a comunicação carece de linguagem corporal, tom de voz e contato visual. Suas palavras, sua formatação e seu timing <em>são</em> o seu corpo agora.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A forma como você escreve dita como as pessoas "ouvem" você na cabeça delas.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Arte do Storytelling Digital</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Tom Correto:</strong> Mensagens curtas, secas e com ponto final ("Ok.") transmitem raiva ou desinteresse. Textos longos demais, sem parágrafos, transmitem desespero por atenção ou mania. Aprenda a formatar para respirar.</li>
            <li><strong>Humor Autodepreciativo:</strong> Rir de si mesmo é a maior demonstração de autoconfiança que existe. Mostra que seu ego não é frágil.</li>
            <li><strong>Conte Histórias:</strong> Pessoas esquecem fatos, mas lembram de histórias. Quando for explicar uma regra ou compartilhar uma experiência, transforme em uma narrativa. Heróis, vilões (o lag, o bug), desafios e superação. Transforme o mundano em épico.</li>
          </ul>
        `
      },
      {
        id: 'c11-10',
        title: '10. Gestão de Crises de Imagem',
        interactiveComponent: 'CrisisDecision',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Um dia, você vai errar. É inevitável. Você vai fazer uma piada de mau gosto que ofende alguém, vai perder a paciência em um dia ruim, ou vai tomar uma decisão injusta.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A forma como você lida com a queda define se você vai se levantar mais forte, com mais respeito, ou se vai desaparecer na obscuridade do cancelamento comunitário.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Tribunal da Internet</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A internet tem memória curta para quem é humilde, mas memória eterna para quem é arrogante.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Regra de Ouro do Pedido de Desculpas:</strong> Peça desculpas rápido, publicamente (se o erro foi público) e sem justificativas.</li>
            <li><strong>O Falso Pedido:</strong> Dizer "Desculpe <em>se</em> você se ofendeu" não é um pedido de desculpas, é transferir a culpa para a sensibilidade do outro. Diga "Eu errei ao falar aquilo, me desculpe".</li>
            <li><strong>Assuma e Siga em Frente:</strong> Mostre que aprendeu com a atitude seguinte. Teste seus instintos de relações públicas no simulador abaixo. Um passo em falso na gestão de crise pode custar anos de reputação.</li>
          </ul>
        `
      },
      {
        id: 'c11-11',
        title: '11. O Mentor Silencioso',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A verdadeira marca de uma lenda na comunidade não é quantos seguidores ela tem, mas quantos novos líderes ela ajudou a criar. A influência centralizada é frágil; a influência distribuída é imortal.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Escolha membros promissores, aqueles que mostram paixão mas ainda não têm a experiência, e invista neles.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Passando a Tocha</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Um mestre se orgulha quando o aluno o supera. Isso prova a qualidade do seu ensino e garante o futuro da comunidade.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Ensine os Bastidores:</strong> Compartilhe o que você sabe sobre como lidar com pessoas, como organizar eventos ou como configurar bots. Não guarde conhecimento como se fosse um tesouro.</li>
            <li><strong>Dê os Holofotes:</strong> Quando um projeto der certo, dê o crédito aos seus "pupilos". Quando eles tiverem sucesso, o respeito deles por você se tornará devoção.</li>
            <li><strong>Aposentadoria Ativa:</strong> Os melhores influenciadores sabem quando recuar e deixar a nova geração brilhar, atuando apenas como conselheiros sábios quando necessário.</li>
          </ul>
        `
      },
      {
        id: 'c11-12',
        title: '12. A Psicologia da Multidão',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Entender como a massa se move é crucial para qualquer líder. A inteligência coletiva de um servidor pode ser brilhante, mas a emoção coletiva é frequentemente volátil e irracional.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Sua função como influenciador é ser o maestro dessa energia.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">Surfando o Hype e Ancorando o Pânico</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Organizador do Caos Positivo:</strong> Em momentos de hype (um novo jogo, uma grande atualização), surfe a onda. Organize eventos, crie canais temporários, seja o facilitador da empolgação.</li>
            <li><strong>A Rocha na Tempestade:</strong> Em momentos de revolta (uma mudança de regra impopular, um drama), seja a rocha. A multidão busca âncoras emocionais. Se todos estão em pânico e você está calmo e racional, você automaticamente se torna o líder da situação.</li>
            <li><strong>Lendo a Sala:</strong> Aprenda a sentir o "clima" do servidor. Há dias para brincadeiras e dias para seriedade. O influenciador que faz piada no dia em que a comunidade está de luto por algo perde o respeito instantaneamente.</li>
          </ul>
        `
      },
      {
        id: 'c11-13',
        title: '13. Criando Rituais Comunitários',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Comunidades fortes não sobrevivem apenas de conversas aleatórias; elas são construídas em cima de tradições compartilhadas. A "Sexta-feira do Terror", o "Campeonato Mensal de X1", o "Meme da Semana".
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Rituais dão às pessoas algo pelo qual ansiar. Em um mundo digital efêmero, a previsibilidade de um evento divertido é um oásis.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Força do Hábito Coletivo</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>O Guardião das Tradições:</strong> Seja o criador ou o guardião desses rituais. Tradições criam nostalgia e um forte senso de pertencimento.</li>
            <li><strong>Consistência é Rei:</strong> Um ritual só se torna um ritual se for consistente. Fazer um evento incrível uma vez é legal; fazer um evento bom toda sexta-feira às 20h cria uma comunidade.</li>
            <li><strong>Parte da História:</strong> Quando você é o rosto de uma tradição amada, você deixa de ser apenas um membro e se torna parte da história e do folclore do servidor.</li>
          </ul>
        `
      },
      {
        id: 'c11-14',
        title: '14. Lidando com Haters e Inveja',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A popularidade atrai a inveja como a luz atrai mariposas. Haverá pessoas que o odiarão simplesmente porque os outros o amam, ou porque você tem a influência que eles desejam.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            É a taxa inevitável que se paga pelo sucesso em qualquer ambiente social.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Escudo de Teflon</h3>
          <p class="mb-6 text-lg leading-relaxed">
            Deixe as críticas infundadas escorregarem. Absorva apenas o feedback construtivo.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Não Lute na Lama:</strong> Nunca desça ao nível deles. Seus haters querem sua atenção para roubar um pouco da sua relevância. Se você reagir a cada provocação, você se tornará um fantoche nas mãos dos seus inimigos.</li>
            <li><strong>A Elegância do Silêncio:</strong> Ignore-os com elegância. O silêncio diante do ódio irracional é a maior demonstração de poder e estabilidade emocional.</li>
            <li><strong>Deixe a Comunidade Falar:</strong> Se você construiu suas alianças corretamente (Capítulo 7), você não precisará se defender. Deixe que seus aliados e a comunidade o defendam. A defesa orgânica é infinitamente mais poderosa que a autodefesa.</li>
          </ul>
        `
      },
      {
        id: 'c11-15',
        title: '15. O Legado do Influenciador',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            Toda jornada tem um fim. Um dia você vai jogar menos, vai entrar menos no Discord, vai seguir com sua vida real, faculdade, trabalho ou família. O que você deixa para trás?
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            A medida final da sua influência não é o que acontece quando você está online, mas o que acontece quando você está offline.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">A Saída Graciosa</h3>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>A Imortalidade Digital:</strong> Se a comunidade desmoronar sem você, você falhou como líder, pois criou dependência. Se ela continuar próspera, usando as piadas que você criou e mantendo os rituais que você iniciou, você alcançou a imortalidade digital.</li>
            <li><strong>Não Seja o "Velho Amargurado":</strong> Saiba quando dar um passo para trás. Não se torne o veterano que só entra para reclamar que "o servidor não é mais como antigamente" ou que "a nova geração estragou tudo".</li>
            <li><strong>Celebre a Nova Geração:</strong> Passe o bastão com orgulho. Elogie os novos líderes publicamente. Sua bênção dará a eles a legitimidade necessária para continuar o trabalho.</li>
          </ul>
        `
      },
      {
        id: 'c11-16',
        title: '16. A Coroa Invisível',
        content: `
          <p class="first-letter:text-5xl first-letter:font-display first-letter:text-flame-500 first-letter:mr-3 first-letter:float-left mb-6">
            A verdadeira influência não precisa de cargos, tags coloridas, permissões de administrador ou um canal exclusivo com seu nome. A coroa mais pesada é aquela que ninguém pode ver, mas que todos sabem que você usa.
          </p>
          <p class="mb-6 text-lg leading-relaxed">
            Você chegou ao ápice. Você é respeitado, amado e ouvido. Suas palavras têm peso. Suas ações moldam a cultura.
          </p>
          <h3 class="text-2xl font-display text-white mt-10 mb-6">O Fim da Jornada</h3>
          <p class="mb-6 text-lg leading-relaxed">
            A arte da influência é, no fundo, a arte de se importar com as pessoas.
          </p>
          <ul class="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
            <li><strong>Use o Poder para o Bem:</strong> Proteja os fracos contra o bullying, eleve os novatos que estão perdidos e mantenha a chama da comunidade acesa nos dias sombrios.</li>
            <li><strong>Você é uma Lenda:</strong> Você não é apenas famoso; fama é efêmera. Você é uma lenda, e as lendas vivem nas histórias que a comunidade conta sobre você.</li>
            <li><strong>Vá e Construa:</strong> Quem ama a comunidade, é amado de volta. Vá e construa seu império de positividade. O servidor é o seu reino.</li>
          </ul>
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
