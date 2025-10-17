import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, ScrollView } from 'react-native';

import { TStoryAuthor } from '@/models/types';
import { useSearchAuthorByName } from '@/useQuery/useSearchAuthorByName';

import { OptionFilter } from '@/components/OptionFilter';
import { TextInputSearch } from '@/components/TextInputSearch';

import { styles } from './styles';

export const PageAuthor: React.FC<{}> = () => {

  const [search, setSearch] = useState('');

  const [activeValue, setActiveValue] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const querySearchAuthorByName = useSearchAuthorByName({ search });

  const data = querySearchAuthorByName?.data || [];

  const _onSearch = (value: string) => {
    if (!!timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!value && !!search) setSearch('');

    if (!!value) timeoutRef.current = setTimeout(() => { setSearch(value); }, 700);
  }

  const _onSelect = (value: any) => setActiveValue(value);

  useEffect(() => {
    return () => { if (!!timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const items = useMemo(() => ([{ name: 'Tất cả', id: 0 }, ...(data || [])]), [JSON.stringify(data)]);

  const _renderItem = (item: TStoryAuthor, index: number) => {
    const isActive = (item.id === activeValue);
    const option = { label: item?.name, value: item?.id };
    return <OptionFilter option={option} isActive={isActive} onSelect={_onSelect} key={index} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchView}><TextInputSearch placeholder='Tìm kiếm tác giả...' onChangeText={_onSearch} /></View>

      <ScrollView contentContainerStyle={styles.scroll}>{items?.map?.(_renderItem)}</ScrollView>
    </View>
  )

}
