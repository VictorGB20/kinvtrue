# KinvTrue - Gestión de Inventario Local

![KinvTrue Logo](public/pinguizo.png)

**KinvTrue** es una solución integral para la gestión de inventario y seguimiento de reparaciones, diseñada específicamente para optimizar el flujo de trabajo en talleres técnicos y almacenes. El proyecto se centra en la velocidad, la privacidad y la facilidad de uso mediante el almacenamiento local.

---

## 1. Contexto (Briefing)

### Información General

KinvTrue nace de la necesidad de tener un control preciso del stock y estado de reparaciones de forma inmediata y sin dependencias externas de servidores complejos, utilizando el navegador como base de datos persistente.

### Objetivos del Proyecto

- Desarrollar una interfaz moderna y fluida para la gestión de materiales.
- Implementar un sistema de filtrado dinámico para estados de reparación e inventario bajo.
- Garantizar la independencia de datos entre usuarios mediante perfiles locales.

### Descripción del Negocio

El sistema permite a los técnicos registrar materiales, actualizar su estado (en reparación, disponible, etc.) y visualizar el estado global del taller desde un panel de control intuitivo.

### Público Objetivo

Técnicos de reparación, gestores de almacenes pequeños y entusiastas del DIY que necesiten organizar sus componentes.

### Detalles Técnicos

- **Arquitectura**: Single Page Application (SPA).
- **Persistencia**: LocalStorage API.
- **Frontend**: React + TypeScript.
- **Estándares**: Diseño orientado a componentes y Atomic Design.

---

## 2. Análisis y Planificación

### Objetivos Principales

1. **Fase 1**: Diseño de la arquitectura de estados y rutas. (Finalizado)
2. **Fase 2**: Implementación del core de gestión de materiales con Zustand. (Finalizado)
3. **Fase 3**: Pulido de UI/UX con Tailwind 4 y animaciones. (Finalizado)

### Desglose de Tareas

- [X] Configuración inicial del entorno Vite + React + TypeScript.
- [X] Modelado de datos para Materiales e Inscripciones/Usuarios.
- [X] Creación de vistas: Dashboard, Inventario, Perfil y Acerca de.
- [X] Implementación de sistema de búsqueda y filtros avanzados.

### Mapa del Sitio

- **Acceso**: Login / Registro.
- **Panel Principal**: Dashboard (Resumen de métricas).
- **Gestión**: Lista de Materiales (Filtros: En reparación, Bajo stock, etc.).
- **Usuario**: Perfil (Personalización) y Acerca de.

---

## 3. Diseño y Estilo

### Paleta de Colores

Utilizamos una paleta corporativa moderna centrada en la legibilidad y el enfoque:

- **Primario**: `#0f172a` (Slate 900) - Usado para la estructura y textos fuertes.
- **Acción**: `#6366f1` (Indigo 500) - Botones principales y llamadas a la acción.
- **Fondo**: `#f8fafc` (Slate 50) - Fondo de la aplicación para reducir fatiga visual.
- **Accent/Éxito**: `#10b981` (Esmeralda) - Estados positivos y stock disponible.

### Tipografía

- Se ha implementado **Inter** (o fuente sans-serif del sistema) a través de Tailwind para garantizar una visualización clara en todos los dispositivos.

### Referencias e Inspiración

El diseño se inspira en dashboards modernos de SaaS (Software as a Service) como Stripe o Vercel, priorizando la limpieza visual y el uso de sombras suaves.

---

## 4. Desarrollo Web

### Stack Tecnológico

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Gestión de Estado**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Enrutado**: [React Router 7](https://reactrouter.com/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)

### Características Destacadas

- **Diseño Responsivo**: Aplicación optimizada para móviles, tablets y escritorio mediante breakpoints nativos de Tailwind.
- **Biblioteca de Iconos**: Uso de un sistema de sprites SVG (`sprites.svg`) para optimizar la carga y personalización de iconos.
- **Variables Tailwind 4**: Uso extensivo de la nueva sintaxis de variables de Tailwind para un sistema de diseño consistente.
- **@apply Reutilización**: Limpieza de HTML mediante la creación de clases compuestas en CSS para botones y tarjetas.

---

## 5. Publicación

### GitHub Pages

La aplicación está publicada en GitHub Pages: https://victorgb20.github.io/ProyectoFinalDisenno/

### Capturas del Sitio

*(Aquí se pueden añadir capturas de pantalla de las vistas una vez generadas)*

- [Dashboard View]
- [Inventario View]
- [Login Screen]
