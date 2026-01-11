import React, { useRef } from 'react';
import { View } from 'react-native';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';
import InstanceModal, { InstanceModalRefs } from '@/component/InstanceModal';

import styles from './styles';

type ToastConfirmProps = { title?: string | React.ReactNode, message?: string | React.ReactNode, labelConfirm?: string, labelCancel?: string, resolve?: (status?: boolean) => void, onHide?: () => void; };

const ToastConfirm: React.FC<ToastConfirmProps> = ({ title, message, labelConfirm = 'Xác nhận', labelCancel = 'Huỷ', resolve, onHide }) => {

  const instanceModalRef = useRef<InstanceModalRefs>(null);

  const _onClose = () => instanceModalRef.current?.onClose?.(() => resolve?.(false));

  const _onConfirm = () => instanceModalRef.current?.onClose?.(() => resolve?.(true));

  return (
    <InstanceModal onHide={onHide} ref={instanceModalRef}>
      <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.titleView}>
            {(typeof title === 'string') ? <TextBase style={styles.title}>{title}</TextBase> : title}
          </View>

          <View style={styles.messageView}>
            {(typeof message === 'string') ? <TextBase style={styles.message}>{message}</TextBase> : message}
          </View>

          <View style={styles.bottom}>
            <TouchableView style={styles.button} onPress={_onClose}><TextBase style={styles.label}>{labelCancel}</TextBase></TouchableView>
            <TouchableView style={styles.button} onPress={_onConfirm}><TextBase style={styles.label}>{labelConfirm}</TextBase></TouchableView>
          </View>
        </View>
      </View>
    </InstanceModal>
  )

}

export default ToastConfirm;
