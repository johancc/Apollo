declare namespace HelloWorldCssNamespace {
  export interface IHelloWorldCss {
    'hello-world': string;
    helloWorld: string;
  }
}

declare const HelloWorldCssModule: HelloWorldCssNamespace.IHelloWorldCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HelloWorldCssNamespace.IHelloWorldCss;
};

export = HelloWorldCssModule;
