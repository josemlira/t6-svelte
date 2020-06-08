<script>
  import { onMount } from 'svelte'
  import AutoComplete from 'simple-svelte-autocomplete'
  import { countries } from '../store'

  let countrySelected = undefined

  onMount(() => {
    countries.fetch()
  })

  function getFormattedDate() {
    const date = new Date()
    let month = `${date.getMonth() + 1}`
    let day = `${date.getDate()}`
    const year = `${date.getFullYear()}`
    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    return [year, month, day].join('-')
  }

  function submit() {
    if (countrySelected) {
      countries.getCountry(countrySelected.Country, getFormattedDate())
    }
  }

</script>

<style>
  .container {
    margin: 7px;
  }
</style>

<div>
  <AutoComplete
    placeholder="Choose a country"
    items={$countries.names}
    labelFieldName="Country"
    bind:selectedItem={countrySelected}
  />
  <button class="button is-info" on:click={submit}>Send</button>
</div>
