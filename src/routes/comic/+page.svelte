<script lang="ts">
	import ComicComponent from '$lib/Comic.svelte';
	import {comic_email} from '$lib/comicFieldsData';
</script>

<ComicComponent email={comic_email} />
