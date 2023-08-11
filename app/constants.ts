import { BsGraphUp } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { FaRankingStar } from "react-icons/fa6";

export const navLinks = [
  {
    href: "/stocks/buy",
    icon: BsGraphUp,
    title: "Comprar Ações",
  },
  {
    href: "/stocks/sell",
    icon: MdOutlineAttachMoney,
    title: "Vender ações",
  },
  {
    href: "/stocks/ranking",
    icon: FaRankingStar,
    title: "Ranking",
  },
  {
    href: "/stocks/tutorial",
    icon: BiHelpCircle,
    title: "Como Jogar?",
  },
];

export const image_url_prefix =
  "https://klknosybrndykocvacoi.supabase.co/storage/v1/object/public/trader-images/";
