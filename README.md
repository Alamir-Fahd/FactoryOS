# FactoryOS 🏭

Welcome to the FactoryOS core repository. This system is designed to manage factory production lines and many more.

---
## 🚀 Quick Start (For Team Members)
Follow these steps to get your local environment running in under 5 minutes:

1. **Clone the Repository:**
   ```bash
   git clone <your-repo-url>
   cd FactoryOS

2.	**Set Up Your Environment:**
•	Copy the template: cp .env.example .env
•	Open .env and add the DeepSeek API Key.

3. **Ignition (Docker):**
   ```bash
   docker-compose up --build

5. **Verify Systems:**
•	Frontend: http://localhost:3000
•	Database GUI: http://localhost:8081 (Admin/innovera123)
•	API Handshake: http://localhost:3000/api/test-db (Must show "Online").

🛠 **Tech Stack**
•	Framework: Next.js 14 (App Router)
•	Database: MongoDB (Containerized)
•	AI Brain: DeepSeek API
•	Infrastructure: Docker & Docker Compose

📂 **Project Structure**
•	/web: Full-stack Next.js application.
•	/infra: Dockerfiles and server configurations.
•	/ai-logic: Python sandbox for revenue forecasting.
•	/web/lib: Core utilities (e.g., mongodb.ts).

⚖️ **Contribution Rules**
	1.	Branching: Never push to main. Use feat/your-feature-name.
	2.	Pull Requests: All code must be merged via PR and approved.
	3.	Secrets: Never commit your .env. It is strictly protected by .gitignore.
