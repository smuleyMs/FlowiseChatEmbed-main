import { BotMessageTheme, TealsExtension, TextInputTheme, UserMessageTheme } from '@/features/bubble/types';
type messageType = 'apiMessage' | 'userMessage' | 'usermessagewaiting' | 'contextMessage';
export type MessageType = {
    message: string;
    type: messageType;
    sourceDocuments?: any;
    fileAnnotations?: any;
};
export type BotProps = {
    chatflowid: string;
    apiHost?: string;
    chatflowConfig?: Record<string, unknown>;
    welcomeMessage?: string;
    botMessage?: BotMessageTheme;
    userMessage?: UserMessageTheme;
    textInput?: TextInputTheme;
    poweredByTextColor?: string;
    badgeBackgroundColor?: string;
    bubbleBackgroundColor?: string;
    bubbleTextColor?: string;
    title?: string;
    titleAvatarSrc?: string;
    fontSize?: number;
    isFullPage?: boolean;
    tealsExtension?: TealsExtension;
};
export declare const Bot: (props: BotProps & {
    class?: string;
}) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Bot.d.ts.map