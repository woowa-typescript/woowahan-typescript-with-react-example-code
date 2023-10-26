declare global {
  interface Window {
    webkit?: {
      messageHandlers?: Record<
        string,
        {
          postMessage?: (parameter: string) => void;
        }
      >;
    };
  }
}
