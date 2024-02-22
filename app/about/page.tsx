import { getRolePageConfig } from "@/api";
import dynamic from "next/dynamic";

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
  const about = await getRolePageConfig(2, "about");
  const path = `../components/${about.path}`;
  console.log("about test ==> ", path);
  const ActualAbout =
    dynamic(() => import(path), {
      loading: () => <DefaultAbout />,
    }) || DefaultAbout;
  console.log("abt", ActualAbout);
  return <ActualAbout />;
}
