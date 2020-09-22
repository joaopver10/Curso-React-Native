import axios from 'axios'


// https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=788347d95c514e16ee87

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7'
})

export default api