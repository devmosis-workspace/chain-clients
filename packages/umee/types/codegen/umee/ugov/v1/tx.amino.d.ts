import { MsgGovUpdateMinGasPrice } from "./tx";
export declare const AminoConverter: {
    "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
        aminoType: string;
        toAmino: (message: MsgGovUpdateMinGasPrice) => import("./tx").MsgGovUpdateMinGasPriceAmino;
        fromAmino: (object: import("./tx").MsgGovUpdateMinGasPriceAmino) => MsgGovUpdateMinGasPrice;
    };
};
