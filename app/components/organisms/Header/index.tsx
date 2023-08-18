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
import Skeleton from "react-loading-skeleton";
import { usePathname } from "next/navigation";
import { ProfilePic } from "../../atoms";
import userPlaceHolder from "@/public/user.png";
import { image_url_prefix, navLinks } from "@/app/constants";
import { AiOutlineMenu } from "react-icons/ai";
import { UserStateProps } from "@/app/store/user";
import { truncate } from "@/app/utils/truncate";

interface HeaderProps {
  state: UserStateProps;
  setModalActive: (value: boolean) => void;
}

export default function Header({ state, setModalActive }: HeaderProps) {
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

        <ProfileContainer onClick={() => setModalActive(true)}>
          {state?.name ? (
            <>
              <ProfilePic
                $size={40}
                $image={
                  state?.profile_pic
                    ? image_url_prefix + state.profile_pic
                    : userPlaceHolder.src
                }
              />
              <Username>{truncate(state?.name, 16)}</Username>
            </>
          ) : (
            <>
              <Skeleton circle={true} width={40} height={40} />
              <Skeleton width={70} height={15} />
            </>
          )}
        </ProfileContainer>

        <MenuIconContainer>
          <AiOutlineMenu fontSize={30} />
        </MenuIconContainer>
      </Container>
    </Wrapper>
  );
}
