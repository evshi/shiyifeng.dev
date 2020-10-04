<script lang="ts">
  import ContactCard from "../../components/resume/ContactCard.svelte";
  import Role from "../../components/resume/Role.svelte";
  import Skills from "../../components/resume/Skills.svelte";

  import { contact, honors, history, skills } from "./_info";
</script>

<style>
  article {
    display: flex;
    flex-direction: column;
  }

  .experience {
    padding: 1em;
  }

  @media only screen and (min-width: 720px) and (min-aspect-ratio: 3/4) {
    article {
      flex-direction: row;
    }
  }

  @media print {
    article {
      flex-direction: row;
      color: #2b2d42;
    }
  }
</style>

<svelte:head>
  <title>Evan Shi • Engineer • Experience</title>
</svelte:head>

<article>
  <section>
    <ContactCard {...contact} {honors}>
      <img alt="headshot" slot="picture" src="profile.png" />
    </ContactCard>
  </section>
  <section class="experience">
    <h1>Experience</h1>
    {#each history as company}
      <div>
        <h2><i>{company.name}</i></h2>
        {#each company.roles as role}
          <Role {...role} />
        {/each}
      </div>
    {/each}
    <Skills {skills} />
  </section>
</article>
