import { StyleSheet } from 'react-native';

import { View, TextInput } from '../../components/ui';

export const Login = () => {
  return (
    <View style={styles.container}>
      <TextInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
