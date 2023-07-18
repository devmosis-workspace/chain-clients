import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin, MsgConvertCosmosCoinToERC20, MsgConvertCosmosCoinFromERC20 } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        convertCoinToERC20(value: MsgConvertCoinToERC20): {
            typeUrl: string;
            value: Uint8Array;
        };
        convertERC20ToCoin(value: MsgConvertERC20ToCoin): {
            typeUrl: string;
            value: Uint8Array;
        };
        convertCosmosCoinToERC20(value: MsgConvertCosmosCoinToERC20): {
            typeUrl: string;
            value: Uint8Array;
        };
        convertCosmosCoinFromERC20(value: MsgConvertCosmosCoinFromERC20): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        convertCoinToERC20(value: MsgConvertCoinToERC20): {
            typeUrl: string;
            value: MsgConvertCoinToERC20;
        };
        convertERC20ToCoin(value: MsgConvertERC20ToCoin): {
            typeUrl: string;
            value: MsgConvertERC20ToCoin;
        };
        convertCosmosCoinToERC20(value: MsgConvertCosmosCoinToERC20): {
            typeUrl: string;
            value: MsgConvertCosmosCoinToERC20;
        };
        convertCosmosCoinFromERC20(value: MsgConvertCosmosCoinFromERC20): {
            typeUrl: string;
            value: MsgConvertCosmosCoinFromERC20;
        };
    };
    fromJSON: {
        convertCoinToERC20(value: any): {
            typeUrl: string;
            value: MsgConvertCoinToERC20;
        };
        convertERC20ToCoin(value: any): {
            typeUrl: string;
            value: MsgConvertERC20ToCoin;
        };
        convertCosmosCoinToERC20(value: any): {
            typeUrl: string;
            value: MsgConvertCosmosCoinToERC20;
        };
        convertCosmosCoinFromERC20(value: any): {
            typeUrl: string;
            value: MsgConvertCosmosCoinFromERC20;
        };
    };
    fromPartial: {
        convertCoinToERC20(value: MsgConvertCoinToERC20): {
            typeUrl: string;
            value: MsgConvertCoinToERC20;
        };
        convertERC20ToCoin(value: MsgConvertERC20ToCoin): {
            typeUrl: string;
            value: MsgConvertERC20ToCoin;
        };
        convertCosmosCoinToERC20(value: MsgConvertCosmosCoinToERC20): {
            typeUrl: string;
            value: MsgConvertCosmosCoinToERC20;
        };
        convertCosmosCoinFromERC20(value: MsgConvertCosmosCoinFromERC20): {
            typeUrl: string;
            value: MsgConvertCosmosCoinFromERC20;
        };
    };
};
