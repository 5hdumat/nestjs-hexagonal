import { Nullable } from '../../../../../common/type/Nullable';

import { Option } from './Option';
import { InputSettingDefaultValue } from './type/InputSettingDefaultValue';
import { InputSettingType } from './type/InputSettingType';

export class InputSetting {
  id: string;

  key: string;

  type: InputSettingType;

  label: string;

  description?: Nullable<string>;

  visible?: Nullable<string>;

  options?: Nullable<Option[]>;

  defaultValue?: Nullable<InputSettingDefaultValue>;

  placeholder?: Nullable<string>;

  maxLength?: Nullable<number>;

  min?: Nullable<number>;

  max?: Nullable<number>;

  step?: Nullable<number>;

  unit?: Nullable<string>;
}
