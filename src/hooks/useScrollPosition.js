import { useState, useEffect } from 'react'
import { throttle } from 'underscore'
export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(function() {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 200)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 返回滚动位置
  return {scrollX, scrollY}
}
