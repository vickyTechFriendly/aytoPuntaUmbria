"use client"
import Link from "next/link";
import styles from './CarruselCabecera.module.css';
import { useState, useEffect } from 'react';


export function Cabecera () {

    const [imagenes, setImagenes] = useState([]);
    const [imagenActual, setImagenActual] = useState(0);
    const [sinTransicion, setSinTransicion] = useState(false); 

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_CARRUSEL_URL}`)
            .then(response => response.json())
            .then(data => setImagenes(data.data)) 
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    const irAnterior = () => {
        if (imagenActual === 0) {
            setSinTransicion(true);
            setImagenActual(imagenes.length - 1);
            setTimeout(() => setSinTransicion(false), 0);
        } else {
            setImagenActual(imagenActual - 1);
        }
    }

    const irSiguiente = () => {
        if (imagenActual === imagenes.length - 1) {
            setSinTransicion(true);
            setImagenActual(0);
            setTimeout(() => setSinTransicion(false), 0);
        } else {
            setImagenActual(imagenActual + 1);
        }
    }

    return(
        <>
        <div className={styles.relative}></div>
        <div className={styles.carruselContainer}>
            <div className={styles.carruselImagenes} style={{transform: `translateX(-${imagenActual * 100}%)`, transition: sinTransicion ? 'none' : 'transform 0.5s ease-in-out'}}>
                {imagenes.map((item, index) => (
                    <div className={styles.imagen}  key={index} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${item.imagen}`})` }}>
                        <div className={styles.contenedorTexto}>
                            <p className={styles.tituloCarrusel}>{item.titulo}</p>
                            <p>{item.descripcion}</p>
                            <Link href={item.enlace}>{item.texto_boton}</Link>
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.botonIzquierdo} onClick={irAnterior} aria-hidden="true" tabIndex="-1">&lt;</button>
            <button className={styles.botonDerecho} onClick={irSiguiente} aria-hidden="true" tabIndex="-1">&gt;</button>

            <div className={styles.navegacion}>
                {imagenes.map((_, index) => (
                    <span key={index} className={imagenActual === index ? styles.puntoActivo : styles.punto} onClick={() => setImagenActual(index)}></span>
                ))}
            </div>
        </div>
        </>
    )
}