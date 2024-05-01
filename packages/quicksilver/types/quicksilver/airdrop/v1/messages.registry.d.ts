import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaim, MsgIncentivePoolSpend } from "./messages";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        incentivePoolSpend(value: MsgIncentivePoolSpend): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        incentivePoolSpend(value: MsgIncentivePoolSpend): {
            typeUrl: string;
            value: MsgIncentivePoolSpend;
        };
    };
    fromJSON: {
        claim(value: any): {
            typeUrl: string;
            value: MsgClaim;
        };
        incentivePoolSpend(value: any): {
            typeUrl: string;
            value: MsgIncentivePoolSpend;
        };
    };
    fromPartial: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        incentivePoolSpend(value: MsgIncentivePoolSpend): {
            typeUrl: string;
            value: MsgIncentivePoolSpend;
        };
    };
};
