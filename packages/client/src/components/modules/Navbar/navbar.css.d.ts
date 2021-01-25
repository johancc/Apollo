declare namespace NavbarCssNamespace {
  export interface INavbarCss {
    wrapper: string;
  }
}

declare const NavbarCssModule: NavbarCssNamespace.INavbarCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavbarCssNamespace.INavbarCss;
};

export = NavbarCssModule;
