"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import styles from "./cart.module.css"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponDiscount, setCouponDiscount] = useState(0)

  const shipping = subtotal > 30 ? 0 : 4.99
  const discount = couponApplied ? subtotal * couponDiscount : 0
  const total = subtotal + shipping - discount

  const handleQuantityChange = (item: any, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity)
    }
  }

  const handleRemoveItem = (id: number) => {
    removeItem(id)
  }

  const handleApplyCoupon = () => {
    // Simulación de cupones
    if (couponCode.toLowerCase() === "welcome10") {
      setCouponApplied(true)
      setCouponDiscount(0.1) // 10% de descuento
    } else if (couponCode.toLowerCase() === "summer20") {
      setCouponApplied(true)
      setCouponDiscount(0.2) // 20% de descuento
    } else {
      alert("Cupón no válido")
    }
  }

  const handleClearCart = () => {
    if (window.confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
      clearCart()
    }
  }

  if (items.length === 0) {
    return (
      <div className={styles.cartPage}>
        <div className="container">
          <div className={styles.emptyCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.emptyCartIcon}
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h1 className={styles.emptyCartTitle}>Tu carrito está vacío</h1>
            <p className={styles.emptyCartText}>
              Parece que aún no has añadido ningún producto a tu carrito. Explora nuestra tienda para encontrar velas
              artesanales que te encantarán.
            </p>
            <Link href="/products" className="btn btn-primary">
              Explorar Productos
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Tu Carrito</h1>

        <div className={styles.cartContainer}>
          <div className={styles.cartItems}>
            <div className={styles.cartHeader}>
              <div className={styles.productHeader}>Producto</div>
              <div className={styles.priceHeader}>Precio</div>
              <div className={styles.quantityHeader}>Cantidad</div>
              <div className={styles.subtotalHeader}>Subtotal</div>
              <div className={styles.actionsHeader}></div>
            </div>

            {items.map((item) => (
              <div key={`${item.id}-${JSON.stringify(item.customizations)}`} className={styles.cartItem}>
                <div className={styles.productInfo}>
                  <div className={styles.productImage}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className={styles.productImg}
                    />
                  </div>
                  <div className={styles.productDetails}>
                    <h3 className={styles.productName}>{item.name}</h3>
                    {item.customizations && Object.keys(item.customizations).length > 0 && (
                      <div className={styles.customizations}>
                        {Object.entries(item.customizations).map(([key, value]) => (
                          <span key={key} className={styles.customization}>
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.productPrice}>{item.price.toFixed(2)} €</div>

                <div className={styles.quantityControl}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>

                <div className={styles.productSubtotal}>{(item.price * item.quantity).toFixed(2)} €</div>

                <div className={styles.itemActions}>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemoveItem(item.id)}
                    aria-label="Eliminar producto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <div className={styles.cartActions}>
              <div className={styles.couponContainer}>
                <input
                  type="text"
                  placeholder="Código de cupón"
                  className={styles.couponInput}
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className={styles.couponButton} onClick={handleApplyCoupon}>
                  Aplicar Cupón
                </button>
              </div>
              <button className={styles.clearCartButton} onClick={handleClearCart}>
                Vaciar Carrito
              </button>
            </div>
          </div>

          <div className={styles.cartSummary}>
            <h2 className={styles.summaryTitle}>Resumen del Pedido</h2>

            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>

              {couponApplied && (
                <div className={styles.summaryRow}>
                  <span>Descuento ({couponDiscount * 100}%)</span>
                  <span>-{discount.toFixed(2)} €</span>
                </div>
              )}

              <div className={styles.summaryRow}>
                <span>Envío</span>
                <span>{shipping === 0 ? "Gratis" : `${shipping.toFixed(2)} €`}</span>
              </div>

              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>

              <div className={styles.shippingNote}>
                {shipping === 0 ? <p>¡Envío gratuito aplicado!</p> : <p>Envío gratuito en pedidos superiores a 30€</p>}
              </div>
            </div>

            <button className={styles.checkoutButton}>
              Proceder al Pago
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <div className={styles.paymentMethods}>
              <p>Métodos de pago aceptados:</p>
              <div className={styles.paymentIcons}>
                <span className={styles.paymentIcon}>Visa</span>
                <span className={styles.paymentIcon}>MC</span>
                <span className={styles.paymentIcon}>PayPal</span>
              </div>
            </div>

            <div className={styles.secureCheckout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Pago 100% seguro</span>
            </div>
          </div>
        </div>

        <div className={styles.continueShoppingContainer}>
          <Link href="/products" className={styles.continueShoppingLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Continuar Comprando
          </Link>
        </div>
      </div>
    </div>
  )
}
