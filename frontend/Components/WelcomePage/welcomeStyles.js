import { StyleSheet } from 'react-native';

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#092C1A',
        padding: 20,
        width: '100%',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#C7F3D3',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 18,
        color: '#C7F3D3',
        marginBottom: 40,
        alignItems: 'center',
    },
    button: {
        height: 70,
        width: 250,
        border: "1px solid #000",
        borderRadius: "12px",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    buttonText: {
        fontSize: 23,
        color: "#C7F3D3",
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    flagsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10, 
    },
    flagButton: {
        width: 60,
        height: 60,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        alignItems: 'center',
    },
    flagImage: {
        width: 350,
        height: 250,
    },
});
