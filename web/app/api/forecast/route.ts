import { NextRequest, NextResponse } from 'next/server';

const fastApiBaseUrl = process.env.FASTAPI_URL || 'http://localhost:8000';

export async function GET() {
  try {
    const response = await fetch(`${fastApiBaseUrl}/health`, {
      cache: 'no-store',
    });
    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('FastAPI health check failed:', error);
    return NextResponse.json(
      {
        status: 'offline',
        error: 'Could not reach the FastAPI service.',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await fetch(`${fastApiBaseUrl}/forecast`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });
    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('FastAPI forecast request failed:', error);
    return NextResponse.json(
      {
        "status": "error",
        "error": "Forecast request could not be completed."
      },
      { status: 500 }
    );
  }
}
