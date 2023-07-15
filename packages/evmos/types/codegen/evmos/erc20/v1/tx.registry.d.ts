import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConvertCoin, MsgConvertERC20, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        convertCoin(value: MsgConvertCoin): {
            typeUrl: string;
            value: Uint8Array;
        };
        convertERC20(value: MsgConvertERC20): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        convertCoin(value: MsgConvertCoin): {
            typeUrl: string;
            value: MsgConvertCoin;
        };
        convertERC20(value: MsgConvertERC20): {
            typeUrl: string;
            value: MsgConvertERC20;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        convertCoin(value: any): {
            typeUrl: string;
            value: MsgConvertCoin;
        };
        convertERC20(value: any): {
            typeUrl: string;
            value: MsgConvertERC20;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        convertCoin(value: MsgConvertCoin): {
            typeUrl: string;
            value: MsgConvertCoin;
        };
        convertERC20(value: MsgConvertERC20): {
            typeUrl: string;
            value: MsgConvertERC20;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
