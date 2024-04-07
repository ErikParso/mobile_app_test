import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mobile.app.test',
  appName: 'mobile-app-test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
