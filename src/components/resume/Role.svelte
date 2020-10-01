<script lang="ts">
  export let title: string;
  export let org: string;
  export let start: string;
  export let end: string;
  export let achievements: string[];
</script>

<section>
  <hgroup>
    <h1>{title}</h1>
    <h2>{org}</h2>
    <h3>{start}</h3>
    <h3>{end}</h3>
  </hgroup>
  <ul>
    {#each achievements as item}
      <li>{item}</li>
    {/each}
  </ul>
</section>
