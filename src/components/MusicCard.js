import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const MusicCard = ({ musica, onFavoritoPress, isFavorito }) => {
  return (
    <View style={styles.card}>
      {musica.imagem && (
        <Image source={{ uri: musica.imagem }} style={styles.imagem} />
      )}
      <Text style={styles.titulo}>{musica.titulo}</Text>
      <Text style={styles.artista}>{musica.artista}</Text>
      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={[styles.EstiloTextoBotao, styles.botaoOuvir]}
          onPress={() => Linking.openURL(musica.url)}
        >
          <Text style={styles.textoBotao}>Ouvir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.EstiloTextoBotao, styles.botaoFavorito]}
          onPress={() => onFavoritoPress(musica)}
        >
          <Text style={styles.textoBotao}>
            {isFavorito ? 'Remover Favorito' : 'Adicionar aos Favoritos'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 5,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  EstiloTextoBotao: {
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoOuvir: {
    backgroundColor: '#FF8DA1',
    flex: 1,
    marginRight: 5,
  },
  botaoFavorito: {
    backgroundColor: '#FF69B4',
    flex: 1,
    marginLeft: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  artista: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
});