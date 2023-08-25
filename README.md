# ToDoApp

## Descripción

ToDoApp es una aplicación de gestión de notas que te permite crear anotaciones, marcarlas como completadas y configurar recordatorios para tareas importantes.

## Características Clave

- Creación y visualización de anotaciones.
- Manejo de recordatorios para tareas.
- Marcar anotaciones como completadas.

## Instalación

1. Ejecuta el siguiente comando para instalar las dependencias:

```cmd
npm install
```

2. Crea un archivo `.env` en la raíz del proyecto y configura los parámetros especificados en el archivo `.env.example`.

3. Inicia el servidor de la API con el siguiente comando:

```cmd
npm run start
```


## Uso

ToDoApp es una herramienta sencilla pero poderosa para organizar tus tareas y recordatorios. Simplemente crea anotaciones para tus tareas pendientes y configura recordatorios para las tareas importantes que no deseas olvidar.

## Endpoints

### Obtener información de usuarios

- **GET /users**: Obtiene una lista de usuarios registrados.
- **GET /users/:id**: Obtiene los detalles de un usuario específico.

### Crear nuevos usuarios

- **POST /users**: Crea un nuevo usuario.

### Obtener información de tareas

- **GET /tasks**: Obtiene una lista de todas las tareas disponibles.
- **GET /tasks/:id**: Obtiene los detalles de una tarea específica.

### Crear nuevas tareas

- **POST /tasks**: Crea una nueva tarea.

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar los parámetros requeridos en un archivo `.env` siguiendo el formato del archivo `.env.example`.

## Contribuciones

Actualmente, no estamos aceptando contribuciones externas para este proyecto, ya que es un proyecto universitario al que solo tienen acceso las personas pertenecientes al grupo de trabajo.

## Créditos

- Joven y prometedor desarrolador Rafael de Jesús

## Licencia

Este proyecto no tiene una licencia específica en este momento. Por favor, consulta el archivo [LICENSE](LICENSE) una vez que esté disponible.

## Contacto

Si tienes alguna pregunta o comentario, puedes dejarla en un issue.

```

- lighnio
```

