declare module "vue3-marquee" {
  interface MarqueeProps {
    direction?: "normal" | "reverse";
    duration?: number;
    delay?: number;
    loop?: number;
    clone?: boolean;
    gradient?: boolean;
    gradientColor?: any;
    gradientWidth?: string;
    pauseOnHover?: boolean;
    pauseOnClick?: boolean;
  }
}

export {};
