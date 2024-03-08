"use client"
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import styles from './MenuIconos.module.css'

export function MenuIconos () {

  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { name: 'Deportes', icon: 'sports_soccer', href: '/deportes' },
    { name: 'Cultura y Festejos', icon: 'theater_comedy', href: '/cultura' },
    { name: 'Personas', icon: 'groups', href: '/mantenimiento' },
    { name: 'El Portil', icon: 'beach_access', href: '/mantenimiento' },
    { name: 'Empleo y Desarrollo Económico', icon: 'home_repair_service', href: '/empleo' },
    { name: 'Seguridad', icon: 'local_police', href: '/seguridad' },
    { name: 'Educación', icon: 'school', href: '/mantenimiento' },
    { name: 'Economía y Hacienda', icon: 'euro_symbol', href: '/economia' },
    { name: 'Urbanismo', icon: 'location_city', href: '/mantenimiento' },
    { name: 'Participación Ciudadana', icon: 'diversity_3', href: '/mantenimiento' }
  ];


  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

return(
    <section className={styles.menuIconos}  id="menuList">
        <ul>
            {menuItems.map((item, index) => (
                <li key={index} className={`${index < (windowWidth > 820 ? 5 : (windowWidth < 761 ? 3 : 4)) || expanded ? styles.menuItem : styles.hiddenMenuItem} ${windowWidth < 760 ? styles.hiddenMenuItemResponsive : ''}`}>
                    <Link href={item.href}>
                        <i className="material-icons" aria-hidden="true">{item.icon}</i>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
        <button className={styles.mas} onClick={toggleMenu}>
          {expanded ? (
          <>
            <i className="material-icons" aria-label="Ver menos">expand_less</i>
          </>
          ) : (
          <>
            <i className="material-icons" aria-label="Ver más áreas municipales">expand_more</i>
          </>
          )}
        </button>
  </section>
)
}