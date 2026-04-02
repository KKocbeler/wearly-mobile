import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { SetStateAction } from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../../components/AppText'
import { APP_COLORS } from '../../themes/appColors'

interface SizeSelectorProps {
    sizes?: string[] | [];
    activeSize: string | null;
    setActiveSize: React.Dispatch<SetStateAction<string | null>>;
}

const SizeSelector = ({sizes, activeSize, setActiveSize}: SizeSelectorProps) => {
  return (
            <View style={{marginVertical: vs(8)}}>
                <View style={{flexDirection: "row", alignItems: "baseline", gap: s(3), marginBottom: vs(5)}}>
                    <AppText variant='caption' weight='bold'>Size:</AppText>
                    <AppText variant='small' color='textGray'>{activeSize}</AppText>
                </View>
                <FlatList 
                    data={sizes}
                    keyExtractor={(item) => item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={[
                            {padding: 2, marginRight: s(4), backgroundColor: APP_COLORS.light},
                            item === activeSize && {borderWidth: 1, borderRadius: 999, borderColor: APP_COLORS.black}
                        ]}>
                            <TouchableOpacity
                                onPress={() => setActiveSize(item)}
                                style={[
                                    {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: s(30),
                                        height: s(30),
                                        borderRadius: 9999,
                                        borderWidth : 1,
                                        borderColor: APP_COLORS.black
                                    },
                                    activeSize === item ? {backgroundColor : APP_COLORS.black} : {backgroundColor: APP_COLORS.light},
                                ]}
                                accessibilityRole='button'
                                accessibilityLabel='Size button'
                            >
                                <AppText variant='small' color={activeSize === item ? "textWhite"  : "textDark"}>{item}</AppText>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
  )
}

export default SizeSelector

const styles = StyleSheet.create({})