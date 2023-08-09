import {
  Container,
  HeaderLink,
  HeaderText,
  LinkContainer,
  Logo,
  MenuIconContainer,
  ProfileContainer,
  Username,
  Wrapper,
} from "./styles";
import logo from "@/public/logo.png";

import { usePathname } from "next/navigation";
import { ProfilePic } from "../../atoms";
import userPlaceHolder from "@/public/user.png";
import { navLinks } from "@/app/constants";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const pathName = usePathname();

  return (
    <Wrapper>
      <Container>
        <Logo alt="Trader" src={logo} />

        <LinkContainer>
          {navLinks.map((link) => (
            <HeaderLink
              key={link.href}
              $active={pathName === link.href}
              href={link.href}
            >
              <link.icon fontSize={30} />
              <HeaderText>{link.title}</HeaderText>
            </HeaderLink>
          ))}
        </LinkContainer>

        <ProfileContainer>
          <ProfilePic $size={40} $image={userPlaceHolder.src} />
          <Username>Usuário</Username>
        </ProfileContainer>

        <MenuIconContainer>
          <AiOutlineMenu font-size={30} />
        </MenuIconContainer>
      </Container>
    </Wrapper>
  );
}
