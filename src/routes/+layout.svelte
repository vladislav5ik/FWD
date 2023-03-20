<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { headerLinks } from '$lib/data';
</script>

<header>
	<Header links={headerLinks} />
</header>

<main>
	<slot />
</main>

<footer>
	<Footer />
</footer>

<style>
	main {
		background-color: #ffffff;
		box-shadow: 0 0 100px -39px rgba(212, 214, 180, 1);
		overflow: hidden;
		max-width: 1000px;
		margin: auto;
		font-family: Arial, Helvetica, sans-serif;
	}

	header {
		background-color: #ffffff;
		box-shadow: 0 0 100px -39px rgba(212, 214, 180, 1);
		display: flex;
		justify-content: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
