//constantes

let initialDate = {
    loggedIn: false
}

let LOGIN = 'LOGIN'

//reducer
export default function reducer (state = initialDate, action){
    switch(action.type){
        case LOGIN:
        default:
            return state
    }
}
//actions (actions creators)
