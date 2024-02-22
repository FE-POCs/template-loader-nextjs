import { getRolePageConfig } from "@/api";
import dynamic from "next/dynamic";

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
  const contact = await getRolePageConfig(3, "contact");
  const path = `../components/${contact.path}`;
  console.log("about test ==> ", path);
  const ActualContact =
    dynamic(() => import(path), {
      loading: () => <DefaultContact />,
    }) || DefaultContact;
  console.log("cnt", ActualContact);
  return <ActualContact />;
}
