import {
  IconBoxMultiple, IconCircleDot, IconHome, IconInfoCircle, IconLayout, IconLayoutGrid, IconPhoto, IconPoint, IconStar, IconTable, IconUser
} from "@tabler/icons-react";
import Link from "next/link";

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
    title: "Buttons",
    icon: IconCircleDot,
    href: "/ui-components/buttons",
  },
  {
    id: uniqueId(),
    title: "Forms",
    icon: IconTable,
    href: "/ui-components/forms",
  },
  {
    id: uniqueId(),
    title: "Alerts",
    icon: IconInfoCircle,
    href: "/ui-components/alerts",
  },
  {
    id: uniqueId(),
    title: "Ratings",
    icon: IconStar,
    href: "/ui-components/ratings",
  },
  {
    id: uniqueId(),
    title: "Images",
    icon: IconPhoto,
    href: "#", // Tambahkan ini
    children: [
      { id: uniqueId(), href: "/pages/absen/data-absensi", name: "Data Absensi" },
      { id: uniqueId(), href: "/pages/absen/geolocation", name: "Geolocation" },
    ],
  },
  {
    id: uniqueId(),
    title: "Pagination",
    icon: IconUser,
    href: "/ui-components/pagination",
  },
  {
    id: uniqueId(),
    title: "Tables",
    icon: IconLayoutGrid,
    href: "/ui-components/table",
  },
];

export default Menuitems;
