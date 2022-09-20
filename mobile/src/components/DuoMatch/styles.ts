import { ThemeProvider } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,

  },
  content: {
    width: 280,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 8,
    padding: 8
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  heading: {
    alignItems: 'center',
    marginTop: 24,
  },
  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 24
  },
  discordButton: {
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 32
  }
});