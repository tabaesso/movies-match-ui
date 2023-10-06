import { useState, useEffect } from 'react';
import { EventTypes } from '../enums/EventTypes';

interface SocketProps {
  sessionId: string;
  userId: string;
}

const useSocket = ({ sessionId, userId }: SocketProps) => {
  const socketURL = `${import.meta.env.VITE_WS_URL}/?sessionId=${sessionId}&userId=${userId}`;

  const [socket, setSocket] = useState<WebSocket | null>(null);

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
      const receivedData = event.data;
      console.log(event);
    };

    // Fechar a conexão do WebSocket quando o componente desmontar
    return () => {
      socketInstance.close();
    };
  }, []);

  // const listenMessage = function<T>(event: EventTypes, callback: (data: T) => void) {
  //   if (socket && socket.readyState === WebSocket.OPEN) {
  //     socket.addEventListener('message', (event) => {
  //       const data = JSON.parse(event.data);
  //       if (data.event === event) {
  //         callback(data);
  //       }
  //     });
  //   }
  // };

  const sendMessage = function<T>(event: EventTypes, data: T) {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ event, data }));
    }
  };

  return { socket, sendMessage };
};

export default useSocket;