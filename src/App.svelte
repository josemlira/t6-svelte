<svelte:head>
	<title>TrendSpy</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.2/css/bulma.min.css">
</svelte:head>

<script>
	import Trends from './components/trends.svelte'
	import Error from './components/error.svelte'

	export let position = undefined
	let requesting = true
	let error = undefined

	navigator.geolocation.getCurrentPosition(
		(pos) => {
			position = pos.coords
			console.log(position)
			requesting = false
		},
		(err) => {
			error = err.message
			requesting = false
		},
	)
</script>

<style>
	.main-container {
		margin-top: 100px;
	}

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
	<div class="columns">
		<div class="column"/>
		<div class="column is-8">
			<h1>Welcome to TrendSpy!</h1>
			<div class="main-content">
				{#if position}
					<Trends />
				{:else if requesting}
					<div class="notification"></div>
				{:else}
					<Error level="danger" error="No fue posible visualizar la aplicación">
						<p>{error}</p>
					</Error>
				{/if}
			</div>
		</div>
		<div class="column"/>
	</div>
</div>
