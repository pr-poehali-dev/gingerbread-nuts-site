import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary animate-fade-in">
            Пряники и орешки
            <br />
            <span className="text-secondary">ручной работы</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Натуральные ингредиенты, традиционные рецепты и забота в каждом изделии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
