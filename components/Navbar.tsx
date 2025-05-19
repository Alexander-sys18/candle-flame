"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { itemCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            Candle<span className={styles.logoAccent}>Flame</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink}>
              Inicio
            </Link>
            <Link href="/about" className={styles.navLink}>
              Sobre Nosotros
            </Link>
            <Link href="/products" className={styles.navLink}>
              Productos
            </Link>
            <Link href="/customize" className={styles.navLink}>
              Personalizar
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contacto
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <Link href="/cart" className={styles.iconButton} aria-label="Carrito">
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
              {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
            </Link>
            <Link href="/login" className={`btn btn-primary ${styles.loginBtn}`}>
              Iniciar Sesión
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? (
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
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
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            <nav className={styles.mobileNavLinks}>
              <Link href="/" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
              <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                Sobre Nosotros
              </Link>
              <Link href="/products" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                Productos
              </Link>
              <Link href="/customize" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                Personalizar
              </Link>
              <Link href="/blog" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
              <div className={styles.mobileActions}>
                <Link href="/login" className="btn btn-primary">
                  Iniciar Sesión
                </Link>
            <Link href="/cart" className={styles.iconButton} aria-label="Carrito">
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
              {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
            </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
