declare global {
  interface Window {
    deviceId: string | undefined;
    appVersion: string;
  }
}
