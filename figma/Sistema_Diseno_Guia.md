# Criterios de Diseño (Prototipo Figma)

## 🎨 Sistema de Colores (Variables Globales)

Para construir el Sistema de Diseño en Figma, comienza creando **Variables Locales** ("Local Variables" > "Color").

### Paleta Principal (Modo Claro/Light)
- **Fondo Global (Background):** `#F9FAFB` (Tailwind Gray-50)
- **Fondo Tarjetas (Surface):** `#FFFFFF` (Blanco)
- **Texto Principal (Text-Primary):** `#111827` (Tailwind Gray-900)
- **Texto Secundario (Text-Secondary):** `#4B5563` (Tailwind Gray-600)
- **Principal/Acento (Primary):** `#3B82F6` (Tailwind Blue-500)
- **Secundario/Acento (Secondary):** `#1E40AF` (Tailwind Blue-800)
- **Bordes (Border):** `#E5E7EB` (Tailwind Gray-200)

### Paleta Modo Oscuro (Modo Oscuro/Dark)
*Crea un segundo "Modo" en tus variables locales para Dark.*
- **Fondo Global (Background):** `#0F172A` (Tailwind Slate-900)
- **Fondo Tarjetas (Surface):** `#1E293B` (Tailwind Slate-800)
- **Texto Principal (Text-Primary):** `#F3F4F6` (Tailwind Gray-100)
- **Texto Secundario (Text-Secondary):** `#9CA3AF` (Tailwind Gray-400)
- **Principal/Acento (Primary):** `#3B82F6` (Se mantiene o un poco más claro, ej. `#60A5FA`)
- **Secundario/Acento (Secondary):** `#1E40AF` (Opcional: usar el mismo u oscuro)
- **Bordes (Border):** `#374151` (Tailwind Gray-700)

## 🔤 Tipografía (Tokens / Text Styles)

Añade la fuente libre **Inter** desde Google Fonts.
Crea los siguientes estilos de texto ("Text Styles"):

1. **Heading 1 (Hero Title):** Inter, Bold (700), Tamaño: 72px (Escritorio), 48px (Móvil).
2. **Heading 2 (Section Title):** Inter, Bold (700), Tamaño: 36px (Escritorio), 30px (Móvil).
3. **Heading 3 (Card Title):** Inter, Bold (700), Tamaño: 20px.
4. **Body 1 (Paragraph):** Inter, Regular (400), Tamaño: 18px.
5. **Body 2 (Secondary Para):** Inter, Regular (400), Tamaño: 14px.
6. **Button/Label:** Inter, Semi-Bold (600), Tamaño: 14px.

## 📏 Espaciados y Grid (Variables de Número)

Crea variables de tipo número (Number) para usarlas en Auto-Layout (Paddings, Gaps).
- **Sp-2:** 8px
- **Sp-4:** 16px (Padding estándar de botones)
- **Sp-6:** 24px (Padding de tarjetas)
- **Sp-8:** 32px
- **Sp-16:** 64px (Separación entre secciones)

**Sistema Grid (Layout Grid):**
- **Escritorio (Frame Mac/Desktop - 1440px):**
  - Count: 12 columnas.
  - Margin: 120px.
  - Gutter: 24px.
- **Móvil (Frame iPhone - 390px):**
  - Count: 4 columnas.
  - Margin: 16px.
  - Gutter: 16px.

## 🧩 Componentes a Crear

Crea una página en Figma llamada `"Componentes / Design System"` y diseña esto usando Auto-Layout:

### 1. Botones (Primary & Secondary)
- **Estructura:** Frame con Auto-Layout horizontal, Gap: 8px, Hug/Hug.
- **Botón Primary:**
  - Fill: Variable Color "Primary".
  - Text: Estilo "Button/Label", Color Blanco (`#FFFFFF`).
  - Corner Radius: 8px (o 99px para "pill").
  - Padding: L/R (24px), T/B (12px).
- **Variantes:** Estado Default, Hover (Color: Secondary).

### 2. Tarjeta de Proyecto (Card)
- **Estructura:** Auto-Layout Vertical, Fill "Surface", Stroke "Border". Radius: 16px.
- **Parte Superior (Imagen):** Rectángulo con un Icono genérico de Phosphor Icons en el centro. Altura: 200px.
- **Parte Inferior (Contenido):**
  - Auto Layout Vertical, Padding de 24px (`Sp-6`).
  - Capas: Heading 3 (Título), Body 2 (Descripción).
  - Etiquetas (Pills): Frame horizontal con Fill gris claro y Body 2 (Ej. React, Tailwind).

### 3. Barra de Navegación (NavBar)
- **Estructura:** Auto Layout Horizontal (Space Between). Ancho Fijo (1440px o `Fill Container`), Altura: 64px. Padding L/R 120px.
- **Izquierda:** Logo (Texto degradado).
- **Derecha:** Enlaces (Body 1), Switcher Día/Noche (Icono), Botón CTA Principal.

### 4. Chips de Tecnología (About Me)
- **Estructura:** Auto Layout Horizontal, Padding L/R 16, T/B 8.
- Border "Border", Fill "Background". Radius: 8px. Contiene Icono + Text (Body 2).

## 🚀 Páginas Finales a Montar

Una vez tengas el sistema de diseño y los componentes, crea las siguientes pantallas ("Frames"):

1. **Frame Escritorio (1440px de ancho):**
   - Aplica el Grid de escritorio.
   - Pega tu componente NavBar arriba.
   - Diseña el **Hero (Sección Inicio)** con un título "Construyendo experiencias web memorables" en enorme.
   - Diseña **Sobre Mí** dividiendo la pantalla en dos columnas (Foto a un lado, texto e iconos de chips al otro).
   - Diseña **Proyectos Destacados** usando un Grid de 3 columnas para tus componentes Tarjeta.
2. **Frame Móvil (390px de ancho):**
   - Haz las tarjetas adaptativas para que ocupen todo el ancho y apílalas una debajo de otra en columna de 1.
   - Oculta los enlaces de la NavBar dejando un menú de Hamburguesa.

---
*Pro-Tip: Usa el plugin "Phosphor Icons" y "Iconify" dentro de Figma para los iconos.*
