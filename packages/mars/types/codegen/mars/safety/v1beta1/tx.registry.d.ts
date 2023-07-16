import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSafetyFundSpend } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        safetyFundSpend(value: MsgSafetyFundSpend): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        safetyFundSpend(value: MsgSafetyFundSpend): {
            typeUrl: string;
            value: MsgSafetyFundSpend;
        };
    };
    fromJSON: {
        safetyFundSpend(value: any): {
            typeUrl: string;
            value: MsgSafetyFundSpend;
        };
    };
    fromPartial: {
        safetyFundSpend(value: MsgSafetyFundSpend): {
            typeUrl: string;
            value: MsgSafetyFundSpend;
        };
    };
};
