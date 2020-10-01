<script lang="ts">
  import ContactCard from '../../components/resume/ContactCard.svelte'
  import Role from '../../components/resume/Role.svelte'
  import Skills from '../../components/resume/Skills.svelte'

  import { contact, honors, history, skills } from './_info'
</script>

<main>
	<section>
    <ContactCard {...contact}>
      <img alt="headshot" slot="picture" src="profile.png"/>
    </ContactCard>
    <ul>
    {#each honors as honor}
      <li>{honor}</li>
    {/each}
    </ul>
  </section>
  <section>
    {#each history as company }
      <div>
        <h1>{company.name}</h1>
        {#each company.roles as role}
          <Role {...role} />
        {/each}
      </div>
    {/each}
    <Skills skills={skills} />
  </section>
</main>