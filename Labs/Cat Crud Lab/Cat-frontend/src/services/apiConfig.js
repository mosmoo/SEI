import axios from 'axios'

let apiUrl; //endpoint to my database

const apiUrls = {
    production:'www.cat-crud-api.heroku.com',
    development:'http://localhost:3000/api'
}
//to check, go to console.log window.location.hostname

if (window.location.hostname ==='localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}
// instance of axios that always knows how to use the right url

const api = axios.create({
    baseURL: apiUrl,
})
export default api;