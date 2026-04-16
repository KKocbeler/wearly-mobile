import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import AppText from '../../components/AppText';
import { APP_COLORS } from '../../themes/appColors';
import { s, vs } from 'react-native-size-matters';

interface ProfileMenuItemProps {
    label: string;
    icon: React.ComponentProps<typeof Feather>['name'];
    onPress: () => void
    danger?: boolean
    style: StyleProp<ViewStyle>;
}

const ProfileMenuItem = ({label, icon, onPress, danger= false, style}: ProfileMenuItemProps) => {
    return (
        <TouchableOpacity 
            style={[ styles.listItem, style]}
            onPress={onPress}
            accessibilityRole='button'
            accessibilityLabel={danger ? `logout` : `go to ${label}`}
        >
            <Feather name={icon} size={s(20)} color={danger ? APP_COLORS.danger : APP_COLORS.textGray} />
            <AppText style={{flex: 1}} color={danger ? "danger" : "textDark"}>{label}</AppText>
            <Feather name="arrow-right" size={s(16)} color={danger ? APP_COLORS.danger : APP_COLORS.textGray} />
        </TouchableOpacity>
    )
}

export default ProfileMenuItem

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(20),
        paddingHorizontal: s(8),
        paddingVertical: vs(14),
        borderBottomWidth: 1,
        borderColor: APP_COLORS.backgroundGray
    },
    listItemLabel: {
        flex: 1,
    }
})