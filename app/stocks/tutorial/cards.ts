import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { PiSunHorizonThin } from "react-icons/pi";
import { VscDebugRestart } from "react-icons/vsc";
import { FaRankingStar } from "react-icons/fa6";

export const cards = [
  {
    icon: AiOutlineInfoCircle,
    text: `
        O objetivo principal do Trader é comprar ações pelo menor valor possível
        e vende-las por um valor maior.
      `,
  },
  {
    icon: MdOutlineAttachMoney,
    text: `
        Ao clicar na aba Comprar & Vender você pode fazer a compra de ações
        disponíveis no mercado usando seu saldo ou vender ações no seu portfólio.
      `,
  },
  {
    icon: PiSunHorizonThin,
    text: `
        Ao acessar a aba de Compra & Venda é possível finalizar o dia,
        ao fazer isso os valores das ações serão atualizados.
      `,
  },
  {
    icon: FaRankingStar,
    text: `
        Acessando a aba Ranking é possível ver uma lista com os jogadores com o maior saldo disponível.
      `,
  },
  {
    icon: VscDebugRestart,
    text: `
        Você possui o saldo inicial de R$ 2.500, caso você você fique sem
        saldo é possível resetar o jogo no menu do usuário acessando seu perfil
        pelo menu no topo.
      `,
  },
];
