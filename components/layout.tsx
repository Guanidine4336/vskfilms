interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900">
      <main className="flex-1">{children}</main>
    </div>
  )
}

