import { waitUntil } from "@vercel/functions";
import { start } from "workflow/api";
import { testWorkflow } from "@/workflows/example";

export default function Home() {
  return (
    <main className="p-4">
      <form
        action={async () => {
          "use server";
          // alternatively `await start(testWorkflow, {});`
          waitUntil(start(testWorkflow, {}));
        }}
      >
        <button
          type="submit"
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:cursor-pointer"
        >
          Start workflow
        </button>
      </form>
    </main>
  );
}
