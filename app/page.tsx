"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import styles from "./page.module.css"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "María García",
      role: "Cliente Habitual",
      content:
        "Las velas aromáticas de Frutos del Bosque son increíbles. El aroma es duradero y crea un ambiente muy acogedor en mi hogar. ¡Totalmente recomendable!",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Cliente Nuevo",
      content:
        "Compré el kit para personalizar mi propia vela y fue una experiencia muy divertida. El resultado quedó profesional y ahora tengo una vela única que combina perfectamente con mi decoración.",
      rating: 5,
    },
    {
      id: 3,
      name: "Laura Martínez",
      role: "Decoradora de Interiores",
      content:
        "Como decoradora, siempre busco productos de calidad para mis clientes. Las velas de cerámica de la gama Premium son perfectas para añadir un toque elegante a cualquier espacio.",
      rating: 5,
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Vela Aromática Frutos del Bosque",
      price: 12.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/qdk4jysacvivzqjutiyb.webp",
      category: "Gama Básica",
    },
    {
      id: 2,
      name: "Vela con Llama de Colores",
      price: 15.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648018/1%20Medac%20Candle%20Flame/imagenes/ertqswaqnhgy0nfphsd1.jpg",
      category: "Gama Básica",
    },
    {
      id: 3,
      name: "Vela Farolillo de Cerámica",
      price: 29.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648018/1%20Medac%20Candle%20Flame/imagenes/g3tu2tzlyixkhfxhhp8b.webp",
      category: "Gama Premium",
    },
    {
      id: 4,
      name: "Kit Personaliza tu Vela",
      price: 24.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747650626/1%20Medac%20Candle%20Flame/imagenes/ejao61djqq9dzfiwh6jy.jpg",
      category: "Personalización Total",
    },
  ]

  return (
    <div className={styles.homePage}>
      {/* Hero Section with Video Background */}
      <section className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="https://res.cloudinary.com/dirpdlfbu/video/upload/v1747641275/1%20Medac%20Candle%20Flame/Videos/f8whxzk0cjlsm6algpbc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <div className={`${styles.heroContent} ${isLoaded ? styles.loaded : ""}`}>
            <h1 className={styles.heroTitle}>Velas Artesanales que Iluminan tu Vida</h1>
            <p className={styles.heroSubtitle}>
              Descubre nuestra colección de velas artesanales que transforman momentos cotidianos en experiencias
              sensoriales únicas.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/products" className="btn btn-primary">
                Explorar Productos
              </Link>
              <Link href="/about" className="btn btn-outline">
                Sobre Nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.featuresSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Por qué elegir nuestras velas?</h2>
          <p className={styles.sectionSubtitle}>
            Nuestras velas artesanales están diseñadas para crear ambientes acogedores y especiales, enriqueciendo tus
            sentidos.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
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
                  <path d="M9.663 17h4.673M12 6v11m-5.463-5.75C5.536 10.149 7.029 7 12 7c4.971 0 6.464 3.149 5.463 4.25-1.413 1.55-5.2 2.383-5.463 4.25-.262-1.867-4.05-2.7-5.463-4.25z"></path>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Artesanales</h3>
              <p className={styles.featureDesc}>
                Cada vela está elaborada a mano con materiales de alta calidad y técnicas tradicionales.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Aromas Exclusivos</h3>
              <p className={styles.featureDesc}>
                Fragancias cuidadosamente seleccionadas para crear experiencias sensoriales únicas.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
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
                  <path d="M12 3v5m1.8-3.9l-3.6 3.6M9 5.1l3.6 3.6"></path>
                  <path d="M8 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0"></path>
                  <path d="M19 14a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"></path>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Personalización</h3>
              <p className={styles.featureDesc}>
                Crea tu propia vela con nuestros kits personalizables, eligiendo aromas y colores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className={`${styles.section} ${styles.categoriesSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nuestras Colecciones</h2>
          <p className={styles.sectionSubtitle}>
            Descubre nuestras diferentes gamas de velas artesanales, desde la línea básica hasta la personalización
            total.
          </p>

          <div className={styles.categoriesGrid}>
            <div className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image
                  src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/irml0x8dakxx49kokq1k.webp"
                  alt="Gama Básica"
                  width={600}
                  height={400}
                  className={styles.categoryImg}
                />
                <div className={styles.categoryOverlay}></div>
              </div>
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>Gama Básica</h3>
                <p className={styles.categoryDesc}>
                  Velas aromáticas con fragancias clásicas y velas con llama de colores.
                </p>
                <Link href="/products/basic" className={styles.categoryLink}>
                  Explorar
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image
                  src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/m23xfnuozn6rj2uewb8z.jpg"
                  alt="Gama Premium"
                  width={600}
                  height={400}
                  className={styles.categoryImg}
                />
                <div className={styles.categoryOverlay}></div>
              </div>
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>Gama Premium</h3>
                <p className={styles.categoryDesc}>
                  Aromas exclusivos y velas decorativas con diseños únicos como nuestro farolillo de cerámica.
                </p>
                <Link href="/products/premium" className={styles.categoryLink}>
                  Explorar
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            <div className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image
                  src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/juxjrkk7b9eys7ix5ooj.webp"
                  alt="Personalización Total"
                  width={600}
                  height={400}
                  className={styles.categoryImg}
                />
                <div className={styles.categoryOverlay}></div>
              </div>
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>Personalización Total</h3>
                <p className={styles.categoryDesc}>
                  Kits para crear tus propias velas personalizadas, eligiendo aromas, colores y recipientes.
                </p>
                <Link href="/products/custom" className={styles.categoryLink}>
                  Explorar
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`${styles.section} ${styles.productsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Productos Destacados</h2>
          <p className={styles.sectionSubtitle}>
            Nuestras velas más populares, seleccionadas por su calidad y diseño excepcionales.
          </p>

          <div className={styles.productsGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className={styles.viewAllBtnContainer}>
            <Link href="/products" className="btn btn-primary">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* DIY Section */}
      <section className={`${styles.section} ${styles.diySection}`}>
        <div className="container">
          <div className={styles.diyGrid}>
            <div className={styles.diyContent}>
              <h2 className={styles.diyTitle}>Crea tus Propias Velas</h2>
              <p className={styles.diyDesc}>
                Con nuestros kits de personalización, puedes crear tus propias velas artesanales en casa. Es rápido,
                fácil y divertido. Elige tus aromas favoritos, colores y recipientes para crear una vela única que
                refleje tu estilo personal.
              </p>
              <ul className={styles.diyFeatures}>
                <li className={styles.diyFeature}>
                  <span className={styles.diyFeatureIcon}>✓</span>
                  Materiales de alta calidad
                </li>
                <li className={styles.diyFeature}>
                  <span className={styles.diyFeatureIcon}>✓</span>
                  Instrucciones paso a paso
                </li>
                <li className={styles.diyFeature}>
                  <span className={styles.diyFeatureIcon}>✓</span>
                  Resultados profesionales
                </li>
                <li className={styles.diyFeature}>
                  <span className={styles.diyFeatureIcon}>✓</span>
                  Experiencia creativa
                </li>
              </ul>
              <Link href="/products/diy" className="btn btn-primary">
                Descubrir Kits DIY
              </Link>
            </div>
            <div className={styles.diyImageContainer}>
              <div className={styles.diyImage}>
                <Image
                  src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747650626/1%20Medac%20Candle%20Flame/imagenes/ejao61djqq9dzfiwh6jy.jpg"
                  alt="Kit DIY de velas"
                  width={800}
                  height={600}
                  className={styles.diyImg}
                />
              </div>
              <div className={styles.diyBadge}>
                <div className={styles.diyBadgeTitle}>¡Fácil y Rápido!</div>
                <div className={styles.diyBadgeSubtitle}>Lista en menos de 1 hora</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Lo que dicen nuestros clientes</h2>
          <p className={styles.sectionSubtitle}>
            Descubre las experiencias de quienes ya han disfrutado de nuestras velas artesanales.
          </p>

          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.starIcon}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                  {[...Array(5 - testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.starIconEmpty}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <blockquote className={styles.testimonialQuote}>
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className={styles.testimonialAuthor}>{testimonials[currentTestimonial].name}</div>
                <div className={styles.testimonialRole}>{testimonials[currentTestimonial].role}</div>
              </div>
            </div>

            <div className={styles.testimonialControls}>
              <button
                className={styles.testimonialControl}
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                aria-label="Previous testimonial"
              >
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
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className={styles.testimonialDots}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.testimonialDot} ${index === currentTestimonial ? styles.activeDot : ""}`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button
                className={styles.testimonialControl}
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                aria-label="Next testimonial"
              >
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ilumina tu vida con nuestras velas artesanales</h2>
          <p className={styles.ctaDesc}>
            Transforma cualquier espacio en un ambiente acogedor y especial con nuestras velas artesanales.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/products" className="btn btn-secondary">
              Comprar Ahora
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
