export async function getRolePageConfig() {
    const data = await fetch("http://localhost:8000/api/templates/admin/home");
    return await data.json();
  }