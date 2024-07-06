<script>
import * as gambar from "../assets/images";
let active = false;
import {scrollY} from  '../assets/js/data'
</script>

<header class="header {$scrollY > 100 ? 'active' : ''}" data-header>
  <div class="container">
    <a href={"#"} class="logo">
      <img src={gambar.logoNav} alt="UTC logo" />
    </a>

    <nav class="navbar" data-navbar class:active={active} >
      <div class="wrapper">
        <a href={"#"} class="logo">
          <img
            src={gambar.logo}
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
        <li class="navbar-item">
          <a href="#home" class="navbar-link" data-nav-link>Beranda</a>
        </li>

        <li class="navbar-item">
          <a href="#jenjang" class="navbar-link" data-nav-link>Jenjang</a>
        </li>

        <li class="navbar-item">
          <a href="#why" class="navbar-link" data-nav-link>Mengapa UTC</a>
        </li>

        <li class="navbar-item">
          <a href="#fasilitas" class="navbar-link" data-nav-link>Fasilitas</a>
        </li>

        <li class="navbar-item">
          <a href="#info" class="navbar-link" data-nav-link>Info</a>
        </li>
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

    <div class="overlay" data-nav-toggler data-overlay class:active={active} on:click={() => active = !active} ></div>
  </div>
</header>
