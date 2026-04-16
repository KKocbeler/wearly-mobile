import { LayoutAnimation, Platform, StyleSheet, TouchableOpacity, UIManager, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/AppText';
import { s, vs } from 'react-native-size-matters';
import { APP_COLORS } from '../../themes/appColors';

interface AcordionProps {
    title: string;
    iconName: React.ComponentProps<typeof Ionicons>['name'];
}

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const Accordion = ({ title, iconName }: AcordionProps) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(!open);
    };
    return (
        <View>
            <TouchableOpacity
                onPress={toggle}
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: vs(10),
                    borderBottomWidth: 1,
                    borderBottomColor: APP_COLORS.textGray
                }}
            >
                <View style={{flexDirection: "row", alignItems: "center", gap: s(8)}}>
                    <Ionicons name={iconName} size={s(16)} color="black" />
                    <AppText variant='caption'>{title}</AppText>
                </View>


                <Ionicons
                    name={open ? "chevron-up" : "chevron-down"}
                    size={s(16)}
                    color="black"
                />
            </TouchableOpacity>

            {open && (
                <View

                >
                    <AppText
                        variant='caption'
                        style={{ paddingVertical: vs(10) }}
                    >Buraya input koyabilirsin</AppText>
                </View>
            )}
        </View>
    )
}

export default Accordion

const styles = StyleSheet.create({})