import { View, TextInput, FlatList, ActivityIndicator, StyleSheet, ImageBackground} from 'react-native';
import { useMusicViewModel } from '../viewmodels/MusicViewModel';
import { MusicCard } from '../components/MusicCard';

export default function App() {
  const { busca, setBusca, resultados, realizarBusca, carregando } = useMusicViewModel();

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/51/33/75/5133754804ea8c3069ae0fdf4fee9aa8.jpg'}}
      style={{ flex: 1 }}
      >
      <View style={styles.container}>
        <TextInput
          placeholder="Buscar música"
          value={busca}
          onChangeText={setBusca}
          onSubmitEditing={realizarBusca}
          style={styles.input}
        />
        {carregando ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={resultados}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <MusicCard musica={item} />}
          />
        )}
      </View>
    </ImageBackground>
  );
}

  const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 50 },
      input: {
       borderWidth: 1,
       borderRadius: 10,
       padding: 10,
       marginBottom: 20,
  },

});