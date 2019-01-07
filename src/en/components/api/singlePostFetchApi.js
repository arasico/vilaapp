import React,{Component} from 'react';


export const postData = {
     fetching(data) {
        const url = `http://api.vilaapp.ir/api/v1/contactUs`
       // Default options are marked with *
    
         return fetch(url, {
             method: "POST", 
             mode: "cors", 
             cache: "no-cache", 
             credentials: "same-origin", 
             headers: {
                 "Content-Type": "application/json",
                 // "Content-Type": "application/x-www-form-urlencoded",
             },
             redirect: "follow", 
             referrer: "no-referrer", 
             body: JSON.stringify(data), 
         })
         .then(response =>  response.json())
         .then(responsJson => console.log(responsJson))
     }
}


 