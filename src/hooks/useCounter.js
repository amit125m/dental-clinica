import { useEffect, useRef, useState } from 'react'

export function useCounter(target, start, duration = 1400) {
  const [value, setValue] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const isFloat = target % 1 !== 0

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      setValue(isFloat ? Math.round(current * 10) / 10 : Math.round(current))
      if (progress < 1) raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [start, target, duration])

  return value
}
