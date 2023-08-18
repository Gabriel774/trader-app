import { UserStateProps } from "@/app/store/user";
import { Button, Loading, ProfilePic } from "../../atoms";
import { OverviewContainer, Username } from "./styles";
import { AiOutlineEdit } from "react-icons/ai";
import { BiLogOut, BiRefresh } from "react-icons/bi";
import { image_url_prefix } from "@/app/constants";
import userPlaceHolder from "@/public/user.png";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { UserService } from "@/app/services";
import { toast } from "@/app/utils/toast";
import { Dispatch, SetStateAction } from "react";

interface OverviewProps {
  state: UserStateProps;
  setShowForm: (value: boolean) => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Overview({
  state,
  setShowForm,
  loading,
  setLoading,
}: OverviewProps) {
  const { push } = useRouter();

  const logout = () => {
    if (!loading) {
      Cookies.remove("auth_token");
      push("/");
    }
  };

  const resetData = async () => {
    if (loading) return;

    const continueReset = confirm(
      "Você realmente deseja resetar o seu saldo e ações para os valores iniciais?"
    );

    if (continueReset) {
      setLoading(true);

      try {
        const service = new UserService(state.auth_token);

        const res = await service.resetUserData();

        console.log(res);

        toast.success("Dados resetados com sucesso!");
      } catch (err: any) {
        toast.error("Houve um problema ao resetar os dados.");
        console.log(err);
      }

      setLoading(false);
    }
  };

  return (
    <OverviewContainer>
      <ProfilePic
        style={{ margin: "auto" }}
        $image={
          state?.profile_pic
            ? image_url_prefix + state.profile_pic
            : userPlaceHolder.src
        }
        $size={150}
      />

      <Username>{state?.name}</Username>

      <Button
        style={{ width: "100%", marginTop: 10 }}
        $background="primaryColor100"
        $text="secondaryColor400"
        onClick={() => setShowForm(true)}
      >
        Editar informações de usuário <AiOutlineEdit style={{ fontSize: 20 }} />
      </Button>

      <Button
        style={{ width: "100%", marginTop: 7 }}
        $background="secondaryColor000"
        $text="secondaryColor500"
        onClick={() => resetData()}
      >
        {loading ? (
          <>
            <span>Carregando</span>
            <Loading size={20} color="secondaryColor400" />
          </>
        ) : (
          <>
            <span>Resetar meu dados</span>
            <BiRefresh style={{ fontSize: 20 }} />
          </>
        )}
      </Button>

      <Button
        style={{ width: "100%", marginTop: 7 }}
        $background="secondaryColor400"
        $text="error"
        onClick={() => logout()}
      >
        Logout <BiLogOut style={{ fontSize: 20 }} />
      </Button>
    </OverviewContainer>
  );
}
