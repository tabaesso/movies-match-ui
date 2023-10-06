import { useState, useEffect } from 'react';
import { EventTypes } from '../enums/EventTypes';

interface SocketProps {
  sessionId: string;
  userId: string;
}

export interface SocketData {
  event: EventTypes;
  data: unknown;
}

const useSocket = ({ sessionId, userId }: SocketProps) => {
  const socketURL = `${import.meta.env.VITE_WS_URL}/?sessionId=${sessionId}&userId=${userId}`;

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [receivedData, setReceivedData] = useState<SocketData | null>(null);

  useEffect(() => {
    if (!socketURL) {
      return undefined;
    }

    // Conectar ao servidor WebSocket quando o componente montar
    const socketInstance = new WebSocket(socketURL);
    setSocket(socketInstance);

    socketInstance.onopen = () => {
      console.log('Conectado ao servidor WebSocket');
    };

    socketInstance.onclose = () => {
      console.log('Desconectado do servidor WebSocket');
    };

    socketInstance.onmessage = (event) => {
      const { event: eventType, data } = JSON.parse(event.data);

      setReceivedData({ event: eventType, data});
    };

    // Fechar a conexão do WebSocket quando o componente desmontar
    return () => {
      socketInstance.close();
    };
  }, []);

  const sendMessage = function<T>(event: EventTypes, data: T) {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ event, data }));
    }
  };

  return { socket, sendMessage, receivedData };
};

export default useSocket;