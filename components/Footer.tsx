import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Logo and Description */}
          <div className={styles.footerCol}>
            <h2 className={styles.footerLogo}>
              Candle<span className={styles.footerLogoAccent}>Flame</span>
            </h2>
            <p className={styles.footerText}>
              Transformamos momentos cotidianos en experiencias sensoriales únicas con nuestras velas artesanales.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
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
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Enlaces Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/products" className={styles.footerLink}>
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.footerLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.footerLink}>
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.footerLink}>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className={styles.footerLink}>
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Contacto</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
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
                  className={styles.contactIcon}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Castellón, España</span>
              </li>
              <li className={styles.contactItem}>
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
                  className={styles.contactIcon}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+34 123 456 789</span>
              </li>
              <li className={styles.contactItem}>
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
                  className={styles.contactIcon}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@candleflame.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Suscríbete</h3>
            <p className={styles.footerText}>Recibe nuestras novedades y ofertas exclusivas.</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Tu correo electrónico" className={styles.newsletterInput} />
              <button className={styles.newsletterButton}>Suscribirse</button>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Candle Flame. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
