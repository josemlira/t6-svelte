<svelte:head>
	<title>CovidSpy</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.2/css/bulma.min.css">
</svelte:head>

<script>
	import WorldInfo from './components/worldinfo.svelte'
	import ChooseCountry from './components/choosecountry.svelte'
	import Chart from './components/chart.svelte'
	import CountriesInfo from './components/countriesinfo.svelte'
</script>

<style>
	.main-content {
		margin-top: 50px;
	}

	h1 {
		color: lightblue;
		font-size: 4em;
		font-weight: 100;
	}
</style>

<div class="container has-text-centered main-container">
	<h1>Welcome to CovidSpy!</h1>
	<div class="main-content">
		<div class="box">
			<div class="container columns">
				<aside class="menu column is-3">
					<WorldInfo />
					<ChooseCountry />
				</aside>
				<div class="column is-6">
					<Chart />
				</div>
				<div class="column is-3">
					<CountriesInfo />
				</div>
			</div>
		</div>
	</div>
</div>
