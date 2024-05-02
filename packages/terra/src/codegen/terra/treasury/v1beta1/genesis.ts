import { Params, ParamsAmino, ParamsSDKType } from "./treasury";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params: Params;
  taxRate: string;
  rewardWeight: string;
  taxCaps: TaxCap[];
  taxProceeds: Coin[];
  epochInitialIssuance: Coin[];
  epochStates: EpochState[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  tax_rate?: string;
  reward_weight?: string;
  tax_caps?: TaxCapAmino[];
  tax_proceeds?: CoinAmino[];
  epoch_initial_issuance?: CoinAmino[];
  epoch_states?: EpochStateAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/terra.treasury.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  tax_rate: string;
  reward_weight: string;
  tax_caps: TaxCapSDKType[];
  tax_proceeds: CoinSDKType[];
  epoch_initial_issuance: CoinSDKType[];
  epoch_states: EpochStateSDKType[];
}
/** TaxCap is the max tax amount can be charged for the given denom */
export interface TaxCap {
  denom: string;
  taxCap: string;
}
export interface TaxCapProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.TaxCap";
  value: Uint8Array;
}
/** TaxCap is the max tax amount can be charged for the given denom */
export interface TaxCapAmino {
  denom?: string;
  tax_cap?: string;
}
export interface TaxCapAminoMsg {
  type: "/terra.treasury.v1beta1.TaxCap";
  value: TaxCapAmino;
}
/** TaxCap is the max tax amount can be charged for the given denom */
export interface TaxCapSDKType {
  denom: string;
  tax_cap: string;
}
/** EpochState is the record for each epoch state */
export interface EpochState {
  epoch: bigint;
  taxReward: string;
  seigniorageReward: string;
  totalStakedLuna: string;
}
export interface EpochStateProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.EpochState";
  value: Uint8Array;
}
/** EpochState is the record for each epoch state */
export interface EpochStateAmino {
  epoch?: string;
  tax_reward?: string;
  seigniorage_reward?: string;
  total_staked_luna?: string;
}
export interface EpochStateAminoMsg {
  type: "/terra.treasury.v1beta1.EpochState";
  value: EpochStateAmino;
}
/** EpochState is the record for each epoch state */
export interface EpochStateSDKType {
  epoch: bigint;
  tax_reward: string;
  seigniorage_reward: string;
  total_staked_luna: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    taxRate: "",
    rewardWeight: "",
    taxCaps: [],
    taxProceeds: [],
    epochInitialIssuance: [],
    epochStates: []
  };
}
export const GenesisState = {
  typeUrl: "/terra.treasury.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.taxRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.taxRate, 18).atomics);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardWeight, 18).atomics);
    }
    for (const v of message.taxCaps) {
      TaxCap.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.epochInitialIssuance) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.epochStates) {
      EpochState.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      taxRate: isSet(object.taxRate) ? String(object.taxRate) : "",
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "",
      taxCaps: Array.isArray(object?.taxCaps) ? object.taxCaps.map((e: any) => TaxCap.fromJSON(e)) : [],
      taxProceeds: Array.isArray(object?.taxProceeds) ? object.taxProceeds.map((e: any) => Coin.fromJSON(e)) : [],
      epochInitialIssuance: Array.isArray(object?.epochInitialIssuance) ? object.epochInitialIssuance.map((e: any) => Coin.fromJSON(e)) : [],
      epochStates: Array.isArray(object?.epochStates) ? object.epochStates.map((e: any) => EpochState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.taxRate = object.taxRate ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.taxCaps = object.taxCaps?.map(e => TaxCap.fromPartial(e)) || [];
    message.taxProceeds = object.taxProceeds?.map(e => Coin.fromPartial(e)) || [];
    message.epochInitialIssuance = object.epochInitialIssuance?.map(e => Coin.fromPartial(e)) || [];
    message.epochStates = object.epochStates?.map(e => EpochState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.tax_rate !== undefined && object.tax_rate !== null) {
      message.taxRate = object.tax_rate;
    }
    if (object.reward_weight !== undefined && object.reward_weight !== null) {
      message.rewardWeight = object.reward_weight;
    }
    message.taxCaps = object.tax_caps?.map(e => TaxCap.fromAmino(e)) || [];
    message.taxProceeds = object.tax_proceeds?.map(e => Coin.fromAmino(e)) || [];
    message.epochInitialIssuance = object.epoch_initial_issuance?.map(e => Coin.fromAmino(e)) || [];
    message.epochStates = object.epoch_states?.map(e => EpochState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.tax_rate = message.taxRate === "" ? undefined : message.taxRate;
    obj.reward_weight = message.rewardWeight === "" ? undefined : message.rewardWeight;
    if (message.taxCaps) {
      obj.tax_caps = message.taxCaps.map(e => e ? TaxCap.toAmino(e) : undefined);
    } else {
      obj.tax_caps = message.taxCaps;
    }
    if (message.taxProceeds) {
      obj.tax_proceeds = message.taxProceeds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tax_proceeds = message.taxProceeds;
    }
    if (message.epochInitialIssuance) {
      obj.epoch_initial_issuance = message.epochInitialIssuance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.epoch_initial_issuance = message.epochInitialIssuance;
    }
    if (message.epochStates) {
      obj.epoch_states = message.epochStates.map(e => e ? EpochState.toAmino(e) : undefined);
    } else {
      obj.epoch_states = message.epochStates;
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
      typeUrl: "/terra.treasury.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseTaxCap(): TaxCap {
  return {
    denom: "",
    taxCap: ""
  };
}
export const TaxCap = {
  typeUrl: "/terra.treasury.v1beta1.TaxCap",
  encode(message: TaxCap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.taxCap !== "") {
      writer.uint32(18).string(message.taxCap);
    }
    return writer;
  },
  fromJSON(object: any): TaxCap {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      taxCap: isSet(object.taxCap) ? String(object.taxCap) : ""
    };
  },
  fromPartial(object: Partial<TaxCap>): TaxCap {
    const message = createBaseTaxCap();
    message.denom = object.denom ?? "";
    message.taxCap = object.taxCap ?? "";
    return message;
  },
  fromAmino(object: TaxCapAmino): TaxCap {
    const message = createBaseTaxCap();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.tax_cap !== undefined && object.tax_cap !== null) {
      message.taxCap = object.tax_cap;
    }
    return message;
  },
  toAmino(message: TaxCap): TaxCapAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.tax_cap = message.taxCap === "" ? undefined : message.taxCap;
    return obj;
  },
  fromAminoMsg(object: TaxCapAminoMsg): TaxCap {
    return TaxCap.fromAmino(object.value);
  },
  fromProtoMsg(message: TaxCapProtoMsg): TaxCap {
    return TaxCap.decode(message.value);
  },
  toProto(message: TaxCap): Uint8Array {
    return TaxCap.encode(message).finish();
  },
  toProtoMsg(message: TaxCap): TaxCapProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.TaxCap",
      value: TaxCap.encode(message).finish()
    };
  }
};
function createBaseEpochState(): EpochState {
  return {
    epoch: BigInt(0),
    taxReward: "",
    seigniorageReward: "",
    totalStakedLuna: ""
  };
}
export const EpochState = {
  typeUrl: "/terra.treasury.v1beta1.EpochState",
  encode(message: EpochState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.taxReward !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.taxReward, 18).atomics);
    }
    if (message.seigniorageReward !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.seigniorageReward, 18).atomics);
    }
    if (message.totalStakedLuna !== "") {
      writer.uint32(34).string(message.totalStakedLuna);
    }
    return writer;
  },
  fromJSON(object: any): EpochState {
    return {
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      taxReward: isSet(object.taxReward) ? String(object.taxReward) : "",
      seigniorageReward: isSet(object.seigniorageReward) ? String(object.seigniorageReward) : "",
      totalStakedLuna: isSet(object.totalStakedLuna) ? String(object.totalStakedLuna) : ""
    };
  },
  fromPartial(object: Partial<EpochState>): EpochState {
    const message = createBaseEpochState();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.taxReward = object.taxReward ?? "";
    message.seigniorageReward = object.seigniorageReward ?? "";
    message.totalStakedLuna = object.totalStakedLuna ?? "";
    return message;
  },
  fromAmino(object: EpochStateAmino): EpochState {
    const message = createBaseEpochState();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.tax_reward !== undefined && object.tax_reward !== null) {
      message.taxReward = object.tax_reward;
    }
    if (object.seigniorage_reward !== undefined && object.seigniorage_reward !== null) {
      message.seigniorageReward = object.seigniorage_reward;
    }
    if (object.total_staked_luna !== undefined && object.total_staked_luna !== null) {
      message.totalStakedLuna = object.total_staked_luna;
    }
    return message;
  },
  toAmino(message: EpochState): EpochStateAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch.toString() : undefined;
    obj.tax_reward = message.taxReward === "" ? undefined : message.taxReward;
    obj.seigniorage_reward = message.seigniorageReward === "" ? undefined : message.seigniorageReward;
    obj.total_staked_luna = message.totalStakedLuna === "" ? undefined : message.totalStakedLuna;
    return obj;
  },
  fromAminoMsg(object: EpochStateAminoMsg): EpochState {
    return EpochState.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochStateProtoMsg): EpochState {
    return EpochState.decode(message.value);
  },
  toProto(message: EpochState): Uint8Array {
    return EpochState.encode(message).finish();
  },
  toProtoMsg(message: EpochState): EpochStateProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.EpochState",
      value: EpochState.encode(message).finish()
    };
  }
};