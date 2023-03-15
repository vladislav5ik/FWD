<script lang="ts">
    import type {Link} from "./types";
    import LinkComponent from "./Link.svelte";
    export let links : Link[] = [];
</script>

<div class="links">
    {#if links.length === 0}
        <p>No links yet</p>
    {/if}
    <ul class="links-list">
        {#each links as link}
            <li class="link">
                <LinkComponent link={link} />
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