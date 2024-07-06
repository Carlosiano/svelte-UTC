import * as dataGambar from "../images";
import {writable} from 'svelte/store'
export const scrollY = writable()

const fasilitasInfos = [
  {
    title: "Resource Center",
    desc: "Universitas UTC Memiliki Perpustakaan dengan konsep perpustakaan masa depan yang memiliki fasilitas dan buku lengkap.",
  },
  {
    title: "Resource Center",
    desc: "Universitas UTC Memiliki Perpustakaan dengan konsep perpustakaan masa depan yang memiliki fasilitas dan buku lengkap.",
  },
  {
    title: "Resource Center",
    desc: "Universitas UTC Memiliki Perpustakaan dengan konsep perpustakaan masa depan yang memiliki fasilitas dan buku lengkap.",
  },
];
export const fasilitas = dataGambar.fasilitasImages.map((img, index) => ({
  img,
  title: fasilitasInfos[index].title,
  desc: fasilitasInfos[index].desc,
}));

const categoriesInfos = [
  [
    {
      title: "S1-Informatika",
      desc: "Big Data Analytics,Networking,Software Engineering,Multimedia",
      color: [170, 75, 41],
    },
    {
      title: "S1-Sistem Informasi",
      desc: "(Digital Business &amp; Financial Technology, Creative Multimedia &amp; Metaverse)",
      color: [351, 83, 61],
    },
    {
      title: "S1-Teknologi Informasi",
      desc: "(2D &amp; 3D Animation, Game, Visual Effect)",
      color: [229, 75, 58],
    },
    {
      title: "S1-Teknik Komputer",
      desc: "(Cyber Security &amp; IoT)",
      color: [42, 94, 55],
    },
  ],
  [
    {
      title: "D3-Teknik Informatika",
      desc: "(WebDev, Network &amp; 2D Animation)",
      color: [170, 75, 41],
    },
    {
      title: "D3-Manajemen Informatika",
      desc: "(Mobile Programming, Web Programming &amp; Interactive Multimedia)",
      color: [351, 83, 61],
    },
    {
      title: "D3 Sistem Informasi",
      desc: "(WebDev, Network &amp; 2D Animation)",
      color: [351, 83, 61],
    },
    {
      title: "D3-Manajemen Informatika",
      desc: "(Mobile Programming, Web Programming &amp; Interactive Multimedia)",
      color: [351, 83, 61],
    },
  ],
];

export const categories = categoriesInfos.map((data, index) => (
  dataGambar.categoriesImages.map((img, i) => (
    {
      img,
      title: categoriesInfos[index][i].title,
      desc: categoriesInfos[index][i].desc,
      color: categoriesInfos[index][i].color
    }
  ))
  )
)

const kampusInfos = [
  {
    title: "Kampus 1",
    alamat:
      "Jl. Siliwangi (Ringroad Utara) Jombor Kab. Sleman - D.I.Yogyakarta",
    telp: "Telp (0274) 623310 & Fax (0274) 623306",
  },
  {
    title: "Kampus 2",
    alamat: "Jl. Glagahsari No. 63 Kota Yogyakarta - D.I.Yogyakarta",
    telp: "Telp (0274) 373955 & Fax (0274) 381212",
  },
  {
    title: "Kampus 3",
    alamat:
      "Jl. Prof. Soepomo,SH. No. 21 Janturan Kota Yogyakarta - D.I.Yogyakarta",
    telp: "Telp (0274) 379204 & Fax (0274) 415801",
  },
];
export const kampus = dataGambar.kampusImages.map((img, index) => ({
  img,
  title: kampusInfos[index].title,
  alamat: kampusInfos[index].alamat,
  telp: kampusInfos[index].telp,
}));

export const infoPMB = [
  'Ketentuan Dan Berkas PMB Universitas Amikom Yogyakarta T.A 2024/2025',
  'Ketentuan Dan Berkas PMB Universitas Amikom Yogyakarta T.A 2024/2025',
  'Ketentuan Dan Berkas PMB Universitas Amikom Yogyakarta T.A 2024/2025',
]