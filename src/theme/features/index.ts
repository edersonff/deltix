import { BsGraphUpArrow } from "react-icons/bs";
import {
  FiBell,
  FiBox,
  FiHelpCircle,
  FiLock,
  FiMail,
  FiMap,
  FiMessageSquare,
  FiMonitor,
  FiNavigation,
  FiRefreshCcw,
  FiServer,
  FiShield,
  FiShieldOff,
  FiSliders,
  FiSmartphone,
  FiTv,
  FiUsers,
  FiWifi,
} from "react-icons/fi";
import { GrServerCluster } from "react-icons/gr";
import { IoMdBrowsers } from "react-icons/io";
import { MdDns } from "react-icons/md";
import { RiSpam2Fill } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";

export const features = [
  {
    icon: FiMail,
    title: "E-mail",
    description:
      "Políticas individuais ou agrupadas para <b>controle de e-mails</b>, auditoria centralizada, gatilhos DLP para prevenção de perda de dados, multiplataforma e integração ao <b>AD</b> e <b>OpenLDAP</b>.",
  },
  {
    icon: FiHelpCircle,
    title: "Helpdesk",
    description:
      "Central de atendimento para solução de problemas, ajustes dos <b>contratos de SLA</b>, base de conhecimento flexível, <b>integração com e-mails</b>, portal de atendimento exclusivo e customizável.",
  },
  {
    icon: FiNavigation,
    title: "Navegação",
    description:
      "Controle de navegação através de <b>categorias customizáveis</b>, regras de acesso por dia e horário, QoS para listas de sites, <b>integração com AD</b> e relatórios com agendamentos.",
  },
  {
    icon: FiBox,
    title: "Inventário",
    description:
      "Gestão inteligente de ativos, segmentação por grupos como computadores, impressoras ou máquinas virtuais. Detecta <b>automaticamente</b> novos dispositivos inseridos na rede. Relatórios por <b>inventariados</b>, por S.O, por grupos, ou ainda por softwares instalados.",
  },
  {
    icon: RiSpam2Fill,
    title: "Anti-spam",
    description:
      "São + de 50 camadas de proteção com <b>políticas customizáveis</b>. Conta com portal para o usuário, notificações por e-mail sobre <b>status da Quarentena</b>, e integrações com SenderScore e listas de spammers.",
  },
  {
    icon: FiMonitor,
    title: "Monitoramento",
    description:
      "<b>Monitoramento 24x7</b> de hardware e software com detecção de problemas em sua fase inicial. Através de interface amigável permite a visualização em tempo real da saúde da infraestrutura de TI. <b>Notificações por e-mail</b>, SMS, ou através do app para Android ou IOS.",
  },
  {
    icon: FiWifi,
    title: "Hotspot",
    description:
      "Gestão segura da rede corporativa através de políticas de acesso, cotas de uso, geração de vouchers, login via redes sociais e <b>aplicação de QoS</b>. Todo acesso pode ser acompanhado em tempo real.",
  },
  {
    icon: FiTv,
    title: "TV corporativa",
    description:
      "Permite a criação de múltiplas programações para serem exibidas em <b>TVs pela empresa</b>. Com regras customizáveis, oferece um ambiente específico para <b>cada departamento</b>, seja TI, comercial, produção, recepção etc.",
  },
  {
    icon: FiSliders,
    title: "QoS",
    description:
      "Garanta desempenho de aplicações críticas, isto é, priorizando <b>tráfegos específicos</b>. Acompanhe em tempo real o uso e tome decisões assertivas para otimização dos recursos de Internet.",
  },
  {
    icon: FiUsers,
    title: "Colaboração",
    description:
      "Ambiente onde o usuário pode <b>visualizar seus e-mails</b>, compartilhar agendas, criar lista de tarefas, realizar chamadas de vídeo ou mesmo comunicar-se através de <b>chat corporativo</b>.",
  },
  {
    icon: FiShield,
    title: "Firewall de Próxima Geração - NGFW",
    description:
      "Regras de entrada e saída por períodos (permanentes, temporárias ou agendadas), uso de QoS, de Aplicações (camada 7), além de <b>detecção e prevenção</b> de intrusão em tempo real.",
  },
  {
    icon: FiLock,
    title: "VPN",
    description:
      "Conexão criptografada entre os pontos com políticas de <b>acesso por períodos</b>. Disponibiliza redundância de conexões entre múltiplas VPNs, portanto, garante <b>alta-disponibilidade e interoperabilidade</b> na comunicação ponto-a-ponto.",
  },
  {
    icon: FiMessageSquare,
    title: "Skype",
    description:
      "Gerencia a lista de contatos de seus usuários, seja para bloquear, liberar ou para <b>auto-cadastrar</b>. Além disso, mensagens trocadas são armazenadas e podem ser consultadas pelo administrador.",
  },
  {
    icon: FiBell,
    title: "Notificações",
    description:
      "Se anomalias forem detectadas, o SM pode disparar notificações por e-mail, SMS ou mesmo via APP para os contatos programados. Dessa maneira, podem ser realizadas <b>ações antecipadas</b>, diminuindo ou mesmo eliminando impactos.",
  },
  {
    icon: FiRefreshCcw,
    title: "Redundância",
    description:
      "Garante alta-disponibilidade de entrada e de saída para os serviços que <b>dependem da Internet</b>, isto é, realizando em segundos, alterações de roteamento, diminuindo impactos aos <b>usuários e sistemas</b>.",
  },
  {
    icon: FiServer,
    title: "DHCP",
    description:
      "Permite administração do endereçamento de IP em sua rede. Compatível com <b>VLANs</b> e <b>segmentação de redes</b>.",
  },
  {
    icon: FiShieldOff,
    title: "IDS e IPS",
    description:
      "Agindo em tempo real junto com o <b>Firewall</b>, acessos considerados maliciosos são registrados e bloqueados, garantindo segurança em seu ambiente. Através dos relatórios, é possível acompanhar e tomar <b>decisões assertivas</b>.",
  },
  {
    icon: IoMdBrowsers,
    title: "Hospedagem de site",
    description:
      "Hospede o site da sua empresa com <b>banco de dados exclusivo</b>, com geração de certificados digitais sem custo adicional.",
  },
  {
    icon: GrServerCluster,
    title: "CLUSTER",
    description:
      "Alta-disponibilidade de Firewall, de e-mail e dos demais serviços de sua rede que dependem de <b>Internet, VPN</b> e conexões diversas.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile",
    description:
      "Aplicativo exclusivo <b>(Android / IOS)</b> com a finalidade de acompanhar a saúde da rede através de <b>dashboards</b> ou feed de atualizações, também oferecendo alertas em tempo real assim que necessário e programado.",
  },
  {
    icon: MdDns,
    title: "DNS",
    description:
      "Servidor de alta performance para resolução de nomes, além de permitir a <b>administração de domínios</b>, sejam eles registrados no Brasil ou exterior.",
  },
  {
    icon: SlGraph,
    title: "Monitoramentos e Relatórios",
    description:
      "Disponibiliza diversas formas para monitorar e consultar dados em tempo real. <b>Auditoria de e-mails</b>, troca de mensagens, sites acessados, conexões realizadas, saúde do sistema bem como, ações realizadas no <b>S4</b> pelos administradores.",
  },
  {
    icon: FiMonitor,
    title: "Dashboards",
    description:
      "Dashboards em tempo real e customizáveis de acordo com o <b>perfil do administrador</b>. Através de visualizações simples e muito flexíveis, tomar decisões do que ocorre em sua estrutura é extremamente fácil!",
  },
  {
    icon: FiUsers,
    title: "Equipe",
    description:
      "Uma boa experiência de atendimento é o caminho mais rápido para o sucesso e por isso, a nossa equipe está comprometida em oferecer o melhor atendimento nesta jornada.",
  },
  {
    icon: FiMap,
    title: "Mapa de Rede",
    description:
      "Além de permitir criar uma visão de sua rede atrelando ao mapa dos seus dispositivos já monitorados, você pode gerar diagramas para diversos outros fins e leva-los para a <b>TV Corporativa</b>.",
  },
];
