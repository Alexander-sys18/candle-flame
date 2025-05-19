"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
// Cambiar la línea de importación de estilos
import styles from "./ProductCard.module.css"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  aroma?: string
  rating?: number
  reviews?: number
  stock?: number
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAddingToCart(true)

    // Simular un pequeño retraso para la animación
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        category: product.category,
      })

      setIsAddingToCart(false)
      setShowNotification(true)

      // Ocultar la notificación después de 2 segundos
      setTimeout(() => {
        setShowNotification(false)
      }, 2000)
    }, 500)
  }

  return (
    <div className={styles.card} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.imageContainer}>
        <Link href={`/products/${product.id}`}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
        </Link>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={styles.favoriteButton}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isFavorite ? styles.favoriteActive : ""}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div className={`${styles.addToCartContainer} ${isHovered ? styles.visible : ""}`}>
          <button
            className={`${styles.addToCartButton} ${isAddingToCart ? styles.loading : ""}`}
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? (
              <>
                <span className={styles.spinner}></span>
                Añadiendo...
              </>
            ) : (
              <>
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
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Añadir al Carrito
              </>
            )}
          </button>
        </div>
        {showNotification && (
          <div className={styles.notification}>
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
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Añadido al carrito
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.category}>{product.category}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className={styles.title}>{product.name}</h3>
        </Link>
        <div className={styles.price}>{product.price.toFixed(2)} €</div>
      </div>
    </div>
  )
}
