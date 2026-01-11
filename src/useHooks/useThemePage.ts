import { useIStore } from '@/store';
import { CHAPTER_COLORS, CHAPTER_FONT_SIZE, CHAPTER_LINE_HEIGHT } from '@/constants';

export const useThemePage = () => {
  const COLOR = CHAPTER_COLORS[0];

  const FONT_SIZE = CHAPTER_FONT_SIZE[3];

  const LINE_HEIGHT = CHAPTER_LINE_HEIGHT[2];

  const fontSize = (useIStore(state => state.storeGlobal?.chapterSettings?.fontSize) || FONT_SIZE);

  const lineHeight = (useIStore(state => state.storeGlobal?.chapterSettings?.lineHeight) || LINE_HEIGHT);

  const color = (useIStore(state => state.storeGlobal?.chapterSettings?.mapColors?.text) || COLOR.text);

  const background = (useIStore(state => state.storeGlobal?.chapterSettings?.mapColors?.background) || COLOR.background);

  const isThemeLight = (CHAPTER_COLORS?.findIndex?.(element => (element?.background === background)) < 2);

  const pageColor = !!isThemeLight ? 'rgba(85, 85, 85, 1)' : 'rgba(170, 170, 170, 1)';

  const settingColor = { active: !!isThemeLight ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)', inactive: !!isThemeLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)' };

  const settingBackground = { active: !!isThemeLight ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)', inactive: !!isThemeLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)' };

  return { fontSize, lineHeight, color, background, pageColor, settingColor, settingBackground };
}
