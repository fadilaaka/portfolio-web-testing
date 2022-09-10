import API_ENDPOINT from './api-endpoint'
import ErrorDetail from './error-detail'
import CONFIG from './config'

class RestaurantSource {
  static async Home () {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async DetailResto (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const result = await response.json()

    if (response.ok) {
      console.log(result)
      return result
    } else {
      const error = ErrorDetail
      document.querySelector('main-content').innerHTML = error
    }
  }

  static async PostReview (post) {
    const response = await fetch(API_ENDPOINT.POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    console.log('Ini response nya : ', response)
    return response
  }
}

export default RestaurantSource
