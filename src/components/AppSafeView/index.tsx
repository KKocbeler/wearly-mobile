import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s } from 'react-native-size-matters'
import { APP_COLORS } from '../../themes/appColors'
import { AppSafeViewProps } from '../../types/appSafeView'

const AppSafeView: React.FC<AppSafeViewProps> = ({children, padding= s(14), backgroundColor = APP_COLORS.appBackground, fullScreen = false, style}) => {
  return (
    <SafeAreaView
        style={[
            styles.container,
            {padding, backgroundColor},
            fullScreen && {flex: 1},
            style
        ]}
    >
        {children}
    </SafeAreaView>
  )
}

export default AppSafeView

const styles = StyleSheet.create({
    container: {
        flex: 0
    }
})