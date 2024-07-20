<script lang="ts">
  import * as gambar from './assets/images'
  import {Header, Main, Footer} from './lib'

  let scrollY: number

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
       <div class="ion-icon" style="mask-image: url({gambar.chevronUp});" aria-hidden="true"></div>
    </a>

    <style>

    </style>
