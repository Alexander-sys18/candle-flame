"use client"

import type React from "react"

import { useState, useEffect } from "react"
import ProductCard from "@/components/ProductCard"
import styles from "./products.module.css"

export default function ProductsPage() {
  // Estado para los filtros
  const [activeCategory, setActiveCategory] = useState("all")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])
  const [selectedAromas, setSelectedAromas] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  // Datos de ejemplo para las categorías
  const categories = [
    { id: "all", name: "Todos" },
    { id: "basic", name: "Gama Básica" },
    { id: "premium", name: "Gama Premium" },
    { id: "custom", name: "Personalización" },
  ]

  // Datos de ejemplo para los aromas
  const aromas = [
    { id: "vanilla", name: "Vainilla" },
    { id: "lavender", name: "Lavanda" },
    { id: "forest", name: "Frutos del Bosque" },
    { id: "sandalwood", name: "Sándalo" },
    { id: "cinnamon", name: "Canela" },
  ]

  // Datos de ejemplo para los productos
  const products = [
    {
      id: 1,
      name: "Vela Aromática Frutos del Bosque",
      price: 12.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/qdk4jysacvivzqjutiyb.webp",
      category: "basic",
      aroma: "forest",
      rating: 4.8,
      reviews: 24,
      stock: 15,
    },
    {
      id: 2,
      name: "Vela con Llama de Colores",
      price: 15.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648018/1%20Medac%20Candle%20Flame/imagenes/ertqswaqnhgy0nfphsd1.jpg",
      category: "basic",
      aroma: "vanilla",
      rating: 4.5,
      reviews: 18,
      stock: 10,
    },
    {
      id: 3,
      name: "Vela Aromática Vainilla",
      price: 12.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648019/1%20Medac%20Candle%20Flame/imagenes/oxqnrypcgai6vwekamck.png",
      category: "basic",
      aroma: "vanilla",
      rating: 4.7,
      reviews: 32,
      stock: 20,
    },
    {
      id: 4,
      name: "Vela Aromática Lavanda",
      price: 12.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651338/1%20Medac%20Candle%20Flame/imagenes/wzxgl5jdq0ghuwguvpic.avif",
      category: "basic",
      aroma: "lavender",
      rating: 4.6,
      reviews: 27,
      stock: 18,
    },
    {
      id: 5,
      name: "Vela Farolillo de Cerámica",
      price: 29.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648018/1%20Medac%20Candle%20Flame/imagenes/g3tu2tzlyixkhfxhhp8b.webp",
      category: "premium",
      aroma: "sandalwood",
      rating: 4.9,
      reviews: 15,
      stock: 8,
    },
    {
      id: 6,
      name: "Vela Decorativa Mármol",
      price: 24.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651233/1%20Medac%20Candle%20Flame/imagenes/temm2awhbvensjgukre1.webp",
      category: "premium",
      aroma: "cinnamon",
      rating: 4.7,
      reviews: 12,
      stock: 10,
    },
    {
      id: 7,
      name: "Vela Aromática Premium Sándalo",
      price: 19.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651299/1%20Medac%20Candle%20Flame/imagenes/pnn6aahpjqlit5b7gozc.jpg",
      category: "premium",
      aroma: "sandalwood",
      rating: 4.8,
      reviews: 20,
      stock: 15,
    },
    {
      id: 8,
      name: "Kit Personaliza tu Vela",
      price: 24.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/juxjrkk7b9eys7ix5ooj.webp",
      category: "custom",
      aroma: "custom",
      rating: 4.9,
      reviews: 30,
      stock: 12,
    },
    {
      id: 9,
      name: "Kit Vela Aromática DIY",
      price: 22.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651298/1%20Medac%20Candle%20Flame/imagenes/ldm8tn5xcv5pcss0jgsv.jpg",
      category: "custom",
      aroma: "custom",
      rating: 4.6,
      reviews: 25,
      stock: 15,
    },
    {
      id: 10,
      name: "Kit Vela Decorativa Avanzado",
      price: 34.99,
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747650626/1%20Medac%20Candle%20Flame/imagenes/ejao61djqq9dzfiwh6jy.jpg",
      category: "custom",
      aroma: "custom",
      rating: 4.8,
      reviews: 18,
      stock: 8,
    },
  ]

  // Tipo para los productos
  type Product = {
    id: number
    name: string
    price: number
    image: string
    category: string
    aroma: string
    rating: number
    reviews: number
    stock: number
  }

  // Filtrar productos cuando cambien los filtros
  useEffect(() => {
    let filtered = [...products]

    // Filtrar por categoría
    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    // Filtrar por rango de precio
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filtrar por aromas
    if (selectedAromas.length > 0) {
      filtered = filtered.filter((product) => selectedAromas.includes(product.aroma))
    }

    // Ordenar productos
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Por defecto, mantener el orden original (destacados)
        break
    }

    setFilteredProducts(filtered)
  }, [activeCategory, priceRange, selectedAromas, sortBy])

  // Manejar cambio de categoría
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  // Manejar cambio de rango de precio
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    setPriceRange([0, value])
  }

  // Manejar cambio de precio mínimo
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= 0 && value <= priceRange[1]) {
      setPriceRange([value, priceRange[1]])
    }
  }

  // Manejar cambio de precio máximo
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= priceRange[0]) {
      setPriceRange([priceRange[0], value])
    }
  }

  // Manejar cambio de aromas
  const handleAromaChange = (aromaId: string) => {
    if (selectedAromas.includes(aromaId)) {
      setSelectedAromas(selectedAromas.filter((id) => id !== aromaId))
    } else {
      setSelectedAromas([...selectedAromas, aromaId])
    }
  }

  // Restablecer filtros
  const resetFilters = () => {
    setActiveCategory("all")
    setPriceRange([0, 50])
    setSelectedAromas([])
    setSortBy("featured")
  }

  return (
    <div className={styles.productsPage}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.pageTitle}>Nuestros Productos</h1>
          <p className={styles.pageSubtitle}>
            Descubre nuestra colección de velas artesanales que transforman momentos cotidianos en experiencias
            sensoriales únicas.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.productsContainer}>
          {/* Filters */}
          <div className={styles.filtersContainer}>
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Categorías</h3>
              <ul className={styles.categoryList}>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      className={`${styles.categoryButton} ${category.id === activeCategory ? styles.active : ""}`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Precio</h3>
              <div className={styles.priceRange}>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceRange[1]}
                  onChange={handlePriceRangeChange}
                  className={styles.priceSlider}
                />
                <div className={styles.priceInputs}>
                  <div className={styles.priceInput}>
                    <label htmlFor="min-price">Min</label>
                    <input
                      type="number"
                      id="min-price"
                      min="0"
                      max="50"
                      value={priceRange[0]}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                  <div className={styles.priceInput}>
                    <label htmlFor="max-price">Max</label>
                    <input
                      type="number"
                      id="max-price"
                      min="0"
                      max="50"
                      value={priceRange[1]}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Aromas</h3>
              <div className={styles.checkboxList}>
                {aromas.map((aroma) => (
                  <label key={aroma.id} className={styles.checkboxItem}>
                    <input
                      type="checkbox"
                      checked={selectedAromas.includes(aroma.id)}
                      onChange={() => handleAromaChange(aroma.id)}
                    />
                    <span>{aroma.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className={styles.resetButton} onClick={resetFilters}>
              Restablecer Filtros
            </button>
          </div>

          {/* Products Grid */}
          <div className={styles.productsGrid}>
            <div className={styles.productsHeader}>
              <div className={styles.resultsCount}>Mostrando {filteredProducts.length} productos</div>
              <div className={styles.sortContainer}>
                <label htmlFor="sort-by">Ordenar por:</label>
                <select
                  id="sort-by"
                  className={styles.sortSelect}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="name-asc">Nombre: A-Z</option>
                  <option value="name-desc">Nombre: Z-A</option>
                  <option value="rating">Mejor Valorados</option>
                </select>
              </div>
            </div>

            <div className={styles.productsWrapper}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className={styles.noResults}>
                <p>No se encontraron productos que coincidan con los filtros seleccionados.</p>
                <button className={styles.resetButton} onClick={resetFilters}>
                  Restablecer Filtros
                </button>
              </div>
            )}

            <div className={styles.pagination}>
              <button className={styles.paginationButton} disabled>
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
              <div className={styles.paginationNumbers}>
                <button className={`${styles.paginationNumber} ${styles.active}`}>1</button>
                <button className={styles.paginationNumber}>2</button>
                <button className={styles.paginationNumber}>3</button>
              </div>
              <button className={styles.paginationButton}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
