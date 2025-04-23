# Git y GitHub: Tutorial Completo para Principiantes

##  Introducción

Este tutorial enseña los fundamentos de Git y GitHub desde cero, incluyendo instalación, comandos básicos, manejo de ramas y trabajo colaborativo con GitHub.

# Instalación y Configuración Inicial

- Configurar nombre de usuario
git config --global user.name "Tu Nombre"

- Configurar correo electrónico
git config --global user.email "tuemail@example.com"

- Ver configuración actual
git config --list

##  Iniciar y Administrar un Repositorio

- Crear un repositorio local
git init

- Clonar un repositorio existente
git clone https://github.com/usuario/repositorio.git

- Ver estado del repositorio
git status

- Ver historial de commits
git log

- Ver un log resumido
git log --oneline

- Ver diferencias entre archivos
git diff

## Trabajar con Archivos


- Agregar archivo al área de staging
git add archivo.txt

- Agregar todos los archivos modificados
git add .

- Confirmar cambios con mensaje
git commit -m "Mensaje descriptivo"

- Confirmar cambios con editor por defecto
git commit


## Trabajo con Ramas

- Crear una nueva rama
git branch nombre-rama

- Ver ramas existentes
git branch

- Cambiar a otra rama
git checkout nombre-rama

- Crear y cambiar de rama al mismo tiempo
git checkout -b nombre-rama

- Fusionar ramas
git merge nombre-rama

- Eliminar una rama
git branch -d nombre-rama

## Repositorios Remotos

- Agregar un repositorio remoto
git remote add origin https://github.com/usuario/repositorio.git

- Ver repositorios remotos
git remote -v

- Subir cambios al remoto
git push origin main

- Subir rama actual
git push -u origin nombre-rama

- Traer cambios del remoto
git pull origin main

- Clonar repositorio
git clone https://github.com/usuario/repositorio.git

- Ver ayuda de un comando
git help commit

- Deshacer cambios en el archivo antes del commit
git checkout -- archivo.txt

- Eliminar todos los archivos no registrados
git clean -f

##  Buenas Prácticas

- Usa mensajes claros en los commits.
- Trabajá en ramas para cada feature o fix.
- Hacé pull antes de push para evitar conflictos.
- Usá `.gitignore` para excluir archivos innecesarios.

## Link: 
[Git Tutorial For Beginners 2022 | Simplilearn](https://www.youtube.com/watch?v=eeuNAIZoWRU)