import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@pryanik-oreh.ru',
      link: 'mailto:info@pryanik-oreh.ru',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Пряничная, 12',
      link: '#',
    },
  ];

  return (
    <section id="contacts" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Контакты</h2>
          <p className="text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={contact.icon as any} size={28} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{contact.title}</p>
                  <a
                    href={contact.link}
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h3 className="font-semibold text-xl mb-4">Время работы</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Понедельник - Пятница</span>
                <span className="font-semibold text-foreground">9:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Суббота - Воскресенье</span>
                <span className="font-semibold text-foreground">10:00 - 18:00</span>
              </div>
            </div>
            <Button className="w-full mt-6" size="lg">
              Написать нам
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
