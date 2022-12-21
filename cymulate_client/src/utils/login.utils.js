import axios from 'axios';

const serverUrl ="https://localhost:5000/user";
export function login(email, password){
        // Send a request to the server to login
     return axios.post(process.env.USER_SERVICE_API_URL+'/login', { email, password })
}

export function signup( password, email){
  debugger;
  // Send a request to the server to login
 return axios.post(serverUrl+'/signup', { password, email })}