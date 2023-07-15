import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMintTokens, MsgBurnTokens } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        mintTokens(value: MsgMintTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnTokens(value: MsgBurnTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        mintTokens(value: MsgMintTokens): {
            typeUrl: string;
            value: MsgMintTokens;
        };
        burnTokens(value: MsgBurnTokens): {
            typeUrl: string;
            value: MsgBurnTokens;
        };
    };
    fromJSON: {
        mintTokens(value: any): {
            typeUrl: string;
            value: MsgMintTokens;
        };
        burnTokens(value: any): {
            typeUrl: string;
            value: MsgBurnTokens;
        };
    };
    fromPartial: {
        mintTokens(value: MsgMintTokens): {
            typeUrl: string;
            value: MsgMintTokens;
        };
        burnTokens(value: MsgBurnTokens): {
            typeUrl: string;
            value: MsgBurnTokens;
        };
    };
};
