import { StyleSheet } from 'react-native'

export const ovalStyles = StyleSheet.create({
  ovalContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  oval: {
    width: 370,
    height: 150,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#092C1A',
    backgroundColor: '#092C1A',
    margin: 0,
    marginTop: 10,
  },
  ovalText: {
    position: 'absolute',
    top: '45%',
    left: '35%',
    transform: [{ translateX: 0 }, { translateY: 0 }], // adjust the values to center the text
    textAlign: 'center',
    color: '#C7F3D3',
    fontWeight: 'bold',
    fontSize: 20,
  },
  ovalRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ovalButton: {
    alignItems: 'center',
    margin: 0,
  },
});
