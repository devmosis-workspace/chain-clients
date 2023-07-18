import { AminoMsg } from "@cosmjs/amino";
import { MsgFundCommunityPool } from "./tx";
export interface MsgFundCommunityPoolAminoType extends AminoMsg {
    type: "/kava.community.v1beta1.MsgFundCommunityPool";
    value: {
        amount: {
            denom: string;
            amount: string;
        }[];
        depositor: string;
    };
}
export declare const AminoConverter: {
    "/kava.community.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ amount, depositor }: MsgFundCommunityPool) => MsgFundCommunityPoolAminoType["value"];
        fromAmino: ({ amount, depositor }: MsgFundCommunityPoolAminoType["value"]) => MsgFundCommunityPool;
    };
};
