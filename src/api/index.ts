import axios from 'axios'
const axiosInstance = axios.create()

async function apiGet({ uri }: { uri: string }): Promise<any> {
  try {
    const response = await axiosInstance.get(uri)
    return response
  } catch (error) {
    return error
  }
}

export { apiGet }
