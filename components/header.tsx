import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "./ui/input"
import Head from 'next/head'

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Head>
        <title>EcoForce - Modern Crowdfunding</title>
      </Head>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            EcoForce
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
              Events
            </Link>
            <Link href="/communities" className="text-muted-foreground hover:text-foreground transition-colors">
              Communities
            </Link>
            <Link href="/impact" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Impact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search events..." className="pl-8 bg-muted/50" />
          </div>
          <Button variant="ghost" asChild>
            <Link href="/Login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/Signup">Signup</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

