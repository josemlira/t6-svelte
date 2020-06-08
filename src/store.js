import { writable } from 'svelte/store'
import { getCountry, getCountries, getWorld } from './services/covid'

function createWorldStore(initial) {
  const { subscribe, set, update } = writable(initial)

  return {
    subscribe,
    fetch: async () => {
      update(state => Object.assign({}, state, { loading: true }))
      const response = await getWorld()
      if (response) {
        update(state => Object.assign({}, state, {
          confirmed: response.TotalConfirmed || 0,
          actives: (response.TotalConfirmed - response.TotalDeaths - response.TotalRecovered) || 0,
          deaths: response.TotalDeaths || 0,
          recovered: response.TotalRecovered || 0,
        }))
      }
      update(state => Object.assign({}, state, { loading: false }))
    },
    reset: () => set(initial),
  }
}

function createCountriesStore(initial) {
  const { subscribe, set, update } = writable(initial)

  return {
    subscribe,
    fetch: async () => {
      update(state => Object.assign({}, state, { loading: true }))
      const response = await getCountries()
      if (response) {
        update(state => Object.assign({}, state, { names: response }))
      }
      update(state => Object.assign({}, state, { loading: false }))
    },
    getCountry: async (countryName, date) => {
      update(state => Object.assign({}, state, { loading: true }))
      const response = await getCountry(countryName, date)
      if (response && typeof(response) === 'object') {
        update(state => {
          const confirmed = response.map(day => day.Confirmed)
          const actives = response.map(day => day.Active)
          const deaths = response.map(day => day.Deaths)
          const recovered = response.map(day => day.Recovered)
          const days = response.map(day => day.Date.split('T')[0])
          const country = {
            name: countryName,
            data: response,
            days,
            confirmed,
            actives,
            deaths,
            recovered,
            total: {
              confirmed: confirmed.reduce((acc, curr) => acc + curr, 0),
              actives: actives.reduce((acc, curr) => acc + curr, 0),
              deaths: deaths.reduce((acc, curr) => acc + curr, 0),
              recovered: recovered.reduce((acc, curr) => acc + curr, 0),
            },
          }
          const newAll = Object.assign({}, state.all)
          newAll[countryName] = country
          return Object.assign({}, state, { all: newAll, selectedCountry: countryName })
        })
      }
      update(state => Object.assign({}, state, { loading: false }))
    },
    reset: () => set(initial),
  }
}

export const world = createWorldStore({
  confirmed: 0,
  actives: 0,
  deaths: 0,
  recovered: 0,
  loading: false,
})
export const countries = createCountriesStore({
  all: {},
  selectedCountry: '',
  names: [],
  loading: false,
})
