import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgGovUpdateMinGasPrice, MsgGovSetEmergencyGroup, MsgGovUpdateInflationParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice): {
            typeUrl: string;
            value: Uint8Array;
        };
        govSetEmergencyGroup(value: MsgGovSetEmergencyGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        govUpdateInflationParams(value: MsgGovUpdateInflationParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice): {
            typeUrl: string;
            value: MsgGovUpdateMinGasPrice;
        };
        govSetEmergencyGroup(value: MsgGovSetEmergencyGroup): {
            typeUrl: string;
            value: MsgGovSetEmergencyGroup;
        };
        govUpdateInflationParams(value: MsgGovUpdateInflationParams): {
            typeUrl: string;
            value: MsgGovUpdateInflationParams;
        };
    };
    fromJSON: {
        govUpdateMinGasPrice(value: any): {
            typeUrl: string;
            value: MsgGovUpdateMinGasPrice;
        };
        govSetEmergencyGroup(value: any): {
            typeUrl: string;
            value: MsgGovSetEmergencyGroup;
        };
        govUpdateInflationParams(value: any): {
            typeUrl: string;
            value: MsgGovUpdateInflationParams;
        };
    };
    fromPartial: {
        govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice): {
            typeUrl: string;
            value: MsgGovUpdateMinGasPrice;
        };
        govSetEmergencyGroup(value: MsgGovSetEmergencyGroup): {
            typeUrl: string;
            value: MsgGovSetEmergencyGroup;
        };
        govUpdateInflationParams(value: MsgGovUpdateInflationParams): {
            typeUrl: string;
            value: MsgGovUpdateInflationParams;
        };
    };
};
