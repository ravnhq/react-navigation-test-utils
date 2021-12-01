import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Types';
import * as React from 'react';
import styles from '../../styles/styles';
import {View, Text, Button} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'SecondScreen'>;

const SecondScreen = ({route, navigation}: Props) => {
  const firstParam = route.params.firstParam;

  const value: string | undefined = firstParam;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: value === '' ? 'No title' : value,
      headerBackTitleVisible: false,
    });
  }, [navigation, value]);

  return (
    <View style={styles.view}>
      <Text>Second Screen</Text>
      <Button
        title={'Navigate to the first'}
        testID={'SecondBtn'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SecondScreen;
