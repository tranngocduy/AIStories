import React, { useState, useEffect, useRef, memo, createRef } from 'react';
import { View } from 'react-native';

import { dayjs } from '@/utils/timeTz';

import ToastMessage from '@/component/ToastMessage';

import styles from './styles';

type ToastItem = { type?: 'success' | 'error' | 'notice', title?: string, message?: string, id?: number };

type ToastRefs = { show?: (item: ToastItem) => void }

const toastRef = createRef<ToastRefs>();

export const ViewToastInstance = memo(() => {

  const [items, setItems] = useState<ToastItem[]>([]);

  const itemsRef = useRef<ToastItem[]>([]);

  const viewRef = useRef<View>(null);

  const _onShow = ({ title, message, type }: ToastItem) => {
    itemsRef.current = [...(itemsRef.current || []), { title, message, type, id: dayjs().valueOf() }];

    setItems([...itemsRef.current]);
  }

  const _onRemove = (item: ToastItem) => {
    itemsRef.current = ([...(itemsRef.current || [])]?.filter?.(element => (element?.id !== item?.id)));

    setItems([...itemsRef.current]);
  }

  useEffect(() => {
    if (!!items?.[0]) viewRef.current?.setNativeProps({ opacity: 1, zIndex: 1, pointerEvents: 'auto' });
    if (!items?.[0]) viewRef.current?.setNativeProps({ opacity: 0, zIndex: -1, pointerEvents: 'none' });
  }, [(!!items?.[0])]);

  useEffect(() => { toastRef.current = { show: _onShow }; }, []);

  const _renderItem = (item: ToastItem) => <ToastMessage item={item} onRemove={_onRemove} key={item.id} />;

  return <View style={styles.container} pointerEvents='none' ref={viewRef}>{!!items?.[0] && <View style={styles.view}>{items?.map?.(_renderItem)}</View>}</View>;

}, () => true);

export const ToastInstance = {
  show: ({ title, message, type }: ToastItem) => toastRef?.current?.show?.({ title, message, type })
}
