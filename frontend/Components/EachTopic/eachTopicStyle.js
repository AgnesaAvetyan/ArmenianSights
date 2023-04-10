import { StyleSheet } from 'react-native'

export const eachTopicStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C7F3D3',
    },
    content: {
        width: '100%',
        marginTop: -20,
        flexDirection: 'row',
        backgroundColor: '#092C1A',
        alignItems: 'center',
        padding: 25,
    },
    input: {
        height: 40,
        width: '90%',
        color: '#092C1A',
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        position: 'absolute',
        transform: [{ translateX: 140 }, { translateY: 0 }], // adjust the values to center the text
        justifyContent: 'center',
        textAlign: 'center',
        color: '#C7F3D3',
        fontWeight: 'bold',
        fontSize: 20,
    },
})