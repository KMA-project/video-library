export const LOGIN_ACCOUNT_REQUEST = "LOGIN_ACCOUNT_REQUEST"; 
export const LOGIN_ACCOUNT_SUCCESS = "LOGIN_ACCOUNT_SUCCESS"; 
export const LOGIN_ACCOUNT_ERROR = "LOGIN_ACCOUNT_ERROR"; 

export const loginAccountRequest = (payload) => ({
    type: LOGIN_ACCOUNT_REQUEST,
    payload
})

export const loginAccountSuccess = (payload) => ({
    type: LOGIN_ACCOUNT_SUCCESS,
    payload
})

export const loginAccountError = (error) => ({
    type: LOGIN_ACCOUNT_ERROR,
    payload: error
})