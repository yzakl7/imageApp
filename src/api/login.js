import axios from 'axios';
import { clearStorage, setStorageState } from '../utilities/userDataStorage';
import { axiosConfig, ROOT_URL } from "./config";

  export const login = ({username, password}, dispatch) => {
    return new Promise((resolve, reject) => {
      axios.post(`${ROOT_URL}login`, { 
        username,
        password
      }).then(({data: {token}}) => {
        setStorageState(token)
        dispatch({ type: 'SIGN_IN', token });
        resolve(token)
      }).catch((error) => {
        reject(error)
      });
    })
    
  }

  export const logOut = async (dispatch) => {
    return new Promise((resolve) => {
      clearStorage().then(() => {
        dispatch({ type: 'SIGN_OUT', token: '' });
        resolve()
      })
    })
  }
  
  