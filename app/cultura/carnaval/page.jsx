"use client"
import styles from '../cultura.module.css'
import Link from "next/link"
import { useState, useEffect } from 'react';
import { usePageContext } from './../../PageContext.js';

export default function Carnaval() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Carnaval de la Luz - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, Carnaval, fiestas');
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
          <img src="https://images.unsplash.com/photo-1639002549231-a895a33c4888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcm5hdmFsfGVufDB8fDB8fHww" alt="" />
          <h1>Carnaval de la Luz</h1>
        </section>

        <div className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/cultura">Cultura</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Carnaval de la Luz</p> 
            </div> 

            <section className={`${styles.listadoNoticias} ${styles.listadoEventos}`}>
            {noticiasDeNavidad.map((noticia, index) => (
              <Link href={`/agenda/${noticia.slug}`} key={index} className={styles.evento}>
                <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen1}`} alt={`Imagen de ${noticia.nombre_evento}`}></img>
                <div className={styles.informacion}>
                  <h2>{noticia.nombre_evento}</h2>
                  <div className={styles.datos}>
                    <div className={styles.categoriasEvento}>
                        {noticia.categorias && noticia.categorias.map((categoria, catIndex) => (
                          <p key={catIndex} className={styles.categoria}>{categoria}</p>
                        ))}
                      </div>
                      <p className={styles.fecha}><i className="material-icons">calendar_month</i>{noticia.fecha_visible}</p>
                      {noticia.lugar && <p className={styles.ubicacion}><i className="material-icons">location_on</i>{noticia.lugar}</p>}
                    </div>
                </div>
              </Link>
              ))}
            </section>
        </div>
      </main>
    )
}

