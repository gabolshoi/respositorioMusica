# 🎵 *Spotify Explorer* - *API do Spotify*

Este projeto é uma aplicação mobile desenvolvida com **React Native** que permite explorar músicas, artistas, álbuns e playlists utilizando a **API do Spotify**, além de salvar faixas favoritas.

## ⚙️ Funcionalidades

- **Autenticação com Spotify**: Login seguro com a conta do Spotify via OAuth 2.0 (PKCE).
- **Busca por conteúdo**: Pesquise músicas, artistas, álbuns e playlists.
- **Tela de detalhes**: Visualize capa, nome e artistas.
- **Favoritar faixas**: Marque músicas como favoritas e mantenha uma lista pessoal.
## 🖼️ Navegação entre Telas

1. **Tela de Login**  
   Realiza a autenticação com o Spotify.

2. **Tela de Busca**  
   Campo de pesquisa, resultados listados com nome e imagem.

3. **Tela de Detalhes**  
  Exibe o artista ou faixa, com botão de favoritar e opção de ouvir a música.

4. **Tela de Favoritos**  
   Lista de músicas que o usuário marcou como favoritas.

## 🔧 Tecnologias

- React
- React Native
- Expo
- Axios
- Spotify Web API
- React Navigation
- Async Storage

## 🔑 Configuração da Chave e Autenticação

Este projeto requer uma chave de cliente e redirecionamento registrados no [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

> ⚠️ Atenção: Não exponha sua chave de cliente em repositórios públicos.

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/gabolshoi/respositorioMusica.git

# Acesse a pasta do projeto
cd spotify-explorer

# Instale as dependências
npm install
# ou
yarn install

# Inicie o projeto com Expo
npx expo start
```

## 📌 Requisitos

- Node.js >= 14
- Expo CLI
- Conta de desenvolvedor no Spotify
- Chave da API e URI de redirecionamento configuradas

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com 🎧 por [Gabriela Maciel](https://github.com/gabolshoi)


