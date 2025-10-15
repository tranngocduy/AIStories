import React, { forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';

import { TChaptersProps, TChaptersRef } from '../types';

export const Chapters = forwardRef<TChaptersRef, TChaptersProps>(({ translateVersionId }, ref) => {

  return (
    <View>

    </View>
  )

});
