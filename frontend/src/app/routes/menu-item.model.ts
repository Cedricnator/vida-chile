import { IMenuItems } from '../shared/interfaces/menu-items.interface';

export class MenuItem implements IMenuItems {
   private _label: string;
   private _icon: string;
   private _path: string;

   constructor(label: string, icon: string, path: string) {
      this._label = label;
      this._icon = icon;
      this._path = path;
   }

   get label(): string {
      return this._label;
   }

   get icon(): string {
      return this._icon;
   }

   get path(): string {
      return this._path;
   }
}