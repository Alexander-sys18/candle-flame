import Link from "next/link"
import styles from "../cookies/legal.module.css"

export default function TermsPage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.legalContent}>
          <h1 className={styles.pageTitle}>Términos y Condiciones</h1>
          <p className={styles.lastUpdated}>Última actualización: 15 de mayo de 2023</p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introducción</h2>
            <p>
              Estos términos y condiciones rigen el uso de nuestro sitio web candleflame.com (nuestro "Sitio") y la
              compra de productos a través de nuestro Sitio. Al utilizar nuestro Sitio, usted acepta estos términos y
              condiciones en su totalidad. Si no está de acuerdo con estos términos y condiciones o cualquier parte de
              estos términos y condiciones, no debe utilizar nuestro Sitio.
            </p>
            <p>
              Debe tener al menos 18 años para utilizar nuestro Sitio. Al utilizar nuestro Sitio y al aceptar estos
              términos y condiciones, usted garantiza y declara que tiene al menos 18 años.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Licencia para utilizar el sitio web</h2>
            <p>
              A menos que se indique lo contrario, nosotros o nuestros licenciantes poseemos los derechos de propiedad
              intelectual en el sitio web y el material en el sitio web. Sujeto a la licencia a continuación, todos
              estos derechos de propiedad intelectual están reservados.
            </p>
            <p>
              Puede ver, descargar solo para el almacenamiento en caché de su navegador y imprimir páginas desde el
              sitio web para su propio uso personal, sujeto a las restricciones establecidas a continuación y en otros
              lugares en estos términos y condiciones.
            </p>
            <p>No debe:</p>
            <ul className={styles.bulletList}>
              <li>Republicar material de este sitio web (incluyendo la republicación en otro sitio web);</li>
              <li>Vender, alquilar o sublicenciar material del sitio web;</li>
              <li>Mostrar cualquier material del sitio web en público;</li>
              <li>
                Reproducir, duplicar, copiar o explotar de otra manera el material en nuestro sitio web con fines
                comerciales;
              </li>
              <li>Editar o modificar cualquier material en el sitio web; o</li>
              <li>
                Redistribuir material de nuestro sitio web excepto para contenido específicamente y expresamente puesto
                a disposición para redistribución.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Compras</h2>
            <p>
              Todos los productos mostrados en nuestro Sitio están sujetos a disponibilidad. Nos reservamos el derecho
              de descontinuar cualquier producto en cualquier momento.
            </p>
            <p>
              Los precios de nuestros productos están sujetos a cambios sin previo aviso. Nos reservamos el derecho de
              modificar o descontinuar el Servicio (o cualquier parte o contenido del mismo) sin previo aviso en
              cualquier momento.
            </p>
            <p>
              No seremos responsables ante usted o cualquier tercero por cualquier modificación, cambio de precio,
              suspensión o discontinuación del Servicio.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Precisión de la información de facturación y cuenta</h2>
            <p>
              Nos reservamos el derecho de rechazar cualquier pedido que realice con nosotros. Podemos, a nuestra
              discreción, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido. Estas
              restricciones pueden incluir pedidos realizados por o bajo la misma cuenta de cliente, la misma tarjeta de
              crédito, y/o pedidos que utilizan la misma dirección de facturación y/o envío.
            </p>
            <p>
              Usted acepta proporcionar información de compra y cuenta actual, completa y precisa para todas las compras
              realizadas en nuestra tienda. Usted acepta actualizar prontamente su cuenta y otra información, incluyendo
              su dirección de correo electrónico y números de tarjetas de crédito y fechas de vencimiento, para que
              podamos completar sus transacciones y contactarlo según sea necesario.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Política de devoluciones y reembolsos</h2>
            <p>
              Nuestro objetivo es asegurar su completa satisfacción. Si no está completamente satisfecho con su compra,
              puede devolver el producto dentro de los 14 días posteriores a la recepción para un reembolso completo del
              precio de compra del producto.
            </p>
            <p>
              Para ser elegible para un reembolso, su artículo debe estar sin usar y en la misma condición que lo
              recibió. También debe estar en el embalaje original.
            </p>
            <p>
              Para iniciar un reembolso, por favor contáctenos en info@candleflame.com con su número de pedido y
              detalles sobre el producto que desea devolver.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Limitación de responsabilidad</h2>
            <p>
              En ningún caso seremos responsables por cualquier daño directo, indirecto, punitivo, incidental, especial,
              consecuencial o cualquier daño de cualquier tipo, incluyendo, sin limitación, daños por pérdida de uso,
              datos o beneficios, que surjan de o de alguna manera conectados con el uso o rendimiento de nuestro Sitio,
              con el retraso o la incapacidad de usar nuestro Sitio o servicios relacionados, la provisión o falta de
              provisión de servicios, o por cualquier información, software, productos, servicios y gráficos
              relacionados obtenidos a través de nuestro Sitio, o de otra manera que surjan del uso de nuestro Sitio, ya
              sea basado en contrato, agravio, negligencia, responsabilidad estricta o de otra manera, incluso si hemos
              sido advertidos de la posibilidad de daños.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Ley aplicable</h2>
            <p>
              Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de España, y cualquier
              disputa relacionada con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los
              tribunales de España.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Cambios a los términos y condiciones</h2>
            <p>
              Podemos revisar estos términos y condiciones en cualquier momento y sin previo aviso. Al utilizar este
              sitio web, usted acepta estar vinculado por la versión actual de estos términos y condiciones.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Contacto</h2>
            <p>Si tiene alguna pregunta sobre estos términos y condiciones, contáctenos en:</p>
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
