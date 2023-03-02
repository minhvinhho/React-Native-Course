import { Text, View, StyleSheet, Image } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={styles.summaryText}>
                    Your phone needed{' '}
                    <Text style={styles.hightLight}>X</Text> 
                    {' '}rounds to guess the number{' '}
                    <Text style={styles.hightLight}>Y</Text>.
                </Text>
                <PrimaryButton> Start New Game</PrimaryButton>
            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 46
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    hightLight: {
        fontFamily: 'open-sans-blod',
        color: Colors.primary500
    },
});