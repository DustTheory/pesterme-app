import { Text as DefaultText } from "react-native";
import { ThemeProps, useThemeColor } from "../useThemeColor";

export type TextProps = ThemeProps & DefaultText['props'];

export const Text = ({ style, lightColor, darkColor, ...otherProps }: TextProps) =>{
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}