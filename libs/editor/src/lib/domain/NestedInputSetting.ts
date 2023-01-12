import { Nullable } from '../../../../../common/type/Nullable';

import { InputSettingDefaultValue } from './type/InputSettingDefaultValue';
import { NestedInputSettingType } from './type/NestedInputSettingType';
import { Setting } from './type/Setting';

export class NestedInputSetting {
  id: string;

  key: string;

  type: NestedInputSettingType;

  label: string;

  description?: Nullable<string>;

  visible?: Nullable<string>;

  defaultValue?: Nullable<InputSettingDefaultValue>;

  maxCount?: Nullable<number>;

  settings: Setting[];
}
