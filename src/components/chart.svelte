<script>
  import Chart from 'chart.js'
  import { onMount } from 'svelte'
  import { countries } from '../store'

  let data = {}
  let chart = undefined

  const options = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }

  const line = {
    label: '',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '',
    borderColor: '',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    borderWidth: 1,
    pointBorderColor: '',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: null,
  }

  $: {
    if ($countries.selectedCountry) {
      data = {
        labels: $countries.all[$countries.selectedCountry].days,
        datasets: [
          {
            ...line,
            label: 'Confirmed',
            backgroundColor: 'rgba(112,50,189,0.4)',
            borderColor: 'rgba(112,50,189,1)',
            pointBorderColor: 'rgba(112,50,189,1)',
            data: $countries.all[$countries.selectedCountry].confirmed,
          },
          {
            ...line,
            label: 'Deaths',
            backgroundColor: 'rgba(0,0,0,0.4)',
            pointBorderColor: 'rgba(0,0,0,1)',
            pointBorderColor: 'rgba(0,0,0,1)',
            data: $countries.all[$countries.selectedCountry].deaths,
          },
          {
            ...line,
            label: 'Recovered',
            backgroundColor: 'rgba(92,213,110,0.4)',
            borderColor: 'rgba(92,213,110,1)',
            pointBorderColor: 'rgba(92,213,110,1)',
            data: $countries.all[$countries.selectedCountry].recovered,
          },
          {
            ...line,
            label: 'Active',
            backgroundColor: 'rgba(229,91,123,0.4)',
            borderColor: 'rgba(229,91,123,1)',
            pointBorderColor: 'rgba(229,91,1123,1)',
            data: $countries.all[$countries.selectedCountry].actives,
          },
        ],
      }
    }
  }

  $: {
    if ($countries.selectedCountry && !$countries.loading) {
      if (chart) {
        chart.destroy()
      }
      chart = new Chart(document.getElementById('chart'), {
        type: 'line',
        data: data,
        options: options,
      })
    }
  }
</script>

<style>
</style>

<div>
  <div class="is-centered">
    <h1>{$countries.selectedCountry}</h1>
    <canvas id="chart"></canvas>
  </div>
</div>
