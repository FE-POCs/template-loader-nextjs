import { getRolePageConfig } from "@/components/api";
import { Suspense, lazy } from "react";

function DefaultContact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>Welcome default contact</h2>
    </main>
  );
}

export default async function Contact() {
  const home = await getRolePageConfig();
  const path = `../../${home.path}`;
  console.log("home test ==> ", path);
  const ActualContact = lazy(() => import(path));
  return (
    <Suspense fallback={<DefaultContact />}>
      <ActualContact />
    </Suspense>
  );
}
