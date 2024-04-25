import { Params, ParamsAmino, ParamsSDKType, PoolRecord, PoolRecordAmino, PoolRecordSDKType, ShareRecord, ShareRecordAmino, ShareRecordSDKType } from "./swap";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the swap module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters related to swap */
  params: Params;
  /** pool_records defines the available pools */
  poolRecords: PoolRecord[];
  /** share_records defines the owned shares of each pool */
  shareRecords: ShareRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.swap.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the swap module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters related to swap */
  params?: ParamsAmino;
  /** pool_records defines the available pools */
  pool_records?: PoolRecordAmino[];
  /** share_records defines the owned shares of each pool */
  share_records?: ShareRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.swap.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the swap module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_records: PoolRecordSDKType[];
  share_records: ShareRecordSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolRecords: [],
    shareRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.swap.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolRecords) {
      PoolRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.shareRecords) {
      ShareRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolRecords: Array.isArray(object?.poolRecords) ? object.poolRecords.map((e: any) => PoolRecord.fromJSON(e)) : [],
      shareRecords: Array.isArray(object?.shareRecords) ? object.shareRecords.map((e: any) => ShareRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolRecords = object.poolRecords?.map(e => PoolRecord.fromPartial(e)) || [];
    message.shareRecords = object.shareRecords?.map(e => ShareRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolRecords = object.pool_records?.map(e => PoolRecord.fromAmino(e)) || [];
    message.shareRecords = object.share_records?.map(e => ShareRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolRecords) {
      obj.pool_records = message.poolRecords.map(e => e ? PoolRecord.toAmino(e) : undefined);
    } else {
      obj.pool_records = [];
    }
    if (message.shareRecords) {
      obj.share_records = message.shareRecords.map(e => e ? ShareRecord.toAmino(e) : undefined);
    } else {
      obj.share_records = [];
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
      typeUrl: "/kava.swap.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};