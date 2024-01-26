import {
    REQUEST_USER_LOGIN,
    SUCCESS_USER_LOGIN,
    FAIL_USER_LOGIN,
    REQUEST_USER_LOAD,
    SUCCESS_USER_LOAD,
    FAIL_USER_LOAD,
    REQUEST_USER_LOGOUT,
    SUCCESS_USER_LOGOUT,
    FAIL_USER_LOGOUT,
    REQUEST_USER_RESET
} from "../ReduxConstants/userConstants"


//login information
export const login = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_USER_LOGIN:
            return{
                loading:true,

            };
        case SUCCESS_USER_LOGIN:
            return{
                loading:false,
                isAuth:true,
                response:action.payload
                
            }
        case FAIL_USER_LOGIN:
            return{

                loading:false,
                isAuth:false,
                response:action.payload
               
            }
        case REQUEST_USER_RESET:
            return {}    
        default:
            return state
    }
}


//login information
export const loadUser = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_USER_LOAD:
            return{
                loading:true,

            };
        case SUCCESS_USER_LOAD:
            return{
                loading:false,
                isAuth:action.payload.loadUser,
                response:action.payload.user
                
            }
        case FAIL_USER_LOAD:
            return{

                loading:false,
                isAuth:false,
                response:action.payload.message
               
            }
        case REQUEST_USER_RESET:
            return {}
        default:
            return state
    }
}



//logout user
export const logoutUser = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_USER_LOGOUT:
            return{
                loading:true,

            };
        case SUCCESS_USER_LOGOUT:
            return{
                loading:false,
                response:action.payload
                
            }
        case FAIL_USER_LOGOUT:
            return{

                loading:false,
                response:action.payload.message
               
            }
        case REQUEST_USER_RESET:
            return {}
        default:
            return state
    }
}

