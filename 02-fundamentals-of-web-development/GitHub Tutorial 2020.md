
# Git & GitHub: Tutorial Completo para Principiantes

## Introducción

Este tutorial de Simplilearn ofrece una guía completa sobre Git y GitHub, diseñada para principiantes. A lo largo de aproximadamente 2 horas, se abordan desde conceptos básicos hasta operaciones más avanzadas, proporcionando una base sólida para el control de versiones y la colaboración en proyectos de desarrollo.

## ¿Qué es Git?

- **Definición:** Git es un sistema de control de versiones distribuido que permite rastrear cambios en el código fuente durante el desarrollo de software.
- **Ventajas:**
  - Seguimiento detallado de cambios.
  - Facilita la colaboración entre múltiples desarrolladores.
  - Permite revertir a versiones anteriores del código.

## Instalación de Git

- **Pasos:**
  1. Descargar Git desde el sitio oficial.
  2. Configurar nombre de usuario y correo electrónico:
     git config --global user.name "Tu Nombre"
     git config --global user.email "tuemail@example.com"
 
## Comandos Básicos de Git

- **Inicializar un repositorio:**
  git init
- **Agregar archivos al área de preparación:**
  git add nombre_del_archivo
- **Confirmar cambios:**
  git commit -m "Mensaje del commit"
- **Ver estado del repositorio:**
  git status
- **Ver historial de commits:**
  git log

## Ramas en Git

- **Crear una nueva rama:**
  git branch nombre_rama
- **Cambiar de rama:**
  git checkout nombre_rama
- **Fusionar ramas:**
  git merge nombre_rama
- **Eliminar una rama:**
  git branch -d nombre_rama

## Introducción a GitHub

- **Definición:** GitHub es una plataforma basada en la web que utiliza Git para el control de versiones y facilita la colaboración.
- **Funciones principales:**
  - Hospedaje de repositorios.
  - Seguimiento de problemas (issues).
  - Solicitudes de extracción (pull requests) para revisión de código.

## Conectar Git con GitHub

- **Clonar un repositorio existente:**
  git clone URL_del_repositorio
- **Agregar un repositorio remoto:**
  git remote add origin URL_del_repositorio
- **Enviar cambios al repositorio remoto:**
  git push origin nombre_rama
- **Obtener cambios del repositorio remoto:**
  git pull origin nombre_rama

## Buenas Prácticas

- **Commits claros y descriptivos:** Facilitan el seguimiento de cambios.
- **Uso de ramas para nuevas características:** Permite desarrollar sin afectar la rama principal.
- **Revisiones de código mediante pull requests:** Fomentan la colaboración y la calidad del código.

## link video: 

 [Git & GitHub Complete Tutorial | Learn Git in 2 hrs | Simplilearn](https://www.youtube.com/watch?v=iv8rSLsi1xo)