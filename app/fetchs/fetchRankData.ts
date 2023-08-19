import { UserService } from "../services";
import { toast } from "../utils/toast";

export async function fetchRankData(token: string) {
  try {
    const service = new UserService(token);

    return await service.getRanking();
  } catch (err: any) {
    toast.error("Erro ao carregar dados");
  }
}
