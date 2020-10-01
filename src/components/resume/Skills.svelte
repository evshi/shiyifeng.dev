<script lang="ts">
  export let skills: string[];
</script>

<section>
  <h1>Skills</h1>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
