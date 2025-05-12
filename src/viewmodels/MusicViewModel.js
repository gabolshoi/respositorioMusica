import { useState } from 'react';
import { buscarMusicas } from '../services/musicService';

export const useMusicViewModel = () => {
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const realizarBusca = async () => {
    setCarregando(true);
    const encontrados = await buscarMusicas(busca);
    setResultados(encontrados);
    setCarregando(false);
  };

  return { busca, setBusca, resultados, realizarBusca, carregando };
};
