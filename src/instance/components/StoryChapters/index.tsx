import React, { useEffect, useMemo, useRef } from 'react';
import { View, StatusBar } from 'react-native';

import { ICloseModalSVG } from '@/assets/svg';
import { runAfterInteractions } from '@/utils/app';
import { useStoryChapters } from '@/useQuery/useStoryChapters';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';
import { InstanceModal, TInstanceModalRefs } from '@/components/InstanceModal';

import { styles } from './styles';

type TStoryChaptersProps = { translateVersionId: number, resolve: Function, onHide?: Function };

export const StoryChapters: React.FC<TStoryChaptersProps> = ({ translateVersionId, resolve, onHide }) => {

  const queryStoryChapters = useStoryChapters({ translateVersionId, enabled: !!translateVersionId });

  const instanceModalRef = useRef<TInstanceModalRefs>(null);

  const _onClose = () => {
    StatusBar.setBarStyle('dark-content', true);
    instanceModalRef.current?.onClose?.(() => resolve(null));
  }

  useEffect(() => { runAfterInteractions(() => StatusBar.setBarStyle('light-content', true)); }, []);

  const _viewsHeader = useMemo(() => (
    <View style={styles.header}>
      <TextBase style={styles.title}>Chương tiết</TextBase>
      <TouchableView style={styles.close} hitSlop={16} onPress={_onClose}><ICloseModalSVG /></TouchableView>
    </View>
  ), []);

  return (
    <InstanceModal onHide={onHide} ref={instanceModalRef}>
      <View style={styles.container}>
        <View style={styles.view}>
          {_viewsHeader}

        </View>
      </View>
    </InstanceModal>
  )

}
