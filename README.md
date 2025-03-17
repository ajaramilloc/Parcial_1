# Parcial_1 - Alejandro Jaramillo Castellanos - 202111794

# README

## Estructura del Proyecto

```
📦 Proyecto
 ┣ 📂 src
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 login.js
 ┃ ┣ 📜 home.js
 ┃ ┣ 📜 detail.js
 ┃ ┣ 📜 i18n.js
 ┗ 📜 package.json
```

### Proceso de Desarrollo

#### Configuración Inicial

El desarrollo comenzó con la configuración del entorno, incluyendo:

- Inicialización del proyecto React
- Instalación de dependencias críticas
- Configuración del sistema de rutas con React Router

#### Desarrollo de Componentes

Se utilizaron las clases de Bootstrap para garantizar que la aplicación sea completamente responsiva:

- vh-100 y h-100 para controlar adecuadamente las alturas
- Sistema de rejilla para adaptación a diferentes tamaños de pantalla
- Componentes flexibles que se ajustan automáticamente

### Implementación con Hooks de Estado y Efecto

#### `useParams` para extraer el valor de la url y escoger la info del detalle

```jsx
const { option } = useParams();
```

Para implementar el consumo de APIs en la aplicación, se usaron los siguientes tipos Hooks:

#### `useState` para gestionar el estado de los datos

```jsx
const [cards, setCards] = useState([]);
```

#### `useEffect` para realizar las llamadas a la API

```jsx
useEffect(() => {
  fetch("https://my.api.mockaroo.com/carrusel.json?key=7edd2060")
    .then((response) => response.json())
    .then((data) => {
      const formattedData = data.map((item) => ({
        image: item.image,
      }));
      setCarouselImages(formattedData.slice(0, 3));
    })
    .catch((error) => console.error("Error al cargar el carrusel:", error));
}, []);
```
