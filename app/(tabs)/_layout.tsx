import { Tabs } from 'expo-router';
import React from 'react';
import IonIcons from '@expo/vector-icons/build/Ionicons';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#673ab7',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <IonIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={24}
            />
          )
        }}
      />
    </Tabs>
  );
}
