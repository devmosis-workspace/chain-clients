import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Funder, FunderAmino, FunderSDKType, Funding, FundingAmino, FundingSDKType, FundingState, FundingStateAmino, FundingStateSDKType } from "./funders";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the funders module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** funder_list ... */
    funderList: Funder[];
    /** funding_list ... */
    fundingList: Funding[];
    /** funding_state ... */
    fundingStateList: FundingState[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the funders module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    /** funder_list ... */
    funder_list?: FunderAmino[];
    /** funding_list ... */
    funding_list?: FundingAmino[];
    /** funding_state ... */
    funding_state_list?: FundingStateAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kyve.funders.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the funders module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    funder_list: FunderSDKType[];
    funding_list: FundingSDKType[];
    funding_state_list: FundingStateSDKType[];
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
