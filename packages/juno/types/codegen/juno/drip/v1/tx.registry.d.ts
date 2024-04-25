import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDistributeTokens, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        distributeTokens(value: MsgDistributeTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        distributeTokens(value: MsgDistributeTokens): {
            typeUrl: string;
            value: MsgDistributeTokens;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        distributeTokens(value: any): {
            typeUrl: string;
            value: MsgDistributeTokens;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        distributeTokens(value: MsgDistributeTokens): {
            typeUrl: string;
            value: MsgDistributeTokens;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
