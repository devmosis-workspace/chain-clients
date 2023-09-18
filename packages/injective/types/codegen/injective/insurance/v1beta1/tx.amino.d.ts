import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
        aminoType: string;
        toAmino: (message: MsgCreateInsuranceFund) => import("./tx").MsgCreateInsuranceFundAmino;
        fromAmino: (object: import("./tx").MsgCreateInsuranceFundAmino) => MsgCreateInsuranceFund;
    };
    "/injective.insurance.v1beta1.MsgUnderwrite": {
        aminoType: string;
        toAmino: (message: MsgUnderwrite) => import("./tx").MsgUnderwriteAmino;
        fromAmino: (object: import("./tx").MsgUnderwriteAmino) => MsgUnderwrite;
    };
    "/injective.insurance.v1beta1.MsgRequestRedemption": {
        aminoType: string;
        toAmino: (message: MsgRequestRedemption) => import("./tx").MsgRequestRedemptionAmino;
        fromAmino: (object: import("./tx").MsgRequestRedemptionAmino) => MsgRequestRedemption;
    };
    "/injective.insurance.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
