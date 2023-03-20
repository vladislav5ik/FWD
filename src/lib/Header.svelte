<script lang="ts">
	import type { Link } from '$lib/types';
	import LinkComponent from '$lib/Link.svelte';
	export let links: Link[] = [];
</script>

<header>
	<nav>
		<ul class="links-list">
			{#each links as link}
				<li class="link">
					<LinkComponent {link} rightIcon="" />
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.links-list {
		display: flex;
		flex-direction: row;
		list-style: none;
		padding: 0;
		margin: 0;
		margin-bottom: 5px;
		position: relative;
		height: 3em;
		justify-content: center;
		align-items: center;
		background-size: contain;
	}
	.link {
		margin-right: 3px;
	}
</style>
