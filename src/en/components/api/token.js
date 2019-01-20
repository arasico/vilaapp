/*

Get TOken Component from localStorg

*/

// console.log(localStorage.getItem('authorization'))
 
    function getToken(token){
        if(token !== null)
            return token
     return 'null' 
    }

    const Token = getToken(localStorage.getItem('authorization'))


export default Token;


