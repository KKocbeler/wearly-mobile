import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppSafeView from '../../components/AppSafeView'
import { APP_COLORS } from '../../themes/appColors'
import AppText from '../../components/AppText'
import { s, vs } from 'react-native-size-matters'
import { FontAwesome5 } from '@expo/vector-icons'
import AppTextInput from '../../components/AppTextInput'
import Checkbox from 'expo-checkbox'
import { useNavigation } from '@react-navigation/native'
import AppButton from '../../components/AppButton'
import { ScrollView } from 'react-native-gesture-handler'
import { SOCIAL_BUTTONS } from '../../constants/socialPlatforms'

const SignUpScreen = () => {
    const navigation = useNavigation<any>();
    const [isChecked, setIsChecked] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
        repeatPassword: ""
    })
  return (
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <AppSafeView backgroundColor={APP_COLORS.primary} padding={0}>
            <AppText align='center' color='textWhite' style={{fontSize: s(32), marginTop: vs(50)}}>
                WEARLY
            </AppText>
            <View style={styles.formWrapper}>
                <AppText align='center' color='primary' variant='title' style={{fontSize: s(25)}}>Welcome to Wearly login now!</AppText>
                <View style={styles.formContainer}>
                    <View style={styles.inputWrapper}>
                        <AppTextInput 
                        label='Email' 
                        value={form.email} 
                        onChangeText={(text) => {
                            setForm((prev) => ({...prev, email: text}))
                        }}
                        placeholder='kkocbeler@gmail.com'
                        keyboardType='email-address'
                        autoComplete='email'
                        autoCapitalize='none'
                        accessibilityLabel='Email address'
                    />
                    </View>
                    <View style={styles.inputWrapper}>
                        <AppTextInput 
                        label='Password' 
                        value={form.password}
                        onChangeText={() => {}}
                        placeholder='******'
                        secureTextEntry
                        accessibilityLabel='Password'
                    />
                    </View>
                    <View style={styles.inputWrapper}>
                        <AppTextInput 
                        label='Repeat Password' 
                        value={form.repeatPassword} 
                        onChangeText={() => {}}
                        placeholder='******'
                        secureTextEntry
                        accessibilityLabel='Repeat password'
                    />
                    </View>
                    <AppButton 
                        title='Sign Up'
                        variant='primary'
                        onPress={() => {navigation.navigate("BottomTabs", {screen: "HomeScreen"})}}
                        style={{marginTop: vs(20), borderRadius: s(99)}}
                    />
                    <AppText align='center' color='textGray' variant='caption' style={{marginVertical: vs(20)}}>
                        Don't have an account?{" "}
                        <Text 
                            style={{ color: APP_COLORS.primary, fontWeight: '700'}} 
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            Sign In!
                        </Text>
                    </AppText>
                    <AppText color='textGray' variant='small' align='center' style={{marginBottom: vs(20)}}>Or Sign up with</AppText>
                    <View style={styles.socialContainer}>
                        {
                            SOCIAL_BUTTONS.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    accessibilityRole='button'
                                    accessibilityLabel={item.label}
                                    accessibilityHint={item.hint}
                                    hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                                    onPress={() => {}}
                                >
                                    <FontAwesome5 
                                        name={item.icon} 
                                        size={s(32)} 
                                        color={APP_COLORS.primary} 
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </View>
        </AppSafeView>
    </ScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    formWrapper: {
        marginTop: vs(60),
        backgroundColor: APP_COLORS.light,
        paddingHorizontal: s(20),
        paddingVertical: vs(50),
        borderTopLeftRadius: vs(20),
        borderTopRightRadius: vs(20),
        flex: 1,
    },
    formContainer: {
        marginTop: vs(20)
    },
    inputWrapper: {
        marginTop: vs(8)
    },
    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s(25),
    },
})