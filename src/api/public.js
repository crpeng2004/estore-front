import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:15000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
// axios.defaults.headers.put['Content-Type'] = 'application/x-www=form-urlencoded'
// axios.defaults.baseURL = 'http://localhost:10073'

export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchDel (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, {params}).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPut (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPutForm (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
