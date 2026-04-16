import { TouchableOpacityProps } from "react-native";

export interface AppButtonsProps extends TouchableOpacityProps {
    title: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    textVariant?: "small" | "caption" | "body" | "subtitle" | "title";
    fullWidth?: boolean;
    loading?: boolean;
}