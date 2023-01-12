import { Nullable } from 'libs/common/type/Nullable';

import { Setting } from './type/Setting';

export class SettingGroup {
  label?: Nullable<string>;

  iconName?: Nullable<string>;

  settings: Setting[];
}
