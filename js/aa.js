import { AxiosWrapper } from "@/lib/axios.wrapper";
export class EnumApi {
  static enumMap = new Map();
  static enumPending = new Map();

  static async getEnum(enumName) {
    if (this.enumMap.has(enumName)) {
      return new Promise(resolve => {
        return resolve(this.enumMap.get(enumName));
      });
    } else {
      let promise;
      if (this.enumPending.has(enumName)) {
        promise = this.enumPending.get(enumName);
      } else {
        promise = AxiosWrapper.get(`/enum/${enumName}`);
        this.enumPending.set(enumName, promise);
      }

      let data = await promise;
      const valueMap = new Map();
      for (const item of data) {
        valueMap.set(item.title, item);
      }
      this.enumMap.set(enumName, valueMap);
      return new Promise(resolve => {
        return resolve(valueMap);
      });
    }
  }
}