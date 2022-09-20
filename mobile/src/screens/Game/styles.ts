import { StyleSheet } from 'react-native';
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 28,
    justifyContent: 'space-between',
  },
  logo: {
    width: 72,
    height: 40
  },
  left: {
    padding: 4,
  },
  right: {
    width: 28,
    height: 28,
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32
  },
  containerList: {
    width: '100%'
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start"
  },
  emptyList: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    translateY: -80
  }
});