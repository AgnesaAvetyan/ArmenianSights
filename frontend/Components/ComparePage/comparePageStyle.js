import { StyleSheet } from 'react-native'

export const comparePageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C7F3D3',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    contentTitle: {
        fontSize: 60,
        padding: 20,
        marginVertical: -40,
        textAlign: 'center',
        fontStyle: 'normal',
        flex: 1,
    },
    contentText: {
        marginStart: 10,
        marginTop: 100,
        flex: 1,
        fontSize: 24,
        justifyContent: 'center',
    },
});