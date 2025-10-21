import React, { useState, useEffect, useRef, memo, createRef } from 'react';
import { View } from 'react-native';

import { dayjs } from '@/utils/timeTz';

import { ToastMessage } from '@/components/ToastMessage';

import { styles } from './styles';

type TToastItem = { type?: 'success' | 'error' | 'notice', title?: string, message?: string, id?: number };

type TToastRefs = { show?: (item: TToastItem) => void }

const toastRef = createRef<TToastRefs>();

export const ViewToastInstance = memo(() => {

  const [items, setItems] = useState<TToastItem[]>([]);

  const itemsRef = useRef<TToastItem[]>([]);

  const viewRef = useRef<View>(null);

  const _onShow = ({ title, message, type }: TToastItem) => {
    itemsRef.current = [...(itemsRef.current || []), { title, message, type, id: dayjs().valueOf() }];

    setItems([...itemsRef.current]);
  }

  const _onRemove = (item: TToastItem) => {
    itemsRef.current = ([...(itemsRef.current || [])]?.filter?.(element => (element?.id !== item?.id)));

    setItems([...itemsRef.current]);
  }

  useEffect(() => {
    if (!!items?.[0]) viewRef.current?.setNativeProps({ opacity: 1, zIndex: 1, pointerEvents: 'auto' });
    if (!items?.[0]) viewRef.current?.setNativeProps({ opacity: 0, zIndex: -1, pointerEvents: 'none' });
  }, [(!!items?.[0])]);

  useEffect(() => { toastRef.current = { show: _onShow }; }, []);

  const _renderItem = (item: TToastItem) => <ToastMessage item={item} onRemove={_onRemove} key={item.id} />;

  return <View style={styles.container} pointerEvents='none' ref={viewRef}>{!!items?.[0] && <View style={styles.view}>{items?.map?.(_renderItem)}</View>}</View>;

}, () => true);

export const ToastInstance = {
  show: ({ title, message, type }: TToastItem) => toastRef?.current?.show?.({ title, message, type })
}
