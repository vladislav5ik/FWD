<script lang="ts">
    import type {ExperienceItem} from "./types";
    export let experienceItem: ExperienceItem;
</script>

<div class="expereince-item">
    <p class="date">{experienceItem.date}</p>
    <h2 class="company">{experienceItem.company}</h2>
    <h3 class="position">{experienceItem.position}</h3>
    <p class="description">{experienceItem.description}</p>
</div>