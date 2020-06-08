const BASE_URL = 'https://api.covid19api.com'

function getBaseHeaders() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

export const getCountry = async (name, date) => {
  const url = `${BASE_URL}/country/${name}?from=2020-03-01T00:00:00Z&to=${date}T00:00:00Z`
  const res = await fetch(url, {
    method: 'GET',
    headers: getBaseHeaders(),
  })
  return res.json()
}

export const getCountries = async () => {
  const url = `${BASE_URL}/countries`
  const res = await fetch(url, {
    method: 'GET',
    headers: getBaseHeaders(),
  })
  return res.json()
}

export const getWorld = async () => {
  const url = `${BASE_URL}/world/total`
  const res = await fetch(url, {
    method: 'GET',
    headers: getBaseHeaders(),
  })
  return res.json()
}
