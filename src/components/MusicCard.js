import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const MusicCard = ({ musica }) => {
  return (
  
    <View style={styles.card}>
      {musica.imagem && (
        <Image source={{ uri: musica.imagem }} style={styles.imagem} />
        )}
        <Text style={styles.titulo}>{musica.titulo}</Text>
        <Text style={styles.artista}>{musica.artista}</Text>
        <TouchableOpacity style={styles.EstiloTextoBotao} onPress={() => Linking.openURL(musica.url)}>
        <Text style={styles.EstiloTextoBotao}>Ouvir</Text>
        </TouchableOpacity>
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

  EstiloTextoBotao: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#FF8DA1',
    borderRadius: 50,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    textAlign: 'center',
  },

  titulo: { fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  artista: { fontSize: 14, marginBottom: 5, textAlign: 'center' },
});
