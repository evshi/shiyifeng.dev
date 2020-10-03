<script lang="ts">
  export let title: string;
  export let org: string;
  export let start: string;
  export let end: string;
  export let achievements: string[];
</script>

<style>
  hgroup {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }

  hgroup > * {
    margin-right: 1em;
    margin-bottom: 0;
  }
</style>

<section>
  <hgroup>
    <h2>{title}</h2>
    <h3>{org}</h3>
    <h3>{start.concat(end ? `-${end}` : '')}</h3>
  </hgroup>
  <ul>
    {#each achievements as item}
      <li>{item}</li>
    {/each}
  </ul>
</section>
