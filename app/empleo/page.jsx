"use client"
import styles from './empleo.module.css'
import Link from "next/link"
import { useState, useEffect, useRef } from 'react';
import { usePageContext } from './../PageContext.js';

export default function Empleo() {
  const { setTitle, setDescription, setKeywords } = usePageContext(); 

    useEffect(() => {
        setTitle('Empleo y Desarrollo Económico - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, empleo, desarrollo económico, CEFIT, Guadalinfo');
    }, []);

  const [noticias, setNoticias] = useState([]);
  const noticiasDeporte = noticias.filter(noticia => noticia.categoria === 'Empleo');
  const sliderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
/*   const [isError, setIsError] = useState(false); */

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
        /* setIsError(true); */
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

 /*  if (isError) return <div style={{ marginTop: '15px' }}>No hay noticias sobre esta temática</div>; */


    return (
      <main>
        <section className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
          <h1>Empleo y Desarrollo Económico</h1>
        </section>

        <div className={styles.main}>
            <section className={styles.opciones}>
                <Link href="/empleo/portal" className={styles.opcion} id="contenido"><i className="material-icons" aria-hidden="true">business_center</i>Portal de Empleo del Ayuntamiento</Link>
                <Link href="http://www.ayto-puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/galeria_protocolos-de-hosteleria-y-comercio/guia_buenas_practicas_hosteleria1590413984393.pdf" target='_blank' className={styles.opcion}><i className="material-icons" aria-hidden="true">shopping_bag</i>Protocolos de comercio</Link>
                <Link href="http://www.ayto-puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/galeria_protocolos-de-hosteleria-y-comercio/protocolo_y_guia_de_buenas_practicas_para_establecimientos_de_comercio1590413984320.pdf" target='_blank' className={styles.opcion}><i className="material-icons" aria-hidden="true">restaurant_menu</i>Protocolos de hostelería</Link>
                <Link href="/empleo/planes" className={styles.opcion}><i className="material-icons" aria-hidden="true">description</i>Planes de Empleo de la Junta de Andalucía</Link>
                <Link href="http://www.ayto-puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/galeria_programa-de-inclusion-social-2016/procedimiento_ayuda_extraordinaria_contratacion_2016260920161474874307714.pdf" target='_blank' className={styles.opcion}><i className="material-icons" aria-hidden="true">volunteer_activism</i>Programa de Inclusión Social</Link>
                <Link href="/empleo/desarrollo" className={styles.opcion}><i className="material-icons" aria-hidden="true">storefront</i>Desarrollo Local</Link>
                <Link href="/empleo/cefit" className={styles.opcion}><i className="material-icons" aria-hidden="true">school</i>CEFIT</Link>
                <Link href="/empleo/guadalinfo" className={styles.opcion}><i className="material-icons" aria-hidden="true">language</i>Centro Guadalinfo</Link>
            </section>

            <section>
                <h2 style={{ marginTop: '75px'}}>Información y contacto</h2>
                <div className={styles.datosContacto}>
                  <p><strong>Área de Desarrollo Local:</strong></p>
                  <p style={{ marginTop: '10px' }}><i className="material-icons">location_on</i>Paseo de la Ria nº 8 – 21100 Punta Umbría</p>
                  <p><i className="material-icons">call</i>959 49 51 45</p>
                  <p>Si necesita realizar alguna consulta o pedir una cita envíe su mensaje a <Link href="mailto:deportes@puntaumbria.es" className={styles.underline} style={{ marginLeft: '6px' }}>deportes@puntaumbria.es</Link></p>
                </div>
            </section>

           {/*  <section className={styles.opciones}>
                <h2 style={{ marginTop: '50px' }}>Últimas noticias relacionadas</h2>

                <div className={styles.sliderContainer} ref={sliderRef}>
                  {noticiasDeporte.slice(0, 3).map((noticia, index) => (
                    <Link key={index} href={`/noticias/${noticia.slug}`} className={styles.noticia}>
                      <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt={`Imagen de ${noticia.titulo}`}></img>
                      <div className={styles.informacion}>
                        <div className={styles.datos}>
                          <p className={styles.categoria}>{noticia.categoria}</p>
                          <span>&bull;</span>
                          <p  className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
                        </div>
                        <h3>{noticia.titulo.length > 53 ? noticia.titulo.slice(0, 50) + '...' : noticia.titulo}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
            </section> */}
        </div>    
      </main>
    )
}