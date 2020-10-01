<script lang="ts">
  export let name: string;
  export let title: string;
  export let location: string;
  export let email: string;
  export let phone: string;
  export let education: { school: string; degree: string; institution: string };
  export let honors: string[];
</script>

<style>
  figure > :global(img) {
    border-radius: 100%;
    min-width: 5em;
    max-width: 10em;
  }

  article {
    padding: 2em;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>

<article>
  <figure>
    <slot name="picture" />
  </figure>
  <h1>{name}</h1>
  <h2>{title}</h2>
  <address>{location}</address>
  {#if email}<a href="mailto:{email}">{email}</a>{/if}
  {#if phone}<a href="tel:{phone}}">phone</a>{/if}
  <h2>Education</h2>
  <h3>{education.institution}</h3>
  <h3>{education.degree}</h3>
  <h3>{education.school}</h3>
  <h2>Honors</h2>
  <ul>
  {#each honors as honor}
    <li>{honor}</li>
  {/each}
  </ul>
</article>
