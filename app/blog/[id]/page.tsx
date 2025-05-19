"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
// Cambiar la línea de importación de estilos
import styles from "./blog-post.module.css"

export default function BlogPost({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "María García",
      avatar: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747653613/1%20Medac%20Candle%20Flame/imagenes/ae2a0uegfproizgosrr3.avif",
      date: "10 de abril, 2025",
      content: "¡Excelente artículo! Me encantaron los consejos sobre cómo elegir la vela perfecta para cada ocasión.",
    },
    {
      id: 2,
      author: "Carlos Rodríguez",
      avatar: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747653613/1%20Medac%20Candle%20Flame/imagenes/ae2a0uegfproizgosrr3.avif",
      date: "12 de abril, 2025",
      content:
        "Muy interesante la información sobre los beneficios de las velas de cera de soja. Definitivamente voy a probarlas.",
    },
  ])

  // Datos de ejemplo para el artículo del blog
  const blogPost = {
    id: Number(params.id),
    title: "Cómo elegir la vela perfecta para cada ocasión",
    content: [
      {
        type: "paragraph",
        text: "Las velas son mucho más que simples fuentes de luz. Son elementos que pueden transformar por completo el ambiente de un espacio, evocar recuerdos, estimular los sentidos y crear experiencias únicas. Sin embargo, con tantas opciones disponibles en el mercado, elegir la vela perfecta para cada ocasión puede resultar abrumador.",
      },
      {
        type: "paragraph",
        text: "En este artículo, te guiaremos a través de los diferentes tipos de velas, aromas y características para ayudarte a seleccionar la opción ideal según el ambiente que desees crear, desde cenas románticas hasta sesiones de meditación o simplemente para disfrutar de un momento de relajación en casa.",
      },
      {
        type: "heading",
        text: "Considera el propósito",
      },
      {
        type: "paragraph",
        text: "Antes de elegir una vela, piensa en el propósito principal. ¿Quieres crear un ambiente romántico? ¿Buscas relajarte después de un largo día? ¿Necesitas energizarte para una sesión de trabajo? El propósito determinará el tipo de vela y aroma que deberías elegir.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652808/1%20Medac%20Candle%20Flame/imagenes/ml71lxcflq4ajgauq9jf.png",
        alt: "Diferentes tipos de velas para distintas ocasiones",
        caption: "Diferentes tipos de velas para distintas ocasiones",
      },
      {
        type: "heading",
        text: "Para momentos románticos",
      },
      {
        type: "paragraph",
        text: "Las cenas románticas o momentos especiales en pareja se benefician de velas con aromas suaves y sensuales. Los aromas como vainilla, sándalo, jazmín o rosa crean un ambiente íntimo y acogedor. Opta por velas de llama tradicional en lugar de velas con llama de colores, ya que la luz cálida y suave favorece la intimidad.",
      },
      {
        type: "paragraph",
        text: "Las velas flotantes en recipientes transparentes con agua y pétalos también son una excelente opción para ocasiones románticas, creando un efecto visual impresionante.",
      },
      {
        type: "heading",
        text: "Para relajación y meditación",
      },
      {
        type: "paragraph",
        text: "Si buscas crear un ambiente propicio para la relajación o la meditación, las velas con aromas como lavanda, manzanilla, eucalipto o salvia son ideales. Estos aromas tienen propiedades calmantes que ayudan a reducir el estrés y la ansiedad.",
      },
      {
        type: "paragraph",
        text: "Las velas de cera de soja son especialmente recomendables para estos momentos, ya que queman de manera más limpia y lenta, permitiéndote disfrutar de una sesión completa de meditación sin distracciones.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652370/1%20Medac%20Candle%20Flame/imagenes/sha7xm5ises5wa5ibfsa.png",
        alt: "Velas para meditación y relajación",
        caption: "Velas para meditación y relajación",
      },
      {
        type: "heading",
        text: "Para energizar y estimular",
      },
      {
        type: "paragraph",
        text: "Cuando necesitas un impulso de energía o estimular tu concentración, busca velas con aromas cítricos como limón, naranja, pomelo o bergamota. También son efectivos aromas como menta, romero o canela, que tienen propiedades estimulantes.",
      },
      {
        type: "paragraph",
        text: "Estas velas son perfectas para espacios de trabajo o estudio, ayudándote a mantener la mente alerta y enfocada.",
      },
      {
        type: "heading",
        text: "Para purificar el ambiente",
      },
      {
        type: "paragraph",
        text: "Si tu objetivo es purificar el ambiente o eliminar olores no deseados, las velas con aromas como limón, eucalipto, árbol de té o salvia blanca son excelentes opciones. Estos aromas tienen propiedades purificantes y refrescantes.",
      },
      {
        type: "paragraph",
        text: "Las velas de cera de abeja también son una buena elección para purificar el aire, ya que emiten iones negativos que ayudan a neutralizar contaminantes.",
      },
      {
        type: "heading",
        text: "Para ocasiones especiales y celebraciones",
      },
      {
        type: "paragraph",
        text: "Las celebraciones y ocasiones especiales merecen velas que creen un ambiente festivo. Las velas con aromas como canela, clavo, vainilla o frutas del bosque evocan sensaciones de calidez y celebración.",
      },
      {
        type: "paragraph",
        text: "Para estas ocasiones, también puedes optar por velas decorativas o velas con llama de colores que añadan un elemento visual impactante a la decoración.",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651334/1%20Medac%20Candle%20Flame/imagenes/dz6ogn1o3sbhcnu3a1dq.jpg",
        alt: "Velas decorativas para celebraciones",
        caption: "Velas decorativas para celebraciones",
      },
      {
        type: "heading",
        text: "Considera el espacio",
      },
      {
        type: "paragraph",
        text: "El tamaño del espacio donde utilizarás la vela también es importante. Para habitaciones grandes, necesitarás velas con mayor intensidad de aroma o varias velas distribuidas estratégicamente. Para espacios pequeños, una sola vela con un aroma suave puede ser suficiente.",
      },
      {
        type: "heading",
        text: "La importancia de la calidad",
      },
      {
        type: "paragraph",
        text: "Independientemente de la ocasión, siempre es recomendable optar por velas de calidad. Las velas artesanales elaboradas con ingredientes naturales como cera de soja, cera de abeja o cera de coco, y aceites esenciales en lugar de fragancias sintéticas, no solo ofrecen una experiencia sensorial superior, sino que también son más saludables y respetuosas con el medio ambiente.",
      },
      {
        type: "paragraph",
        text: "Las velas de baja calidad pueden contener parafina (un derivado del petróleo) y fragancias sintéticas que, al quemarse, liberan sustancias potencialmente dañinas para la salud.",
      },
      {
        type: "heading",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text: "Elegir la vela perfecta para cada ocasión implica considerar diversos factores como el propósito, el aroma, el tipo de cera y el tamaño del espacio. Con la información proporcionada en este artículo, esperamos que puedas seleccionar las velas ideales para crear los ambientes que deseas en cada momento de tu vida.",
      },
      {
        type: "paragraph",
        text: "Recuerda que las velas son mucho más que simples objetos decorativos; son herramientas poderosas para transformar espacios, estimular los sentidos y crear experiencias memorables. ¡Experimenta con diferentes opciones y descubre tus combinaciones favoritas!",
      },
    ],
    date: "15 de abril, 2025",
    author: {
      name: "Alexander Yanez",
      role: "Fundador y Director Creativo",
      avatar: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747653613/1%20Medac%20Candle%20Flame/imagenes/ae2a0uegfproizgosrr3.avif",
      bio: "Con más de 10 años de experiencia en la creación de velas artesanales, Alexander es la mente creativa detrás de nuestras exclusivas fragancias y diseños.",
    },
    category: "Consejos",
    tags: ["velas", "aromas", "decoración", "bienestar", "consejos"],
    readTime: "8 min",
    likes: 24,
    shares: 12,
    relatedPosts: [
      {
        id: 2,
        title: "Los beneficios de las velas de cera de soja",
        excerpt:
          "Las velas de cera de soja no solo son más sostenibles, sino que también ofrecen numerosos beneficios para la salud y el medio ambiente.",
        image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747648017/1%20Medac%20Candle%20Flame/imagenes/irml0x8dakxx49kokq1k.webp",
        date: "28 de marzo, 2025",
        author: "Gerar Butler",
      },
      {
        id: 3,
        title: "Aromaterapia: Cómo los aromas pueden mejorar tu bienestar",
        excerpt:
          "Explora cómo diferentes fragancias pueden influir en tu estado de ánimo, nivel de estrés y bienestar general.",
        image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747651298/1%20Medac%20Candle%20Flame/imagenes/ldm8tn5xcv5pcss0jgsv.jpg",
        date: "10 de marzo, 2025",
        author: "Brad Pitt",
      },
      {
        id: 6,
        title: "Cómo cuidar tus velas para maximizar su duración",
        excerpt:
          "Consejos prácticos para mantener tus velas en perfecto estado y prolongar su vida útil, desde el primer encendido hasta el último.",
        image: "https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652370/1%20Medac%20Candle%20Flame/imagenes/sha7xm5ises5wa5ibfsa.png",
        date: "18 de enero, 2025",
        author: "Brad Pitt",
      },
    ],
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (commentText.trim() === "") return

    const newComment = {
      id: comments.length + 1,
      author: "Usuario",
      avatar: "/placeholder.svg?height=50&width=50",
      date: new Date().toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      content: commentText,
    }

    setComments([...comments, newComment])
    setCommentText("")
  }

  return (
    <div className={styles.blogPostPage}>
      <div className="container">
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">Inicio</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/blog">Blog</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>{blogPost.title}</span>
        </div>

        <div className={styles.blogPostContainer}>
          {/* Main Content */}
          <article className={styles.blogPost}>
            <header className={styles.blogHeader}>
              <div className={styles.blogMeta}>
                <span className={styles.blogCategory}>{blogPost.category}</span>
                <span className={styles.blogDate}>{blogPost.date}</span>
                <span className={styles.blogReadTime}>{blogPost.readTime} de lectura</span>
              </div>
              <h1 className={styles.blogTitle}>{blogPost.title}</h1>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                  <Image
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    width={50}
                    height={50}
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.authorDetails}>
                  <div className={styles.authorName}>{blogPost.author.name}</div>
                  <div className={styles.authorRole}>{blogPost.author.role}</div>
                </div>
              </div>
            </header>

            <div className={styles.blogContent}>
              {blogPost.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <p key={index} className={styles.paragraph}>
                      {item.text}
                    </p>
                  )
                } else if (item.type === "heading") {
                  return (
                    <h2 key={index} className={styles.heading}>
                      {item.text}
                    </h2>
                  )
                } else if (item.type === "image") {
                  return (
                    <figure key={index} className={styles.figure}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={400}
                        className={styles.blogImage}
                      />
                      {item.caption && <figcaption className={styles.figcaption}>{item.caption}</figcaption>}
                    </figure>
                  )
                }
                return null
              })}
            </div>

            <div className={styles.blogTags}>
              {blogPost.tags.map((tag, index) => (
                <Link key={index} href={`/blog/tag/${tag}`} className={styles.tag}>
                  #{tag}
                </Link>
              ))}
            </div>

            <div className={styles.blogActions}>
              <button
                className={`${styles.actionButton} ${liked ? styles.liked : ""}`}
                onClick={() => setLiked(!liked)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={liked ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>{liked ? blogPost.likes + 1 : blogPost.likes} Me gusta</span>
              </button>
              <button className={styles.actionButton}>
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
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <span>{blogPost.shares} Compartir</span>
              </button>
            </div>

            <div className={styles.authorBio}>
              <div className={styles.authorBioHeader}>
                <div className={styles.authorBioAvatar}>
                  <Image
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    width={100}
                    height={100}
                    className={styles.authorBioImg}
                  />
                </div>
                <div className={styles.authorBioInfo}>
                  <h3 className={styles.authorBioName}>Escrito por {blogPost.author.name}</h3>
                  <p className={styles.authorBioRole}>{blogPost.author.role}</p>
                </div>
              </div>
              <p className={styles.authorBioText}>{blogPost.author.bio}</p>
            </div>

            <div className={styles.commentsSection}>
              <h3 className={styles.commentsTitle}>Comentarios ({comments.length})</h3>

              <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
                <div className={styles.commentFormHeader}>
                  <div className={styles.commentFormAvatar}>
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="Usuario"
                      width={50}
                      height={50}
                      className={styles.commentFormImg}
                    />
                  </div>
                  <textarea
                    className={styles.commentFormInput}
                    placeholder="Escribe un comentario..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className={styles.commentFormActions}>
                  <button type="submit" className={styles.commentFormButton}>
                    Publicar Comentario
                  </button>
                </div>
              </form>

              <div className={styles.commentsList}>
                {comments.map((comment) => (
                  <div key={comment.id} className={styles.commentItem}>
                    <div className={styles.commentAvatar}>
                      <Image
                        src={comment.avatar}
                        alt={comment.author}
                        width={50}
                        height={50}
                        className={styles.commentImg}
                      />
                    </div>
                    <div className={styles.commentContent}>
                      <div className={styles.commentHeader}>
                        <div className={styles.commentAuthor}>{comment.author}</div>
                        <div className={styles.commentDate}>{comment.date}</div>
                      </div>
                      <p className={styles.commentText}>{comment.content}</p>
                      <div className={styles.commentActions}>
                        <button className={styles.commentAction}>Me gusta</button>
                        <button className={styles.commentAction}>Responder</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.blogSidebar}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Artículos Relacionados</h3>
              <div className={styles.relatedPosts}>
                {blogPost.relatedPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className={styles.relatedPost}>
                    <div className={styles.relatedPostImage}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={200}
                        className={styles.relatedImg}
                      />
                    </div>
                    <div className={styles.relatedPostContent}>
                      <h4 className={styles.relatedPostTitle}>{post.title}</h4>
                      <p className={styles.relatedPostExcerpt}>{post.excerpt}</p>
                      <div className={styles.relatedPostMeta}>
                        <span className={styles.relatedPostDate}>{post.date}</span>
                        <span className={styles.relatedPostAuthor}>Por {post.author}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Suscríbete a nuestro Newsletter</h3>
              <p className={styles.sidebarText}>
                Recibe nuestros artículos más recientes y ofertas exclusivas directamente en tu bandeja de entrada.
              </p>
              <form className={styles.subscribeForm}>
                <input type="email" placeholder="Tu correo electrónico" className={styles.subscribeInput} required />
                <button type="submit" className={styles.subscribeButton}>
                  Suscribirse
                </button>
              </form>
            </div>

            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>Síguenos</h3>
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
                <a href="#" className={styles.socialLink} aria-label="Pinterest">
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
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
