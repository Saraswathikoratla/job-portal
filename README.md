# Job Portal

A full-stack Job Portal application built using Next.js and Spring Boot. The platform allows candidates to browse and apply for jobs, while employers can create and manage job postings.

## Features

### Candidate Features

* User registration and login
* Browse available jobs
* Search jobs by title and location
* View detailed job descriptions
* Apply for jobs

### Employer Features

* Employer registration and login
* Create new job postings
* Manage job listings

### Technical Features

* JWT-based authentication
* Role-based authorization
* RESTful APIs
* CI/CD pipeline using GitHub Actions
* Frontend deployment with Vercel
* Backend deployment with Render
* PostgreSQL database integration

---

## Tech Stack

### Frontend

* Next.js
* TypeScript
* React
* Tailwind CSS
* Axios

### Backend

* Java 17
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* Maven

### Database

* PostgreSQL

### DevOps

* GitHub Actions
* Vercel
* Render

---

## Project Structure

```text
job-portal/
├── job-board-frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── jobboard/
│   ├── src/
│   ├── pom.xml
│   └── mvnw
│
└── .github/
    └── workflows/
        └── ci-cd.yml
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Jobs

```http
GET    /api/jobs
GET    /api/jobs/{id}
POST   /api/jobs
PUT    /api/jobs/{id}
DELETE /api/jobs/{id}
```

### Applications

```http
POST /api/applications
GET  /api/applications
```

---

## Environment Variables

### Backend

Create an `.env` file or configure environment variables:

```env
DATABASE_URL=jdbc:postgresql://dpg-d9cr19gjs32c73e1o640-a:5432/jobboard_yos2
DB_USERNAME=jobboard_yos2_user
DB_PASSWORD=QsEEDTAniSIR6P2sm9cMZUborjwn0xLl
JWT_SECRET=mysecretkeymysecretkeymysecretkeymysecretkey
```

### Frontend

```env
NEXT_PUBLIC_API_URL=https://job-portal-1-re7b.onrender.com
```

---

## Local Setup

### Clone the repository

```bash
https://github.com/Saraswathikoratla/job-portal.git
cd job-portal
```

### Run the backend

```bash
cd jobboard
./mvnw spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Run the frontend

```bash
cd job-board-frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment.

### Pipeline Steps

* Checkout source code
* Build frontend
* Build backend
* Run tests
* Package application
* Deploy frontend to Vercel
* Deploy backend to Render

---

## Deployment

### Frontend

Deployed on Vercel.

### Backend

Deployed on Render.

### Database

Hosted on PostgreSQL.

---

## Future Enhancements

* Resume upload
* Email notifications
* Job bookmarking
* Admin dashboard
* Advanced filtering
* Profile management

---

## Author

**Saraswathi Koratla**

* GitHub: https://github.com/Saraswathikoratla/job-portal

