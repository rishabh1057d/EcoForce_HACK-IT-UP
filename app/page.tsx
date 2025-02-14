import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Share2 } from "lucide-react"
import Image from "next/image"
import { VolunteerPopup } from "@/components/volunteer-popup"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <Image
          src="https://earthday.ca/wp-content/uploads/sites/2/2022/04/Clean_Up_1920x1080.jpg"
          alt="Community volunteers"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Join Forces for a Better World</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Connect with local communities, participate in environmental initiatives, and make a real impact through
            volunteer action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Join as Volunteer
            </Button>
            <Button size="lg" variant="secondary" className="text-lg">
              Browse Events
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Active Campaigns</h2>
            <Button variant="ghost">
              <Calendar className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card hover:bg-card/80 transition-colors">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Event thumbnail"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 line-clamp-1">Juhu Beach Restoration Project</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  Join our community initiative to restore and beautify Juhu Beach through cleanup and beautification activities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Next Sunday, 9:00 AM
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      Juhu Beach, Mumbai
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      60 volunteers registered
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between border-t border-border/50 mt-6">
                  <Button className="flex-1">Join Event</Button>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <VolunteerPopup />
    </div>
  )
}

