import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from 'framer-motion';
import { $cartCount, $cartOpen } from '../stores/cart';

export default function CartButton() {
  const count = useStore($cartCount);
  const isOpen = useStore($cartOpen);

  return (
    <button
      onClick={() => $cartOpen.set(!isOpen)}
      aria-label={count > 0 ? `Carrito, ${count} producto${count !== 1 ? 's' : ''}` : 'Carrito'}
      style={{
        position: 'relative',
        width: '40px',
        height: '40px',
        borderRadius: '9999px',
        background: '#f1eee5',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
      onMouseEnter={e => (e.currentTarget.style.background = '#ffd9e2')}
      onMouseLeave={e => (e.currentTarget.style.background = '#f1eee5')}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="#704653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>

      <AnimatePresence mode="popLayout">
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.4 }}
            style={{
              position: 'absolute',
              top: '-3px',
              right: '-3px',
              background: '#704653',
              color: '#ffffff',
              fontSize: '0.6rem',
              fontWeight: 700,
              width: '18px',
              height: '18px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Quicksand', sans-serif",
              lineHeight: 1,
              pointerEvents: 'none',
              border: '1.5px solid #fdf9f0',
            }}
          >
            {count > 99 ? '99+' : count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
