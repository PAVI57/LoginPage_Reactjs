import axios from "axios";
import { getUserData } from "./Storage";

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";

const API_KEY = "AIzaSyBPqrmZZvQG59w1_4vjFPb4iZpZ65BEvHM"; // Replace this with your actual API key
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`;
const USER_DETAILS_URL = `/accounts:lookup?key=${API_KEY}`;

export const RegisterApi = (inputs) => {
    let data = { displayName: inputs.name, email: inputs.email, password: inputs.password };
    return axios.post(REGISTER_URL, data)
                .catch(error => {
                    console.error("Error registering user:", error);
                    throw error;
                });
};

export const LoginApi = (inputs) => {
    let data = { email: inputs.email, password: inputs.password };
    //alert("reacted")
    return axios.post(LOGIN_URL, data)
                .catch(error => {
                    //alert("i i o error");
                   // console.log("kavin====>"+JSON.stringify(data.data))
                   // console.error("Error logging in:", error);
                   // console.log("kavin====>"+data)
                    return error;
                });
};

export const UserDetailsApi = () => {
    let data = { idToken: getUserData() };
    return axios.post(USER_DETAILS_URL, data)
                .catch(error => {
                    console.error("Error retrieving user details:", error);
                    throw error;
                });
};
