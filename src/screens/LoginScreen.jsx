import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function LoginScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.logo}>Login</Text>
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 100 }}>
          <Svg style={{ marginRight: 10, marginTop: 10 }} width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M18 0.666664C20.2985 0.666664 22.5029 1.57976 24.1283 3.20507C25.7536 4.83039 26.6667 7.03479 26.6667 9.33333C26.6667 11.6319 25.7536 13.8363 24.1283 15.4616C22.5029 17.0869 20.2985 18 18 18C15.7015 18 13.4971 17.0869 11.8717 15.4616C10.2464 13.8363 9.33334 11.6319 9.33334 9.33333C9.33334 7.03479 10.2464 4.83039 11.8717 3.20507C13.4971 1.57976 15.7015 0.666664 18 0.666664ZM18 22.3333C27.5767 22.3333 35.3333 26.2117 35.3333 31V35.3333H0.666672V31C0.666672 26.2117 8.42334 22.3333 18 22.3333Z" fill="#545454" />
          </Svg>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({ username: text })} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 60 }}>
          <Svg style={{ marginRight: 4, marginTop: 1 }} width={52} height={53} viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M13 17.6667H32.5V13.25C32.5 11.4097 31.868 9.84549 30.6042 8.55729C29.3403 7.2691 27.8055 6.625 26 6.625C24.1944 6.625 22.6597 7.2691 21.3958 8.55729C20.1319 9.84549 19.5 11.4097 19.5 13.25H15.1667C15.1667 10.1951 16.2233 7.59078 18.3365 5.43692C20.4497 3.28306 23.0042 2.20686 26 2.20833C28.9972 2.20833 31.5524 3.28526 33.6657 5.43913C35.7789 7.59299 36.8348 10.1966 36.8333 13.25V17.6667H39C40.1917 17.6667 41.2122 18.0995 42.0615 18.9652C42.9108 19.8308 43.3348 20.8702 43.3333 22.0833V44.1667C43.3333 45.3812 42.9087 46.4214 42.0593 47.287C41.21 48.1527 40.1902 48.5848 39 48.5833H13C11.8083 48.5833 10.7878 48.1505 9.93849 47.2848C9.08916 46.4192 8.66522 45.3798 8.66666 44.1667V22.0833C8.66666 20.8687 9.09133 19.8286 9.94066 18.963C10.79 18.0973 11.8098 17.6652 13 17.6667ZM26 37.5417C27.1917 37.5417 28.2122 37.1088 29.0615 36.2432C29.9108 35.3775 30.3348 34.3381 30.3333 33.125C30.3333 31.9104 29.9087 30.8703 29.0593 30.0046C28.21 29.139 27.1902 28.7069 26 28.7083C24.8083 28.7083 23.7878 29.1412 22.9385 30.0068C22.0892 30.8725 21.6652 31.9119 21.6667 33.125C21.6667 34.3396 22.0913 35.3797 22.9407 36.2454C23.79 37.111 24.8098 37.5431 26 37.5417Z" fill="#545454" />
          </Svg>
          <View style={styles.inputViewTwo} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({ password: text })} />
          </View>
        </View>
        <Pressable style={styles.loginBtn}
          onPress={() => {
            navigation.navigate('AfterLogin');
          }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(90deg, rgba(8,135,252,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginBottom: 40,
    marginTop: 10
  },
  box: {
    backgroundColor: 'rgba(65, 63, 63, 0.48)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputView: {
    width: "80%",
    backgroundColor: "rgba(70, 88, 129, 0.5)",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderColor: 'black',
    borderWidth: 2
  },
  inputViewTwo: {
    width: "80%",
    backgroundColor: "rgba(70, 88, 129, 0.5)",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 10
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "30%",
    backgroundColor: "#4E5FFA",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  }
});
