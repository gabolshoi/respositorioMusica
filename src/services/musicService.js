import { autenticarSpotify } from './spotifyAuthService';

export const buscarMusicas = async (busca) => {
  const token = await autenticarSpotify();

  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(busca)}&type=track&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  return data.tracks.items.map((item) => ({
    titulo: item.name,
    artista: item.artists.map((a) => a.name).join(', '),
    url: item.external_urls.spotify,
    imagem: item.album.images[0]?.url,
  
  }));
};
