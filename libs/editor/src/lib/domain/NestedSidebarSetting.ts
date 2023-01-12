import { NestedSidebarSettingType } from './type/NestedSidebarSettingType';
import { Setting } from './type/Setting';

export class NestedSidebarSetting {
  type: NestedSidebarSettingType;

  content: string;

  settings: Setting[];
}
