// biome-ignore lint/suspicious/noExplicitAny: generic wrapper, accepts any function signature
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCall = 0
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return func(...args)
  }
}
