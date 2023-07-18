import { AminoMsg } from "@cosmjs/amino";
import { MsgMintDeposit, MsgDelegateMintDeposit, MsgWithdrawBurn, MsgWithdrawBurnUndelegate } from "./tx";
export interface MsgMintDepositAminoType extends AminoMsg {
    type: "/kava.router.v1beta1.MsgMintDeposit";
    value: {
        depositor: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgDelegateMintDepositAminoType extends AminoMsg {
    type: "/kava.router.v1beta1.MsgDelegateMintDeposit";
    value: {
        depositor: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgWithdrawBurnAminoType extends AminoMsg {
    type: "/kava.router.v1beta1.MsgWithdrawBurn";
    value: {
        from: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgWithdrawBurnUndelegateAminoType extends AminoMsg {
    type: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate";
    value: {
        from: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/kava.router.v1beta1.MsgMintDeposit": {
        aminoType: string;
        toAmino: ({ depositor, validator, amount }: MsgMintDeposit) => MsgMintDepositAminoType["value"];
        fromAmino: ({ depositor, validator, amount }: MsgMintDepositAminoType["value"]) => MsgMintDeposit;
    };
    "/kava.router.v1beta1.MsgDelegateMintDeposit": {
        aminoType: string;
        toAmino: ({ depositor, validator, amount }: MsgDelegateMintDeposit) => MsgDelegateMintDepositAminoType["value"];
        fromAmino: ({ depositor, validator, amount }: MsgDelegateMintDepositAminoType["value"]) => MsgDelegateMintDeposit;
    };
    "/kava.router.v1beta1.MsgWithdrawBurn": {
        aminoType: string;
        toAmino: ({ from, validator, amount }: MsgWithdrawBurn) => MsgWithdrawBurnAminoType["value"];
        fromAmino: ({ from, validator, amount }: MsgWithdrawBurnAminoType["value"]) => MsgWithdrawBurn;
    };
    "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
        aminoType: string;
        toAmino: ({ from, validator, amount }: MsgWithdrawBurnUndelegate) => MsgWithdrawBurnUndelegateAminoType["value"];
        fromAmino: ({ from, validator, amount }: MsgWithdrawBurnUndelegateAminoType["value"]) => MsgWithdrawBurnUndelegate;
    };
};
