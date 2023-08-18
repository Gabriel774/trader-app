import { UserService } from "../services";
import store from "../store";
import { setBalance, setName, setProfilePic } from "../store/user/actions";
import { toast } from "../utils/toast";

export async function fetchUserData(token: string) {
  try {
    const service = new UserService(token);

    const userData = await service.getUserData();

    store.dispatch(setName(userData.data.name));
    store.dispatch(setBalance(userData.data.balance));
    if (userData.data.profile_pic)
      store.dispatch(setProfilePic(userData.data.profile_pic));
  } catch (err: any) {
    toast.error("Erro ao carregar dados");
  }
}
