"use client"
import styles from '../pages.module.css'
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { usePageContext } from './../PageContext.js';

export default function Noticias() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Noticias - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, Noticias, actualidad');
    }, []);

  function formatearFecha(fechaString) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }
  
  const [categoriasUnicas, setCategoriasUnicas] = useState(new Set());
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [filtroFecha, setFiltroFecha] = useState('todas');
  const [noticias, setNoticias] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cantidadMostrada, setCantidadMostrada] = useState(9);
  const [esPantallaPequena, setEsPantallaPequena] = useState(window.innerWidth < 1341);

   // Manejo del tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setEsPantallaPequena(window.innerWidth < 1341);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
        setNoticias(noticiasOrdenadas);
        setIsLoading(false);
  
        const categorias = new Set();
        noticiasOrdenadas.forEach(noticia => {
          if (noticia.categoria) {
            categorias.add(noticia.categoria);
          }
        });
        
        const categoriasOrdenadas = Array.from(categorias).sort();
        setCategoriasUnicas(categoriasOrdenadas);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);

  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }

  const cambiarCategoriaSeleccionada = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const cambiarFiltroFecha = (event) => {
    setFiltroFecha(event.target.value);
  };

  const filtrarNoticiasPorFecha = (noticias) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    switch (filtroFecha) {
      case 'hoy':
        return noticias.filter(noticia => new Date(noticia.fecha).toDateString() === hoy.toDateString());
      case 'estaSemana':
        const inicioSemana = new Date(hoy);
        inicioSemana.setDate(hoy.getDate() - hoy.getDay()); // El día de la semana en 0 es domingo
        const finSemana = new Date(inicioSemana);
        finSemana.setDate(inicioSemana.getDate() + 6); // Suma 6 días para llegar al sábado
  
        return noticias.filter(noticia => {
          const fechaNoticia = new Date(noticia.fecha);
          return fechaNoticia >= inicioSemana && fechaNoticia <= finSemana;
        });
      case 'esteMes':
        const inicioMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
        const finMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0); // El día 0 del siguiente mes es el último día del mes actual

      return noticias.filter(noticia => {
        const fechaNoticia = new Date(noticia.fecha);
        return fechaNoticia >= inicioMes && fechaNoticia <= finMes;
      });
      default:
        return noticias;
    }
  };

  const noticiasFiltradas = noticias
    ? filtrarNoticiasPorFecha(
        categoriaSeleccionada === 'todas'
          ? noticias
          : noticias.filter(noticia => noticia.categoria === categoriaSeleccionada)
      )
    : [];
    
  useEffect(() => {
    const cargarMasNoticias = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setCantidadMostrada(cantidadMostrada => cantidadMostrada + 9);
      }
    };

    window.addEventListener('scroll', cargarMasNoticias);

    return () => {
      window.removeEventListener('scroll', cargarMasNoticias);
    };
  }, [cantidadMostrada]);

  const obtenerTituloCortado = titulo => {
    return esPantallaPequena && titulo.length > 50 ? titulo.slice(0, 50) + '...' : titulo;
  };

  if (isLoading) return <div>Cargando noticias...</div>;
  /* if (!noticiasFiltradas.length) return <div>No hay noticias disponibles</div>; */


    return (
      <main>
        <section className={styles.agenda}>
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
          <h1 tabIndex="0" id="contenido">Noticias</h1>
          <div className={styles.categorias}>
            <p className={styles.sugerencia}>Busca una noticia por la categoría y fecha que más te interese</p>
            <div className={styles.desplegables}>
              <select onChange={cambiarCategoriaSeleccionada} value={categoriaSeleccionada}>
                <option value="todas" style={{ textTransform: 'capitalize' }}>Todas las categorías</option>
                {categoriasUnicas.map((categoria, index) => (
                  <option key={index} value={categoria}>{categoria}</option>
                ))}
              </select>
              <select onChange={cambiarFiltroFecha} value={filtroFecha}>
                <option value="todas" aria-label="Todas las Fechas">Todas las Fechas</option>
                <option value="hoy" aria-label="Hoy">Hoy</option>
                <option value="estaSemana" aria-label="Esta Semana">Esta Semana</option>
                <option value="esteMes" aria-label="Este Mes">Este Mes</option>
              </select>
            </div>
          </div>
        </section>

        <div className={styles.listadoNoticias}>
        {noticiasFiltradas && noticiasFiltradas.slice(0, cantidadMostrada).map((noticia, index) => (
          <Link href={`/noticias/${noticia.slug}`} key={index} className={styles.noticia}>
            <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt=""></img>
            <div className={styles.informacion}>
              <div className={styles.datos} aria-hidden="true">
                <p className={styles.categoria}>{noticia.categoria}</p>
                <span>&bull;</span>
                <p className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
              </div>
              <h2 className={`${esPantallaPequena ? 'titulo-cortado' : ''}`}>{obtenerTituloCortado(noticia.titulo)}</h2>
            </div>
          </Link>
        ))}
        </div>
      </main>
    )
}