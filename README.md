# Notes Frontend — Cognito OIDC Sign-In (Vite + React + Tailwind)

This project is the **frontend** for the Notes App. It’s built with **Vite + React**, styled with **Tailwind CSS**, and uses **Amazon Cognito** for secure user authentication through **OIDC (OpenID Connect)**.

---

## 🚀 Overview

This app allows users to:
- Sign in securely using **Cognito Hosted UI**
- Be redirected back to the app after login
- View a minimal authenticated screen
- Sign out cleanly via the Cognito logout endpoint

It’s connected to the backend Notes API (AWS Lambda + API Gateway) for managing notes.

---

## 🧱 Tech Stack

- **Vite + React** — Frontend framework
- **Tailwind CSS** — Styling
- **Amazon Cognito** — Authentication provider (OIDC code flow)
- **react-oidc-context** + **oidc-client-ts** — OIDC libraries for handling tokens
- **JavaScript (ESNext)** — Modern syntax and modules

---


