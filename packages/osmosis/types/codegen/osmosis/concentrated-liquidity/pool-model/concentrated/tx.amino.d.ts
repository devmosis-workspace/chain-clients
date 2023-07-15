import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateConcentratedPool } from "./tx";
export interface MsgCreateConcentratedPoolAminoType extends AminoMsg {
    type: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool";
    value: {
        sender: string;
        denom0: string;
        denom1: string;
        tick_spacing: string;
        spread_factor: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool": {
        aminoType: string;
        toAmino: ({ sender, denom0, denom1, tickSpacing, spreadFactor }: MsgCreateConcentratedPool) => MsgCreateConcentratedPoolAminoType["value"];
        fromAmino: ({ sender, denom0, denom1, tick_spacing, spread_factor }: MsgCreateConcentratedPoolAminoType["value"]) => MsgCreateConcentratedPool;
    };
};
