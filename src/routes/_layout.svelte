<script lang="ts">
  import { theme } from "../components/theme";
  import Nav from "../components/Nav.svelte";

  export let segment: string;
</script>

<style>
  div {
    color: var(--text);
    min-height: 100vh;
  }
  main {
    padding: 2em;
  }
</style>

<div
  style="--background: {$theme.background}; --text: {$theme.text}; --accent: {$theme.accent}; --highlight: {$theme.highlight}; --contour: {$theme.contour};">
  <Nav {segment} />
  <main>
    <slot />
  </main>
</div>
