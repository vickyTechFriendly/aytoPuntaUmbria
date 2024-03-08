"use client"
import React, { useState} from 'react';
import { Mulish } from 'next/font/google'
import './globals.css'
import {BarraNavegacion} from '../components/BarraNavegacion'
import {Navigation} from '../components/Navigation'
import {Footer} from '../components/Footer'
import PageContext from './PageContext.js';

const mulish = Mulish({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');

  return (
    <PageContext.Provider value={{ setTitle, setDescription, setKeywords }}>
      <html lang="en">
        <head>
          <title>{title}</title>
          <meta name="description" content={description} />
          {keywords && <meta name="keywords" content={keywords} />}
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/YOUR_KIT_ID.js" crossorigin="anonymous"></script>
        </head>
        <body className={mulish.className}>
          <BarraNavegacion/>
          <Navigation/>
          {children}
          <Footer/>
          </body>
      </html>
    </PageContext.Provider>
  )
}