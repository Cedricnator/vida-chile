# Stage 1: Build
FROM node:18 as build-stage

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Definir directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY pnpm-lock.yaml package.json ./

# Instalar dependencias
RUN pnpm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación Angular con SSR
RUN pnpm run build

# Stage 2: Producción
FROM node:18-slim as production-stage

# Instalar pnpm globalmente en el entorno de producción
RUN npm install -g pnpm

# Definir directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios desde la etapa de build
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/package.json ./package.json
COPY --from=build-stage /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Instalar solo las dependencias de producción
RUN pnpm install --prod

# Exponer el puerto en el que el servidor SSR corre (por defecto 4000)
EXPOSE 4000

# Comando para ejecutar el servidor SSR
CMD ["pnpm", "serve:ssr:vidachile-front"]

