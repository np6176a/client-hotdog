import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    height: 100
  },
  wrapper:{
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginBottom: -10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'center'
  }
})
