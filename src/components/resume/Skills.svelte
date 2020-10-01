<script lang="ts">
  export let skills: string[];
</script>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: square;
  }

  li {
    margin-left: 1.5em;
  }
</style>

<section>
  <h1>Skills</h1>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
