import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { AppSidebar } from "@/components/app-sidebar"
import './globals.css'
import { Toaster } from "sonner"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumb />
              </div>
            </header>
            <div className="flex h-[calc(100vh-4rem)] w-full flex-col overflow-hidden p-4">
              {children}
            </div>
          </main>
        </SidebarProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}