"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./login.module.css"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulación de inicio de sesión
    setTimeout(() => {
      setIsLoading(false)
      // Simulación de error para demostración
      if (formData.email !== "demo@example.com" || formData.password !== "password") {
        setError("Correo electrónico o contraseña incorrectos.")
      } else {
        // Redirección exitosa (en una aplicación real)
        window.location.href = "/"
      }
    }, 1500)
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <Link href="/" className={styles.logo}>
              Candle<span className={styles.logoAccent}>Flame</span>
            </Link>
            <h1 className={styles.loginTitle}>Bienvenido de nuevo</h1>
            <p className={styles.loginSubtitle}>
              Inicia sesión para acceder a tu cuenta y disfrutar de nuestras velas artesanales
            </p>
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Correo Electrónico
              </label>
              <div className={styles.inputWrapper}>
                <div className={styles.inputIcon}>
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.passwordHeader}>
                <label htmlFor="password" className={styles.formLabel}>
                  Contraseña
                </label>
                <Link href="/forgot-password" className={styles.forgotPassword}>
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.inputIcon}>
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? (
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
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
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
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className={styles.formOptions}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>Recordarme</span>
              </label>
            </div>

            <button type="submit" className={styles.loginButton} disabled={isLoading}>
              {isLoading ? (
                <div className={styles.loadingSpinner}>
                  <div className={styles.spinner}></div>
                  <span>Iniciando sesión...</span>
                </div>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </form>

          <div className={styles.divider}>
            <span>O continúa con</span>
          </div>

          <div className={styles.socialLogin}>
            <button className={`${styles.socialButton} ${styles.facebookButton}`}>
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
              Facebook
            </button>
            <button className={`${styles.socialButton} ${styles.googleButton}`}>
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12h8"></path>
                <path d="M12 8v8"></path>
              </svg>
              Google
            </button>
          </div>

          <div className={styles.registerPrompt}>
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className={styles.registerLink}>
              Regístrate
            </Link>
          </div>
        </div>

        <div className={styles.loginImage}>
          <Image
            src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652808/1%20Medac%20Candle%20Flame/imagenes/ml71lxcflq4ajgauq9jf.png"
            alt="Velas artesanales"
            width={600}
            height={800}
            className={styles.loginImg}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <h2 className={styles.overlayTitle}>Ilumina tu vida con nuestras velas artesanales</h2>
              <p className={styles.overlayText}>
                Descubre nuestra colección de velas artesanales que transforman momentos cotidianos en experiencias
                sensoriales únicas.
              </p>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.quoteIcon}
                  >
                    <path d="M10 11l-2 2-4-4 4-4 2 2-2 2 2 2zm4 2l2-2 4 4-4 4-2-2 2-2-2-2z"></path>
                  </svg>
                  <p className={styles.testimonialText}>
                    Las velas aromáticas de Frutos del Bosque son increíbles. El aroma es duradero y crea un ambiente
                    muy acogedor en mi hogar. ¡Totalmente recomendable!
                  </p>
                  <div className={styles.testimonialAuthor}>María García, Cliente Habitual</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
