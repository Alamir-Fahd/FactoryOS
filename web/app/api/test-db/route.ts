import { NextResponse } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await getMongoClient();
    const db = client.db("factory_db");
    
    // The "Ping" command checks if the server is responsive
    await db.command({ ping: 1 });
    
    return NextResponse.json({ 
      status: "Online", 
      message: "Database Handshake Successful!",
      database: "factory_db"
    });
  } catch (e) {
    console.error("Database connection error:", e);
    return NextResponse.json({ 
      status: "Offline", 
      error: "Could not connect to MongoDB. Check your .env and Docker logs." 
    }, { status: 500 });
  }
}
