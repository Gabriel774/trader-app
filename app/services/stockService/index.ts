import Service from "../service";
import { UpdateQuantityBody } from "./requests";

export default class StockService extends Service {
  async getStocks() {
    return await this.http.get("stocks", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async updateValues() {
    return await this.http.put("stocks/update-stocks-value", null, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async updateQuantity(data: UpdateQuantityBody) {
    return await this.http.put("stocks/update-stock-quantity", data, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
