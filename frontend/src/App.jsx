import Dashboard from "./pages/dashboard";

export default function App() {
  const fakeUserId = import.meta.env.VITE_FAKE_USER_ID; //Simulates a user on the front-end

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-5xl p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Jeffumista . Notes App</h1>
            <p className="text-slate-600 text-sm">
              {" "}
              Express + Mongo + React + Tailwind + Radix Frontend App
            </p>
          </div>
          <div className="text-sm text-slate-600">
            user: <span className="font-mono">{fakeUserId || "anonymous"} </span>
          </div>
        </div>
      </header>
      <main className="py-6">
        <div className="mx-auto max-w-5xl">
          <Dashboard frontendUserId={fakeUserId} />
        </div>
      </main>
    </div>
  );
}
