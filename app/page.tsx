import { Suspense } from "react";
import getDynamicComponentForRoleNPage from "./dynamicComponentExport";

function DefaultHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className={`mb-3 mt-20 text-2xl font-semibold`}>
        Welcome default home
      </h2>
    </main>
  );
}

export default async function Home() {
  const ActualHome = await getDynamicComponentForRoleNPage(3, "home");
  return (
    <Suspense fallback={<DefaultHome />}>
      <ActualHome />
    </Suspense>
  );
}
