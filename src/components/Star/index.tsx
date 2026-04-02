import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { s } from 'react-native-size-matters';
import { APP_COLORS } from '../../themes/appColors';

interface StarProps {
    rating: number | undefined;
}

const Star = ({rating = 5}: StarProps) => {
    const fullstar = rating;
  return (
        <View style={styles.starContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
                <Ionicons
                    key={index}
                    size={s(12)}
                    color={APP_COLORS.primary}
                    name={
                        fullstar >= index + 1
                        ? "star"
                        : fullstar > index
                        ? "star-half"
                        : "star-outline"
                    }
                />
            ))}
        </View>
  )
}

export default Star

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(2)
    }
})