import { Button } from "@/shared/ui/button";
import { ArrowDown, Calendar, MapPin, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/diverse-group-of-people-enjoying-outdoor-community-F2MXdQ32J6CGSl7Q4LJI0rn9MCcpoV.jpg"
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up text-balance">
            Объединяйтесь по интересам
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-200 text-balance">
            Создавайте события, находите единомышленников и делайте жизнь ярче вместе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Узнать больше
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              asChild>
              <Link href="/events">Смотреть события</Link>
            </Button>
          </div>
        </div>

        <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-label="Scroll down">
          <ArrowDown className="w-8 h-8 text-white" />
        </button>
      </section>

      <section id="content" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-32 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Почему мы?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Мы создали платформу, где каждый может найти свое сообщество и разделить свои увлечения с другими
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              {
                icon: Users,
                title: "Найдите друзей",
                description: "Встречайте людей с похожими интересами в вашем районе",
                delay: 0,
              },
              {
                icon: Calendar,
                title: "Создавайте события",
                description: "Организуйте просмотр фильма, игру в шахматы или любое другое мероприятие",
                delay: 100,
              },
              {
                icon: MapPin,
                title: "Локально",
                description: "Все события проходят рядом с вами - во дворе, парке или кафе",
                delay: 200,
              },
              {
                icon: Sparkles,
                title: "Бесплатно",
                description: "Создавайте и участвуйте в событиях совершенно бесплатно",
                delay: 300,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-card p-8 rounded-xl border border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-1`}
                style={{ transitionDelay: `${feature.delay}ms` }}>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-balance">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance">Как это работает?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Выберите интерес",
                  description: "Найдите событие, которое вам интересно, или создайте свое собственное",
                },
                {
                  step: "02",
                  title: "Присоединяйтесь",
                  description: "Зарегистрируйтесь на мероприятие и познакомьтесь с участниками",
                },
                {
                  step: "03",
                  title: "Встречайтесь",
                  description: "Приходите на событие и наслаждайтесь общением с единомышленниками",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg text-balance">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Готовы начать?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-balance">
              Присоединяйтесь к сообществу и найдите свое следующее приключение
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/events">Посмотреть все события</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
