import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Product } from '@/types/product';

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [filter, setFilter] = useState<'all' | 'gingerbread' | 'nuts'>('all');

  const filteredProducts =
    filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <section id="catalog" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Наш ассортимент
          </h2>
          <p className="text-muted-foreground">
            Выберите любимые лакомства из нашего каталога
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            Всё
          </Button>
          <Button
            variant={filter === 'gingerbread' ? 'default' : 'outline'}
            onClick={() => setFilter('gingerbread')}
          >
            Пряники
          </Button>
          <Button
            variant={filter === 'nuts' ? 'default' : 'outline'}
            onClick={() => setFilter('nuts')}
          >
            Орешки
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
