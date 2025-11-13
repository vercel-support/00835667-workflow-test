import { start } from "workflow/api";
import { testWorkflow } from "@/workflows/example";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await start(testWorkflow);
  return NextResponse.json({ message: "🏃‍➡️ Workflow started" });
}
