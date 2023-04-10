import { StyleSheet } from 'react-native'

export const footerStyles = StyleSheet.create({
    footer: {
        backgroundColor: '#092C1A',
        border: "1px solid #092C1A",
        borderWidth: 1,
        borderRadius: 1,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    iconContainer: {
        backgroundColor: '#092C1A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    iconButton: {
        width: 56,
        height: 56,
        borderRadius: 50,
        backgroundColor: '#C7F3D3',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 18,
    },
    iconSize: {
        width: 40,
        height: 40,
    },
});
