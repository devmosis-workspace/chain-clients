import { Perpetual, PerpetualSDKType, LiquidityTier, LiquidityTierSDKType } from "./perpetual";
import { Params, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the perpetuals module's genesis state. */
export interface GenesisState {
  perpetuals: Perpetual[];
  liquidityTiers: LiquidityTier[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the perpetuals module's genesis state. */
export interface GenesisStateSDKType {
  perpetuals: PerpetualSDKType[];
  liquidity_tiers: LiquidityTierSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    perpetuals: [],
    liquidityTiers: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.perpetuals.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.perpetuals) {
      Perpetual.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.liquidityTiers) {
      LiquidityTier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      perpetuals: Array.isArray(object?.perpetuals) ? object.perpetuals.map((e: any) => Perpetual.fromJSON(e)) : [],
      liquidityTiers: Array.isArray(object?.liquidityTiers) ? object.liquidityTiers.map((e: any) => LiquidityTier.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.perpetuals = object.perpetuals?.map(e => Perpetual.fromPartial(e)) || [];
    message.liquidityTiers = object.liquidityTiers?.map(e => LiquidityTier.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.perpetuals = object.perpetuals?.map(e => Perpetual.fromAmino(e)) || [];
    message.liquidityTiers = object.liquidity_tiers?.map(e => LiquidityTier.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.perpetuals) {
      obj.perpetuals = message.perpetuals.map(e => e ? Perpetual.toAmino(e) : undefined);
    } else {
      obj.perpetuals = [];
    }
    if (message.liquidityTiers) {
      obj.liquidity_tiers = message.liquidityTiers.map(e => e ? LiquidityTier.toAmino(e) : undefined);
    } else {
      obj.liquidity_tiers = [];
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
      typeUrl: "/dydxprotocol.perpetuals.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};