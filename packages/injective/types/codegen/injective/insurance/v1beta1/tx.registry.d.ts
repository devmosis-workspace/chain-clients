import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createInsuranceFund(value: MsgCreateInsuranceFund): {
            typeUrl: string;
            value: Uint8Array;
        };
        underwrite(value: MsgUnderwrite): {
            typeUrl: string;
            value: Uint8Array;
        };
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createInsuranceFund(value: MsgCreateInsuranceFund): {
            typeUrl: string;
            value: MsgCreateInsuranceFund;
        };
        underwrite(value: MsgUnderwrite): {
            typeUrl: string;
            value: MsgUnderwrite;
        };
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        createInsuranceFund(value: any): {
            typeUrl: string;
            value: MsgCreateInsuranceFund;
        };
        underwrite(value: any): {
            typeUrl: string;
            value: MsgUnderwrite;
        };
        requestRedemption(value: any): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createInsuranceFund(value: MsgCreateInsuranceFund): {
            typeUrl: string;
            value: MsgCreateInsuranceFund;
        };
        underwrite(value: MsgUnderwrite): {
            typeUrl: string;
            value: MsgUnderwrite;
        };
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
