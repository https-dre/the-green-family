import 'dotenv/config';

export default {
  expo: {
    name: "the-green-family",
    slug: "the-green-family",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/loading-image.png",
      backgroundColor: "#266B0E",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "ios.the.green.family",
      infoPlist: {
        NSLocationWhenInUseUsageDescription: "Precisamos da sua localização para mostrar mapas.",
        NSLocationAlwaysAndWhenInUseUsageDescription: "Precisamos da sua localização para mostrar mapas.",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.dre_dias00.thegreenfamily",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "d69ed53b-720d-4c4e-bec9-6929b0913c59",
      },
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    },
    owner: "dre_dias00",
  },
};
