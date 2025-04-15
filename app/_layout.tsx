import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack initialRouteName="auth/welcome">
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="auth/welcome" options={{headerShown: false}} />
      <Stack.Screen name="auth/login" options={{headerShown: false}} />
      <Stack.Screen name="auth/signup" options={{headerShown: false}} />
      <Stack.Screen name="auth/nin" options={{headerShown: false}} />
      <Stack.Screen name="auth/Face-Verification" options={{headerShown: false}} />
      <Stack.Screen name="auth/Scan" options={{headerShown: false}} />
      <Stack.Screen name="auth/Confirm" options={{headerShown: false}} />
      <Stack.Screen name="auth/email" options={{headerShown: false}} />
    </Stack>
  );
}