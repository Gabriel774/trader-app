import Service from "../service";

export default class UserService extends Service {
  async login(data: LoginRequest) {
    return await this.http.post("auth/login", data, {
      headers: { ["Content-Type"]: "application/json" },
    });
  }

  async register(data: RegisterRequest) {
    const form = new FormData();

    form.append("name", data.name.trim());
    form.append("password", data.password);
    if (data.profile_pic) form.append("profile_pic", data.profile_pic);

    return await this.http.post("users", form, {
      headers: { ["Content-Type"]: "multipart/form-data" },
    });
  }
}
