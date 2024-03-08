"use client"
import Link from "next/link"
import styles from './Navigation.module.css'
import {Busqueda} from '../components/Busqueda'
import { useState } from 'react';

export function Navigation () {
    
    const [submenuActivo, setSubmenuActivo] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({});

    const toggleSubmenu = (id) => {
        if (submenuActivo === id) {
            setSubmenuActivo(null); // Cierra el submenú si ya está abierto
        } else {
            setSubmenuActivo(id); // Abre el submenú
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleParentClick = (menuName, e) => {
        e.preventDefault();
        e.stopPropagation(); 
        setIsSubMenuOpen(prevState => ({
        ...prevState,
        [menuName]: !prevState[menuName]
        }));
    };

    return(
        <header className={styles.header}>

            <Link href="/"><img src="/images/logo.jpg" className={styles.logo} alt="Inicio"></img></Link>

            {/* menu Escritorio */}
            <nav>
                <ul className={styles.navigationEscritorio}>
                    <li className={styles.paddingMenuEscritorio}>
                        <Link className={styles.opcionPadre} href="#" tabIndex="0" onKeyDown={(e) => {if (e.key === 'Enter') {toggleSubmenu('ayuntamiento');}}}>Ayuntamiento<i className="material-icons" aria-hidden="true">expand_more</i></Link>

                        <div className={`${styles.submenuEscritorio} ${submenuActivo === 'ayuntamiento' ? styles.visible : ''}`}>
                            <ul>
                                <li className={styles.categoria}><i className="material-icons" aria-label="Abrir en pestaña nueva">account_balance</i>Organización municipal</li>
                                <li><Link href="/alcalde">Saludo del alcalde</Link></li>
                                <li><Link href="/corporacion">Corporación municipal</Link></li>
                            </ul>
                            <ul>
                                <li className={styles.categoria}><i className="material-icons" aria-label="Abrir en pestaña nueva">article</i>Normativa municipal</li>
                                <li><Link href="https://umbria.sedelectronica.es/transparency/e35ee843-e063-460f-9baa-b07b7ad4cef5/" target="_blank">Ordenanzas y reglamentos<i className="material-icons" aria-label="Abrir en pestaña nueva" style={{ fontSize: '18px', marginLeft: '5px' }}>open_in_new</i></Link></li>
                                <li><Link href="/planeamientourbanistico">Planeamiento urbanístico</Link></li>
                            </ul>
                            <ul>
                                <li className={styles.categoria}><i className="material-icons" aria-label="Abrir en pestaña nueva">handshake</i>Gobierno abierto</li>
                                <li><Link href="https://umbria.sedelectronica.es/transparency" target="_blank">Transparencia<i className="material-icons" aria-label="Abrir en pestaña nueva" style={{ fontSize: '18px', marginLeft: '5px' }}>open_in_new</i></Link></li>
                                <li><Link href="/plenos">Plenos</Link></li>
                            </ul>
                            <ul>
                                <li className={styles.categoria}><i className="material-icons" aria-label="Abrir en pestaña nueva">mail</i>Contacto</li>
                                <li><Link href="/contacto">Contactar con el ayuntamiento</Link></li>
                                <li><Link href="/directorio">Directorio de teléfonos y direcciones</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li  className={styles.paddingMenuEscritorio}>
                        <Link className={styles.opcionPadre} href="#" tabIndex="0" onKeyDown={(e) => {if (e.key === 'Enter') {toggleSubmenu('ciudad');}}}>Ciudad<i className="material-icons" aria-hidden="true">expand_more</i></Link>
                        <ul className={`${styles.submenuEscritorio} ${submenuActivo === 'ciudad' ? styles.visible : ''}`}>
                            <div>
                            <li><Link href="/mantenimiento">Situación</Link></li>
                            <li><Link href="/mantenimiento">Callejero</Link></li>
                            <li><Link href="/mantenimiento">Movilidad</Link></li>
                            </div>
                            <div>
                            <li><Link href="/historia">Población y actividad económica</Link></li>
                            <li><Link href="/mantenimiento">Fiestas</Link></li>
                            <li><Link href="/historia">Historia</Link></li>
                            </div>
                            <div>
                            <li><Link href="/historia">Playas</Link></li>
                            <li><Link href="/historia">Entorno natural</Link></li>
                            <li><Link href="/historia">Cultura marinera</Link></li>
                            </div>
                        </ul>
                    </li> 
                    <li className={styles.paddingMenuEscritorio}>
                        <Link className={styles.opcionPadre} href="https://umbria.sedelectronica.es/info.0" target="_blank">Trámites</Link>
                    </li>
                    <li className={styles.paddingMenuEscritorio}>
                        <Link className={styles.opcionPadre} href="/mantenimiento" target="_blank">Turismo</Link>
                    </li>
                    <li className={styles.paddingMenuEscritorio}>
                        <Link className={styles.opcionPadre} href="/noticias">Actualidad</Link>
                    </li>
                </ul>
            </nav> 
            
            <Busqueda/>
            
            {/* menú movil */}
            <div className={styles.menuIcon} onClick={toggleMenu}onKeyDown={(e) => {if (e.key === 'Enter') {toggleMenu();}}} tabindex="0" role="button"><i className="material-icons" aria-label="Menú">{isMenuOpen ? 'close' : 'menu'} {/* Cambia el icono basándote en isMenuOpen */}</i>
            <nav className={`${styles.navigation} ${isMenuOpen ? styles.menuOpenMargin : ''}`}>
                <ul className={` ${isMenuOpen ? styles.menuActive : styles.menuNoActive}`}>
                    <li className={styles.paddingMenu}>
                        <Link className={`${styles.opcionPadre} ${styles.ayto}`} href="#" onClick={(e) => handleParentClick('ayuntamiento', e)} onKeyDown={(e) => e.key === 'Enter' && handleParentClick('ayuntamiento', e)} tabindex="0" role="button" aria-label="Ayuntamiento. Tiene submenú">Ayuntamiento<i className="material-icons" style={{transform: isSubMenuOpen['ayuntamiento'] ? 'rotate(180deg)' : 'rotate(0deg)' }} aria-hidden="true">expand_more</i></Link>
                        <ul className={`${styles.submenu}  ${isSubMenuOpen['ayuntamiento'] ? styles.submenuActive : ''}`}>
                            <li><Link href="/alcalde">Saludo del alcalde</Link></li>
                            <li><Link href="/corporacion">Corporación municipal</Link></li>
                            <li><Link href="/mantenimiento">Plenos</Link></li>
                            <li><Link href="/mantenimiento">Normativa municipal</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                        </ul>
                    </li>
                    <li  className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="#" onClick={(e) => handleParentClick('areas', e)} onKeyDown={(e) => e.key === 'Enter' && handleParentClick('areas', e)} tabindex="0" role="button" aria-label="Ciudad. Tiene submenú">Ciudad<i className="material-icons" style={{transform: isSubMenuOpen['areas'] ? 'rotate(180deg)' : 'rotate(0deg)' }} aria-hidden="true">expand_more</i></Link>
                        <ul className={`${styles.submenu} ${styles.submenu1} ${isSubMenuOpen['areas'] ? styles.submenuActive : ''}`}>
                            <li><Link href="/mantenimiento">Callejero</Link></li>
                            <li><Link href="/mantenimiento">Movilidad</Link></li>
                            <li><Link href="/mantenimiento">Fiestas</Link></li>
                            <li><Link href="/historia">Historia</Link></li>
                        </ul>
                    </li> 
                    <li  className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="https://umbria.sedelectronica.es/info.0" target="_blank">Trámites</Link>
                    </li>
                    <li  className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="/mantenimiento" target="_blank">Turismo</Link>
                    </li>
                    <li  className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="/noticias">Actualidad</Link>
                    </li>
                </ul>
            </nav>
            </div>
                    
        </header>
    )
}