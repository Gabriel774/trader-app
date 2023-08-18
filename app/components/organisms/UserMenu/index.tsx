import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal } from "../../atoms";
import {
  Close,
  Container,
  GapIcon,
  Header,
  HeaderTitle,
  Return,
} from "./styles";
import { UserStateProps } from "@/app/store/user";
import Overview from "./overview";
import EditForm from "./editForm";

interface UserMenuProps {
  state: UserStateProps;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function UserMenu({ active, setActive, state }: UserMenuProps) {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeShowForm = (value: boolean) => {
    if (!loading) setShowForm(value);
  };

  const changeActive = (value: boolean) => {
    if (!loading) setActive(value);
  };

  useEffect(() => {
    setShowForm(false);
  }, [active]);

  return (
    <Modal
      id="modal"
      $active={active}
      onClick={(e) => {
        const target = e.target as HTMLTextAreaElement;
        if (target.id === "modal") changeActive(false);
      }}
    >
      <Container>
        <Header>
          {showForm ? (
            <Return
              onClick={() => {
                changeShowForm(false);
              }}
            />
          ) : (
            <GapIcon />
          )}

          <HeaderTitle>
            {showForm ? "Editar informações" : "Minhas informações"}
          </HeaderTitle>

          <Close
            onClick={() => {
              changeActive(false);
            }}
          />
        </Header>

        {showForm ? (
          <EditForm loading={loading} setLoading={setLoading} state={state} />
        ) : (
          <Overview
            setShowForm={changeShowForm}
            state={state}
            loading={loading}
            setLoading={setLoading}
          />
        )}
      </Container>
    </Modal>
  );
}
