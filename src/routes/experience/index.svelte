<script lang="ts">
  import ContactCard from "../../components/resume/ContactCard.svelte";
  import Role from "../../components/resume/Role.svelte";
  import Skills from "../../components/resume/Skills.svelte";

  import { contact, honors, history, skills } from "./_info";
</script>

<style>
  article {
    display: flex;
  }

  .experience {
    padding: 1em;
  }

  @media only screen and (max-width: 720px) and (max-aspect-ratio: 3/4) {
    article {
      flex-direction: column;
    }
  }
</style>

<article>
  <section class="contact">
    <ContactCard {...contact} {honors}>
      <img alt="headshot" slot="picture" src="profile.png" />
    </ContactCard>
  </section>
  <section class="experience">
    <h1>Experience</h1>
    {#each history as company}
      <div>
        {#each company.roles as role}
          <Role {...role} />
        {/each}
      </div>
    {/each}
    <Skills {skills} />
  </section>
</article>
