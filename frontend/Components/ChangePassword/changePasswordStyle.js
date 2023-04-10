import { StyleSheet } from 'react-native'

export const changePasswordStyles = StyleSheet.create({
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
        // marginStart: 10,
        // marginTop: 100,
        flex: 1,
        fontSize: 24,
        justifyContent: 'center',
    },
    field: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 133,
        marginBottom: -40,
    },
    fieldInput: {
        height: 60,
        width: '90%',
        color: '#092C1A',
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        margin: -80,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#092C1A',
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 20,
        margin: 90,
        marginBottom: 28,
    },
    buttonText: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        color: '#C7F3D3',
        fontSize: 22,
        fontWeight: 'bold',
    },
});