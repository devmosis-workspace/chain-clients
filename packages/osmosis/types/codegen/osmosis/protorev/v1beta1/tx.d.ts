import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hotRoutes: TokenPairArbRoutes[];
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
    admin: string;
    hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseSDKType {
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developerAccount: string;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
    admin: string;
    developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeights {
    /** admin is the account that is authorized to set the pool weights. */
    admin: string;
    /** pool_weights is the list of pool weights to set. */
    poolWeights?: PoolWeights;
}
/** MsgSetPoolWeights defines the Msg/SetPoolWeights request type. */
export interface MsgSetPoolWeightsSDKType {
    admin: string;
    pool_weights?: PoolWeightsSDKType;
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponse {
}
/** MsgSetPoolWeightsResponse defines the Msg/SetPoolWeights response type. */
export interface MsgSetPoolWeightsResponseSDKType {
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTx {
    /** admin is the account that is authorized to set the max pool points per tx. */
    admin: string;
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction.
     */
    maxPoolPointsPerTx: Long;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxSDKType {
    admin: string;
    max_pool_points_per_tx: Long;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseSDKType {
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlock {
    /**
     * admin is the account that is authorized to set the max pool points per
     * block.
     */
    admin: string;
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block.
     */
    maxPoolPointsPerBlock: Long;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockSDKType {
    admin: string;
    max_pool_points_per_block: Long;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseSDKType {
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenoms {
    /** admin is the account that is authorized to set the base denoms. */
    admin: string;
    /** base_denoms is the list of base denoms to set. */
    baseDenoms: BaseDenom[];
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsSDKType {
    admin: string;
    base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseSDKType {
}
export declare const MsgSetHotRoutes: {
    encode(message: MsgSetHotRoutes, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetHotRoutes;
    fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes;
};
export declare const MsgSetHotRoutesResponse: {
    encode(_: MsgSetHotRoutesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetHotRoutesResponse;
    fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse;
};
export declare const MsgSetDeveloperAccount: {
    encode(message: MsgSetDeveloperAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetDeveloperAccount;
    fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount;
};
export declare const MsgSetDeveloperAccountResponse: {
    encode(_: MsgSetDeveloperAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetDeveloperAccountResponse;
    fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse;
};
export declare const MsgSetPoolWeights: {
    encode(message: MsgSetPoolWeights, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetPoolWeights;
    fromPartial(object: Partial<MsgSetPoolWeights>): MsgSetPoolWeights;
};
export declare const MsgSetPoolWeightsResponse: {
    encode(_: MsgSetPoolWeightsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetPoolWeightsResponse;
    fromPartial(_: Partial<MsgSetPoolWeightsResponse>): MsgSetPoolWeightsResponse;
};
export declare const MsgSetMaxPoolPointsPerTx: {
    encode(message: MsgSetMaxPoolPointsPerTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetMaxPoolPointsPerTx;
    fromPartial(object: Partial<MsgSetMaxPoolPointsPerTx>): MsgSetMaxPoolPointsPerTx;
};
export declare const MsgSetMaxPoolPointsPerTxResponse: {
    encode(_: MsgSetMaxPoolPointsPerTxResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetMaxPoolPointsPerTxResponse;
    fromPartial(_: Partial<MsgSetMaxPoolPointsPerTxResponse>): MsgSetMaxPoolPointsPerTxResponse;
};
export declare const MsgSetMaxPoolPointsPerBlock: {
    encode(message: MsgSetMaxPoolPointsPerBlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetMaxPoolPointsPerBlock;
    fromPartial(object: Partial<MsgSetMaxPoolPointsPerBlock>): MsgSetMaxPoolPointsPerBlock;
};
export declare const MsgSetMaxPoolPointsPerBlockResponse: {
    encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetMaxPoolPointsPerBlockResponse;
    fromPartial(_: Partial<MsgSetMaxPoolPointsPerBlockResponse>): MsgSetMaxPoolPointsPerBlockResponse;
};
export declare const MsgSetBaseDenoms: {
    encode(message: MsgSetBaseDenoms, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetBaseDenoms;
    fromPartial(object: Partial<MsgSetBaseDenoms>): MsgSetBaseDenoms;
};
export declare const MsgSetBaseDenomsResponse: {
    encode(_: MsgSetBaseDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetBaseDenomsResponse;
    fromPartial(_: Partial<MsgSetBaseDenomsResponse>): MsgSetBaseDenomsResponse;
};
