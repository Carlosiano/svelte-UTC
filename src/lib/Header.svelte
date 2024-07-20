<script lang="ts">
import {logoNav, closeOutline, personAddOutline, arrowForwardOutline, menuOutline} from "../assets/images";
import { navLinks } from "../assets/js/data";
let active = false;
export let scrollY:number
</script>

<header class="header" class:active={scrollY > 100} data-header>
  <div class="container">
    <a href={"#"} class="logo">
      <img src={logoNav} alt="UTC logo" />
    </a>

    <nav class="navbar" data-navbar class:active={active} >
      <div class="wrapper">
        <a href={"#"} class="logo">
          <img
            src={logoNav}
            width="162"
            height="50"
            alt="UTC logo"
          />
        </a>

        <button class="nav-close-btn" aria-label="close menu" data-nav-toggler on:click={() => active = !active} >
          <div class="ion-icon" style="mask-image: url({closeOutline});" aria-hidden="true"></div>
        </button>
      </div>
      <ul class="navbar-list">
        {#each navLinks as item}
          <li class="navbar-item">
            <a href={`#${item.href}`} class="navbar-link" data-nav-link on:click={() => active = !active}>{item.title}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <div class="header-actions">
      <a href={"#"} class="btn has-before">
          <div class="ion-icon" style="mask-image: url({personAddOutline});" aria-hidden="true"></div>
          <span class="span">Daftar</span>
        </a>
        <a href={"#"} class="btn-second has-before">
        <div class="ion-icon" style="mask-image: url({arrowForwardOutline});" aria-hidden="true"></div>
        <span class="span">Masuk</span>
      </a>
      
      <button class="header-action-btn" aria-label="open menu" data-nav-toggler on:click={() => active = !active}>
        <div class="ion-icon" style="mask-image: url({menuOutline});" aria-hidden="true"></div>
      </button>
    </div>

    <button class="overlay" data-nav-toggler data-overlay class:active={active} on:click={() => active = !active} ></button>
  </div>
</header>
