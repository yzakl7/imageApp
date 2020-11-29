import SecureStorage from 'react-native-secure-storage';
import STORAGE_KEYS from '../constants';

const {  AUTH_TOKEN_STORAGE_KEY } = STORAGE_KEYS;

export const setStorageState = async (token) => {
  await SecureStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
};

export const getStorageState =() => {
  return new Promise((resolve, reject) => {
    const storageState = SecureStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
    .then((token)=> {
      resolve(token)
    }).catch((error)=> {
      reject(error)
    })
  })
};

export const clearStorage = async () => {
  return new Promise((resolve) => {
    SecureStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
      .then(() => resolve())
  })
};

