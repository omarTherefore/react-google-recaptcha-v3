import * as React from 'react';
interface IGoogleReCaptchaProviderProps {
    reCaptchaKey?: string;
    language?: string;
    nonce?: string;
}
export interface IGoogleReCaptchaConsumerProps {
    executeRecaptcha?: (action?: string) => Promise<string>;
}
declare const GoogleReCaptchaContext: React.Context<IGoogleReCaptchaConsumerProps>;
declare const GoogleReCaptchaConsumer: React.ExoticComponent<React.ConsumerProps<IGoogleReCaptchaConsumerProps>>;
export { GoogleReCaptchaConsumer, GoogleReCaptchaContext };
export declare class GoogleReCaptchaProvider extends React.Component<IGoogleReCaptchaProviderProps> {
    scriptId: string;
    googleRecaptchaSrc: string;
    resolver: any;
    rejecter: any;
    grecaptcha: Promise<any>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IGoogleReCaptchaProviderProps): void;
    readonly googleReCaptchaContextValue: {
        executeRecaptcha: (action?: string | undefined) => Promise<any>;
    };
    executeRecaptcha: (action?: string | undefined) => Promise<any>;
    handleOnLoad: () => void;
    injectGoogleReCaptchaScript: () => void;
    render(): JSX.Element;
}
//# sourceMappingURL=google-recaptcha-provider.d.ts.map