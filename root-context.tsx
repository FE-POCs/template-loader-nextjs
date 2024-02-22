import { createContext } from "react";

export const rootContext = createContext(null as any);

async function getRolesConfig() {
  const data = await fetch("http://localhost:8000/api/templates/admin");
  return await data.json();
}

export default async function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const roleInfo = await getRolesConfig();
  return (
    <rootContext.Provider value={roleInfo}>{children}</rootContext.Provider>
  );
}
