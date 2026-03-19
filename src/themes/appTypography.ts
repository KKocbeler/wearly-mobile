import { moderateScale } from "react-native-size-matters";

export const APP_TYPOGRAPHY = {
  sizes: {
    xs: moderateScale(12),
    sm: moderateScale(14),
    md: moderateScale(16),
    lg: moderateScale(18),
    xl: moderateScale(22),
    xxl: moderateScale(28),
  },

  weights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },

  lineHeights: {
    sm: moderateScale(18),
    md: moderateScale(22),
    lg: moderateScale(26),
    xl: moderateScale(32),
  },

  variants: {
    title: {
      fontSize: moderateScale(22),
      fontWeight: "700",
      lineHeight: moderateScale(28),
    },
    subtitle: {
      fontSize: moderateScale(18),
      fontWeight: "500",
      lineHeight: moderateScale(24),
    },
    body: {
      fontSize: moderateScale(16),
      fontWeight: "400",
      lineHeight: moderateScale(22),
    },
    caption: {
      fontSize: moderateScale(14),
      fontWeight: "400",
      lineHeight: moderateScale(18),
    },
    small: {
      fontSize: moderateScale(12),
      fontWeight: "400",
      lineHeight: moderateScale(16),
    },
  },
};