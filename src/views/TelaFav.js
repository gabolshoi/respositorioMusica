
import { View, FlatList, ActivityIndicator, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { MusicCard } from '../components/MusicCard';

export default function TelaFav() {
  const navigation = useNavigation();
  const route = useRoute();
  const [favoritos, setFavoritos] = useState([]);
  const [carregando, setCarregando] = useState(true);

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
      } finally {
        setCarregando(false);
      }
    }
    carregarFavoritos();
  }, [usuario]);

  const removerFavorito = async (musicaId) => {
    try {
      const novosFavoritos = favoritos.filter((fav) => fav.id !== musicaId);
      setFavoritos(novosFavoritos);
      await AsyncStorage.setItem('favoritos_' + usuario, JSON.stringify(novosFavoritos));
    } catch (error) {
      console.error('Erro ao remover favorito:', error);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/51/33/75/5133754804ea8c3069ae0fdf4fee9aa8.jpg' }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Músicas Favoritas</Text>
        {carregando ? (
          <ActivityIndicator size="large" color="#800080" />
        ) : favoritos.length === 0 ? (
          <Text style={styles.textoVazio}>Nenhuma música favoritada.</Text>
        ) : (
          <FlatList
            data={favoritos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <MusicCard musica={item} />
                <TouchableOpacity
                  style={styles.botaoRemover}
                  onPress={() => removerFavorito(item.id)}
                >
                  <Text style={styles.textoBotao}>Remover</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate('Home', { usuario })}
        >
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginBottom: 20,
  },
  textoVazio: {
    fontSize: 18,
    color: 'purple',
    textAlign: 'center',
    marginTop: 20,
  },
  itemContainer: {
    marginBottom: 10,
  },
  botaoRemover: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  botaoVoltar: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});