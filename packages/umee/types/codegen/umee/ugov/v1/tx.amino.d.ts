import { AminoMsg } from "@cosmjs/amino";
import { MsgGovUpdateMinGasPrice } from "./tx";
export interface MsgGovUpdateMinGasPriceAminoType extends AminoMsg {
    type: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
    value: {
        authority: string;
        min_gas_price: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
        aminoType: string;
        toAmino: ({ authority, minGasPrice }: MsgGovUpdateMinGasPrice) => MsgGovUpdateMinGasPriceAminoType["value"];
        fromAmino: ({ authority, min_gas_price }: MsgGovUpdateMinGasPriceAminoType["value"]) => MsgGovUpdateMinGasPrice;
    };
};
