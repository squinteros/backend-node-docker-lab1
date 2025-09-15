## Docker Compose
Laboratorio 1 - Mi stack en docker compose

1.  **Estructura .env**
    
    ```
    DB_HOST=db
    DB_USER=root
    DB_PASSWORD=password123
    DB_DATABASE=backend_db
    MYSQL_ROOT_PASSWORD=password123
    MYSQL_DATABASE=backend_db
    DB_TYPE=mysql
    ```

2.  **Levantar los contenedores:**
    
    docker-compose up --build -d

3.  **API:**
    `http://localhost:3000`

    * **Crear un usuario**
      `curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"nombre\":\"Sebastian\", \"edad\":28}"`

    * **Listar usuarios**
      `curl http://localhost:3000/users`
