import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SPACING} from '../theme/theme';

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
      <Text>SettingComponent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.space_20,
  },
});

export default SettingComponent;
