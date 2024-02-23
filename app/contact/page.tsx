import getDynamicComponentForRoleNPage from "../dynamicComponentExport";
import { Suspense } from "react";

function DefaultContact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className={`mb-3 mt-20 text-2xl font-semibold`}>
        Welcome default contact
      </h2>
    </main>
  );
}

export default async function Contact() {
  const ActualContact = await getDynamicComponentForRoleNPage(1, "contact");
  return (
    <Suspense fallback={<DefaultContact />}>
      <ActualContact />
    </Suspense>
  );
}
