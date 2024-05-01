import { LsmCaps, LsmCapsAmino, LsmCapsSDKType } from "./interchainstaking";
import { BinaryWriter } from "../../../binary";
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
export interface MsgGovReopenChannelResponse {
}
export interface MsgGovReopenChannelResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse";
    value: Uint8Array;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseAmino {
}
export interface MsgGovReopenChannelResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse";
    value: MsgGovReopenChannelResponseAmino;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseSDKType {
}
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
export interface MsgGovCloseChannelResponse {
}
export interface MsgGovCloseChannelResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse";
    value: Uint8Array;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseAmino {
}
export interface MsgGovCloseChannelResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse";
    value: MsgGovCloseChannelResponseAmino;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseSDKType {
}
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
export interface MsgGovSetLsmCapsResponse {
}
export interface MsgGovSetLsmCapsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse";
    value: Uint8Array;
}
export interface MsgGovSetLsmCapsResponseAmino {
}
export interface MsgGovSetLsmCapsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse";
    value: MsgGovSetLsmCapsResponseAmino;
}
export interface MsgGovSetLsmCapsResponseSDKType {
}
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
export interface MsgGovAddValidatorDenyListResponse {
}
export interface MsgGovAddValidatorDenyListResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyListResponse";
    value: Uint8Array;
}
export interface MsgGovAddValidatorDenyListResponseAmino {
}
export interface MsgGovAddValidatorDenyListResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyListResponse";
    value: MsgGovAddValidatorDenyListResponseAmino;
}
export interface MsgGovAddValidatorDenyListResponseSDKType {
}
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
export interface MsgGovRemoveValidatorDenyListResponse {
}
export interface MsgGovRemoveValidatorDenyListResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyListResponse";
    value: Uint8Array;
}
export interface MsgGovRemoveValidatorDenyListResponseAmino {
}
export interface MsgGovRemoveValidatorDenyListResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyListResponse";
    value: MsgGovRemoveValidatorDenyListResponseAmino;
}
export interface MsgGovRemoveValidatorDenyListResponseSDKType {
}
export declare const RegisterZoneProposal: {
    typeUrl: string;
    encode(message: RegisterZoneProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterZoneProposal;
    fromPartial(object: Partial<RegisterZoneProposal>): RegisterZoneProposal;
    fromAmino(object: RegisterZoneProposalAmino): RegisterZoneProposal;
    toAmino(message: RegisterZoneProposal): RegisterZoneProposalAmino;
    fromAminoMsg(object: RegisterZoneProposalAminoMsg): RegisterZoneProposal;
    fromProtoMsg(message: RegisterZoneProposalProtoMsg): RegisterZoneProposal;
    toProto(message: RegisterZoneProposal): Uint8Array;
    toProtoMsg(message: RegisterZoneProposal): RegisterZoneProposalProtoMsg;
};
export declare const RegisterZoneProposalWithDeposit: {
    typeUrl: string;
    encode(message: RegisterZoneProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterZoneProposalWithDeposit;
    fromPartial(object: Partial<RegisterZoneProposalWithDeposit>): RegisterZoneProposalWithDeposit;
    fromAmino(object: RegisterZoneProposalWithDepositAmino): RegisterZoneProposalWithDeposit;
    toAmino(message: RegisterZoneProposalWithDeposit): RegisterZoneProposalWithDepositAmino;
    fromAminoMsg(object: RegisterZoneProposalWithDepositAminoMsg): RegisterZoneProposalWithDeposit;
    fromProtoMsg(message: RegisterZoneProposalWithDepositProtoMsg): RegisterZoneProposalWithDeposit;
    toProto(message: RegisterZoneProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RegisterZoneProposalWithDeposit): RegisterZoneProposalWithDepositProtoMsg;
};
export declare const UpdateZoneProposal: {
    typeUrl: string;
    encode(message: UpdateZoneProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateZoneProposal;
    fromPartial(object: Partial<UpdateZoneProposal>): UpdateZoneProposal;
    fromAmino(object: UpdateZoneProposalAmino): UpdateZoneProposal;
    toAmino(message: UpdateZoneProposal): UpdateZoneProposalAmino;
    fromAminoMsg(object: UpdateZoneProposalAminoMsg): UpdateZoneProposal;
    fromProtoMsg(message: UpdateZoneProposalProtoMsg): UpdateZoneProposal;
    toProto(message: UpdateZoneProposal): Uint8Array;
    toProtoMsg(message: UpdateZoneProposal): UpdateZoneProposalProtoMsg;
};
export declare const UpdateZoneProposalWithDeposit: {
    typeUrl: string;
    encode(message: UpdateZoneProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateZoneProposalWithDeposit;
    fromPartial(object: Partial<UpdateZoneProposalWithDeposit>): UpdateZoneProposalWithDeposit;
    fromAmino(object: UpdateZoneProposalWithDepositAmino): UpdateZoneProposalWithDeposit;
    toAmino(message: UpdateZoneProposalWithDeposit): UpdateZoneProposalWithDepositAmino;
    fromAminoMsg(object: UpdateZoneProposalWithDepositAminoMsg): UpdateZoneProposalWithDeposit;
    fromProtoMsg(message: UpdateZoneProposalWithDepositProtoMsg): UpdateZoneProposalWithDeposit;
    toProto(message: UpdateZoneProposalWithDeposit): Uint8Array;
    toProtoMsg(message: UpdateZoneProposalWithDeposit): UpdateZoneProposalWithDepositProtoMsg;
};
export declare const UpdateZoneValue: {
    typeUrl: string;
    encode(message: UpdateZoneValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateZoneValue;
    fromPartial(object: Partial<UpdateZoneValue>): UpdateZoneValue;
    fromAmino(object: UpdateZoneValueAmino): UpdateZoneValue;
    toAmino(message: UpdateZoneValue): UpdateZoneValueAmino;
    fromAminoMsg(object: UpdateZoneValueAminoMsg): UpdateZoneValue;
    fromProtoMsg(message: UpdateZoneValueProtoMsg): UpdateZoneValue;
    toProto(message: UpdateZoneValue): Uint8Array;
    toProtoMsg(message: UpdateZoneValue): UpdateZoneValueProtoMsg;
};
export declare const MsgGovReopenChannel: {
    typeUrl: string;
    encode(message: MsgGovReopenChannel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovReopenChannel;
    fromPartial(object: Partial<MsgGovReopenChannel>): MsgGovReopenChannel;
    fromAmino(object: MsgGovReopenChannelAmino): MsgGovReopenChannel;
    toAmino(message: MsgGovReopenChannel): MsgGovReopenChannelAmino;
    fromAminoMsg(object: MsgGovReopenChannelAminoMsg): MsgGovReopenChannel;
    fromProtoMsg(message: MsgGovReopenChannelProtoMsg): MsgGovReopenChannel;
    toProto(message: MsgGovReopenChannel): Uint8Array;
    toProtoMsg(message: MsgGovReopenChannel): MsgGovReopenChannelProtoMsg;
};
export declare const MsgGovReopenChannelResponse: {
    typeUrl: string;
    encode(_: MsgGovReopenChannelResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovReopenChannelResponse;
    fromPartial(_: Partial<MsgGovReopenChannelResponse>): MsgGovReopenChannelResponse;
    fromAmino(_: MsgGovReopenChannelResponseAmino): MsgGovReopenChannelResponse;
    toAmino(_: MsgGovReopenChannelResponse): MsgGovReopenChannelResponseAmino;
    fromAminoMsg(object: MsgGovReopenChannelResponseAminoMsg): MsgGovReopenChannelResponse;
    fromProtoMsg(message: MsgGovReopenChannelResponseProtoMsg): MsgGovReopenChannelResponse;
    toProto(message: MsgGovReopenChannelResponse): Uint8Array;
    toProtoMsg(message: MsgGovReopenChannelResponse): MsgGovReopenChannelResponseProtoMsg;
};
export declare const MsgGovCloseChannel: {
    typeUrl: string;
    encode(message: MsgGovCloseChannel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovCloseChannel;
    fromPartial(object: Partial<MsgGovCloseChannel>): MsgGovCloseChannel;
    fromAmino(object: MsgGovCloseChannelAmino): MsgGovCloseChannel;
    toAmino(message: MsgGovCloseChannel): MsgGovCloseChannelAmino;
    fromAminoMsg(object: MsgGovCloseChannelAminoMsg): MsgGovCloseChannel;
    fromProtoMsg(message: MsgGovCloseChannelProtoMsg): MsgGovCloseChannel;
    toProto(message: MsgGovCloseChannel): Uint8Array;
    toProtoMsg(message: MsgGovCloseChannel): MsgGovCloseChannelProtoMsg;
};
export declare const MsgGovCloseChannelResponse: {
    typeUrl: string;
    encode(_: MsgGovCloseChannelResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovCloseChannelResponse;
    fromPartial(_: Partial<MsgGovCloseChannelResponse>): MsgGovCloseChannelResponse;
    fromAmino(_: MsgGovCloseChannelResponseAmino): MsgGovCloseChannelResponse;
    toAmino(_: MsgGovCloseChannelResponse): MsgGovCloseChannelResponseAmino;
    fromAminoMsg(object: MsgGovCloseChannelResponseAminoMsg): MsgGovCloseChannelResponse;
    fromProtoMsg(message: MsgGovCloseChannelResponseProtoMsg): MsgGovCloseChannelResponse;
    toProto(message: MsgGovCloseChannelResponse): Uint8Array;
    toProtoMsg(message: MsgGovCloseChannelResponse): MsgGovCloseChannelResponseProtoMsg;
};
export declare const MsgGovSetLsmCaps: {
    typeUrl: string;
    encode(message: MsgGovSetLsmCaps, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovSetLsmCaps;
    fromPartial(object: Partial<MsgGovSetLsmCaps>): MsgGovSetLsmCaps;
    fromAmino(object: MsgGovSetLsmCapsAmino): MsgGovSetLsmCaps;
    toAmino(message: MsgGovSetLsmCaps): MsgGovSetLsmCapsAmino;
    fromAminoMsg(object: MsgGovSetLsmCapsAminoMsg): MsgGovSetLsmCaps;
    fromProtoMsg(message: MsgGovSetLsmCapsProtoMsg): MsgGovSetLsmCaps;
    toProto(message: MsgGovSetLsmCaps): Uint8Array;
    toProtoMsg(message: MsgGovSetLsmCaps): MsgGovSetLsmCapsProtoMsg;
};
export declare const MsgGovSetLsmCapsResponse: {
    typeUrl: string;
    encode(_: MsgGovSetLsmCapsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovSetLsmCapsResponse;
    fromPartial(_: Partial<MsgGovSetLsmCapsResponse>): MsgGovSetLsmCapsResponse;
    fromAmino(_: MsgGovSetLsmCapsResponseAmino): MsgGovSetLsmCapsResponse;
    toAmino(_: MsgGovSetLsmCapsResponse): MsgGovSetLsmCapsResponseAmino;
    fromAminoMsg(object: MsgGovSetLsmCapsResponseAminoMsg): MsgGovSetLsmCapsResponse;
    fromProtoMsg(message: MsgGovSetLsmCapsResponseProtoMsg): MsgGovSetLsmCapsResponse;
    toProto(message: MsgGovSetLsmCapsResponse): Uint8Array;
    toProtoMsg(message: MsgGovSetLsmCapsResponse): MsgGovSetLsmCapsResponseProtoMsg;
};
export declare const MsgGovAddValidatorDenyList: {
    typeUrl: string;
    encode(message: MsgGovAddValidatorDenyList, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovAddValidatorDenyList;
    fromPartial(object: Partial<MsgGovAddValidatorDenyList>): MsgGovAddValidatorDenyList;
    fromAmino(object: MsgGovAddValidatorDenyListAmino): MsgGovAddValidatorDenyList;
    toAmino(message: MsgGovAddValidatorDenyList): MsgGovAddValidatorDenyListAmino;
    fromAminoMsg(object: MsgGovAddValidatorDenyListAminoMsg): MsgGovAddValidatorDenyList;
    fromProtoMsg(message: MsgGovAddValidatorDenyListProtoMsg): MsgGovAddValidatorDenyList;
    toProto(message: MsgGovAddValidatorDenyList): Uint8Array;
    toProtoMsg(message: MsgGovAddValidatorDenyList): MsgGovAddValidatorDenyListProtoMsg;
};
export declare const MsgGovAddValidatorDenyListResponse: {
    typeUrl: string;
    encode(_: MsgGovAddValidatorDenyListResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovAddValidatorDenyListResponse;
    fromPartial(_: Partial<MsgGovAddValidatorDenyListResponse>): MsgGovAddValidatorDenyListResponse;
    fromAmino(_: MsgGovAddValidatorDenyListResponseAmino): MsgGovAddValidatorDenyListResponse;
    toAmino(_: MsgGovAddValidatorDenyListResponse): MsgGovAddValidatorDenyListResponseAmino;
    fromAminoMsg(object: MsgGovAddValidatorDenyListResponseAminoMsg): MsgGovAddValidatorDenyListResponse;
    fromProtoMsg(message: MsgGovAddValidatorDenyListResponseProtoMsg): MsgGovAddValidatorDenyListResponse;
    toProto(message: MsgGovAddValidatorDenyListResponse): Uint8Array;
    toProtoMsg(message: MsgGovAddValidatorDenyListResponse): MsgGovAddValidatorDenyListResponseProtoMsg;
};
export declare const MsgGovRemoveValidatorDenyList: {
    typeUrl: string;
    encode(message: MsgGovRemoveValidatorDenyList, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovRemoveValidatorDenyList;
    fromPartial(object: Partial<MsgGovRemoveValidatorDenyList>): MsgGovRemoveValidatorDenyList;
    fromAmino(object: MsgGovRemoveValidatorDenyListAmino): MsgGovRemoveValidatorDenyList;
    toAmino(message: MsgGovRemoveValidatorDenyList): MsgGovRemoveValidatorDenyListAmino;
    fromAminoMsg(object: MsgGovRemoveValidatorDenyListAminoMsg): MsgGovRemoveValidatorDenyList;
    fromProtoMsg(message: MsgGovRemoveValidatorDenyListProtoMsg): MsgGovRemoveValidatorDenyList;
    toProto(message: MsgGovRemoveValidatorDenyList): Uint8Array;
    toProtoMsg(message: MsgGovRemoveValidatorDenyList): MsgGovRemoveValidatorDenyListProtoMsg;
};
export declare const MsgGovRemoveValidatorDenyListResponse: {
    typeUrl: string;
    encode(_: MsgGovRemoveValidatorDenyListResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovRemoveValidatorDenyListResponse;
    fromPartial(_: Partial<MsgGovRemoveValidatorDenyListResponse>): MsgGovRemoveValidatorDenyListResponse;
    fromAmino(_: MsgGovRemoveValidatorDenyListResponseAmino): MsgGovRemoveValidatorDenyListResponse;
    toAmino(_: MsgGovRemoveValidatorDenyListResponse): MsgGovRemoveValidatorDenyListResponseAmino;
    fromAminoMsg(object: MsgGovRemoveValidatorDenyListResponseAminoMsg): MsgGovRemoveValidatorDenyListResponse;
    fromProtoMsg(message: MsgGovRemoveValidatorDenyListResponseProtoMsg): MsgGovRemoveValidatorDenyListResponse;
    toProto(message: MsgGovRemoveValidatorDenyListResponse): Uint8Array;
    toProtoMsg(message: MsgGovRemoveValidatorDenyListResponse): MsgGovRemoveValidatorDenyListResponseProtoMsg;
};
