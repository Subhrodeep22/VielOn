import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="start" 
        options={{ 
          headerShown: false,
          title: 'Welcome'
        }} 
      />
      <Stack.Screen 
        name="brand" 
        options={{ 
          headerShown: false,
          title: 'Brand'
        }} 
      />
    </Stack>
  );
}
