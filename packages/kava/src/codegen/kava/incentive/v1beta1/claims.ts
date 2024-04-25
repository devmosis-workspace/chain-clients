import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaim {
  $typeUrl?: "/kava.incentive.v1beta1.BaseClaim";
  owner: Uint8Array;
  reward: Coin;
}
export interface BaseClaimProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.BaseClaim";
  value: Uint8Array;
}
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaimAmino {
  owner?: string;
  reward?: CoinAmino;
}
export interface BaseClaimAminoMsg {
  type: "/kava.incentive.v1beta1.BaseClaim";
  value: BaseClaimAmino;
}
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaimSDKType {
  $typeUrl?: "/kava.incentive.v1beta1.BaseClaim";
  owner: Uint8Array;
  reward: CoinSDKType;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaim {
  $typeUrl?: "/kava.incentive.v1beta1.BaseMultiClaim";
  owner: Uint8Array;
  reward: Coin[];
}
export interface BaseMultiClaimProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.BaseMultiClaim";
  value: Uint8Array;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaimAmino {
  owner?: string;
  reward?: CoinAmino[];
}
export interface BaseMultiClaimAminoMsg {
  type: "/kava.incentive.v1beta1.BaseMultiClaim";
  value: BaseMultiClaimAmino;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaimSDKType {
  $typeUrl?: "/kava.incentive.v1beta1.BaseMultiClaim";
  owner: Uint8Array;
  reward: CoinSDKType[];
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndex {
  collateralType: string;
  rewardFactor: Uint8Array;
}
export interface RewardIndexProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.RewardIndex";
  value: Uint8Array;
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndexAmino {
  collateral_type?: string;
  reward_factor?: string;
}
export interface RewardIndexAminoMsg {
  type: "/kava.incentive.v1beta1.RewardIndex";
  value: RewardIndexAmino;
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndexSDKType {
  collateral_type: string;
  reward_factor: Uint8Array;
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProto {
  rewardIndexes: RewardIndex[];
}
export interface RewardIndexesProtoProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.RewardIndexesProto";
  value: Uint8Array;
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProtoAmino {
  reward_indexes?: RewardIndexAmino[];
}
export interface RewardIndexesProtoAminoMsg {
  type: "/kava.incentive.v1beta1.RewardIndexesProto";
  value: RewardIndexesProtoAmino;
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProtoSDKType {
  reward_indexes: RewardIndexSDKType[];
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndex {
  collateralType: string;
  rewardIndexes: RewardIndex[];
}
export interface MultiRewardIndexProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MultiRewardIndex";
  value: Uint8Array;
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndexAmino {
  collateral_type?: string;
  reward_indexes?: RewardIndexAmino[];
}
export interface MultiRewardIndexAminoMsg {
  type: "/kava.incentive.v1beta1.MultiRewardIndex";
  value: MultiRewardIndexAmino;
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndexSDKType {
  collateral_type: string;
  reward_indexes: RewardIndexSDKType[];
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProto {
  multiRewardIndexes: MultiRewardIndex[];
}
export interface MultiRewardIndexesProtoProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.MultiRewardIndexesProto";
  value: Uint8Array;
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProtoAmino {
  multi_reward_indexes?: MultiRewardIndexAmino[];
}
export interface MultiRewardIndexesProtoAminoMsg {
  type: "/kava.incentive.v1beta1.MultiRewardIndexesProto";
  value: MultiRewardIndexesProtoAmino;
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProtoSDKType {
  multi_reward_indexes: MultiRewardIndexSDKType[];
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaim {
  $typeUrl?: "/kava.incentive.v1beta1.USDXMintingClaim";
  baseClaim: BaseClaim;
  rewardIndexes: RewardIndex[];
}
export interface USDXMintingClaimProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.USDXMintingClaim";
  value: Uint8Array;
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaimAmino {
  base_claim?: BaseClaimAmino;
  reward_indexes?: RewardIndexAmino[];
}
export interface USDXMintingClaimAminoMsg {
  type: "/kava.incentive.v1beta1.USDXMintingClaim";
  value: USDXMintingClaimAmino;
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaimSDKType {
  $typeUrl?: "/kava.incentive.v1beta1.USDXMintingClaim";
  base_claim: BaseClaimSDKType;
  reward_indexes: RewardIndexSDKType[];
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaim {
  $typeUrl?: "/kava.incentive.v1beta1.HardLiquidityProviderClaim";
  baseClaim: BaseMultiClaim;
  supplyRewardIndexes: MultiRewardIndex[];
  borrowRewardIndexes: MultiRewardIndex[];
}
export interface HardLiquidityProviderClaimProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.HardLiquidityProviderClaim";
  value: Uint8Array;
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaimAmino {
  base_claim?: BaseMultiClaimAmino;
  supply_reward_indexes?: MultiRewardIndexAmino[];
  borrow_reward_indexes?: MultiRewardIndexAmino[];
}
export interface HardLiquidityProviderClaimAminoMsg {
  type: "/kava.incentive.v1beta1.HardLiquidityProviderClaim";
  value: HardLiquidityProviderClaimAmino;
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaimSDKType {
  $typeUrl?: "/kava.incentive.v1beta1.HardLiquidityProviderClaim";
  base_claim: BaseMultiClaimSDKType;
  supply_reward_indexes: MultiRewardIndexSDKType[];
  borrow_reward_indexes: MultiRewardIndexSDKType[];
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaim {
  $typeUrl?: "/kava.incentive.v1beta1.DelegatorClaim";
  baseClaim: BaseMultiClaim;
  rewardIndexes: MultiRewardIndex[];
}
export interface DelegatorClaimProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.DelegatorClaim";
  value: Uint8Array;
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaimAmino {
  base_claim?: BaseMultiClaimAmino;
  reward_indexes?: MultiRewardIndexAmino[];
}
export interface DelegatorClaimAminoMsg {
  type: "/kava.incentive.v1beta1.DelegatorClaim";
  value: DelegatorClaimAmino;
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaimSDKType {
  $typeUrl?: "/kava.incentive.v1beta1.DelegatorClaim";
  base_claim: BaseMultiClaimSDKType;
  reward_indexes: MultiRewardIndexSDKType[];
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaim {
  $typeUrl?: "/kava.incentive.v1beta1.SwapClaim";
  baseClaim: BaseMultiClaim;
  rewardIndexes: MultiRewardIndex[];
}
export interface SwapClaimProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.SwapClaim";
  value: Uint8Array;
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaimAmino {
  base_claim?: BaseMultiClaimAmino;
  reward_indexes?: MultiRewardIndexAmino[];
}
export interface SwapClaimAminoMsg {
  type: "/kava.incentive.v1beta1.SwapClaim";
  value: SwapClaimAmino;
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaimSDKType {
  $typeUrl?: "/kava.incentive.v1beta1.SwapClaim";
  base_claim: BaseMultiClaimSDKType;
  reward_indexes: MultiRewardIndexSDKType[];
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaim {
  $typeUrl?: "/kava.incentive.v1beta1.SavingsClaim";
  baseClaim: BaseMultiClaim;
  rewardIndexes: MultiRewardIndex[];
}
export interface SavingsClaimProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.SavingsClaim";
  value: Uint8Array;
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaimAmino {
  base_claim?: BaseMultiClaimAmino;
  reward_indexes?: MultiRewardIndexAmino[];
}
export interface SavingsClaimAminoMsg {
  type: "/kava.incentive.v1beta1.SavingsClaim";
  value: SavingsClaimAmino;
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaimSDKType {
  $typeUrl?: "/kava.incentive.v1beta1.SavingsClaim";
  base_claim: BaseMultiClaimSDKType;
  reward_indexes: MultiRewardIndexSDKType[];
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaim {
  $typeUrl?: "/kava.incentive.v1beta1.EarnClaim";
  baseClaim: BaseMultiClaim;
  rewardIndexes: MultiRewardIndex[];
}
export interface EarnClaimProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.EarnClaim";
  value: Uint8Array;
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaimAmino {
  base_claim?: BaseMultiClaimAmino;
  reward_indexes?: MultiRewardIndexAmino[];
}
export interface EarnClaimAminoMsg {
  type: "/kava.incentive.v1beta1.EarnClaim";
  value: EarnClaimAmino;
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaimSDKType {
  $typeUrl?: "/kava.incentive.v1beta1.EarnClaim";
  base_claim: BaseMultiClaimSDKType;
  reward_indexes: MultiRewardIndexSDKType[];
}
function createBaseBaseClaim(): BaseClaim {
  return {
    $typeUrl: "/kava.incentive.v1beta1.BaseClaim",
    owner: new Uint8Array(),
    reward: Coin.fromPartial({})
  };
}
export const BaseClaim = {
  typeUrl: "/kava.incentive.v1beta1.BaseClaim",
  encode(message: BaseClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner.length !== 0) {
      writer.uint32(10).bytes(message.owner);
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BaseClaim {
    return {
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },
  fromPartial(object: Partial<BaseClaim>): BaseClaim {
    const message = createBaseBaseClaim();
    message.owner = object.owner ?? new Uint8Array();
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  },
  fromAmino(object: BaseClaimAmino): BaseClaim {
    const message = createBaseBaseClaim();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = bytesFromBase64(object.owner);
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = Coin.fromAmino(object.reward);
    }
    return message;
  },
  toAmino(message: BaseClaim): BaseClaimAmino {
    const obj: any = {};
    obj.owner = message.owner ? base64FromBytes(message.owner) : undefined;
    obj.reward = message.reward ? Coin.toAmino(message.reward) : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseClaimAminoMsg): BaseClaim {
    return BaseClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: BaseClaimProtoMsg): BaseClaim {
    return BaseClaim.decode(message.value);
  },
  toProto(message: BaseClaim): Uint8Array {
    return BaseClaim.encode(message).finish();
  },
  toProtoMsg(message: BaseClaim): BaseClaimProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.BaseClaim",
      value: BaseClaim.encode(message).finish()
    };
  }
};
function createBaseBaseMultiClaim(): BaseMultiClaim {
  return {
    $typeUrl: "/kava.incentive.v1beta1.BaseMultiClaim",
    owner: new Uint8Array(),
    reward: []
  };
}
export const BaseMultiClaim = {
  typeUrl: "/kava.incentive.v1beta1.BaseMultiClaim",
  encode(message: BaseMultiClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner.length !== 0) {
      writer.uint32(10).bytes(message.owner);
    }
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BaseMultiClaim {
    return {
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BaseMultiClaim>): BaseMultiClaim {
    const message = createBaseBaseMultiClaim();
    message.owner = object.owner ?? new Uint8Array();
    message.reward = object.reward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BaseMultiClaimAmino): BaseMultiClaim {
    const message = createBaseBaseMultiClaim();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = bytesFromBase64(object.owner);
    }
    message.reward = object.reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BaseMultiClaim): BaseMultiClaimAmino {
    const obj: any = {};
    obj.owner = message.owner ? base64FromBytes(message.owner) : undefined;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromAminoMsg(object: BaseMultiClaimAminoMsg): BaseMultiClaim {
    return BaseMultiClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: BaseMultiClaimProtoMsg): BaseMultiClaim {
    return BaseMultiClaim.decode(message.value);
  },
  toProto(message: BaseMultiClaim): Uint8Array {
    return BaseMultiClaim.encode(message).finish();
  },
  toProtoMsg(message: BaseMultiClaim): BaseMultiClaimProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.BaseMultiClaim",
      value: BaseMultiClaim.encode(message).finish()
    };
  }
};
function createBaseRewardIndex(): RewardIndex {
  return {
    collateralType: "",
    rewardFactor: new Uint8Array()
  };
}
export const RewardIndex = {
  typeUrl: "/kava.incentive.v1beta1.RewardIndex",
  encode(message: RewardIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.rewardFactor.length !== 0) {
      writer.uint32(18).bytes(message.rewardFactor);
    }
    return writer;
  },
  fromJSON(object: any): RewardIndex {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      rewardFactor: isSet(object.rewardFactor) ? bytesFromBase64(object.rewardFactor) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RewardIndex>): RewardIndex {
    const message = createBaseRewardIndex();
    message.collateralType = object.collateralType ?? "";
    message.rewardFactor = object.rewardFactor ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RewardIndexAmino): RewardIndex {
    const message = createBaseRewardIndex();
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.reward_factor !== undefined && object.reward_factor !== null) {
      message.rewardFactor = bytesFromBase64(object.reward_factor);
    }
    return message;
  },
  toAmino(message: RewardIndex): RewardIndexAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.reward_factor = message.rewardFactor ? base64FromBytes(message.rewardFactor) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardIndexAminoMsg): RewardIndex {
    return RewardIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardIndexProtoMsg): RewardIndex {
    return RewardIndex.decode(message.value);
  },
  toProto(message: RewardIndex): Uint8Array {
    return RewardIndex.encode(message).finish();
  },
  toProtoMsg(message: RewardIndex): RewardIndexProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.RewardIndex",
      value: RewardIndex.encode(message).finish()
    };
  }
};
function createBaseRewardIndexesProto(): RewardIndexesProto {
  return {
    rewardIndexes: []
  };
}
export const RewardIndexesProto = {
  typeUrl: "/kava.incentive.v1beta1.RewardIndexesProto",
  encode(message: RewardIndexesProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewardIndexes) {
      RewardIndex.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RewardIndexesProto {
    return {
      rewardIndexes: Array.isArray(object?.rewardIndexes) ? object.rewardIndexes.map((e: any) => RewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RewardIndexesProto>): RewardIndexesProto {
    const message = createBaseRewardIndexesProto();
    message.rewardIndexes = object.rewardIndexes?.map(e => RewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardIndexesProtoAmino): RewardIndexesProto {
    const message = createBaseRewardIndexesProto();
    message.rewardIndexes = object.reward_indexes?.map(e => RewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardIndexesProto): RewardIndexesProtoAmino {
    const obj: any = {};
    if (message.rewardIndexes) {
      obj.reward_indexes = message.rewardIndexes.map(e => e ? RewardIndex.toAmino(e) : undefined);
    } else {
      obj.reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: RewardIndexesProtoAminoMsg): RewardIndexesProto {
    return RewardIndexesProto.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardIndexesProtoProtoMsg): RewardIndexesProto {
    return RewardIndexesProto.decode(message.value);
  },
  toProto(message: RewardIndexesProto): Uint8Array {
    return RewardIndexesProto.encode(message).finish();
  },
  toProtoMsg(message: RewardIndexesProto): RewardIndexesProtoProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.RewardIndexesProto",
      value: RewardIndexesProto.encode(message).finish()
    };
  }
};
function createBaseMultiRewardIndex(): MultiRewardIndex {
  return {
    collateralType: "",
    rewardIndexes: []
  };
}
export const MultiRewardIndex = {
  typeUrl: "/kava.incentive.v1beta1.MultiRewardIndex",
  encode(message: MultiRewardIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    for (const v of message.rewardIndexes) {
      RewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MultiRewardIndex {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      rewardIndexes: Array.isArray(object?.rewardIndexes) ? object.rewardIndexes.map((e: any) => RewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MultiRewardIndex>): MultiRewardIndex {
    const message = createBaseMultiRewardIndex();
    message.collateralType = object.collateralType ?? "";
    message.rewardIndexes = object.rewardIndexes?.map(e => RewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MultiRewardIndexAmino): MultiRewardIndex {
    const message = createBaseMultiRewardIndex();
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    message.rewardIndexes = object.reward_indexes?.map(e => RewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MultiRewardIndex): MultiRewardIndexAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    if (message.rewardIndexes) {
      obj.reward_indexes = message.rewardIndexes.map(e => e ? RewardIndex.toAmino(e) : undefined);
    } else {
      obj.reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MultiRewardIndexAminoMsg): MultiRewardIndex {
    return MultiRewardIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiRewardIndexProtoMsg): MultiRewardIndex {
    return MultiRewardIndex.decode(message.value);
  },
  toProto(message: MultiRewardIndex): Uint8Array {
    return MultiRewardIndex.encode(message).finish();
  },
  toProtoMsg(message: MultiRewardIndex): MultiRewardIndexProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MultiRewardIndex",
      value: MultiRewardIndex.encode(message).finish()
    };
  }
};
function createBaseMultiRewardIndexesProto(): MultiRewardIndexesProto {
  return {
    multiRewardIndexes: []
  };
}
export const MultiRewardIndexesProto = {
  typeUrl: "/kava.incentive.v1beta1.MultiRewardIndexesProto",
  encode(message: MultiRewardIndexesProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.multiRewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MultiRewardIndexesProto {
    return {
      multiRewardIndexes: Array.isArray(object?.multiRewardIndexes) ? object.multiRewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MultiRewardIndexesProto>): MultiRewardIndexesProto {
    const message = createBaseMultiRewardIndexesProto();
    message.multiRewardIndexes = object.multiRewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MultiRewardIndexesProtoAmino): MultiRewardIndexesProto {
    const message = createBaseMultiRewardIndexesProto();
    message.multiRewardIndexes = object.multi_reward_indexes?.map(e => MultiRewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MultiRewardIndexesProto): MultiRewardIndexesProtoAmino {
    const obj: any = {};
    if (message.multiRewardIndexes) {
      obj.multi_reward_indexes = message.multiRewardIndexes.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.multi_reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MultiRewardIndexesProtoAminoMsg): MultiRewardIndexesProto {
    return MultiRewardIndexesProto.fromAmino(object.value);
  },
  fromProtoMsg(message: MultiRewardIndexesProtoProtoMsg): MultiRewardIndexesProto {
    return MultiRewardIndexesProto.decode(message.value);
  },
  toProto(message: MultiRewardIndexesProto): Uint8Array {
    return MultiRewardIndexesProto.encode(message).finish();
  },
  toProtoMsg(message: MultiRewardIndexesProto): MultiRewardIndexesProtoProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.MultiRewardIndexesProto",
      value: MultiRewardIndexesProto.encode(message).finish()
    };
  }
};
function createBaseUSDXMintingClaim(): USDXMintingClaim {
  return {
    $typeUrl: "/kava.incentive.v1beta1.USDXMintingClaim",
    baseClaim: BaseClaim.fromPartial({}),
    rewardIndexes: []
  };
}
export const USDXMintingClaim = {
  typeUrl: "/kava.incentive.v1beta1.USDXMintingClaim",
  encode(message: USDXMintingClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseClaim !== undefined) {
      BaseClaim.encode(message.baseClaim, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewardIndexes) {
      RewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): USDXMintingClaim {
    return {
      baseClaim: isSet(object.baseClaim) ? BaseClaim.fromJSON(object.baseClaim) : undefined,
      rewardIndexes: Array.isArray(object?.rewardIndexes) ? object.rewardIndexes.map((e: any) => RewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<USDXMintingClaim>): USDXMintingClaim {
    const message = createBaseUSDXMintingClaim();
    message.baseClaim = object.baseClaim !== undefined && object.baseClaim !== null ? BaseClaim.fromPartial(object.baseClaim) : undefined;
    message.rewardIndexes = object.rewardIndexes?.map(e => RewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: USDXMintingClaimAmino): USDXMintingClaim {
    const message = createBaseUSDXMintingClaim();
    if (object.base_claim !== undefined && object.base_claim !== null) {
      message.baseClaim = BaseClaim.fromAmino(object.base_claim);
    }
    message.rewardIndexes = object.reward_indexes?.map(e => RewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: USDXMintingClaim): USDXMintingClaimAmino {
    const obj: any = {};
    obj.base_claim = message.baseClaim ? BaseClaim.toAmino(message.baseClaim) : undefined;
    if (message.rewardIndexes) {
      obj.reward_indexes = message.rewardIndexes.map(e => e ? RewardIndex.toAmino(e) : undefined);
    } else {
      obj.reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: USDXMintingClaimAminoMsg): USDXMintingClaim {
    return USDXMintingClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: USDXMintingClaimProtoMsg): USDXMintingClaim {
    return USDXMintingClaim.decode(message.value);
  },
  toProto(message: USDXMintingClaim): Uint8Array {
    return USDXMintingClaim.encode(message).finish();
  },
  toProtoMsg(message: USDXMintingClaim): USDXMintingClaimProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.USDXMintingClaim",
      value: USDXMintingClaim.encode(message).finish()
    };
  }
};
function createBaseHardLiquidityProviderClaim(): HardLiquidityProviderClaim {
  return {
    $typeUrl: "/kava.incentive.v1beta1.HardLiquidityProviderClaim",
    baseClaim: BaseMultiClaim.fromPartial({}),
    supplyRewardIndexes: [],
    borrowRewardIndexes: []
  };
}
export const HardLiquidityProviderClaim = {
  typeUrl: "/kava.incentive.v1beta1.HardLiquidityProviderClaim",
  encode(message: HardLiquidityProviderClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseClaim !== undefined) {
      BaseMultiClaim.encode(message.baseClaim, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.supplyRewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.borrowRewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): HardLiquidityProviderClaim {
    return {
      baseClaim: isSet(object.baseClaim) ? BaseMultiClaim.fromJSON(object.baseClaim) : undefined,
      supplyRewardIndexes: Array.isArray(object?.supplyRewardIndexes) ? object.supplyRewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : [],
      borrowRewardIndexes: Array.isArray(object?.borrowRewardIndexes) ? object.borrowRewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<HardLiquidityProviderClaim>): HardLiquidityProviderClaim {
    const message = createBaseHardLiquidityProviderClaim();
    message.baseClaim = object.baseClaim !== undefined && object.baseClaim !== null ? BaseMultiClaim.fromPartial(object.baseClaim) : undefined;
    message.supplyRewardIndexes = object.supplyRewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    message.borrowRewardIndexes = object.borrowRewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: HardLiquidityProviderClaimAmino): HardLiquidityProviderClaim {
    const message = createBaseHardLiquidityProviderClaim();
    if (object.base_claim !== undefined && object.base_claim !== null) {
      message.baseClaim = BaseMultiClaim.fromAmino(object.base_claim);
    }
    message.supplyRewardIndexes = object.supply_reward_indexes?.map(e => MultiRewardIndex.fromAmino(e)) || [];
    message.borrowRewardIndexes = object.borrow_reward_indexes?.map(e => MultiRewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: HardLiquidityProviderClaim): HardLiquidityProviderClaimAmino {
    const obj: any = {};
    obj.base_claim = message.baseClaim ? BaseMultiClaim.toAmino(message.baseClaim) : undefined;
    if (message.supplyRewardIndexes) {
      obj.supply_reward_indexes = message.supplyRewardIndexes.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.supply_reward_indexes = [];
    }
    if (message.borrowRewardIndexes) {
      obj.borrow_reward_indexes = message.borrowRewardIndexes.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.borrow_reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: HardLiquidityProviderClaimAminoMsg): HardLiquidityProviderClaim {
    return HardLiquidityProviderClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: HardLiquidityProviderClaimProtoMsg): HardLiquidityProviderClaim {
    return HardLiquidityProviderClaim.decode(message.value);
  },
  toProto(message: HardLiquidityProviderClaim): Uint8Array {
    return HardLiquidityProviderClaim.encode(message).finish();
  },
  toProtoMsg(message: HardLiquidityProviderClaim): HardLiquidityProviderClaimProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.HardLiquidityProviderClaim",
      value: HardLiquidityProviderClaim.encode(message).finish()
    };
  }
};
function createBaseDelegatorClaim(): DelegatorClaim {
  return {
    $typeUrl: "/kava.incentive.v1beta1.DelegatorClaim",
    baseClaim: BaseMultiClaim.fromPartial({}),
    rewardIndexes: []
  };
}
export const DelegatorClaim = {
  typeUrl: "/kava.incentive.v1beta1.DelegatorClaim",
  encode(message: DelegatorClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseClaim !== undefined) {
      BaseMultiClaim.encode(message.baseClaim, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelegatorClaim {
    return {
      baseClaim: isSet(object.baseClaim) ? BaseMultiClaim.fromJSON(object.baseClaim) : undefined,
      rewardIndexes: Array.isArray(object?.rewardIndexes) ? object.rewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DelegatorClaim>): DelegatorClaim {
    const message = createBaseDelegatorClaim();
    message.baseClaim = object.baseClaim !== undefined && object.baseClaim !== null ? BaseMultiClaim.fromPartial(object.baseClaim) : undefined;
    message.rewardIndexes = object.rewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegatorClaimAmino): DelegatorClaim {
    const message = createBaseDelegatorClaim();
    if (object.base_claim !== undefined && object.base_claim !== null) {
      message.baseClaim = BaseMultiClaim.fromAmino(object.base_claim);
    }
    message.rewardIndexes = object.reward_indexes?.map(e => MultiRewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegatorClaim): DelegatorClaimAmino {
    const obj: any = {};
    obj.base_claim = message.baseClaim ? BaseMultiClaim.toAmino(message.baseClaim) : undefined;
    if (message.rewardIndexes) {
      obj.reward_indexes = message.rewardIndexes.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegatorClaimAminoMsg): DelegatorClaim {
    return DelegatorClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorClaimProtoMsg): DelegatorClaim {
    return DelegatorClaim.decode(message.value);
  },
  toProto(message: DelegatorClaim): Uint8Array {
    return DelegatorClaim.encode(message).finish();
  },
  toProtoMsg(message: DelegatorClaim): DelegatorClaimProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.DelegatorClaim",
      value: DelegatorClaim.encode(message).finish()
    };
  }
};
function createBaseSwapClaim(): SwapClaim {
  return {
    $typeUrl: "/kava.incentive.v1beta1.SwapClaim",
    baseClaim: BaseMultiClaim.fromPartial({}),
    rewardIndexes: []
  };
}
export const SwapClaim = {
  typeUrl: "/kava.incentive.v1beta1.SwapClaim",
  encode(message: SwapClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseClaim !== undefined) {
      BaseMultiClaim.encode(message.baseClaim, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SwapClaim {
    return {
      baseClaim: isSet(object.baseClaim) ? BaseMultiClaim.fromJSON(object.baseClaim) : undefined,
      rewardIndexes: Array.isArray(object?.rewardIndexes) ? object.rewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SwapClaim>): SwapClaim {
    const message = createBaseSwapClaim();
    message.baseClaim = object.baseClaim !== undefined && object.baseClaim !== null ? BaseMultiClaim.fromPartial(object.baseClaim) : undefined;
    message.rewardIndexes = object.rewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SwapClaimAmino): SwapClaim {
    const message = createBaseSwapClaim();
    if (object.base_claim !== undefined && object.base_claim !== null) {
      message.baseClaim = BaseMultiClaim.fromAmino(object.base_claim);
    }
    message.rewardIndexes = object.reward_indexes?.map(e => MultiRewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SwapClaim): SwapClaimAmino {
    const obj: any = {};
    obj.base_claim = message.baseClaim ? BaseMultiClaim.toAmino(message.baseClaim) : undefined;
    if (message.rewardIndexes) {
      obj.reward_indexes = message.rewardIndexes.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: SwapClaimAminoMsg): SwapClaim {
    return SwapClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapClaimProtoMsg): SwapClaim {
    return SwapClaim.decode(message.value);
  },
  toProto(message: SwapClaim): Uint8Array {
    return SwapClaim.encode(message).finish();
  },
  toProtoMsg(message: SwapClaim): SwapClaimProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.SwapClaim",
      value: SwapClaim.encode(message).finish()
    };
  }
};
function createBaseSavingsClaim(): SavingsClaim {
  return {
    $typeUrl: "/kava.incentive.v1beta1.SavingsClaim",
    baseClaim: BaseMultiClaim.fromPartial({}),
    rewardIndexes: []
  };
}
export const SavingsClaim = {
  typeUrl: "/kava.incentive.v1beta1.SavingsClaim",
  encode(message: SavingsClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseClaim !== undefined) {
      BaseMultiClaim.encode(message.baseClaim, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SavingsClaim {
    return {
      baseClaim: isSet(object.baseClaim) ? BaseMultiClaim.fromJSON(object.baseClaim) : undefined,
      rewardIndexes: Array.isArray(object?.rewardIndexes) ? object.rewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SavingsClaim>): SavingsClaim {
    const message = createBaseSavingsClaim();
    message.baseClaim = object.baseClaim !== undefined && object.baseClaim !== null ? BaseMultiClaim.fromPartial(object.baseClaim) : undefined;
    message.rewardIndexes = object.rewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SavingsClaimAmino): SavingsClaim {
    const message = createBaseSavingsClaim();
    if (object.base_claim !== undefined && object.base_claim !== null) {
      message.baseClaim = BaseMultiClaim.fromAmino(object.base_claim);
    }
    message.rewardIndexes = object.reward_indexes?.map(e => MultiRewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SavingsClaim): SavingsClaimAmino {
    const obj: any = {};
    obj.base_claim = message.baseClaim ? BaseMultiClaim.toAmino(message.baseClaim) : undefined;
    if (message.rewardIndexes) {
      obj.reward_indexes = message.rewardIndexes.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: SavingsClaimAminoMsg): SavingsClaim {
    return SavingsClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: SavingsClaimProtoMsg): SavingsClaim {
    return SavingsClaim.decode(message.value);
  },
  toProto(message: SavingsClaim): Uint8Array {
    return SavingsClaim.encode(message).finish();
  },
  toProtoMsg(message: SavingsClaim): SavingsClaimProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.SavingsClaim",
      value: SavingsClaim.encode(message).finish()
    };
  }
};
function createBaseEarnClaim(): EarnClaim {
  return {
    $typeUrl: "/kava.incentive.v1beta1.EarnClaim",
    baseClaim: BaseMultiClaim.fromPartial({}),
    rewardIndexes: []
  };
}
export const EarnClaim = {
  typeUrl: "/kava.incentive.v1beta1.EarnClaim",
  encode(message: EarnClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseClaim !== undefined) {
      BaseMultiClaim.encode(message.baseClaim, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EarnClaim {
    return {
      baseClaim: isSet(object.baseClaim) ? BaseMultiClaim.fromJSON(object.baseClaim) : undefined,
      rewardIndexes: Array.isArray(object?.rewardIndexes) ? object.rewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EarnClaim>): EarnClaim {
    const message = createBaseEarnClaim();
    message.baseClaim = object.baseClaim !== undefined && object.baseClaim !== null ? BaseMultiClaim.fromPartial(object.baseClaim) : undefined;
    message.rewardIndexes = object.rewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EarnClaimAmino): EarnClaim {
    const message = createBaseEarnClaim();
    if (object.base_claim !== undefined && object.base_claim !== null) {
      message.baseClaim = BaseMultiClaim.fromAmino(object.base_claim);
    }
    message.rewardIndexes = object.reward_indexes?.map(e => MultiRewardIndex.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EarnClaim): EarnClaimAmino {
    const obj: any = {};
    obj.base_claim = message.baseClaim ? BaseMultiClaim.toAmino(message.baseClaim) : undefined;
    if (message.rewardIndexes) {
      obj.reward_indexes = message.rewardIndexes.map(e => e ? MultiRewardIndex.toAmino(e) : undefined);
    } else {
      obj.reward_indexes = [];
    }
    return obj;
  },
  fromAminoMsg(object: EarnClaimAminoMsg): EarnClaim {
    return EarnClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EarnClaimProtoMsg): EarnClaim {
    return EarnClaim.decode(message.value);
  },
  toProto(message: EarnClaim): Uint8Array {
    return EarnClaim.encode(message).finish();
  },
  toProtoMsg(message: EarnClaim): EarnClaimProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.EarnClaim",
      value: EarnClaim.encode(message).finish()
    };
  }
};