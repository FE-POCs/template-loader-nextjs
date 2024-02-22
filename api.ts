export async function getUser(id=1) {
  const data = await fetch(`http://localhost:8000/api/users/${id}`);
  return await data.json();
}

export async function getRolePageConfig(id = 1, page = 'home') {
    const user: any =  await getUser(id);
    if (user) {
      const data = await fetch(`http://localhost:8000/api/templates/${user.role}/${page}`);
      return await data.json();
    }
  }
