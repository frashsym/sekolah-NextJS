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
    title: "Modul Iklan",
    icon: RiAdvertisementLine,
    href: "/ui-components/alerts",
  },
  {
    id: uniqueId(),
    title: "Modul Interaksi",
    icon: IconPhoto,
    href: "#", // Tambahkan ini
    children: [
      // Cuma buat ngetes bisa ngga
      { id: uniqueId(), href: "/menu-utama", name: "Data Absensi" },
      { id: uniqueId(), href: "/ui-components/images", name: "Geolocation" },
    ],
  },
  {
    id: uniqueId(),
    title: "Modul Sekolah",
    icon: IconUser,
    href: "/ui-components/pagination",
  },
  {
    id: uniqueId(),
    title: "Modul Users",
    icon: IconLayoutGrid,
    href: "/ui-components/table",
  },
  {
    id: uniqueId(),
    title: "Modul Video",
    icon: IconLayoutGrid,
    href: "/ui-components/table",
  },
  {
    id: uniqueId(),
    title: "Modul Web",
    icon: IconLayoutGrid,
    href: "/ui-components/table",
  },
];

export default Menuitems;
