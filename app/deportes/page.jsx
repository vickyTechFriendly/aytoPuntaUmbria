"use client"
import styles from './deportes.module.css'
import Link from "next/link"
import { useState, useEffect, useRef } from 'react';
import { usePageContext } from './../PageContext.js';

export default function Deportes() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Deportes - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, deportes, instalaciones deportivas, circuitos de entrenamientos');
    }, []);

  const [noticias, setNoticias] = useState([]);
  const noticiasDeporte = noticias.filter(noticia => noticia.categoria === 'Deporte');
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
        setNoticias(noticiasOrdenadas);
        setIsLoading(false);
  
        const categorias = new Set();
        data.data.forEach(noticia => {
          if (noticia.categoria) {
            categorias.add(noticia.categoria);
          }
        });
        setCategoriasUnicas(Array.from(categorias));
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);

  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft; 
      const slideWidth = sliderRef.current.offsetWidth; 
      
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  function formatearFecha(fechaString) {
    const opciones = {month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }


    return (
      <main>
        <section className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>Deportes</h1>
        </section>

        <div className={styles.main}>
            <section className={styles.opciones}>
                <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_varios-deportes/ordenanza_deportes_20171630668764218.pdf" target='_blank' className={styles.opcion} id="contenido"><i className="material-icons" aria-hidden="true">euro</i> Precios del servicio de deportes</Link>
                <Link href="/deportes/alquilerinstalaciones" className={styles.opcion}><i className="material-icons" aria-hidden="true">language</i>Alquiler online de instalaciones</Link>
                <Link href="/deportes/centrodeportivo" className={styles.opcion}><i className="material-icons" aria-hidden="true">fitness_center</i>Centro deportivo Punta Umbría (Piscina Cubierta)</Link>
                <Link href="/deportes/circuitos" className={styles.opcion}><i className="material-icons" aria-hidden="true">directions_run</i>Circuitos de entrenamiento</Link>
                <Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/galeria_inscripcion-voluntario-deportivo/folleto_voluntarios_deportivos1677151080723.pdf" target='_blank' className={styles.opcion}><i className="material-icons" aria-hidden="true">volunteer_activism</i>Voluntarios deportivos</Link>
                <Link href="/deportes/escuelas" className={styles.opcion}><i className="material-icons" aria-hidden="true">sports</i>Escuelas deportivas municipales</Link>
                <Link href="/deportes/informacion" className={styles.opcion}><i className="material-icons" aria-hidden="true">info</i>Información y atención al usuario</Link>
                <Link href="/deportes/abonos" className={styles.opcion}><i className="material-icons" aria-hidden="true">confirmation_number</i>Abonos y alquileres</Link>
            </section>

            <section className={styles.opciones}>
                <h2>Últimas noticias relacionadas</h2>

                <div className={styles.sliderContainer} ref={sliderRef}>
                  {noticiasDeporte.slice(0, 3).map((noticia, index) => (
                    <Link key={index} href={`/noticias/${noticia.slug}`} className={styles.noticia}>
                      <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt=""></img>
                      <div className={styles.informacion}>
                        <div className={styles.datos} aria-hidden="true">
                          <p className={styles.categoria}>{noticia.categoria}</p>
                          <span>&bull;</span>
                          <p  className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
                        </div>
                        <h3>{noticia.titulo.length > 53 ? noticia.titulo.slice(0, 50) + '...' : noticia.titulo}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
            </section>
        </div>    
      </main>
    )
}