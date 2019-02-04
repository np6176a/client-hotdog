import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  divider: {
    flex: 2,
    height: 40
  },
  wrapper:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    padding: 20,
    textAlign: 'center',
    color: '#fff'
  },
  txt:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  btnWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  btn: {
    width: 180,
    height: 50,
    borderColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
