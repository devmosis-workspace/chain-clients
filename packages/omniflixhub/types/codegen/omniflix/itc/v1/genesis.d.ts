import { Campaign, CampaignAmino, CampaignSDKType, Claim, ClaimAmino, ClaimSDKType } from "./itc";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the itc module's genesis state. */
export interface GenesisState {
    campaigns: Campaign[];
    nextCampaignNumber: bigint;
    claims: Claim[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the itc module's genesis state. */
export interface GenesisStateAmino {
    campaigns: CampaignAmino[];
    next_campaign_number: string;
    claims: ClaimAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/OmniFlix.itc.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the itc module's genesis state. */
export interface GenesisStateSDKType {
    campaigns: CampaignSDKType[];
    next_campaign_number: bigint;
    claims: ClaimSDKType[];
    params: ParamsSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
