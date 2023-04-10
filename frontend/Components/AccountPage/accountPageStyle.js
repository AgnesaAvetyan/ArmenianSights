import { StyleSheet } from 'react-native';

export const accountPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F3D3',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userSection: {
    height: 120,
    width: '100%',
    marginTop: -80,
    flexDirection: 'row',
    backgroundColor: '#092C1A',
    borderRadius: 4,
    alignItems: 'center',
    padding: 40,
  },
  userImageContainer: {
    marginTop: 100,
    marginLeft: -20,
    width: 150,
    height: 150,
    borderRadius: 50,
    position: 'relative',
  },
  userImage: {
    width: 150,
    height: 150,
  },
  userName: {
    color: '#C7F3D3',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: -50,
    marginLeft: 20,
  },
  userRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  ratingText: {
    fontSize: 22,
    marginLeft: 160,
  },
  ratingImage: {
    width: 110,
    height: 20,
  },
  editButton: {
    position: 'absolute',
    backgroundColor: '#333',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
  },
  userInfoContainer: {
    marginLeft: 50,
  },
  settingsSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -25,
  },
  settingsTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  fieldLabel: {
    flex: 1,
    fontSize: 20,
  },
  fieldInput: {
    flexDirection: 'row',
    flex: 2,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  showPasswordButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    flex: 2,
    marginTop: 0,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -20,
  },
  button: {
    padding: 0,
    marginLeft: 110,
  },
  buttonText: {
    width: 140,
    color: '#092C1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
