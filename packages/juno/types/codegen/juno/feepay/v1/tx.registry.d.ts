import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterFeePayContract, MsgUnregisterFeePayContract, MsgFundFeePayContract, MsgUpdateFeePayContractWalletLimit, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerFeePayContract(value: MsgRegisterFeePayContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        unregisterFeePayContract(value: MsgUnregisterFeePayContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        fundFeePayContract(value: MsgFundFeePayContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateFeePayContractWalletLimit(value: MsgUpdateFeePayContractWalletLimit): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerFeePayContract(value: MsgRegisterFeePayContract): {
            typeUrl: string;
            value: MsgRegisterFeePayContract;
        };
        unregisterFeePayContract(value: MsgUnregisterFeePayContract): {
            typeUrl: string;
            value: MsgUnregisterFeePayContract;
        };
        fundFeePayContract(value: MsgFundFeePayContract): {
            typeUrl: string;
            value: MsgFundFeePayContract;
        };
        updateFeePayContractWalletLimit(value: MsgUpdateFeePayContractWalletLimit): {
            typeUrl: string;
            value: MsgUpdateFeePayContractWalletLimit;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        registerFeePayContract(value: any): {
            typeUrl: string;
            value: MsgRegisterFeePayContract;
        };
        unregisterFeePayContract(value: any): {
            typeUrl: string;
            value: MsgUnregisterFeePayContract;
        };
        fundFeePayContract(value: any): {
            typeUrl: string;
            value: MsgFundFeePayContract;
        };
        updateFeePayContractWalletLimit(value: any): {
            typeUrl: string;
            value: MsgUpdateFeePayContractWalletLimit;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerFeePayContract(value: MsgRegisterFeePayContract): {
            typeUrl: string;
            value: MsgRegisterFeePayContract;
        };
        unregisterFeePayContract(value: MsgUnregisterFeePayContract): {
            typeUrl: string;
            value: MsgUnregisterFeePayContract;
        };
        fundFeePayContract(value: MsgFundFeePayContract): {
            typeUrl: string;
            value: MsgFundFeePayContract;
        };
        updateFeePayContractWalletLimit(value: MsgUpdateFeePayContractWalletLimit): {
            typeUrl: string;
            value: MsgUpdateFeePayContractWalletLimit;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
