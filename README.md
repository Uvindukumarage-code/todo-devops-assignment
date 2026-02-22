# Advanced Git &amp; DevOps Assignment 
 todo-devops-assignment


# Group Members
ITBNM-2313-0043 - Uvindu Kumarage<br>
ITBNM-2313-0046 - U.A Manula Maduranga<br>
ITBNM-2313-0051 - S.M.K Mihiran

# Role Assignments & Individual contributions
Repository creation, branch setup & CI/CD Pipeline (GitHub Actions + Netlify Deployment) <br>- Uvindu Kumarage <br><br>
UI Layout (HTML & CSS) <br>- Manula Maduranga <br><br>
JavaScript Logic (Add/Filter/Delete tasks) <br>- S.M.K Mihiran <br><br>
Pull Requests & Merge Conflict Resolution <br>- All Members <br>

# Live Deployment (CD)
Netlify automatically deploys the website every time the develop branch receives new commits.

# Build status badges
![CI Status](https://github.com/Uvindukumarage-code/todo-devops-assignment/actions/workflows/ci.yml/badge.svg)


# Live URL
https://todo-devops-assignment-nine.vercel.app


# Docker Containerization
This project has been containerised using Docker to ensure consistent deployment across development and production environments. The application is served using an Nginx web server inside a lightweight Alpine-based container.<br>
The containerised version provides identical functionality to the original deployment while improving portability and environment consistency.

# Architecture
The application uses a single-container architecture because it is a static frontend application that does not require a backend service or database.
Base Image: nginx:alpine<br>
Web Server: Nginx<br>
Port Exposure: 80 (mapped to 3000 on host)<br><br>
Health Check: Enabled for service reliability<br>
This approach ensures,<br> 
Lightweight image size<br>
Reduced attack surface<br>
Fast startup time<br>
Portability across environments

# Image Optimization
The Alpine-based Nginx image was selected to reduce image size and improve performance. Default Nginx files are removed during build to minimise unnecessary content inside the container.

# Security Considerations

Minimal base image (Alpine Linux)<br>
Limited exposed ports<br>
Static file serving only<br>
No backend attack surface