<script lang="ts">
	import type { ExperienceItem } from '$lib/types';
	import Card from '$lib/Card.svelte';
	export let experienceItem: ExperienceItem;
</script>

<Card>
	<div slot="card-header">
		<div>
			<h2 class="position">{experienceItem.position}</h2>
			<h3 class="company">{experienceItem.company}</h3>
		</div>
		<div>
			<span class="date">{experienceItem.date}</span>
		</div>
	</div>
	<p slot="card-body">{experienceItem.description}</p>
</Card>

<style>
	.position,
	.company {
		margin: 5px;
	}
</style>
