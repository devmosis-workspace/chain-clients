import { Params, ParamsSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    nonces: Long[];
}
/** MsgRegisterRevenue defines a message that registers a Revenue */
export interface MsgRegisterRevenueSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
    nonces: Long[];
}
/** MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type */
export interface MsgRegisterRevenueResponse {
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
/** MsgCancelRevenue defines a message that cancels a registered Revenue */
export interface MsgCancelRevenueSDKType {
    contract_address: string;
    deployer_address: string;
}
/** MsgCancelRevenueResponse defines the MsgCancelRevenue response type */
export interface MsgCancelRevenueResponse {
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
    params?: Params;
}
/** MsgUpdateParams defines a Msg for updating the x/revenue module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterRevenue: {
    encode(message: MsgRegisterRevenue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterRevenue;
    fromPartial(object: Partial<MsgRegisterRevenue>): MsgRegisterRevenue;
};
export declare const MsgRegisterRevenueResponse: {
    encode(_: MsgRegisterRevenueResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterRevenueResponse;
    fromPartial(_: Partial<MsgRegisterRevenueResponse>): MsgRegisterRevenueResponse;
};
export declare const MsgUpdateRevenue: {
    encode(message: MsgUpdateRevenue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateRevenue;
    fromPartial(object: Partial<MsgUpdateRevenue>): MsgUpdateRevenue;
};
export declare const MsgUpdateRevenueResponse: {
    encode(_: MsgUpdateRevenueResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateRevenueResponse;
    fromPartial(_: Partial<MsgUpdateRevenueResponse>): MsgUpdateRevenueResponse;
};
export declare const MsgCancelRevenue: {
    encode(message: MsgCancelRevenue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelRevenue;
    fromPartial(object: Partial<MsgCancelRevenue>): MsgCancelRevenue;
};
export declare const MsgCancelRevenueResponse: {
    encode(_: MsgCancelRevenueResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelRevenueResponse;
    fromPartial(_: Partial<MsgCancelRevenueResponse>): MsgCancelRevenueResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
