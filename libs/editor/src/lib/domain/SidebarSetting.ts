import { Nullable } from '../../../../../common/type/Nullable';

import { SidebarSettingType } from './type/NestedSettingType';

export class SidebarSetting {
  type: SidebarSettingType;

  content: string;

  visible?: Nullable<string>;
}
