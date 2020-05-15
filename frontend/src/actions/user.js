import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


const baseURL = 'https://us-central1-leddit-4be86.cloudfunctions.net/app'


export const autenticateLogin = (email, password) => async (dispatch) => {
    const loginInformation = {
        email,
        password,
    }

    try {
        const response = await axios.post(`${baseURL}/login`, loginInformation);
        
        const userToken = response.data.token;
        window.localStorage.setItem("token", userToken);
        
        dispatch(push(routes.feed))
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar fazer login.")
    }
}


export const createUser = (email, password, username) => async (dispatch) => {
    const registerInformation = {
        email,
        password,
        username,
    }

    try {
        const response = await axios.post(`${baseURL}/signup`, registerInformation);

        const userToken = response.data.token;
        window.localStorage.setItem("token", userToken); 
        
        dispatch(push(routes.feed))

        window.alert("registro realizado!")
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar se registrar.")
    }
}

export const logOut = () => async (dispatch) => {
    window.localStorage.removeItem("token");
    dispatch(push(routes.root))
}
