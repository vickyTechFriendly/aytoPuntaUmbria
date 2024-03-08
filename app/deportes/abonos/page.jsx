"use client"
import React, { useEffect } from 'react';
import styles from '../deportes.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';


export default function Abonos() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Abonos y alquileres - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, deporte');
    }, []);

  const pdfs = [
    { title: 'Hoja de inscripción y normativa', imagePath: '/pdfs/hoja_inscripcion__normas1668782246205-1.jpg', pdfPath: '/pdfs/hoja_inscripcion__normas1668782246205.pdf' }
  ];

    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>Deportes</h1>
        </section>

        <section className={styles.main}>
            <div className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/deportes">Deportes</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Abonos y alquileres</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">confirmation_number</i>Abonos y alquileres</h2>

                <p>Los abonados al Servicio Municipal de Deportes tienen acceso gratuíto a las instalaciones deportivas y descuento del 50 % en todas las tarifas de alquileres de instalaciones deportivas y escuelas deportivas.</p>
                <ul style={{ marginTop: '25px' }}><strong>Tipos de abonos y cuotas:</strong>
                    <li style={{ marginTop: '12px' }}>Juvenil (hasta 18 años): 15 € anual ó 5 € trimestral.</li>
                    <li>Adulto (a partir de 19 años): 30 € anual ó 10 € trimestral.</li>
                    <li>Clases para los mas peques.</li>
                    <li>Familiar (matrimonio e hijos hasta 18 años):  50 € anual ó 17 € trimestral.</li>
                </ul>
                <p style={{ marginTop: '45px' }}><strong>Tarifas alquiler instalaciones deportivas:</strong></p>

                <div className={styles.tabla}>
                <table>
                  <thead>
                    <tr>
                      <th>Instalación</th>
                      <th>Iluminación / Tipo</th>
                      <th>Tarifa Abonados</th>
                      <th>Tarifa No Abonados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pista de pádel</td>
                      <td>Sin focos<br></br>Con focos</td>
                      <td>4,00 €/hora<br></br>6,00 €/hora</td>
                      <td>8,00 €/hora<br></br>12,00 €/hora</td>
                    </tr>
                    <tr>
                      <td>Pista de tenis</td>
                      <td>Sin focos<br></br>Con focos</td>
                      <td>3,00 €/hora<br></br>6,00 €/hora</td>
                      <td>6,00 €/hora<br></br>12,00 €/hora</td>
                    </tr>

          
                    <tr>
                      <td>Campo césped artificial fútbol 11</td>
                      <td>Sin focos<br></br>Con focos</td>
                      <td>24,75 €/hora<br></br>38,50 €/hora</td>
                      <td>49,50 €/hora<br></br>77,00 €/hora</td>
                    </tr>
                    <tr>
                      <td>Campo césped artificial fútbol 7</td>
                      <td>Sin focos<br></br>Con focos</td>
                      <td>16,50 €/hora<br></br>24,75 €/hora</td>
                      <td>33,00 €/hora<br></br>49,50 €/hora</td>
                    </tr>

          
                    <tr>
                      <td>Pistas polideportivas</td>
                      <td>Sin focos<br></br>Con focos</td>
                      <td>3,00 €/hora<br></br>6,00 €/hora</td>
                      <td>6,00 €/hora<br></br>12,00 €/hora</td>
                    </tr>
                    <tr>
                      <td>Pista completa Pabellón Cubierto</td>
                      <td>Con focos</td>
                      <td>15,00 €/hora</td>
                      <td>30,00 €/hora</td>
                    </tr>
                    <tr>
                      <td>1/3 pista Pabellón Cubierto</td>
                      <td>Con focos</td>
                      <td>5,00 €/hora</td>
                      <td>10,00 €/hora</td>
                    </tr>
                    <tr>
                      <td>Sala de usos múltiples</td>
                      <td>Por hora</td>
                      <td>3,00 €/hora</td>
                      <td>6,00 €/hora</td>
                    </tr>
                    <tr>
                      <td>Sauna</td>
                      <td>Sesión</td>
                      <td>2,00 €/sesión</td>
                      <td>4,00 €/sesión</td>
                    </tr>
                    <tr>
                      <td>Gimnasio de Musculación, Fitness-cardiovascular: Polideportivo Municipal "Antonio Gil Hdez" y Complejo Deportivo "El Portil"</td>
                      <td>5 días semanales<br></br>1 sesión</td>
                      <td>19,80 €/mes<br></br>2 €</td>
                      <td>39,60 €/mes<br></br>4 €</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                
                <p style={{ marginTop: '45px' }}><strong>Jubilados, pensionistas, discapacitados y familia numerosa:</strong></p>
                <p>Para estos colectivos las tarifas señaladas en los apartados anteriores, se establecen en el 50 % de los importes correspondientes (Excepto en aquellos casos en que la tarifa se encuentre ya expresamente establecida para los mismos). Debiendo presentar documentación acreditativa actualizada de dicha condición.</p>
            </section>

            <div className={styles.boton}>
                <Link href="/deportes/informacion">Más información</Link>
            </div>

            <section className={styles.documentos}>
                <h3>Documentos a descargar:</h3>

                <div className={`${styles.pdfs} ${styles.pdf1}`}>
                  {pdfs.map((pdf, index) => (
                    <div key={index}>
                      <Link href={pdf.pdfPath} target="_blank">
                        <img src={pdf.imagePath} alt={`Previsualización de ${pdf.title}`} />
                        <h4>{pdf.title}</h4>
                      </Link>
                    </div>
                  ))}
                </div>
            </section>
        </section>
      </main>
    )
}