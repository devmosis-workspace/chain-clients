import { Params, ParamsSDKType } from "./params";
import { PacketID, PacketIDSDKType, Fee, FeeSDKType } from "./fee";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** GenesisState defines the fee module's genesis state. */
export interface GenesisState {
  params?: Params;
  feeInfos: FeeInfo[];
}
/** GenesisState defines the fee module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  fee_infos: FeeInfoSDKType[];
}
export interface FeeInfo {
  payer: string;
  packetId?: PacketID;
  fee?: Fee;
}
export interface FeeInfoSDKType {
  payer: string;
  packet_id?: PacketIDSDKType;
  fee?: FeeSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    feeInfos: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseFeeInfo(): FeeInfo {
  return {
    payer: "",
    packetId: undefined,
    fee: undefined
  };
}
export const FeeInfo = {
  encode(message: FeeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};