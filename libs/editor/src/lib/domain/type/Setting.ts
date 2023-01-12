import { InputSetting } from '../InputSetting';
import { NestedInputSetting } from '../NestedInputSetting';
import { NestedSidebarSetting } from '../NestedSidebarSetting';
import { SidebarSetting } from '../SidebarSetting';

export type Setting = InputSetting | SidebarSetting | NestedInputSetting | NestedSidebarSetting;
