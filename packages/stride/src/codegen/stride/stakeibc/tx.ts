import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccountType, iCAAccountTypeFromJSON } from "./ica_account";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgLiquidStake {
  creator: string;
  amount: string;
  hostDenom: string;
}
export interface MsgLiquidStakeSDKType {
  creator: string;
  amount: string;
  host_denom: string;
}
export interface MsgLiquidStakeResponse {}
export interface MsgLiquidStakeResponseSDKType {}
export interface MsgClearBalance {
  creator: string;
  chainId: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceSDKType {
  creator: string;
  chain_id: string;
  amount: string;
  channel: string;
}
export interface MsgClearBalanceResponse {}
export interface MsgClearBalanceResponseSDKType {}
export interface MsgRedeemStake {
  creator: string;
  amount: string;
  hostZone: string;
  receiver: string;
}
export interface MsgRedeemStakeSDKType {
  creator: string;
  amount: string;
  host_zone: string;
  receiver: string;
}
export interface MsgRedeemStakeResponse {}
export interface MsgRedeemStakeResponseSDKType {}
/** next: 15 */
export interface MsgRegisterHostZone {
  connectionId: string;
  bech32prefix: string;
  hostDenom: string;
  ibcDenom: string;
  creator: string;
  transferChannelId: string;
  unbondingFrequency: Long;
  minRedemptionRate: string;
  maxRedemptionRate: string;
}
/** next: 15 */
export interface MsgRegisterHostZoneSDKType {
  connection_id: string;
  bech32prefix: string;
  host_denom: string;
  ibc_denom: string;
  creator: string;
  transfer_channel_id: string;
  unbonding_frequency: Long;
  min_redemption_rate: string;
  max_redemption_rate: string;
}
export interface MsgRegisterHostZoneResponse {}
export interface MsgRegisterHostZoneResponseSDKType {}
export interface MsgClaimUndelegatedTokens {
  creator: string;
  /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
  hostZoneId: string;
  epoch: Long;
  sender: string;
}
export interface MsgClaimUndelegatedTokensSDKType {
  creator: string;
  host_zone_id: string;
  epoch: Long;
  sender: string;
}
export interface MsgClaimUndelegatedTokensResponse {}
export interface MsgClaimUndelegatedTokensResponseSDKType {}
export interface MsgRebalanceValidators {
  creator: string;
  hostZone: string;
  numRebalance: Long;
}
export interface MsgRebalanceValidatorsSDKType {
  creator: string;
  host_zone: string;
  num_rebalance: Long;
}
export interface MsgRebalanceValidatorsResponse {}
export interface MsgRebalanceValidatorsResponseSDKType {}
export interface MsgAddValidators {
  creator: string;
  hostZone: string;
  validators: Validator[];
}
export interface MsgAddValidatorsSDKType {
  creator: string;
  host_zone: string;
  validators: ValidatorSDKType[];
}
export interface MsgAddValidatorsResponse {}
export interface MsgAddValidatorsResponseSDKType {}
export interface MsgChangeValidatorWeight {
  creator: string;
  hostZone: string;
  valAddr: string;
  weight: Long;
}
export interface MsgChangeValidatorWeightSDKType {
  creator: string;
  host_zone: string;
  val_addr: string;
  weight: Long;
}
export interface MsgChangeValidatorWeightResponse {}
export interface MsgChangeValidatorWeightResponseSDKType {}
export interface MsgDeleteValidator {
  creator: string;
  hostZone: string;
  valAddr: string;
}
export interface MsgDeleteValidatorSDKType {
  creator: string;
  host_zone: string;
  val_addr: string;
}
export interface MsgDeleteValidatorResponse {}
export interface MsgDeleteValidatorResponseSDKType {}
export interface MsgRestoreInterchainAccount {
  creator: string;
  chainId: string;
  accountType: ICAAccountType;
}
export interface MsgRestoreInterchainAccountSDKType {
  creator: string;
  chain_id: string;
  account_type: ICAAccountType;
}
export interface MsgRestoreInterchainAccountResponse {}
export interface MsgRestoreInterchainAccountResponseSDKType {}
export interface MsgUpdateValidatorSharesExchRate {
  creator: string;
  chainId: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateSDKType {
  creator: string;
  chain_id: string;
  valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {}
function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    creator: "",
    amount: "",
    hostDenom: ""
  };
}
export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}
export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgLiquidStakeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
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
  encode(message: MsgClearBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgClearBalanceResponse(): MsgClearBalanceResponse {
  return {};
}
export const MsgClearBalanceResponse = {
  encode(_: MsgClearBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClearBalanceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClearBalanceResponse>): MsgClearBalanceResponse {
    const message = createBaseMsgClearBalanceResponse();
    return message;
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
  encode(message: MsgRedeemStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRedeemStakeResponse(): MsgRedeemStakeResponse {
  return {};
}
export const MsgRedeemStakeResponse = {
  encode(_: MsgRedeemStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRedeemStakeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    return message;
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
    unbondingFrequency: Long.UZERO,
    minRedemptionRate: "",
    maxRedemptionRate: ""
  };
}
export const MsgRegisterHostZone = {
  encode(message: MsgRegisterHostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.unbondingFrequency.isZero()) {
      writer.uint32(88).uint64(message.unbondingFrequency);
    }
    if (message.minRedemptionRate !== "") {
      writer.uint32(106).string(message.minRedemptionRate);
    }
    if (message.maxRedemptionRate !== "") {
      writer.uint32(114).string(message.maxRedemptionRate);
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
      unbondingFrequency: isSet(object.unbondingFrequency) ? Long.fromValue(object.unbondingFrequency) : Long.UZERO,
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
    message.unbondingFrequency = object.unbondingFrequency !== undefined && object.unbondingFrequency !== null ? Long.fromValue(object.unbondingFrequency) : Long.UZERO;
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    return message;
  }
};
function createBaseMsgRegisterHostZoneResponse(): MsgRegisterHostZoneResponse {
  return {};
}
export const MsgRegisterHostZoneResponse = {
  encode(_: MsgRegisterHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRegisterHostZoneResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse {
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  }
};
function createBaseMsgClaimUndelegatedTokens(): MsgClaimUndelegatedTokens {
  return {
    creator: "",
    hostZoneId: "",
    epoch: Long.UZERO,
    sender: ""
  };
}
export const MsgClaimUndelegatedTokens = {
  encode(message: MsgClaimUndelegatedTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(18).string(message.hostZoneId);
    }
    if (!message.epoch.isZero()) {
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
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens {
    const message = createBaseMsgClaimUndelegatedTokens();
    message.creator = object.creator ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  }
};
function createBaseMsgClaimUndelegatedTokensResponse(): MsgClaimUndelegatedTokensResponse {
  return {};
}
export const MsgClaimUndelegatedTokensResponse = {
  encode(_: MsgClaimUndelegatedTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClaimUndelegatedTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse {
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  }
};
function createBaseMsgRebalanceValidators(): MsgRebalanceValidators {
  return {
    creator: "",
    hostZone: "",
    numRebalance: Long.UZERO
  };
}
export const MsgRebalanceValidators = {
  encode(message: MsgRebalanceValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (!message.numRebalance.isZero()) {
      writer.uint32(24).uint64(message.numRebalance);
    }
    return writer;
  },
  fromJSON(object: any): MsgRebalanceValidators {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      numRebalance: isSet(object.numRebalance) ? Long.fromValue(object.numRebalance) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgRebalanceValidators>): MsgRebalanceValidators {
    const message = createBaseMsgRebalanceValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.numRebalance = object.numRebalance !== undefined && object.numRebalance !== null ? Long.fromValue(object.numRebalance) : Long.UZERO;
    return message;
  }
};
function createBaseMsgRebalanceValidatorsResponse(): MsgRebalanceValidatorsResponse {
  return {};
}
export const MsgRebalanceValidatorsResponse = {
  encode(_: MsgRebalanceValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRebalanceValidatorsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse {
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
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
  encode(message: MsgAddValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgAddValidatorsResponse(): MsgAddValidatorsResponse {
  return {};
}
export const MsgAddValidatorsResponse = {
  encode(_: MsgAddValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddValidatorsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse {
    const message = createBaseMsgAddValidatorsResponse();
    return message;
  }
};
function createBaseMsgChangeValidatorWeight(): MsgChangeValidatorWeight {
  return {
    creator: "",
    hostZone: "",
    valAddr: "",
    weight: Long.UZERO
  };
}
export const MsgChangeValidatorWeight = {
  encode(message: MsgChangeValidatorWeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    if (!message.weight.isZero()) {
      writer.uint32(32).uint64(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeValidatorWeight {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      weight: isSet(object.weight) ? Long.fromValue(object.weight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgChangeValidatorWeight>): MsgChangeValidatorWeight {
    const message = createBaseMsgChangeValidatorWeight();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }
};
function createBaseMsgChangeValidatorWeightResponse(): MsgChangeValidatorWeightResponse {
  return {};
}
export const MsgChangeValidatorWeightResponse = {
  encode(_: MsgChangeValidatorWeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgChangeValidatorWeightResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeValidatorWeightResponse>): MsgChangeValidatorWeightResponse {
    const message = createBaseMsgChangeValidatorWeightResponse();
    return message;
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
  encode(message: MsgDeleteValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteValidatorResponse(): MsgDeleteValidatorResponse {
  return {};
}
export const MsgDeleteValidatorResponse = {
  encode(_: MsgDeleteValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteValidatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse {
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
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
  encode(message: MsgRestoreInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      accountType: isSet(object.accountType) ? iCAAccountTypeFromJSON(object.accountType) : 0
    };
  },
  fromPartial(object: Partial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount {
    const message = createBaseMsgRestoreInterchainAccount();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.accountType = object.accountType ?? 0;
    return message;
  }
};
function createBaseMsgRestoreInterchainAccountResponse(): MsgRestoreInterchainAccountResponse {
  return {};
}
export const MsgRestoreInterchainAccountResponse = {
  encode(_: MsgRestoreInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRestoreInterchainAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse {
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
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
  encode(message: MsgUpdateValidatorSharesExchRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateValidatorSharesExchRateResponse(): MsgUpdateValidatorSharesExchRateResponse {
  return {};
}
export const MsgUpdateValidatorSharesExchRateResponse = {
  encode(_: MsgUpdateValidatorSharesExchRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateValidatorSharesExchRateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse {
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  }
};