import { IconHome, IconUser } from "@tabler/icons-react";
import { CgWebsite } from "react-icons/cg";
import { MdOndemandVideo } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNewspaperOutline, IoSchoolSharp } from "react-icons/io5";
import { RiAdvertisementLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { FaUserEdit } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
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
    href: "#",
    children: [
      { id: uniqueId(), name: "Identitas Website", href: "/menu-utama/identitas-website" },
      { id: uniqueId(), name: "Menu Website", href: "/menu-utama/menu-website" },
      { id: uniqueId(), name: "Halaman Baru", href: "/menu-utama/halaman-baru" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Berita",
    icon: IoNewspaperOutline,
    href: "#",
    children: [
      { id: uniqueId(), name: "Identitas", href: "/modul-berita/identitas" },
      { id: uniqueId(), name: "Kategori Berita", href: "/modul-berita/kategori-berita" },
      { id: uniqueId(), name: "Tag Berita", href: "/modul-berita/tag-berita" },
      { id: uniqueId(), name: "Komentar Berita", href: "/modul-berita/komentar-berita" },
      { id: uniqueId(), name: "Sensor Komentar", href: "/modul-berita/sensor-komentar" },
      { id: uniqueId(), name: "Berita Foto", href: "/modul-berita/berita-foto" },
      { id: uniqueId(), name: "Gallery Berita Foto", href: "/modul-berita/halaman-baru" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Video",
    icon: MdOndemandVideo,
    href: "#",
    children: [
      { id: uniqueId(), href: "/modul-video/playlist", name: "Playlist Video" },
      { id: uniqueId(), href: "/modul-video/video", name: "Video" },
      { id: uniqueId(), href: "/modul-video/tag-video", name: "Tag Video" },
      { id: uniqueId(), href: "/modul-video/komentar-video", name: "Komentar Video" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Iklan",
    icon: RiAdvertisementLine,
    href: "#",
    children: [
      { id: uniqueId(), href: "/modul-iklan/iklan-atas", name: "Iklan Atas" },
      { id: uniqueId(), href: "/modul-iklan/iklan-home", name: "Iklan Home" },
      { id: uniqueId(), href: "/modul-iklan/iklan-sidebar", name: "Iklan Sidebar" },
      { id: uniqueId(), href: "/modul-iklan/iklan-link", name: "Iklan Link" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Web",
    icon: CgWebsite,
    href: "#",
    children: [
      { id: uniqueId(), href: "/modul-web/logo-web", name: "Logo Website" },
      { id: uniqueId(), href: "/modul-web/template-web", name: "Template Website" },
      { id: uniqueId(), href: "/modul-web/background-web", name: "Background Website" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Interaksi",
    icon: SlScreenDesktop,
    href: "#",
    style: { whiteSpace: "nowrap" },
    children: [
      { id: uniqueId(), href: "/modul-interaksi/agenda", name: "Agenda" },
      { id: uniqueId(), href: "/modul-interaksi/sekilas-info", name: "Sekilas Info" },
      { id: uniqueId(), href: "/modul-interaksi/jajak-pendapat", name: "Jajak Pendapat" },
      { id: uniqueId(), href: "/modul-interaksi/yahoo-messanger", name: "Yahoo Messanger" },
      { id: uniqueId(), href: "/modul-interaksi/download-video", name: "Download Video" },
      { id: uniqueId(), href: "/modul-interaksi/alamat-kontak", name: "Alamat Kontak" },
      { id: uniqueId(), href: "/modul-interaksi/pesan-masuk", name: "Pesan Masuk" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Users",
    icon: IconUser,
    href: "#",
    children: [
      { id: uniqueId(), href: "/modul-users/manajemen-user", name: "Manajemen User" },
      { id: uniqueId(), href: "/modul-users/manajemen-modul", name: "Manajemen Modul" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Sekolah",
    icon: IoSchoolSharp,
    href: "#",
    children: [
      { id: uniqueId(), href: "/modul-sekolah/pengumuman", name: "Pengumuman" },
      { id: uniqueId(), href: "/modul-sekolah/link-terkait", name: "Link Terkait" },
      { id: uniqueId(), href: "/modul-sekolah/data-alumni", name: "Data Alumni" },
    ],
  },
  {
    id: uniqueId(),
    title: "Edit Profile",
    icon: FaUserEdit,
    href: "/edit-profile",
    align: "left",
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: RiLogoutBoxLine,
    href: "/logout",
    align: "left",
  },
];

export default Menuitems;
