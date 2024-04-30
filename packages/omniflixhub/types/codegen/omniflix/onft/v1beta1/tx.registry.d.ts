import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgUpdateDenom, MsgTransferDenom, MsgPurgeDenom, MsgMintONFT, MsgTransferONFT, MsgBurnONFT, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateDenom(value: MsgUpdateDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        purgeDenom(value: MsgPurgeDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintONFT(value: MsgMintONFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferONFT(value: MsgTransferONFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnONFT(value: MsgBurnONFT): {
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
        updateDenom(value: MsgUpdateDenom): {
            typeUrl: string;
            value: MsgUpdateDenom;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: MsgTransferDenom;
        };
        purgeDenom(value: MsgPurgeDenom): {
            typeUrl: string;
            value: MsgPurgeDenom;
        };
        mintONFT(value: MsgMintONFT): {
            typeUrl: string;
            value: MsgMintONFT;
        };
        transferONFT(value: MsgTransferONFT): {
            typeUrl: string;
            value: MsgTransferONFT;
        };
        burnONFT(value: MsgBurnONFT): {
            typeUrl: string;
            value: MsgBurnONFT;
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
        updateDenom(value: any): {
            typeUrl: string;
            value: MsgUpdateDenom;
        };
        transferDenom(value: any): {
            typeUrl: string;
            value: MsgTransferDenom;
        };
        purgeDenom(value: any): {
            typeUrl: string;
            value: MsgPurgeDenom;
        };
        mintONFT(value: any): {
            typeUrl: string;
            value: MsgMintONFT;
        };
        transferONFT(value: any): {
            typeUrl: string;
            value: MsgTransferONFT;
        };
        burnONFT(value: any): {
            typeUrl: string;
            value: MsgBurnONFT;
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
        updateDenom(value: MsgUpdateDenom): {
            typeUrl: string;
            value: MsgUpdateDenom;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: MsgTransferDenom;
        };
        purgeDenom(value: MsgPurgeDenom): {
            typeUrl: string;
            value: MsgPurgeDenom;
        };
        mintONFT(value: MsgMintONFT): {
            typeUrl: string;
            value: MsgMintONFT;
        };
        transferONFT(value: MsgTransferONFT): {
            typeUrl: string;
            value: MsgTransferONFT;
        };
        burnONFT(value: MsgBurnONFT): {
            typeUrl: string;
            value: MsgBurnONFT;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
