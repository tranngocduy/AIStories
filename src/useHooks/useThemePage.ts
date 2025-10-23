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

  return { fontSize, lineHeight, color, background };
}
