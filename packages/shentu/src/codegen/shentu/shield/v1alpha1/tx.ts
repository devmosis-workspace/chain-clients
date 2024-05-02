import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCreatePool defines the attributes of a create-pool transaction. */
export interface MsgCreatePool {
  from: string;
  shield: Coin[];
  deposit: Coin[];
  sponsor: string;
  sponsorAddr: string;
  description: string;
  shieldLimit: string;
}
export interface MsgCreatePoolProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgCreatePool";
  value: Uint8Array;
}
/** MsgCreatePool defines the attributes of a create-pool transaction. */
export interface MsgCreatePoolAmino {
  from?: string;
  shield?: CoinAmino[];
  deposit?: CoinAmino[];
  sponsor?: string;
  sponsor_addr?: string;
  description?: string;
  shield_limit?: string;
}
export interface MsgCreatePoolAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgCreatePool";
  value: MsgCreatePoolAmino;
}
/** MsgCreatePool defines the attributes of a create-pool transaction. */
export interface MsgCreatePoolSDKType {
  from: string;
  shield: CoinSDKType[];
  deposit: CoinSDKType[];
  sponsor: string;
  sponsor_addr: string;
  description: string;
  shield_limit: string;
}
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgCreatePoolResponse";
  value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
export interface MsgCreatePoolResponseSDKType {}
/** MsgUpdatePool defines the attributes of a shield pool update transaction. */
export interface MsgUpdatePool {
  from: string;
  shield: Coin[];
  serviceFees: Coin[];
  poolId: bigint;
  description: string;
  shieldLimit: string;
}
export interface MsgUpdatePoolProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePool";
  value: Uint8Array;
}
/** MsgUpdatePool defines the attributes of a shield pool update transaction. */
export interface MsgUpdatePoolAmino {
  from?: string;
  shield?: CoinAmino[];
  service_fees?: CoinAmino[];
  pool_id?: string;
  description?: string;
  shield_limit?: string;
}
export interface MsgUpdatePoolAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgUpdatePool";
  value: MsgUpdatePoolAmino;
}
/** MsgUpdatePool defines the attributes of a shield pool update transaction. */
export interface MsgUpdatePoolSDKType {
  from: string;
  shield: CoinSDKType[];
  service_fees: CoinSDKType[];
  pool_id: bigint;
  description: string;
  shield_limit: string;
}
export interface MsgUpdatePoolResponse {}
export interface MsgUpdatePoolResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePoolResponse";
  value: Uint8Array;
}
export interface MsgUpdatePoolResponseAmino {}
export interface MsgUpdatePoolResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgUpdatePoolResponse";
  value: MsgUpdatePoolResponseAmino;
}
export interface MsgUpdatePoolResponseSDKType {}
/** MsgPausePool defines the attributes of a pausing a shield pool. */
export interface MsgPausePool {
  from: string;
  poolId: bigint;
}
export interface MsgPausePoolProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgPausePool";
  value: Uint8Array;
}
/** MsgPausePool defines the attributes of a pausing a shield pool. */
export interface MsgPausePoolAmino {
  from?: string;
  pool_id?: string;
}
export interface MsgPausePoolAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgPausePool";
  value: MsgPausePoolAmino;
}
/** MsgPausePool defines the attributes of a pausing a shield pool. */
export interface MsgPausePoolSDKType {
  from: string;
  pool_id: bigint;
}
export interface MsgPausePoolResponse {}
export interface MsgPausePoolResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgPausePoolResponse";
  value: Uint8Array;
}
export interface MsgPausePoolResponseAmino {}
export interface MsgPausePoolResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgPausePoolResponse";
  value: MsgPausePoolResponseAmino;
}
export interface MsgPausePoolResponseSDKType {}
/** MsgResumePool defines the attributes of a resuming a shield pool. */
export interface MsgResumePool {
  from: string;
  poolId: bigint;
}
export interface MsgResumePoolProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgResumePool";
  value: Uint8Array;
}
/** MsgResumePool defines the attributes of a resuming a shield pool. */
export interface MsgResumePoolAmino {
  from?: string;
  pool_id?: string;
}
export interface MsgResumePoolAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgResumePool";
  value: MsgResumePoolAmino;
}
/** MsgResumePool defines the attributes of a resuming a shield pool. */
export interface MsgResumePoolSDKType {
  from: string;
  pool_id: bigint;
}
export interface MsgResumePoolResponse {}
export interface MsgResumePoolResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgResumePoolResponse";
  value: Uint8Array;
}
export interface MsgResumePoolResponseAmino {}
export interface MsgResumePoolResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgResumePoolResponse";
  value: MsgResumePoolResponseAmino;
}
export interface MsgResumePoolResponseSDKType {}
/** MsgDepositCollateral defines the attributes of a depositing collaterals. */
export interface MsgDepositCollateral {
  from: string;
  collateral: Coin[];
}
export interface MsgDepositCollateralProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateral";
  value: Uint8Array;
}
/** MsgDepositCollateral defines the attributes of a depositing collaterals. */
export interface MsgDepositCollateralAmino {
  from?: string;
  collateral?: CoinAmino[];
}
export interface MsgDepositCollateralAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgDepositCollateral";
  value: MsgDepositCollateralAmino;
}
/** MsgDepositCollateral defines the attributes of a depositing collaterals. */
export interface MsgDepositCollateralSDKType {
  from: string;
  collateral: CoinSDKType[];
}
export interface MsgDepositCollateralResponse {}
export interface MsgDepositCollateralResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateralResponse";
  value: Uint8Array;
}
export interface MsgDepositCollateralResponseAmino {}
export interface MsgDepositCollateralResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgDepositCollateralResponse";
  value: MsgDepositCollateralResponseAmino;
}
export interface MsgDepositCollateralResponseSDKType {}
/** NewMsgWithdrawCollateral defines the attributes of a withdrawing collaterals. */
export interface MsgWithdrawCollateral {
  from: string;
  collateral: Coin[];
}
export interface MsgWithdrawCollateralProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateral";
  value: Uint8Array;
}
/** NewMsgWithdrawCollateral defines the attributes of a withdrawing collaterals. */
export interface MsgWithdrawCollateralAmino {
  from?: string;
  collateral?: CoinAmino[];
}
export interface MsgWithdrawCollateralAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgWithdrawCollateral";
  value: MsgWithdrawCollateralAmino;
}
/** NewMsgWithdrawCollateral defines the attributes of a withdrawing collaterals. */
export interface MsgWithdrawCollateralSDKType {
  from: string;
  collateral: CoinSDKType[];
}
export interface MsgWithdrawCollateralResponse {}
export interface MsgWithdrawCollateralResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateralResponse";
  value: Uint8Array;
}
export interface MsgWithdrawCollateralResponseAmino {}
export interface MsgWithdrawCollateralResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgWithdrawCollateralResponse";
  value: MsgWithdrawCollateralResponseAmino;
}
export interface MsgWithdrawCollateralResponseSDKType {}
/** MsgWithdrawForeignRewards defines attribute of withdraw rewards transaction. */
export interface MsgWithdrawRewards {
  from: string;
}
export interface MsgWithdrawRewardsProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewards";
  value: Uint8Array;
}
/** MsgWithdrawForeignRewards defines attribute of withdraw rewards transaction. */
export interface MsgWithdrawRewardsAmino {
  from?: string;
}
export interface MsgWithdrawRewardsAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgWithdrawRewards";
  value: MsgWithdrawRewardsAmino;
}
/** MsgWithdrawForeignRewards defines attribute of withdraw rewards transaction. */
export interface MsgWithdrawRewardsSDKType {
  from: string;
}
export interface MsgWithdrawRewardsResponse {}
export interface MsgWithdrawRewardsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewardsResponse";
  value: Uint8Array;
}
export interface MsgWithdrawRewardsResponseAmino {}
export interface MsgWithdrawRewardsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgWithdrawRewardsResponse";
  value: MsgWithdrawRewardsResponseAmino;
}
export interface MsgWithdrawRewardsResponseSDKType {}
/** MsgWithdrawForeignRewards defines attributes of withdraw foreign rewards transaction. */
export interface MsgWithdrawForeignRewards {
  from: string;
  denom: string;
  toAddr: string;
}
export interface MsgWithdrawForeignRewardsProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards";
  value: Uint8Array;
}
/** MsgWithdrawForeignRewards defines attributes of withdraw foreign rewards transaction. */
export interface MsgWithdrawForeignRewardsAmino {
  from?: string;
  denom?: string;
  to_addr?: string;
}
export interface MsgWithdrawForeignRewardsAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards";
  value: MsgWithdrawForeignRewardsAmino;
}
/** MsgWithdrawForeignRewards defines attributes of withdraw foreign rewards transaction. */
export interface MsgWithdrawForeignRewardsSDKType {
  from: string;
  denom: string;
  to_addr: string;
}
export interface MsgWithdrawForeignRewardsResponse {}
export interface MsgWithdrawForeignRewardsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewardsResponse";
  value: Uint8Array;
}
export interface MsgWithdrawForeignRewardsResponseAmino {}
export interface MsgWithdrawForeignRewardsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewardsResponse";
  value: MsgWithdrawForeignRewardsResponseAmino;
}
export interface MsgWithdrawForeignRewardsResponseSDKType {}
/** MsgClearPayouts defines attributes of clear payouts transaction. */
export interface MsgClearPayouts {
  from: string;
  denom: string;
}
export interface MsgClearPayoutsProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgClearPayouts";
  value: Uint8Array;
}
/** MsgClearPayouts defines attributes of clear payouts transaction. */
export interface MsgClearPayoutsAmino {
  from?: string;
  denom?: string;
}
export interface MsgClearPayoutsAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgClearPayouts";
  value: MsgClearPayoutsAmino;
}
/** MsgClearPayouts defines attributes of clear payouts transaction. */
export interface MsgClearPayoutsSDKType {
  from: string;
  denom: string;
}
export interface MsgClearPayoutsResponse {}
export interface MsgClearPayoutsResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgClearPayoutsResponse";
  value: Uint8Array;
}
export interface MsgClearPayoutsResponseAmino {}
export interface MsgClearPayoutsResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgClearPayoutsResponse";
  value: MsgClearPayoutsResponseAmino;
}
export interface MsgClearPayoutsResponseSDKType {}
/** MsgPurchaseShield defines the attributes of purchase shield transaction. */
export interface MsgPurchaseShield {
  poolId: bigint;
  shield: Coin[];
  description: string;
  from: string;
}
export interface MsgPurchaseShieldProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShield";
  value: Uint8Array;
}
/** MsgPurchaseShield defines the attributes of purchase shield transaction. */
export interface MsgPurchaseShieldAmino {
  pool_id?: string;
  shield?: CoinAmino[];
  description?: string;
  from?: string;
}
export interface MsgPurchaseShieldAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgPurchaseShield";
  value: MsgPurchaseShieldAmino;
}
/** MsgPurchaseShield defines the attributes of purchase shield transaction. */
export interface MsgPurchaseShieldSDKType {
  pool_id: bigint;
  shield: CoinSDKType[];
  description: string;
  from: string;
}
export interface MsgPurchaseShieldResponse {}
export interface MsgPurchaseShieldResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShieldResponse";
  value: Uint8Array;
}
export interface MsgPurchaseShieldResponseAmino {}
export interface MsgPurchaseShieldResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgPurchaseShieldResponse";
  value: MsgPurchaseShieldResponseAmino;
}
export interface MsgPurchaseShieldResponseSDKType {}
/** MsgWithdrawReimburse defines the attributes of withdraw reimbursement transaction. */
export interface MsgWithdrawReimbursement {
  proposalId: bigint;
  from: string;
}
export interface MsgWithdrawReimbursementProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement";
  value: Uint8Array;
}
/** MsgWithdrawReimburse defines the attributes of withdraw reimbursement transaction. */
export interface MsgWithdrawReimbursementAmino {
  proposal_id?: string;
  from?: string;
}
export interface MsgWithdrawReimbursementAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement";
  value: MsgWithdrawReimbursementAmino;
}
/** MsgWithdrawReimburse defines the attributes of withdraw reimbursement transaction. */
export interface MsgWithdrawReimbursementSDKType {
  proposal_id: bigint;
  from: string;
}
export interface MsgWithdrawReimbursementResponse {}
export interface MsgWithdrawReimbursementResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursementResponse";
  value: Uint8Array;
}
export interface MsgWithdrawReimbursementResponseAmino {}
export interface MsgWithdrawReimbursementResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgWithdrawReimbursementResponse";
  value: MsgWithdrawReimbursementResponseAmino;
}
export interface MsgWithdrawReimbursementResponseSDKType {}
/**
 * TODO: eliminate this msg type
 * MsgStakeForShield defines the attributes of staking for purchase transaction.
 */
export interface MsgStakeForShield {
  poolId: bigint;
  shield: Coin[];
  description: string;
  from: string;
}
export interface MsgStakeForShieldProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShield";
  value: Uint8Array;
}
/**
 * TODO: eliminate this msg type
 * MsgStakeForShield defines the attributes of staking for purchase transaction.
 */
export interface MsgStakeForShieldAmino {
  pool_id?: string;
  shield?: CoinAmino[];
  description?: string;
  from?: string;
}
export interface MsgStakeForShieldAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgStakeForShield";
  value: MsgStakeForShieldAmino;
}
/**
 * TODO: eliminate this msg type
 * MsgStakeForShield defines the attributes of staking for purchase transaction.
 */
export interface MsgStakeForShieldSDKType {
  pool_id: bigint;
  shield: CoinSDKType[];
  description: string;
  from: string;
}
export interface MsgStakeForShieldResponse {}
export interface MsgStakeForShieldResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShieldResponse";
  value: Uint8Array;
}
export interface MsgStakeForShieldResponseAmino {}
export interface MsgStakeForShieldResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgStakeForShieldResponse";
  value: MsgStakeForShieldResponseAmino;
}
export interface MsgStakeForShieldResponseSDKType {}
/** MsgUnstakeFromShield defines the attributes of staking for purchase transaction. */
export interface MsgUnstakeFromShield {
  poolId: bigint;
  shield: Coin[];
  from: string;
}
export interface MsgUnstakeFromShieldProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShield";
  value: Uint8Array;
}
/** MsgUnstakeFromShield defines the attributes of staking for purchase transaction. */
export interface MsgUnstakeFromShieldAmino {
  pool_id?: string;
  shield?: CoinAmino[];
  from?: string;
}
export interface MsgUnstakeFromShieldAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgUnstakeFromShield";
  value: MsgUnstakeFromShieldAmino;
}
/** MsgUnstakeFromShield defines the attributes of staking for purchase transaction. */
export interface MsgUnstakeFromShieldSDKType {
  pool_id: bigint;
  shield: CoinSDKType[];
  from: string;
}
export interface MsgUnstakeFromShieldResponse {}
export interface MsgUnstakeFromShieldResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShieldResponse";
  value: Uint8Array;
}
export interface MsgUnstakeFromShieldResponseAmino {}
export interface MsgUnstakeFromShieldResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgUnstakeFromShieldResponse";
  value: MsgUnstakeFromShieldResponseAmino;
}
export interface MsgUnstakeFromShieldResponseSDKType {}
/** MsgUpdateSponsor defines the attributes of a update-sponsor transaction. */
export interface MsgUpdateSponsor {
  poolId: bigint;
  sponsor: string;
  sponsorAddr: string;
  from: string;
}
export interface MsgUpdateSponsorProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsor";
  value: Uint8Array;
}
/** MsgUpdateSponsor defines the attributes of a update-sponsor transaction. */
export interface MsgUpdateSponsorAmino {
  pool_id?: string;
  sponsor?: string;
  sponsor_addr?: string;
  from?: string;
}
export interface MsgUpdateSponsorAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgUpdateSponsor";
  value: MsgUpdateSponsorAmino;
}
/** MsgUpdateSponsor defines the attributes of a update-sponsor transaction. */
export interface MsgUpdateSponsorSDKType {
  pool_id: bigint;
  sponsor: string;
  sponsor_addr: string;
  from: string;
}
export interface MsgUpdateSponsorResponse {}
export interface MsgUpdateSponsorResponseProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsorResponse";
  value: Uint8Array;
}
export interface MsgUpdateSponsorResponseAmino {}
export interface MsgUpdateSponsorResponseAminoMsg {
  type: "/shentu.shield.v1alpha1.MsgUpdateSponsorResponse";
  value: MsgUpdateSponsorResponseAmino;
}
export interface MsgUpdateSponsorResponseSDKType {}
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    from: "",
    shield: [],
    deposit: [],
    sponsor: "",
    sponsorAddr: "",
    description: "",
    shieldLimit: ""
  };
}
export const MsgCreatePool = {
  typeUrl: "/shentu.shield.v1alpha1.MsgCreatePool",
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.shield) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.sponsor !== "") {
      writer.uint32(34).string(message.sponsor);
    }
    if (message.sponsorAddr !== "") {
      writer.uint32(42).string(message.sponsorAddr);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.shieldLimit !== "") {
      writer.uint32(58).string(message.shieldLimit);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreatePool {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      shield: Array.isArray(object?.shield) ? object.shield.map((e: any) => Coin.fromJSON(e)) : [],
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : [],
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : "",
      sponsorAddr: isSet(object.sponsorAddr) ? String(object.sponsorAddr) : "",
      description: isSet(object.description) ? String(object.description) : "",
      shieldLimit: isSet(object.shieldLimit) ? String(object.shieldLimit) : ""
    };
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.from = object.from ?? "";
    message.shield = object.shield?.map(e => Coin.fromPartial(e)) || [];
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    message.sponsor = object.sponsor ?? "";
    message.sponsorAddr = object.sponsorAddr ?? "";
    message.description = object.description ?? "";
    message.shieldLimit = object.shieldLimit ?? "";
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    message.shield = object.shield?.map(e => Coin.fromAmino(e)) || [];
    message.deposit = object.deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.sponsor !== undefined && object.sponsor !== null) {
      message.sponsor = object.sponsor;
    }
    if (object.sponsor_addr !== undefined && object.sponsor_addr !== null) {
      message.sponsorAddr = object.sponsor_addr;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.shield_limit !== undefined && object.shield_limit !== null) {
      message.shieldLimit = object.shield_limit;
    }
    return message;
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    if (message.shield) {
      obj.shield = message.shield.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.shield = message.shield;
    }
    if (message.deposit) {
      obj.deposit = message.deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.deposit = message.deposit;
    }
    obj.sponsor = message.sponsor === "" ? undefined : message.sponsor;
    obj.sponsor_addr = message.sponsorAddr === "" ? undefined : message.sponsorAddr;
    obj.description = message.description === "" ? undefined : message.description;
    obj.shield_limit = message.shieldLimit === "" ? undefined : message.shieldLimit;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool {
    return MsgCreatePool.decode(message.value);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgCreatePoolResponse",
  encode(_: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePool(): MsgUpdatePool {
  return {
    from: "",
    shield: [],
    serviceFees: [],
    poolId: BigInt(0),
    description: "",
    shieldLimit: ""
  };
}
export const MsgUpdatePool = {
  typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePool",
  encode(message: MsgUpdatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.shield) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.serviceFees) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.poolId);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.shieldLimit !== "") {
      writer.uint32(50).string(message.shieldLimit);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePool {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      shield: Array.isArray(object?.shield) ? object.shield.map((e: any) => Coin.fromJSON(e)) : [],
      serviceFees: Array.isArray(object?.serviceFees) ? object.serviceFees.map((e: any) => Coin.fromJSON(e)) : [],
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      description: isSet(object.description) ? String(object.description) : "",
      shieldLimit: isSet(object.shieldLimit) ? String(object.shieldLimit) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.from = object.from ?? "";
    message.shield = object.shield?.map(e => Coin.fromPartial(e)) || [];
    message.serviceFees = object.serviceFees?.map(e => Coin.fromPartial(e)) || [];
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.shieldLimit = object.shieldLimit ?? "";
    return message;
  },
  fromAmino(object: MsgUpdatePoolAmino): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    message.shield = object.shield?.map(e => Coin.fromAmino(e)) || [];
    message.serviceFees = object.service_fees?.map(e => Coin.fromAmino(e)) || [];
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.shield_limit !== undefined && object.shield_limit !== null) {
      message.shieldLimit = object.shield_limit;
    }
    return message;
  },
  toAmino(message: MsgUpdatePool): MsgUpdatePoolAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    if (message.shield) {
      obj.shield = message.shield.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.shield = message.shield;
    }
    if (message.serviceFees) {
      obj.service_fees = message.serviceFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.service_fees = message.serviceFees;
    }
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.shield_limit = message.shieldLimit === "" ? undefined : message.shieldLimit;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolAminoMsg): MsgUpdatePool {
    return MsgUpdatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolProtoMsg): MsgUpdatePool {
    return MsgUpdatePool.decode(message.value);
  },
  toProto(message: MsgUpdatePool): Uint8Array {
    return MsgUpdatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePool): MsgUpdatePoolProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePool",
      value: MsgUpdatePool.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}
export const MsgUpdatePoolResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePoolResponse",
  encode(_: MsgUpdatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePoolResponseAmino): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
  toAmino(_: MsgUpdatePoolResponse): MsgUpdatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolResponseAminoMsg): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolResponseProtoMsg): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePoolResponse): Uint8Array {
    return MsgUpdatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolResponse): MsgUpdatePoolResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgUpdatePoolResponse",
      value: MsgUpdatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPausePool(): MsgPausePool {
  return {
    from: "",
    poolId: BigInt(0)
  };
}
export const MsgPausePool = {
  typeUrl: "/shentu.shield.v1alpha1.MsgPausePool",
  encode(message: MsgPausePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgPausePool {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgPausePool>): MsgPausePool {
    const message = createBaseMsgPausePool();
    message.from = object.from ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgPausePoolAmino): MsgPausePool {
    const message = createBaseMsgPausePool();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgPausePool): MsgPausePoolAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPausePoolAminoMsg): MsgPausePool {
    return MsgPausePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPausePoolProtoMsg): MsgPausePool {
    return MsgPausePool.decode(message.value);
  },
  toProto(message: MsgPausePool): Uint8Array {
    return MsgPausePool.encode(message).finish();
  },
  toProtoMsg(message: MsgPausePool): MsgPausePoolProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgPausePool",
      value: MsgPausePool.encode(message).finish()
    };
  }
};
function createBaseMsgPausePoolResponse(): MsgPausePoolResponse {
  return {};
}
export const MsgPausePoolResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgPausePoolResponse",
  encode(_: MsgPausePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPausePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPausePoolResponse>): MsgPausePoolResponse {
    const message = createBaseMsgPausePoolResponse();
    return message;
  },
  fromAmino(_: MsgPausePoolResponseAmino): MsgPausePoolResponse {
    const message = createBaseMsgPausePoolResponse();
    return message;
  },
  toAmino(_: MsgPausePoolResponse): MsgPausePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPausePoolResponseAminoMsg): MsgPausePoolResponse {
    return MsgPausePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPausePoolResponseProtoMsg): MsgPausePoolResponse {
    return MsgPausePoolResponse.decode(message.value);
  },
  toProto(message: MsgPausePoolResponse): Uint8Array {
    return MsgPausePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPausePoolResponse): MsgPausePoolResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgPausePoolResponse",
      value: MsgPausePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResumePool(): MsgResumePool {
  return {
    from: "",
    poolId: BigInt(0)
  };
}
export const MsgResumePool = {
  typeUrl: "/shentu.shield.v1alpha1.MsgResumePool",
  encode(message: MsgResumePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgResumePool {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgResumePool>): MsgResumePool {
    const message = createBaseMsgResumePool();
    message.from = object.from ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgResumePoolAmino): MsgResumePool {
    const message = createBaseMsgResumePool();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgResumePool): MsgResumePoolAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgResumePoolAminoMsg): MsgResumePool {
    return MsgResumePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResumePoolProtoMsg): MsgResumePool {
    return MsgResumePool.decode(message.value);
  },
  toProto(message: MsgResumePool): Uint8Array {
    return MsgResumePool.encode(message).finish();
  },
  toProtoMsg(message: MsgResumePool): MsgResumePoolProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgResumePool",
      value: MsgResumePool.encode(message).finish()
    };
  }
};
function createBaseMsgResumePoolResponse(): MsgResumePoolResponse {
  return {};
}
export const MsgResumePoolResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgResumePoolResponse",
  encode(_: MsgResumePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgResumePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgResumePoolResponse>): MsgResumePoolResponse {
    const message = createBaseMsgResumePoolResponse();
    return message;
  },
  fromAmino(_: MsgResumePoolResponseAmino): MsgResumePoolResponse {
    const message = createBaseMsgResumePoolResponse();
    return message;
  },
  toAmino(_: MsgResumePoolResponse): MsgResumePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResumePoolResponseAminoMsg): MsgResumePoolResponse {
    return MsgResumePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResumePoolResponseProtoMsg): MsgResumePoolResponse {
    return MsgResumePoolResponse.decode(message.value);
  },
  toProto(message: MsgResumePoolResponse): Uint8Array {
    return MsgResumePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResumePoolResponse): MsgResumePoolResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgResumePoolResponse",
      value: MsgResumePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositCollateral(): MsgDepositCollateral {
  return {
    from: "",
    collateral: []
  };
}
export const MsgDepositCollateral = {
  typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateral",
  encode(message: MsgDepositCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDepositCollateral {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgDepositCollateral>): MsgDepositCollateral {
    const message = createBaseMsgDepositCollateral();
    message.from = object.from ?? "";
    message.collateral = object.collateral?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositCollateralAmino): MsgDepositCollateral {
    const message = createBaseMsgDepositCollateral();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    message.collateral = object.collateral?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDepositCollateral): MsgDepositCollateralAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral = message.collateral;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositCollateralAminoMsg): MsgDepositCollateral {
    return MsgDepositCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositCollateralProtoMsg): MsgDepositCollateral {
    return MsgDepositCollateral.decode(message.value);
  },
  toProto(message: MsgDepositCollateral): Uint8Array {
    return MsgDepositCollateral.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositCollateral): MsgDepositCollateralProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateral",
      value: MsgDepositCollateral.encode(message).finish()
    };
  }
};
function createBaseMsgDepositCollateralResponse(): MsgDepositCollateralResponse {
  return {};
}
export const MsgDepositCollateralResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateralResponse",
  encode(_: MsgDepositCollateralResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDepositCollateralResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositCollateralResponse>): MsgDepositCollateralResponse {
    const message = createBaseMsgDepositCollateralResponse();
    return message;
  },
  fromAmino(_: MsgDepositCollateralResponseAmino): MsgDepositCollateralResponse {
    const message = createBaseMsgDepositCollateralResponse();
    return message;
  },
  toAmino(_: MsgDepositCollateralResponse): MsgDepositCollateralResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositCollateralResponseAminoMsg): MsgDepositCollateralResponse {
    return MsgDepositCollateralResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositCollateralResponseProtoMsg): MsgDepositCollateralResponse {
    return MsgDepositCollateralResponse.decode(message.value);
  },
  toProto(message: MsgDepositCollateralResponse): Uint8Array {
    return MsgDepositCollateralResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositCollateralResponse): MsgDepositCollateralResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgDepositCollateralResponse",
      value: MsgDepositCollateralResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawCollateral(): MsgWithdrawCollateral {
  return {
    from: "",
    collateral: []
  };
}
export const MsgWithdrawCollateral = {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateral",
  encode(message: MsgWithdrawCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawCollateral {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgWithdrawCollateral>): MsgWithdrawCollateral {
    const message = createBaseMsgWithdrawCollateral();
    message.from = object.from ?? "";
    message.collateral = object.collateral?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawCollateralAmino): MsgWithdrawCollateral {
    const message = createBaseMsgWithdrawCollateral();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    message.collateral = object.collateral?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawCollateral): MsgWithdrawCollateralAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral = message.collateral;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawCollateralAminoMsg): MsgWithdrawCollateral {
    return MsgWithdrawCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawCollateralProtoMsg): MsgWithdrawCollateral {
    return MsgWithdrawCollateral.decode(message.value);
  },
  toProto(message: MsgWithdrawCollateral): Uint8Array {
    return MsgWithdrawCollateral.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawCollateral): MsgWithdrawCollateralProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateral",
      value: MsgWithdrawCollateral.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawCollateralResponse(): MsgWithdrawCollateralResponse {
  return {};
}
export const MsgWithdrawCollateralResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateralResponse",
  encode(_: MsgWithdrawCollateralResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawCollateralResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawCollateralResponse>): MsgWithdrawCollateralResponse {
    const message = createBaseMsgWithdrawCollateralResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawCollateralResponseAmino): MsgWithdrawCollateralResponse {
    const message = createBaseMsgWithdrawCollateralResponse();
    return message;
  },
  toAmino(_: MsgWithdrawCollateralResponse): MsgWithdrawCollateralResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawCollateralResponseAminoMsg): MsgWithdrawCollateralResponse {
    return MsgWithdrawCollateralResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawCollateralResponseProtoMsg): MsgWithdrawCollateralResponse {
    return MsgWithdrawCollateralResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawCollateralResponse): Uint8Array {
    return MsgWithdrawCollateralResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawCollateralResponse): MsgWithdrawCollateralResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawCollateralResponse",
      value: MsgWithdrawCollateralResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return {
    from: ""
  };
}
export const MsgWithdrawRewards = {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewards",
  encode(message: MsgWithdrawRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawRewards {
    return {
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawRewardsAmino): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgWithdrawRewards): MsgWithdrawRewardsAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardsAminoMsg): MsgWithdrawRewards {
    return MsgWithdrawRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardsProtoMsg): MsgWithdrawRewards {
    return MsgWithdrawRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawRewards): Uint8Array {
    return MsgWithdrawRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewards): MsgWithdrawRewardsProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewards",
      value: MsgWithdrawRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewardsResponse(): MsgWithdrawRewardsResponse {
  return {};
}
export const MsgWithdrawRewardsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewardsResponse",
  encode(_: MsgWithdrawRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawRewardsResponseAmino): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    return message;
  },
  toAmino(_: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardsResponseAminoMsg): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardsResponseProtoMsg): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawRewardsResponse): Uint8Array {
    return MsgWithdrawRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawRewardsResponse",
      value: MsgWithdrawRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawForeignRewards(): MsgWithdrawForeignRewards {
  return {
    from: "",
    denom: "",
    toAddr: ""
  };
}
export const MsgWithdrawForeignRewards = {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards",
  encode(message: MsgWithdrawForeignRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.toAddr !== "") {
      writer.uint32(26).string(message.toAddr);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawForeignRewards {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      toAddr: isSet(object.toAddr) ? String(object.toAddr) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawForeignRewards>): MsgWithdrawForeignRewards {
    const message = createBaseMsgWithdrawForeignRewards();
    message.from = object.from ?? "";
    message.denom = object.denom ?? "";
    message.toAddr = object.toAddr ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawForeignRewardsAmino): MsgWithdrawForeignRewards {
    const message = createBaseMsgWithdrawForeignRewards();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.to_addr !== undefined && object.to_addr !== null) {
      message.toAddr = object.to_addr;
    }
    return message;
  },
  toAmino(message: MsgWithdrawForeignRewards): MsgWithdrawForeignRewardsAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.to_addr = message.toAddr === "" ? undefined : message.toAddr;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawForeignRewardsAminoMsg): MsgWithdrawForeignRewards {
    return MsgWithdrawForeignRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawForeignRewardsProtoMsg): MsgWithdrawForeignRewards {
    return MsgWithdrawForeignRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawForeignRewards): Uint8Array {
    return MsgWithdrawForeignRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawForeignRewards): MsgWithdrawForeignRewardsProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewards",
      value: MsgWithdrawForeignRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawForeignRewardsResponse(): MsgWithdrawForeignRewardsResponse {
  return {};
}
export const MsgWithdrawForeignRewardsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewardsResponse",
  encode(_: MsgWithdrawForeignRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawForeignRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawForeignRewardsResponse>): MsgWithdrawForeignRewardsResponse {
    const message = createBaseMsgWithdrawForeignRewardsResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawForeignRewardsResponseAmino): MsgWithdrawForeignRewardsResponse {
    const message = createBaseMsgWithdrawForeignRewardsResponse();
    return message;
  },
  toAmino(_: MsgWithdrawForeignRewardsResponse): MsgWithdrawForeignRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawForeignRewardsResponseAminoMsg): MsgWithdrawForeignRewardsResponse {
    return MsgWithdrawForeignRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawForeignRewardsResponseProtoMsg): MsgWithdrawForeignRewardsResponse {
    return MsgWithdrawForeignRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawForeignRewardsResponse): Uint8Array {
    return MsgWithdrawForeignRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawForeignRewardsResponse): MsgWithdrawForeignRewardsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawForeignRewardsResponse",
      value: MsgWithdrawForeignRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearPayouts(): MsgClearPayouts {
  return {
    from: "",
    denom: ""
  };
}
export const MsgClearPayouts = {
  typeUrl: "/shentu.shield.v1alpha1.MsgClearPayouts",
  encode(message: MsgClearPayouts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgClearPayouts {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgClearPayouts>): MsgClearPayouts {
    const message = createBaseMsgClearPayouts();
    message.from = object.from ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgClearPayoutsAmino): MsgClearPayouts {
    const message = createBaseMsgClearPayouts();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgClearPayouts): MsgClearPayoutsAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgClearPayoutsAminoMsg): MsgClearPayouts {
    return MsgClearPayouts.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearPayoutsProtoMsg): MsgClearPayouts {
    return MsgClearPayouts.decode(message.value);
  },
  toProto(message: MsgClearPayouts): Uint8Array {
    return MsgClearPayouts.encode(message).finish();
  },
  toProtoMsg(message: MsgClearPayouts): MsgClearPayoutsProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgClearPayouts",
      value: MsgClearPayouts.encode(message).finish()
    };
  }
};
function createBaseMsgClearPayoutsResponse(): MsgClearPayoutsResponse {
  return {};
}
export const MsgClearPayoutsResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgClearPayoutsResponse",
  encode(_: MsgClearPayoutsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClearPayoutsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClearPayoutsResponse>): MsgClearPayoutsResponse {
    const message = createBaseMsgClearPayoutsResponse();
    return message;
  },
  fromAmino(_: MsgClearPayoutsResponseAmino): MsgClearPayoutsResponse {
    const message = createBaseMsgClearPayoutsResponse();
    return message;
  },
  toAmino(_: MsgClearPayoutsResponse): MsgClearPayoutsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClearPayoutsResponseAminoMsg): MsgClearPayoutsResponse {
    return MsgClearPayoutsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearPayoutsResponseProtoMsg): MsgClearPayoutsResponse {
    return MsgClearPayoutsResponse.decode(message.value);
  },
  toProto(message: MsgClearPayoutsResponse): Uint8Array {
    return MsgClearPayoutsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClearPayoutsResponse): MsgClearPayoutsResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgClearPayoutsResponse",
      value: MsgClearPayoutsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPurchaseShield(): MsgPurchaseShield {
  return {
    poolId: BigInt(0),
    shield: [],
    description: "",
    from: ""
  };
}
export const MsgPurchaseShield = {
  typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShield",
  encode(message: MsgPurchaseShield, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.shield) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgPurchaseShield {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      shield: Array.isArray(object?.shield) ? object.shield.map((e: any) => Coin.fromJSON(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgPurchaseShield>): MsgPurchaseShield {
    const message = createBaseMsgPurchaseShield();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.shield = object.shield?.map(e => Coin.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgPurchaseShieldAmino): MsgPurchaseShield {
    const message = createBaseMsgPurchaseShield();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.shield = object.shield?.map(e => Coin.fromAmino(e)) || [];
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgPurchaseShield): MsgPurchaseShieldAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    if (message.shield) {
      obj.shield = message.shield.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.shield = message.shield;
    }
    obj.description = message.description === "" ? undefined : message.description;
    obj.from = message.from === "" ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgPurchaseShieldAminoMsg): MsgPurchaseShield {
    return MsgPurchaseShield.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurchaseShieldProtoMsg): MsgPurchaseShield {
    return MsgPurchaseShield.decode(message.value);
  },
  toProto(message: MsgPurchaseShield): Uint8Array {
    return MsgPurchaseShield.encode(message).finish();
  },
  toProtoMsg(message: MsgPurchaseShield): MsgPurchaseShieldProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShield",
      value: MsgPurchaseShield.encode(message).finish()
    };
  }
};
function createBaseMsgPurchaseShieldResponse(): MsgPurchaseShieldResponse {
  return {};
}
export const MsgPurchaseShieldResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShieldResponse",
  encode(_: MsgPurchaseShieldResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPurchaseShieldResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPurchaseShieldResponse>): MsgPurchaseShieldResponse {
    const message = createBaseMsgPurchaseShieldResponse();
    return message;
  },
  fromAmino(_: MsgPurchaseShieldResponseAmino): MsgPurchaseShieldResponse {
    const message = createBaseMsgPurchaseShieldResponse();
    return message;
  },
  toAmino(_: MsgPurchaseShieldResponse): MsgPurchaseShieldResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPurchaseShieldResponseAminoMsg): MsgPurchaseShieldResponse {
    return MsgPurchaseShieldResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPurchaseShieldResponseProtoMsg): MsgPurchaseShieldResponse {
    return MsgPurchaseShieldResponse.decode(message.value);
  },
  toProto(message: MsgPurchaseShieldResponse): Uint8Array {
    return MsgPurchaseShieldResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPurchaseShieldResponse): MsgPurchaseShieldResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgPurchaseShieldResponse",
      value: MsgPurchaseShieldResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawReimbursement(): MsgWithdrawReimbursement {
  return {
    proposalId: BigInt(0),
    from: ""
  };
}
export const MsgWithdrawReimbursement = {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement",
  encode(message: MsgWithdrawReimbursement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawReimbursement {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawReimbursement>): MsgWithdrawReimbursement {
    const message = createBaseMsgWithdrawReimbursement();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawReimbursementAmino): MsgWithdrawReimbursement {
    const message = createBaseMsgWithdrawReimbursement();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgWithdrawReimbursement): MsgWithdrawReimbursementAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.from = message.from === "" ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawReimbursementAminoMsg): MsgWithdrawReimbursement {
    return MsgWithdrawReimbursement.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawReimbursementProtoMsg): MsgWithdrawReimbursement {
    return MsgWithdrawReimbursement.decode(message.value);
  },
  toProto(message: MsgWithdrawReimbursement): Uint8Array {
    return MsgWithdrawReimbursement.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawReimbursement): MsgWithdrawReimbursementProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursement",
      value: MsgWithdrawReimbursement.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawReimbursementResponse(): MsgWithdrawReimbursementResponse {
  return {};
}
export const MsgWithdrawReimbursementResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursementResponse",
  encode(_: MsgWithdrawReimbursementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawReimbursementResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawReimbursementResponse>): MsgWithdrawReimbursementResponse {
    const message = createBaseMsgWithdrawReimbursementResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawReimbursementResponseAmino): MsgWithdrawReimbursementResponse {
    const message = createBaseMsgWithdrawReimbursementResponse();
    return message;
  },
  toAmino(_: MsgWithdrawReimbursementResponse): MsgWithdrawReimbursementResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawReimbursementResponseAminoMsg): MsgWithdrawReimbursementResponse {
    return MsgWithdrawReimbursementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawReimbursementResponseProtoMsg): MsgWithdrawReimbursementResponse {
    return MsgWithdrawReimbursementResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawReimbursementResponse): Uint8Array {
    return MsgWithdrawReimbursementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawReimbursementResponse): MsgWithdrawReimbursementResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgWithdrawReimbursementResponse",
      value: MsgWithdrawReimbursementResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStakeForShield(): MsgStakeForShield {
  return {
    poolId: BigInt(0),
    shield: [],
    description: "",
    from: ""
  };
}
export const MsgStakeForShield = {
  typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShield",
  encode(message: MsgStakeForShield, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.shield) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgStakeForShield {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      shield: Array.isArray(object?.shield) ? object.shield.map((e: any) => Coin.fromJSON(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgStakeForShield>): MsgStakeForShield {
    const message = createBaseMsgStakeForShield();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.shield = object.shield?.map(e => Coin.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgStakeForShieldAmino): MsgStakeForShield {
    const message = createBaseMsgStakeForShield();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.shield = object.shield?.map(e => Coin.fromAmino(e)) || [];
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgStakeForShield): MsgStakeForShieldAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    if (message.shield) {
      obj.shield = message.shield.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.shield = message.shield;
    }
    obj.description = message.description === "" ? undefined : message.description;
    obj.from = message.from === "" ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgStakeForShieldAminoMsg): MsgStakeForShield {
    return MsgStakeForShield.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeForShieldProtoMsg): MsgStakeForShield {
    return MsgStakeForShield.decode(message.value);
  },
  toProto(message: MsgStakeForShield): Uint8Array {
    return MsgStakeForShield.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeForShield): MsgStakeForShieldProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShield",
      value: MsgStakeForShield.encode(message).finish()
    };
  }
};
function createBaseMsgStakeForShieldResponse(): MsgStakeForShieldResponse {
  return {};
}
export const MsgStakeForShieldResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShieldResponse",
  encode(_: MsgStakeForShieldResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgStakeForShieldResponse {
    return {};
  },
  fromPartial(_: Partial<MsgStakeForShieldResponse>): MsgStakeForShieldResponse {
    const message = createBaseMsgStakeForShieldResponse();
    return message;
  },
  fromAmino(_: MsgStakeForShieldResponseAmino): MsgStakeForShieldResponse {
    const message = createBaseMsgStakeForShieldResponse();
    return message;
  },
  toAmino(_: MsgStakeForShieldResponse): MsgStakeForShieldResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStakeForShieldResponseAminoMsg): MsgStakeForShieldResponse {
    return MsgStakeForShieldResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeForShieldResponseProtoMsg): MsgStakeForShieldResponse {
    return MsgStakeForShieldResponse.decode(message.value);
  },
  toProto(message: MsgStakeForShieldResponse): Uint8Array {
    return MsgStakeForShieldResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeForShieldResponse): MsgStakeForShieldResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgStakeForShieldResponse",
      value: MsgStakeForShieldResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeFromShield(): MsgUnstakeFromShield {
  return {
    poolId: BigInt(0),
    shield: [],
    from: ""
  };
}
export const MsgUnstakeFromShield = {
  typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShield",
  encode(message: MsgUnstakeFromShield, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.shield) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnstakeFromShield {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      shield: Array.isArray(object?.shield) ? object.shield.map((e: any) => Coin.fromJSON(e)) : [],
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgUnstakeFromShield>): MsgUnstakeFromShield {
    const message = createBaseMsgUnstakeFromShield();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.shield = object.shield?.map(e => Coin.fromPartial(e)) || [];
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeFromShieldAmino): MsgUnstakeFromShield {
    const message = createBaseMsgUnstakeFromShield();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.shield = object.shield?.map(e => Coin.fromAmino(e)) || [];
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgUnstakeFromShield): MsgUnstakeFromShieldAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    if (message.shield) {
      obj.shield = message.shield.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.shield = message.shield;
    }
    obj.from = message.from === "" ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeFromShieldAminoMsg): MsgUnstakeFromShield {
    return MsgUnstakeFromShield.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeFromShieldProtoMsg): MsgUnstakeFromShield {
    return MsgUnstakeFromShield.decode(message.value);
  },
  toProto(message: MsgUnstakeFromShield): Uint8Array {
    return MsgUnstakeFromShield.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeFromShield): MsgUnstakeFromShieldProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShield",
      value: MsgUnstakeFromShield.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeFromShieldResponse(): MsgUnstakeFromShieldResponse {
  return {};
}
export const MsgUnstakeFromShieldResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShieldResponse",
  encode(_: MsgUnstakeFromShieldResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnstakeFromShieldResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnstakeFromShieldResponse>): MsgUnstakeFromShieldResponse {
    const message = createBaseMsgUnstakeFromShieldResponse();
    return message;
  },
  fromAmino(_: MsgUnstakeFromShieldResponseAmino): MsgUnstakeFromShieldResponse {
    const message = createBaseMsgUnstakeFromShieldResponse();
    return message;
  },
  toAmino(_: MsgUnstakeFromShieldResponse): MsgUnstakeFromShieldResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeFromShieldResponseAminoMsg): MsgUnstakeFromShieldResponse {
    return MsgUnstakeFromShieldResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeFromShieldResponseProtoMsg): MsgUnstakeFromShieldResponse {
    return MsgUnstakeFromShieldResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeFromShieldResponse): Uint8Array {
    return MsgUnstakeFromShieldResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeFromShieldResponse): MsgUnstakeFromShieldResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgUnstakeFromShieldResponse",
      value: MsgUnstakeFromShieldResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSponsor(): MsgUpdateSponsor {
  return {
    poolId: BigInt(0),
    sponsor: "",
    sponsorAddr: "",
    from: ""
  };
}
export const MsgUpdateSponsor = {
  typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsor",
  encode(message: MsgUpdateSponsor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.sponsor !== "") {
      writer.uint32(18).string(message.sponsor);
    }
    if (message.sponsorAddr !== "") {
      writer.uint32(26).string(message.sponsorAddr);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateSponsor {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : "",
      sponsorAddr: isSet(object.sponsorAddr) ? String(object.sponsorAddr) : "",
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateSponsor>): MsgUpdateSponsor {
    const message = createBaseMsgUpdateSponsor();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.sponsor = object.sponsor ?? "";
    message.sponsorAddr = object.sponsorAddr ?? "";
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateSponsorAmino): MsgUpdateSponsor {
    const message = createBaseMsgUpdateSponsor();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.sponsor !== undefined && object.sponsor !== null) {
      message.sponsor = object.sponsor;
    }
    if (object.sponsor_addr !== undefined && object.sponsor_addr !== null) {
      message.sponsorAddr = object.sponsor_addr;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgUpdateSponsor): MsgUpdateSponsorAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.sponsor = message.sponsor === "" ? undefined : message.sponsor;
    obj.sponsor_addr = message.sponsorAddr === "" ? undefined : message.sponsorAddr;
    obj.from = message.from === "" ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSponsorAminoMsg): MsgUpdateSponsor {
    return MsgUpdateSponsor.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSponsorProtoMsg): MsgUpdateSponsor {
    return MsgUpdateSponsor.decode(message.value);
  },
  toProto(message: MsgUpdateSponsor): Uint8Array {
    return MsgUpdateSponsor.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSponsor): MsgUpdateSponsorProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsor",
      value: MsgUpdateSponsor.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSponsorResponse(): MsgUpdateSponsorResponse {
  return {};
}
export const MsgUpdateSponsorResponse = {
  typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsorResponse",
  encode(_: MsgUpdateSponsorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateSponsorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateSponsorResponse>): MsgUpdateSponsorResponse {
    const message = createBaseMsgUpdateSponsorResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSponsorResponseAmino): MsgUpdateSponsorResponse {
    const message = createBaseMsgUpdateSponsorResponse();
    return message;
  },
  toAmino(_: MsgUpdateSponsorResponse): MsgUpdateSponsorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSponsorResponseAminoMsg): MsgUpdateSponsorResponse {
    return MsgUpdateSponsorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSponsorResponseProtoMsg): MsgUpdateSponsorResponse {
    return MsgUpdateSponsorResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSponsorResponse): Uint8Array {
    return MsgUpdateSponsorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSponsorResponse): MsgUpdateSponsorResponseProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.MsgUpdateSponsorResponse",
      value: MsgUpdateSponsorResponse.encode(message).finish()
    };
  }
};