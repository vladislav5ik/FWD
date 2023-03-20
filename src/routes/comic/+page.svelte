<script lang="ts">
	import ComicComponent from "$lib/Comic.svelte";
	import * as data from "$lib/data";
</script>

<ComicComponent email={data.comic_email} />
