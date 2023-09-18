import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** MsgRegisterRevenue defines a message that registers a Revenue */
export interface MsgRegisterRevenue {
    /** contract_address in hex format */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployerAddress: string;
    /** withdrawer_address is the bech32 address of account receiving the transaction fees */
    withdrawerAddress: string;
    /**
     * nonces is an array of nonces from the address path, where the last nonce is the nonce
     * that determines the contract's address - it can be an EOA nonce or a
     * factory contract nonce
     */
    nonces: bigint[];
}
export interface MsgRegisterRevenueProtoMsg {
    typeUrl: "/evmos.revenue.v1.MsgRegisterRevenue";
    value: Uint8Array;
}
/** MsgRegisterRevenue defines a message that registers a Revenue */
export interface MsgRegisterRevenueAmino {
    /** contract_address in hex format */
    contract_address: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployer_address: string;
    /** withdrawer_address is the bech32 address of account receiving the transaction fees */
    withdrawer_address: string;
    /**
     * nonces is an array of nonces from the address path, where the last nonce is the nonce
     * that determines the contract's address - it can be an EOA nonce or a
     * factory contract nonce
     */
    nonces: string[];
}
export interface MsgRegisterRevenueAminoMsg {
    type: "/evmos.revenue.v1.MsgRegisterRevenue";
    value: MsgRegisterRevenueAmino;
}
/** MsgRegisterRevenue defines a message that registers a Revenue */
export interface MsgRegisterRevenueSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
    nonces: bigint[];
}
/** MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type */
export interface MsgRegisterRevenueResponse {
}
export interface MsgRegisterRevenueResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.MsgRegisterRevenueResponse";
    value: Uint8Array;
}
/** MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type */
export interface MsgRegisterRevenueResponseAmino {
}
export interface MsgRegisterRevenueResponseAminoMsg {
    type: "/evmos.revenue.v1.MsgRegisterRevenueResponse";
    value: MsgRegisterRevenueResponseAmino;
}
/** MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type */
export interface MsgRegisterRevenueResponseSDKType {
}
/**
 * MsgUpdateRevenue defines a message that updates the withdrawer address for a
 * registered Revenue
 */
export interface MsgUpdateRevenue {
    /** contract_address in hex format */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployerAddress: string;
    /** withdrawer_address is the bech32 address of account receiving the transaction fees */
    withdrawerAddress: string;
}
export interface MsgUpdateRevenueProtoMsg {
    typeUrl: "/evmos.revenue.v1.MsgUpdateRevenue";
    value: Uint8Array;
}
/**
 * MsgUpdateRevenue defines a message that updates the withdrawer address for a
 * registered Revenue
 */
export interface MsgUpdateRevenueAmino {
    /** contract_address in hex format */
    contract_address: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployer_address: string;
    /** withdrawer_address is the bech32 address of account receiving the transaction fees */
    withdrawer_address: string;
}
export interface MsgUpdateRevenueAminoMsg {
    type: "/evmos.revenue.v1.MsgUpdateRevenue";
    value: MsgUpdateRevenueAmino;
}
/**
 * MsgUpdateRevenue defines a message that updates the withdrawer address for a
 * registered Revenue
 */
export interface MsgUpdateRevenueSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
}
/** MsgUpdateRevenueResponse defines the MsgUpdateRevenue response type */
export interface MsgUpdateRevenueResponse {
}
export interface MsgUpdateRevenueResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.MsgUpdateRevenueResponse";
    value: Uint8Array;
}
/** MsgUpdateRevenueResponse defines the MsgUpdateRevenue response type */
export interface MsgUpdateRevenueResponseAmino {
}
export interface MsgUpdateRevenueResponseAminoMsg {
    type: "/evmos.revenue.v1.MsgUpdateRevenueResponse";
    value: MsgUpdateRevenueResponseAmino;
}
/** MsgUpdateRevenueResponse defines the MsgUpdateRevenue response type */
export interface MsgUpdateRevenueResponseSDKType {
}
/** MsgCancelRevenue defines a message that cancels a registered Revenue */
export interface MsgCancelRevenue {
    /** contract_address in hex format */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployerAddress: string;
}
export interface MsgCancelRevenueProtoMsg {
    typeUrl: "/evmos.revenue.v1.MsgCancelRevenue";
    value: Uint8Array;
}
/** MsgCancelRevenue defines a message that cancels a registered Revenue */
export interface MsgCancelRevenueAmino {
    /** contract_address in hex format */
    contract_address: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployer_address: string;
}
export interface MsgCancelRevenueAminoMsg {
    type: "/evmos.revenue.v1.MsgCancelRevenue";
    value: MsgCancelRevenueAmino;
}
/** MsgCancelRevenue defines a message that cancels a registered Revenue */
export interface MsgCancelRevenueSDKType {
    contract_address: string;
    deployer_address: string;
}
/** MsgCancelRevenueResponse defines the MsgCancelRevenue response type */
export interface MsgCancelRevenueResponse {
}
export interface MsgCancelRevenueResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.MsgCancelRevenueResponse";
    value: Uint8Array;
}
/** MsgCancelRevenueResponse defines the MsgCancelRevenue response type */
export interface MsgCancelRevenueResponseAmino {
}
export interface MsgCancelRevenueResponseAminoMsg {
    type: "/evmos.revenue.v1.MsgCancelRevenueResponse";
    value: MsgCancelRevenueResponseAmino;
}
/** MsgCancelRevenueResponse defines the MsgCancelRevenue response type */
export interface MsgCancelRevenueResponseSDKType {
}
/** MsgUpdateParams defines a Msg for updating the x/revenue module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/revenue parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/evmos.revenue.v1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines a Msg for updating the x/revenue module parameters. */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/revenue parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/evmos.revenue.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a Msg for updating the x/revenue module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/evmos.revenue.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/evmos.revenue.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterRevenue: {
    typeUrl: string;
    encode(message: MsgRegisterRevenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterRevenue;
    fromPartial(object: Partial<MsgRegisterRevenue>): MsgRegisterRevenue;
    fromAmino(object: MsgRegisterRevenueAmino): MsgRegisterRevenue;
    toAmino(message: MsgRegisterRevenue): MsgRegisterRevenueAmino;
    fromAminoMsg(object: MsgRegisterRevenueAminoMsg): MsgRegisterRevenue;
    fromProtoMsg(message: MsgRegisterRevenueProtoMsg): MsgRegisterRevenue;
    toProto(message: MsgRegisterRevenue): Uint8Array;
    toProtoMsg(message: MsgRegisterRevenue): MsgRegisterRevenueProtoMsg;
};
export declare const MsgRegisterRevenueResponse: {
    typeUrl: string;
    encode(_: MsgRegisterRevenueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterRevenueResponse;
    fromPartial(_: Partial<MsgRegisterRevenueResponse>): MsgRegisterRevenueResponse;
    fromAmino(_: MsgRegisterRevenueResponseAmino): MsgRegisterRevenueResponse;
    toAmino(_: MsgRegisterRevenueResponse): MsgRegisterRevenueResponseAmino;
    fromAminoMsg(object: MsgRegisterRevenueResponseAminoMsg): MsgRegisterRevenueResponse;
    fromProtoMsg(message: MsgRegisterRevenueResponseProtoMsg): MsgRegisterRevenueResponse;
    toProto(message: MsgRegisterRevenueResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterRevenueResponse): MsgRegisterRevenueResponseProtoMsg;
};
export declare const MsgUpdateRevenue: {
    typeUrl: string;
    encode(message: MsgUpdateRevenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRevenue;
    fromPartial(object: Partial<MsgUpdateRevenue>): MsgUpdateRevenue;
    fromAmino(object: MsgUpdateRevenueAmino): MsgUpdateRevenue;
    toAmino(message: MsgUpdateRevenue): MsgUpdateRevenueAmino;
    fromAminoMsg(object: MsgUpdateRevenueAminoMsg): MsgUpdateRevenue;
    fromProtoMsg(message: MsgUpdateRevenueProtoMsg): MsgUpdateRevenue;
    toProto(message: MsgUpdateRevenue): Uint8Array;
    toProtoMsg(message: MsgUpdateRevenue): MsgUpdateRevenueProtoMsg;
};
export declare const MsgUpdateRevenueResponse: {
    typeUrl: string;
    encode(_: MsgUpdateRevenueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateRevenueResponse;
    fromPartial(_: Partial<MsgUpdateRevenueResponse>): MsgUpdateRevenueResponse;
    fromAmino(_: MsgUpdateRevenueResponseAmino): MsgUpdateRevenueResponse;
    toAmino(_: MsgUpdateRevenueResponse): MsgUpdateRevenueResponseAmino;
    fromAminoMsg(object: MsgUpdateRevenueResponseAminoMsg): MsgUpdateRevenueResponse;
    fromProtoMsg(message: MsgUpdateRevenueResponseProtoMsg): MsgUpdateRevenueResponse;
    toProto(message: MsgUpdateRevenueResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateRevenueResponse): MsgUpdateRevenueResponseProtoMsg;
};
export declare const MsgCancelRevenue: {
    typeUrl: string;
    encode(message: MsgCancelRevenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelRevenue;
    fromPartial(object: Partial<MsgCancelRevenue>): MsgCancelRevenue;
    fromAmino(object: MsgCancelRevenueAmino): MsgCancelRevenue;
    toAmino(message: MsgCancelRevenue): MsgCancelRevenueAmino;
    fromAminoMsg(object: MsgCancelRevenueAminoMsg): MsgCancelRevenue;
    fromProtoMsg(message: MsgCancelRevenueProtoMsg): MsgCancelRevenue;
    toProto(message: MsgCancelRevenue): Uint8Array;
    toProtoMsg(message: MsgCancelRevenue): MsgCancelRevenueProtoMsg;
};
export declare const MsgCancelRevenueResponse: {
    typeUrl: string;
    encode(_: MsgCancelRevenueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelRevenueResponse;
    fromPartial(_: Partial<MsgCancelRevenueResponse>): MsgCancelRevenueResponse;
    fromAmino(_: MsgCancelRevenueResponseAmino): MsgCancelRevenueResponse;
    toAmino(_: MsgCancelRevenueResponse): MsgCancelRevenueResponseAmino;
    fromAminoMsg(object: MsgCancelRevenueResponseAminoMsg): MsgCancelRevenueResponse;
    fromProtoMsg(message: MsgCancelRevenueResponseProtoMsg): MsgCancelRevenueResponse;
    toProto(message: MsgCancelRevenueResponse): Uint8Array;
    toProtoMsg(message: MsgCancelRevenueResponse): MsgCancelRevenueResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
