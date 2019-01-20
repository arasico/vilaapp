import { FETCH_POSTS, NEW_POST, ADD_INCREMENT , ADD_DECREMENT, ON_SELECT_VALUE} from './type'

export const fetchPosts = () => postData => dispatch => {
    console.log(postData)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>  dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
   
}


export const createPost = () => postData => dispatch => {
console.log(postData)

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers: {
            'content-type' : 'applicaion/json'
        },
        body : JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type:NEW_POST,
        payload:data
    }))

}


export const IncrementData = (sum) => dispatch => {

   console.log(sum)

   return  dispatch({
        type:ADD_INCREMENT,
        payload:   sum + 1
    }) 

}



export const DecrementData = (sum) => dispatch => {
    console.log("Decrement");
if(sum > 0)
    return dispatch({
        type: ADD_DECREMENT,
        payload: sum - 1
    })
 
}

// export const SelectValue = (value) => dispatch => {
//     console.log(value);

//     return dispatch({
//         type: ON_SELECT_VALUE,
//         payload : value
//     })
// } 
 
export const SelectValue = (value) => dispatch => {
  console.log(value)

 
    return dispatch({
        type: ON_SELECT_VALUE,
        payload : value
    })
}