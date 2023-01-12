import { Nullable } from '../../../../../common/type/Nullable';

import { IconSize } from './IconSize';
import { InputSettingDefaultValue } from './type/InputSettingDefaultValue';

export class Option {
  label: string;

  value: InputSettingDefaultValue;

  iconName?: Nullable<string>;

  iconSize?: Nullable<IconSize>;

  disabled?: Nullable<boolean>;
}
