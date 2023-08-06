# react-form-validation-checker

  // import { validations } from "react-form-validation-checker"


  async function formValidate() {

    if(await validations(payload) == true) {
      // call api here..
    }
    else{

      // throw error message like  'the name field is empty' dynimically 
      // toast.success(await validations(payload), {position:"top-center"})

    }
    
  }