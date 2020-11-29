import { getStorageState } from "../utilities/userDataStorage";

export const ROOT_URL = 'https://challenge.maniak.co/api/';

export const getAxiosConfig = async () => {
  const token = await getStorageState();
  const Authorization = `Bearer ${token}`;
  return { 'headers': { Authorization } }
};
