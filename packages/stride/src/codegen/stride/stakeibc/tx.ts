import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { ICAAccountType, iCAAccountTypeFromJSON } from "./ica_account";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export interface MsgLiquidStake {
  creator: string;
  amount: string;
  hostDenom: string;
}
export interface MsgLiquidStakeProtoMsg {
  typeUrl: "/stride.stakeibc.MsgLiquidStake";
  value: Uint8Array;
}
export interface MsgLiquidStakeAmino {
  creator: string;
  amount: string;
  host_denom: string;
}
export interface MsgLiquidStakeAminoMsg {
  type: "/stride.stakeibc.MsgLiquidStake";
  value: MsgLiquidStakeAmino;
}
export interface MsgLiquidStakeSDKType {
  creator: string;
  amount: string;
  host_denom: string;
}
export interface MsgLiquidStakeResponse {}
export interface MsgLiquidStakeResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse";
  value: Uint8Array;
}
export interface MsgLiquidStakeResponseAmino {}
export interface MsgLiquidStakeResponseAminoMsg {
  type: "/stride.stakeibc.MsgLiquidStakeResponse";
  value: MsgLiquidStakeResponseAmino;
}
export interface MsgLiquidStakeResponseSDKType {}
export interface MsgClearBalance {
  creator: string;
  chainId: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceProtoMsg {
  typeUrl: "/stride.stakeibc.MsgClearBalance";
  value: Uint8Array;
}
export interface MsgClearBalanceAmino {
  creator: string;
  chain_id: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceAminoMsg {
  type: "/stride.stakeibc.MsgClearBalance";
  value: MsgClearBalanceAmino;
}
export interface MsgClearBalanceSDKType {
  creator: string;
  chain_id: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceResponse {}
export interface MsgClearBalanceResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgClearBalanceResponse";
  value: Uint8Array;
}
export interface MsgClearBalanceResponseAmino {}
export interface MsgClearBalanceResponseAminoMsg {
  type: "/stride.stakeibc.MsgClearBalanceResponse";
  value: MsgClearBalanceResponseAmino;
}
export interface MsgClearBalanceResponseSDKType {}
export interface MsgRedeemStake {
  creator: string;
  amount: string;
  hostZone: string;
  receiver: string;
}
export interface MsgRedeemStakeProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRedeemStake";
  value: Uint8Array;
}
export interface MsgRedeemStakeAmino {
  creator: string;
  amount: string;
  host_zone: string;
  receiver: string;
}
export interface MsgRedeemStakeAminoMsg {
  type: "/stride.stakeibc.MsgRedeemStake";
  value: MsgRedeemStakeAmino;
}
export interface MsgRedeemStakeSDKType {
  creator: string;
  amount: string;
  host_zone: string;
  receiver: string;
}
export interface MsgRedeemStakeResponse {}
export interface MsgRedeemStakeResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse";
  value: Uint8Array;
}
export interface MsgRedeemStakeResponseAmino {}
export interface MsgRedeemStakeResponseAminoMsg {
  type: "/stride.stakeibc.MsgRedeemStakeResponse";
  value: MsgRedeemStakeResponseAmino;
}
export interface MsgRedeemStakeResponseSDKType {}
/** next: 15 */
export interface MsgRegisterHostZone {
  connectionId: string;
  bech32prefix: string;
  hostDenom: string;
  ibcDenom: string;
  creator: string;
  transferChannelId: string;
  unbondingFrequency: bigint;
  minRedemptionRate: string;
  maxRedemptionRate: string;
}
export interface MsgRegisterHostZoneProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZone";
  value: Uint8Array;
}
/** next: 15 */
export interface MsgRegisterHostZoneAmino {
  connection_id: string;
  bech32prefix: string;
  host_denom: string;
  ibc_denom: string;
  creator: string;
  transfer_channel_id: string;
  unbonding_frequency: string;
  min_redemption_rate: string;
  max_redemption_rate: string;
}
export interface MsgRegisterHostZoneAminoMsg {
  type: "/stride.stakeibc.MsgRegisterHostZone";
  value: MsgRegisterHostZoneAmino;
}
/** next: 15 */
export interface MsgRegisterHostZoneSDKType {
  connection_id: string;
  bech32prefix: string;
  host_denom: string;
  ibc_denom: string;
  creator: string;
  transfer_channel_id: string;
  unbonding_frequency: bigint;
  min_redemption_rate: string;
  max_redemption_rate: string;
}
export interface MsgRegisterHostZoneResponse {}
export interface MsgRegisterHostZoneResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse";
  value: Uint8Array;
}
export interface MsgRegisterHostZoneResponseAmino {}
export interface MsgRegisterHostZoneResponseAminoMsg {
  type: "/stride.stakeibc.MsgRegisterHostZoneResponse";
  value: MsgRegisterHostZoneResponseAmino;
}
export interface MsgRegisterHostZoneResponseSDKType {}
export interface MsgClaimUndelegatedTokens {
  creator: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
  hostZoneId: string;
  epoch: bigint;
  sender: string;
}
export interface MsgClaimUndelegatedTokensProtoMsg {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens";
  value: Uint8Array;
}
export interface MsgClaimUndelegatedTokensAmino {
  creator: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
  host_zone_id: string;
  epoch: string;
  sender: string;
}
export interface MsgClaimUndelegatedTokensAminoMsg {
  type: "/stride.stakeibc.MsgClaimUndelegatedTokens";
  value: MsgClaimUndelegatedTokensAmino;
}
export interface MsgClaimUndelegatedTokensSDKType {
  creator: string;
  host_zone_id: string;
  epoch: bigint;
  sender: string;
}
export interface MsgClaimUndelegatedTokensResponse {}
export interface MsgClaimUndelegatedTokensResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse";
  value: Uint8Array;
}
export interface MsgClaimUndelegatedTokensResponseAmino {}
export interface MsgClaimUndelegatedTokensResponseAminoMsg {
  type: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse";
  value: MsgClaimUndelegatedTokensResponseAmino;
}
export interface MsgClaimUndelegatedTokensResponseSDKType {}
export interface MsgRebalanceValidators {
  creator: string;
  hostZone: string;
  numRebalance: bigint;
}
export interface MsgRebalanceValidatorsProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidators";
  value: Uint8Array;
}
export interface MsgRebalanceValidatorsAmino {
  creator: string;
  host_zone: string;
  num_rebalance: string;
}
export interface MsgRebalanceValidatorsAminoMsg {
  type: "/stride.stakeibc.MsgRebalanceValidators";
  value: MsgRebalanceValidatorsAmino;
}
export interface MsgRebalanceValidatorsSDKType {
  creator: string;
  host_zone: string;
  num_rebalance: bigint;
}
export interface MsgRebalanceValidatorsResponse {}
export interface MsgRebalanceValidatorsResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse";
  value: Uint8Array;
}
export interface MsgRebalanceValidatorsResponseAmino {}
export interface MsgRebalanceValidatorsResponseAminoMsg {
  type: "/stride.stakeibc.MsgRebalanceValidatorsResponse";
  value: MsgRebalanceValidatorsResponseAmino;
}
export interface MsgRebalanceValidatorsResponseSDKType {}
export interface MsgAddValidators {
  creator: string;
  hostZone: string;
  validators: Validator[];
}
export interface MsgAddValidatorsProtoMsg {
  typeUrl: "/stride.stakeibc.MsgAddValidators";
  value: Uint8Array;
}
export interface MsgAddValidatorsAmino {
  creator: string;
  host_zone: string;
  validators: ValidatorAmino[];
}
export interface MsgAddValidatorsAminoMsg {
  type: "/stride.stakeibc.MsgAddValidators";
  value: MsgAddValidatorsAmino;
}
export interface MsgAddValidatorsSDKType {
  creator: string;
  host_zone: string;
  validators: ValidatorSDKType[];
}
export interface MsgAddValidatorsResponse {}
export interface MsgAddValidatorsResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse";
  value: Uint8Array;
}
export interface MsgAddValidatorsResponseAmino {}
export interface MsgAddValidatorsResponseAminoMsg {
  type: "/stride.stakeibc.MsgAddValidatorsResponse";
  value: MsgAddValidatorsResponseAmino;
}
export interface MsgAddValidatorsResponseSDKType {}
export interface MsgChangeValidatorWeight {
  creator: string;
  hostZone: string;
  valAddr: string;
  weight: bigint;
}
export interface MsgChangeValidatorWeightProtoMsg {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeight";
  value: Uint8Array;
}
export interface MsgChangeValidatorWeightAmino {
  creator: string;
  host_zone: string;
  val_addr: string;
  weight: string;
}
export interface MsgChangeValidatorWeightAminoMsg {
  type: "/stride.stakeibc.MsgChangeValidatorWeight";
  value: MsgChangeValidatorWeightAmino;
}
export interface MsgChangeValidatorWeightSDKType {
  creator: string;
  host_zone: string;
  val_addr: string;
  weight: bigint;
}
export interface MsgChangeValidatorWeightResponse {}
export interface MsgChangeValidatorWeightResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightResponse";
  value: Uint8Array;
}
export interface MsgChangeValidatorWeightResponseAmino {}
export interface MsgChangeValidatorWeightResponseAminoMsg {
  type: "/stride.stakeibc.MsgChangeValidatorWeightResponse";
  value: MsgChangeValidatorWeightResponseAmino;
}
export interface MsgChangeValidatorWeightResponseSDKType {}
export interface MsgDeleteValidator {
  creator: string;
  hostZone: string;
  valAddr: string;
}
export interface MsgDeleteValidatorProtoMsg {
  typeUrl: "/stride.stakeibc.MsgDeleteValidator";
  value: Uint8Array;
}
export interface MsgDeleteValidatorAmino {
  creator: string;
  host_zone: string;
  val_addr: string;
}
export interface MsgDeleteValidatorAminoMsg {
  type: "/stride.stakeibc.MsgDeleteValidator";
  value: MsgDeleteValidatorAmino;
}
export interface MsgDeleteValidatorSDKType {
  creator: string;
  host_zone: string;
  val_addr: string;
}
export interface MsgDeleteValidatorResponse {}
export interface MsgDeleteValidatorResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse";
  value: Uint8Array;
}
export interface MsgDeleteValidatorResponseAmino {}
export interface MsgDeleteValidatorResponseAminoMsg {
  type: "/stride.stakeibc.MsgDeleteValidatorResponse";
  value: MsgDeleteValidatorResponseAmino;
}
export interface MsgDeleteValidatorResponseSDKType {}
export interface MsgRestoreInterchainAccount {
  creator: string;
  chainId: string;
  accountType: ICAAccountType;
}
export interface MsgRestoreInterchainAccountProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount";
  value: Uint8Array;
}
export interface MsgRestoreInterchainAccountAmino {
  creator: string;
  chain_id: string;
  account_type: ICAAccountType;
}
export interface MsgRestoreInterchainAccountAminoMsg {
  type: "/stride.stakeibc.MsgRestoreInterchainAccount";
  value: MsgRestoreInterchainAccountAmino;
}
export interface MsgRestoreInterchainAccountSDKType {
  creator: string;
  chain_id: string;
  account_type: ICAAccountType;
}
export interface MsgRestoreInterchainAccountResponse {}
export interface MsgRestoreInterchainAccountResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse";
  value: Uint8Array;
}
export interface MsgRestoreInterchainAccountResponseAmino {}
export interface MsgRestoreInterchainAccountResponseAminoMsg {
  type: "/stride.stakeibc.MsgRestoreInterchainAccountResponse";
  value: MsgRestoreInterchainAccountResponseAmino;
}
export interface MsgRestoreInterchainAccountResponseSDKType {}
export interface MsgUpdateValidatorSharesExchRate {
  creator: string;
  chainId: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateProtoMsg {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
  value: Uint8Array;
}
export interface MsgUpdateValidatorSharesExchRateAmino {
  creator: string;
  chain_id: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateAminoMsg {
  type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
  value: MsgUpdateValidatorSharesExchRateAmino;
}
export interface MsgUpdateValidatorSharesExchRateSDKType {
  creator: string;
  chain_id: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {}
export interface MsgUpdateValidatorSharesExchRateResponseProtoMsg {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse";
  value: Uint8Array;
}
export interface MsgUpdateValidatorSharesExchRateResponseAmino {}
export interface MsgUpdateValidatorSharesExchRateResponseAminoMsg {
  type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse";
  value: MsgUpdateValidatorSharesExchRateResponseAmino;
}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {}
function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    creator: "",
    amount: "",
    hostDenom: ""
  };
}
export const MsgLiquidStake = {
  typeUrl: "/stride.stakeibc.MsgLiquidStake",
  encode(message: MsgLiquidStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgLiquidStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  },
  fromAmino(object: MsgLiquidStakeAmino): MsgLiquidStake {
    return {
      creator: object.creator,
      amount: object.amount,
      hostDenom: object.host_denom
    };
  },
  toAmino(message: MsgLiquidStake): MsgLiquidStakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.host_denom = message.hostDenom;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidStakeAminoMsg): MsgLiquidStake {
    return MsgLiquidStake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidStakeProtoMsg): MsgLiquidStake {
    return MsgLiquidStake.decode(message.value);
  },
  toProto(message: MsgLiquidStake): Uint8Array {
    return MsgLiquidStake.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidStake): MsgLiquidStakeProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgLiquidStake",
      value: MsgLiquidStake.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}
export const MsgLiquidStakeResponse = {
  typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse",
  encode(_: MsgLiquidStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLiquidStakeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  },
  fromAmino(_: MsgLiquidStakeResponseAmino): MsgLiquidStakeResponse {
    return {};
  },
  toAmino(_: MsgLiquidStakeResponse): MsgLiquidStakeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLiquidStakeResponseAminoMsg): MsgLiquidStakeResponse {
    return MsgLiquidStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidStakeResponseProtoMsg): MsgLiquidStakeResponse {
    return MsgLiquidStakeResponse.decode(message.value);
  },
  toProto(message: MsgLiquidStakeResponse): Uint8Array {
    return MsgLiquidStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidStakeResponse): MsgLiquidStakeResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse",
      value: MsgLiquidStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearBalance(): MsgClearBalance {
  return {
    creator: "",
    chainId: "",
    amount: "",
    channel: ""
  };
}
export const MsgClearBalance = {
  typeUrl: "/stride.stakeibc.MsgClearBalance",
  encode(message: MsgClearBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): MsgClearBalance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<MsgClearBalance>): MsgClearBalance {
    const message = createBaseMsgClearBalance();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.amount = object.amount ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: MsgClearBalanceAmino): MsgClearBalance {
    return {
      creator: object.creator,
      chainId: object.chain_id,
      amount: object.amount,
      channel: object.channel
    };
  },
  toAmino(message: MsgClearBalance): MsgClearBalanceAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    obj.amount = message.amount;
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: MsgClearBalanceAminoMsg): MsgClearBalance {
    return MsgClearBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearBalanceProtoMsg): MsgClearBalance {
    return MsgClearBalance.decode(message.value);
  },
  toProto(message: MsgClearBalance): Uint8Array {
    return MsgClearBalance.encode(message).finish();
  },
  toProtoMsg(message: MsgClearBalance): MsgClearBalanceProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgClearBalance",
      value: MsgClearBalance.encode(message).finish()
    };
  }
};
function createBaseMsgClearBalanceResponse(): MsgClearBalanceResponse {
  return {};
}
export const MsgClearBalanceResponse = {
  typeUrl: "/stride.stakeibc.MsgClearBalanceResponse",
  encode(_: MsgClearBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClearBalanceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClearBalanceResponse>): MsgClearBalanceResponse {
    const message = createBaseMsgClearBalanceResponse();
    return message;
  },
  fromAmino(_: MsgClearBalanceResponseAmino): MsgClearBalanceResponse {
    return {};
  },
  toAmino(_: MsgClearBalanceResponse): MsgClearBalanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClearBalanceResponseAminoMsg): MsgClearBalanceResponse {
    return MsgClearBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearBalanceResponseProtoMsg): MsgClearBalanceResponse {
    return MsgClearBalanceResponse.decode(message.value);
  },
  toProto(message: MsgClearBalanceResponse): Uint8Array {
    return MsgClearBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClearBalanceResponse): MsgClearBalanceResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgClearBalanceResponse",
      value: MsgClearBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStake(): MsgRedeemStake {
  return {
    creator: "",
    amount: "",
    hostZone: "",
    receiver: ""
  };
}
export const MsgRedeemStake = {
  typeUrl: "/stride.stakeibc.MsgRedeemStake",
  encode(message: MsgRedeemStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): MsgRedeemStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<MsgRedeemStake>): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.hostZone = object.hostZone ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgRedeemStakeAmino): MsgRedeemStake {
    return {
      creator: object.creator,
      amount: object.amount,
      hostZone: object.host_zone,
      receiver: object.receiver
    };
  },
  toAmino(message: MsgRedeemStake): MsgRedeemStakeAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount;
    obj.host_zone = message.hostZone;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemStakeAminoMsg): MsgRedeemStake {
    return MsgRedeemStake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemStakeProtoMsg): MsgRedeemStake {
    return MsgRedeemStake.decode(message.value);
  },
  toProto(message: MsgRedeemStake): Uint8Array {
    return MsgRedeemStake.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemStake): MsgRedeemStakeProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRedeemStake",
      value: MsgRedeemStake.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStakeResponse(): MsgRedeemStakeResponse {
  return {};
}
export const MsgRedeemStakeResponse = {
  typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse",
  encode(_: MsgRedeemStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRedeemStakeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    return message;
  },
  fromAmino(_: MsgRedeemStakeResponseAmino): MsgRedeemStakeResponse {
    return {};
  },
  toAmino(_: MsgRedeemStakeResponse): MsgRedeemStakeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedeemStakeResponseAminoMsg): MsgRedeemStakeResponse {
    return MsgRedeemStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemStakeResponseProtoMsg): MsgRedeemStakeResponse {
    return MsgRedeemStakeResponse.decode(message.value);
  },
  toProto(message: MsgRedeemStakeResponse): Uint8Array {
    return MsgRedeemStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemStakeResponse): MsgRedeemStakeResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse",
      value: MsgRedeemStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterHostZone(): MsgRegisterHostZone {
  return {
    connectionId: "",
    bech32prefix: "",
    hostDenom: "",
    ibcDenom: "",
    creator: "",
    transferChannelId: "",
    unbondingFrequency: BigInt(0),
    minRedemptionRate: "",
    maxRedemptionRate: ""
  };
}
export const MsgRegisterHostZone = {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
  encode(message: MsgRegisterHostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.bech32prefix !== "") {
      writer.uint32(98).string(message.bech32prefix);
    }
    if (message.hostDenom !== "") {
      writer.uint32(34).string(message.hostDenom);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(42).string(message.ibcDenom);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(82).string(message.transferChannelId);
    }
    if (message.unbondingFrequency !== BigInt(0)) {
      writer.uint32(88).uint64(message.unbondingFrequency);
    }
    if (message.minRedemptionRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.minRedemptionRate, 18).atomics);
    }
    if (message.maxRedemptionRate !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.maxRedemptionRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterHostZone {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      bech32prefix: isSet(object.bech32prefix) ? String(object.bech32prefix) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
      ibcDenom: isSet(object.ibcDenom) ? String(object.ibcDenom) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : "",
      unbondingFrequency: isSet(object.unbondingFrequency) ? BigInt(object.unbondingFrequency.toString()) : BigInt(0),
      minRedemptionRate: isSet(object.minRedemptionRate) ? String(object.minRedemptionRate) : "",
      maxRedemptionRate: isSet(object.maxRedemptionRate) ? String(object.maxRedemptionRate) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterHostZone>): MsgRegisterHostZone {
    const message = createBaseMsgRegisterHostZone();
    message.connectionId = object.connectionId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.creator = object.creator ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.unbondingFrequency = object.unbondingFrequency !== undefined && object.unbondingFrequency !== null ? BigInt(object.unbondingFrequency.toString()) : BigInt(0);
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterHostZoneAmino): MsgRegisterHostZone {
    return {
      connectionId: object.connection_id,
      bech32prefix: object.bech32prefix,
      hostDenom: object.host_denom,
      ibcDenom: object.ibc_denom,
      creator: object.creator,
      transferChannelId: object.transfer_channel_id,
      unbondingFrequency: BigInt(object.unbonding_frequency),
      minRedemptionRate: object.min_redemption_rate,
      maxRedemptionRate: object.max_redemption_rate
    };
  },
  toAmino(message: MsgRegisterHostZone): MsgRegisterHostZoneAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.bech32prefix = message.bech32prefix;
    obj.host_denom = message.hostDenom;
    obj.ibc_denom = message.ibcDenom;
    obj.creator = message.creator;
    obj.transfer_channel_id = message.transferChannelId;
    obj.unbonding_frequency = message.unbondingFrequency ? message.unbondingFrequency.toString() : undefined;
    obj.min_redemption_rate = message.minRedemptionRate;
    obj.max_redemption_rate = message.maxRedemptionRate;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostZoneAminoMsg): MsgRegisterHostZone {
    return MsgRegisterHostZone.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterHostZoneProtoMsg): MsgRegisterHostZone {
    return MsgRegisterHostZone.decode(message.value);
  },
  toProto(message: MsgRegisterHostZone): Uint8Array {
    return MsgRegisterHostZone.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostZone): MsgRegisterHostZoneProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
      value: MsgRegisterHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterHostZoneResponse(): MsgRegisterHostZoneResponse {
  return {};
}
export const MsgRegisterHostZoneResponse = {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse",
  encode(_: MsgRegisterHostZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterHostZoneResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse {
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  },
  fromAmino(_: MsgRegisterHostZoneResponseAmino): MsgRegisterHostZoneResponse {
    return {};
  },
  toAmino(_: MsgRegisterHostZoneResponse): MsgRegisterHostZoneResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostZoneResponseAminoMsg): MsgRegisterHostZoneResponse {
    return MsgRegisterHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterHostZoneResponseProtoMsg): MsgRegisterHostZoneResponse {
    return MsgRegisterHostZoneResponse.decode(message.value);
  },
  toProto(message: MsgRegisterHostZoneResponse): Uint8Array {
    return MsgRegisterHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostZoneResponse): MsgRegisterHostZoneResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse",
      value: MsgRegisterHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUndelegatedTokens(): MsgClaimUndelegatedTokens {
  return {
    creator: "",
    hostZoneId: "",
    epoch: BigInt(0),
    sender: ""
  };
}
export const MsgClaimUndelegatedTokens = {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
  encode(message: MsgClaimUndelegatedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(18).string(message.hostZoneId);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimUndelegatedTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens {
    const message = createBaseMsgClaimUndelegatedTokens();
    message.creator = object.creator ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgClaimUndelegatedTokensAmino): MsgClaimUndelegatedTokens {
    return {
      creator: object.creator,
      hostZoneId: object.host_zone_id,
      epoch: BigInt(object.epoch),
      sender: object.sender
    };
  },
  toAmino(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone_id = message.hostZoneId;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgClaimUndelegatedTokensAminoMsg): MsgClaimUndelegatedTokens {
    return MsgClaimUndelegatedTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUndelegatedTokensProtoMsg): MsgClaimUndelegatedTokens {
    return MsgClaimUndelegatedTokens.decode(message.value);
  },
  toProto(message: MsgClaimUndelegatedTokens): Uint8Array {
    return MsgClaimUndelegatedTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
      value: MsgClaimUndelegatedTokens.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUndelegatedTokensResponse(): MsgClaimUndelegatedTokensResponse {
  return {};
}
export const MsgClaimUndelegatedTokensResponse = {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse",
  encode(_: MsgClaimUndelegatedTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimUndelegatedTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse {
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  },
  fromAmino(_: MsgClaimUndelegatedTokensResponseAmino): MsgClaimUndelegatedTokensResponse {
    return {};
  },
  toAmino(_: MsgClaimUndelegatedTokensResponse): MsgClaimUndelegatedTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimUndelegatedTokensResponseAminoMsg): MsgClaimUndelegatedTokensResponse {
    return MsgClaimUndelegatedTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUndelegatedTokensResponseProtoMsg): MsgClaimUndelegatedTokensResponse {
    return MsgClaimUndelegatedTokensResponse.decode(message.value);
  },
  toProto(message: MsgClaimUndelegatedTokensResponse): Uint8Array {
    return MsgClaimUndelegatedTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUndelegatedTokensResponse): MsgClaimUndelegatedTokensResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse",
      value: MsgClaimUndelegatedTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRebalanceValidators(): MsgRebalanceValidators {
  return {
    creator: "",
    hostZone: "",
    numRebalance: BigInt(0)
  };
}
export const MsgRebalanceValidators = {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
  encode(message: MsgRebalanceValidators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.numRebalance !== BigInt(0)) {
      writer.uint32(24).uint64(message.numRebalance);
    }
    return writer;
  },
  fromJSON(object: any): MsgRebalanceValidators {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      numRebalance: isSet(object.numRebalance) ? BigInt(object.numRebalance.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgRebalanceValidators>): MsgRebalanceValidators {
    const message = createBaseMsgRebalanceValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.numRebalance = object.numRebalance !== undefined && object.numRebalance !== null ? BigInt(object.numRebalance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRebalanceValidatorsAmino): MsgRebalanceValidators {
    return {
      creator: object.creator,
      hostZone: object.host_zone,
      numRebalance: BigInt(object.num_rebalance)
    };
  },
  toAmino(message: MsgRebalanceValidators): MsgRebalanceValidatorsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone = message.hostZone;
    obj.num_rebalance = message.numRebalance ? message.numRebalance.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRebalanceValidatorsAminoMsg): MsgRebalanceValidators {
    return MsgRebalanceValidators.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRebalanceValidatorsProtoMsg): MsgRebalanceValidators {
    return MsgRebalanceValidators.decode(message.value);
  },
  toProto(message: MsgRebalanceValidators): Uint8Array {
    return MsgRebalanceValidators.encode(message).finish();
  },
  toProtoMsg(message: MsgRebalanceValidators): MsgRebalanceValidatorsProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
      value: MsgRebalanceValidators.encode(message).finish()
    };
  }
};
function createBaseMsgRebalanceValidatorsResponse(): MsgRebalanceValidatorsResponse {
  return {};
}
export const MsgRebalanceValidatorsResponse = {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse",
  encode(_: MsgRebalanceValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRebalanceValidatorsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse {
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
  },
  fromAmino(_: MsgRebalanceValidatorsResponseAmino): MsgRebalanceValidatorsResponse {
    return {};
  },
  toAmino(_: MsgRebalanceValidatorsResponse): MsgRebalanceValidatorsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRebalanceValidatorsResponseAminoMsg): MsgRebalanceValidatorsResponse {
    return MsgRebalanceValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRebalanceValidatorsResponseProtoMsg): MsgRebalanceValidatorsResponse {
    return MsgRebalanceValidatorsResponse.decode(message.value);
  },
  toProto(message: MsgRebalanceValidatorsResponse): Uint8Array {
    return MsgRebalanceValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRebalanceValidatorsResponse): MsgRebalanceValidatorsResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse",
      value: MsgRebalanceValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddValidators(): MsgAddValidators {
  return {
    creator: "",
    hostZone: "",
    validators: []
  };
}
export const MsgAddValidators = {
  typeUrl: "/stride.stakeibc.MsgAddValidators",
  encode(message: MsgAddValidators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddValidators {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddValidators>): MsgAddValidators {
    const message = createBaseMsgAddValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddValidatorsAmino): MsgAddValidators {
    return {
      creator: object.creator,
      hostZone: object.host_zone,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgAddValidators): MsgAddValidatorsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone = message.hostZone;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddValidatorsAminoMsg): MsgAddValidators {
    return MsgAddValidators.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddValidatorsProtoMsg): MsgAddValidators {
    return MsgAddValidators.decode(message.value);
  },
  toProto(message: MsgAddValidators): Uint8Array {
    return MsgAddValidators.encode(message).finish();
  },
  toProtoMsg(message: MsgAddValidators): MsgAddValidatorsProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgAddValidators",
      value: MsgAddValidators.encode(message).finish()
    };
  }
};
function createBaseMsgAddValidatorsResponse(): MsgAddValidatorsResponse {
  return {};
}
export const MsgAddValidatorsResponse = {
  typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse",
  encode(_: MsgAddValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddValidatorsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse {
    const message = createBaseMsgAddValidatorsResponse();
    return message;
  },
  fromAmino(_: MsgAddValidatorsResponseAmino): MsgAddValidatorsResponse {
    return {};
  },
  toAmino(_: MsgAddValidatorsResponse): MsgAddValidatorsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddValidatorsResponseAminoMsg): MsgAddValidatorsResponse {
    return MsgAddValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddValidatorsResponseProtoMsg): MsgAddValidatorsResponse {
    return MsgAddValidatorsResponse.decode(message.value);
  },
  toProto(message: MsgAddValidatorsResponse): Uint8Array {
    return MsgAddValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddValidatorsResponse): MsgAddValidatorsResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse",
      value: MsgAddValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeValidatorWeight(): MsgChangeValidatorWeight {
  return {
    creator: "",
    hostZone: "",
    valAddr: "",
    weight: BigInt(0)
  };
}
export const MsgChangeValidatorWeight = {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeight",
  encode(message: MsgChangeValidatorWeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(32).uint64(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeValidatorWeight {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgChangeValidatorWeight>): MsgChangeValidatorWeight {
    const message = createBaseMsgChangeValidatorWeight();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgChangeValidatorWeightAmino): MsgChangeValidatorWeight {
    return {
      creator: object.creator,
      hostZone: object.host_zone,
      valAddr: object.val_addr,
      weight: BigInt(object.weight)
    };
  },
  toAmino(message: MsgChangeValidatorWeight): MsgChangeValidatorWeightAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone = message.hostZone;
    obj.val_addr = message.valAddr;
    obj.weight = message.weight ? message.weight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChangeValidatorWeightAminoMsg): MsgChangeValidatorWeight {
    return MsgChangeValidatorWeight.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeValidatorWeightProtoMsg): MsgChangeValidatorWeight {
    return MsgChangeValidatorWeight.decode(message.value);
  },
  toProto(message: MsgChangeValidatorWeight): Uint8Array {
    return MsgChangeValidatorWeight.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeValidatorWeight): MsgChangeValidatorWeightProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgChangeValidatorWeight",
      value: MsgChangeValidatorWeight.encode(message).finish()
    };
  }
};
function createBaseMsgChangeValidatorWeightResponse(): MsgChangeValidatorWeightResponse {
  return {};
}
export const MsgChangeValidatorWeightResponse = {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightResponse",
  encode(_: MsgChangeValidatorWeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeValidatorWeightResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeValidatorWeightResponse>): MsgChangeValidatorWeightResponse {
    const message = createBaseMsgChangeValidatorWeightResponse();
    return message;
  },
  fromAmino(_: MsgChangeValidatorWeightResponseAmino): MsgChangeValidatorWeightResponse {
    return {};
  },
  toAmino(_: MsgChangeValidatorWeightResponse): MsgChangeValidatorWeightResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeValidatorWeightResponseAminoMsg): MsgChangeValidatorWeightResponse {
    return MsgChangeValidatorWeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeValidatorWeightResponseProtoMsg): MsgChangeValidatorWeightResponse {
    return MsgChangeValidatorWeightResponse.decode(message.value);
  },
  toProto(message: MsgChangeValidatorWeightResponse): Uint8Array {
    return MsgChangeValidatorWeightResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeValidatorWeightResponse): MsgChangeValidatorWeightResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightResponse",
      value: MsgChangeValidatorWeightResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteValidator(): MsgDeleteValidator {
  return {
    creator: "",
    hostZone: "",
    valAddr: ""
  };
}
export const MsgDeleteValidator = {
  typeUrl: "/stride.stakeibc.MsgDeleteValidator",
  encode(message: MsgDeleteValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteValidator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteValidator>): MsgDeleteValidator {
    const message = createBaseMsgDeleteValidator();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteValidatorAmino): MsgDeleteValidator {
    return {
      creator: object.creator,
      hostZone: object.host_zone,
      valAddr: object.val_addr
    };
  },
  toAmino(message: MsgDeleteValidator): MsgDeleteValidatorAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.host_zone = message.hostZone;
    obj.val_addr = message.valAddr;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteValidatorAminoMsg): MsgDeleteValidator {
    return MsgDeleteValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteValidatorProtoMsg): MsgDeleteValidator {
    return MsgDeleteValidator.decode(message.value);
  },
  toProto(message: MsgDeleteValidator): Uint8Array {
    return MsgDeleteValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteValidator): MsgDeleteValidatorProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteValidator",
      value: MsgDeleteValidator.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteValidatorResponse(): MsgDeleteValidatorResponse {
  return {};
}
export const MsgDeleteValidatorResponse = {
  typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse",
  encode(_: MsgDeleteValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteValidatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse {
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
  },
  fromAmino(_: MsgDeleteValidatorResponseAmino): MsgDeleteValidatorResponse {
    return {};
  },
  toAmino(_: MsgDeleteValidatorResponse): MsgDeleteValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteValidatorResponseAminoMsg): MsgDeleteValidatorResponse {
    return MsgDeleteValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteValidatorResponseProtoMsg): MsgDeleteValidatorResponse {
    return MsgDeleteValidatorResponse.decode(message.value);
  },
  toProto(message: MsgDeleteValidatorResponse): Uint8Array {
    return MsgDeleteValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteValidatorResponse): MsgDeleteValidatorResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse",
      value: MsgDeleteValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreInterchainAccount(): MsgRestoreInterchainAccount {
  return {
    creator: "",
    chainId: "",
    accountType: 0
  };
}
export const MsgRestoreInterchainAccount = {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
  encode(message: MsgRestoreInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.accountType !== 0) {
      writer.uint32(24).int32(message.accountType);
    }
    return writer;
  },
  fromJSON(object: any): MsgRestoreInterchainAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      accountType: isSet(object.accountType) ? iCAAccountTypeFromJSON(object.accountType) : -1
    };
  },
  fromPartial(object: Partial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount {
    const message = createBaseMsgRestoreInterchainAccount();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.accountType = object.accountType ?? 0;
    return message;
  },
  fromAmino(object: MsgRestoreInterchainAccountAmino): MsgRestoreInterchainAccount {
    return {
      creator: object.creator,
      chainId: object.chain_id,
      accountType: isSet(object.account_type) ? iCAAccountTypeFromJSON(object.account_type) : -1
    };
  },
  toAmino(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    obj.account_type = message.accountType;
    return obj;
  },
  fromAminoMsg(object: MsgRestoreInterchainAccountAminoMsg): MsgRestoreInterchainAccount {
    return MsgRestoreInterchainAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRestoreInterchainAccountProtoMsg): MsgRestoreInterchainAccount {
    return MsgRestoreInterchainAccount.decode(message.value);
  },
  toProto(message: MsgRestoreInterchainAccount): Uint8Array {
    return MsgRestoreInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
      value: MsgRestoreInterchainAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreInterchainAccountResponse(): MsgRestoreInterchainAccountResponse {
  return {};
}
export const MsgRestoreInterchainAccountResponse = {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse",
  encode(_: MsgRestoreInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRestoreInterchainAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse {
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
  },
  fromAmino(_: MsgRestoreInterchainAccountResponseAmino): MsgRestoreInterchainAccountResponse {
    return {};
  },
  toAmino(_: MsgRestoreInterchainAccountResponse): MsgRestoreInterchainAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRestoreInterchainAccountResponseAminoMsg): MsgRestoreInterchainAccountResponse {
    return MsgRestoreInterchainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRestoreInterchainAccountResponseProtoMsg): MsgRestoreInterchainAccountResponse {
    return MsgRestoreInterchainAccountResponse.decode(message.value);
  },
  toProto(message: MsgRestoreInterchainAccountResponse): Uint8Array {
    return MsgRestoreInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRestoreInterchainAccountResponse): MsgRestoreInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse",
      value: MsgRestoreInterchainAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateValidatorSharesExchRate(): MsgUpdateValidatorSharesExchRate {
  return {
    creator: "",
    chainId: "",
    valoper: ""
  };
}
export const MsgUpdateValidatorSharesExchRate = {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
  encode(message: MsgUpdateValidatorSharesExchRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateValidatorSharesExchRate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      valoper: isSet(object.valoper) ? String(object.valoper) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate {
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateValidatorSharesExchRateAmino): MsgUpdateValidatorSharesExchRate {
    return {
      creator: object.creator,
      chainId: object.chain_id,
      valoper: object.valoper
    };
  },
  toAmino(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chain_id = message.chainId;
    obj.valoper = message.valoper;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateValidatorSharesExchRateAminoMsg): MsgUpdateValidatorSharesExchRate {
    return MsgUpdateValidatorSharesExchRate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateValidatorSharesExchRateProtoMsg): MsgUpdateValidatorSharesExchRate {
    return MsgUpdateValidatorSharesExchRate.decode(message.value);
  },
  toProto(message: MsgUpdateValidatorSharesExchRate): Uint8Array {
    return MsgUpdateValidatorSharesExchRate.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
      value: MsgUpdateValidatorSharesExchRate.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateValidatorSharesExchRateResponse(): MsgUpdateValidatorSharesExchRateResponse {
  return {};
}
export const MsgUpdateValidatorSharesExchRateResponse = {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse",
  encode(_: MsgUpdateValidatorSharesExchRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateValidatorSharesExchRateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse {
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  },
  fromAmino(_: MsgUpdateValidatorSharesExchRateResponseAmino): MsgUpdateValidatorSharesExchRateResponse {
    return {};
  },
  toAmino(_: MsgUpdateValidatorSharesExchRateResponse): MsgUpdateValidatorSharesExchRateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateValidatorSharesExchRateResponseAminoMsg): MsgUpdateValidatorSharesExchRateResponse {
    return MsgUpdateValidatorSharesExchRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateValidatorSharesExchRateResponseProtoMsg): MsgUpdateValidatorSharesExchRateResponse {
    return MsgUpdateValidatorSharesExchRateResponse.decode(message.value);
  },
  toProto(message: MsgUpdateValidatorSharesExchRateResponse): Uint8Array {
    return MsgUpdateValidatorSharesExchRateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateValidatorSharesExchRateResponse): MsgUpdateValidatorSharesExchRateResponseProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse",
      value: MsgUpdateValidatorSharesExchRateResponse.encode(message).finish()
    };
  }
};