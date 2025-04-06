import axios from 'axios'

// I know that we don't need this, just was checking something

const api = axios.create({
  baseURL: '',
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
//   paramsSerializer(params) {
//     return Qs.stringify(params, { arrayFormat: 'repeat' })
//   }
})

export default { api }