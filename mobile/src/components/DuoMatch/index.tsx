import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import * as Clipboard from 'expo-clipboard';


import { styles } from './styles';
import { THEME } from "../../theme";
import { Heading } from "../Heading";

interface Props extends ModalProps {
  discord: string
  onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopying, setIsCopying] = useState(false);
  async function handleCopyDiscordUser() {
    setIsCopying(true)
    await Clipboard.setStringAsync(discord);
    Alert.alert('Discord copiado!', 'Usuário do discord copiado na área de transferência.');
    setIsCopying(false)
  }

  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      {...rest}>
      <View style={styles.container}>

        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>
          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />
          <Heading
            style={styles.heading}
            title="Let's play"
            subtitle="Agora é só começar a jogar"
          />
          <Text style={styles.label}>Adicionar no Discord</Text>
          <TouchableOpacity style={styles.discordButton} onPress={handleCopyDiscordUser} disabled={isCopying}>
            <Text style={styles.discord}>{isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}