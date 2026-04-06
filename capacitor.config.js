const serverUrl = process.env.CAP_SERVER_URL;

/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'com.eunho.perfectcatch',
  appName: '퍼펙트 캐치',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 500,
      launchAutoHide: true,
      backgroundColor: '#05081B',
      showSpinner: false,
    },
    Purchases: {
      // RevenueCat API keys are set programmatically in purchaseService.setup()
    },
  },
  ...(serverUrl
    ? {
      server: {
        url: serverUrl,
        cleartext: serverUrl.startsWith('http://'),
        allowNavigation: [new URL(serverUrl).host],
      },
    }
    : {}),
};

module.exports = config;
