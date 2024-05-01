import { MsgGovUpdateMinGasPrice, MsgGovSetEmergencyGroup, MsgGovUpdateInflationParams } from "./tx";
export declare const AminoConverter: {
    "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
        aminoType: string;
        toAmino: (message: MsgGovUpdateMinGasPrice) => import("./tx").MsgGovUpdateMinGasPriceAmino;
        fromAmino: (object: import("./tx").MsgGovUpdateMinGasPriceAmino) => MsgGovUpdateMinGasPrice;
    };
    "/umee.ugov.v1.MsgGovSetEmergencyGroup": {
        aminoType: string;
        toAmino: (message: MsgGovSetEmergencyGroup) => import("./tx").MsgGovSetEmergencyGroupAmino;
        fromAmino: (object: import("./tx").MsgGovSetEmergencyGroupAmino) => MsgGovSetEmergencyGroup;
    };
    "/umee.ugov.v1.MsgGovUpdateInflationParams": {
        aminoType: string;
        toAmino: (message: MsgGovUpdateInflationParams) => import("./tx").MsgGovUpdateInflationParamsAmino;
        fromAmino: (object: import("./tx").MsgGovUpdateInflationParamsAmino) => MsgGovUpdateInflationParams;
    };
};
