<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .title {
    font-size: 5em;
  }

  .subtitle {
    opacity: 80%;
    font-size: 1.2em;
  }

  .subtitle ~ .subtitle {
    font-size: inherit;
  }

  a {
    text-decoration: none;
    color: var(--highlight);
  }

  a:visited {
    color: var(--contour);
  }

  a:hover {
    color: var(--accent);
  }

  main {
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
  <title>Evan Shi • Engineer</title>
</svelte:head>

<main>
  <div class="content">
    <div class="title">Hi, I'm Evan</div>
    <div class="subtitle">
      Want to work together? <a href="experience">See what I've done.</a>
    </div>
    <div class="subtitle">
      Come back to see <a href="https://github.com/evshi">what I'm building next!</a>
    </div>
  </div>
</main>
