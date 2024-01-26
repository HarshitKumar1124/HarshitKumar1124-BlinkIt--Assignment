import axios from "axios"
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




// login user
export const loginUser = (Obj)=>async(dispatch)=>{

    console.log('login trigger')
    dispatch({
        type:REQUEST_USER_LOGIN
    })

    try{

        const {data} = await axios.post('http://localhost:5500/api/v1/login/user',Obj);

        console.log('login successful',data)

        dispatch({
            type:SUCCESS_USER_LOGIN,
            payload:data
        })
    }catch(error)
    {
        console.log('login failed',error.message)
        dispatch({
            type:FAIL_USER_LOGIN,
            payload:error.response.data.message
        })
    }


}


//load user
export const loadUser = ()=>async(dispatch)=>{

    console.log('loadding current user')

    dispatch({
        type:REQUEST_USER_LOAD
    })

    try{

        const {data} = await axios.get('http://localhost:5500/api/v1/load/user')

        console.log('loadding successful',data)

        dispatch({
            type:SUCCESS_USER_LOAD,
            payload:data
        })


    }catch(error)
    {
        console.log('Loading user error',error.message)
        dispatch({
            type:FAIL_USER_LOAD,
            payload:error.message
        })
    }
}


//loGOUT user
export const logoutUser = ()=>async(dispatch)=>{

    console.log('logging out current user')

    dispatch({
        type:REQUEST_USER_LOGOUT
    })

    try{

        const {data} = await axios.post('http://localhost:5500/api/v1/logout/user')

        console.log('logging out successful',data)

        dispatch({
            type:SUCCESS_USER_LOGOUT,
            payload:data
        })


    }catch(error)
    {
        console.log('Logging out user error',error.message)
        dispatch({
            type:FAIL_USER_LOGOUT,
            payload:error.message
        })
    }
}



export const ResetState = ()=>async(dispatch)=>{

    dispatch({
        type:REQUEST_USER_RESET
    })

}