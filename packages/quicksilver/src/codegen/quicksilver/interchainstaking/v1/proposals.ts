import { LsmCaps, LsmCapsAmino, LsmCapsSDKType } from "./interchainstaking";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface RegisterZoneProposal {
  title: string;
  description: string;
  connectionId: string;
  baseDenom: string;
  localDenom: string;
  accountPrefix: string;
  /** deprecated */
  multiSend: boolean;
  liquidityModule: boolean;
  messagesPerTx: bigint;
  returnToSender: boolean;
  depositsEnabled: boolean;
  unbondingEnabled: boolean;
  decimals: bigint;
  is118: boolean;
  dustThreshold: string;
}
export interface RegisterZoneProposalProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal";
  value: Uint8Array;
}
export interface RegisterZoneProposalAmino {
  title?: string;
  description?: string;
  connection_id?: string;
  base_denom?: string;
  local_denom?: string;
  account_prefix?: string;
  /** deprecated */
  multi_send?: boolean;
  liquidity_module?: boolean;
  messages_per_tx?: string;
  return_to_sender?: boolean;
  deposits_enabled?: boolean;
  unbonding_enabled?: boolean;
  decimals?: string;
  is_118?: boolean;
  dustThreshold?: string;
}
export interface RegisterZoneProposalAminoMsg {
  type: "/quicksilver.interchainstaking.v1.RegisterZoneProposal";
  value: RegisterZoneProposalAmino;
}
export interface RegisterZoneProposalSDKType {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  multi_send: boolean;
  liquidity_module: boolean;
  messages_per_tx: bigint;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: bigint;
  is_118: boolean;
  dustThreshold: string;
}
export interface RegisterZoneProposalWithDeposit {
  title: string;
  description: string;
  connectionId: string;
  baseDenom: string;
  localDenom: string;
  accountPrefix: string;
  multiSend: boolean;
  liquidityModule: boolean;
  deposit: string;
  messagesPerTx: bigint;
  returnToSender: boolean;
  depositsEnabled: boolean;
  unbondingEnabled: boolean;
  decimals: bigint;
  is118: boolean;
  dustThreshold: string;
}
export interface RegisterZoneProposalWithDepositProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit";
  value: Uint8Array;
}
export interface RegisterZoneProposalWithDepositAmino {
  title?: string;
  description?: string;
  connection_id?: string;
  base_denom?: string;
  local_denom?: string;
  account_prefix?: string;
  multi_send?: boolean;
  liquidity_module?: boolean;
  deposit?: string;
  messages_per_tx?: string;
  return_to_sender?: boolean;
  deposits_enabled?: boolean;
  unbonding_enabled?: boolean;
  decimals?: string;
  is_118?: boolean;
  dustThreshold?: string;
}
export interface RegisterZoneProposalWithDepositAminoMsg {
  type: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit";
  value: RegisterZoneProposalWithDepositAmino;
}
export interface RegisterZoneProposalWithDepositSDKType {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  multi_send: boolean;
  liquidity_module: boolean;
  deposit: string;
  messages_per_tx: bigint;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: bigint;
  is_118: boolean;
  dustThreshold: string;
}
export interface UpdateZoneProposal {
  title: string;
  description: string;
  chainId: string;
  changes: UpdateZoneValue[];
  dustThreshold: string;
}
export interface UpdateZoneProposalProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal";
  value: Uint8Array;
}
export interface UpdateZoneProposalAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  changes?: UpdateZoneValueAmino[];
  dustThreshold?: string;
}
export interface UpdateZoneProposalAminoMsg {
  type: "/quicksilver.interchainstaking.v1.UpdateZoneProposal";
  value: UpdateZoneProposalAmino;
}
export interface UpdateZoneProposalSDKType {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValueSDKType[];
  dustThreshold: string;
}
export interface UpdateZoneProposalWithDeposit {
  title: string;
  description: string;
  chainId: string;
  changes: UpdateZoneValue[];
  deposit: string;
  dustThreshold: string;
}
export interface UpdateZoneProposalWithDepositProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit";
  value: Uint8Array;
}
export interface UpdateZoneProposalWithDepositAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  changes?: UpdateZoneValueAmino[];
  deposit?: string;
  dustThreshold?: string;
}
export interface UpdateZoneProposalWithDepositAminoMsg {
  type: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit";
  value: UpdateZoneProposalWithDepositAmino;
}
export interface UpdateZoneProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValueSDKType[];
  deposit: string;
  dustThreshold: string;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValue {
  key: string;
  value: string;
}
export interface UpdateZoneValueProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue";
  value: Uint8Array;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValueAmino {
  key?: string;
  value?: string;
}
export interface UpdateZoneValueAminoMsg {
  type: "/quicksilver.interchainstaking.v1.UpdateZoneValue";
  value: UpdateZoneValueAmino;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValueSDKType {
  key: string;
  value: string;
}
export interface MsgGovReopenChannel {
  title: string;
  description: string;
  connectionId: string;
  portId: string;
  authority: string;
}
export interface MsgGovReopenChannelProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel";
  value: Uint8Array;
}
export interface MsgGovReopenChannelAmino {
  title?: string;
  description?: string;
  connection_id?: string;
  port_id?: string;
  authority?: string;
}
export interface MsgGovReopenChannelAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel";
  value: MsgGovReopenChannelAmino;
}
export interface MsgGovReopenChannelSDKType {
  title: string;
  description: string;
  connection_id: string;
  port_id: string;
  authority: string;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponse {}
export interface MsgGovReopenChannelResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse";
  value: Uint8Array;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseAmino {}
export interface MsgGovReopenChannelResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse";
  value: MsgGovReopenChannelResponseAmino;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseSDKType {}
export interface MsgGovCloseChannel {
  title: string;
  description: string;
  channelId: string;
  portId: string;
  authority: string;
}
export interface MsgGovCloseChannelProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel";
  value: Uint8Array;
}
export interface MsgGovCloseChannelAmino {
  title?: string;
  description?: string;
  channel_id?: string;
  port_id?: string;
  authority?: string;
}
export interface MsgGovCloseChannelAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel";
  value: MsgGovCloseChannelAmino;
}
export interface MsgGovCloseChannelSDKType {
  title: string;
  description: string;
  channel_id: string;
  port_id: string;
  authority: string;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponse {}
export interface MsgGovCloseChannelResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse";
  value: Uint8Array;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseAmino {}
export interface MsgGovCloseChannelResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse";
  value: MsgGovCloseChannelResponseAmino;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseSDKType {}
export interface MsgGovSetLsmCaps {
  title: string;
  description: string;
  chainId: string;
  caps?: LsmCaps;
  authority: string;
}
export interface MsgGovSetLsmCapsProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps";
  value: Uint8Array;
}
export interface MsgGovSetLsmCapsAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  caps?: LsmCapsAmino;
  authority?: string;
}
export interface MsgGovSetLsmCapsAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps";
  value: MsgGovSetLsmCapsAmino;
}
export interface MsgGovSetLsmCapsSDKType {
  title: string;
  description: string;
  chain_id: string;
  caps?: LsmCapsSDKType;
  authority: string;
}
export interface MsgGovSetLsmCapsResponse {}
export interface MsgGovSetLsmCapsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse";
  value: Uint8Array;
}
export interface MsgGovSetLsmCapsResponseAmino {}
export interface MsgGovSetLsmCapsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse";
  value: MsgGovSetLsmCapsResponseAmino;
}
export interface MsgGovSetLsmCapsResponseSDKType {}
export interface MsgGovAddValidatorDenyList {
  title: string;
  description: string;
  chainId: string;
  operatorAddress: string;
  authority: string;
}
export interface MsgGovAddValidatorDenyListProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList";
  value: Uint8Array;
}
export interface MsgGovAddValidatorDenyListAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  operator_address?: string;
  authority?: string;
}
export interface MsgGovAddValidatorDenyListAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList";
  value: MsgGovAddValidatorDenyListAmino;
}
export interface MsgGovAddValidatorDenyListSDKType {
  title: string;
  description: string;
  chain_id: string;
  operator_address: string;
  authority: string;
}
export interface MsgGovAddValidatorDenyListResponse {}
export interface MsgGovAddValidatorDenyListResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyListResponse";
  value: Uint8Array;
}
export interface MsgGovAddValidatorDenyListResponseAmino {}
export interface MsgGovAddValidatorDenyListResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyListResponse";
  value: MsgGovAddValidatorDenyListResponseAmino;
}
export interface MsgGovAddValidatorDenyListResponseSDKType {}
export interface MsgGovRemoveValidatorDenyList {
  title: string;
  description: string;
  chainId: string;
  operatorAddress: string;
  authority: string;
}
export interface MsgGovRemoveValidatorDenyListProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList";
  value: Uint8Array;
}
export interface MsgGovRemoveValidatorDenyListAmino {
  title?: string;
  description?: string;
  chain_id?: string;
  operator_address?: string;
  authority?: string;
}
export interface MsgGovRemoveValidatorDenyListAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList";
  value: MsgGovRemoveValidatorDenyListAmino;
}
export interface MsgGovRemoveValidatorDenyListSDKType {
  title: string;
  description: string;
  chain_id: string;
  operator_address: string;
  authority: string;
}
export interface MsgGovRemoveValidatorDenyListResponse {}
export interface MsgGovRemoveValidatorDenyListResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyListResponse";
  value: Uint8Array;
}
export interface MsgGovRemoveValidatorDenyListResponseAmino {}
export interface MsgGovRemoveValidatorDenyListResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyListResponse";
  value: MsgGovRemoveValidatorDenyListResponseAmino;
}
export interface MsgGovRemoveValidatorDenyListResponseSDKType {}
function createBaseRegisterZoneProposal(): RegisterZoneProposal {
  return {
    title: "",
    description: "",
    connectionId: "",
    baseDenom: "",
    localDenom: "",
    accountPrefix: "",
    multiSend: false,
    liquidityModule: false,
    messagesPerTx: BigInt(0),
    returnToSender: false,
    depositsEnabled: false,
    unbondingEnabled: false,
    decimals: BigInt(0),
    is118: false,
    dustThreshold: ""
  };
}
export const RegisterZoneProposal = {
  typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal",
  encode(message: RegisterZoneProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    if (message.localDenom !== "") {
      writer.uint32(42).string(message.localDenom);
    }
    if (message.accountPrefix !== "") {
      writer.uint32(50).string(message.accountPrefix);
    }
    if (message.multiSend === true) {
      writer.uint32(56).bool(message.multiSend);
    }
    if (message.liquidityModule === true) {
      writer.uint32(64).bool(message.liquidityModule);
    }
    if (message.messagesPerTx !== BigInt(0)) {
      writer.uint32(72).int64(message.messagesPerTx);
    }
    if (message.returnToSender === true) {
      writer.uint32(80).bool(message.returnToSender);
    }
    if (message.depositsEnabled === true) {
      writer.uint32(88).bool(message.depositsEnabled);
    }
    if (message.unbondingEnabled === true) {
      writer.uint32(96).bool(message.unbondingEnabled);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(104).int64(message.decimals);
    }
    if (message.is118 === true) {
      writer.uint32(112).bool(message.is118);
    }
    if (message.dustThreshold !== "") {
      writer.uint32(122).string(message.dustThreshold);
    }
    return writer;
  },
  fromJSON(object: any): RegisterZoneProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      localDenom: isSet(object.localDenom) ? String(object.localDenom) : "",
      accountPrefix: isSet(object.accountPrefix) ? String(object.accountPrefix) : "",
      multiSend: isSet(object.multiSend) ? Boolean(object.multiSend) : false,
      liquidityModule: isSet(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
      messagesPerTx: isSet(object.messagesPerTx) ? BigInt(object.messagesPerTx.toString()) : BigInt(0),
      returnToSender: isSet(object.returnToSender) ? Boolean(object.returnToSender) : false,
      depositsEnabled: isSet(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
      unbondingEnabled: isSet(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0),
      is118: isSet(object.is118) ? Boolean(object.is118) : false,
      dustThreshold: isSet(object.dustThreshold) ? String(object.dustThreshold) : ""
    };
  },
  fromPartial(object: Partial<RegisterZoneProposal>): RegisterZoneProposal {
    const message = createBaseRegisterZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connectionId = object.connectionId ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.localDenom = object.localDenom ?? "";
    message.accountPrefix = object.accountPrefix ?? "";
    message.multiSend = object.multiSend ?? false;
    message.liquidityModule = object.liquidityModule ?? false;
    message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? BigInt(object.messagesPerTx.toString()) : BigInt(0);
    message.returnToSender = object.returnToSender ?? false;
    message.depositsEnabled = object.depositsEnabled ?? false;
    message.unbondingEnabled = object.unbondingEnabled ?? false;
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.is118 = object.is118 ?? false;
    message.dustThreshold = object.dustThreshold ?? "";
    return message;
  },
  fromAmino(object: RegisterZoneProposalAmino): RegisterZoneProposal {
    const message = createBaseRegisterZoneProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.local_denom !== undefined && object.local_denom !== null) {
      message.localDenom = object.local_denom;
    }
    if (object.account_prefix !== undefined && object.account_prefix !== null) {
      message.accountPrefix = object.account_prefix;
    }
    if (object.multi_send !== undefined && object.multi_send !== null) {
      message.multiSend = object.multi_send;
    }
    if (object.liquidity_module !== undefined && object.liquidity_module !== null) {
      message.liquidityModule = object.liquidity_module;
    }
    if (object.messages_per_tx !== undefined && object.messages_per_tx !== null) {
      message.messagesPerTx = BigInt(object.messages_per_tx);
    }
    if (object.return_to_sender !== undefined && object.return_to_sender !== null) {
      message.returnToSender = object.return_to_sender;
    }
    if (object.deposits_enabled !== undefined && object.deposits_enabled !== null) {
      message.depositsEnabled = object.deposits_enabled;
    }
    if (object.unbonding_enabled !== undefined && object.unbonding_enabled !== null) {
      message.unbondingEnabled = object.unbonding_enabled;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    if (object.is_118 !== undefined && object.is_118 !== null) {
      message.is118 = object.is_118;
    }
    if (object.dustThreshold !== undefined && object.dustThreshold !== null) {
      message.dustThreshold = object.dustThreshold;
    }
    return message;
  },
  toAmino(message: RegisterZoneProposal): RegisterZoneProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.connection_id = message.connectionId;
    obj.base_denom = message.baseDenom;
    obj.local_denom = message.localDenom;
    obj.account_prefix = message.accountPrefix;
    obj.multi_send = message.multiSend;
    obj.liquidity_module = message.liquidityModule;
    obj.messages_per_tx = message.messagesPerTx ? message.messagesPerTx.toString() : undefined;
    obj.return_to_sender = message.returnToSender;
    obj.deposits_enabled = message.depositsEnabled;
    obj.unbonding_enabled = message.unbondingEnabled;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.is_118 = message.is118;
    obj.dustThreshold = message.dustThreshold;
    return obj;
  },
  fromAminoMsg(object: RegisterZoneProposalAminoMsg): RegisterZoneProposal {
    return RegisterZoneProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterZoneProposalProtoMsg): RegisterZoneProposal {
    return RegisterZoneProposal.decode(message.value);
  },
  toProto(message: RegisterZoneProposal): Uint8Array {
    return RegisterZoneProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterZoneProposal): RegisterZoneProposalProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal",
      value: RegisterZoneProposal.encode(message).finish()
    };
  }
};
function createBaseRegisterZoneProposalWithDeposit(): RegisterZoneProposalWithDeposit {
  return {
    title: "",
    description: "",
    connectionId: "",
    baseDenom: "",
    localDenom: "",
    accountPrefix: "",
    multiSend: false,
    liquidityModule: false,
    deposit: "",
    messagesPerTx: BigInt(0),
    returnToSender: false,
    depositsEnabled: false,
    unbondingEnabled: false,
    decimals: BigInt(0),
    is118: false,
    dustThreshold: ""
  };
}
export const RegisterZoneProposalWithDeposit = {
  typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit",
  encode(message: RegisterZoneProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    if (message.localDenom !== "") {
      writer.uint32(42).string(message.localDenom);
    }
    if (message.accountPrefix !== "") {
      writer.uint32(50).string(message.accountPrefix);
    }
    if (message.multiSend === true) {
      writer.uint32(56).bool(message.multiSend);
    }
    if (message.liquidityModule === true) {
      writer.uint32(64).bool(message.liquidityModule);
    }
    if (message.deposit !== "") {
      writer.uint32(74).string(message.deposit);
    }
    if (message.messagesPerTx !== BigInt(0)) {
      writer.uint32(80).int64(message.messagesPerTx);
    }
    if (message.returnToSender === true) {
      writer.uint32(88).bool(message.returnToSender);
    }
    if (message.depositsEnabled === true) {
      writer.uint32(96).bool(message.depositsEnabled);
    }
    if (message.unbondingEnabled === true) {
      writer.uint32(104).bool(message.unbondingEnabled);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(112).int64(message.decimals);
    }
    if (message.is118 === true) {
      writer.uint32(120).bool(message.is118);
    }
    if (message.dustThreshold !== "") {
      writer.uint32(130).string(message.dustThreshold);
    }
    return writer;
  },
  fromJSON(object: any): RegisterZoneProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      localDenom: isSet(object.localDenom) ? String(object.localDenom) : "",
      accountPrefix: isSet(object.accountPrefix) ? String(object.accountPrefix) : "",
      multiSend: isSet(object.multiSend) ? Boolean(object.multiSend) : false,
      liquidityModule: isSet(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
      messagesPerTx: isSet(object.messagesPerTx) ? BigInt(object.messagesPerTx.toString()) : BigInt(0),
      returnToSender: isSet(object.returnToSender) ? Boolean(object.returnToSender) : false,
      depositsEnabled: isSet(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
      unbondingEnabled: isSet(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0),
      is118: isSet(object.is118) ? Boolean(object.is118) : false,
      dustThreshold: isSet(object.dustThreshold) ? String(object.dustThreshold) : ""
    };
  },
  fromPartial(object: Partial<RegisterZoneProposalWithDeposit>): RegisterZoneProposalWithDeposit {
    const message = createBaseRegisterZoneProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connectionId = object.connectionId ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.localDenom = object.localDenom ?? "";
    message.accountPrefix = object.accountPrefix ?? "";
    message.multiSend = object.multiSend ?? false;
    message.liquidityModule = object.liquidityModule ?? false;
    message.deposit = object.deposit ?? "";
    message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? BigInt(object.messagesPerTx.toString()) : BigInt(0);
    message.returnToSender = object.returnToSender ?? false;
    message.depositsEnabled = object.depositsEnabled ?? false;
    message.unbondingEnabled = object.unbondingEnabled ?? false;
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.is118 = object.is118 ?? false;
    message.dustThreshold = object.dustThreshold ?? "";
    return message;
  },
  fromAmino(object: RegisterZoneProposalWithDepositAmino): RegisterZoneProposalWithDeposit {
    const message = createBaseRegisterZoneProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.local_denom !== undefined && object.local_denom !== null) {
      message.localDenom = object.local_denom;
    }
    if (object.account_prefix !== undefined && object.account_prefix !== null) {
      message.accountPrefix = object.account_prefix;
    }
    if (object.multi_send !== undefined && object.multi_send !== null) {
      message.multiSend = object.multi_send;
    }
    if (object.liquidity_module !== undefined && object.liquidity_module !== null) {
      message.liquidityModule = object.liquidity_module;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.messages_per_tx !== undefined && object.messages_per_tx !== null) {
      message.messagesPerTx = BigInt(object.messages_per_tx);
    }
    if (object.return_to_sender !== undefined && object.return_to_sender !== null) {
      message.returnToSender = object.return_to_sender;
    }
    if (object.deposits_enabled !== undefined && object.deposits_enabled !== null) {
      message.depositsEnabled = object.deposits_enabled;
    }
    if (object.unbonding_enabled !== undefined && object.unbonding_enabled !== null) {
      message.unbondingEnabled = object.unbonding_enabled;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    if (object.is_118 !== undefined && object.is_118 !== null) {
      message.is118 = object.is_118;
    }
    if (object.dustThreshold !== undefined && object.dustThreshold !== null) {
      message.dustThreshold = object.dustThreshold;
    }
    return message;
  },
  toAmino(message: RegisterZoneProposalWithDeposit): RegisterZoneProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.connection_id = message.connectionId;
    obj.base_denom = message.baseDenom;
    obj.local_denom = message.localDenom;
    obj.account_prefix = message.accountPrefix;
    obj.multi_send = message.multiSend;
    obj.liquidity_module = message.liquidityModule;
    obj.deposit = message.deposit;
    obj.messages_per_tx = message.messagesPerTx ? message.messagesPerTx.toString() : undefined;
    obj.return_to_sender = message.returnToSender;
    obj.deposits_enabled = message.depositsEnabled;
    obj.unbonding_enabled = message.unbondingEnabled;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.is_118 = message.is118;
    obj.dustThreshold = message.dustThreshold;
    return obj;
  },
  fromAminoMsg(object: RegisterZoneProposalWithDepositAminoMsg): RegisterZoneProposalWithDeposit {
    return RegisterZoneProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterZoneProposalWithDepositProtoMsg): RegisterZoneProposalWithDeposit {
    return RegisterZoneProposalWithDeposit.decode(message.value);
  },
  toProto(message: RegisterZoneProposalWithDeposit): Uint8Array {
    return RegisterZoneProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: RegisterZoneProposalWithDeposit): RegisterZoneProposalWithDepositProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit",
      value: RegisterZoneProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseUpdateZoneProposal(): UpdateZoneProposal {
  return {
    title: "",
    description: "",
    chainId: "",
    changes: [],
    dustThreshold: ""
  };
}
export const UpdateZoneProposal = {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal",
  encode(message: UpdateZoneProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    for (const v of message.changes) {
      UpdateZoneValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.dustThreshold !== "") {
      writer.uint32(42).string(message.dustThreshold);
    }
    return writer;
  },
  fromJSON(object: any): UpdateZoneProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => UpdateZoneValue.fromJSON(e)) : [],
      dustThreshold: isSet(object.dustThreshold) ? String(object.dustThreshold) : ""
    };
  },
  fromPartial(object: Partial<UpdateZoneProposal>): UpdateZoneProposal {
    const message = createBaseUpdateZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
    message.dustThreshold = object.dustThreshold ?? "";
    return message;
  },
  fromAmino(object: UpdateZoneProposalAmino): UpdateZoneProposal {
    const message = createBaseUpdateZoneProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    message.changes = object.changes?.map(e => UpdateZoneValue.fromAmino(e)) || [];
    if (object.dustThreshold !== undefined && object.dustThreshold !== null) {
      message.dustThreshold = object.dustThreshold;
    }
    return message;
  },
  toAmino(message: UpdateZoneProposal): UpdateZoneProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? UpdateZoneValue.toAmino(e) : undefined);
    } else {
      obj.changes = [];
    }
    obj.dustThreshold = message.dustThreshold;
    return obj;
  },
  fromAminoMsg(object: UpdateZoneProposalAminoMsg): UpdateZoneProposal {
    return UpdateZoneProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateZoneProposalProtoMsg): UpdateZoneProposal {
    return UpdateZoneProposal.decode(message.value);
  },
  toProto(message: UpdateZoneProposal): Uint8Array {
    return UpdateZoneProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateZoneProposal): UpdateZoneProposalProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal",
      value: UpdateZoneProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateZoneProposalWithDeposit(): UpdateZoneProposalWithDeposit {
  return {
    title: "",
    description: "",
    chainId: "",
    changes: [],
    deposit: "",
    dustThreshold: ""
  };
}
export const UpdateZoneProposalWithDeposit = {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit",
  encode(message: UpdateZoneProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    for (const v of message.changes) {
      UpdateZoneValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    if (message.dustThreshold !== "") {
      writer.uint32(50).string(message.dustThreshold);
    }
    return writer;
  },
  fromJSON(object: any): UpdateZoneProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => UpdateZoneValue.fromJSON(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
      dustThreshold: isSet(object.dustThreshold) ? String(object.dustThreshold) : ""
    };
  },
  fromPartial(object: Partial<UpdateZoneProposalWithDeposit>): UpdateZoneProposalWithDeposit {
    const message = createBaseUpdateZoneProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
    message.deposit = object.deposit ?? "";
    message.dustThreshold = object.dustThreshold ?? "";
    return message;
  },
  fromAmino(object: UpdateZoneProposalWithDepositAmino): UpdateZoneProposalWithDeposit {
    const message = createBaseUpdateZoneProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    message.changes = object.changes?.map(e => UpdateZoneValue.fromAmino(e)) || [];
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.dustThreshold !== undefined && object.dustThreshold !== null) {
      message.dustThreshold = object.dustThreshold;
    }
    return message;
  },
  toAmino(message: UpdateZoneProposalWithDeposit): UpdateZoneProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? UpdateZoneValue.toAmino(e) : undefined);
    } else {
      obj.changes = [];
    }
    obj.deposit = message.deposit;
    obj.dustThreshold = message.dustThreshold;
    return obj;
  },
  fromAminoMsg(object: UpdateZoneProposalWithDepositAminoMsg): UpdateZoneProposalWithDeposit {
    return UpdateZoneProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateZoneProposalWithDepositProtoMsg): UpdateZoneProposalWithDeposit {
    return UpdateZoneProposalWithDeposit.decode(message.value);
  },
  toProto(message: UpdateZoneProposalWithDeposit): Uint8Array {
    return UpdateZoneProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: UpdateZoneProposalWithDeposit): UpdateZoneProposalWithDepositProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit",
      value: UpdateZoneProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseUpdateZoneValue(): UpdateZoneValue {
  return {
    key: "",
    value: ""
  };
}
export const UpdateZoneValue = {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue",
  encode(message: UpdateZoneValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): UpdateZoneValue {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<UpdateZoneValue>): UpdateZoneValue {
    const message = createBaseUpdateZoneValue();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: UpdateZoneValueAmino): UpdateZoneValue {
    const message = createBaseUpdateZoneValue();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: UpdateZoneValue): UpdateZoneValueAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: UpdateZoneValueAminoMsg): UpdateZoneValue {
    return UpdateZoneValue.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateZoneValueProtoMsg): UpdateZoneValue {
    return UpdateZoneValue.decode(message.value);
  },
  toProto(message: UpdateZoneValue): Uint8Array {
    return UpdateZoneValue.encode(message).finish();
  },
  toProtoMsg(message: UpdateZoneValue): UpdateZoneValueProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue",
      value: UpdateZoneValue.encode(message).finish()
    };
  }
};
function createBaseMsgGovReopenChannel(): MsgGovReopenChannel {
  return {
    title: "",
    description: "",
    connectionId: "",
    portId: "",
    authority: ""
  };
}
export const MsgGovReopenChannel = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
  encode(message: MsgGovReopenChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(34).string(message.portId);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovReopenChannel {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  fromPartial(object: Partial<MsgGovReopenChannel>): MsgGovReopenChannel {
    const message = createBaseMsgGovReopenChannel();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovReopenChannelAmino): MsgGovReopenChannel {
    const message = createBaseMsgGovReopenChannel();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgGovReopenChannel): MsgGovReopenChannelAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.connection_id = message.connectionId;
    obj.port_id = message.portId;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovReopenChannelAminoMsg): MsgGovReopenChannel {
    return MsgGovReopenChannel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovReopenChannelProtoMsg): MsgGovReopenChannel {
    return MsgGovReopenChannel.decode(message.value);
  },
  toProto(message: MsgGovReopenChannel): Uint8Array {
    return MsgGovReopenChannel.encode(message).finish();
  },
  toProtoMsg(message: MsgGovReopenChannel): MsgGovReopenChannelProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
      value: MsgGovReopenChannel.encode(message).finish()
    };
  }
};
function createBaseMsgGovReopenChannelResponse(): MsgGovReopenChannelResponse {
  return {};
}
export const MsgGovReopenChannelResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse",
  encode(_: MsgGovReopenChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovReopenChannelResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovReopenChannelResponse>): MsgGovReopenChannelResponse {
    const message = createBaseMsgGovReopenChannelResponse();
    return message;
  },
  fromAmino(_: MsgGovReopenChannelResponseAmino): MsgGovReopenChannelResponse {
    const message = createBaseMsgGovReopenChannelResponse();
    return message;
  },
  toAmino(_: MsgGovReopenChannelResponse): MsgGovReopenChannelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovReopenChannelResponseAminoMsg): MsgGovReopenChannelResponse {
    return MsgGovReopenChannelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovReopenChannelResponseProtoMsg): MsgGovReopenChannelResponse {
    return MsgGovReopenChannelResponse.decode(message.value);
  },
  toProto(message: MsgGovReopenChannelResponse): Uint8Array {
    return MsgGovReopenChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovReopenChannelResponse): MsgGovReopenChannelResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse",
      value: MsgGovReopenChannelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovCloseChannel(): MsgGovCloseChannel {
  return {
    title: "",
    description: "",
    channelId: "",
    portId: "",
    authority: ""
  };
}
export const MsgGovCloseChannel = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
  encode(message: MsgGovCloseChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(34).string(message.portId);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovCloseChannel {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  fromPartial(object: Partial<MsgGovCloseChannel>): MsgGovCloseChannel {
    const message = createBaseMsgGovCloseChannel();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovCloseChannelAmino): MsgGovCloseChannel {
    const message = createBaseMsgGovCloseChannel();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgGovCloseChannel): MsgGovCloseChannelAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.channel_id = message.channelId;
    obj.port_id = message.portId;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovCloseChannelAminoMsg): MsgGovCloseChannel {
    return MsgGovCloseChannel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovCloseChannelProtoMsg): MsgGovCloseChannel {
    return MsgGovCloseChannel.decode(message.value);
  },
  toProto(message: MsgGovCloseChannel): Uint8Array {
    return MsgGovCloseChannel.encode(message).finish();
  },
  toProtoMsg(message: MsgGovCloseChannel): MsgGovCloseChannelProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
      value: MsgGovCloseChannel.encode(message).finish()
    };
  }
};
function createBaseMsgGovCloseChannelResponse(): MsgGovCloseChannelResponse {
  return {};
}
export const MsgGovCloseChannelResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse",
  encode(_: MsgGovCloseChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovCloseChannelResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovCloseChannelResponse>): MsgGovCloseChannelResponse {
    const message = createBaseMsgGovCloseChannelResponse();
    return message;
  },
  fromAmino(_: MsgGovCloseChannelResponseAmino): MsgGovCloseChannelResponse {
    const message = createBaseMsgGovCloseChannelResponse();
    return message;
  },
  toAmino(_: MsgGovCloseChannelResponse): MsgGovCloseChannelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovCloseChannelResponseAminoMsg): MsgGovCloseChannelResponse {
    return MsgGovCloseChannelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovCloseChannelResponseProtoMsg): MsgGovCloseChannelResponse {
    return MsgGovCloseChannelResponse.decode(message.value);
  },
  toProto(message: MsgGovCloseChannelResponse): Uint8Array {
    return MsgGovCloseChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovCloseChannelResponse): MsgGovCloseChannelResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse",
      value: MsgGovCloseChannelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetLsmCaps(): MsgGovSetLsmCaps {
  return {
    title: "",
    description: "",
    chainId: "",
    caps: undefined,
    authority: ""
  };
}
export const MsgGovSetLsmCaps = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
  encode(message: MsgGovSetLsmCaps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.caps !== undefined) {
      LsmCaps.encode(message.caps, writer.uint32(34).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovSetLsmCaps {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      caps: isSet(object.caps) ? LsmCaps.fromJSON(object.caps) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  fromPartial(object: Partial<MsgGovSetLsmCaps>): MsgGovSetLsmCaps {
    const message = createBaseMsgGovSetLsmCaps();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.caps = object.caps !== undefined && object.caps !== null ? LsmCaps.fromPartial(object.caps) : undefined;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovSetLsmCapsAmino): MsgGovSetLsmCaps {
    const message = createBaseMsgGovSetLsmCaps();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.caps !== undefined && object.caps !== null) {
      message.caps = LsmCaps.fromAmino(object.caps);
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgGovSetLsmCaps): MsgGovSetLsmCapsAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId;
    obj.caps = message.caps ? LsmCaps.toAmino(message.caps) : undefined;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovSetLsmCapsAminoMsg): MsgGovSetLsmCaps {
    return MsgGovSetLsmCaps.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetLsmCapsProtoMsg): MsgGovSetLsmCaps {
    return MsgGovSetLsmCaps.decode(message.value);
  },
  toProto(message: MsgGovSetLsmCaps): Uint8Array {
    return MsgGovSetLsmCaps.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetLsmCaps): MsgGovSetLsmCapsProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
      value: MsgGovSetLsmCaps.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetLsmCapsResponse(): MsgGovSetLsmCapsResponse {
  return {};
}
export const MsgGovSetLsmCapsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse",
  encode(_: MsgGovSetLsmCapsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovSetLsmCapsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovSetLsmCapsResponse>): MsgGovSetLsmCapsResponse {
    const message = createBaseMsgGovSetLsmCapsResponse();
    return message;
  },
  fromAmino(_: MsgGovSetLsmCapsResponseAmino): MsgGovSetLsmCapsResponse {
    const message = createBaseMsgGovSetLsmCapsResponse();
    return message;
  },
  toAmino(_: MsgGovSetLsmCapsResponse): MsgGovSetLsmCapsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetLsmCapsResponseAminoMsg): MsgGovSetLsmCapsResponse {
    return MsgGovSetLsmCapsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetLsmCapsResponseProtoMsg): MsgGovSetLsmCapsResponse {
    return MsgGovSetLsmCapsResponse.decode(message.value);
  },
  toProto(message: MsgGovSetLsmCapsResponse): Uint8Array {
    return MsgGovSetLsmCapsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetLsmCapsResponse): MsgGovSetLsmCapsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse",
      value: MsgGovSetLsmCapsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovAddValidatorDenyList(): MsgGovAddValidatorDenyList {
  return {
    title: "",
    description: "",
    chainId: "",
    operatorAddress: "",
    authority: ""
  };
}
export const MsgGovAddValidatorDenyList = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList",
  encode(message: MsgGovAddValidatorDenyList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovAddValidatorDenyList {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  fromPartial(object: Partial<MsgGovAddValidatorDenyList>): MsgGovAddValidatorDenyList {
    const message = createBaseMsgGovAddValidatorDenyList();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovAddValidatorDenyListAmino): MsgGovAddValidatorDenyList {
    const message = createBaseMsgGovAddValidatorDenyList();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgGovAddValidatorDenyList): MsgGovAddValidatorDenyListAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId;
    obj.operator_address = message.operatorAddress;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovAddValidatorDenyListAminoMsg): MsgGovAddValidatorDenyList {
    return MsgGovAddValidatorDenyList.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovAddValidatorDenyListProtoMsg): MsgGovAddValidatorDenyList {
    return MsgGovAddValidatorDenyList.decode(message.value);
  },
  toProto(message: MsgGovAddValidatorDenyList): Uint8Array {
    return MsgGovAddValidatorDenyList.encode(message).finish();
  },
  toProtoMsg(message: MsgGovAddValidatorDenyList): MsgGovAddValidatorDenyListProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList",
      value: MsgGovAddValidatorDenyList.encode(message).finish()
    };
  }
};
function createBaseMsgGovAddValidatorDenyListResponse(): MsgGovAddValidatorDenyListResponse {
  return {};
}
export const MsgGovAddValidatorDenyListResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyListResponse",
  encode(_: MsgGovAddValidatorDenyListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovAddValidatorDenyListResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovAddValidatorDenyListResponse>): MsgGovAddValidatorDenyListResponse {
    const message = createBaseMsgGovAddValidatorDenyListResponse();
    return message;
  },
  fromAmino(_: MsgGovAddValidatorDenyListResponseAmino): MsgGovAddValidatorDenyListResponse {
    const message = createBaseMsgGovAddValidatorDenyListResponse();
    return message;
  },
  toAmino(_: MsgGovAddValidatorDenyListResponse): MsgGovAddValidatorDenyListResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovAddValidatorDenyListResponseAminoMsg): MsgGovAddValidatorDenyListResponse {
    return MsgGovAddValidatorDenyListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovAddValidatorDenyListResponseProtoMsg): MsgGovAddValidatorDenyListResponse {
    return MsgGovAddValidatorDenyListResponse.decode(message.value);
  },
  toProto(message: MsgGovAddValidatorDenyListResponse): Uint8Array {
    return MsgGovAddValidatorDenyListResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovAddValidatorDenyListResponse): MsgGovAddValidatorDenyListResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyListResponse",
      value: MsgGovAddValidatorDenyListResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovRemoveValidatorDenyList(): MsgGovRemoveValidatorDenyList {
  return {
    title: "",
    description: "",
    chainId: "",
    operatorAddress: "",
    authority: ""
  };
}
export const MsgGovRemoveValidatorDenyList = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList",
  encode(message: MsgGovRemoveValidatorDenyList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(34).string(message.operatorAddress);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovRemoveValidatorDenyList {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  fromPartial(object: Partial<MsgGovRemoveValidatorDenyList>): MsgGovRemoveValidatorDenyList {
    const message = createBaseMsgGovRemoveValidatorDenyList();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovRemoveValidatorDenyListAmino): MsgGovRemoveValidatorDenyList {
    const message = createBaseMsgGovRemoveValidatorDenyList();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgGovRemoveValidatorDenyList): MsgGovRemoveValidatorDenyListAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chainId;
    obj.operator_address = message.operatorAddress;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovRemoveValidatorDenyListAminoMsg): MsgGovRemoveValidatorDenyList {
    return MsgGovRemoveValidatorDenyList.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovRemoveValidatorDenyListProtoMsg): MsgGovRemoveValidatorDenyList {
    return MsgGovRemoveValidatorDenyList.decode(message.value);
  },
  toProto(message: MsgGovRemoveValidatorDenyList): Uint8Array {
    return MsgGovRemoveValidatorDenyList.encode(message).finish();
  },
  toProtoMsg(message: MsgGovRemoveValidatorDenyList): MsgGovRemoveValidatorDenyListProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList",
      value: MsgGovRemoveValidatorDenyList.encode(message).finish()
    };
  }
};
function createBaseMsgGovRemoveValidatorDenyListResponse(): MsgGovRemoveValidatorDenyListResponse {
  return {};
}
export const MsgGovRemoveValidatorDenyListResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyListResponse",
  encode(_: MsgGovRemoveValidatorDenyListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovRemoveValidatorDenyListResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovRemoveValidatorDenyListResponse>): MsgGovRemoveValidatorDenyListResponse {
    const message = createBaseMsgGovRemoveValidatorDenyListResponse();
    return message;
  },
  fromAmino(_: MsgGovRemoveValidatorDenyListResponseAmino): MsgGovRemoveValidatorDenyListResponse {
    const message = createBaseMsgGovRemoveValidatorDenyListResponse();
    return message;
  },
  toAmino(_: MsgGovRemoveValidatorDenyListResponse): MsgGovRemoveValidatorDenyListResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovRemoveValidatorDenyListResponseAminoMsg): MsgGovRemoveValidatorDenyListResponse {
    return MsgGovRemoveValidatorDenyListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovRemoveValidatorDenyListResponseProtoMsg): MsgGovRemoveValidatorDenyListResponse {
    return MsgGovRemoveValidatorDenyListResponse.decode(message.value);
  },
  toProto(message: MsgGovRemoveValidatorDenyListResponse): Uint8Array {
    return MsgGovRemoveValidatorDenyListResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovRemoveValidatorDenyListResponse): MsgGovRemoveValidatorDenyListResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyListResponse",
      value: MsgGovRemoveValidatorDenyListResponse.encode(message).finish()
    };
  }
};