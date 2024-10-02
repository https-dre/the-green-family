import Constants from "expo-constants"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const { GOOGLE_MAPS_API_KEY } = Constants.manifest2

export const MyMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        apiKey={String(GOOGLE_MAPS_API_KEY)}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1, width: "100%", height: "100%" }}
        initialRegion={{
          latitude: -23.550520,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
