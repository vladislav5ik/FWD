<script lang="ts">
    import type {Skill} from "./types";
    export let skill: Skill;
</script>

<div class="skill">
    {#if skill.level}
        {skill.name} {skill.level}
    {:else}
        {skill.name}
    {/if}
</div>

<style>
    .skill {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #DADCE0;
        text-align: center;
    }
</style>
