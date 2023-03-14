import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer ({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numbertext}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const devicesWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: devicesWidth < 380 ? 12 : 24,
        margin: devicesWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numbertext: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: devicesWidth < 380 ? 28 : 36,
        // fontWeight: 'bold'
    }
});