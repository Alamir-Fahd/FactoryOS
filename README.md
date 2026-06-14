# FactoryOS

FactoryOS is a factory operations starter built with Next.js, MongoDB, and a FastAPI service for AI and forecasting workflows.

## Quick Start

1. Clone the repository.
2. Copy `.env.example` to `.env`.
3. Add your `DEEPSEEK_API_KEY` to `.env`.
4. Run `docker-compose up --build`.

## Services

- Frontend: [http://localhost:3000](http://localhost:3000)
- MongoDB GUI: [http://localhost:8081](http://localhost:8081)
- Database check: [http://localhost:3000/api/test-db](http://localhost:3000/api/test-db)
- FastAPI health: [http://localhost:8000/health](http://localhost:8000/health)
- FastAPI docs: [http://localhost:8000/docs](http://localhost:8000/docs)
- Next.js forecast proxy: `POST http://localhost:3000/api/forecast`

## Example Forecast Request

```json
{
  "factory_data": {
    "line": "A1",
    "monthlyRevenue": 125000,
    "utilizationRate": 0.84
  }
}
```

## Project Structure

- `/web`: Next.js application and API proxy routes.
- `/ai-logic`: FastAPI app and Python forecasting logic.
- `/infra`: Dockerfiles and infrastructure configuration.

## Contribution Rules

1. Never push directly to `main`.
2. Open a pull request for all code changes.
3. Never commit `.env` or secret keys.
