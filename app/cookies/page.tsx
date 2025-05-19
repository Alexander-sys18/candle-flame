import Link from "next/link"
import styles from "./legal.module.css"

export default function CookiesPage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.legalContent}>
          <h1 className={styles.pageTitle}>Política de Cookies</h1>
          <p className={styles.lastUpdated}>Última actualización: 15 de mayo de 2023</p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil)
              cuando visita un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web funcionen
              de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. ¿Cómo utilizamos las cookies?</h2>
            <p>
              Utilizamos cookies por varias razones que se detallan a continuación. Desafortunadamente, en la mayoría de
              los casos, no existen opciones estándar de la industria para deshabilitar las cookies sin deshabilitar
              completamente la funcionalidad y características que agregan a este sitio. Se recomienda que deje todas
              las cookies si no está seguro de si las necesita o no, en caso de que se utilicen para proporcionar un
              servicio que usted utiliza.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Tipos de cookies que utilizamos</h2>
            <h3 className={styles.subsectionTitle}>3.1 Cookies necesarias</h3>
            <p>
              Estas cookies son esenciales para que pueda utilizar las funciones disponibles en nuestro sitio web. Sin
              estas cookies, no podemos proporcionar ciertas funcionalidades, como el inicio de sesión en su cuenta o el
              carrito de compras.
            </p>

            <h3 className={styles.subsectionTitle}>3.2 Cookies de preferencias</h3>
            <p>
              Estas cookies permiten que nuestro sitio web recuerde las elecciones que ha realizado (como su nombre de
              usuario, idioma o la región en la que se encuentra) y proporcione características mejoradas y más
              personales.
            </p>

            <h3 className={styles.subsectionTitle}>3.3 Cookies analíticas</h3>
            <p>
              Estas cookies nos permiten contar las visitas y fuentes de tráfico para que podamos medir y mejorar el
              rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo se
              mueven los visitantes por el sitio.
            </p>

            <h3 className={styles.subsectionTitle}>3.4 Cookies de marketing</h3>
            <p>
              Estas cookies se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar
              anuncios que sean relevantes y atractivos para el usuario individual, y por lo tanto más valiosos para los
              editores y anunciantes terceros.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Control de cookies</h2>
            <p>
              Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su
              dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si
              hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio
              y algunas funciones y servicios pueden no funcionar.
            </p>
            <p>
              Puede ajustar la configuración de cookies en nuestro sitio web utilizando nuestro banner de cookies que
              aparece cuando visita nuestro sitio por primera vez.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Más información</h2>
            <p>
              Esperamos que esto haya aclarado las cosas para usted. Como se mencionó anteriormente, si hay algo que no
              está seguro de si necesita o no, generalmente es más seguro dejar las cookies habilitadas en caso de que
              interactúe con una de las funciones que utiliza en nuestro sitio.
            </p>
            <p>
              Si todavía está buscando más información, puede contactarnos a través de uno de nuestros métodos de
              contacto preferidos:
            </p>
            <ul className={styles.contactList}>
              <li>Email: info@candleflame.com</li>
              <li>Teléfono: +34 123 456 789</li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
