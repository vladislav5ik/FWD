<script lang="ts">
    import type {Skill} from "./types";
    export let skill: Skill;
</script>

{#if skill.level}
    {skill.name} {skill.level}
{:else}
    {skill.name}
{/if}