import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueDenom, MsgMintNFT, MsgEditNFT, MsgTransferNFT, MsgBurnNFT } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        issueDenom(value: MsgIssueDenom): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        editNFT(value: MsgEditNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferNFT(value: MsgTransferNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        issueDenom(value: MsgIssueDenom): {
            typeUrl: string;
            value: MsgIssueDenom;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: MsgMintNFT;
        };
        editNFT(value: MsgEditNFT): {
            typeUrl: string;
            value: MsgEditNFT;
        };
        transferNFT(value: MsgTransferNFT): {
            typeUrl: string;
            value: MsgTransferNFT;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: MsgBurnNFT;
        };
    };
    fromJSON: {
        issueDenom(value: any): {
            typeUrl: string;
            value: MsgIssueDenom;
        };
        mintNFT(value: any): {
            typeUrl: string;
            value: MsgMintNFT;
        };
        editNFT(value: any): {
            typeUrl: string;
            value: MsgEditNFT;
        };
        transferNFT(value: any): {
            typeUrl: string;
            value: MsgTransferNFT;
        };
        burnNFT(value: any): {
            typeUrl: string;
            value: MsgBurnNFT;
        };
    };
    fromPartial: {
        issueDenom(value: MsgIssueDenom): {
            typeUrl: string;
            value: MsgIssueDenom;
        };
        mintNFT(value: MsgMintNFT): {
            typeUrl: string;
            value: MsgMintNFT;
        };
        editNFT(value: MsgEditNFT): {
            typeUrl: string;
            value: MsgEditNFT;
        };
        transferNFT(value: MsgTransferNFT): {
            typeUrl: string;
            value: MsgTransferNFT;
        };
        burnNFT(value: MsgBurnNFT): {
            typeUrl: string;
            value: MsgBurnNFT;
        };
    };
};
