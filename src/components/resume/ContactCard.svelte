<script lang="ts">
  export let name: string;
  export let immigration: string;
  export let role: string;
  export let location: string;
  export let email: string | undefined;
  export let phone: string | undefined;
  export let education: { school: string; degree: string; institution: string };
  export let honors: string[];
</script>

<article>
  <figure>
    <slot name="picture" />
  </figure>
  <section>
    <h1>{name}</h1>
    <h2>{role}</h2>
    <h3>{immigration}</h3>
    {#if email}
      <h3><a href="mailto:{email}">{email}</a></h3>
    {/if}
    {#if phone}
      <h3><a href="tel:{phone}}">{phone}</a></h3>
    {/if}
    <address>{location}</address>
  </section>
  <section>
    <h2>Education</h2>
    <h3>{education.institution}</h3>
    <h3>{education.degree}</h3>
    <h3>{education.school}</h3>
  </section>
  <section>
    <h2>Honors</h2>
    <ul>
      {#each honors as honor}
        <li>{honor}</li>
      {/each}
    </ul>
  </section>
</article>

<style>
  figure > :global(img) {
    border: 2px solid white;
    border-radius: 100%;
    box-sizing: border-box;
    min-width: 5em;
    max-width: 10em;
  }

  article {
    padding: 1em;
    text-align: center;
    background-color: var(--contour);
    height: 100%;
    box-sizing: border-box;
    border-radius: 0.25em;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 500;
    margin-top: 1em;
  }

  a {
    text-decoration: none;
  }
</style>
