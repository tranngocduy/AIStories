import React, { useMemo, useRef } from 'react';
import { View } from 'react-native';

import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';
import { InstanceModal, TInstanceModalRefs } from '@/components/InstanceModal';

import { FilterHeader } from './FilterHeader';

import { styles } from './styles';

type TSearchStoriesProps = { resolve?: Function, onHide?: Function };

export const SearchStories: React.FC<TSearchStoriesProps> = ({ resolve, onHide }) => {

  const instanceModalRef = useRef<TInstanceModalRefs>(null);

  const _onBack = () => { };

  const _onClose = () => instanceModalRef.current?.onClose?.();

  const _onGenerateQuery = () => { };

  const memoFilterHeader = useMemo(() => <FilterHeader onGenerateQuery={_onGenerateQuery} onBack={_onBack} onClose={_onClose} />, []);

  return (
    <InstanceModal onHide={onHide} ref={instanceModalRef}>
      <ScrollAvoidingView>
        <View style={styles.container}>
          <View style={styles.view}>
            {memoFilterHeader}

          </View>
        </View>
      </ScrollAvoidingView>
    </InstanceModal>
  )

}
