declare namespace ButtonCssNamespace {
  export interface IButtonCss {
    'storybook-button': string;
    'storybook-button--large': string;
    'storybook-button--medium': string;
    'storybook-button--primary': string;
    'storybook-button--secondary': string;
    'storybook-button--small': string;
    storybookButton: string;
    storybookButtonLarge: string;
    storybookButtonMedium: string;
    storybookButtonPrimary: string;
    storybookButtonSecondary: string;
    storybookButtonSmall: string;
  }
}

declare const ButtonCssModule: ButtonCssNamespace.IButtonCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonCssNamespace.IButtonCss;
};

export = ButtonCssModule;
