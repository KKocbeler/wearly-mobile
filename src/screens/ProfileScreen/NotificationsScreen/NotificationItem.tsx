import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { s, vs } from 'react-native-size-matters';
import { APP_COLORS } from '../../../themes/appColors';
import { APP_TYPOGRAPHY } from '../../../themes/appTypography';
import AppText from '../../../components/AppText';

interface NotificationItemProps {
    item: any;
    onToggle: (id: number) => void
}

const NotificationItem = ({ item, onToggle }: NotificationItemProps) => {
    const moveAnim = useRef(new Animated.Value(item.value ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(moveAnim, {
            toValue: item.value ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [item.value]);

    const translateX = moveAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, s(20)], 
    });

    return (
        <View style={styles.notificationCard}>
            <View style={styles.textContainer}>
                <AppText variant='caption' weight='bold' style={{ marginBottom: vs(2) }}>{item.title}</AppText>
                <AppText variant='small' color='textGray' numberOfLines={2}>{item.description}</AppText>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onToggle(item.id)}
                style={[
                    styles.toggleButton,
                    { backgroundColor: item.value ? APP_COLORS.light : APP_COLORS.backgroundGray }
                ]}
            >
                <Animated.View style={[
                    styles.toggleCircle,
                    { 
                        backgroundColor: item.value ? APP_COLORS.primary : APP_COLORS.textGray,
                        transform: [{ translateX }] 
                    },
                ]} />
            </TouchableOpacity>
        </View>
    );
};

export default NotificationItem

const styles = StyleSheet.create({
        notificationCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: s(15),
        borderBottomWidth: 0.5,
        borderBottomColor: APP_COLORS.backgroundGray,
    },
    textContainer: {
        flex: 1,
        paddingRight: s(10),
    },
    toggleButton: {
        backgroundColor: APP_COLORS.backgroundGray,
        borderRadius: APP_TYPOGRAPHY.sizes.md,
        width: s(40),
        height: s(20),
        flexShrink: 0,
        justifyContent: 'center'
    },
    toggleCircle: {
        width: s(20),
        height: s(20),
        borderRadius: s(10),
        elevation: 2,
        shadowColor: APP_COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    }
})