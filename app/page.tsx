import { getRolePageConfig } from "@/components/api";
import { Suspense, lazy } from "react";

function DefaultHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>Welcome default home</h2>
    </main>
  );
}

export default async function Home() {
  const home = await getRolePageConfig();
  const path = `../${home.path}`;
  console.log("home test ==> ", path);
  const ActualHome = lazy(() => import(path));
  return (
    <Suspense fallback={<DefaultHome />}>
      <ActualHome />
    </Suspense>
  );
}
