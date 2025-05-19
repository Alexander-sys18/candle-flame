"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import styles from "./customize.module.css"

export default function CustomizePage() {
  const { addItem } = useCart()
  const [step, setStep] = useState(1)
  const [customization, setCustomization] = useState({
    color: "",
    aroma: "",
    container: "",
    message: "",
    quantity: 1,
  })
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const colors = [
    { id: "white", name: "Blanco", hex: "#FFFFFF" },
    { id: "cream", name: "Crema", hex: "#FFF8DC" },
    { id: "pink", name: "Rosa", hex: "#FFC0CB" },
    { id: "red", name: "Rojo", hex: "#FF6B6B" },
    { id: "blue", name: "Azul", hex: "#87CEEB" },
    { id: "green", name: "Verde", hex: "#98FB98" },
    { id: "purple", name: "Púrpura", hex: "#DDA0DD" },
    { id: "black", name: "Negro", hex: "#333333" },
  ]

  const aromas = [
    { id: "vanilla", name: "Vainilla", description: "Dulce y cálido aroma que crea un ambiente acogedor" },
    { id: "lavender", name: "Lavanda", description: "Relajante y calmante, ideal para momentos de descanso" },
    { id: "forest", name: "Frutos del Bosque", description: "Fresco y dulce, evoca paseos por el bosque" },
    { id: "sandalwood", name: "Sándalo", description: "Exótico y sensual, perfecto para momentos especiales" },
    { id: "cinnamon", name: "Canela", description: "Cálido y especiado, ideal para crear ambientes acogedores" },
    { id: "ocean", name: "Brisa Marina", description: "Fresco y limpio, recuerda a días en la playa" },
    { id: "citrus", name: "Cítricos", description: "Energizante y refrescante, perfecto para espacios de trabajo" },
    { id: "rose", name: "Rosa", description: "Floral y romántico, ideal para ocasiones especiales" },
  ]

  const containers = [
    { id: "glass", name: "Vaso de Cristal", price: 5, image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747653184/1%20Medac%20Candle%20Flame/imagenes/gtsffijyf40qlqdaz1kz.webp" },
    { id: "ceramic", name: "Cerámica", price: 8, image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747653185/1%20Medac%20Candle%20Flame/imagenes/dh0ag7modx39qbjj5uzt.jpg" },
    { id: "wood", name: "Madera", price: 10, image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747653186/1%20Medac%20Candle%20Flame/imagenes/mrecy4tzifm3pmp00hhd.jpg" },
    { id: "metal", name: "Metal", price: 12, image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747653187/1%20Medac%20Candle%20Flame/imagenes/fzucaedx934araqbblq5.jpg" },
  ]

  const handleColorSelect = (colorId: string) => {
    setCustomization({ ...customization, color: colorId })
  }

  const handleAromaSelect = (aromaId: string) => {
    setCustomization({ ...customization, aroma: aromaId })
  }

  const handleContainerSelect = (containerId: string) => {
    setCustomization({ ...customization, container: containerId })
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomization({ ...customization, message: e.target.value })
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= 1) {
      setCustomization({ ...customization, quantity: value })
    }
  }

  const handleNextStep = () => {
    if (step === 1 && !customization.color) {
      alert("Por favor, selecciona un color")
      return
    }
    if (step === 2 && !customization.aroma) {
      alert("Por favor, selecciona un aroma")
      return
    }
    if (step === 3 && !customization.container) {
      alert("Por favor, selecciona un contenedor")
      return
    }

    setStep(step + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePrevStep = () => {
    setStep(step - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getSelectedContainer = () => {
    return containers.find((container) => container.id === customization.container)
  }

  const getBasePrice = () => {
    const container = getSelectedContainer()
    return container ? container.price : 0
  }

  const getTotalPrice = () => {
    const basePrice = getBasePrice()
    // Añadir 3€ por personalización
    return basePrice + 3
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true)

    // Simular un pequeño retraso para la animación
    setTimeout(() => {
      const selectedContainer = getSelectedContainer()
      const selectedColor = colors.find((color) => color.id === customization.color)
      const selectedAroma = aromas.find((aroma) => aroma.id === customization.aroma)

      if (selectedContainer && selectedColor && selectedAroma) {
        addItem({
          id: 999, // ID especial para velas personalizadas
          name: "Vela Personalizada",
          price: getTotalPrice(),
          image: selectedContainer.image,
          quantity: customization.quantity,
          customizations: {
            Color: selectedColor.name,
            Aroma: selectedAroma.name,
            Contenedor: selectedContainer.name,
            Mensaje: customization.message || "Sin mensaje",
          },
        })

        setShowNotification(true)
        setTimeout(() => {
          setShowNotification(false)
        }, 3000)
      }

      setIsAddingToCart(false)
    }, 1000)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>Paso 1: Elige el color de tu vela</h2>
            <p className={styles.stepDescription}>
              El color de tu vela no solo es estético, también puede influir en el ambiente que crea.
            </p>

            <div className={styles.colorGrid}>
              {colors.map((color) => (
                <div
                  key={color.id}
                  className={`${styles.colorOption} ${customization.color === color.id ? styles.selected : ""}`}
                  onClick={() => handleColorSelect(color.id)}
                >
                  <div
                    className={styles.colorSwatch}
                    style={{ backgroundColor: color.hex, border: color.id === "white" ? "1px solid #ddd" : "none" }}
                  ></div>
                  <span className={styles.colorName}>{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        )
      case 2:
        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>Paso 2: Elige el aroma de tu vela</h2>
            <p className={styles.stepDescription}>
              El aroma es uno de los elementos más importantes de tu vela, ya que creará una experiencia sensorial
              única.
            </p>

            <div className={styles.aromaGrid}>
              {aromas.map((aroma) => (
                <div
                  key={aroma.id}
                  className={`${styles.aromaOption} ${customization.aroma === aroma.id ? styles.selected : ""}`}
                  onClick={() => handleAromaSelect(aroma.id)}
                >
                  <h3 className={styles.aromaName}>{aroma.name}</h3>
                  <p className={styles.aromaDescription}>{aroma.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>Paso 3: Elige el contenedor de tu vela</h2>
            <p className={styles.stepDescription}>
              El contenedor no solo determina la apariencia de tu vela, sino también cómo se distribuye el calor y el
              aroma.
            </p>

            <div className={styles.containerGrid}>
              {containers.map((container) => (
                <div
                  key={container.id}
                  className={`${styles.containerOption} ${
                    customization.container === container.id ? styles.selected : ""
                  }`}
                  onClick={() => handleContainerSelect(container.id)}
                >
                  <div className={styles.containerImage}>
                    <Image
                      src={container.image}
                      alt={container.name}
                      width={200}
                      height={200}
                      className={styles.containerImg}
                    />
                  </div>
                  <h3 className={styles.containerName}>{container.name}</h3>
                  <p className={styles.containerPrice}>{container.price.toFixed(2)} €</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 4:
        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>Paso 4: Personaliza tu mensaje</h2>
            <p className={styles.stepDescription}>
              Añade un mensaje personalizado que se incluirá en una etiqueta con tu vela. Ideal para regalos o
              recordatorios especiales.
            </p>

            <div className={styles.messageContainer}>
              <textarea
                className={styles.messageInput}
                placeholder="Escribe tu mensaje personalizado aquí (opcional, máximo 100 caracteres)"
                maxLength={100}
                value={customization.message}
                onChange={handleMessageChange}
              ></textarea>
              <p className={styles.characterCount}>{customization.message.length}/100 caracteres</p>
            </div>
          </div>
        )
      case 5:
        const selectedColor = colors.find((color) => color.id === customization.color)
        const selectedAroma = aromas.find((aroma) => aroma.id === customization.aroma)
        const selectedContainer = containers.find((container) => container.id === customization.container)

        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>Resumen de tu vela personalizada</h2>
            <p className={styles.stepDescription}>
              Revisa los detalles de tu vela personalizada antes de añadirla al carrito.
            </p>

            <div className={styles.summaryContainer}>
              <div className={styles.summaryImage}>
                <div
                  className={styles.candlePreview}
                  style={{
                    backgroundColor: selectedColor?.hex,
                    border: customization.color === "white" ? "1px solid #ddd" : "none",
                  }}
                ></div>
              </div>

              <div className={styles.summaryDetails}>
                <h3 className={styles.summaryTitle}>Vela Personalizada</h3>

                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Color:</span>
                  <span className={styles.summaryValue}>{selectedColor?.name}</span>
                </div>

                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Aroma:</span>
                  <span className={styles.summaryValue}>{selectedAroma?.name}</span>
                </div>

                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Contenedor:</span>
                  <span className={styles.summaryValue}>{selectedContainer?.name}</span>
                </div>

                {customization.message && (
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Mensaje:</span>
                    <span className={styles.summaryValue}>{customization.message}</span>
                  </div>
                )}

                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Precio base:</span>
                  <span className={styles.summaryValue}>{getBasePrice().toFixed(2)} €</span>
                </div>

                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Personalización:</span>
                  <span className={styles.summaryValue}>3.00 €</span>
                </div>

                <div className={styles.summaryTotal}>
                  <span className={styles.summaryLabel}>Precio total:</span>
                  <span className={styles.summaryValue}>{getTotalPrice().toFixed(2)} €</span>
                </div>

                <div className={styles.quantityContainer}>
                  <label htmlFor="quantity" className={styles.quantityLabel}>
                    Cantidad:
                  </label>
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.quantityButton}
                      onClick={() =>
                        setCustomization({
                          ...customization,
                          quantity: Math.max(1, customization.quantity - 1),
                        })
                      }
                      disabled={customization.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={customization.quantity}
                      onChange={handleQuantityChange}
                      className={styles.quantityInput}
                    />
                    <button
                      className={styles.quantityButton}
                      onClick={() =>
                        setCustomization({
                          ...customization,
                          quantity: customization.quantity + 1,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className={`${styles.addToCartButton} ${isAddingToCart ? styles.loading : ""}`}
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? (
                    <>
                      <span className={styles.spinner}></span>
                      Añadiendo al carrito...
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
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.customizePage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Personaliza tu Vela</h1>
        <p className={styles.pageDescription}>
          Crea una vela única que refleje tu estilo personal. Elige el color, aroma, contenedor y añade un mensaje
          personalizado.
        </p>

        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${((step - 1) / 4) * 100}%` }}></div>
          </div>
          <div className={styles.progressSteps}>
            <div className={`${styles.progressStep} ${step >= 1 ? styles.active : ""}`}>
              <div className={styles.stepNumber}>1</div>
              <span className={styles.stepLabel}>Color</span>
            </div>
            <div className={`${styles.progressStep} ${step >= 2 ? styles.active : ""}`}>
              <div className={styles.stepNumber}>2</div>
              <span className={styles.stepLabel}>Aroma</span>
            </div>
            <div className={`${styles.progressStep} ${step >= 3 ? styles.active : ""}`}>
              <div className={styles.stepNumber}>3</div>
              <span className={styles.stepLabel}>Contenedor</span>
            </div>
            <div className={`${styles.progressStep} ${step >= 4 ? styles.active : ""}`}>
              <div className={styles.stepNumber}>4</div>
              <span className={styles.stepLabel}>Mensaje</span>
            </div>
            <div className={`${styles.progressStep} ${step >= 5 ? styles.active : ""}`}>
              <div className={styles.stepNumber}>5</div>
              <span className={styles.stepLabel}>Resumen</span>
            </div>
          </div>
        </div>

        {renderStepContent()}

        <div className={styles.navigationButtons}>
          {step > 1 && (
            <button className={styles.backButton} onClick={handlePrevStep}>
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
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Anterior
            </button>
          )}
          {step < 5 && (
            <button className={styles.nextButton} onClick={handleNextStep}>
              Siguiente
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
            </button>
          )}
        </div>

        {showNotification && (
          <div className={styles.notification}>
            <div className={styles.notificationIcon}>
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
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className={styles.notificationContent}>
              <div className={styles.notificationTitle}>¡Añadido al carrito!</div>
              <div className={styles.notificationMessage}>Tu vela personalizada ha sido añadida al carrito.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
