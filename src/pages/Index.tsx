import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Cart from '@/components/Cart';
import Delivery from '@/components/Delivery';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { Product, CartItem } from '@/types/product';

export default function Index() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast({
      title: 'Добавлено в корзину',
      description: product.name,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast({
      title: 'Товар удалён из корзины',
    });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Header cartItemsCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Catalog onAddToCart={handleAddToCart} />
        <Delivery />
        <Contacts />
      </main>
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
      />
    </div>
  );
}
