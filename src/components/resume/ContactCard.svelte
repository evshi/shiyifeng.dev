<script lang="ts">
  export let name: string;
  export let title: string;
  export let location: string;
  export let email: string;
  export let phone: string;
</script>

<style>
</style>

<article>
  <figure>
    <slot name="picture" />
  </figure>
  <h1>{name}</h1>
  <h2>{title}</h2>
  <address>{location}</address>
  {#if email}
    <a href="mailto:{email}">{email}</a>
  {/if}
  {#if phone}
    <a href="tel:{phone}}">phone</a>
  {/if}
</article>
