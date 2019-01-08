 
 //
 // email checker function return true or false
 //

 const mobileChecker = (mobile) => {
    let reg = new RegExp(/^[0][1-9]\d{9}$/);
    if(reg.test(mobile) === false)
       return false
    
    return true
  }
  
  export default mobileChecker;


 
