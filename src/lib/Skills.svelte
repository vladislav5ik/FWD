<script lang="ts">
	import type { Skill } from '$lib/types';
	import SkillComponent from '$lib/Skill.svelte';
	export let title: string = 'Skills title';
	export let skills: Skill[] = [];
</script>

<div class="skills">
	<h1 class="skills-title">{title}</h1>
	{#if skills.length === 0}
		<p>There are no skills to show</p>
	{:else}
		<ul class="skills-list">
			{#each skills as skill}
				<li class="skill">
					<SkillComponent {skill} />
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.skills-title {
		text-align: left;
		font-weight: bold;
		margin-bottom: 5px;
	}
	.skills-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}
</style>
