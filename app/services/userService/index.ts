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

  async getUserData() {
    return await this.http.get("auth/me", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async update(data: UpdateRequest) {
    const form = new FormData();

    form.append("name", data.name.trim());
    if (data.password) form.append("password", data.password);
    if (data.profile_pic) form.append("profile_pic", data.profile_pic);

    return await this.http.put("users", form, {
      headers: {
        ["Content-Type"]: "multipart/form-data",
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async resetUserData() {
    return await this.http.patch("users/reset-data", null, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: "*",
      },
    });
  }

  async getRanking() {
    return await this.http.get("users/rank", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
