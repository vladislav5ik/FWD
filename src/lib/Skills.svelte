<script lang="ts">
    import type {Skill} from "./types";
    import SkillComponent from "./Skill.svelte";
    export let title: string = "Skills title";
    export let skills : Skill[] = [];
</script>

<div class="skills">
    <h1>{title}</h1>
    {#if skills.length === 0}
        <p>There are no skills to show</p>
    {:else}
        <ul>
            {#each skills as skill}
                <li>
                    <SkillComponent skill={skill} />
                </li>
            {/each}
        </ul>
    {/if}
</div>