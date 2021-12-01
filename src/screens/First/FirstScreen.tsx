import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Types';
import styles from '../../styles/styles';
import {View, Text, Button, TextInput} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'FirstScreen'>;

const FirstScreen = ({navigation}: Props) => {
  const [textValue, setTextValue] = React.useState('');

  return (
    <View style={styles.view}>
      <Text>Insert the title for the second screen:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value: string) => {
          setTextValue(value);
        }}
      />
      <Button
        title={'Navigate to second'}
        onPress={() =>
          navigation.push('SecondScreen', {
            firstParam: textValue,
          })
        }
      />
    </View>
  );
};

export default FirstScreen;
