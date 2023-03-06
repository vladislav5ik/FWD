interface Comic {
    title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
    day: string;
}

async function get_comic_id() {
    const url = new URL("https://fwd.innopolis.app/api/hw2");
    const params = {
        email: "v.spigin@innopolis.university"
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
    const comic : Comic = await fetch(url).then(response => response.json());
    const title = document.getElementById("comic_title") as HTMLHeadingElement;
    const image = document.getElementById("comic_img") as HTMLImageElement;
    const date = document.getElementById("comic_date") as HTMLParagraphElement;
    title.textContent = comic.title;
    image.src = comic.img;
    image.alt = comic.alt;
    image.hidden = false;
    const comic_year = parseInt(comic.year);
    const comic_month = parseInt(comic.month) - 1; // months are 0-indexed
    const comic_day = parseInt(comic.day);
    const comic_date : Date = new Date(comic_year, comic_month, comic_day);
    date.textContent = comic_date.toLocaleDateString();
}

get_comic();