const BASE_URL = 'https://domino-backend-rhg3.onrender.com/api'

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
