import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  $cart, $cartOpen, $cartTotal,
  removeFromCart, updateQuantity,
  type CartItem,
} from '../stores/cart';

const WA_NUMBER = '573001234567';

/* ── Helpers ─────────────────────────────────────────────── */

function formatCOP(n: number) {
  return `$${n.toLocaleString('es-CO')} COP`;
}

function buildWAMsg(items: CartItem[], total: number): string {
  const lines = items
    .map(i => `• ${i.name} ×${i.quantity} — ${formatCOP(i.price * i.quantity)}`)
    .join('\n');
  return `Hola LanaNegra! 🧸 Quiero hacer este pedido:\n\n${lines}\n\n*Total: ${formatCOP(total)}*\n\n¡Gracias! 💕`;
}

/* ── Sub-components ──────────────────────────────────────── */

function StepBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: '26px', height: '26px',
        borderRadius: '9999px',
        background: '#f1eee5',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: '1.1rem',
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#824f66',
        fontFamily: "'Quicksand', sans-serif",
        flexShrink: 0,
        transition: 'background 0.15s, transform 0.1s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = '#ffd8e6')}
      onMouseLeave={e => (e.currentTarget.style.background = '#f1eee5')}
      onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.9)')}
      onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {label}
    </button>
  );
}

function CartItemRow({ item, index }: { item: CartItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 28, transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] } }}
      transition={{
        duration: 0.28,
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.045,
      }}
      style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
        padding: '0.875rem 0',
        borderBottom: '1px solid rgba(212,194,199,0.22)',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        width: '60px', height: '60px',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffd8e6 0%, #bde9da 100%)',
        flexShrink: 0,
      }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontWeight: 700,
          fontSize: '0.875rem',
          color: '#1c1c17',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          margin: 0,
        }}>
          {item.name}
        </p>
        <p style={{ fontSize: '0.8125rem', color: '#824f66', fontWeight: 700, margin: '2px 0 0' }}>
          {formatCOP(item.price * item.quantity)}
        </p>

        {/* Quantity stepper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginTop: '0.4rem' }}>
          <StepBtn label="−" onClick={() => updateQuantity(item.id, item.quantity - 1)} />
          <span style={{ fontWeight: 700, fontSize: '0.875rem', minWidth: '1.25rem', textAlign: 'center', color: '#1c1c17' }}>
            {item.quantity}
          </span>
          <StepBtn label="+" onClick={() => updateQuantity(item.id, item.quantity + 1)} />
        </div>
      </div>

      {/* Remove */}
      <button
        type="button"
        onClick={() => removeFromCart(item.id)}
        aria-label={`Quitar ${item.name}`}
        style={{
          width: '28px', height: '28px',
          borderRadius: '9999px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d4c2c7',
          flexShrink: 0,
          transition: 'color 0.15s, background 0.15s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = '#ba1a1a';
          e.currentTarget.style.background = '#ffdad6';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = '#d4c2c7';
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        gap: '0.75rem',
        textAlign: 'center',
      }}
    >
      <span style={{ fontSize: '2.75rem', lineHeight: 1 }}>🧺</span>
      <p style={{ fontWeight: 700, fontSize: '1rem', color: '#1c1c17', margin: '0.25rem 0 0' }}>
        Tu carrito está vacío
      </p>
      <p style={{ fontSize: '0.8125rem', color: '#827378', maxWidth: '200px', lineHeight: 1.6, margin: 0 }}>
        Agrega amigurumis desde la tienda para comenzar tu pedido.
      </p>
    </motion.div>
  );
}

/* ── Main panel ──────────────────────────────────────────── */

export default function CartPanel() {
  const items  = useStore($cart);
  const total  = useStore($cartTotal);
  const isOpen = useStore($cartOpen);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  /* ESC to close */
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') $cartOpen.set(false); };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [isOpen]);

  /* Prevent body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleCheckout = () => {
    if (!items.length) return;
    const msg = buildWAMsg(items, total);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — fades in 200ms */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => $cartOpen.set(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(28,28,23,0.38)',
              zIndex: 200,
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          />

          {/* Panel — iOS drawer curve enter, snappy exit */}
          <motion.aside
            key="cart-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Carrito de compras"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%', transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] } }}
            transition={{ type: 'tween', duration: 0.36, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '400px', maxWidth: '100vw',
              background: '#fdf9f0',
              zIndex: 201,
              display: 'flex', flexDirection: 'column',
              boxShadow: '-6px 0 48px rgba(130,79,102,0.13)',
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            {/* ── Header ── */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(212,194,199,0.35)',
              flexShrink: 0,
            }}>
              <div>
                <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1c1c17', letterSpacing: '-0.01em', margin: 0 }}>
                  Mi Carrito
                </h2>
                <p style={{ fontSize: '0.75rem', color: '#827378', margin: '2px 0 0' }}>
                  {totalItems === 0
                    ? 'Vacío'
                    : `${totalItems} producto${totalItems !== 1 ? 's' : ''}`}
                </p>
              </div>

              <button
                type="button"
                onClick={() => $cartOpen.set(false)}
                aria-label="Cerrar carrito"
                style={{
                  width: '36px', height: '36px',
                  borderRadius: '9999px',
                  background: '#f1eee5',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.15s, transform 0.1s',
                  flexShrink: 0,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#ffd8e6')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f1eee5')}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.93)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="#824f66" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* ── Items list ── */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '0.25rem 1.5rem' }}>
              <AnimatePresence mode="popLayout" initial={false}>
                {items.length === 0
                  ? <EmptyState key="empty" />
                  : items.map((item, i) => (
                      <CartItemRow key={item.id} item={item} index={i} />
                    ))
                }
              </AnimatePresence>
            </div>

            {/* ── Footer / checkout ── */}
            <AnimatePresence>
              {items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16, transition: { duration: 0.16 } }}
                  transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderTop: '1px solid rgba(212,194,199,0.35)',
                    flexShrink: 0,
                    background: '#fdf9f0',
                  }}
                >
                  {/* Total */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#504348' }}>
                      Total del pedido
                    </span>
                    <motion.span
                      key={total}
                      initial={{ scale: 0.88, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', duration: 0.35, bounce: 0.25 }}
                      style={{ fontSize: '1.25rem', fontWeight: 700, color: '#824f66', letterSpacing: '-0.015em' }}
                    >
                      {formatCOP(total)}
                    </motion.span>
                  </div>

                  {/* WhatsApp CTA */}
                  <button
                    type="button"
                    onClick={handleCheckout}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: '0.55rem',
                      width: '100%',
                      padding: '0.9rem 1.5rem',
                      background: '#3d665a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      boxShadow: '0 2px 0 0 rgba(28,48,42,0.5)',
                      fontFamily: "'Quicksand', sans-serif",
                      transition: 'background 0.15s, transform 0.12s, box-shadow 0.12s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#2d5248';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 0 0 rgba(28,48,42,0.4)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#3d665a';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 0 0 rgba(28,48,42,0.5)';
                    }}
                    onMouseDown={e => {
                      e.currentTarget.style.transform = 'translateY(1px)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onMouseUp={e => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 0 0 rgba(28,48,42,0.4)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    Comprar por WhatsApp
                  </button>

                  <p style={{ fontSize: '0.7rem', color: '#827378', textAlign: 'center', marginTop: '0.75rem', lineHeight: 1.5 }}>
                    Te enviaremos el resumen del pedido por WhatsApp
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
