import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  title: {
      textAlign: 'center',
      marginVertical: 8,
  },
  fixToText: {
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginHorizontal: 16,
  },
  separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
