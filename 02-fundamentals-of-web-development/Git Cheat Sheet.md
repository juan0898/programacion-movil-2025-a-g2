# Git y GitHub para Contribuidores de Kubernetes

## Introducción

Este curso de IBM SkillsBuild está diseñado para desarrolladores interesados en contribuir al proyecto Kubernetes. Proporciona una comprensión profunda de Git y GitHub, herramientas esenciales para el control de versiones y la colaboración en proyectos de desarrollo de software de código abierto.

## Objetivos del Curso

- Comprender el flujo de trabajo de Git y GitHub en el contexto de contribuciones a Kubernetes.
- Aprender a clonar, bifurcar y sincronizar repositorios.
- Gestionar ramas y resolver conflictos de fusión.
- Crear y revisar pull requests de manera efectiva.
- Seguir las mejores prácticas para contribuir a proyectos de código abierto.

## Contenido del Curso

### 1. Configuración Inicial

- **Instalar Git:** Descargar desde el sitio oficial: [https://git-scm.com/](https://git-scm.com/)
- **Configurar Git:**
  - Establecer el nombre de usuario: `git config --global user.name "Tu Nombre"`
  - Establecer el correo electrónico: `git config --global user.email "tuemail@example.com"`
  - Verificar la configuración: `git config --list`

### 2. Flujo de Trabajo con Git y GitHub

- **Clonar un repositorio:** `git clone https://github.com/usuario/repositorio.git`
- **Crear y cambiar a una nueva rama:** `git checkout -b nombre_rama`
- **Agregar y confirmar cambios:**
  - `git add archivo.txt`
  - `git commit -m "Mensaje del commit"`
- **Sincronizar con el repositorio remoto:**
  - `git fetch upstream`
  - `git rebase upstream/main`
- **Subir cambios al repositorio remoto:** `git push origin nombre_rama`

### 3. Contribuir a Kubernetes

- **Fork del repositorio oficial de Kubernetes.**
- **Crear una rama para la nueva característica o corrección.**
- **Realizar cambios y confirmar los commits.**
- **Sincronizar con el repositorio principal para evitar conflictos.**
- **Crear una pull request detallada y seguir las guías de contribución del proyecto.**

## Buenas Prácticas

- **Realizar commits frecuentes y descriptivos:** Facilita el seguimiento de cambios y la revisión del código.
- **Utilizar ramas para nuevas características o correcciones:** Mantiene la rama principal estable.
- **Sincronizar regularmente con el repositorio principal:** Evita conflictos y mantiene el trabajo actualizado.
- **Participar en las revisiones de código:** Fomenta la colaboración y mejora la calidad del código.

## Link
[Git y GitHub para Contribuidores de Kubernetes - IBM SkillsBuild](https://skills.yourlearning.ibm.com/activity/URL-DB1266FDC1E1?channelId=CNL_LCB_1616516409884&channelNavigation=true)
