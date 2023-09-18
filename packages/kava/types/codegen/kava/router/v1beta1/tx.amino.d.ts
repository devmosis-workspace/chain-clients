import { MsgMintDeposit, MsgDelegateMintDeposit, MsgWithdrawBurn, MsgWithdrawBurnUndelegate } from "./tx";
export declare const AminoConverter: {
    "/kava.router.v1beta1.MsgMintDeposit": {
        aminoType: string;
        toAmino: (message: MsgMintDeposit) => import("./tx").MsgMintDepositAmino;
        fromAmino: (object: import("./tx").MsgMintDepositAmino) => MsgMintDeposit;
    };
    "/kava.router.v1beta1.MsgDelegateMintDeposit": {
        aminoType: string;
        toAmino: (message: MsgDelegateMintDeposit) => import("./tx").MsgDelegateMintDepositAmino;
        fromAmino: (object: import("./tx").MsgDelegateMintDepositAmino) => MsgDelegateMintDeposit;
    };
    "/kava.router.v1beta1.MsgWithdrawBurn": {
        aminoType: string;
        toAmino: (message: MsgWithdrawBurn) => import("./tx").MsgWithdrawBurnAmino;
        fromAmino: (object: import("./tx").MsgWithdrawBurnAmino) => MsgWithdrawBurn;
    };
    "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
        aminoType: string;
        toAmino: (message: MsgWithdrawBurnUndelegate) => import("./tx").MsgWithdrawBurnUndelegateAmino;
        fromAmino: (object: import("./tx").MsgWithdrawBurnUndelegateAmino) => MsgWithdrawBurnUndelegate;
    };
};
