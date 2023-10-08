import { apiGet } from '@api'
import { API_URL } from '@config'
import { apiSaga } from './redux'

function getProfile(userId: string) {
  const url = `${API_URL}/users/${userId}`
  return apiSaga(apiGet, url)
}

export default { getProfile }
