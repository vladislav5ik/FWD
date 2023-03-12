<script lang="ts">
    import type {Link} from "./types";
    import LinkComponent from "./Link.svelte";
    export let links : Link[] = [];
</script>

<div class="links">
    {#if links.length === 0}
        <p>No links yet</p>
    {/if}

    {#each links as link}
        <LinkComponent link={link} />
    {/each}
</div>