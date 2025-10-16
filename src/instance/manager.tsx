import React from 'react';
import { Keyboard } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

import { runAfterInteractions } from '@/utils/app';

class ComponentManager<T> {
  comp: React.FC<T>;
  compObj?: RootSiblings | null;
  props?: ({ resolve: Function } & T) | null;

  constructor(Comp: React.FC<T>) {
    this.comp = Comp;
    this.props = null;
    this.compObj = null;
  }

  show(props: T, callback?: any) {
    Keyboard.dismiss();

    runAfterInteractions(() => {
      if (this.compObj) {
        this.hide(() => {
          this.createComponentObject(props, callback);
        });
      } else {
        this.createComponentObject(props, callback);
      }
    });
  }

  hide(callback?: any) {
    if (!!this.props?.resolve) this.props?.resolve?.();

    runAfterInteractions(() => {
      if (this.compObj) {
        this.compObj.destroy(() => {
          if (callback) {
            callback({ destroy: true });
          }
        });
        this.props = null;
        this.compObj = null;
      }
    });
  }

  createComponentObject(props: T, callback: any) {
    this.compObj = new RootSiblings(
      (
        <this.comp
          {...props}
          onHide={this.hide.bind(this)}
          callback={callback}
        />
      ),
      callback
    );
  }
}

const Manager = <T,>(Comp: React.FC<T>) => new ComponentManager<T>(Comp);

export default Manager;
