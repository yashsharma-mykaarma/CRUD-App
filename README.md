# CRUD App

A full-stack customer CRUD application built with Spring Boot, MySQL, and Angular.

The backend exposes a REST API for managing customers. The Angular frontend consumes that API and provides a simple table with add, edit, and delete actions.

## Tech Stack

- Java 17
- Spring Boot 4
- Spring Data JPA
- MySQL
- Angular 21
- Angular Material
- npm

## Project Structure

```text
.
├── src/                    # Spring Boot backend
│   ├── main/java/com/example/crud
│   │   ├── controller      # REST controllers
│   │   ├── entity          # JPA entities
│   │   └── repository      # Spring Data repositories
│   └── main/resources
│       └── application.properties
├── angular-crud-app/       # Angular frontend
├── pom.xml                 # Maven project file
└── mvnw                    # Maven wrapper
```

## Prerequisites

Install these before running the project:

- Java 17 or newer
- MySQL
- Node.js and npm

## Database Setup

Create a MySQL database named `crud_app`:

```sql
CREATE DATABASE crud_app;
```

The backend currently uses these database settings:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/crud_app
spring.datasource.username=root
spring.datasource.password=
```

If your MySQL username or password is different, update:

```text
src/main/resources/application.properties
```

Spring Boot is configured with:

```properties
spring.jpa.hibernate.ddl-auto=update
```

So the `Customer` table will be created or updated automatically when the backend starts.

## Run the Backend

From the project root:

```bash
./mvnw spring-boot:run
```

The backend runs at:

```text
http://localhost:8080
```

## Run the Frontend

From the Angular app directory:

```bash
cd angular-crud-app
npm install
npm start
```

The frontend runs at:

```text
http://localhost:4200
```

The backend allows requests from `http://localhost:4200`.

## API Endpoints

Base URL:

```text
http://localhost:8080/api/customers
```

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/customers` | Get all customers |
| `POST` | `/api/customers` | Create a customer |
| `PUT` | `/api/customers/{id}` | Update a customer |
| `DELETE` | `/api/customers/{id}` | Delete a customer |

Example customer JSON:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Build and Test

Build the backend:

```bash
./mvnw clean package
```

Run backend tests:

```bash
./mvnw test
```

Build the frontend:

```bash
cd angular-crud-app
npm run build
```

Run frontend tests:

```bash
cd angular-crud-app
npm test
```

## Git Note

If `angular-crud-app` appears on GitHub as a link instead of a normal folder, it was added as a nested Git repository.

To track the Angular app files inside this repository instead:

```bash
git rm --cached angular-crud-app
rm -rf angular-crud-app/.git
git add angular-crud-app
git commit -m "Track Angular app files"
```

Only remove `angular-crud-app/.git` if you do not need the Angular app to keep its own separate Git history.
