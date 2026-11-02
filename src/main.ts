import '@fontsource-variable/inter'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="page">
    <header class="identity" aria-label="Introduction">
      <p class="name">Amarpreet Singh</p>
      <p class="role">Front-End Engineer &amp; Designer</p>
    </header>

    <section class="intro" aria-labelledby="intro-heading">
      <h1 id="intro-heading">
        I&rsquo;m a front-end engineer and designer. I create thoughtful digital
        experiences with clear interfaces, strong visual systems, and careful
        attention to detail.
      </h1>
    </section>
  </main>
`
