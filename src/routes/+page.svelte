<script lang="ts">
	import LinksComponent from '$lib/Links.svelte';
	import SkillsComponent from '$lib/Skills.svelte';
	import ExperienceComponent from '$lib/Experience.svelte';
	import BioComponent from '$lib/Bio.svelte';
	import profile_picture from '$lib/images/img.png';
	import * as data from '$lib/data';
</script>

<div id="left">
	<div class="content">
		<img src={profile_picture} alt="Profile" />
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

<style>
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

	@media only screen and (max-width: 600px) {
		#left {
			float: none;
			width: 100%;
			max-width: 100%;
		}
		#right {
			float: none;
			width: 100%;
			max-width: 100%;
		}
		img {
			width: 33%;
			border-radius: 50%;
			float: left;
			margin-right: 10px;
		}
	}
</style>
