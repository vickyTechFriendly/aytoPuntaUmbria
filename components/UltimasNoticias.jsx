"use client"
import Link from "next/link"
import styles from './UltimasNoticias.module.css'
import { useState, useEffect, useRef } from 'react';


export function UltimasNoticias ({ noticiaActualId }) {

  function formatearFecha(fechaString) {
    const opciones = { month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }
  
  const [noticias, setNoticias] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
        setNoticias(noticiasOrdenadas);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);

  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }
  
  if (isLoading) return <div>Cargando noticias...</div>;
  if (!noticias.length) return <div>No hay noticias disponibles</div>;

  return(
    <div className={styles.noticias}>
      {noticias
      .filter(noticia => noticia.slug !== noticiaActualId) // Filtrar la noticia actual
                .slice(0, 3)
                .map((noticia, index) => (
          <Link href={`/noticias/${noticia.slug}`} key={index} className={styles.ultimaNoticia}>
              <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt={`Imagen de ${noticia.titulo}`}></img>
              <div className={styles.informacion}>
                  <div className={styles.datos}>
                      <p className={styles.categoria}>{noticia.categoria}</p>
                      <span>&bull;</span>
                      <p  className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
                  </div>
                  <h3>{noticia.titulo.length > 50 ? noticia.titulo.slice(0, 50) + '...' : noticia.titulo}</h3>
              </div>
          </Link>
        ))}
    </div>
    
)

}