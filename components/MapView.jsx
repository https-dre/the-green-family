import { GOOGLE_MAPS_API_KEY } from '@env';
import MapView from 'react-native-maps';

const MyMap = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      apiKey={GOOGLE_MAPS_API_KEY}  // Aqui você usa a chave do .env
      initialRegion={{
        latitude: -23.550520,
        longitude: -46.633308,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};
