import { ThemeProps, useThemeColor } from "../useThemeColor";
import { TextInput as DefaultTextInput } from "react-native"


export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export const TextInput = ({ style, lightColor, darkColor, ...otherProps }: TextInputProps) =>{
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
    return <DefaultTextInput style={[{ color }, style]} {...otherProps} />;
}