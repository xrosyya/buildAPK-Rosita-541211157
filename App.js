import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button, Linking} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('./assets/gue.jpg')}
      />
      <Text style={styles.title}>ROSITA DWI ANGGRAINI</Text>
      <Text style={styles.subTitle}>
        Saya siswa kelas 12 SMK TELKOM PURWOKERTO dengan jurusan Rekayasa Perangkat Lunak. Saya memiliki ketertarikan dalam bidang design terutama UI/UX design. Di bawah ini terdapat beberapa project UI/UX yang pernah saya buat.
      </Text>
      <Button
        title="Hubungi Saya Sekarang!"
        onPress={() => Linking.openURL('https://www.instagram.com/yyrosita_/')}
        style={styles.buttonz}
      />
      <Text style={styles.projectTitle}>My Recent Project</Text>
      <Image
        style={styles.projecfoto2}
        source={require('./assets/originotes.png')}
      />
      <Text style={styles.projectTitle2}>SEE(TRASH)</Text>
      <Image
        style={styles.projecfoto2}
        source={require('./assets/sEEtrash.png')}
      />
      <Text style={styles.projectTitle3}>SMART NEED</Text>
    
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFC0D3",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 7
  },
  subTitle: {
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 10
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 500,
  },
  buttonz: {
    
  },

  projectTitle: {
    color: 'black',
    fontSize: 25, 
    fontWeight: 'bold',
    marginTop: 20,
  },
  projectTitle2: {
    color: 'black',
    fontSize: 15, 
    fontWeight: 'bold',
    marginLeft: -230,
  },
  projectTitle3: {
    color: 'black',
    fontSize: 15, 
    fontWeight: 'bold',
    marginLeft: -230,
  },
   projecfoto2: {
    width: 300,
    height: 200,
    rectangle: 300,
    marginTop: 20,
    borderRadius: 10,
   },
});