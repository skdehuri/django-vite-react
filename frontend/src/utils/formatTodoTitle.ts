export function formatTodoTitle(title: string): string {
  return title.trim().replace(/\s+/g, ' ')
}
