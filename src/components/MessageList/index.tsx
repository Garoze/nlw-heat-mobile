import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { io } from 'socket.io-client';

import { api } from '../../services/api';
import { Message, MessageProps } from '../Message';

import { styles } from './styles';

const messagesQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (message) => messagesQueue.push(message));

export const MessageList = () => {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last');
      setCurrentMessages(messagesResponse.data);
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages((prev) => [messagesQueue[0], prev[0], prev[1]]);
        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </ScrollView>
  );
};
