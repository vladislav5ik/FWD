<script lang="ts">
    import type {ExperienceItem} from "./types";
    import ExperienceItemComponent from "./ExperienceItem.svelte";
    export let title: string = "Experience title";
    export let experience : ExperienceItem[] = [];

</script>

<div class="experience">
    <h1>{title}</h1>
    {#if experience.length === 0}
        <p>No experience yet</p>
    {:else}
        <ul>
            {#each experience as item}
                <li>
                    <ExperienceItemComponent experienceItem={item} />
                </li>
            {/each}
        </ul>
    {/if}
</div>