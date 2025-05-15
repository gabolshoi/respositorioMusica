
import { View, TextInput, FlatList, ActivityIndicator, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useMusicViewModel } from '../viewmodels/MusicViewModel';
import { MusicCard } from '../components/MusicCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function App() {
  const route = useRoute();
  const navigation = useNavigation();
  const { busca, setBusca, resultados, realizarBusca, carregando } = useMusicViewModel();
  const [favoritos, setFavoritos] = useState([]);
  const usuario = route.params?.usuario || '';

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const favoritosSalvos = await AsyncStorage.getItem('favoritos_' + usuario);
        if (favoritosSalvos) {
          setFavoritos(JSON.parse(favoritosSalvos));
        }
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    }
    carregarFavoritos();
  }, [usuario]);

  const gerarIdUnico = (musica) => {
    return `${musica.titulo}_${musica.artista}_${musica.url}`.replace(/\s+/g, '_');
  };

  const toggleFavorito = async (musica) => {
    try {
      let musicaComId = { ...musica };
      if (!musicaComId.id) {
        musicaComId.id = gerarIdUnico(musica);
      }

      let novosFavoritos = [...favoritos];
      const index = novosFavoritos.findIndex((fav) => fav.id === musicaComId.id);
      if (index >= 0) {
        novosFavoritos.splice(index, 1);
      } else {
        novosFavoritos.push(musicaComId); 
      }
      setFavoritos(novosFavoritos);
      await AsyncStorage.setItem('favoritos_' + usuario, JSON.stringify(novosFavoritos));
    } catch (error) {
      console.error('Erro ao atualizar favoritos:', error);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/51/33/75/5133754804ea8c3069ae0fdf4fee9aa8.jpg' }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Buscar música ou artista"
          value={busca}
          onChangeText={setBusca}
          onSubmitEditing={realizarBusca}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.botaoFavoritos}
          onPress={() => navigation.navigate('Favorite', { usuario })}
        >
          <Text style={styles.textoBotao}>Ver Favoritos</Text>
        </TouchableOpacity>
        {carregando ? (
          <ActivityIndicator size="large" color="#800080" />
        ) : (
          <FlatList
            data={resultados}
            keyExtractor={(item, index) => {
              if (!item.id) {
                return gerarIdUnico(item);
              }
              return item.id.toString();
            }}
            renderItem={({ item }) => {
              let itemComId = { ...item };
              if (!itemComId.id) {
                itemComId.id = gerarIdUnico(item);
              }
              return (
                <View style={styles.itemContainer}>
                  <MusicCard
                    musica={itemComId}
                    onFavoritoPress={toggleFavorito}
                    isFavorito={favoritos.some((fav) => fav.id === itemComId.id)}
                  />
                </View>
              );
            }}
            style={styles.flatList}
            contentContainerStyle={styles.flatListContent}
            extraData={favoritos} 
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50, flex: 1 },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    marginBottom: 10,
  },
  botaoFavoritos: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
