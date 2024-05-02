import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgSetBeforeSendHook, MsgForceTransfer } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: Uint8Array;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        setBeforeSendHook(value: MsgSetBeforeSendHook): {
            typeUrl: string;
            value: Uint8Array;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: MsgChangeAdmin;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        setBeforeSendHook(value: MsgSetBeforeSendHook): {
            typeUrl: string;
            value: MsgSetBeforeSendHook;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
    };
    fromJSON: {
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createDenom(value: any): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mint(value: any): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: any): {
            typeUrl: string;
            value: MsgBurn;
        };
        changeAdmin(value: any): {
            typeUrl: string;
            value: MsgChangeAdmin;
        };
        setDenomMetadata(value: any): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        setBeforeSendHook(value: any): {
            typeUrl: string;
            value: MsgSetBeforeSendHook;
        };
        forceTransfer(value: any): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: MsgChangeAdmin;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        setBeforeSendHook(value: MsgSetBeforeSendHook): {
            typeUrl: string;
            value: MsgSetBeforeSendHook;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
    };
};
