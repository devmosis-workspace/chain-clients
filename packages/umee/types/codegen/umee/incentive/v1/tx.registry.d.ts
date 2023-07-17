import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaim, MsgBond, MsgBeginUnbonding, MsgEmergencyUnbond, MsgSponsor, MsgGovSetParams, MsgGovCreatePrograms } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        bond(value: MsgBond): {
            typeUrl: string;
            value: Uint8Array;
        };
        beginUnbonding(value: MsgBeginUnbonding): {
            typeUrl: string;
            value: Uint8Array;
        };
        emergencyUnbond(value: MsgEmergencyUnbond): {
            typeUrl: string;
            value: Uint8Array;
        };
        sponsor(value: MsgSponsor): {
            typeUrl: string;
            value: Uint8Array;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        govCreatePrograms(value: MsgGovCreatePrograms): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        bond(value: MsgBond): {
            typeUrl: string;
            value: MsgBond;
        };
        beginUnbonding(value: MsgBeginUnbonding): {
            typeUrl: string;
            value: MsgBeginUnbonding;
        };
        emergencyUnbond(value: MsgEmergencyUnbond): {
            typeUrl: string;
            value: MsgEmergencyUnbond;
        };
        sponsor(value: MsgSponsor): {
            typeUrl: string;
            value: MsgSponsor;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
        govCreatePrograms(value: MsgGovCreatePrograms): {
            typeUrl: string;
            value: MsgGovCreatePrograms;
        };
    };
    fromJSON: {
        claim(value: any): {
            typeUrl: string;
            value: MsgClaim;
        };
        bond(value: any): {
            typeUrl: string;
            value: MsgBond;
        };
        beginUnbonding(value: any): {
            typeUrl: string;
            value: MsgBeginUnbonding;
        };
        emergencyUnbond(value: any): {
            typeUrl: string;
            value: MsgEmergencyUnbond;
        };
        sponsor(value: any): {
            typeUrl: string;
            value: MsgSponsor;
        };
        govSetParams(value: any): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
        govCreatePrograms(value: any): {
            typeUrl: string;
            value: MsgGovCreatePrograms;
        };
    };
    fromPartial: {
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        bond(value: MsgBond): {
            typeUrl: string;
            value: MsgBond;
        };
        beginUnbonding(value: MsgBeginUnbonding): {
            typeUrl: string;
            value: MsgBeginUnbonding;
        };
        emergencyUnbond(value: MsgEmergencyUnbond): {
            typeUrl: string;
            value: MsgEmergencyUnbond;
        };
        sponsor(value: MsgSponsor): {
            typeUrl: string;
            value: MsgSponsor;
        };
        govSetParams(value: MsgGovSetParams): {
            typeUrl: string;
            value: MsgGovSetParams;
        };
        govCreatePrograms(value: MsgGovCreatePrograms): {
            typeUrl: string;
            value: MsgGovCreatePrograms;
        };
    };
};
