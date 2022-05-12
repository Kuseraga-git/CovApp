import { StyleSheet} from 'react-native';
import { View } from 'react-native-web';

const Separator = () => (
	<View style={Styles.separator} />
  );

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
  title: {
      textAlign: 'center',
      marginVertical: 8,
  },
  homeButton: {
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 8,
      height: '30%',
  },
  separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Separator;