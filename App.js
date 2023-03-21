import { CalculationParameters, Coordinates, Prayer, PrayerTimes, SunnahTimes } from 'adhan';
import { StyleSheet, Text, View, FlatList } from 'react-native';


const prayers = [Prayer.Fajr, Prayer.Sunrise, Prayer.Dhuhr,Prayer.Asr, Prayer.Maghrib, Prayer.Isha, "middleOfTheNight",  "lastThirdOfTheNight"];
const coords = new Coordinates(35.7219,51.3347); // tehran coords
const calcParams = new CalculationParameters("Tehran");

const specialDate1 = new Date(1679257800000);
const specialDate2 = new Date(1679344200000);

const prayerTimes1 = new PrayerTimes(coords, specialDate1, calcParams);
const sunnah1 = new SunnahTimes(prayerTimes1);
prayerTimes1.middleOfTheNight = sunnah1.middleOfTheNight;
prayerTimes1.lastThirdOfTheNight = sunnah1.lastThirdOfTheNight;

const prayerTimes2 = new PrayerTimes(coords, specialDate2, calcParams);
const sunnah2 = new SunnahTimes(prayerTimes2);
prayerTimes2.middleOfTheNight = sunnah2.middleOfTheNight;
prayerTimes2.lastThirdOfTheNight = sunnah2.lastThirdOfTheNight;

const renderItem = ({item}) => {
  return <Text>{prayerTimes1[item].toString()}</Text>
};

const renderItem2 = ({item}) => {
  return <Text>{prayerTimes2[item].toString()}</Text>
};


export default function App() {

  return (
    <View style={styles.container}>
      <FlatList data={prayers} renderItem={renderItem} style={{marginBottom: 30}}/>
      <FlatList data={prayers} renderItem={renderItem2} style={{marginBottom: 30}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});
