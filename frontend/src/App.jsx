import Dashboard from "./pages/dashboard";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function App() {
  const { user } = useUser();

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
          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </header>
      <main className="py-6">
        <div className="mx-auto max-w-5xl">
          <SignedOut>
            <div className="border rounded-xl bg-white text-center p-6">
              <h2 className="text-lg font-semibold mb-2"> Welcome! </h2>
              <p className="text-slate-600"> Please sign in to continue.</p>
            </div>
          </SignedOut>
          <SignedIn>
            <Dashboard frontendUserId={user?.id} />
          </SignedIn>
        </div>
      </main>
    </div>
  );
}
