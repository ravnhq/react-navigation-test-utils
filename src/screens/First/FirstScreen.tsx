import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Types';
import * as React from 'react';
import styles from '../../styles/styles';
import {View, Text, Button, TextInput} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'FirstScreen'>;

const FirstScreen = ({navigation}: Props) => {
  let paramValue: string = '';

  return (
    <View style={styles.view}>
      <Text>Insert the title for the second screen:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value: string) => {
          paramValue = value;
        }}
      />
      <Button
        title={'Navigate to second'}
        onPress={() =>
          navigation.push('SecondScreen', {
            firstParam: paramValue,
          })
        }
      />
    </View>
  );
};

export default FirstScreen;
