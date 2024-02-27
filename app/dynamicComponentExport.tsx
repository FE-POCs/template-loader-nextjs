import { getRolePageConfig } from "@/api";
import dynamic from "next/dynamic";

export const userRoleId = 2;

export default async function getDynamicComponentForRoleNPage(page: string) {
  const pageObj = await getRolePageConfig(userRoleId, page);
  const path = `./templates/${pageObj.activeTemplate}/${pageObj.path}`;
  const PathComponent = dynamic(() => import(`${path}`));
  return PathComponent;
}
