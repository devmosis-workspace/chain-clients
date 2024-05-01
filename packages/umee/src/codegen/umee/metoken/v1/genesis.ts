import { Params, ParamsAmino, ParamsSDKType, Index, IndexAmino, IndexSDKType } from "./metoken";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the x/metoken module's genesis state. */
export interface GenesisState {
  params: Params;
  registry: Index[];
  balances: IndexBalances[];
  nextRebalancingTime: Timestamp;
  nextInterestClaimTime: Timestamp;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/umee.metoken.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the x/metoken module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  registry?: IndexAmino[];
  balances?: IndexBalancesAmino[];
  next_rebalancing_time?: string;
  next_interest_claim_time?: string;
}
export interface GenesisStateAminoMsg {
  type: "/umee.metoken.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the x/metoken module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  registry: IndexSDKType[];
  balances: IndexBalancesSDKType[];
  next_rebalancing_time: TimestampSDKType;
  next_interest_claim_time: TimestampSDKType;
}
/** IndexBalances is the state of an Index, containing its meToken supply and all underlying asset balances. */
export interface IndexBalances {
  metokenSupply: Coin;
  assetBalances: AssetBalance[];
}
export interface IndexBalancesProtoMsg {
  typeUrl: "/umee.metoken.v1.IndexBalances";
  value: Uint8Array;
}
/** IndexBalances is the state of an Index, containing its meToken supply and all underlying asset balances. */
export interface IndexBalancesAmino {
  metoken_supply?: CoinAmino;
  asset_balances?: AssetBalanceAmino[];
}
export interface IndexBalancesAminoMsg {
  type: "/umee.metoken.v1.IndexBalances";
  value: IndexBalancesAmino;
}
/** IndexBalances is the state of an Index, containing its meToken supply and all underlying asset balances. */
export interface IndexBalancesSDKType {
  metoken_supply: CoinSDKType;
  asset_balances: AssetBalanceSDKType[];
}
/** AssetBalance tracks how much of a single asset is held in leverage, reserves, fees and interest account. */
export interface AssetBalance {
  denom: string;
  leveraged: string;
  reserved: string;
  fees: string;
  interest: string;
}
export interface AssetBalanceProtoMsg {
  typeUrl: "/umee.metoken.v1.AssetBalance";
  value: Uint8Array;
}
/** AssetBalance tracks how much of a single asset is held in leverage, reserves, fees and interest account. */
export interface AssetBalanceAmino {
  denom?: string;
  leveraged?: string;
  reserved?: string;
  fees?: string;
  interest?: string;
}
export interface AssetBalanceAminoMsg {
  type: "/umee.metoken.v1.AssetBalance";
  value: AssetBalanceAmino;
}
/** AssetBalance tracks how much of a single asset is held in leverage, reserves, fees and interest account. */
export interface AssetBalanceSDKType {
  denom: string;
  leveraged: string;
  reserved: string;
  fees: string;
  interest: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    registry: [],
    balances: [],
    nextRebalancingTime: Timestamp.fromPartial({}),
    nextInterestClaimTime: Timestamp.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/umee.metoken.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registry) {
      Index.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.balances) {
      IndexBalances.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextRebalancingTime !== undefined) {
      Timestamp.encode(message.nextRebalancingTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextInterestClaimTime !== undefined) {
      Timestamp.encode(message.nextInterestClaimTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      registry: Array.isArray(object?.registry) ? object.registry.map((e: any) => Index.fromJSON(e)) : [],
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => IndexBalances.fromJSON(e)) : [],
      nextRebalancingTime: isSet(object.nextRebalancingTime) ? fromJsonTimestamp(object.nextRebalancingTime) : undefined,
      nextInterestClaimTime: isSet(object.nextInterestClaimTime) ? fromJsonTimestamp(object.nextInterestClaimTime) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.registry = object.registry?.map(e => Index.fromPartial(e)) || [];
    message.balances = object.balances?.map(e => IndexBalances.fromPartial(e)) || [];
    message.nextRebalancingTime = object.nextRebalancingTime !== undefined && object.nextRebalancingTime !== null ? Timestamp.fromPartial(object.nextRebalancingTime) : undefined;
    message.nextInterestClaimTime = object.nextInterestClaimTime !== undefined && object.nextInterestClaimTime !== null ? Timestamp.fromPartial(object.nextInterestClaimTime) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.registry = object.registry?.map(e => Index.fromAmino(e)) || [];
    message.balances = object.balances?.map(e => IndexBalances.fromAmino(e)) || [];
    if (object.next_rebalancing_time !== undefined && object.next_rebalancing_time !== null) {
      message.nextRebalancingTime = Timestamp.fromAmino(object.next_rebalancing_time);
    }
    if (object.next_interest_claim_time !== undefined && object.next_interest_claim_time !== null) {
      message.nextInterestClaimTime = Timestamp.fromAmino(object.next_interest_claim_time);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Index.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? IndexBalances.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.next_rebalancing_time = message.nextRebalancingTime ? Timestamp.toAmino(message.nextRebalancingTime) : undefined;
    obj.next_interest_claim_time = message.nextInterestClaimTime ? Timestamp.toAmino(message.nextInterestClaimTime) : undefined;
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
      typeUrl: "/umee.metoken.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseIndexBalances(): IndexBalances {
  return {
    metokenSupply: Coin.fromPartial({}),
    assetBalances: []
  };
}
export const IndexBalances = {
  typeUrl: "/umee.metoken.v1.IndexBalances",
  encode(message: IndexBalances, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metokenSupply !== undefined) {
      Coin.encode(message.metokenSupply, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.assetBalances) {
      AssetBalance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IndexBalances {
    return {
      metokenSupply: isSet(object.metokenSupply) ? Coin.fromJSON(object.metokenSupply) : undefined,
      assetBalances: Array.isArray(object?.assetBalances) ? object.assetBalances.map((e: any) => AssetBalance.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<IndexBalances>): IndexBalances {
    const message = createBaseIndexBalances();
    message.metokenSupply = object.metokenSupply !== undefined && object.metokenSupply !== null ? Coin.fromPartial(object.metokenSupply) : undefined;
    message.assetBalances = object.assetBalances?.map(e => AssetBalance.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IndexBalancesAmino): IndexBalances {
    const message = createBaseIndexBalances();
    if (object.metoken_supply !== undefined && object.metoken_supply !== null) {
      message.metokenSupply = Coin.fromAmino(object.metoken_supply);
    }
    message.assetBalances = object.asset_balances?.map(e => AssetBalance.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: IndexBalances): IndexBalancesAmino {
    const obj: any = {};
    obj.metoken_supply = message.metokenSupply ? Coin.toAmino(message.metokenSupply) : undefined;
    if (message.assetBalances) {
      obj.asset_balances = message.assetBalances.map(e => e ? AssetBalance.toAmino(e) : undefined);
    } else {
      obj.asset_balances = message.assetBalances;
    }
    return obj;
  },
  fromAminoMsg(object: IndexBalancesAminoMsg): IndexBalances {
    return IndexBalances.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexBalancesProtoMsg): IndexBalances {
    return IndexBalances.decode(message.value);
  },
  toProto(message: IndexBalances): Uint8Array {
    return IndexBalances.encode(message).finish();
  },
  toProtoMsg(message: IndexBalances): IndexBalancesProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.IndexBalances",
      value: IndexBalances.encode(message).finish()
    };
  }
};
function createBaseAssetBalance(): AssetBalance {
  return {
    denom: "",
    leveraged: "",
    reserved: "",
    fees: "",
    interest: ""
  };
}
export const AssetBalance = {
  typeUrl: "/umee.metoken.v1.AssetBalance",
  encode(message: AssetBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.leveraged !== "") {
      writer.uint32(18).string(message.leveraged);
    }
    if (message.reserved !== "") {
      writer.uint32(26).string(message.reserved);
    }
    if (message.fees !== "") {
      writer.uint32(34).string(message.fees);
    }
    if (message.interest !== "") {
      writer.uint32(42).string(message.interest);
    }
    return writer;
  },
  fromJSON(object: any): AssetBalance {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      leveraged: isSet(object.leveraged) ? String(object.leveraged) : "",
      reserved: isSet(object.reserved) ? String(object.reserved) : "",
      fees: isSet(object.fees) ? String(object.fees) : "",
      interest: isSet(object.interest) ? String(object.interest) : ""
    };
  },
  fromPartial(object: Partial<AssetBalance>): AssetBalance {
    const message = createBaseAssetBalance();
    message.denom = object.denom ?? "";
    message.leveraged = object.leveraged ?? "";
    message.reserved = object.reserved ?? "";
    message.fees = object.fees ?? "";
    message.interest = object.interest ?? "";
    return message;
  },
  fromAmino(object: AssetBalanceAmino): AssetBalance {
    const message = createBaseAssetBalance();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.leveraged !== undefined && object.leveraged !== null) {
      message.leveraged = object.leveraged;
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = object.reserved;
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = object.fees;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    }
    return message;
  },
  toAmino(message: AssetBalance): AssetBalanceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.leveraged = message.leveraged === "" ? undefined : message.leveraged;
    obj.reserved = message.reserved === "" ? undefined : message.reserved;
    obj.fees = message.fees === "" ? undefined : message.fees;
    obj.interest = message.interest === "" ? undefined : message.interest;
    return obj;
  },
  fromAminoMsg(object: AssetBalanceAminoMsg): AssetBalance {
    return AssetBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetBalanceProtoMsg): AssetBalance {
    return AssetBalance.decode(message.value);
  },
  toProto(message: AssetBalance): Uint8Array {
    return AssetBalance.encode(message).finish();
  },
  toProtoMsg(message: AssetBalance): AssetBalanceProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.AssetBalance",
      value: AssetBalance.encode(message).finish()
    };
  }
};