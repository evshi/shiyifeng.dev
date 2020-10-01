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

  @media only screen and (max-width: 720px) and (max-aspect-ratio: 3/4) {
    article {
      flex-direction: column;
      padding: 2em;
    }
  }
</style>

<article>
  <section class="contact">
    <ContactCard {...contact} {honors}>
      <img alt="headshot" slot="picture" src="profile.png" />
    </ContactCard>
  </section>
  <section>
    <h1>Experience</h1>
    {#each history as company}
      <div>
        <h1>{company.name}</h1>
        {#each company.roles as role}
          <Role {...role} />
        {/each}
      </div>
    {/each}
    <Skills {skills} />
  </section>
</article>
