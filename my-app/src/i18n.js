import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      username: "Username",
      password: "Password",
      login: "Login",
      usernameRequired: "Username is required",
      passwordRequired: "Password is required",
      passwordMin: "Password must be at least 6 characters",
      passwordMax: "Password must not exceed 7 characters",
      menu: "Menu",
      stores: "Stores",
      cart: "Cart",
      foodWastingSolution: "FOOD WASTING SOLUTION",
    },
  },
  es: {
    translation: {
      username: "Usuario",
      password: "Contraseña",
      login: "Iniciar sesión",
      usernameRequired: "El nombre de usuario es obligatorio",
      passwordRequired: "La contraseña es obligatoria",
      passwordMin: "La contraseña debe tener al menos 6 caracteres",
      passwordMax: "La contraseña no debe tener más de 7 caracteres",
      menu: "Menú",
      stores: "Tiendas",
      cart: "Carrito",
      foodWastingSolution: "SOLUCIÓN PARA EL DESPERDICIO DE ALIMENTOS",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
