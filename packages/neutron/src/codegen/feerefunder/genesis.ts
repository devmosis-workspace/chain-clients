import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PacketID, PacketIDAmino, PacketIDSDKType, Fee, FeeAmino, FeeSDKType } from "./fee";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** GenesisState defines the fee module's genesis state. */
export interface GenesisState {
  params: Params;
  feeInfos: FeeInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/neutron.feerefunder.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the fee module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  fee_infos: FeeInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/neutron.feerefunder.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the fee module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_infos: FeeInfoSDKType[];
}
export interface FeeInfo {
  payer: string;
  packetId: PacketID;
  fee: Fee;
}
export interface FeeInfoProtoMsg {
  typeUrl: "/neutron.feerefunder.FeeInfo";
  value: Uint8Array;
}
export interface FeeInfoAmino {
  payer: string;
  packet_id?: PacketIDAmino;
  fee?: FeeAmino;
}
export interface FeeInfoAminoMsg {
  type: "/neutron.feerefunder.FeeInfo";
  value: FeeInfoAmino;
}
export interface FeeInfoSDKType {
  payer: string;
  packet_id: PacketIDSDKType;
  fee: FeeSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feeInfos: []
  };
}
export const GenesisState = {
  typeUrl: "/neutron.feerefunder.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeInfos) {
      FeeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feeInfos: Array.isArray(object?.feeInfos) ? object.feeInfos.map((e: any) => FeeInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feeInfos = object.feeInfos?.map(e => FeeInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      feeInfos: Array.isArray(object?.fee_infos) ? object.fee_infos.map((e: any) => FeeInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.feeInfos) {
      obj.fee_infos = message.feeInfos.map(e => e ? FeeInfo.toAmino(e) : undefined);
    } else {
      obj.fee_infos = [];
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
      typeUrl: "/neutron.feerefunder.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseFeeInfo(): FeeInfo {
  return {
    payer: "",
    packetId: PacketID.fromPartial({}),
    fee: Fee.fromPartial({})
  };
}
export const FeeInfo = {
  typeUrl: "/neutron.feerefunder.FeeInfo",
  encode(message: FeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payer !== "") {
      writer.uint32(10).string(message.payer);
    }
    if (message.packetId !== undefined) {
      PacketID.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeInfo {
    return {
      payer: isSet(object.payer) ? String(object.payer) : "",
      packetId: isSet(object.packetId) ? PacketID.fromJSON(object.packetId) : undefined,
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<FeeInfo>): FeeInfo {
    const message = createBaseFeeInfo();
    message.payer = object.payer ?? "";
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketID.fromPartial(object.packetId) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: FeeInfoAmino): FeeInfo {
    return {
      payer: object.payer,
      packetId: object?.packet_id ? PacketID.fromAmino(object.packet_id) : undefined,
      fee: object?.fee ? Fee.fromAmino(object.fee) : undefined
    };
  },
  toAmino(message: FeeInfo): FeeInfoAmino {
    const obj: any = {};
    obj.payer = message.payer;
    obj.packet_id = message.packetId ? PacketID.toAmino(message.packetId) : undefined;
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeInfoAminoMsg): FeeInfo {
    return FeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeInfoProtoMsg): FeeInfo {
    return FeeInfo.decode(message.value);
  },
  toProto(message: FeeInfo): Uint8Array {
    return FeeInfo.encode(message).finish();
  },
  toProtoMsg(message: FeeInfo): FeeInfoProtoMsg {
    return {
      typeUrl: "/neutron.feerefunder.FeeInfo",
      value: FeeInfo.encode(message).finish()
    };
  }
};