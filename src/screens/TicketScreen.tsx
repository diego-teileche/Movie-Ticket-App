import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import AppHeader from '../components/AppHeader';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';

const TicketScreen = ({navigation, route}: any) => {
  const [ticketData, setTicketData] = useState<any>(route.params);

  useEffect(() => {
    (async () => {
      try {
        const ticket = await EncryptedStorage.getItem('ticket');

        if (ticket !== undefined && ticket !== null)
          setTicketData(JSON.parse(ticket));
      } catch (error) {
        console.error('Something went wrong while getting data: ', error);
      }
    })();
  }, []);

  if (ticketData === undefined || ticketData === null) {
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.appHeaderContainer}>
          <AppHeader
            name="close"
            header="My Tickets"
            action={() => navigation.goBack()}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header="My Tickets"
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.ticketContainer}>
        <ImageBackground
          source={{uri: ticketData?.ticketImage}}
          style={styles.ticketBGImage}>
          <LinearGradient
            colors={[COLORS.OrangeRGBA0, COLORS.Orange]}
            style={styles.linearGradient}></LinearGradient>
        </ImageBackground>

        <View style={styles.linear}></View>

        <View style={styles.ticketFooter}>
          <View style={styles.ticketDateContainer}>
            <View>
              <Text style={styles.dateTitle}>{ticketData?.date.date}</Text>

              <Text style={styles.dateSubtitle}>{ticketData?.date.day}</Text>
            </View>

            <View>
              <CustomIcon name="clock" style={styles.clockIcon} />

              <Text style={styles.dateSubtitle}>{ticketData?.time}</Text>
            </View>
          </View>

          <View style={styles.ticketSeatContainer}>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subHeading}>Hall</Text>

              <Text style={styles.dateSubtitle}>02</Text>
            </View>

            <View style={styles.subtitleContainer}>
              <Text style={styles.subHeading}>Row</Text>

              <Text style={styles.dateSubtitle}>04</Text>
            </View>

            <View style={styles.subtitleContainer}>
              <Text style={styles.subHeading}>Seats</Text>

              <Text style={styles.dateSubtitle}>
                {ticketData?.seatArray
                  .slice(1, 4)
                  .map((item: any, index: number, arr: any) => {
                    return item + (index === arr.length - 1 ? '' : ', ');
                  })}
              </Text>
            </View>
          </View>

          <Image
            source={require('../assets/images/barcode.png')}
            style={styles.barCodeImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
    marginBottom: SPACING.space_36 * 4,
  },
  ticketContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ticketBGImage: {
    alignSelf: 'center',
    width: 300,
    aspectRatio: 200 / 300,
    borderTopLeftRadius: BORDERRADIUS.radius_25,
    borderTopRightRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  linearGradient: {
    height: '70%',
  },
  linear: {},
  ticketFooter: {},
  ticketDateContainer: {},
  dateTitle: {},
  dateSubtitle: {},
  clockIcon: {},
  ticketSeatContainer: {},
  subtitleContainer: {},
  subHeading: {},
  barCodeImage: {},
});

export default TicketScreen;
