import { Campaign, CampaignSDKType, Claim, ClaimSDKType } from "./itc";
import { Params, ParamsSDKType } from "./params";
import { Long, isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    campaigns: [],
    nextCampaignNumber: Long.UZERO,
    claims: [],
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.campaigns) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.nextCampaignNumber.isZero()) {
      writer.uint32(16).uint64(message.nextCampaignNumber);
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      campaigns: Array.isArray(object?.campaigns) ? object.campaigns.map((e: any) => Campaign.fromJSON(e)) : [],
      nextCampaignNumber: isSet(object.nextCampaignNumber) ? Long.fromValue(object.nextCampaignNumber) : Long.UZERO,
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.campaigns = object.campaigns?.map(e => Campaign.fromPartial(e)) || [];
    message.nextCampaignNumber = object.nextCampaignNumber !== undefined && object.nextCampaignNumber !== null ? Long.fromValue(object.nextCampaignNumber) : Long.UZERO;
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};