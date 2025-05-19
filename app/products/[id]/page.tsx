"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import styles from "./product-detail.module.css"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [selectedImage, setSelectedImage] = useState(0)

  // Datos de ejemplo para el producto
  const product = {
    id: Number.parseInt(params.id),
    name: "Vela Aromática Frutos del Bosque",
    price: 12.99,
    description:
      "Nuestra vela aromática de Frutos del Bosque está elaborada con cera de soja 100% natural y aceites esenciales. Con una duración aproximada de 40 horas, esta vela llenará tu hogar con el aroma fresco y dulce de los frutos del bosque, creando un ambiente acogedor y relajante.",
    features: [
      "Cera de soja 100% natural",
      "Aceites esenciales",
      "Duración aproximada: 40 horas",
      "Mecha de algodón",
      "Recipiente de vidrio reutilizable",
    ],
    specifications: {
      Dimensiones: "10cm x 8cm",
      Peso: "300g",
      Material: "Cera de soja, vidrio",
      Aroma: "Frutos del Bosque",
      Duración: "40 horas",
      Instrucciones:
        "Para el primer uso, dejar encendida durante al menos 2 horas. Recortar la mecha a 5mm antes de cada uso.",
    },
    images: [
      "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/qdk4jysacvivzqjutiyb.webp",
      "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/juxjrkk7b9eys7ix5ooj.webp",
      "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/m23xfnuozn6rj2uewb8z.jpg",
      "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648018/1%20Medac%20Candle%20Flame/imagenes/g3tu2tzlyixkhfxhhp8b.webp",
    ],
    category: "Gama Básica",
    stock: 15,
    rating: 4.8,
    reviews: 24,
    relatedProducts: [
      {
        id: 2,
        name: "Vela con Llama de Colores",
        price: 15.99,
        image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648018/1%20Medac%20Candle%20Flame/imagenes/ertqswaqnhgy0nfphsd1.jpg",
        category: "Gama Básica",
      },
      {
        id: 3,
        name: "Vela Aromática Vainilla",
        price: 12.99,
        image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648019/1%20Medac%20Candle%20Flame/imagenes/oxqnrypcgai6vwekamck.png",
        category: "Gama Básica",
      },
      {
        id: 4,
        name: "Vela Aromática Lavanda",
        price: 12.99,
        image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648019/1%20Medac%20Candle%20Flame/imagenes/oxqnrypcgai6vwekamck.png",
        category: "Gama Básica",
      },
    ],
  }

  // Dentro de la función ProductDetail, añadir:
  const { addItem } = useCart()

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value)
    }
  }

  return (
    <div className={styles.productDetailPage}>
      <div className="container">
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Inicio</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/products">Productos</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>{product.name}</span>
        </div>

        <div className={styles.productDetail}>
          {/* Product Images */}
          <div className={styles.productImages}>
            <div className={styles.mainImage}>
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className={styles.productImg}
              />
            </div>
            <div className={styles.thumbnails}>
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.thumbnail} ${selectedImage === index ? styles.activeThumbnail : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Imagen ${index + 1}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className={styles.productInfo}>
            <div className={styles.category}>{product.category}</div>
            <h1 className={styles.productName}>{product.name}</h1>

            <div className={styles.productMeta}>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className={styles.ratingText}>
                  {product.rating} ({product.reviews} reseñas)
                </span>
              </div>
              <div className={styles.stock}>
                <span className={styles.stockStatus}>
                  {product.stock > 0 ? (
                    <>
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
                        className={styles.stockIcon}
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      En stock
                    </>
                  ) : (
                    <>
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
                        className={styles.outOfStockIcon}
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      Agotado
                    </>
                  )}
                </span>
              </div>
            </div>

            <div className={styles.price}>{product.price.toFixed(2)} €</div>

            <div className={styles.description}>{product.description}</div>

            <div className={styles.actions}>
              <div className={styles.quantitySelector}>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number.parseInt(e.target.value))}
                  min="1"
                  max={product.stock}
                  className={styles.quantityInput}
                />
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
              <button
                className={styles.addToCartButton}
                onClick={() => {
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    quantity: quantity,
                    category: product.category,
                  })
                }}
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
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Añadir al Carrito
              </button>
              <button className={styles.favoriteButton}>
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
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            <div className={styles.shipping}>
              <div className={styles.shippingIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div className={styles.shippingInfo}>
                <h4>Envío Gratuito</h4>
                <p>En pedidos superiores a 30€</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className={styles.productTabs}>
          <div className={styles.tabsHeader}>
            <button
              className={`${styles.tabButton} ${activeTab === "description" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Descripción
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "features" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("features")}
            >
              Características
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "specifications" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("specifications")}
            >
              Especificaciones
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "reviews" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reseñas
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "description" && <div className={styles.tabPane}>{product.description}</div>}

            {activeTab === "features" && (
              <div className={styles.tabPane}>
                <ul className={styles.featuresList}>
                  {product.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
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
                        className={styles.featureIcon}
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className={styles.tabPane}>
                <table className={styles.specificationsTable}>
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className={styles.tabPane}>
                <div className={styles.reviewsSummary}>
                  <div className={styles.reviewsAverage}>
                    <div className={styles.averageRating}>{product.rating}</div>
                    <div className={styles.averageStars}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <div className={styles.totalReviews}>Basado en {product.reviews} reseñas</div>
                  </div>
                  <button className={styles.writeReviewButton}>Escribir una Reseña</button>
                </div>

                <div className={styles.reviewsList}>
                  <div className={styles.reviewItem}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewAuthor}>María García</div>
                      <div className={styles.reviewDate}>12/04/2023</div>
                    </div>
                    <div className={styles.reviewRating}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={i < 5 ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={i < 5 ? styles.starFilled : styles.starEmpty}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <h4 className={styles.reviewTitle}>¡Increíble aroma!</h4>
                    <p className={styles.reviewContent}>
                      El aroma de frutos del bosque es increíble y duradero. La vela tiene una excelente calidad y dura
                      mucho tiempo. Definitivamente compraré más.
                    </p>
                  </div>

                  <div className={styles.reviewItem}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewAuthor}>Carlos Rodríguez</div>
                      <div className={styles.reviewDate}>28/03/2023</div>
                    </div>
                    <div className={styles.reviewRating}>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={i < 4 ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={i < 4 ? styles.starFilled : styles.starEmpty}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <h4 className={styles.reviewTitle}>Buen producto</h4>
                    <p className={styles.reviewContent}>
                      La vela tiene un aroma muy agradable y el recipiente de vidrio es bonito. Le doy 4 estrellas
                      porque me hubiera gustado que el aroma fuera un poco más intenso.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className={styles.relatedProducts}>
          <h2 className={styles.relatedTitle}>Productos Relacionados</h2>
          <div className={styles.relatedGrid}>
            {product.relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className={styles.relatedProduct}>
                <Link href={`/products/${relatedProduct.id}`} className={styles.relatedProductLink}>
                  <div className={styles.relatedProductImage}>
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      width={150}
                      height={150}
                      className={styles.relatedProductImg}
                    />
                  </div>
                  <div className={styles.relatedProductInfo}>
                    <h3 className={styles.relatedProductName}>{relatedProduct.name}</h3>
                    <div className={styles.relatedProductPrice}>{relatedProduct.price.toFixed(2)} €</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
