import { Campaign, CampaignAmino, CampaignSDKType, Claim, ClaimAmino, ClaimSDKType } from "./itc";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  campaigns?: CampaignAmino[];
  next_campaign_number?: string;
  claims?: ClaimAmino[];
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
function createBaseGenesisState(): GenesisState {
  return {
    campaigns: [],
    nextCampaignNumber: BigInt(0),
    claims: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/OmniFlix.itc.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.campaigns) {
      Campaign.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextCampaignNumber !== BigInt(0)) {
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
      nextCampaignNumber: isSet(object.nextCampaignNumber) ? BigInt(object.nextCampaignNumber.toString()) : BigInt(0),
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.campaigns = object.campaigns?.map(e => Campaign.fromPartial(e)) || [];
    message.nextCampaignNumber = object.nextCampaignNumber !== undefined && object.nextCampaignNumber !== null ? BigInt(object.nextCampaignNumber.toString()) : BigInt(0);
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.campaigns = object.campaigns?.map(e => Campaign.fromAmino(e)) || [];
    if (object.next_campaign_number !== undefined && object.next_campaign_number !== null) {
      message.nextCampaignNumber = BigInt(object.next_campaign_number);
    }
    message.claims = object.claims?.map(e => Claim.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.campaigns) {
      obj.campaigns = message.campaigns.map(e => e ? Campaign.toAmino(e) : undefined);
    } else {
      obj.campaigns = [];
    }
    obj.next_campaign_number = message.nextCampaignNumber ? message.nextCampaignNumber.toString() : undefined;
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claims = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};