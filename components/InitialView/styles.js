import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  title: {
    fontSize: 30,
    marginVertical: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
  btn: {
    width: 300,
    height: 50,
    marginBottom: 20,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    shadowColor: '#D6D6D6',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 2
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

