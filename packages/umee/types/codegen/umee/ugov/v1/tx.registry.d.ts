import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGovUpdateMinGasPrice } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice): {
            typeUrl: string;
            value: MsgGovUpdateMinGasPrice;
        };
    };
    fromJSON: {
        govUpdateMinGasPrice(value: any): {
            typeUrl: string;
            value: MsgGovUpdateMinGasPrice;
        };
    };
    fromPartial: {
        govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice): {
            typeUrl: string;
            value: MsgGovUpdateMinGasPrice;
        };
    };
};
