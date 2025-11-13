import { sleep } from "workflow";

export async function testWorkflow() {
  "use workflow";

  console.log("🚀 Workflow started");

  const step1Result = await stepOne();
  console.log("✅ Step 1 complete:", step1Result);

  await sleep("5s");

  const step2Result = await stepTwo();
  console.log("✅ Step 2 complete:", step2Result);

  await sleep("5s");

  const step3Result = await stepThree();
  console.log("✅ Step 3 complete:", step3Result);

  console.log("🎉 Workflow finished");

  return {
    success: true,
    results: [step1Result, step2Result, step3Result],
  };
}

async function stepOne() {
  "use step";
  console.log("🔵 Step 1: Processing...");
  return {
    step: 1,
    message: "First step completed",
    timestamp: new Date().toISOString(),
  };
}

async function stepTwo() {
  "use step";
  console.log("🟢 Step 2: Processing...");
  return {
    step: 2,
    message: "Second step completed",
    timestamp: new Date().toISOString(),
  };
}

async function stepThree() {
  "use step";
  console.log("🟣 Step 3: Processing...");
  return {
    step: 3,
    message: "Third step completed",
    timestamp: new Date().toISOString(),
  };
}
