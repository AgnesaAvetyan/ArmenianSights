import { StyleSheet } from 'react-native'

export const ratingPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F3D3',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 60,
    padding: 20,
    marginVertical: -40,
    textAlign: 'center',
    fontStyle: 'normal'
  },
  contentText: {
    marginStart: 10,
    marginTop: 100,
    flex:1,
    fontSize: 24,
    justifyContent: 'center',
  },
});