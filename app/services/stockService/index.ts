import Service from "../service";

export default class StockService extends Service {
  async getStocks() {
    return await this.http.get("stocks", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async updateValues() {}
}
