<script lang="ts">
    import type {Bio} from "./types";
    export let bio: Bio;
</script>

<div id="header">
    <h1 class="name">{bio.name}</h1>
    <h2 class="position">{bio.position}</h2>
</div>
<div id="summary">
    <h1>About me</h1>
    <p>{bio.description}</p>
</div>