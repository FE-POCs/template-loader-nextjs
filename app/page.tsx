import { getRolePageConfig } from "@/api";
import dynamic from "next/dynamic";

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
  const home = await getRolePageConfig(3, "home");
  const path = `./components/${home.path}`;
  console.log("home test ==> ", path);
  const ActualHome = dynamic(() => import(`${path}`), {
    loading: () => <DefaultHome />,
  });
  return <ActualHome />;
}
