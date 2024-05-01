import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSwap, MsgRedeem, MsgGovSetParams, MsgGovUpdateRegistry } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        swap(value: MsgSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
        redeem(value: MsgRedeem): {
            typeUrl: string;
            value: Uint8Array;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        govUpdateRegistry(value: MsgGovUpdateRegistry): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        swap(value: MsgSwap): {
            typeUrl: string;
            value: MsgSwap;
        };
        redeem(value: MsgRedeem): {
            typeUrl: string;
            value: MsgRedeem;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
        govUpdateRegistry(value: MsgGovUpdateRegistry): {
            typeUrl: string;
            value: MsgGovUpdateRegistry;
        };
    };
    fromJSON: {
        swap(value: any): {
            typeUrl: string;
            value: MsgSwap;
        };
        redeem(value: any): {
            typeUrl: string;
            value: MsgRedeem;
        };
        govSetParams(value: any): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
        govUpdateRegistry(value: any): {
            typeUrl: string;
            value: MsgGovUpdateRegistry;
        };
    };
    fromPartial: {
        swap(value: MsgSwap): {
            typeUrl: string;
            value: MsgSwap;
        };
        redeem(value: MsgRedeem): {
            typeUrl: string;
            value: MsgRedeem;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
        govUpdateRegistry(value: MsgGovUpdateRegistry): {
            typeUrl: string;
            value: MsgGovUpdateRegistry;
        };
    };
};
