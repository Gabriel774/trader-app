import { Dispatch, SetStateAction } from "react";
import { Modal, ProfilePic } from "../../atoms";
import { Container, Username } from "./styles";
import { UserStateProps } from "@/app/store/user";
import { image_url_prefix } from "@/app/constants";
import userPlaceHolder from "@/public/user.png";

interface UserMenuProps {
  state: UserStateProps;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function UserMenu({ active, setActive, state }: UserMenuProps) {
  return (
    <Modal
      id="modal"
      $active={active}
      onClick={(e) => {
        const target = e.target as HTMLTextAreaElement;
        if (target.id === "modal") setActive(!active);
      }}
    >
      <Container>
        <ProfilePic
          $image={
            state?.profile_pic
              ? image_url_prefix + state.profile_pic
              : userPlaceHolder.src
          }
          $size={150}
        />
        <Username>{state?.name}</Username>
      </Container>
    </Modal>
  );
}
