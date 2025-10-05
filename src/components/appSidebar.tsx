import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import items from "@/lib/navbarItems"
import { Input } from "./ui/input"
import { TypographyMuted } from "./typography"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar className="md:hidden" side="right" >
      <SidebarContent>
        <SidebarGroup>
        <Input placeholder="جستجو..." className="mb-4" />
          <SidebarGroupLabel>LIONIX</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <TypographyMuted>{item.title}</TypographyMuted>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}