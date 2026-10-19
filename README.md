# Spring AI Ollama Chat

A full-stack AI chat application built with **Spring Boot, Spring AI, React, and Ollama**. The project explores integrating a locally running Large Language Model (LLM) with a Java backend and a React-based user interface.

## Overview

Spring AI Ollama Chat demonstrates how to build an AI-powered chat application using open-source language models running locally through Ollama. The Spring Boot backend handles communication with the AI model, while the React frontend provides the user interface for interacting with the application.

The project serves as a practical exploration of full-stack AI application development using the Spring ecosystem and local LLM inference.

## Technology Stack

| Component | Technology |
|---|---|
| Backend | Java, Spring Boot |
| AI Integration | Spring AI |
| Language Model Runtime | Ollama |
| Frontend | React |
| Build Tool | Maven |
| Version Control | Git and GitHub |

## Architecture

The application follows a frontend-backend architecture:

```text
┌──────────────────────────┐
│      React Frontend      │
│     User Chat Interface  │
└────────────┬─────────────┘
             │ HTTP Requests
             ▼
┌──────────────────────────┐
│     Spring Boot API      │
│       Chat Controller    │
│       Spring AI          │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│          Ollama          │
│   Locally Running LLM    │
└──────────────────────────┘
```

**Request flow:** The user interacts with the React interface, the frontend sends a request to the Spring Boot backend, Spring AI integrates with Ollama, and the response is returned to the frontend.

## Project Structure

```text
spring-ai-ollama-chat/
├── backend/                  # Spring Boot application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   └── mvnw
│
├── frontend/                 # React application
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

## Prerequisites

Make sure the following tools are installed:

- **Java JDK** — a version compatible with your Spring Boot configuration.
- **Maven** — or use the included Maven Wrapper.
- **Node.js and npm** — for the React frontend.
- **Ollama** — to run the language model locally.
- **Git** — to clone and manage the repository.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/spring-ai-ollama-chat.git
cd spring-ai-ollama-chat
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Set up Ollama

Install Ollama from [ollama.com](https://ollama.com/).

Download a model compatible with your available hardware. For example:

```bash
ollama pull llama3.2
```

Start Ollama if it is not already running:

```bash
ollama serve
```

Verify that the model is available:

```bash
ollama list
```

The example uses `llama3.2`. If your Spring AI configuration specifies a different model, use that model instead.

### 3. Configure and run the backend

Open a terminal:

```bash
cd backend
```

Review `src/main/resources/application.properties` and confirm that the Spring AI Ollama configuration matches your local Ollama endpoint and downloaded model.

A typical configuration looks like this:

```properties
spring.ai.ollama.base-url=http://localhost:11434
spring.ai.ollama.chat.options.model=llama3.2
```

Use the property names and configuration appropriate for your Spring AI version.

Run the application on macOS or Linux:

```bash
./mvnw spring-boot:run
```

On Windows, run:

```bash
mvnw.cmd spring-boot:run
```

Alternatively, run the main Spring Boot application class from IntelliJ IDEA.

### 4. Configure and run the frontend

Open a separate terminal from the repository root:

```bash
cd frontend
npm install
npm start
```

The React development server will display its local URL in the terminal. Open that address in your browser.

Make sure the frontend's API endpoint matches the port and path configured by your Spring Boot backend.

## Configuration

Before running the application, verify the following:

- Ollama is running and the selected model has been downloaded.
- The backend points to the correct Ollama endpoint and model.
- The frontend sends requests to the correct backend API URL.
- Any required CORS configuration allows requests from the frontend development server.

Avoid committing passwords, API keys, private configuration, or other sensitive information to GitHub.

## Learning Objectives

This project explores:

- Integrating Spring AI into a Spring Boot application.
- Connecting Java applications to locally hosted language models.
- Running LLMs through Ollama.
- Building a React frontend that communicates with a backend API.
- Understanding request-response flows in AI-powered applications.
- Organizing a full-stack project in a single Git repository.

## Future Improvements

Potential enhancements include:

- Streaming AI responses for a more interactive chat experience.
- Conversation history and session management.
- Model selection from the user interface.
- Markdown rendering and code syntax highlighting.
- Error handling and loading indicators.
- Persistent conversation storage.
- Authentication and user management.
- Automated backend and frontend tests.
- Docker-based development and deployment.

## Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes with a descriptive message.
4. Open a pull request describing your changes.

## License

No license has been specified yet. Add a `LICENSE` file if you intend to distribute the project under an open-source license.

---

**Built with Spring Boot, Spring AI, React, and Ollama.**
