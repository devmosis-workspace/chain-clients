import { MsgRegisterFeePayContract, MsgUnregisterFeePayContract, MsgFundFeePayContract, MsgUpdateFeePayContractWalletLimit, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/juno.feepay.v1.MsgRegisterFeePayContract": {
        aminoType: string;
        toAmino: (message: MsgRegisterFeePayContract) => import("./tx").MsgRegisterFeePayContractAmino;
        fromAmino: (object: import("./tx").MsgRegisterFeePayContractAmino) => MsgRegisterFeePayContract;
    };
    "/juno.feepay.v1.MsgUnregisterFeePayContract": {
        aminoType: string;
        toAmino: (message: MsgUnregisterFeePayContract) => import("./tx").MsgUnregisterFeePayContractAmino;
        fromAmino: (object: import("./tx").MsgUnregisterFeePayContractAmino) => MsgUnregisterFeePayContract;
    };
    "/juno.feepay.v1.MsgFundFeePayContract": {
        aminoType: string;
        toAmino: (message: MsgFundFeePayContract) => import("./tx").MsgFundFeePayContractAmino;
        fromAmino: (object: import("./tx").MsgFundFeePayContractAmino) => MsgFundFeePayContract;
    };
    "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit": {
        aminoType: string;
        toAmino: (message: MsgUpdateFeePayContractWalletLimit) => import("./tx").MsgUpdateFeePayContractWalletLimitAmino;
        fromAmino: (object: import("./tx").MsgUpdateFeePayContractWalletLimitAmino) => MsgUpdateFeePayContractWalletLimit;
    };
    "/juno.feepay.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
