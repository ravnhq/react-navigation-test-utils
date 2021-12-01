import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Types';
import * as React from 'react';
import {View, Text, Button} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'FirstScreen'>;
const FirstScreen = ({navigation}: Props) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>First Screen</Text>
      <Button
        title={'Navigate to second'}
        testID={'firstBtn'}
        onPress={() =>
          navigation.push('SecondScreen', {
            firstParam: 'Hi from FirstScreen',
          })
        }
      />
    </View>
  );
};

export default FirstScreen;
