import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Types';
import * as React from 'react';
import {View, Text, Button} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'SecondScreen'>;
const SecondScreen = ({route, navigation}: Props) => {
  const firstParam = route.params.firstParam;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Second Screen</Text>
      <Text> Here is the value of param: {firstParam}</Text>
      <Button
        title={'Navigate to the first'}
        testID={'SecondBtn'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SecondScreen;
