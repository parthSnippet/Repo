import { useEffect, useRef } from 'react'

export const usePerformanceMonitor = (componentName) => {
  const renderStart = useRef(performance.now())

  useEffect(() => {
    const renderEnd = performance.now()
    const renderTime = renderEnd - renderStart.current

    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`)
    }

    // Reset for next render
    renderStart.current = performance.now()
  })

  return null
}