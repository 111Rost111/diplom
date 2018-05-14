import spacing from "material-ui/styles/spacing";
import { fade } from "material-ui/utils/colorManipulator";
import {
  black,
  darkBlack,
  fullBlack,
  grey100,
  grey300,
  grey400,
  grey500,
  transparent,
  white
} from "material-ui/styles/colors";

export const lightBlue = "#1edded";
export const primaryBlue = "#23a2ce";
export const darkBlue = "#2964ad";
export const primaryRed = "#c40303";

export default {
  spacing: spacing,
  fontFamily: "Roboto, sans-serif",
  palette: {
    canvasColor: white,
    borderColor: grey300,
    textColor: darkBlack,
    accent2Color: grey100,
    accent3Color: grey500,
    shadowColor: fullBlack,
    primary3Color: grey400,
    primary2Color: primaryBlue,
    primary1Color: primaryBlue,
    alternateTextColor: white,
    pickerHeaderColor: primaryBlue,
    disabledColor: fade(darkBlack, 0.3),
    clockCircleColor: fade(darkBlack, 0.07)
  },
  floatingActionButton: {
    buttonSize: 45
  },
  menuItem: {
    selectedTextColor: white
  },
  tooltip: {
    color: white,
    fontSize: 15,
    rippleBackgroundColor: black
  }
};
