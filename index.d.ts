declare module 'react-react-native-not-rapid-click' {
    export function useDebounceFunction(fn: Function, delay: number): (...args: any[]) => void;
  }
  