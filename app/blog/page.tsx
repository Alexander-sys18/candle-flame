import Image from "next/image"
import Link from "next/link"
// Cambiar la línea de importación de estilos
import styles from "./blog.module.css"

export default function BlogPage() {
  // Datos de ejemplo para los artículos del blog
  const blogPosts = [
    {
      id: 1,
      title: "Cómo elegir la vela perfecta para cada ocasión",
      excerpt:
        "Descubre cómo seleccionar la vela ideal según el ambiente que quieras crear, desde cenas románticas hasta sesiones de meditación.",
      date: "15 de abril, 2023",
      author: "Gerard Butler",
      category: "Consejos",
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/juxjrkk7b9eys7ix5ooj.webp",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Los beneficios de las velas de cera de soja",
      excerpt:
        "Las velas de cera de soja no solo son más sostenibles, sino que también ofrecen numerosos beneficios para la salud y el medio ambiente.",
      date: "28 de marzo, 2023",
      author: "Brad Pitt",
      category: "Sostenibilidad",
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648018/1%20Medac%20Candle%20Flame/imagenes/g3tu2tzlyixkhfxhhp8b.webp",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "Aromaterapia: Cómo los aromas pueden mejorar tu bienestar",
      excerpt:
        "Explora cómo diferentes fragancias pueden influir en tu estado de ánimo, nivel de estrés y bienestar general.",
      date: "10 de marzo, 2023",
      author: "Alexander Yanez",
      category: "Bienestar",
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651338/1%20Medac%20Candle%20Flame/imagenes/wzxgl5jdq0ghuwguvpic.avif",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "DIY: Crea tus propias velas decorativas en casa",
      excerpt:
        "Aprende paso a paso cómo crear velas decorativas únicas utilizando materiales simples que puedes encontrar en casa.",
      date: "22 de febrero, 2023",
      author: "Gerard Butler",
      category: "DIY",
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651299/1%20Medac%20Candle%20Flame/imagenes/pnn6aahpjqlit5b7gozc.jpg",
      readTime: "8 min",
    },
    {
      id: 5,
      title: "Historia de las velas: De la necesidad al lujo",
      excerpt:
        "Un recorrido por la fascinante historia de las velas, desde su origen como fuente de luz hasta su papel actual en la decoración y el bienestar.",
      date: "5 de febrero, 2023",
      author: "Brad Pitt",
      category: "Historia",
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652015/1%20Medac%20Candle%20Flame/imagenes/xqhmuygavuf9lrf9dhzn.webp",
      readTime: "10 min",
    },
    {
      id: 6,
      title: "Cómo cuidar tus velas para maximizar su duración",
      excerpt:
        "Consejos prácticos para mantener tus velas en perfecto estado y prolongar su vida útil, desde el primer encendido hasta el último.",
      date: "18 de enero, 2023",
      author: "Alexander Yanez",
      category: "Consejos",
      image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747650626/1%20Medac%20Candle%20Flame/imagenes/ejao61djqq9dzfiwh6jy.jpg",
      readTime: "4 min",
    },
  ]

  // Categorías para el filtro
  const categories = [
    { id: "all", name: "Todas" },
    { id: "consejos", name: "Consejos" },
    { id: "sostenibilidad", name: "Sostenibilidad" },
    { id: "bienestar", name: "Bienestar" },
    { id: "diy", name: "DIY" },
    { id: "historia", name: "Historia" },
  ]

  return (
    <div className={styles.blogPage}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.pageTitle}>Nuestro Blog</h1>
          <p className={styles.pageSubtitle}>
            Descubre consejos, tutoriales y novedades sobre el mundo de las velas artesanales.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.blogContainer}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Categories */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Categorías</h3>
              <ul className={styles.categoryList}>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button className={`${styles.categoryButton} ${category.id === "all" ? styles.active : ""}`}>
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Artículos Recientes</h3>
              <ul className={styles.recentPostsList}>
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id} className={styles.recentPost}>
                    <Link href={`/blog/${post.id}`} className={styles.recentPostLink}>
                      <div className={styles.recentPostImage}>
                        <Image src={post.image} alt={post.title} width={80} height={80} />
                      </div>
                      <div className={styles.recentPostInfo}>
                        <h4 className={styles.recentPostTitle}>{post.title}</h4>
                        <p className={styles.recentPostDate}>{post.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe */}
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Suscríbete</h3>
              <p className={styles.subscribeText}>
                Recibe nuestros artículos más recientes directamente en tu bandeja de entrada.
              </p>
              <form className={styles.subscribeForm}>
                <input type="email" placeholder="Tu correo electrónico" className={styles.subscribeInput} required />
                <button type="submit" className={styles.subscribeButton}>
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          {/* Blog Posts */}
          <div className={styles.blogPosts}>
            <div className={styles.blogHeader}>
              <h2 className={styles.blogSectionTitle}>Artículos Recientes</h2>
              <div className={styles.blogFilters}>
                <label htmlFor="sort-by">Ordenar por:</label>
                <select id="sort-by" className={styles.sortSelect}>
                  <option value="recent">Más Recientes</option>
                  <option value="oldest">Más Antiguos</option>
                  <option value="popular">Más Populares</option>
                </select>
              </div>
            </div>

            <div className={styles.postsGrid}>
              {blogPosts.map((post) => (
                <article key={post.id} className={styles.blogCard}>
                  <Link href={`/blog/${post.id}`} className={styles.blogCardLink}>
                    <div className={styles.blogCardImage}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className={styles.blogImg}
                      />
                      <div className={styles.blogCategory}>{post.category}</div>
                    </div>
                    <div className={styles.blogCardContent}>
                      <div className={styles.blogMeta}>
                        <span className={styles.blogDate}>{post.date}</span>
                        <span className={styles.blogReadTime}>{post.readTime} de lectura</span>
                      </div>
                      <h3 className={styles.blogTitle}>{post.title}</h3>
                      <p className={styles.blogExcerpt}>{post.excerpt}</p>
                      <div className={styles.blogAuthor}>
                        <div className={styles.authorAvatar}>
                          <Image
                            src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747653613/1%20Medac%20Candle%20Flame/imagenes/ae2a0uegfproizgosrr3.avif"
                            alt={post.author}
                            width={40}
                            height={40}
                            className={styles.avatarImg}
                          />
                        </div>
                        <span className={styles.authorName}>{post.author}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

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
