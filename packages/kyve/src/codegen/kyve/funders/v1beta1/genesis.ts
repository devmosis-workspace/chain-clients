import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Funder, FunderAmino, FunderSDKType, Funding, FundingAmino, FundingSDKType, FundingState, FundingStateAmino, FundingStateSDKType } from "./funders";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    funderList: [],
    fundingList: [],
    fundingStateList: []
  };
}
export const GenesisState = {
  typeUrl: "/kyve.funders.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.funderList) {
      Funder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fundingList) {
      Funding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.fundingStateList) {
      FundingState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      funderList: Array.isArray(object?.funderList) ? object.funderList.map((e: any) => Funder.fromJSON(e)) : [],
      fundingList: Array.isArray(object?.fundingList) ? object.fundingList.map((e: any) => Funding.fromJSON(e)) : [],
      fundingStateList: Array.isArray(object?.fundingStateList) ? object.fundingStateList.map((e: any) => FundingState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.funderList = object.funderList?.map(e => Funder.fromPartial(e)) || [];
    message.fundingList = object.fundingList?.map(e => Funding.fromPartial(e)) || [];
    message.fundingStateList = object.fundingStateList?.map(e => FundingState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.funderList = object.funder_list?.map(e => Funder.fromAmino(e)) || [];
    message.fundingList = object.funding_list?.map(e => Funding.fromAmino(e)) || [];
    message.fundingStateList = object.funding_state_list?.map(e => FundingState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.funderList) {
      obj.funder_list = message.funderList.map(e => e ? Funder.toAmino(e) : undefined);
    } else {
      obj.funder_list = [];
    }
    if (message.fundingList) {
      obj.funding_list = message.fundingList.map(e => e ? Funding.toAmino(e) : undefined);
    } else {
      obj.funding_list = [];
    }
    if (message.fundingStateList) {
      obj.funding_state_list = message.fundingStateList.map(e => e ? FundingState.toAmino(e) : undefined);
    } else {
      obj.funding_state_list = [];
    }
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
      typeUrl: "/kyve.funders.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};