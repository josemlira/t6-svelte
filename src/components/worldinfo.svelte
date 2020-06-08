<script>
  import { onMount } from 'svelte'
  import { world } from '../store'

  onMount(() => world.fetch())
</script>

<style>
</style>

<div>
  <p class="menu-label">World Info</p>
  <ul class="menu-list">
    <li> Total Confirmed: {$world.confirmed} </li>
    <li> Total Actives: {$world.actives} </li>
    <li> Total Deaths: {$world.deaths} </li>
    <li> Total Recovered: {$world.recovered} </li>
  </ul>
</div>
