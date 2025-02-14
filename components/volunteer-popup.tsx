"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Calendar, MapPin, Users } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Yamuna Cleanup Drive",
    date: "March 15, 2025",
    location: "Yamuna Ghat, New Delhi",
    volunteers: 24,
    spotsLeft: 6,
  },
  {
    id: 2,
    title: "Clothes and Blanket Distribution",
    date: "December 20, 2025",
    location: "Seemapuri",
    volunteers: 18,
    spotsLeft: 12,
  },
]

export function VolunteerPopup() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" className="fixed bottom-4 right-4 z-50">
          <Users className="mr-2 h-4 w-4" />
          Volunteer Opportunities
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <SheetTitle>Upcoming Events</SheetTitle>
          <SheetDescription>Join our community events and make a difference</SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {upcomingEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {event.volunteers} volunteers registered • {event.spotsLeft} spots left
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Event</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

