import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/evmos.inflation.v1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            mint_denom: string;
            exponential_calculation: {
                a: string;
                r: string;
                c: string;
                bonding_target: string;
                max_variance: string;
            };
            inflation_distribution: {
                staking_rewards: string;
                usage_incentives: string;
                community_pool: string;
            };
            enable_inflation: boolean;
        };
    };
}
export declare const AminoConverter: {
    "/evmos.inflation.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
