import {StyleSheet} from 'react-native';

const white = '#FFFFFF';
const gray = '#E5E5E5';
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: gray,
    padding: 10,
    width: '80%',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
  },
});

export default styles;
