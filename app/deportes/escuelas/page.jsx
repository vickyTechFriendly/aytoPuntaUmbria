"use client"
import React, { useEffect } from 'react';
import styles from '../deportes.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';

export default function EscuelasDeportivas() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Ecuelas deportivas municipales - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, deporte, centro deportivo');
    }, []);

    const pdfs = [
        { title: 'Hoja de inscripción y normativa', imagePath: '/pdfs/hoja_inscripcion__normas1668782246205-1.jpg', pdfPath: '/pdfs/hoja_inscripcion__normas1668782246205.pdf' },
        { title: 'Listado de escuelas', imagePath: '/pdfs/horarios_edm_2022_20231680100121573-1.jpg', pdfPath: '/pdfs/horarios_edm_2022_20231680100121573.pdf' },
        { title: 'Hoja de solicitud de baja', imagePath: '/pdfs/baja_escuela_municipal_11620649294102.jpg', pdfPath: '/pdfs/baja_escuela_municipal_11620649294102.pdf' },
        { title: 'Autorización para gimnasio menores de 18 años', imagePath: '/pdfs/autorizacion_gimnasio___181657186258874.jpg', pdfPath: '/pdfs/autorizacion_gimnasio___181657186258874.pdf' },
        { title: 'Escuelas deportivas de clubes', imagePath: '/pdfs/horarios_clubes_2022_20231671108832388.jpg', pdfPath: '/pdfs/horarios_clubes_2022_20231671108832388.pdf' }
      ];

    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>Deportes</h1>
        </section>

        <section className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/deportes">Deportes</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Escuelas deportivas municipales</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">sports</i>Escuelas deportivas municipales</h2>

                <p>El Ayuntamiento de Punta Umbría ha abierto el plazo de inscripción de las Escuelas Deportivas Municipales para el curso 2022-2023.</p>
                <p>El Servicio Municipal de Deportes ofrecerá ocho modalidades y colabora en otras siete escuelas de clubes y entidades del municipio.</p>
                <p>Entre los deportes formativos ofertados en Punta Umbría se encuentran atletismo, baloncesto, fútbol, gimnasia rítmica, piragüismo, multideporte, o voleibol. Por su parte, para los adultos se va a poner en marcha un programa de deportes y salud y se podrán matricular en clases de fitness total, tanto en Punta Umbría como en El Portil.</p>
                <p>Además, también se ofrecerán clases de tenis, deportes náuticos, ajedrez, kick boxing, judo, padel y fútbol para menores de 6 años.</p>
                <p>Para obtener más información y ayuda, los interesados pueden acudir al Polideportivo Municipal Antonio Gil Hernández de Punta Umbría, de lunes a viernes, en horario de 8.00 a 14.00 horas, o al Complejo Deportivo 'El Portil', también de lunes a viernes, de 8.30 a 13.30 horas. Además, están disponibles los teléfonos 959 495 159 (Punta Umbría) y 959 528 860 (El Portil).</p>
                <p>Las Escuelas Deportivas Municipales son un centro de actividades físico deportiva que se desarrolla en horario extraescolar, donde se realiza una formación integral a través del deporte a niños y niñas en un periodo comprendido entre los 4 años a los 18 años, con objetivos de ocio saludable o de rendimiento deportivo. Además copa otras edades con el desarrollo de actividades de mantenimiento.</p>
            </section>

            <section className={styles.documentos}>
                <h3>Documentos a descargar:</h3>

                <div className={styles.pdfs}>
                  {pdfs.map((pdf, index) => (
                    <div key={index}>
                      <Link href={pdf.pdfPath} target="_blank">
                          <img src={pdf.imagePath} alt={`Previsualización de ${pdf.title}`}/>
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