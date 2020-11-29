import axios from 'axios';
import { getAxiosConfig, ROOT_URL } from "./config";

export const getHomeData = async () => {
  const axiosConfig = await getAxiosConfig()
  // We want to get authentication headers
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}images`, axiosConfig)
      .then((data) => {
        resolve(data)
      }).catch((err) => reject(err))
  })
}
