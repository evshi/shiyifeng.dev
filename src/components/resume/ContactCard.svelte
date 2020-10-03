<script lang="ts">
  export let name: string;
  export let location: string;
  export let email: string;
  export let phone: string;
  export let education: { school: string; degree: string; institution: string };
  export let honors: string[];
</script>

<style>
  figure > :global(img) {
    border: 2px solid var(--highlight);
    border-radius: 100%;
    box-sizing: border-box;
    min-width: 5em;
    max-width: 10em;
  }

  article {
    padding: 2em;
    text-align: center;
    background-color: var(--contour);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h2 {
    margin-top: 1em;
  }
</style>

<article>
  <figure>
    <slot name="picture" />
  </figure>
  <h1>{name}</h1>
  {#if email}<a href="mailto:{email}">{email}</a>{/if}
  {#if phone}<a href="tel:{phone}}">phone</a>{/if}
  <address>{location}</address>
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
