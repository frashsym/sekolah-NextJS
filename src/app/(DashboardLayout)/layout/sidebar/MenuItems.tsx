import {
  IconBoxMultiple,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconPhoto,
  IconPoint,
  IconStar,
  IconTable,
  IconUser,
} from "@tabler/icons-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiAdvertisementLine } from "react-icons/ri";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Menu Utama",
    icon: GiHamburgerMenu,
    href: "#", // Tambahkan ini
    children: [
      // Cuma buat ngetes bisa ngga
      {
        id: uniqueId(),
        name: "Identitas Website",
        href: "/menu-utama/identitas-website",
      },
      { id: uniqueId(), name: "Menu Website", href: "/menu-utama/menu-utama" },
      {
        id: uniqueId(),
        name: "Halaman Baru",
        href: "/menu-utama/halaman-baru",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Berita",
    icon: IoNewspaperOutline,
    href: "#", // Tambahkan ini
    children: [
      // Cuma buat ngetes bisa ngga
      {
        id: uniqueId(),
        name: "Identitas",
        href: "/menu-utama/identitas-website",
      },
      { id: uniqueId(), name: "Kategori Berita", href: "/menu-utama/menu-utama" },
      {
        id: uniqueId(),
        name: "Tag Berita",
        href: "/menu-utama/halaman-baru",
      },
      {
        id: uniqueId(),
        name: "Komentar Berita",
        href: "/menu-utama/halaman-baru",
      },
      {
        id: uniqueId(),
        name: "Sensor Komentar",
        href: "/menu-utama/halaman-baru",
      },
      {
        id: uniqueId(),
        name: "Berita Foto",
        href: "/menu-utama/halaman-baru",
      },
      {
        id: uniqueId(),
        name: "Gallery Berita Foto",
        href: "/menu-utama/halaman-baru",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Video",
    icon: RiAdvertisementLine,
    href: "#",
    children: [
      { id: uniqueId(), href: "/menu-utama", name: "Playlist Video" },
      { id: uniqueId(), href: "/ui-components/images", name: "Video" },
      { id: uniqueId(), href: "/ui-components/images", name: "Tag Video" },
      { id: uniqueId(), href: "/ui-components/images", name: "Komentar Video" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Iklan",
    icon: IconPhoto,
    href: "#", // Tambahkan ini
    children: [
      // Cuma buat ngetes bisa ngga
      { id: uniqueId(), href: "/menu-utama", name: "Iklan Atas" },
      { id: uniqueId(), href: "/ui-components/images", name: "Iklan Home" },
      { id: uniqueId(), href: "/ui-components/images", name: "Iklan Sidebar" },
      { id: uniqueId(), href: "/ui-components/images", name: "Iklan Link" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Web",
    icon: IconUser,
    href: "#",
    children: [
      // Cuma buat ngetes bisa ngga
      { id: uniqueId(), href: "/menu-utama", name: "Logo Website" },
      { id: uniqueId(), href: "/ui-components/images", name: "Template Website" },
      { id: uniqueId(), href: "/ui-components/images", name: "Background Website" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Interaksi",
    icon: IconLayoutGrid,
    href: "#",
    children: [
      // Cuma buat ngetes bisa ngga
      { id: uniqueId(), href: "/menu-utama", name: "Agenda" },
      { id: uniqueId(), href: "/ui-components/images", name: "Sekilas Info" },
      { id: uniqueId(), href: "/ui-components/images", name: "Jajak Pendapat" },
      { id: uniqueId(), href: "/ui-components/images", name: "Yahoo Messanger" },
      { id: uniqueId(), href: "/ui-components/images", name: "Download Video" },
      { id: uniqueId(), href: "/ui-components/images", name: "Alamat Kontak" },
      { id: uniqueId(), href: "/ui-components/images", name: "Pesan Masuk" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Users",
    icon: IconLayoutGrid,
    href: "#",
    children: [
      // Cuma buat ngetes bisa ngga
      { id: uniqueId(), href: "/menu-utama", name: "Manajemen User" },
      { id: uniqueId(), href: "/ui-components/images", name: "Manajemen Modul" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Sekolah",
    icon: IconLayoutGrid,
    href: "#",
    children: [
      // Cuma buat ngetes bisa ngga
      { id: uniqueId(), href: "/menu-utama", name: "Pengumuman" },
      { id: uniqueId(), href: "/ui-components/images", name: "Link Terkait" },
      { id: uniqueId(), href: "/ui-components/images", name: "Data Alumni" },
    ],
  },
  {
    id: uniqueId(),
    title: "Edit Profile",
    icon: IconHome,
    href: "/",
    // Menambahkan properti untuk menyelaraskan ikon
    align: "left", // Tambahkan ini
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconHome,
    href: "/",
    // Menambahkan properti untuk menyelaraskan ikon
    align: "left", // Tambahkan ini
  },

];

export default Menuitems;
