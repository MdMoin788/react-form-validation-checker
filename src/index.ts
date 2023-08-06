 export type formTypes = Record<string, string | number | boolean | object | Array<any>>

 

export const validations = async (payload: formTypes = {}  ) => {

  for (const key in payload as formTypes ) {
    if (!payload[key]) {
      return `The ( ${key} )  field is empty.`
    }
    if (payload[key] == '') {
      return `The ( ${key} )  field is empty.`
    }
  }
  return true 
}




