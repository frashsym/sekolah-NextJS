import React, { useState } from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import NavItem from "./NavItem";
import Link from "next/link";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  const pathname = usePathname();
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleClick = (id: string) => {
    setOpen(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Box sx={{ px: 2 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {item.children ? (
                <>
                  <ListItemButton onClick={() => handleClick(item.id)}>
                    <ListItemIcon>
                      {item.icon && <item.icon />}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                    {open[item.id] ? <IconChevronUp /> : <IconChevronDown className="mr-4"/>}
                  </ListItemButton>
                  <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItemButton key={child.id} component={Link} href={child.href} sx={{ pl: 4 }}>
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