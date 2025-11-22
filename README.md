# Kuvika Store

## Descripción del Proyecto

Este proyecto es una aplicación web de E-Commerce desarrollada con React para el Front-end, utilizando un Context para la gestión del carrito de compras y Firebase (Cloud Firestore) como base de datos y backend as a Service (BaaS) para el almacenamiento de productos y la gestión de órdenes de compra.

El objetivo principal es simular la experiencia completa de compra en línea, desde la visualización de productos hasta la finalización de la compra (checkout).

---

## Tecnologías Utilizadas

| Categoría  | Tecnología             | Descripción                                     |
| ---------- | ---------------------- | ----------------------------------------------- |
| Front-end  | `React.js`             | Biblioteca principal para construir componentes |
| Tooling    | `Vite`                 | Entorno de desarrollo, bundler y servidor local |
| Routing    | `React Router DOM`     | Manejo de navegación y rutas de aplicación      |
| Estado     | `React Context`        | Gestión del estado global (carrito)             |
| Backend/DB | `Firebase (Firestore)` | Base de datos NoSQL para productos y órdenes    |
| Estilos    | `CSS3 Puro`            | Estilado de componentes y diseño responsivo     |
| Deployment | `Vercel`               | Despliegue en producción                        |

---

## Funcionalidades Implementadas

- **Catálogo y Filtros:** Muestra productos por categoría.
- **Detalle del Producto:** Vista individual con descripción, precio, y control de cantidad.
- **Gestión de Cantidad:** (`ItemCount`) Componente para seleccionar unidades con stock limitado.
- **Carrito de Compras:** (`Cart`) Resumen de la compra, con opciones para sumar/restar, eliminar ítems y vaciar el carrito.
- **Checkout:** (`Checkout`) Formulario para finalizar la compra y generar una orden en Firestore.
- **Seguridad:** Uso de Variables de Entorno (`.env`) para ocultar las credenciales de Firebase.

---

## Guía de Instalación y Ejecución

1. **Requisitos Previos:** Necesitas tener Node.js y npm instalados globalmente.

2. **Clonar el Repositorio:** Clonar el repositorio

```
git clone https://github.com/carocook/ProyectoFinalReact_Cook.git
cd ProyectoFinalReact_Cook
```

3. **Instalación de Dependencias:**

```
npm install
```

4. **Configuración de Variables de Entorno (Firebase):** Este paso es **obligatorio** para que la aplicación se conecte a la base de datos.

- Crear el archivo `.env` en la raíz del proyecto
- Añadir Credenciales

```
VITE_FIREBASE_API_KEY="TU API KEY"
VITE_FIREBASE_AUTH_DOMAIN="tu-proyecto-id.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="tu-proyecto-id"
VITE_FIREBASE_STORAGE_BUCKET="tu-proyecto-id.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID="TU ID"
VITE_FIREBASE_APP_ID="TU APP ID"
```

5. **Iniciar la Aplicación:**

```
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` o el puerto que indique Vite

---

¡Gracias por visitar este proyecto! Desarrollado con ❤️ por **Caro Cook**
