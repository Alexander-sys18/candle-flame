"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./CookieBanner.module.css"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Siempre activado
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    // Comprobar si el usuario ya ha aceptado las cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    } else {
      try {
        setCookiePreferences(JSON.parse(cookieConsent))
      } catch (error) {
        console.error("Error parsing cookie preferences:", error)
        setShowBanner(true)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    setCookiePreferences(allAccepted)
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted))
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    setCookiePreferences(onlyNecessary)
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary))
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(cookiePreferences))
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handlePreferenceChange = (key: keyof typeof cookiePreferences) => {
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showBanner) return null

  return (
    <div className={styles.cookieBanner}>
      {!showPreferences ? (
        <div className={styles.bannerContent}>
          <div className={styles.bannerText}>
            <h2 className={styles.bannerTitle}>Utilizamos cookies</h2>
            <p className={styles.bannerDescription}>
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas
              nuestra{" "}
              <Link href="/cookies" className={styles.bannerLink}>
                política de cookies
              </Link>{" "}
              y{" "}
              <Link href="/privacy" className={styles.bannerLink}>
                política de privacidad
              </Link>
              .
            </p>
          </div>
          <div className={styles.bannerButtons}>
            <button className={styles.preferencesButton} onClick={() => setShowPreferences(true)}>
              Preferencias
            </button>
            <button className={styles.rejectButton} onClick={handleRejectAll}>
              Rechazar
            </button>
            <button className={styles.acceptButton} onClick={handleAcceptAll}>
              Aceptar todas
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.preferencesPanel}>
          <h2 className={styles.preferencesTitle}>Preferencias de cookies</h2>
          <p className={styles.preferencesDescription}>
            Puedes elegir qué tipos de cookies aceptas. Las cookies necesarias son requeridas para el funcionamiento
            básico del sitio.
          </p>

          <div className={styles.cookieOptions}>
            <div className={styles.cookieOption}>
              <div className={styles.cookieOptionHeader}>
                <div>
                  <h3 className={styles.cookieOptionTitle}>Cookies necesarias</h3>
                  <p className={styles.cookieOptionDescription}>
                    Estas cookies son esenciales para el funcionamiento del sitio web.
                  </p>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" checked={cookiePreferences.necessary} disabled />
                  <span className={`${styles.slider} ${styles.disabled}`}></span>
                </label>
              </div>
            </div>

            <div className={styles.cookieOption}>
              <div className={styles.cookieOptionHeader}>
                <div>
                  <h3 className={styles.cookieOptionTitle}>Cookies analíticas</h3>
                  <p className={styles.cookieOptionDescription}>
                    Nos ayudan a entender cómo interactúas con el sitio web.
                  </p>
                </div>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    onChange={() => handlePreferenceChange("analytics")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.cookieOption}>
              <div className={styles.cookieOptionHeader}>
                <div>
                  <h3 className={styles.cookieOptionTitle}>Cookies de marketing</h3>
                  <p className={styles.cookieOptionDescription}>
                    Utilizadas para mostrarte anuncios relevantes en otros sitios.
                  </p>
                </div>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    onChange={() => handlePreferenceChange("marketing")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.cookieOption}>
              <div className={styles.cookieOptionHeader}>
                <div>
                  <h3 className={styles.cookieOptionTitle}>Cookies de preferencias</h3>
                  <p className={styles.cookieOptionDescription}>
                    Permiten recordar tus preferencias para mejorar tu experiencia.
                  </p>
                </div>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={cookiePreferences.preferences}
                    onChange={() => handlePreferenceChange("preferences")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>

          <div className={styles.preferencesButtons}>
            <button className={styles.backButton} onClick={() => setShowPreferences(false)}>
              Volver
            </button>
            <div>
              <button className={styles.rejectButton} onClick={handleRejectAll}>
                Rechazar todas
              </button>
              <button className={styles.saveButton} onClick={handleSavePreferences}>
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
