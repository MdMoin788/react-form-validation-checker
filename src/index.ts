//  export type formTypes = Record<string, string | number | boolean | object | Array<any>>

 

// export const validations = async (payload: formTypes = {}  ) => {

//   for (const key in payload as formTypes ) {
//     if (!payload[key]) {
//       return `The ( ${key} )  field is empty.`
//     }
//     if (payload[key] == '') {
//       return `The ( ${key} )  field is empty.`
//     }
//   }
//   return true 
// }




export type DynamicPayload = Record<string, string | number | boolean | object | Array<any>>
export type optionalTypes = any

 const formValidation = async (
  payload: DynamicPayload = {},
  optional: optionalTypes = []
) => {
  // const types: Record<string, string> = {};

  for (const key in payload as DynamicPayload) {
    // types[key] = typeof payload[key];

    if (!payload[key] && !optional.includes(key)) {
      return `The ( ${key} )  field is empty.`
    }
    if (payload[key] == '' && !optional.includes(key)) {
      return `The ( ${key} )  field is empty.`
    }
  }

  return true
}


const cssClass: any = (payload: any, optional:any=[], color: DynamicPayload) => {
  let colors: DynamicPayload = {
    borderColor: '',
    staus: false,
  }
  
  for (const key in payload as DynamicPayload) {
    if (!payload[key] && !optional.includes(key)) {
      colors[key] = color
      return colors
    }
    if (payload[key] == '' && !optional.includes(key)) {
      colors[key] = color
      return colors
    } 
  }

  return colors
}



export const useFormValidation = {cssClass, formValidation}





