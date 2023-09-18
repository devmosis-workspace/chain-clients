import { Issuer, IssuerAmino, IssuerSDKType } from "./issuer";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
  issuers: Issuer[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/em.issuer.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  issuers: IssuerAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/em.issuer.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  issuers: IssuerSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    issuers: []
  };
}
export const GenesisState = {
  typeUrl: "/em.issuer.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.issuers = object.issuers?.map(e => Issuer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e ? Issuer.toAmino(e) : undefined);
    } else {
      obj.issuers = [];
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
      typeUrl: "/em.issuer.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};