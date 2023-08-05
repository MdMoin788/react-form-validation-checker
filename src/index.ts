type DynamicPayload = Record<
  string,
  string | number | boolean | object | Array<any>
>

export class reactFormValidationChecker {
  //   public static async  main (payload: DynamicPayload = {}) {
  //     for (const key in payload as DynamicPayload) {
  //       if (!payload[key]) {
  //         return `The ( ${key} )  field is empty.`
  //       }
  //       if (payload[key] == '') {
  //         return `The ( ${key} )  field is empty.`
  //       }
  //     }
  //     return true
  //   }

  private payload: DynamicPayload

  constructor (payload: DynamicPayload = {}) {
    this.payload = payload
  }

  public validate () {
    for (const key in this.payload as DynamicPayload) {
      if (!this.payload[key]) {
        return `The ( ${key} )  field is empty.`
      }
      if (this.payload[key] === '') {
        return `The ( ${key} )  field is empty.`
      }
    }
    return true
  }
}
