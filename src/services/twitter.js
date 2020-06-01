const USERNAME = 'username'
const PASSWORD = 'password'
const BASE_URL = 'https://api.twitter.com'

function getAuthHeaders() {
  return {
    'Authorization': 'Basic ' + btoa(USERNAME + ':' + PASSWORD),
  }
}

function getAuthFormData() {
  return new URLSearchParams({
    'grant_type': 'client_credentials',
  })
}

export async function generateToken() {
  const url = `${BASE_URL}/oauth2/token`
  const headers = getAuthHeaders()
  console.log(headers)
  const res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: getAuthFormData(),
  })
  console.log(res)
  return res.json()
}
