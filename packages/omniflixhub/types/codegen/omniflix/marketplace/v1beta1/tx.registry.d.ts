import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgListNFT, MsgEditListing, MsgDeListNFT, MsgBuyNFT, MsgCreateAuction, MsgCancelAuction, MsgPlaceBid, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        listNFT(value: MsgListNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        editListing(value: MsgEditListing): {
            typeUrl: string;
            value: Uint8Array;
        };
        deListNFT(value: MsgDeListNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: Uint8Array;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: Uint8Array;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        listNFT(value: MsgListNFT): {
            typeUrl: string;
            value: MsgListNFT;
        };
        editListing(value: MsgEditListing): {
            typeUrl: string;
            value: MsgEditListing;
        };
        deListNFT(value: MsgDeListNFT): {
            typeUrl: string;
            value: MsgDeListNFT;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: MsgBuyNFT;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: MsgCreateAuction;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: MsgCancelAuction;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        listNFT(value: any): {
            typeUrl: string;
            value: MsgListNFT;
        };
        editListing(value: any): {
            typeUrl: string;
            value: MsgEditListing;
        };
        deListNFT(value: any): {
            typeUrl: string;
            value: MsgDeListNFT;
        };
        buyNFT(value: any): {
            typeUrl: string;
            value: MsgBuyNFT;
        };
        createAuction(value: any): {
            typeUrl: string;
            value: MsgCreateAuction;
        };
        cancelAuction(value: any): {
            typeUrl: string;
            value: MsgCancelAuction;
        };
        placeBid(value: any): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        listNFT(value: MsgListNFT): {
            typeUrl: string;
            value: MsgListNFT;
        };
        editListing(value: MsgEditListing): {
            typeUrl: string;
            value: MsgEditListing;
        };
        deListNFT(value: MsgDeListNFT): {
            typeUrl: string;
            value: MsgDeListNFT;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: MsgBuyNFT;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: MsgCreateAuction;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: MsgCancelAuction;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
