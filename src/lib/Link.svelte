<script lang="ts">
    import type {Link} from "$lib/types";
    export let link: Link;
    export let rightIcon: string = "fa fa-external-link";
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<a class="link" id={link.linkId} href="{link.linkDestination}">
    <i class="link-left-icon {link.linkIconClass}"></i>
    <span class="link-text">{link.linkText}</span>
    {#if rightIcon}
        <i class="link-right-icon {rightIcon}"></i>
    {/if}
</a>

<style>
    .link {
        max-width: 100%;
        padding: 10px;
        align-items: center;
        border: 1px solid #DADCE0;
        border-radius: 5px;
        background-color: #F5F5F5;
        text-decoration: none;
        color: #000000;
        display: flex;
    }
    .link-left-icon {
        background-color: #DADCE0;
        border-radius: 5px;
        margin-left: 0;
        margin-right: 5px;
        padding: 3px;
    }
    .link-right-icon {
        background-color: transparent;
        margin-left: 5px;
        margin-right: 0;
    }
    .link-text {
        flex-grow: 1;
        word-wrap: anywhere;
    }
</style>