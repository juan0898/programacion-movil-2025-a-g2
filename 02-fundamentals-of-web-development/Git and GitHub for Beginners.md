# Git y GitHub para Principiantes - Curso Intensivo

##  Introducción

Este curso intensivo de Simplilearn proporciona una comprensión profunda de Git y GitHub, herramientas esenciales para el control de versiones y la colaboración en proyectos de desarrollo de software.



##  Instalación y Configuración de Git

1. **Instalar Git:**
   - Descargar desde el sitio oficial: [https://git-scm.com/](https://git-scm.com/)

2. **Configurar Git:**
   - Establecer el nombre de usuario:
     git config --global user.name "Tu Nombre"
   - Establecer el correo electrónico:
     git config --global user.email "tuemail@example.com"
   - Verificar la configuración:
     git config --list

##  Comandos Básicos de Git

- **Inicializar un repositorio:**
  git init

- **Clonar un repositorio existente:**
  git clone https://github.com/usuario/repositorio.git

- **Ver el estado del repositorio:**
  git status

- **Agregar archivos al área de preparación:**
  git add archivo.txt

- **Confirmar cambios:**
  git commit -m "Mensaje del commit"

- **Ver el historial de commits:**
  git log

## Trabajar con Ramas

- **Crear una nueva rama:**
  git branch nombre_rama

- **Cambiar a otra rama:**
  git checkout nombre_rama

- **Crear y cambiar a una nueva rama:**
  git checkout -b nombre_rama

- **Fusionar una rama con la actual:**
  git merge nombre_rama

- **Eliminar una rama:**
  git branch -d nombre_rama

##  Introducción a GitHub

- **¿Qué es GitHub?**
  GitHub es una plataforma basada en la web que utiliza Git para el control de versiones y facilita la colaboración entre desarrolladores.

- **Características principales:**
  - Hospedaje de repositorios Git.
  - Seguimiento de problemas (issues).
  - Solicitudes de extracción (pull requests).
  - Revisión de código colaborativa.

##  Conectar Git con GitHub

- **Agregar un repositorio remoto:**
  git remote add origin https://github.com/usuario/repositorio.git

- **Ver los repositorios remotos:**
  git remote -v

- **Subir cambios al repositorio remoto:**
  git push origin main

- **Obtener cambios del repositorio remoto:**
  git pull origin main

##  Buenas Prácticas

- **Realizar commits frecuentes:** Facilita el seguimiento de cambios y la colaboración.
- **Utilizar ramas para nuevas características o correcciones:** Mantiene la rama principal estable.
- **Escribir mensajes de commit claros y descriptivos:** Ayuda a entender el propósito de los cambios.
- **Sincronizar regularmente con el repositorio remoto:** Evita conflictos y mantiene el trabajo actualizado.

## Link Video:
[Git and GitHub for Beginners - Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk)