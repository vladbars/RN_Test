import { apiGet } from '@api'
import { API_URL } from '@config'
import { apiSaga } from './redux'

function getPosts() {
  const url = `${API_URL}/posts`
  return apiSaga(apiGet, url)
}

export default { getPosts }
