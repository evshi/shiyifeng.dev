<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }

  .title {
    font-size: 72px;
  }

  .subtitle {
    color: grey;
    font-size: 18px;
  }

  .subtitle ~ .subtitle {
    font-size: inherit;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:visited {
    color: lightcoral;
  }

  a:hover {
    color: coral;
  }

  main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
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
      Want to work together? <a href="resume">See what I've done.</a>
    </div>
    <div class="subtitle">
      Come back to see <a href="https://github.com/evshi">what I'm building next!</a>
    </div>
  </div>
</main>
