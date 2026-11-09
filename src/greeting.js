export function greeting(name) {
  const trimmed = String(name ?? '').trim()
  if (!trimmed) throw new Error('A name is required.')
  return `Hello, ${trimmed}!`
}
