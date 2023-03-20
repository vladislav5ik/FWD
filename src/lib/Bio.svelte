<script lang="ts">
	import type { Bio } from '$lib/types';
	export let bio: Bio;
</script>

<div class="bio">
	<div class="header">
		<h1 class="name">{bio.name}</h1>
		<h2 class="position">{bio.position}</h2>
	</div>
	<div class="summary">
		<h1 class="summary-header">About me</h1>
		<p class="summary-description">{bio.description}</p>
	</div>
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
	}
	.name {
		font-size: 3rem;
		font-weight: 600;
		margin: 0;
	}
	.position {
		font-size: 2rem;
		font-weight: 500;
		margin: 0;
	}
	.summary {
		margin-top: 2rem;
	}
</style>
