<script lang="ts">
    import type {Link} from "./types";
    export let link: Link;
</script>

<a id={link.linkId} href="{link.linkDestination}">
    <i class="{link.linkIconClass}"></i>
    {link.linkText}
    <i class="fa fa-external-link"></i>
</a>
