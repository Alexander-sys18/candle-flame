"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import styles from "./contact.module.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de envío de formulario
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "¡Gracias por tu mensaje! Te responderemos lo antes posible.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <div className={styles.contactPage}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.pageTitle}>Contacto</h1>
          <p className={styles.pageSubtitle}>
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta o sugerencia.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Envíanos un mensaje</h2>
            <p className={styles.formSubtitle}>
              Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>

            {formStatus && (
              <div className={`${styles.formMessage} ${formStatus.success ? styles.formSuccess : styles.formError}`}>
                {formStatus.message}
              </div>
            )}

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="general">Consulta General</option>
                  <option value="order">Información sobre Pedido</option>
                  <option value="wholesale">Ventas al por Mayor</option>
                  <option value="workshop">Talleres</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Información de Contacto</h3>
              <p className={styles.infoSubtitle}>
                Puedes contactarnos directamente o visitar nuestro taller en Castellón.
              </p>

              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <div className={styles.contactIcon}>
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <h4>Dirección</h4>
                    <p>Calle Ejemplo 123, 12001 Castellón, España</p>
                  </div>
                </li>

                <li className={styles.contactItem}>
                  <div className={styles.contactIcon}>
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <h4>Teléfono</h4>
                    <p>+34 123 456 789</p>
                  </div>
                </li>

                <li className={styles.contactItem}>
                  <div className={styles.contactIcon}>
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <h4>Correo Electrónico</h4>
                    <p>info@candleflame.com</p>
                  </div>
                </li>

                <li className={styles.contactItem}>
                  <div className={styles.contactIcon}>
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
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className={styles.contactText}>
                    <h4>Horario</h4>
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                  </div>
                </li>
              </ul>

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

            <div className={styles.mapContainer}>
              <Image
                src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651334/1%20Medac%20Candle%20Flame/imagenes/dz6ogn1o3sbhcnu3a1dq.jpg"
                alt="Mapa de ubicación"
                width={600}
                height={400}
                className={styles.mapImage}
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>¿Cuál es el tiempo de entrega de los pedidos?</h3>
              <p className={styles.faqAnswer}>
                Los pedidos se procesan en 1-2 días hábiles. El tiempo de entrega depende de tu ubicación, generalmente
                entre 3-5 días hábiles para envíos nacionales.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>¿Ofrecen envíos internacionales?</h3>
              <p className={styles.faqAnswer}>
                Sí, realizamos envíos a toda la Unión Europea. Los tiempos de entrega para envíos internacionales son de
                7-14 días hábiles.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>¿Puedo personalizar una vela con mi propio aroma?</h3>
              <p className={styles.faqAnswer}>
                Sí, ofrecemos servicios de personalización. Puedes elegir entre nuestra selección de aromas o solicitar
                una mezcla personalizada. Contáctanos para más detalles.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>¿Cómo puedo cuidar mi vela para que dure más tiempo?</h3>
              <p className={styles.faqAnswer}>
                Para el primer uso, deja que la vela arda durante al menos 2 horas. Recorta la mecha a 5mm antes de cada
                uso y mantén la vela alejada de corrientes de aire.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
