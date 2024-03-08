"use client"
import styles from '../cultura.module.css'
import Link from "next/link"
import { useState, useEffect } from 'react';
import { usePageContext } from './../../PageContext.js';

export default function Poesia() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Premio de Poesía Primavera - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, Poesía Primavera');
    }, []);

  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cantidadMostrada, setCantidadMostrada] = useState(9);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_AGENDA_URL}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          const noticiasFiltradasYOrdenadas = ordenarNoticiasPorFecha(data.data)
            .filter(noticia => noticia.categorias.includes('Carnaval'));
          setNoticias(noticiasFiltradasYOrdenadas);
        } else {
          console.error('La respuesta no es un array:', data.data);
          setNoticias([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
        setNoticias([]);
      });
  }, []);

  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(a.fecha_concreta) - new Date(b.fecha_concreta));
  }

  useEffect(() => {
    const cargarMasNoticias = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setCantidadMostrada(cantidadMostrada => cantidadMostrada + 9);
      }
    };

    window.addEventListener('scroll', cargarMasNoticias);
    return () => window.removeEventListener('scroll', cargarMasNoticias);
  }, []);

  if (isLoading) {
    return <div>Cargando noticias...</div>;
  }

  const noticiasDeNavidad = noticias.slice(0, cantidadMostrada);


    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ldHJ5fGVufDB8fDB8fHww" alt="" />
          <h1>Premio de Poesía Primavera</h1>
        </section>

        <div className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/cultura">Cultura</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Premio de Poesía Primavera</p> 
            </div> 

            <h2 style={{ marginBottom: '20px' }}>Selección de poemas</h2>
            <section className={`${styles.opciones} ${styles.opcionesTexto} ${styles.años}`}>
                <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_libros-premios-primavera-poesia/2017_poesias1524568609533.pdf" target='_blank' className={styles.opcion}>2017</Link>
                <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_libros-premios-primavera-poesia/2018_poesias1524568374538.pdf" target='_blank' className={styles.opcion}>2018</Link>
            </section>
        </div>
      </main>
    )
}

