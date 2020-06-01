<script>
  import { generateToken } from '../services/twitter'

  export const position = undefined
  let trends = undefined

</script>

<style>
  .container {
    margin: 7px;
  }
</style>

<div class="box">
  <div class="container columns">
    <aside class="menu">
      <p class="menu-label">Trends</p>
      <ul class="menu-list">
        <li><a>#TrendingTopic1</a></li>
        <li><a>#TrendingTopic2</a></li>
        <li><a>#TrendingTopic3</a></li>
        <li><a>#TrendingTopic4</a></li>
        <li><a>#TrendingTopic5</a></li>
        <li><a>#TrendingTopic6</a></li>
      </ul>
    </aside>
    <div class="column">
      <div class="is-centered">
        Aquí iría el gráfico seleccionando un trending topic del lado izquierdo (otro componente)
      </div>
      <div class="buttons is-centered">
        <button class="button is-info">Twittear #TT</button>
      </div>
    </div>
  </div>
</div>
