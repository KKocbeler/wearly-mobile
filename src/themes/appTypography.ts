import { moderateScale } from "react-native-size-matters";

export const APP_TYPOGRAPHY = {
  sizes: {
    xs: moderateScale(4),
    sm: moderateScale(8),
    md: moderateScale(14),
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
      lineHeight: moderateScale(28),
    },
    subtitle: {
      fontSize: moderateScale(18),
    },
    body: {
      fontSize: moderateScale(16),
    },
    caption: {
      fontSize: moderateScale(14),
    },
    small: {
      fontSize: moderateScale(12),
    },
  },
};