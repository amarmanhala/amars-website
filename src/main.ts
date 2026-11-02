import '@fontsource-variable/inter'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="page">
    <a class="brand" href="/" aria-label="Amarpreet Singh — home">
      <img
        src="/amar-logo.webp"
        alt="Amar"
        width="720"
        height="434"
      />
    </a>

    <header class="identity" aria-label="Introduction">
      <p class="name">Amarpreet Singh</p>
      <p class="role">Front-End Engineer &amp; Designer</p>
    </header>

    <section class="intro" aria-labelledby="intro-heading">
      <h1 id="intro-heading">
        I&rsquo;m a front-end engineer and designer. I design and build thoughtful
        digital experiences with clear interfaces and considered details.
      </h1>
    </section>
  </main>
`
