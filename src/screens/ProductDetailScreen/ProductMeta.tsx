import { StyleSheet, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../../components/AppText'
import { Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { APP_COLORS } from '../../themes/appColors'

const productMeta = [
    {label: "Model is 5'10''", icon: <MaterialIcons name="emoji-people" size={s(24)} color={APP_COLORS.black} />},
    {label: "Made in Turkey, Istanbul", icon: <Fontisto name="world" size={s(24)} color={APP_COLORS.black} />},
    {label: "Mede from 300 Recyled Phones", icon: <Ionicons name="radio" size={s(24)} color={APP_COLORS.black} />}
]

const ProductMeta = () => {
    return (
        <View style={{ flexDirection: "row", paddingVertical: s(10)}}>
            {productMeta.map((item, index) => (
                <View 
                    key={index} 
                    style={[
                        { 
                            flex: 1, 
                            alignItems: "center",
                        },
                        index === 1 && {borderLeftWidth: 1, borderRightWidth: 1, borderColor: APP_COLORS.textGray} 
                    ]}
                >
                    {item.icon}
                    <AppText variant='small' align='center' style={{marginTop: vs(5)}}>{item.label}</AppText>
                </View>
            ))}
        </View>
    )
}

export default ProductMeta

const styles = StyleSheet.create({})