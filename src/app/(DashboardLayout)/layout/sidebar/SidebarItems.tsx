import React, { useState } from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import NavItem from "./NavItem";
import Link from "next/link";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setOpen((prevState) => (prevState === id ? null : id)); // Toggle dropdown, tetap buka/ tutup biasa
  };

  return (
    <Box sx={{ px: 2 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {item.children ? (
                <>
                  <ListItemButton
                    onClick={() => handleClick(item.id)}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#f0f0f0', // Hover untuk dropdown item
                      },
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
                    <ListItemText primary={item.title} />
                    {open === item.id ? <IconChevronUp /> : <IconChevronDown className="mr-4" />}
                  </ListItemButton>
                  <Collapse in={open === item.id} timeout={500} unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child.id}
                          component={Link}
                          href={child.href}
                          sx={{
                            pl: 4,
                            '&:hover': {
                              backgroundColor: '#f0f0f0', // Hover untuk item anak dropdown
                            },
                            transition: 'background-color 0.3s ease',
                            backgroundColor: pathname.startsWith(child.href) ? '#d0d0d0' : 'inherit', // Highlight child aktif
                          }}
                        >
                          <ListItemText primary={child.name} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <NavItem
                  item={item}
                  pathDirect={pathname}
                  onClick={toggleMobileSidebar}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f0f0f0', // Hover untuk item sidebar tanpa dropdown
                    },
                    transition: 'background-color 0.3s ease',
                    backgroundColor: pathname === item.href ? '#d0d0d0' : 'inherit', // Highlight item tanpa dropdown yang aktif
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;
