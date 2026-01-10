import { decimal } from '@/utils/decimal';

import { useIStore } from '@/store';
import { TChapSettings } from '@/store/types';
import { getSchemaStorage, setSchemaStorage } from '@/database/storage';
import { CHAPTER_FONT_SIZE, CHAPTER_LINE_HEIGHT, CHAPTER_COLORS } from '@/constants';

export const getDataMessageInValid = (msgError: Record<string, any>) => !!Object.keys(msgError).filter(el => !!msgError?.[el])?.[0];

export const mapLabelFontSize = (fontSize: number) => {
  switch (fontSize) {
    case CHAPTER_FONT_SIZE[0]:
      return 'Rất nhỏ';
    case CHAPTER_FONT_SIZE[1]:
      return 'Khá nhỏ';
    case CHAPTER_FONT_SIZE[2]:
      return 'Nhỏ vừa';
    case CHAPTER_FONT_SIZE[3]:
      return 'Cỡ chuẩn';
    case CHAPTER_FONT_SIZE[4]:
      return 'To vừa';
    case CHAPTER_FONT_SIZE[5]:
      return 'Khá to';
    case CHAPTER_FONT_SIZE[6]:
      return 'Rất to';
    default:
      return '---';
  }
}

export const mapLabelLineHeight = (lineHeight: number) => `${+decimal(lineHeight).mul(100)}%`;

export const updateChapterSettings = (option: TChapSettings) => {
  const setting = useIStore.getState().storeGlobal?.chapterSettings;

  const chapterSettings = { ...(setting || {}), ...option };

  useIStore.getState().updateStoreGlobal({ chapterSettings });

  setSchemaStorage({ key: 'STORE_CHAPTER_SETTINGS', data: { chapterSettings } });
}

export const loadChapterSettings = () => {
  const initialData = getSchemaStorage({ key: 'STORE_CHAPTER_SETTINGS' });

  const mapColors = initialData?.chapterSettings?.mapColors || CHAPTER_COLORS[0];
  const fontSize = initialData?.chapterSettings?.fontSize || CHAPTER_FONT_SIZE[3];
  const lineHeight = initialData?.chapterSettings?.lineHeight || CHAPTER_LINE_HEIGHT[2];

  updateChapterSettings({ fontSize, lineHeight, mapColors });
}
