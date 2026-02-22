# Advanced Git &amp; DevOps Assignment 
 todo-devops-assignment


## Group Members
ITBNM-2313-0043 - Uvindu Kumarage<br>
ITBNM-2313-0046 - U.A Manula Maduranga<br>
ITBNM-2313-0051 - S.M.K Mihiran

## Role Assignments & Individual contributions
Repository creation, branch setup & CI/CD Pipeline (GitHub Actions + Vercel Deployment) <br>- Uvindu Kumarage <br><br>
UI Layout (HTML & CSS) <br>- Manula Maduranga <br><br>
JavaScript Logic (Add/Filter/Delete tasks) <br>- S.M.K Mihiran <br><br>
Pull Requests & Merge Conflict Resolution <br>- All Members <br>

## Live Deployment (CD)
Vercel automatically deploys the website every time the develop branch receives new commits.

## Build status badges
![CI Status](https://github.com/Uvindukumarage-code/todo-devops-assignment/actions/workflows/ci.yml/badge.svg)


## Live URL
https://todo-devops-assignment-nine.vercel.app
<br><br><br><br><br><br>

# Docker Containerization

## Overview

This project has been containerised using Docker to ensure consistent deployment across development and production environments. The application is served using an Nginx web server within a lightweight Alpine-based container.

The containerised version provides identical functionality to the original deployment while improving portability, consistency, and environment isolation.



## Architecture

The application adopts a single-container architecture. Since the project is a static frontend application, it does not require a backend service or database layer. Therefore, separating services into multiple containers would introduce unnecessary complexity.

- Base Image: nginx:alpine  
- Web Server: Nginx  
- Exposed Port: 80 (mapped to 3000 on the host machine)  
- Health Check: Enabled to monitor service availability  

This architectural decision ensures

- Lightweight image size  
- Reduced attack surface  
- Faster startup time  
- Improved portability across environments  



## Image Optimisation

The `nginx:alpine` base image was selected to minimise image size and improve efficiency. Default Nginx static files are removed during the build process to prevent unnecessary content from remaining inside the container, thereby reducing potential security exposure.



## Security Considerations

The container configuration incorporates the following security practices:

- Use of a minimal Alpine-based image  
- Limited exposed ports  
- Static file serving only  
- No backend services or database endpoints exposed  

These measures reduce the overall attack surface and improve container security.
