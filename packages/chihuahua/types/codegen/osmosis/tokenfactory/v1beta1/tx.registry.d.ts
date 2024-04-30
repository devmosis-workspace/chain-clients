import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgForceTransfer, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
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
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
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
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
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
        forceTransfer(value: any): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
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
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};