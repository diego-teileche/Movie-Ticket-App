import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';

const UserAccountScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header="My Profile"
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/profileMessi.jpeg')}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>Lionel Messi</Text>
      </View>

      <View style={styles.profileContainer}>
        <SettingComponent
          icon="user"
          heading="Account"
          subHeading="Edit Profile"
          subTitle="Change Password"
        />

        <SettingComponent
          icon="setting"
          heading="Settings"
          subHeading="Theme"
          subTitle="Permissions"
        />

        <SettingComponent
          icon="dollar"
          heading="Offer & Refferrals"
          subHeading="Offer"
          subTitle="Refferrals"
        />

        <SettingComponent
          icon="info"
          heading="About"
          subHeading="About Movies"
          subTitle="more..."
        />
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
    marginBottom: SPACING.space_36,
  },
  profileContainer: {
    alignItems: 'center',
    padding: SPACING.space_36,
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  avatarText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_16,
    color: COLORS.White,
  },
});

export default UserAccountScreen;
