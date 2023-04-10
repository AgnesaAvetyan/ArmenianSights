import { StyleSheet } from 'react-native'

export const startPageStyles = StyleSheet.create({
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
    fontSize: 24,
    padding: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#092C1A',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  buttonText: {
    color: '#C7F3D3',
    fontSize: 22,
    fontWeight: 'bold',
  },
});