import { Dimensions, StatusBar, TextStyle } from 'react-native';
import { hasNotch, hasDynamicIsland } from 'react-native-device-info';

import { isIOS } from '@app-util/app';

const { width, height } = Dimensions.get('window');
const isDynamicIsland = !!isIOS && hasDynamicIsland();

export const wWidth = width;
export const wHeight = height;

export const isIphoneX = ((!!isIOS && hasNotch()) || !!isDynamicIsland);
export const statusHeight = !isIOS ? ((StatusBar?.currentHeight || 32) + 8) : !!isDynamicIsland ? 54 : !!isIphoneX ? 48 : 22;

export const headerHeight = 52;
export const footerHeight = !!isIphoneX ? 24 : 16;
export const styleProps = { flex: 1, backgroundColor: '#FFFFFF' };

export const fonts = {
  default: {
    normal700: { fontWeight: '700' } as TextStyle,
    normal500: { fontWeight: '500' } as TextStyle,
    normal400: { fontWeight: '400' } as TextStyle
  }
};
