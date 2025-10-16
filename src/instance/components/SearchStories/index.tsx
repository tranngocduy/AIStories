import React, { useMemo, useRef } from 'react';
import { View, ScrollView } from 'react-native';

import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';
import { InstanceModal, TInstanceModalRefs } from '@/components/InstanceModal';

import { FilterHeader } from './FilterHeader';
import { PageFilter } from './PageFilter';

import { styles } from './styles';

type TSearchStoriesProps = { resolve?: Function, onHide?: Function };

export const SearchStories: React.FC<TSearchStoriesProps> = ({ resolve, onHide }) => {

  const scrollViewRef = useRef<ScrollView>(null);

  const instanceModalRef = useRef<TInstanceModalRefs>(null);

  const _onBack = () => { };

  const _onClose = () => instanceModalRef.current?.onClose?.();

  const _onGenerateQuery = () => { };

  const memoFilterHeader = useMemo(() => <FilterHeader onGenerateQuery={_onGenerateQuery} onBack={_onBack} onClose={_onClose} />, []);

  const memoPageFilter = useMemo(() => <PageFilter />, []);

  return (
    <InstanceModal onHide={onHide} ref={instanceModalRef}>
      <ScrollAvoidingView>
        <View style={styles.container}>
          <View style={styles.view}>
            {memoFilterHeader}

            <View style={styles.detail}>
              <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={false} showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
                <View style={styles.pageMain}>{memoPageFilter}</View>
                <View style={styles.pageSub} pointerEvents='none'></View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollAvoidingView>
    </InstanceModal>
  )

}
