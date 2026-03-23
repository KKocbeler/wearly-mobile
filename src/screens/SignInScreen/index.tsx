import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppButton from '../../components/AppButton';
import AppSafeView from '../../components/AppSafeView';
import AppText from '../../components/AppText';
import { s, vs } from 'react-native-size-matters';
import AppTextInput from '../../components/AppTextInput';
import Checkbox from 'expo-checkbox';
import { APP_COLORS } from '../../themes/appColors';
import { FontAwesome5 } from '@expo/vector-icons';
import { SOCIAL_BUTTONS } from '../../constants/socialPlatforms';


const SignInScreen = () => {
    const navigation = useNavigation<any>();
    const [isChecked, setIsChecked] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
  return (
    <AppSafeView fullScreen backgroundColor={APP_COLORS.primary} padding={0}>
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
                    autoCapitalize='none'
                    accessibilityLabel='Email address'
                    keyboardType='email-address'
                    autoComplete='email'
                />
                </View>
                <View style={styles.inputWrapper}>
                    <AppTextInput 
                    label='Password' 
                    value={form.password} 
                    onChangeText={(text) => {
                        setForm((prev) => ({...prev, password: text}))
                    }}
                    placeholder='******'
                    secureTextEntry
                    accessibilityLabel='Password'
                />
                </View>
                <View style={styles.optionsRow}>
                    <TouchableOpacity 
                        style={styles.rememberContainer}
                        onPress={() => setIsChecked(!isChecked)}
                        accessibilityRole='checkbox'
                        accessibilityState={{ checked: isChecked }}
                        accessibilityLabel='Remember me'
                    >
                        <Checkbox
                            value={isChecked}
                            onValueChange={setIsChecked}
                            style={{ width: s(14), height: s(14) }}
                            color={APP_COLORS.primary}
                        />
                        <AppText color='textGray' variant='caption'>
                            Remember me
                        </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {}}
                        accessibilityRole='button'
                        accessibilityLabel='Forget password'
                    >
                        <AppText color='accent' variant='caption'>Forget Password?</AppText>
                    </TouchableOpacity>
                </View>
                <AppButton 
                    title='Login'
                    variant='primary'
                    onPress={() => {navigation.navigate("BottomTabs", {screen: "HomeScreen"})}}
                    style={{marginTop: vs(20), borderRadius: s(99)}}
                    accessibilityLabel='Login'
                    accessibilityRole='button'
                />
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", gap: s(4)}}>
                    <AppText align='center' color='textGray' variant='caption' style={{marginVertical: vs(20)}}>
                        Don't have an account?
                    </AppText>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                        accessibilityRole='button'
                        accessibilityLabel='Sign up'
                        accessibilityHint="Navigates to the sign up screen"
                    >
                        <AppText color='primary' variant='caption' style={{fontWeight: "700"}}>Sign up!</AppText>
                    </TouchableOpacity>
                </View>
                <AppText color='textGray' variant='small' align='center' style={{marginBottom: vs(20)}}>Or Sign in with</AppText>
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
  )
}

export default SignInScreen

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
    optionsRow: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: s(4)
    },
    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s(25),
    },
})