import { Campaign, CampaignSDKType, Claim, ClaimSDKType } from "./itc";
import { Params, ParamsSDKType } from "./params";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the itc module's genesis state. */
export interface GenesisState {
    campaigns: Campaign[];
    nextCampaignNumber: Long;
    claims: Claim[];
    params?: Params;
}
/** GenesisState defines the itc module's genesis state. */
export interface GenesisStateSDKType {
    campaigns: CampaignSDKType[];
    next_campaign_number: Long;
    claims: ClaimSDKType[];
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
