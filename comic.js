
async function get_comic_id() {
    let url = new URL("https://fwd.innopolis.app/api/hw2");
    let params = {
        email: "v.spigin@innopolis.university"
    };
    url.search = new URLSearchParams(params).toString();
    return await fetch(url).then(response => response.json());
}

async function get_comic() {
    let comic_id = await get_comic_id();
    let url = new URL("https://getxkcd.vercel.app/api/comic");
    let params = {
        num: comic_id
    };
    url.search = new URLSearchParams(params).toString();
    let comic = await fetch(url).then(response => response.json());
    document.getElementById("comic_title").textContent = comic.title;
    document.getElementById("comic_img").src = comic.img;
    document.getElementById("comic_img").alt = comic.alt;
    document.getElementById("comic_img").hidden = false;
    let comic_year = parseInt(comic.year);
    let comic_month = parseInt(comic.month) - 1; // months are 0-indexed
    let comic_day = parseInt(comic.day);
    document.getElementById("comic_date").textContent = new Date(comic_year, comic_month, comic_day).toLocaleDateString();
}

get_comic();