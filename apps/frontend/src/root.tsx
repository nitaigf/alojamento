// apps/frontend/src/root.tsx
import { component$, isDev, useVisibleTask$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { useAuth } from "./stores/auth";

import "./styles/global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  // Inicializar o usuário do localStorage quando a aplicação carrega
  const { initUser } = useAuth();
  
  useVisibleTask$(() => {
    initUser();
  });

  return (
    <QwikCityProvider>
      <>
        <head>
          <meta charSet="utf-8" />
          {!isDev && (
            <link
              rel="manifest"
              href={`${import.meta.env.BASE_URL}manifest.webmanifest`}
            />
          )}
          <RouterHead />
        </head>
        <body lang="en">
          <RouterOutlet />
        </body>
      </>
    </QwikCityProvider>
  );
});