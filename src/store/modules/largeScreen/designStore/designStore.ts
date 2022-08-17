import { defineStore } from 'pinia';
import { theme } from '/@/settings/designSetting';
import { DesignStateType, AppThemeColorType } from './designStore.d';
import { createLocalStorage } from '/@/utils/cache';

import { StorageEnum } from '/@/enums/largeScreen/storageEnum';
import { ThemeEnum } from '/@/enums/largeScreen/styleEnum';

const ls = createLocalStorage();

const { GO_DESIGN_STORE } = StorageEnum;

const { darkTheme, appTheme, appThemeDetail } = theme;

const storageDesign = ls.get(GO_DESIGN_STORE);

export const useDesignStore = defineStore({
  id: 'useDesignStore',
  state: (): DesignStateType =>
    storageDesign || {
      // 是否暗黑
      darkTheme,
      // 主题名称
      themeName: (darkTheme && ThemeEnum.DARK) || ThemeEnum.LIGHT,
      // 颜色色号
      appTheme,
      appThemeDetail,
    },
  getters: {
    getDarkTheme(): boolean {
      return this.darkTheme;
    },
    getAppTheme(): string {
      return this.appTheme;
    },
    getAppThemeDetail(): AppThemeColorType | null {
      return this.appThemeDetail;
    },
  },
  actions: {
    // 切换主题
    changeTheme(): void {
      this.darkTheme = !this.darkTheme;
      this.themeName = this.darkTheme ? ThemeEnum.DARK : ThemeEnum.LIGHT;
      ls.set(GO_DESIGN_STORE, this.$state);
    },
    // 设置颜色
    setAppColor(color: AppThemeColorType): void {
      this.appTheme = color.hex;
      this.appThemeDetail = color;
      ls.set(GO_DESIGN_STORE, this.$state);
    },
  },
});
