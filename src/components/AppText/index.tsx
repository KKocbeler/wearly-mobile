import { StyleSheet, Text, View } from 'react-native'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import { APP_COLORS } from '../../themes/appColors'
import { AppTextProps } from '../../types/appText'

const AppText: React.FC<AppTextProps> = ({ 
    children,
    color="#0F0F0F", 
    size="md", 
    weight="medium",
    align="left",
    variant= "title",
    numberOfLines,
    style,
    ...props
}) => {
    const variantStyle = variant ? APP_TYPOGRAPHY.variants[variant] : {}
    const computedColor = color && (APP_COLORS[color as keyof (typeof APP_COLORS)]) || APP_COLORS.textDark
    const computedStyle = {
        fontSize: APP_TYPOGRAPHY.sizes[size],
        fontWeight: APP_TYPOGRAPHY.weights[weight],
        color: computedColor,
        textAlign: align
    }

    return (
        <Text style={[ computedStyle, variantStyle,  style ]} numberOfLines={numberOfLines}>
            {children}
        </Text>
    )
}

export default AppText

const styles = StyleSheet.create({})