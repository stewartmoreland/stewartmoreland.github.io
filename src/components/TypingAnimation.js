import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function TypingAnimation(props) {
  const { text, interval, style } = props
  const [animationProps, set] = useSpring(() => ({ width: 0 }))

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      set({ width: (i / text.length) * 100 })
      i++
      if (i > text.length) {
        clearInterval(timer)
      }
    }, interval)
  }, [interval, set, text])

  return (
    <animated.div style={{ ...style, ...animationProps}}>
      {text}
    </animated.div>
  )
}
