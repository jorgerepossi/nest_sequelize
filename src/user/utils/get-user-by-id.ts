export function getUserById(id: string) {
  return {
    where: { id },
  };
}
