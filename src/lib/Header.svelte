<script>
import * as gambar from "../assets/images";
import {navLinks} from '../assets/js/data'
let active = false;
export let scrollY
</script>

<header class="header" class:active={scrollY > 100} data-header>
  <div class="container">
    <a href={"#"} class="logo">
      <img src={gambar.logoNav} alt="UTC logo" />
    </a>

    <nav class="navbar" data-navbar class:active={active} >
      <div class="wrapper">
        <a href={"#"} class="logo">
          <img
            src={gambar.logoNav}
            width="162"
            height="50"
            alt="UTC logo"
          />
        </a>

        <button class="nav-close-btn" aria-label="close menu" data-nav-toggler on:click={() => active = !active} >
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
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
        <ion-icon name="person-add-outline" aria-hidden="true"></ion-icon>
        <span class="span">Daftar</span>
      </a>
      <a href={"#"} class="btn-second has-before">
        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        <span class="span">Masuk</span>
      </a>

      <button class="header-action-btn" aria-label="open menu" data-nav-toggler on:click={() => active = !active}>
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>

    <button class="overlay" data-nav-toggler data-overlay class:active={active} on:click={() => active = !active} ></button>
  </div>
</header>
