import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, ScrollView } from 'react-native';

import { FILTER_OPTION_AUTHOR } from '@/constants';
import { TAuthor, TOptionFilter } from '@/models/types';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';
import { useSearchAuthorByName } from '@/useQuery/useSearchAuthorByName';

import TextBase from '@/component/TextBase';
import OptionFilter from '@/component/OptionFilter';
import TouchableView from '@/component/TouchableView';
import TextInputSearch, { TextInputSearchRefs } from '@/component/TextInputSearch';

import styles from './styles';
import { PageFilterProps } from '../types';

export const PageAuthor: React.FC<PageFilterProps> = ({ query, onChangeFilter }) => {

  const ITEM = { ...FILTER_OPTION_AUTHOR[0] };

  const SELECTED = !!query?.value ? { name: query?.label, id: query?.value } : null;

  const [search, setSearch] = useState('');

  const [selected, setSelected] = useState<TOptionFilter>(query || ITEM);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const textInputSearchRef = useRef<TextInputSearchRefs>(null);

  const querySearchAuthorByName = useSearchAuthorByName({ search });

  const data = querySearchAuthorByName?.data || (!!SELECTED ? [SELECTED] : []);

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

  const _renderItem = (item: { name: string, id: number }, index: number) => {
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
