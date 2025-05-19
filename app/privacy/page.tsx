import Link from "next/link"
import styles from "../cookies/legal.module.css"

export default function PrivacyPage() {
  return (
    <div className={styles.legalPage}>
      <div className="container">
        <div className={styles.legalContent}>
          <h1 className={styles.pageTitle}>Política de Privacidad</h1>
          <p className={styles.lastUpdated}>Última actualización: 15 de mayo de 2023</p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introducción</h2>
            <p>
              En Velas Artesanales, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta
              política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio
              web (independientemente de dónde lo visite) y le informará sobre sus derechos de privacidad y cómo la ley
              le protege.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Datos que recopilamos sobre usted</h2>
            <p>
              Los datos personales, o información personal, significa cualquier información sobre un individuo a partir
              de la cual esa persona puede ser identificada. No incluye datos donde la identidad ha sido eliminada
              (datos anónimos).
            </p>
            <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted:</p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Datos de identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador
                similar.
              </li>
              <li>
                <strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de
                correo electrónico y números de teléfono.
              </li>
              <li>
                <strong>Datos financieros:</strong> incluye detalles de tarjetas de pago.
              </li>
              <li>
                <strong>Datos de transacción:</strong> incluye detalles sobre pagos hacia y desde usted y otros detalles
                de productos y servicios que ha comprado de nosotros.
              </li>
              <li>
                <strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de
                sesión, tipo y versión de navegador, configuración de zona horaria y ubicación, tipos y versiones de
                complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que
                utiliza para acceder a este sitio web.
              </li>
              <li>
                <strong>Datos de perfil:</strong> incluye su nombre de usuario y contraseña, compras o pedidos
                realizados por usted, sus intereses, preferencias, comentarios y respuestas a encuestas.
              </li>
              <li>
                <strong>Datos de uso:</strong> incluye información sobre cómo utiliza nuestro sitio web, productos y
                servicios.
              </li>
              <li>
                <strong>Datos de marketing y comunicaciones:</strong> incluye sus preferencias para recibir marketing de
                nuestra parte y de nuestros terceros y sus preferencias de comunicación.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Cómo recopilamos sus datos personales</h2>
            <p>Utilizamos diferentes métodos para recopilar datos de y sobre usted, incluyendo a través de:</p>
            <ul className={styles.bulletList}>
              <li>
                <strong>Interacciones directas:</strong> Puede proporcionarnos sus datos de identidad, contacto y
                financieros al completar formularios o al corresponderse con nosotros por correo postal, teléfono,
                correo electrónico o de otra manera.
              </li>
              <li>
                <strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúa con nuestro sitio
                web, podemos recopilar automáticamente datos técnicos sobre su equipo, acciones de navegación y
                patrones. Recopilamos estos datos personales mediante el uso de cookies y otras tecnologías similares.
              </li>
              <li>
                <strong>Terceros o fuentes disponibles públicamente:</strong> Podemos recibir datos personales sobre
                usted de varios terceros y fuentes públicas.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Cómo utilizamos sus datos personales</h2>
            <p>
              Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus
              datos personales en las siguientes circunstancias:
            </p>
            <ul className={styles.bulletList}>
              <li>
                Donde necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.
              </li>
              <li>
                Donde sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos
                fundamentales no anulen esos intereses.
              </li>
              <li>Donde necesitemos cumplir con una obligación legal o regulatoria.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Divulgación de sus datos personales</h2>
            <p>Podemos compartir sus datos personales con las partes establecidas a continuación:</p>
            <ul className={styles.bulletList}>
              <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
              <li>Asesores profesionales que incluyen abogados, banqueros, auditores y aseguradores.</li>
              <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
              <li>
                Terceros a quienes podemos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros
                activos.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Seguridad de datos</h2>
            <p>
              Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan
              accidentalmente, se utilicen o accedan de manera no autorizada, se alteren o divulguen. Además, limitamos
              el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen
              una necesidad comercial de saber. Solo procesarán sus datos personales según nuestras instrucciones y
              están sujetos a un deber de confidencialidad.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Sus derechos legales</h2>
            <p>
              Bajo ciertas circunstancias, tiene derechos bajo las leyes de protección de datos en relación con sus
              datos personales, incluyendo el derecho a:
            </p>
            <ul className={styles.bulletList}>
              <li>Solicitar acceso a sus datos personales.</li>
              <li>Solicitar la corrección de sus datos personales.</li>
              <li>Solicitar la eliminación de sus datos personales.</li>
              <li>Oponerse al procesamiento de sus datos personales.</li>
              <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
              <li>Solicitar la transferencia de sus datos personales.</li>
              <li>Retirar el consentimiento.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos
              en:
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
