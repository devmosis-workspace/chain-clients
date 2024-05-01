import { Params, ParamsAmino, ParamsSDKType, Claim, ClaimAmino, ClaimSDKType } from "./claimsmanager";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisState {
  params: Params;
  claims: Claim[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/quicksilver.claimsmanager.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  claims?: ClaimAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/quicksilver.claimsmanager.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  claims: ClaimSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    claims: []
  };
}
export const GenesisState = {
  typeUrl: "/quicksilver.claimsmanager.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.claims = object.claims?.map(e => Claim.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claims = [];
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
      typeUrl: "/quicksilver.claimsmanager.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};