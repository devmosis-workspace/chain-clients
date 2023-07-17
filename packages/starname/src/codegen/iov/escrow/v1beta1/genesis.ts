import { Escrow, EscrowSDKType } from "./types";
import { Params, ParamsSDKType } from "./params";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisState {
  escrows: Escrow[];
  lastBlockTime: Long;
  nextEscrowId: Long;
  params?: Params;
}
/** GenesisState defines the Escrow module's genesis state */
export interface GenesisStateSDKType {
  escrows: EscrowSDKType[];
  last_block_time: Long;
  next_escrow_id: Long;
  params?: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    escrows: [],
    lastBlockTime: Long.UZERO,
    nextEscrowId: Long.UZERO,
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.escrows) {
      Escrow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastBlockTime.isZero()) {
      writer.uint32(16).uint64(message.lastBlockTime);
    }
    if (!message.nextEscrowId.isZero()) {
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
      lastBlockTime: isSet(object.lastBlockTime) ? Long.fromValue(object.lastBlockTime) : Long.UZERO,
      nextEscrowId: isSet(object.nextEscrowId) ? Long.fromValue(object.nextEscrowId) : Long.UZERO,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.escrows = object.escrows?.map(e => Escrow.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime !== undefined && object.lastBlockTime !== null ? Long.fromValue(object.lastBlockTime) : Long.UZERO;
    message.nextEscrowId = object.nextEscrowId !== undefined && object.nextEscrowId !== null ? Long.fromValue(object.nextEscrowId) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};