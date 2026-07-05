import { useState } from 'react';
import { motion } from 'framer-motion';
import { addToCart } from '../stores/cart';

interface Props {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
}

const CART_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const CHECK_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function AddToCart({ id, name, price, currency, image }: Props) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (added) return;
    addToCart({ id, name, price, currency, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <motion.button
      onClick={handleAdd}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.55rem',
        width: '100%',
        padding: '0.9rem 1.75rem',
        backgroundColor: added ? '#47645b' : '#535066',
        color: '#ffffff',
        border: 'none',
        borderRadius: '9999px',
        fontWeight: 700,
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: added
          ? '0 2px 0 0 rgba(28,48,42,0.5)'
          : '0 2px 0 0 rgba(40,30,50,0.45)',
        transition: 'background-color 0.22s cubic-bezier(0.23,1,0.32,1), box-shadow 0.15s',
        fontFamily: "'Quicksand', sans-serif",
        outline: 'none',
      }}
      aria-label={added ? 'Producto agregado al carrito' : 'Agregar al carrito'}
    >
      <motion.span
        key={added ? 'check' : 'cart'}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}
      >
        {added ? CHECK_ICON : CART_ICON}
        {added ? 'Agregado al carrito' : 'Agregar al carrito'}
      </motion.span>
    </motion.button>
  );
}
