import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgInvestmint } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        investmint(value: MsgInvestmint): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        investmint(value: MsgInvestmint): {
            typeUrl: string;
            value: MsgInvestmint;
        };
    };
    fromJSON: {
        investmint(value: any): {
            typeUrl: string;
            value: MsgInvestmint;
        };
    };
    fromPartial: {
        investmint(value: MsgInvestmint): {
            typeUrl: string;
            value: MsgInvestmint;
        };
    };
};
