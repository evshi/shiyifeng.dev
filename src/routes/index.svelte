<style>
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  h1 {
    font-size: 5em;
  }

  h2, h3, h4 {
    opacity: 80%;
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
</style>

<svelte:head>
  <title>Evan Shi • Engineer</title>
</svelte:head>

<article>
  <h1>Hi, I'm Evan</h1>
  <h2>I write code, design systems, and lead teams</h2>
  <h3>Want to work together? <a href="experience">See what I've done.</a></h3>
  <h4>
    Come back to see <a href="https://github.com/evshi">what I'm building next!</a>
  </h4>
</article>
