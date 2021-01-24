declare namespace HeaderCssNamespace {
  export interface IHeaderCss {
    wrapper: string;
  }
}

declare const HeaderCssModule: HeaderCssNamespace.IHeaderCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderCssNamespace.IHeaderCss;
};

export = HeaderCssModule;
