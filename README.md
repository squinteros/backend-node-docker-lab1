## Docker Compose
Laboratorio 1 - Mi stack en docker compose

Tuve problemas con la creacion de usuario, se utilizo alternativamente 
Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"nombre":"Sebastian Quinteros", "edad":28}'

pero sin resultados
Invoke-WebRequest : Se ha terminado la conexión: La conexión ha terminado de forma inesperada.
En línea: 1 Carácter: 1
+ Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Head ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand

    

1.  **Configurar variables**
    .env:
    
    ```
    DB_HOST=db
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=password123
    DB_DATABASE=backend_db
    ```

2.  **Levantar los contenedores:**
    
    docker-compose up --build -d

3.  **API:**
    `http://localhost:3000`

    * **Crear un usuario**
      `curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"nombre\":\"Sebastian\", \"edad\":28}"`

    * **Listar usuarios**
      `curl http://localhost:3000/users`



