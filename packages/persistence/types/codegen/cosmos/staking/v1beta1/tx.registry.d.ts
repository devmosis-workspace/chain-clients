import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams, MsgUnbondValidator, MsgTokenizeShares, MsgRedeemTokensForShares, MsgTransferTokenizeShareRecord, MsgDisableTokenizeShares, MsgEnableTokenizeShares, MsgValidatorBond } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        unbondValidator(value: MsgUnbondValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        tokenizeShares(value: MsgTokenizeShares): {
            typeUrl: string;
            value: Uint8Array;
        };
        redeemTokensForShares(value: MsgRedeemTokensForShares): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord): {
            typeUrl: string;
            value: Uint8Array;
        };
        disableTokenizeShares(value: MsgDisableTokenizeShares): {
            typeUrl: string;
            value: Uint8Array;
        };
        enableTokenizeShares(value: MsgEnableTokenizeShares): {
            typeUrl: string;
            value: Uint8Array;
        };
        validatorBond(value: MsgValidatorBond): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        unbondValidator(value: MsgUnbondValidator): {
            typeUrl: string;
            value: MsgUnbondValidator;
        };
        tokenizeShares(value: MsgTokenizeShares): {
            typeUrl: string;
            value: MsgTokenizeShares;
        };
        redeemTokensForShares(value: MsgRedeemTokensForShares): {
            typeUrl: string;
            value: MsgRedeemTokensForShares;
        };
        transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord): {
            typeUrl: string;
            value: MsgTransferTokenizeShareRecord;
        };
        disableTokenizeShares(value: MsgDisableTokenizeShares): {
            typeUrl: string;
            value: MsgDisableTokenizeShares;
        };
        enableTokenizeShares(value: MsgEnableTokenizeShares): {
            typeUrl: string;
            value: MsgEnableTokenizeShares;
        };
        validatorBond(value: MsgValidatorBond): {
            typeUrl: string;
            value: MsgValidatorBond;
        };
    };
    fromJSON: {
        createValidator(value: any): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: any): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: any): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: any): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: any): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: any): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        unbondValidator(value: any): {
            typeUrl: string;
            value: MsgUnbondValidator;
        };
        tokenizeShares(value: any): {
            typeUrl: string;
            value: MsgTokenizeShares;
        };
        redeemTokensForShares(value: any): {
            typeUrl: string;
            value: MsgRedeemTokensForShares;
        };
        transferTokenizeShareRecord(value: any): {
            typeUrl: string;
            value: MsgTransferTokenizeShareRecord;
        };
        disableTokenizeShares(value: any): {
            typeUrl: string;
            value: MsgDisableTokenizeShares;
        };
        enableTokenizeShares(value: any): {
            typeUrl: string;
            value: MsgEnableTokenizeShares;
        };
        validatorBond(value: any): {
            typeUrl: string;
            value: MsgValidatorBond;
        };
    };
    fromPartial: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        unbondValidator(value: MsgUnbondValidator): {
            typeUrl: string;
            value: MsgUnbondValidator;
        };
        tokenizeShares(value: MsgTokenizeShares): {
            typeUrl: string;
            value: MsgTokenizeShares;
        };
        redeemTokensForShares(value: MsgRedeemTokensForShares): {
            typeUrl: string;
            value: MsgRedeemTokensForShares;
        };
        transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord): {
            typeUrl: string;
            value: MsgTransferTokenizeShareRecord;
        };
        disableTokenizeShares(value: MsgDisableTokenizeShares): {
            typeUrl: string;
            value: MsgDisableTokenizeShares;
        };
        enableTokenizeShares(value: MsgEnableTokenizeShares): {
            typeUrl: string;
            value: MsgEnableTokenizeShares;
        };
        validatorBond(value: MsgValidatorBond): {
            typeUrl: string;
            value: MsgValidatorBond;
        };
    };
};
