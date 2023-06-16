import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  input: {
    height: 40,
    backgroundColor: '#D9D9D9',
    borderColor: 'gray',
    color: '#909090',
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 62,
    borderRadius : 60,
    elevation : 2,
  },
  forgetPasswordText: {
    height: 25,
    textAlign: 'right',
    color: '#909090',
    marginHorizontal: 62,
  },
  button: {
    backgroundColor: '#2844A7',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 62,
    borderRadius : 60,
    elevation : 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    
  },
  LoginFBGoogle: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  socialFB: {
    alignSelf: 'center',
    width: 16,
    height: 16,
    marginRight: 50,
  },
  socialGoogle: {
    alignSelf: 'center',
    width: 16,
    height: 16,
    marginLeft: 35,
    top :-15,
  },
  registerText: {
    height: 20,
    textAlign: 'right',
    color: '#909090',
    marginRight: 115 ,
    top :-20,
  },
  bar: {
    height: 0,
    backgroundColor: 'white',
  },
  image: {
    width: 280,
    height: 198,
    alignSelf: 'center',
    marginTop: 100,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 62,
    color: '#909090',
  },
  tmp : {
    height: 20,
    textAlign: 'left',
    color: '#909090',
    marginLeft: 100,
  },
  msk : {
    height: 20,
    textAlign: 'center',
    color: '#909090',
  },
});

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    console.log('Nama:', email);
    console.log('No. Telpon:', phoneNumber);
    console.log('Password:', password);
    console.log('ConfirmPassword:', confirmPassword);
  };

  const handleForgetPassword = () => {
  };


  const LoginFB = () => {
    //
  };

  const LoginGoogle = () => {
    //
  }


  const handleToggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://wallpaperaccess.com/full/983279.jpg' }}
        style={styles.background}
      >
        <View style={styles.bar} />

        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/5ece/ec53/c85c630c72aca9ab8d9b06ab7e0814ba?Expires=1687132800&Signature=Hqn9HG0FwRZ8lS46zo8NjFT39bnzjRLHz-a8OPij~uAX4VsANyevf0GH69-rEGJ2iYmfjUJeruxPhi2Jc83QflqnnC9FLrCWGAjhdxguvxkPt6jzBUOLnC59klLLJ6KSs1tO4ePKgwITPgr5Q6Lv4vNQZpbf5zKgNvhWV14h~LtHM0wiwWkqJN3iJ3z8zpaPNkIB0NJMvLpb5I1Hob0iMHZ32aQ1fTqLRZw3cLoqhVolVp7WEySC-tDDEj9E2kvnL4akNqdAwTAEg1XIA6mGCAchpk5dxhy0yj2ilvZCECDkoLvT8pfFref8Rh2n2n~S~mziaD2TOEdqhE7ly9gH6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={styles.image}
          />

          {isLogin ? (
            <>
              <Text style={styles.title}>No. Telpon</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan nomor telepon"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              <TextInput
                style={styles.input}
                placeholder="Masukkan password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <Text style={styles.title}></Text>
              <TouchableOpacity onPress={handleForgetPassword}>
                <Text style={styles.forgetPasswordText}>Lupa password ?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Masuk</Text>
              </TouchableOpacity>
              <Text style={styles.LoginFBGoogle}>Atau</Text>
              <Text style={styles.LoginFBGoogle}>Masuk dengan</Text>
              <TouchableOpacity onPress={LoginFB}>
                <Image
                  source={{
                    uri:
                      'https://s3-alpha-sig.figma.com/img/ef9b/88a7/26de6c2beb2b71ee5b8d660200359259?Expires=1687132800&Signature=YHYVapwaU7TQzOa3ENgv3MPEPm3EADEZby6yAPAQWkWBriBelozdWv0CXqqg48t5tNjrJ7bmkm8ofybgBc8Jkn30WV2WUqQfFIZdpTqhqR3gF7AtEFVhFOs0zABE-jjf3fjPfykQ5cavYEBfpVJnDgnLMXKcKAU-iN6-NH592bhl7y3UG5LX2qUlSQvLtN1taVrNL3WyjxbVH3kPyO-G6IwBDh9FWf504BENvklA8rMo0SpQFSuv6HAV8BjCGX~OTi0ldw2O-YjIhcZY8OQWbayrwgOlkgE5XaBfhTBd~aUPibiyXB87XdYFzcUZo9ldUYV~RQgF0OOzVNeImdQsYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  }}
                  style={styles.socialFB}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={LoginGoogle}>
                <Image
                  source={{
                    uri:
                      'https://s3-alpha-sig.figma.com/img/9358/a632/fe765206d076c18af39c815b3d7dc61f?Expires=1687132800&Signature=PBWzjuYnoQSAd37~s0qKm08LDBtGFLxjiThhgtmx3U1NiAlPew3Y94mmir65ntxwXmhkNWHxfCT84VY-prfL-SGscJ9yJH0a01Ymll1ujX6EuWo2Kp5OSfQcoI0Pu8Q9sRVXafAlbKJ~4Hvai1QHtjlmtNxYlYQhsp2vtWa5oE0Qe6zag5alLT4UY~b-pBvurKcUhI7oBhOUEGNk2LNeORMwFfVtwFm1BezXYfDqFz1I~1a2Rq3IHEt3atP~V4KhGeHjDiqL61lJ6P-z~fGSw1oio0csDpafOJC8HzCO9lbMbXvC9ds49pPnEDanJAlM10NpILDwxt-3XoKOXlEgtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  }}
                  style={styles.socialGoogle}
                />
              </TouchableOpacity>
              <Text style={styles.tmp}>Belum mempunyai akun? </Text>
              <TouchableOpacity onPress={handleToggleView}>
                <Text style={styles.registerText}>Daftar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.title}>Daftar</Text>
              <TextInput
                style={styles.input}
                placeholder="Nama"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <TextInput
                style={styles.input}
                placeholder="No. Telpon"
                secureTextEntry
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <TextInput
                style={styles.input}
                placeholder="Verifikasi Password"
                secureTextEntry
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
              />
              <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Daftar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleToggleView}>
                <Text style={styles.msk}>Masuk</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;