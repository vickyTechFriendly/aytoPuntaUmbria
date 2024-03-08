"use client"
import styles from '../cultura.module.css';
import Link from "next/link";
import { useEffect} from 'react';
import { usePageContext } from '../../PageContext.js';

export default function Biblioteca() {
  const { setTitle, setDescription, setKeywords } = usePageContext(); 

    useEffect(() => {
        setTitle('Biblioteca Municipal - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, sala de lectura, hemeroteca');
    }, []);

    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>Cultura</h1>
        </section>

        <div className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/cultura">Cultura</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Biblioteca</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">menu_book</i>Biblioteca Municipal</h2>

                <div className={styles.flex}>
                  <div className={styles.datosContacto}>
                    <p><i className="material-icons">location_on</i>Plaza de las Artes s/n, Punta Umbría 21100</p>
                    <p><i className="material-icons">mail</i><Link href="mailto:cultura@puntaumbria.es" className={styles.underline}>cultura@puntaumbria.es</Link></p>
                    <p style={{ marginTop: '15px' }}>De Lunes a Viernes:<br></br>Mañanas de 9.00h a 14.30h. y de 16.30h a 21.00h.<br></br>Tardes de 17:00h. a 21:00h.</p>
                  </div>

                  <div className={styles.descripcion}>
                    <p>La biblioteca de Punta Umbría cuenta con unas magníficas instalaciones, siendo uno de los espacios más bellos y visitados del nuevo centro cultural. Está situada en la Plaza de las Artes, a espaldas del Teatro del Mar.</p><p>Las cinco nuevas leyes de la biblioteconomía de Michael Gorman:</p>
                    <ul>
                    <li>Las bibliotecas sirven a la humanidad.</li>
                    <li>Respetar todas las formas en que se transmite el pensamiento.</li>
                    <li>Usar la tecnología inteligentemente para mejorar el servicio.</li>
                    <li>Proteger el acceso gratuito al conocimiento.</li>
                    <li>Honrar el pasado y crear el futuro.</li>
                    </ul>
                  </div>
                </div>

                <h3 style={{ marginTop: '50px' }}>Sala de Lectura y Préstamo</h3>
                <div style={{ marginTop: '20px' }}>
                  <div className={styles.datosContacto}>
                    <p style={{ marginTop: '15px' }}>De Lunes a Viernes:<br></br>Mañanas de 9.30h a 14.00h. y de 16.30h a 21.00h.<br></br>Tardes de 17:00h. a 21:00h.</p>
                  </div>

                  <div className={styles.descripcionSala}>
                    <p>La biblioteca dispone de un total de 130 plazas para lectura, así como hemeroteca, sala infantil, servicio de internet, sala de juntas y  depósito de libro. En la actualidad dispone de un total aproximado de 18.000 volúmenes a disposición de los lectores.</p>
                    <h4>Sala de Lectura/Consulta</h4>
                    <p>La Sala de Lectura y Consulta de la Biblioteca Municipal de Punta Umbría es la que alberga la mayoría de los Títulos del catálogo. La ordenación de los títulos se corresponde con  la <i>Clasificación Decimal Universal</i> o CDU basada en una división de las materias conforme a unos dígitos numéricos que se indetifican con las diferentes áreas de conocimiento. Para facilitar su acceso cada libro está marcado con un <i>tejuelo</i>, que contiene información sobre el número del área del conocimiento al que se corresponde, los tres primeras letras del apellido del autor y las tres primeras letras del título. Para facilitar aun más el acceso de los usuarios, una parte importante de los títulos de la biblioteca están identificados en el Tejuelo con una anotación que hace referencia al género al que pertencece. Así, la Narrativa está marcada con una "N", Poesía con una "P", Teatro  con una "T" y Ensayo con una "E". Mención especial también para los títulos que agrupan contenidos relacionados con la temática de la Provincia de Huelva que vienen acompañado de una "H" seguida del género al que pertenece o bien del dígito de la CDU que le corresponda.</p>
                    <h4>Hemeroteca</h4>
                    <p>La Biblioteca de Punta Umbría pone a disposición de sus usuarios diversos títulos de prensa de ámbito nacional, provincial y local, además de conservar los número de días anteriores.</p>
                    <h4>Préstamo</h4>
                    <p>La Biblioteca pone a disposición de sus usuarios diversos tipos de materiales, tales como películas y monografías de distinto género. El acceso a este material es completamente gratuito pero es imprescindible poseer el carnet de lector de la biblioteca de Punta Umbría o bien de alguna de las que forman la Red de Bibliotecas Públicas de Andalucía. </p>
                    <ul><em>Obtener Carnet de Usuario</em>
                      <li>La biblioteca expedirá la tarjeta de usuario.</li>
                      <li>Para obtenerla el usuario deberá cumplimentar el formulario de inscripción a la que acompañará una copia del DNI. Para los menores de 14 años, la solicitud deberá ser cumplimentada por el padre, madre o persona que ejerza su guardia y custodia.</li>
                      <li>El carnet de usuario es personal e intrasferible, no pudiendose realizar ningún préstamo a otro que no sea al titular del mismo.</li>
                    </ul>
                    <ul style={{ marginTop: '20px' }}><em>Condiciones de Préstamo</em>
                      <li>Para poder acceder a cualquier préstamo es necesario presentar el carnet de Lector de la Biblioteca.</li>
                      <li>La Duración del préstamo es de 15 días, pudiendo ser renovado el préstamo por espacio de 10 días más, en el caso de las monografías ya que los libros de referencia y consulta no son prestables.</li>
                      <li>Las películas y DVD se préstaran por un espacio de 5 días.</li>
                      <li>El número máximo de materiales prestables es de tres ejemplares ya sea librario o no.</li>
                      <li>Entregar el material más allá de la fecha señalada implica la aplicación de una suspensión temporal del préstamo.</li>
                    </ul>
                    <h4>Acceso Público a Internet</h4>
                    <p>Para facilitar a los ciudadanos el acceso a las telecomunicaciones, la biblioteca cuenta con 3 puestos de acceso público a Internet, sitiados en la planta superior. Cada usuario podrá utilizar este servicio no siendo necesario realizar reservas disponiendo de una sesión de 30 minutos. Además, la biblioteca cuenta con red WiFi gratuita y accesible a todos los usuarios.</p>
                    <h4>Servicio Préstamo Interbiblioteacario</h4>
                    <p>Este servicio permite al usuario acceder a documentos que no pertenecen a nuestro fondo, pero que se encuentran en otras bibliotecas. La biblioteca como tal, solicitará el préstamo, y cederá al usuario en cuestión el material que ha solicitado.</p>
                    <p>El periodo de préstamo será de quince días, renovable por otros diez.</p>
                    <p>Desde aquí puedes acceder al <Link href="https://www.juntadeandalucia.es/cultura/noencontrado.html" target='_blank' className={styles.underline}>Catálogo en línea</Link>  de la Red de Biblioteca Públicas de Andalucía donde podras consultar el catálogo de la Biblioteca Punta Umbría.</p>
                  </div>
                </div>
            </section>
        </div>
      </main>
    )
}