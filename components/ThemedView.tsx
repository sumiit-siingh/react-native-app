import React from 'react';
import { View, type ViewProps } from 'react-native';
import { useTailwind } from 'tailwindcss-react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export function ThemedView({ 
  style, 
  lightColor, 
  darkColor, 
  className,
  ...otherProps 
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const tailwind = useTailwind();

  return (
    <View 
      style={[
        tailwind(className),
        { backgroundColor }, 
        style
      ]} 
      {...otherProps} 
    />
  );
}