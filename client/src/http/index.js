const axios = require('axios')
const API_URL = `http://localhost:3000/api`
const $api = axios.create({
  winCreditals: true,
  baseURL: API_URL,
})

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})

module.exports = $api