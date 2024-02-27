import { Suspense } from "react";
import getDynamicComponentForRoleNPage from "../dynamicComponentExport";

function DefaultAdmin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className={`mb-3 mt-20 text-2xl font-semibold`}>
        This is default admin page
      </h2>
    </main>
  );
}

export default async function Admin() {
  const AdminTemplate = await getDynamicComponentForRoleNPage("sub-template1");
  return (
    <Suspense fallback={<DefaultAdmin />}>
      <AdminTemplate />
    </Suspense>
  );
}
