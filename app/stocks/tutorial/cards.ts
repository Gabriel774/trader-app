import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { PiSunHorizonThin } from "react-icons/pi";
import { VscDebugRestart } from "react-icons/vsc";

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
        Ao clicar na aba Comprar Ações você pode fazer a compra de ações
        disponíveis no mercado usando seu saldo.
      `,
  },
  {
    icon: BsCashCoin,
    text: `
        Na aba Vender Ações é possível fazer a venda das ações no seu
        portfólio e aumentar seu saldo.
      `,
  },
  {
    icon: PiSunHorizonThin,
    text: `
        Ao acessar as abas de compra e venda de ações é possível finalizar o dia,
        ao fazer isso os valores das ações serão atualizados.
      `,
  },
  {
    icon: VscDebugRestart,
    text: `
        Você possui o saldo inicial de R$ 10.000, caso você você fique sem
        saldo é possível resetar o jogo no menu do usuário acessando seu perfil
        pelo menu no topo.
      `,
  },
];
