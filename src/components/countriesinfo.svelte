<script>
  import Accordion from 'svelte-accordion'
  import { countries } from '../store'

</script>

<style>
</style>

<div>
  <Accordion value="{$countries.selectedCountry}">
    {#each Object.values($countries.all) as item}
      <Accordion.Section title="{item.name}">
        <p><small>Total Confirmed: {item.total.confirmed}</small></p>
        <p><small>Total Actives: {item.total.actives}</small></p>
        <p><small>Total Deaths: {item.total.deaths}</small></p>
        <p><small>Total Recovered: {item.total.recovered}</small></p>
      </Accordion.Section>
    {/each}
  </Accordion>
</div>
