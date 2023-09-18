import { Escrow, EscrowAmino, EscrowSDKType } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisState {
  escrows: Escrow[];
  lastBlockTime: bigint;
  nextEscrowId: bigint;
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisStateAmino {
  escrows: EscrowAmino[];
  last_block_time: string;
  next_escrow_id: string;
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisStateSDKType {
  escrows: EscrowSDKType[];
  last_block_time: bigint;
  next_escrow_id: bigint;
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    escrows: [],
    lastBlockTime: BigInt(0),
    nextEscrowId: BigInt(0),
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/starnamed.x.escrow.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.escrows) {
      Escrow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockTime !== BigInt(0)) {
      writer.uint32(16).uint64(message.lastBlockTime);
    }
    if (message.nextEscrowId !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextEscrowId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      escrows: Array.isArray(object?.escrows) ? object.escrows.map((e: any) => Escrow.fromJSON(e)) : [],
      lastBlockTime: isSet(object.lastBlockTime) ? BigInt(object.lastBlockTime.toString()) : BigInt(0),
      nextEscrowId: isSet(object.nextEscrowId) ? BigInt(object.nextEscrowId.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.escrows = object.escrows?.map(e => Escrow.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime !== undefined && object.lastBlockTime !== null ? BigInt(object.lastBlockTime.toString()) : BigInt(0);
    message.nextEscrowId = object.nextEscrowId !== undefined && object.nextEscrowId !== null ? BigInt(object.nextEscrowId.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      escrows: Array.isArray(object?.escrows) ? object.escrows.map((e: any) => Escrow.fromAmino(e)) : [],
      lastBlockTime: BigInt(object.last_block_time),
      nextEscrowId: BigInt(object.next_escrow_id),
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.escrows) {
      obj.escrows = message.escrows.map(e => e ? Escrow.toAmino(e) : undefined);
    } else {
      obj.escrows = [];
    }
    obj.last_block_time = message.lastBlockTime ? message.lastBlockTime.toString() : undefined;
    obj.next_escrow_id = message.nextEscrowId ? message.nextEscrowId.toString() : undefined;
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
      typeUrl: "/starnamed.x.escrow.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};