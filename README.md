# Portfolio - Proyecto Intermodular (DAW)

Este repositorio contiene el **Proyecto Intermodular** de Desarrollo de Aplicaciones Web. El objetivo principal es el diseño, desarrollo y publicación de un portfolio profesional totalmente funcional, aplicando las mejores prácticas de UI/UX y tecnologías web modernas.

---

## 📋 Índice

1. [Contexto y Briefing](#1-contexto-y-briefing)
2. [Análisis y Planificación de Estrategia](#2-análisis-y-planificación-de-estrategia)
3. [Diseño Visual y Prototipado](#3-diseño-visual-y-prototipado)
4. [Implementación Técnica (Desarrollo Web)](#4-implementación-técnica-desarrollo-web)
5. [Publicación y Despliegue](#5-publicación-y-despliegue)
6. [Recursos y Bibliografía](#6-recursos-y-bibliografía)
7. [Manual de Uso](#7-manual-de-uso)
8. [Evaluación y Rúbrica](#8-evaluación-y-rúbrica)

---

## 1. Contexto y Briefing
La comunicación entre el cliente y la agencia es la base de un buen diseño. Este proyecto se fundamenta en un documento de bases que recoge:
- **Información del Cliente:** Perfil profesional o corporativo.
- **Objetivos:** Definición de metas claras para el sitio web.
- **Descripción del Negocio:** Análisis del sector y propuesta de valor.
- **Público Objetivo:** Definición del perfil de usuario (target).
- **Requerimientos Específicos:** Funcionalidades clave solicitadas.
- **Detalles Técnicos y Plazos:** Limitaciones tecnológicas y cronograma inicial.

## 2. Análisis y Planificación de Estrategia
Fase dedicada a la optimización de la experiencia de usuario y la visibilidad en el mercado:
- **Objetivos Principales:** Resultados SMART (específicos, medibles, alcanzables, relevantes y temporales).
- **Desglose de Tareas:** Listado de acciones concretas con responsables y plazos.
- **Diagrama de Gantt:** Visualización del cronograma del proyecto para la gestión del tiempo.
- **Mapa del Sitio:** Diagrama visual de la arquitectura de la información y jerarquía de páginas.

## 3. Diseño Visual y Prototipado
Generación de la identidad visual y estudio de la competencia:
- **Estudio de Competidores:** Análisis de fortalezas y debilidades de referentes directos.
- **Página de Referencias:** Recopilación de fuentes de inspiración, paletas y tipografías.
- **Sistema de Diseño (Figma):**
  - Paleta de colores (3 a 5 colores principales).
  - Escala de espaciados y sistema de Grid.
  - Tipografías y estilos de texto.
  - Uso de **variables y design tokens** para una integración coherente.
- **Prototipado:** Diseños de alta fidelidad para escritorio y móvil creados en páginas separadas de Figma.
- **📂 Enlace al Prototipo en Figma:** [Haz clic aquí para ver el diseño](https://www.figma.com/proto/Ke9Z25Hg3EADcfHQALehpT/Untitled?node-id=0-1&t=S662r5xoc8agGYiu-1)

## 4. Implementación Técnica (Desarrollo Web)
Traducción del diseño a código funcional utilizando estándares modernos:
- **Framework de Estilos:** `Tailwind CSS v4` en modo producción.
- **Diseño Responsivo:** Implementación de breakpoints y layouts adaptables según la documentación oficial.
- **Gestión de Assets:** Implementación de la biblioteca `sprites.svg` para optimizar la carga de iconos y logotipos SVG.
- **Personalización y Reutilización:**
  - Definición de variables propias en el tema de Tailwind.
  - Uso intensivo de la directiva `@apply` para mantener un CSS limpio y reutilizable.
- **Calidad de Código:** Estructura de archivos organizada y código semántico.

## 5. Publicación y Despliegue
El sitio está disponible públicamente para su revisión y uso:
- **Plataforma:** GitHub Pages.
- **Configuración:** Despliegue automatizado desde la rama principal o carpeta de compilación.
- **🚀 Enlace al Portfolio Publicado:** [Haz clic aquí para ver la web](https://victorgb20.github.io/kinvtrue/)

## 6. Recursos y Bibliografía
Material de apoyo y fuentes consultadas durante el desarrollo:
- Documentación de `Tailwind CSS`.
- Tutoriales de Figma para la creación de sistemas de diseño y variables.
- Inspiración de portfolios en comunidades.

## 7. Manual de Uso
Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### Requisitos Previos
- Tener instalado `Node.js` (versión 18 o superior recomendada).
- Un gestor de paquetes como `npm`.

### Instalación y Ejecución
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/VictorGB20/kinvtrue.git
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Lanzar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

### Otros Comandos Útiles
- **Compilar para producción:** `npm run build`
- **Previsualizar la compilación:** `npm run preview`
- **Sincronizar estilos Tailwind:** `npm run estilos` (recompila el CSS ante cambios en `input.css`).

## 8. Evaluación y Rúbrica
Este proyecto cumple con los siguientes criterios de evaluación:

| Criterio | Descripción | Estado |
| :--- | :--- | :---: |
| **Prototipo Figma** | Diseño completo, uso de variables y colecciones de tokens. | ✅ |
| **Biblioteca Sprites** | Uso de `sprites.svg` para iconos y logos. | ✅ |
| **Variables Tailwind** | Exportación de colores y definición de fuentes/breakpoints. | ✅ |
| **Reutilización CSS** | Uso correcto de `@apply` y CSS modular. | ✅ |
| **Responsividad** | Adaptación perfecta a móviles y tablets. | ✅ |
| **GitHub Pages** | README con enlaces y despliegue funcional. | ✅ |
| **Calidad de Código** | Código limpio, semántico y bien organizado. | ✅ |
| **Creatividad** | Uso de gradientes, variantes y efectos avanzados. | ✅ |
| **Funcionalidad** | Todo el portfolio y enlaces funcionan correctamente. | ✅ |
