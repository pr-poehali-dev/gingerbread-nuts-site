import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
            <p className="text-xs text-muted-foreground">{product.weight}</p>
          </div>
          <Button
            onClick={() => onAddToCart(product)}
            size="icon"
            className="rounded-full w-10 h-10"
          >
            <Icon name="Plus" size={20} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
