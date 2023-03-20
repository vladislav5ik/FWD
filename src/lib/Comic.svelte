<script lang="ts">
    import type { Comic } from "$lib/types";
    import Card from "$lib/Card.svelte";

    export let email: string;
    let img_scr : string = "data:,";
    let img_alt : string = "comic";
    let comic_title : string = "Comic title";
    let comic_date : string = "date";

    async function get_comic_id() : Promise<number> {
        const url = new URL("https://fwd.innopolis.app/api/hw2");
        const params = {
            email: email
        };
        url.search = new URLSearchParams(params).toString();
        return await fetch(url).then(response => response.json());
    }

    async function get_comic() : Promise<void> {
        const comic_id : string = await get_comic_id().then(id => id.toString());
        const url = new URL("https://getxkcd.vercel.app/api/comic");
        const params = {
            num: comic_id
        };
        url.search = new URLSearchParams(params).toString();
        const comic: Comic = await fetch(url).then(response => response.json());
        const comic_year = parseInt(comic.year);
        const comic_month = parseInt(comic.month) - 1; // months are 0-indexed
        const comic_day = parseInt(comic.day);
        comic_date = new Date(comic_year, comic_month, comic_day).toLocaleDateString();
        comic_title = comic.title;
        img_scr = comic.img;
        img_alt = comic.alt;
    }
    get_comic();
</script>

<Card>
    <div slot="card-header">
        <button on:click={get_comic}>Get new comic</button>
        <h2 class="comic_title">Comic: {comic_title}</h2>
        <span class="comic_date">{comic_date}</span>
    </div>
    <div slot="card-body">
        <img class="comic_img" src={img_scr} alt={img_alt}/>
    </div>
</Card>

<style>
    .comic_img {
        margin-top: 1em;
        display: block;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    button {
        background-color: transparent;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #DADCE0;
        max-height: 3em;
    }
</style>