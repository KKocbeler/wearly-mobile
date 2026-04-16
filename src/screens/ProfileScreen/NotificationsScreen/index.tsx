import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppSafeView from '../../../components/AppSafeView'
import AppText from '../../../components/AppText'
import { FlatList } from 'react-native-gesture-handler';
import { vs } from 'react-native-size-matters';
import NotificationItem from './NotificationItem';

const NotificationsScreen = () => {
    const [setting, setSettings] = useState([
        { id: 1, title: "Email notifications", description: "You will receive an email about any notification regularly.", value: true },
        { id: 2, title: "In app notifications", description: "You will receive a notification inside the application.", value: true },
        { id: 3, title: "Update application", description: "You will receive a notification about update application.", value: false },
    ]);

    const handleToggle = (id: number) => {
        setSettings(prev => prev.map(i => i.id === id ? { ...i, value: !i.value } : i));
    };

    return (
        <AppSafeView fullScreen>
            <AppText align='center' color='textGray' style={{ marginVertical: vs(20) }}>
                In this section, you will be able to manage notifications. We will continue to send you notifications for security reasons or if we need to contact you about your account.
            </AppText>
            <FlatList
                data={setting}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                style={{ width: "100%" }}
                renderItem={({ item }) => (
                    <NotificationItem item={item} onToggle={handleToggle} />
                )}
            />
        </AppSafeView>
    );
};

export default NotificationsScreen;

const styles = StyleSheet.create({

});