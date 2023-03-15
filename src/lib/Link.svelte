<script lang="ts">
    import type {Link} from "./types";
    export let link: Link;
</script>

<a class="link" id={link.linkId} href="{link.linkDestination}">
    <i class="link-left-icon {link.linkIconClass}"></i>
    <span class="link-text">{link.linkText}</span>
    <i class="link-right-icon fa fa-external-link"></i>
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