declare module 'aos' {
    export function init(options?: AOSOptions): void;
    export function refresh(): void;
    export function refreshHard(): void;
    export function start(): void;
  
    interface AOSOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  }
  