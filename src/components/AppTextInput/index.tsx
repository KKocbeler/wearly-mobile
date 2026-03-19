import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { APP_COLORS } from '../../themes/appColors'
import { s, vs } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import AppText from '../AppText'
import { AppTextInputProps } from '../../types/appTextInput'

const AppTextInput: React.FC<AppTextInputProps> = ({
    label,
    error = "dsadfsa",
    onChangeText,
    containerStyle,
    style,
    disabled,
    secureTextEntry,
    value,
    placeholder,
    ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
        {
            label && (
                <AppText variant='caption' style={styles.label}>
                    {label}
                </AppText>
            )
        }
        <TextInput
            value={value}
            onChangeText={onChangeText}
            style={[
                styles.input,
                style,
                { borderColor: error ? APP_COLORS.accent : APP_COLORS.light}
            ]}
            editable={!disabled}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={APP_COLORS.textGray}
            {...props}
        />
        {
            error && (
                <AppText variant='small' style={styles.error}>
                    {error}
                </AppText>
            )
        }
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        marginBottom: vs(12),
    },
    label: {
        marginBottom: vs(4),
        paddingLeft: s(4)
    },
    input: {
        borderWidth: 1,
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        backgroundColor: APP_COLORS.light,
        paddingVertical: vs(10),
        paddingHorizontal: s(12)
    },
    error: {
        color: APP_COLORS.accent,
        paddingLeft: s(4)
    },

})