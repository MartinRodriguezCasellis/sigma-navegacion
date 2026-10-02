# SIGMA - Navegación con Expo Router

Aplicación móvil de práctica para el Sistema Inteligente de Gestión de Mantenimiento (SIGMA).

El objetivo es aplicar navegación con Expo Router, rutas basadas en archivos, `Link`, rutas dinámicas y estilos con NativeWind.

## Funcionalidades

- Pantalla de inicio con accesos a Equipos, Tareas y Nueva tarea.
- Navegación mediante `Link`.
- Listado de equipos simulados.
- Ruta dinámica para ver el detalle de cada equipo.
- Pantallas de Tareas y Nueva tarea.
- Estilos realizados con NativeWind.

## Tecnologías

- React Native
- Expo
- Expo Router
- TypeScript
- NativeWind
- Tailwind CSS

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/MartinRodriguezCasellis/sigma-navegacion.git
   ```

2. Entrar a la carpeta:

   ```bash
   cd sigma-navegacion
   ```

3. Instalar dependencias:

   ```bash
   npm install
   ```

4. Iniciar Expo:

   ```bash
   npx expo start
   ```

5. Presionar `a` para abrir la aplicación en el emulador Android.

## Rutas

| Ruta | Pantalla |
|---|---|
| `/` | Inicio |
| `/equipos` | Listado de equipos |
| `/equipos/[id]` | Detalle dinámico de un equipo |
| `/tareas` | Tareas |
| `/nueva-tarea` | Nueva tarea |

## Capturas

### Inicio

![Pantalla de inicio](./docs/capturas/inicio.png)

### Equipos

![Listado de equipos](./docs/capturas/equipos.png)

### Detalle de equipo

![Detalle dinámico de un equipo](./docs/capturas/detalle-equipo.png)

### Tareas

![Pantalla de tareas](./docs/capturas/tareas.png)

### Nueva tarea

![Pantalla de nueva tarea](./docs/capturas/nueva-tarea.png)