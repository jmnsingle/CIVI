/* eslint-disable import/no-duplicates */
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/native';

import EmptyList from '../../components/emptyList/EmptyList';
import BubbleButton from '../../components/bubbleButton/BubbleButton';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import ApiClient from '../../services/api';
import { MessageResponse } from '../../services/api/types';

import { Container } from './styles';

const Home = (): JSX.Element => {
  const navigation = useNavigation();

  const [messages, setMessages] = useState<Array<MessageResponse>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleItemPress = (item: MessageResponse) => {
    if (item.is_read) {
      return navigation.navigate('Details' as never, item as never);
    }
    setLoading(true);
    return ApiClient.updateMessage(item.id)
      .then(() => {
        setLoading(false);
        navigation.navigate('Details' as never, item as never);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const serializedMessages = (
    items: Array<MessageResponse>,
  ): Array<MessageResponse> => {
    return items.map(item => {
      return {
        ...item,
        created_at: formatDistance(Number(item.created_at), new Date(), {
          locale: ptBR,
          addSuffix: true,
        }),
      };
    });
  };

  const fetchMessages = useCallback(() => {
    ApiClient.fetchMessages()
      .then(response => {
        setMessages(serializedMessages(response));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const renderItem = ({ item }: { item: MessageResponse }) => {
    return (
      <Card
        isRead={item.is_read}
        detail={item.detail}
        title={item.title}
        subject={item.subject}
        dateTime={item.created_at}
        onPress={() => handleItemPress(item)}
      />
    );
  };

  return (
    <Container>
      <Header title="Mensages" />

      <FlatList
        contentContainerStyle={{ flex: 1 }}
        data={messages}
        keyExtractor={item => item.id}
        extraData={messages}
        renderItem={item => renderItem(item)}
        ListEmptyComponent={<EmptyList title="Sem mensagens no momento" />}
        refreshing={loading}
        onRefresh={fetchMessages}
      />

      <BubbleButton onPress={fetchMessages} />
    </Container>
  );
};

export default Home;
