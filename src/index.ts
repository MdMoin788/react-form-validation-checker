type DynamicPayload = Record<
  string,
  string | number | boolean | object | Array<any>
>

// export class Validations {
//   public async  main (payload: DynamicPayload = {}) {
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
// }


export const reactFormValidation = async (payload: DynamicPayload = {}  ) => {

  for (const key in payload as DynamicPayload ) {
    if (!payload[key]) {
      return `The ( ${key} )  field is empty.`
    }
    if (payload[key] == '') {
      return `The ( ${key} )  field is empty.`
    }
  }
  return true 
}
