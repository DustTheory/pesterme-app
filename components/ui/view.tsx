import { View as DefaultView } from "react-native";
import { ThemeProps, useThemeColor } from "../useThemeColor";

export type ViewProps = ThemeProps & DefaultView['props'];

export const View = ({ style, lightColor, darkColor, ...otherProps } : ViewProps) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  
    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
  }
  