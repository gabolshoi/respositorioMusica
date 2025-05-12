const clientId = '3681b0c5c0dd4d62af6651ff5a7991cf';
const clientSecret = 'c1eef650f043403eb25970f309d858b5';
const authUrl = 'https://accounts.spotify.com/api/token';

export const autenticarSpotify = async () => {
  const authOptions = {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' + btoa(`${clientId}:${clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  };

  const response = await fetch(authUrl, authOptions);
  const data = await response.json();

  return data.access_token;
};
