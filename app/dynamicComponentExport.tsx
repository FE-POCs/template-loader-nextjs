import { getRolePageConfig } from "@/api";
import dynamic from "next/dynamic";

export default async function getDynamicComponentForRoleNPage(
  roleId: number,
  page: string
) {
  const pageObj = await getRolePageConfig(roleId, page);
  const path = `./components/${pageObj.path}`;
  const PathComponent = dynamic(() => import(`${path}`));
  return PathComponent;
}
