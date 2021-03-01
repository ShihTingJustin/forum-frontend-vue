import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://url-shortener-api-server.herokuapp.com'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'center-start',
  showConfirmButton: false,
  timer: 3000
})
