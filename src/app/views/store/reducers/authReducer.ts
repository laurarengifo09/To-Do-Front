export interface Action{
    type:String;
    payload:any
}

const isAuthenticated = {loggedIn: false};


export function authReducer(state= isAuthenticated, action:Action){
    switch(action.type){
        case 'Login':
            return {...action.payload, loggedIn:true};
        case 'logout':
            return {loggedIn:false}
        default:
            return state;

    }
}