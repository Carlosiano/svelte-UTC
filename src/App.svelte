<script>
  import * as gambar from './assets/images'

  import Header from './lib/Header.svelte';
  import Main from './lib/Main.svelte';
  import Footer from './lib/Footer.svelte';

  let scrollY

</script>

<svelte:window bind:scrollY={scrollY} />

<svelte:head>
    <link rel="preload" as="image" href={gambar.heroBg} />
    <link rel="preload" as="image" href={gambar.heroBanner1} />
    <link rel="preload" as="image" href={gambar.heroBanner2} />
    <link rel="preload" as="image" href={gambar.heroShape1} />
    <link rel="preload" as="image" href={gambar.heroShape2} />
</svelte:head>
  <Header {scrollY}/>

  <Main />

  <Footer />


    <!-- 
    - #BACK TO TOP
  -->

    <a
      href="#top"
      class="back-top-btn"
      class:active={scrollY > 100}
      aria-label="back top top"
      data-back-top-btn

    >
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>

    <style>

    </style>

