import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, ScrollView } from 'react-native';

import { FILTER_OPTION_AUTHOR } from '@/constants';
import { TStoryAuthor, TOptionFilter } from '@/models/types';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';
import { useSearchAuthorByName } from '@/useQuery/useSearchAuthorByName';

import { TextBase } from '@/components/TextBase';
import { OptionFilter } from '@/components/OptionFilter';
import { TouchableView } from '@/components/TouchableView';
import { TextInputSearch, TTextInputSearchRef } from '@/components/TextInputSearch';

import { styles } from './styles';
import { TPageFilterProps } from '../types';

export const PageAuthor: React.FC<TPageFilterProps> = ({ onChangeFilter }) => {

  const ITEM = { ...FILTER_OPTION_AUTHOR[0] };

  const [search, setSearch] = useState('');

  const [selected, setSelected] = useState<TOptionFilter>(ITEM);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const textInputSearchRef = useRef<TTextInputSearchRef>(null);

  const querySearchAuthorByName = useSearchAuthorByName({ search });

  const data = querySearchAuthorByName?.data || [];

  const _onSearch = (value: string) => {
    if (!!timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!value && !!search) setSearch('');

    if (!value && !!search) setSelected(ITEM);

    if (!!value) timeoutRef.current = setTimeout(() => { setSearch(value); }, 500);
  }

  const _onSelect = (value: TOptionFilter) => setSelected(value);

  const _onPressApply = () => onChangeFilter({ type: 'author', ...selected });

  const _onLoading = () => textInputSearchRef.current?.setLoading?.(querySearchAuthorByName?.isLoading);

  useEffectAfterMount(() => { _onLoading(); }, [querySearchAuthorByName?.isLoading]);

  useEffect(() => { return () => { if (!!timeoutRef.current) clearTimeout(timeoutRef.current); }; }, []);

  const items = useMemo(() => ([{ name: ITEM.label, id: ITEM.value }, ...(data || [])]), [JSON.stringify(data)]);

  const _renderItem = (item: TStoryAuthor, index: number) => {
    const isActive = (item.id === selected.value);

    const option = { label: item?.name, value: item?.id };

    return <OptionFilter option={option} isActive={isActive} onSelect={_onSelect} key={index} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchView}><TextInputSearch placeholder='Tìm kiếm tác giả...' onChangeText={_onSearch} ref={textInputSearchRef} /></View>

      <View style={styles.view}><ScrollView contentContainerStyle={styles.scroll}>{items?.map?.(_renderItem)}</ScrollView></View>

      <View style={styles.bottom}><TouchableView hitSlop={12} onPress={_onPressApply}><TextBase style={styles.bottomText}>Áp dụng điều kiện lọc</TextBase></TouchableView></View>
    </View>
  )

}
