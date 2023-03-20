<script lang="ts">
    import type {ExperienceItem} from "$lib/types";
    import ExperienceItemComponent from "$lib/ExperienceItem.svelte";
    export let title: string = "Experience title";
    export let experience : ExperienceItem[] = [];

</script>

<div class="experience">
    <h1 class="experience-title">{title}</h1>
    {#if experience.length === 0}
        <p>No experience yet</p>
    {:else}
        <ul class="experience-list">
            {#each experience as item}
                <li class="experience-item">
                    <ExperienceItemComponent experienceItem={item} />
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .experience-list {
        list-style: none;
        padding: 0;
        margin: 0;
}

    .experience-item {
        margin-bottom: 1rem;
    }

    </style>