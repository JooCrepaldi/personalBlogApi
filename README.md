# personalBlog_Api
# Personal Blog API

A simple personal blog API built with Node.js, Express and Prisma (SQLite).

Description: Learning project exposing routes to list, create, edit and delete posts. It includes public routes and admin routes protected by a simple query-based check (`admin=true`).

Technologies
- Node.js
- Express
- Prisma (SQLite)

Prerequisites
- Node.js 16+ and npm
- SQLite (optional — the project uses a local database file at `prisma/dev.db`)

Installation
1. Install dependencies:

```bash
npm install
```

2. Generate the Prisma client:

```bash
npx prisma generate
```

3. Apply migrations to create the development database:

```bash
npx prisma migrate dev --name init
```

API Endpoints
- `GET /` → Returns "Hello World!"
- `GET /home` → List all posts
- `GET /home/article/{id}` → Get a post by `id`

- Admin routes (require `?admin=true`):
	- `GET /admin` → List posts (admin)
	- `GET /admin/{id}` → Get a post by `id`
	- `PUT /admin/edit/{id}` → Update a post (send JSON body)
	- `DELETE /admin/delete/{id}` → Delete a post
	- `POST /admin/new` → Create a new post (send JSON body)

Simple auth
Admin routes use a middleware that checks for `admin=true` in the query string. Example:

```bash
curl "http://localhost:3000/admin?admin=true"
```

Important files
- [src/server.js](src/server.js#L1) — route definitions and server startup
- [src/functions.js](src/functions.js#L1) — controller aggregator
- [prisma/schema.prisma](prisma/schema.prisma#L1) — database model

Thank you for checking out this project!