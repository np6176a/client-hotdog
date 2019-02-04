import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    height: 50
  },
  btnWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  btnText:{
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
