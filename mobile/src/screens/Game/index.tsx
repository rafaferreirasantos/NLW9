import React, { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { styles } from './styles';
import { GameParams } from "../../@types/navigation";

import logo from '../../assets/logo-nlw-esports.png'

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')

  function handleBackButton() {
    navigation.goBack();
  }
  function getDiscordUser(adsId: string) {
    fetch(`http://192.168.100.20:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord))
  }

  useEffect(() => {
    fetch(`http://192.168.100.20:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleBackButton}
          >
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
              style={styles.left} />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />
        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          horizontal
          data={duos}
          keyExtractor={item => item.id}
          renderItem={
            (({ item }) => (
              <DuoCard onConnect={() => { getDiscordUser(item.id) }} data={item} />
            ))
          }
          style={styles.containerList}
          contentContainerStyle={duos.length == 0 ? styles.emptyListContent : styles.contentList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />
        <DuoMatch discord={discordDuoSelected} visible={discordDuoSelected.length > 0} onClose={() => setDiscordDuoSelected('')} />
      </SafeAreaView>
    </Background>
  );
}