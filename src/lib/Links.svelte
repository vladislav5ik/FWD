<script lang="ts">
	import type { Link } from '$lib/types';
	import LinkComponent from '$lib/Link.svelte';
	export let links: Link[] = [];
</script>

<div class="links">
	{#if links.length === 0}
		<p>No links yet</p>
	{/if}
	<ul class="links-list">
		{#each links as link}
			<li class="link">
				<LinkComponent {link} />
			</li>
		{/each}
	</ul>
</div>

<style>
	.links-list {
		display: flex;
		flex-direction: column;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.link {
		margin-bottom: 3px;
	}
</style>
