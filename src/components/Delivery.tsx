import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Delivery() {
  const deliveryInfo = [
    {
      icon: 'Truck',
      title: 'Доставка по городу',
      description: 'Бесплатно при заказе от 2000 ₽. Стоимость доставки от 300 ₽',
    },
    {
      icon: 'Package',
      title: 'Самовывоз',
      description: 'Забрать заказ можно в нашем магазине по адресу: ул. Пряничная, 12',
    },
    {
      icon: 'Clock',
      title: 'Сроки',
      description: 'Доставка в течение 1-2 дней после оформления заказа',
    },
  ];

  return (
    <section id="delivery" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Доставка и оплата
          </h2>
          <p className="text-muted-foreground">
            Удобные способы получения вашего заказа
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {deliveryInfo.map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={item.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-xl">Способы оплаты</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-primary" />
                <span>Оплата картой онлайн</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-primary" />
                <span>Наличными при получении</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-primary" />
                <span>Картой курьеру</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
