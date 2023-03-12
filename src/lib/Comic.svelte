<script lang="ts">
    import type {Comic} from "./types";
    export let email: string;
    let img_scr : string = "data:,";
    let img_alt : string = "comic";
    let comic_title : string = "Comic title";
    let comic_date : string = "date";

    async function get_comic_id() {
        const url = new URL("https://fwd.innopolis.app/api/hw2");
        const params = {
            email: email
        };
        url.search = new URLSearchParams(params).toString();
        const comic_id: number = await fetch(url).then(response => response.json());
        return comic_id;
    }

    async function get_comic() {
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

<h1>Comic</h1>
<div id="comic">
    <p id="comic_date">{comic_date}</p>
    <h2 id="comic_title">{comic_title}</h2>
    <img id="comic_img" src={img_scr} alt={img_alt}>
</div>