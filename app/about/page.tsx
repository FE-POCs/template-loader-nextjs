import { Suspense } from "react";
import getDynamicComponentForRoleNPage from "../dynamicComponentExport";

function DefaultAbout() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className={`mb-3 mt-20 text-2xl font-semibold`}>
        Welcome default about
      </h2>
    </main>
  );
}

export default async function About() {
  const ActualAbout = await getDynamicComponentForRoleNPage("about");
  return (
    <Suspense fallback={<DefaultAbout />}>
      <ActualAbout />
    </Suspense>
  );
}
