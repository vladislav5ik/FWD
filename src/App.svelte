<script lang="ts">
    import LinksComponent from "./lib/Links.svelte";
    import SkillsComponent from "./lib/Skills.svelte";
    import ExperienceComponent from "./lib/Experience.svelte";
    import BioComponent from "./lib/Bio.svelte";
    import ComicComponent from "./lib/Comic.svelte";
    import * as data from "./lib/data";
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<main>
    <div id="left">
        <div class="content">
            <img src="img.png" alt="">
            <LinksComponent links={data.links} />
            <SkillsComponent title="Soft Skills" skills={data.softSkills} />
            <SkillsComponent title="Hard Skills" skills={data.hardSkills} />
            <SkillsComponent title="Languages" skills={data.languageSkills} />
        </div>
    </div>
    <div id="right">
        <div class="content">
            <BioComponent bio={data.bio} />
            <ExperienceComponent title="Experience" experience={data.experience} />
        </div>
    </div>
    <div id="bottom">
        <div class="content">
            <ComicComponent email={data.comic_email} />
        </div>
    </div>
</main>

<style>
    main {
        background-color: #FFFFFF;
        box-shadow: 0 0 100px -39px rgba(212,214,180,1);
        overflow: hidden;
        max-width: 1000px;
        margin: auto;
        font-family: Arial, Helvetica, sans-serif;
    }
    .content {
        padding: 10px;
    }
    img {
        width: 100%;
        border-radius: 5px;
    }
    #left {
        float: left;
        width: 30%;
        max-width: 300px;
    }
    #right {
        float: right;
        width: 70%;
        max-width: 700px;
    }
    #bottom {
        clear: both;
        width: 100%;
        max-width: 1000px;
    }
</style>