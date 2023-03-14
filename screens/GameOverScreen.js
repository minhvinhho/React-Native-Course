import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={styles.summaryText}>
                    Your phone needed{' '}
                    <Text style={styles.hightLight}>{roundsNumber}</Text> 
                    {' '}rounds to guess the number{' '}
                    <Text style={styles.hightLight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}> Start New Game</PrimaryButton>
            </View>
        </View>
    );
}

export default GameOverScreen;

const devicesWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: devicesWidth < 380 ? 150 : 300,
        height: devicesWidth < 380 ? 150 : 300,
        borderRadius: devicesWidth < 380 ? 75 : 150,
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