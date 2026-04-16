import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { APP_COLORS } from '../../themes/appColors'
import { s, vs } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import AppText from '../AppText'
import { AppButtonsProps } from '../../types/appButtons'

const AppButton: React.FC<AppButtonsProps> = (
    {
        title,
        onPress,
        variant = "primary",
        size = "md",
        fullWidth =  false,
        loading = false,
        disabled = false,
        style,
        textVariant = "body",
        ...props
    }
) => {
    const variantStyle = variantStyles[variant];
    const sizeStyle = sizeStyles[size];
    const isLightVariant = variant === "ghost" || variant === "outline";
    return (
        <TouchableOpacity 
            onPress={onPress} 
            disabled={disabled}
            accessibilityRole='button'
            style={[
                styles.base, 
                variantStyle, 
                sizeStyle, 
                fullWidth && { width: "100%"},
                style
            ]}
            {...props}
        >
            {
                loading ? (
                    <ActivityIndicator color={APP_COLORS.light}/>
                ) : (
                    <AppText variant={textVariant} color={isLightVariant ? "textDark" : "textWhite"}>{title}</AppText>
                )
            }
            
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    base: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: APP_TYPOGRAPHY.sizes.md
    }
})

const variantStyles = StyleSheet.create({ 
    primary: {
        backgroundColor: APP_COLORS.primary
    },
    secondary: {
        backgroundColor: APP_COLORS.secondary
    },
    outline: {
        backgroundColor: APP_COLORS.light,
        borderWidth: 1,
        borderColor: APP_COLORS.textDark
    },
    ghost: {
        backgroundColor: "transparent"
    }
});

const sizeStyles = StyleSheet.create({
    sm: {
        paddingVertical: vs(8),
        paddingHorizontal: s(12)
    },
    md: {
        paddingVertical: vs(12),
        paddingHorizontal: s(18)
    },
    lg: {
        paddingVertical: vs(16),
        paddingHorizontal: s(20)
    }
})