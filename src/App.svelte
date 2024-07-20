<script lang="ts">
  import { chevronUp } from './assets/images';
  import {Header, Main, Footer} from './lib'

  let scrollY: number

</script>

<svelte:window bind:scrollY={scrollY} />

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
       <div class="ion-icon" style="mask-image: url({chevronUp});" aria-hidden="true"></div>
    </a>

    <style>

    </style>
