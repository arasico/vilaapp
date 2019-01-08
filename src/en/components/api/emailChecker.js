 
 //
 // email checker function return true or false
 //

  const emailChecker = (email) => {
    let reg = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(reg.test(email) === false)
       return false
    
    return true
  }
  
  export default emailChecker;


 
