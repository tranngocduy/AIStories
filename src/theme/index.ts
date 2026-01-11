import { Dimensions, StatusBar, Platform, TextStyle } from 'react-native';
import { hasNotch, hasDynamicIsland } from 'react-native-device-info';

import { isIOS } from '@/utils/app';

const { width, height } = Dimensions.get('window');
const isDynamicIsland = !!isIOS && hasDynamicIsland();
const androidVersion = +Platform.Version.toString?.()?.split?.('.')?.[0];

export const wWidth = width;
export const wHeight = height;

export const isHasUIEdgeToEdge = ((!!isIOS && hasNotch()) || !!isDynamicIsland) || (!isIOS && (androidVersion >= 35));
export const statusHeight = !isIOS ? ((StatusBar?.currentHeight || 32)) : !!isDynamicIsland ? 54 : !!isHasUIEdgeToEdge ? 48 : 22;

export const headerHeight = 52;
export const footerHeight = !!isHasUIEdgeToEdge ? 24 : 16;
export const tabbarFooterHeight = !!isHasUIEdgeToEdge ? 105 : 95;

export const fonts = {
  default: {
    normal700: { fontWeight: '700' } as TextStyle,
    normal500: { fontWeight: '500' } as TextStyle,
    normal400: { fontWeight: '400' } as TextStyle
  }
}
