import { Modal } from "../../atoms";
import {
  Container,
  GapIcon,
  Header,
  HeaderTitle,
  NavLink,
  LinkContainer,
  LinkTitle,
} from "./styles";
import { Close } from "../UserMenu/styles";
import { navLinks } from "@/app/constants";
import { theme } from "@/app/theme";
import { BiSolidUser } from "react-icons/bi";
import { usePathname } from "next/navigation";

interface MenuMobileProps {
  active: boolean;
  setActive: (value: boolean) => void;
  setUserMenuActive: (value: boolean) => void;
}

export default function NavMenuMobile({
  active,
  setActive,
  setUserMenuActive,
}: MenuMobileProps) {
  const pathName = usePathname();

  return (
    <Modal
      id="modal"
      $active={active}
      onClick={(e) => {
        const target = e.target as HTMLTextAreaElement;
        if (target.id === "modal") setActive(false);
      }}
    >
      <Container>
        <Header>
          <GapIcon />

          <HeaderTitle>Navegar</HeaderTitle>

          <Close
            onClick={() => {
              setActive(false);
            }}
          />
        </Header>

        <LinkContainer>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              $active={pathName === link.href}
              href={link.href}
              onClick={() => setActive(false)}
            >
              <link.icon
                style={{ fontSize: 25, color: theme.primaryColor300 }}
              />
              <LinkTitle>{link.title}</LinkTitle>
            </NavLink>
          ))}

          <NavLink
            $active={false}
            href="#"
            onClick={() => {
              setActive(false);
              setUserMenuActive(true);
            }}
          >
            <BiSolidUser
              style={{ fontSize: 25, color: theme.primaryColor300 }}
            />
            <LinkTitle>Meu perfil</LinkTitle>
          </NavLink>
        </LinkContainer>
      </Container>
    </Modal>
  );
}
