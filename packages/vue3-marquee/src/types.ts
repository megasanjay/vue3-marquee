export interface MarqueeProps {
  vertical: boolean
  direction: 'normal' | 'reverse'
  duration: number
  delay: number
  loop: number
  clone: boolean
  animateOnOverflowOnly: boolean
  gradient: boolean
  gradientColor: any
  gradientWidth: string
  gradientLength: string
  pauseOnHover: boolean
  pauseOnClick: boolean
  pause: boolean
}
