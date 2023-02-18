// Get the modal
var modal = document.getElementById("comic_modal");

// Get the button that opens the modal
var btn = document.getElementById("comic_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = async function() {
    modal.style.display = "block";
    await get_comic();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

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
    document.getElementById("comic_date").textContent = new Date(comic.year, comic.month, comic.day).toLocaleDateString();
}