import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface SettingComponentProps {
  icon: string;
  heading: string;
  subHeading: string;
  subTitle: string;
}

const SettingComponent: React.FC<SettingComponentProps> = ({
  icon,
  heading,
  subHeading,
  subTitle,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <CustomIcon name={icon} style={styles.iconStyle} />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.title}>{heading}</Text>
        <Text style={styles.subtitle}>{subHeading}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>

      <View style={styles.iconBG}>
        <CustomIcon name="arrow-right" style={styles.iconStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.space_20,
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_24,
    paddingHorizontal: SPACING.space_20,
  },
  settingContainer: {
    flex: 1,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.White,
  },
  subtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA15,
  },
  iconBG: {
    justifyContent: 'center',
  },
});

export default SettingComponent;
