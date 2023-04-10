import { StyleSheet } from 'react-native'

export const circleStyles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#092C1A',
    margin: 9,
  },
  circleText: {
    color: '#092C1A',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -9,
  },
  circleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton: {
    alignItems: 'center',
    margin: 0,
  },
});
