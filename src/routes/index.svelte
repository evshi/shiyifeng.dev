<svelte:head>
  <title>Evan Shi • Software Engineer</title>
  <meta name="description" content="Evan Shi Software Engineer" />
  <meta name="robots" content="all" />
  <meta name="googlebot" content="all" />
</svelte:head>

<article>
  <h1>Hi, I'm Evan</h1>
  <h2>
    I write <a href="https://github.com/evshi">code</a>, <a
      href="https://developer.workday.com/about"
    >design</a> systems, and <a href="experience">lead</a> teams
  </h2>
  <h3>
    Want to work together? <a href="https://www.linkedin.com/in/evan-shi/">Contact
      me</a>
  </h3>
</article>

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

  h2,
  h3 {
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
