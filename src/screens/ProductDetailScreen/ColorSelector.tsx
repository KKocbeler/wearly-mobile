import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { SetStateAction } from 'react'
import AppText from '../../components/AppText'
import { s, vs } from 'react-native-size-matters'
import { APP_COLORS } from '../../themes/appColors'

interface ColorSelectorProps {
    activeColor: string | null;
    setActiveColor: React.Dispatch<SetStateAction<string | null>>
    colors?: {
        name: string;
        code: string;
    }[] | [];
}

const ColorSelector = ({activeColor, colors, setActiveColor}: ColorSelectorProps) => {
    return (
        <View>
            <View style={{flexDirection: "row", alignItems: "baseline", gap: s(4), marginBottom: vs(5)}}>
                <AppText variant='caption' weight='bold'>Color:</AppText>
                <AppText variant='small' color='textGray'>{activeColor}</AppText>
            </View>
            <FlatList 
                data={colors}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={[
                        {padding: 2, marginRight: s(4)},
                        item.name === activeColor && {borderWidth: 1, borderRadius: 999, borderColor: APP_COLORS.black}
                    ]}>
                        <TouchableOpacity
                            onPress={() => setActiveColor(item.name)}
                            style={{
                                width: s(25),
                                height: s(25),
                                borderRadius: 9999,
                                backgroundColor: item.code,
                            }}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default ColorSelector

const styles = StyleSheet.create({})