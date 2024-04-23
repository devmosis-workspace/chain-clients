import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitBidRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitBid(value: MsgSubmitBidRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitBid(value: MsgSubmitBidRequest): {
            typeUrl: string;
            value: MsgSubmitBidRequest;
        };
    };
    fromJSON: {
        submitBid(value: any): {
            typeUrl: string;
            value: MsgSubmitBidRequest;
        };
    };
    fromPartial: {
        submitBid(value: MsgSubmitBidRequest): {
            typeUrl: string;
            value: MsgSubmitBidRequest;
        };
    };
};
