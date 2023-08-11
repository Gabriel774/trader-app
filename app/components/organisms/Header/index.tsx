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
import { image_url_prefix, navLinks } from "@/app/constants";
import { AiOutlineMenu } from "react-icons/ai";
import { UserStateProps } from "@/app/store/user";

export default function Header({ state }: { state: UserStateProps }) {
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
              <link.icon fontSize={25} />
              <HeaderText>{link.title}</HeaderText>
            </HeaderLink>
          ))}
        </LinkContainer>

        <ProfileContainer>
          <ProfilePic
            $size={40}
            $image={
              state?.profile_pic
                ? image_url_prefix + state.profile_pic
                : userPlaceHolder.src
            }
          />
          <Username>{state?.name}</Username>
        </ProfileContainer>

        <MenuIconContainer>
          <AiOutlineMenu fontSize={30} />
        </MenuIconContainer>
      </Container>
    </Wrapper>
  );
}
