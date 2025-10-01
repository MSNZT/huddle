import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Просмотр фильма во дворе",
    description: "Смотрим классику кино под открытым небом. Приносите пледы и хорошее настроение!",
    date: "15 января, 19:00",
    location: "Двор на ул. Пушкина, 12",
    attendees: 12,
    maxAttendees: 20,
    category: "Кино",
    image: "/outdoor-movie-screening-at-night-with-projector.jpg",
  },
  {
    id: 2,
    title: "Шахматный турнир",
    description: "Дружеский турнир для игроков всех уровней. Призы для победителей!",
    date: "18 января, 14:00",
    location: "Парк Горького",
    attendees: 8,
    maxAttendees: 16,
    category: "Игры",
    image: "/people-playing-chess-in-park-outdoor.jpg",
  },
  {
    id: 3,
    title: "Йога на рассвете",
    description: "Начните день с энергии! Занятие подходит для начинающих.",
    date: "20 января, 06:30",
    location: "Набережная",
    attendees: 15,
    maxAttendees: 25,
    category: "Спорт",
    image: "/group-yoga-session-at-sunrise-outdoors.jpg",
  },
  {
    id: 4,
    title: "Книжный клуб",
    description: 'Обсуждаем "Мастер и Маргарита". Приходите, даже если не дочитали!',
    date: "22 января, 18:00",
    location: 'Кафе "Читальня"',
    attendees: 6,
    maxAttendees: 12,
    category: "Культура",
    image: "/cozy-book-club-meeting-in-cafe.jpg",
  },
  {
    id: 5,
    title: "Пикник с настольными играми",
    description: "Играем в Манчкин, Каркассон и другие игры на свежем воздухе.",
    date: "25 января, 12:00",
    location: "Парк Сокольники",
    attendees: 10,
    maxAttendees: 15,
    category: "Игры",
    image: "/friends-playing-board-games-outdoor-picnic.jpg",
  },
  {
    id: 6,
    title: "Фотопрогулка",
    description: "Исследуем город с камерой. Для фотографов всех уровней.",
    date: "28 января, 10:00",
    location: "Старый Арбат",
    attendees: 7,
    maxAttendees: 10,
    category: "Творчество",
    image: "/photography-walk-city-streets-photographers.jpg",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            События
          </Link>
          <Button asChild>
            <Link href="/">На главную</Link>
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary/10 to-background py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Найдите свое событие</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Присоединяйтесь к мероприятиям или создайте свое собственное
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {event.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <h3 className="text-xl font-semibold mb-2 text-balance">{event.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 text-balance">{event.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>
                          {event.attendees} / {event.maxAttendees} участников
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-transparent" variant="outline">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
