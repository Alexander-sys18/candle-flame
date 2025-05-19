import Image from "next/image"
import Link from "next/link"
import styles from "./about.module.css"

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.pageTitle}>Sobre Nosotros</h1>
          <p className={styles.pageSubtitle}>
            Conoce nuestra historia, valores y el proceso artesanal detrás de nuestras velas.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Our Story */}
        <section className={styles.section}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
              <p className={styles.storyText}>
                Velas Artesanales nació en 2015 en un pequeño taller en Castellón, España, fruto de la pasión de su
                fundadora, Elena Martínez, por la artesanía y los aromas naturales.
              </p>
              <p className={styles.storyText}>
                Lo que comenzó como un hobby se convirtió rápidamente en un negocio familiar cuando las velas de Elena
                ganaron popularidad entre amigos y familiares, quienes quedaban encantados con la calidad y los aromas
                únicos de sus creaciones.
              </p>
              <p className={styles.storyText}>
                Hoy, Velas Artesanales se ha convertido en un referente en la elaboración de velas artesanales en
                España, manteniendo siempre el compromiso con la calidad, la sostenibilidad y el trabajo artesanal que
                nos caracteriza desde nuestros inicios.
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image
                src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652015/1%20Medac%20Candle%20Flame/imagenes/xqhmuygavuf9lrf9dhzn.webp"
                alt="Nuestra Historia"
                width={800}
                height={600}
                className={styles.storyImg}
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Calidad</h3>
              <p className={styles.valueDesc}>
                Utilizamos solo los mejores materiales y aceites esenciales para crear velas de la más alta calidad que
                duran más y proporcionan una experiencia sensorial superior.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
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
              <h3 className={styles.valueTitle}>Artesanía Local</h3>
              <p className={styles.valueDesc}>
                Todas nuestras velas son elaboradas a mano en nuestro taller de Castellón, apoyando la economía local y
                manteniendo vivas las tradiciones artesanales.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
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
              <h3 className={styles.valueTitle}>Sostenibilidad</h3>
              <p className={styles.valueDesc}>
                Nos comprometemos con el medio ambiente utilizando cera de soja 100% natural, envases reutilizables y
                prácticas de producción sostenibles.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className={styles.valueTitle}>Comunidad</h3>
              <p className={styles.valueDesc}>
                Creemos en construir una comunidad de amantes de las velas, compartiendo conocimientos y fomentando la
                creatividad a través de talleres y eventos.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nuestro Proceso Artesanal</h2>
          <p className={styles.sectionSubtitle}>
            Cada vela que creamos pasa por un cuidadoso proceso artesanal que garantiza su calidad y singularidad.
          </p>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>Selección de Materiales</h3>
                <p className={styles.processDesc}>
                  Elegimos cuidadosamente la mejor cera de soja, aceites esenciales de alta calidad y mechas de algodón
                  para garantizar una combustión limpia y duradera.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>Mezcla de Fragancias</h3>
                <p className={styles.processDesc}>
                  Nuestros maestros artesanos crean mezclas únicas de fragancias, combinando aceites esenciales para
                  lograr aromas equilibrados y cautivadores.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>Vertido y Moldeado</h3>
                <p className={styles.processDesc}>
                  Vertemos la cera a la temperatura perfecta en recipientes cuidadosamente seleccionados, asegurando una
                  distribución uniforme y un acabado impecable.
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>Curado y Control de Calidad</h3>
                <p className={styles.processDesc}>
                  Cada vela se cura durante el tiempo adecuado y pasa por un riguroso control de calidad antes de ser
                  empaquetada y enviada a su nuevo hogar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
          <p className={styles.sectionSubtitle}>
            Conoce a las personas apasionadas que hacen posible Velas Artesanales.
          </p>

          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}>
                <Image
                  src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652936/1%20Medac%20Candle%20Flame/imagenes/ruy6mnlmi3tvqwsigp9v.jpg"
                  alt="Alexander Yanez - Fundador"
                  width={400}
                  height={400}
                  className={styles.teamMemberImg}
                />
              </div>
              <h3 className={styles.teamMemberName}>Alexander Yanez</h3>
              <div className={styles.teamMemberRole}>Fundador y Director Creativo</div>
              <p className={styles.teamMemberBio}>
                Con más de 10 años de experiencia en la creación de velas artesanales, Alexander es la mente creativa detrás
                de nuestras exclusivas fragancias y diseños.
              </p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}>
                <Image
                  src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652808/1%20Medac%20Candle%20Flame/imagenes/ml71lxcflq4ajgauq9jf.png"
                  alt="Brad Pitt - Maestro Artesano"
                  width={400}
                  height={400}
                  className={styles.teamMemberImg}
                />
              </div>
              <h3 className={styles.teamMemberName}>Brad Pitt</h3>
              <div className={styles.teamMemberRole}>Maestro Artesano</div>
              <p className={styles.teamMemberBio}>
                Brad supervisa todo el proceso de producción, asegurando que cada vela cumpla con nuestros estándares
                de calidad y perfección artesanal.
              </p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}>
                <Image
                  src="https://res.cloudinary.com/dirpdlfbu/image/upload/v1747652370/1%20Medac%20Candle%20Flame/imagenes/sha7xm5ises5wa5ibfsa.png"
                  alt="Gerard Butler - Responsable de Sostenibilidad"
                  width={400}
                  height={400}
                  className={styles.teamMemberImg}
                />
              </div>
              <h3 className={styles.teamMemberName}>Gerard Butler</h3>
              <div className={styles.teamMemberRole}>Responsable de Sostenibilidad</div>
              <p className={styles.teamMemberBio}>
                Gerard lidera nuestras iniciativas de sostenibilidad, asegurando que todos nuestros procesos y materiales
                sean respetuosos con el medio ambiente.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>¿Quieres conocer más sobre nuestro proceso?</h2>
            <p className={styles.ctaDesc}>
              Visita nuestro taller en Castellón y descubre cómo creamos nuestras velas artesanales. También ofrecemos
              talleres donde podrás crear tu propia vela personalizada.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">
                Reservar Visita
              </Link>
              <Link href="/workshops" className="btn btn-outline">
                Talleres
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
