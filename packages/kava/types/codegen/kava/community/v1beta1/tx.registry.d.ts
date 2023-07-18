import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundCommunityPool } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
    };
    fromJSON: {
        fundCommunityPool(value: any): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
    };
    fromPartial: {
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
    };
};
