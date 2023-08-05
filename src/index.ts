type DynamicPayload = Record<
  string,
  string | number | boolean | object | Array<any>
>

export class validations {
    public static main (payload: DynamicPayload = {}) {
      for (const key in payload as DynamicPayload) {
        if (!payload[key]) {
          return `The ( ${key} )  field is empty.`
        }
        if (payload[key] == '') {
          return `The ( ${key} )  field is empty.`
        }
      }
      return true
    }
  }