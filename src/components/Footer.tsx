import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍪</span>
              <span className="text-xl font-bold">Непростое печенье</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Натуральные пряники и орехи ручной работы с доставкой по городу
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#catalog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#delivery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Непростое печенье. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}