import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAuctionBid, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        auctionBid(value: MsgAuctionBid): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        auctionBid(value: MsgAuctionBid): {
            typeUrl: string;
            value: MsgAuctionBid;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        auctionBid(value: any): {
            typeUrl: string;
            value: MsgAuctionBid;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        auctionBid(value: MsgAuctionBid): {
            typeUrl: string;
            value: MsgAuctionBid;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
