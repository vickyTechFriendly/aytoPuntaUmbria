"use client"
import styles from './cultura.module.css'
import Link from "next/link"
import { useState, useEffect, useRef } from 'react';
import { usePageContext } from './../PageContext.js';

export default function Cultura() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Cultura - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, Cultura, aulas, talleres, Teatro del Mar, Salas de Exposiciones');
    }, []);

  const [noticias, setNoticias] = useState([]);
  const noticiasCultura = noticias.filter(noticia => 
    noticia.categoria === 'Cultura' || noticia.categoria === 'Fiestas'
  );
  const sliderRef = useRef(null);
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
          <img src="https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>Cultura y Festejos</h1>
        </section>

        <div className={styles.main}>
            <section className={`${styles.opciones} ${styles.opcionesTexto}`}>
            <Link href="/cultura/biblioteca" className={styles.opcion} id="contenido"><i className="material-icons" aria-hidden="true">menu_book</i> Biblioteca Municipal</Link>
                <Link href="/cultura/talleres" className={styles.opcion} id="contenido"><i className="material-icons" aria-hidden="true">construction</i> Aulas y Talleres</Link>
                <Link href="/cultura/teatro" className={styles.opcion}><i className="material-icons" aria-hidden="true">theater_comedy</i>Teatro del Mar</Link>
                <Link href="/cultura/salas" className={styles.opcion}><i className="material-icons" aria-hidden="true">art_track</i>Salas de Exposiciones</Link>
            </section>

            <section className={`${styles.opciones} ${styles.opcionesVisuales}`}>
                <Link href="/cultura/navidad" className={styles.opcion}>
                  <div>
                    <img src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hyaXN0bWFzfGVufDB8fDB8fHww" alt="" ></img>
                  </div>Navidad
                </Link>
                <Link href="/cultura/carnaval" className={styles.opcion}>
                  <div>
                    <img src="https://images.unsplash.com/photo-1639002549231-a895a33c4888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcm5hdmFsfGVufDB8fDB8fHww" alt="" ></img>
                  </div>Carnaval de la Luz
                </Link>
                <Link href="/cultura/poesia" className={styles.opcion}>
                  <div>
                    <img src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ldHJ5fGVufDB8fDB8fHww" alt="" ></img>
                  </div>Premio de Poesía Primavera
                </Link>
            </section>

            <section className={styles.opciones}>
                <h2>Últimas noticias relacionadas</h2>

                <div className={styles.sliderContainer} ref={sliderRef}>
                  {noticiasCultura.slice(0, 3).map((noticia, index) => (
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