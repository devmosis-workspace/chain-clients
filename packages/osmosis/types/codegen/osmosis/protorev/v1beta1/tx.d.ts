import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType, InfoByPoolType, InfoByPoolTypeAmino, InfoByPoolTypeSDKType, BaseDenom, BaseDenomAmino, BaseDenomSDKType } from "./protorev";
import { BinaryWriter } from "../../../binary";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hotRoutes: TokenPairArbRoutes[];
}
export interface MsgSetHotRoutesProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes";
    value: Uint8Array;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesAmino {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hot_routes: TokenPairArbRoutesAmino[];
}
export interface MsgSetHotRoutesAminoMsg {
    type: "osmosis/MsgSetHotRoutes";
    value: MsgSetHotRoutesAmino;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
    admin: string;
    hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {
}
export interface MsgSetHotRoutesResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
    value: Uint8Array;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseAmino {
}
export interface MsgSetHotRoutesResponseAminoMsg {
    type: "osmosis/protorev/set-hot-routes-response";
    value: MsgSetHotRoutesResponseAmino;
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
export interface MsgSetDeveloperAccountProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
    value: Uint8Array;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountAmino {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developer_account: string;
}
export interface MsgSetDeveloperAccountAminoMsg {
    type: "osmosis/MsgSetDeveloperAccount";
    value: MsgSetDeveloperAccountAmino;
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
export interface MsgSetDeveloperAccountResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
    value: Uint8Array;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseAmino {
}
export interface MsgSetDeveloperAccountResponseAminoMsg {
    type: "osmosis/protorev/set-developer-account-response";
    value: MsgSetDeveloperAccountResponseAmino;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {
}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolType {
    /** admin is the account that is authorized to set the pool weights. */
    admin: string;
    /** info_by_pool_type contains information about the pool types. */
    infoByPoolType: InfoByPoolType;
}
export interface MsgSetInfoByPoolTypeProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType";
    value: Uint8Array;
}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolTypeAmino {
    /** admin is the account that is authorized to set the pool weights. */
    admin: string;
    /** info_by_pool_type contains information about the pool types. */
    info_by_pool_type?: InfoByPoolTypeAmino;
}
export interface MsgSetInfoByPoolTypeAminoMsg {
    type: "osmosis/MsgSetInfoByPoolType";
    value: MsgSetInfoByPoolTypeAmino;
}
/** MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type. */
export interface MsgSetInfoByPoolTypeSDKType {
    admin: string;
    info_by_pool_type: InfoByPoolTypeSDKType;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponse {
}
export interface MsgSetInfoByPoolTypeResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse";
    value: Uint8Array;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponseAmino {
}
export interface MsgSetInfoByPoolTypeResponseAminoMsg {
    type: "osmosis/protorev/set-info-by-pool-type-response";
    value: MsgSetInfoByPoolTypeResponseAmino;
}
/** MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type. */
export interface MsgSetInfoByPoolTypeResponseSDKType {
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTx {
    /** admin is the account that is authorized to set the max pool points per tx. */
    admin: string;
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction.
     */
    maxPoolPointsPerTx: bigint;
}
export interface MsgSetMaxPoolPointsPerTxProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx";
    value: Uint8Array;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxAmino {
    /** admin is the account that is authorized to set the max pool points per tx. */
    admin: string;
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction.
     */
    max_pool_points_per_tx: string;
}
export interface MsgSetMaxPoolPointsPerTxAminoMsg {
    type: "osmosis/MsgSetMaxPoolPointsPerTx";
    value: MsgSetMaxPoolPointsPerTxAmino;
}
/** MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type. */
export interface MsgSetMaxPoolPointsPerTxSDKType {
    admin: string;
    max_pool_points_per_tx: bigint;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponse {
}
export interface MsgSetMaxPoolPointsPerTxResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse";
    value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 */
export interface MsgSetMaxPoolPointsPerTxResponseAmino {
}
export interface MsgSetMaxPoolPointsPerTxResponseAminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-tx-response";
    value: MsgSetMaxPoolPointsPerTxResponseAmino;
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
    maxPoolPointsPerBlock: bigint;
}
export interface MsgSetMaxPoolPointsPerBlockProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock";
    value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockAmino {
    /**
     * admin is the account that is authorized to set the max pool points per
     * block.
     */
    admin: string;
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block.
     */
    max_pool_points_per_block: string;
}
export interface MsgSetMaxPoolPointsPerBlockAminoMsg {
    type: "osmosis/MsgSetPoolWeights";
    value: MsgSetMaxPoolPointsPerBlockAmino;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 */
export interface MsgSetMaxPoolPointsPerBlockSDKType {
    admin: string;
    max_pool_points_per_block: bigint;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponse {
}
export interface MsgSetMaxPoolPointsPerBlockResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse";
    value: Uint8Array;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 */
export interface MsgSetMaxPoolPointsPerBlockResponseAmino {
}
export interface MsgSetMaxPoolPointsPerBlockResponseAminoMsg {
    type: "osmosis/protorev/set-max-pool-points-per-block-response";
    value: MsgSetMaxPoolPointsPerBlockResponseAmino;
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
export interface MsgSetBaseDenomsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenoms";
    value: Uint8Array;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsAmino {
    /** admin is the account that is authorized to set the base denoms. */
    admin: string;
    /** base_denoms is the list of base denoms to set. */
    base_denoms: BaseDenomAmino[];
}
export interface MsgSetBaseDenomsAminoMsg {
    type: "osmosis/MsgSetBaseDenoms";
    value: MsgSetBaseDenomsAmino;
}
/** MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type. */
export interface MsgSetBaseDenomsSDKType {
    admin: string;
    base_denoms: BaseDenomSDKType[];
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponse {
}
export interface MsgSetBaseDenomsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse";
    value: Uint8Array;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseAmino {
}
export interface MsgSetBaseDenomsResponseAminoMsg {
    type: "osmosis/protorev/set-base-denoms-response";
    value: MsgSetBaseDenomsResponseAmino;
}
/** MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type. */
export interface MsgSetBaseDenomsResponseSDKType {
}
export declare const MsgSetHotRoutes: {
    typeUrl: string;
    encode(message: MsgSetHotRoutes, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetHotRoutes;
    fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes;
    fromAmino(object: MsgSetHotRoutesAmino): MsgSetHotRoutes;
    toAmino(message: MsgSetHotRoutes): MsgSetHotRoutesAmino;
    fromAminoMsg(object: MsgSetHotRoutesAminoMsg): MsgSetHotRoutes;
    toAminoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesAminoMsg;
    fromProtoMsg(message: MsgSetHotRoutesProtoMsg): MsgSetHotRoutes;
    toProto(message: MsgSetHotRoutes): Uint8Array;
    toProtoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesProtoMsg;
};
export declare const MsgSetHotRoutesResponse: {
    typeUrl: string;
    encode(_: MsgSetHotRoutesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetHotRoutesResponse;
    fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse;
    fromAmino(_: MsgSetHotRoutesResponseAmino): MsgSetHotRoutesResponse;
    toAmino(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAmino;
    fromAminoMsg(object: MsgSetHotRoutesResponseAminoMsg): MsgSetHotRoutesResponse;
    toAminoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAminoMsg;
    fromProtoMsg(message: MsgSetHotRoutesResponseProtoMsg): MsgSetHotRoutesResponse;
    toProto(message: MsgSetHotRoutesResponse): Uint8Array;
    toProtoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseProtoMsg;
};
export declare const MsgSetDeveloperAccount: {
    typeUrl: string;
    encode(message: MsgSetDeveloperAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetDeveloperAccount;
    fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount;
    fromAmino(object: MsgSetDeveloperAccountAmino): MsgSetDeveloperAccount;
    toAmino(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAmino;
    fromAminoMsg(object: MsgSetDeveloperAccountAminoMsg): MsgSetDeveloperAccount;
    toAminoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAminoMsg;
    fromProtoMsg(message: MsgSetDeveloperAccountProtoMsg): MsgSetDeveloperAccount;
    toProto(message: MsgSetDeveloperAccount): Uint8Array;
    toProtoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountProtoMsg;
};
export declare const MsgSetDeveloperAccountResponse: {
    typeUrl: string;
    encode(_: MsgSetDeveloperAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetDeveloperAccountResponse;
    fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse;
    fromAmino(_: MsgSetDeveloperAccountResponseAmino): MsgSetDeveloperAccountResponse;
    toAmino(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAmino;
    fromAminoMsg(object: MsgSetDeveloperAccountResponseAminoMsg): MsgSetDeveloperAccountResponse;
    toAminoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAminoMsg;
    fromProtoMsg(message: MsgSetDeveloperAccountResponseProtoMsg): MsgSetDeveloperAccountResponse;
    toProto(message: MsgSetDeveloperAccountResponse): Uint8Array;
    toProtoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseProtoMsg;
};
export declare const MsgSetInfoByPoolType: {
    typeUrl: string;
    encode(message: MsgSetInfoByPoolType, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetInfoByPoolType;
    fromPartial(object: Partial<MsgSetInfoByPoolType>): MsgSetInfoByPoolType;
    fromAmino(object: MsgSetInfoByPoolTypeAmino): MsgSetInfoByPoolType;
    toAmino(message: MsgSetInfoByPoolType): MsgSetInfoByPoolTypeAmino;
    fromAminoMsg(object: MsgSetInfoByPoolTypeAminoMsg): MsgSetInfoByPoolType;
    toAminoMsg(message: MsgSetInfoByPoolType): MsgSetInfoByPoolTypeAminoMsg;
    fromProtoMsg(message: MsgSetInfoByPoolTypeProtoMsg): MsgSetInfoByPoolType;
    toProto(message: MsgSetInfoByPoolType): Uint8Array;
    toProtoMsg(message: MsgSetInfoByPoolType): MsgSetInfoByPoolTypeProtoMsg;
};
export declare const MsgSetInfoByPoolTypeResponse: {
    typeUrl: string;
    encode(_: MsgSetInfoByPoolTypeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetInfoByPoolTypeResponse;
    fromPartial(_: Partial<MsgSetInfoByPoolTypeResponse>): MsgSetInfoByPoolTypeResponse;
    fromAmino(_: MsgSetInfoByPoolTypeResponseAmino): MsgSetInfoByPoolTypeResponse;
    toAmino(_: MsgSetInfoByPoolTypeResponse): MsgSetInfoByPoolTypeResponseAmino;
    fromAminoMsg(object: MsgSetInfoByPoolTypeResponseAminoMsg): MsgSetInfoByPoolTypeResponse;
    toAminoMsg(message: MsgSetInfoByPoolTypeResponse): MsgSetInfoByPoolTypeResponseAminoMsg;
    fromProtoMsg(message: MsgSetInfoByPoolTypeResponseProtoMsg): MsgSetInfoByPoolTypeResponse;
    toProto(message: MsgSetInfoByPoolTypeResponse): Uint8Array;
    toProtoMsg(message: MsgSetInfoByPoolTypeResponse): MsgSetInfoByPoolTypeResponseProtoMsg;
};
export declare const MsgSetMaxPoolPointsPerTx: {
    typeUrl: string;
    encode(message: MsgSetMaxPoolPointsPerTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetMaxPoolPointsPerTx;
    fromPartial(object: Partial<MsgSetMaxPoolPointsPerTx>): MsgSetMaxPoolPointsPerTx;
    fromAmino(object: MsgSetMaxPoolPointsPerTxAmino): MsgSetMaxPoolPointsPerTx;
    toAmino(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAmino;
    fromAminoMsg(object: MsgSetMaxPoolPointsPerTxAminoMsg): MsgSetMaxPoolPointsPerTx;
    toAminoMsg(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAminoMsg;
    fromProtoMsg(message: MsgSetMaxPoolPointsPerTxProtoMsg): MsgSetMaxPoolPointsPerTx;
    toProto(message: MsgSetMaxPoolPointsPerTx): Uint8Array;
    toProtoMsg(message: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxProtoMsg;
};
export declare const MsgSetMaxPoolPointsPerTxResponse: {
    typeUrl: string;
    encode(_: MsgSetMaxPoolPointsPerTxResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetMaxPoolPointsPerTxResponse;
    fromPartial(_: Partial<MsgSetMaxPoolPointsPerTxResponse>): MsgSetMaxPoolPointsPerTxResponse;
    fromAmino(_: MsgSetMaxPoolPointsPerTxResponseAmino): MsgSetMaxPoolPointsPerTxResponse;
    toAmino(_: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseAmino;
    fromAminoMsg(object: MsgSetMaxPoolPointsPerTxResponseAminoMsg): MsgSetMaxPoolPointsPerTxResponse;
    toAminoMsg(message: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseAminoMsg;
    fromProtoMsg(message: MsgSetMaxPoolPointsPerTxResponseProtoMsg): MsgSetMaxPoolPointsPerTxResponse;
    toProto(message: MsgSetMaxPoolPointsPerTxResponse): Uint8Array;
    toProtoMsg(message: MsgSetMaxPoolPointsPerTxResponse): MsgSetMaxPoolPointsPerTxResponseProtoMsg;
};
export declare const MsgSetMaxPoolPointsPerBlock: {
    typeUrl: string;
    encode(message: MsgSetMaxPoolPointsPerBlock, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetMaxPoolPointsPerBlock;
    fromPartial(object: Partial<MsgSetMaxPoolPointsPerBlock>): MsgSetMaxPoolPointsPerBlock;
    fromAmino(object: MsgSetMaxPoolPointsPerBlockAmino): MsgSetMaxPoolPointsPerBlock;
    toAmino(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAmino;
    fromAminoMsg(object: MsgSetMaxPoolPointsPerBlockAminoMsg): MsgSetMaxPoolPointsPerBlock;
    toAminoMsg(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAminoMsg;
    fromProtoMsg(message: MsgSetMaxPoolPointsPerBlockProtoMsg): MsgSetMaxPoolPointsPerBlock;
    toProto(message: MsgSetMaxPoolPointsPerBlock): Uint8Array;
    toProtoMsg(message: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockProtoMsg;
};
export declare const MsgSetMaxPoolPointsPerBlockResponse: {
    typeUrl: string;
    encode(_: MsgSetMaxPoolPointsPerBlockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetMaxPoolPointsPerBlockResponse;
    fromPartial(_: Partial<MsgSetMaxPoolPointsPerBlockResponse>): MsgSetMaxPoolPointsPerBlockResponse;
    fromAmino(_: MsgSetMaxPoolPointsPerBlockResponseAmino): MsgSetMaxPoolPointsPerBlockResponse;
    toAmino(_: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseAmino;
    fromAminoMsg(object: MsgSetMaxPoolPointsPerBlockResponseAminoMsg): MsgSetMaxPoolPointsPerBlockResponse;
    toAminoMsg(message: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseAminoMsg;
    fromProtoMsg(message: MsgSetMaxPoolPointsPerBlockResponseProtoMsg): MsgSetMaxPoolPointsPerBlockResponse;
    toProto(message: MsgSetMaxPoolPointsPerBlockResponse): Uint8Array;
    toProtoMsg(message: MsgSetMaxPoolPointsPerBlockResponse): MsgSetMaxPoolPointsPerBlockResponseProtoMsg;
};
export declare const MsgSetBaseDenoms: {
    typeUrl: string;
    encode(message: MsgSetBaseDenoms, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetBaseDenoms;
    fromPartial(object: Partial<MsgSetBaseDenoms>): MsgSetBaseDenoms;
    fromAmino(object: MsgSetBaseDenomsAmino): MsgSetBaseDenoms;
    toAmino(message: MsgSetBaseDenoms): MsgSetBaseDenomsAmino;
    fromAminoMsg(object: MsgSetBaseDenomsAminoMsg): MsgSetBaseDenoms;
    toAminoMsg(message: MsgSetBaseDenoms): MsgSetBaseDenomsAminoMsg;
    fromProtoMsg(message: MsgSetBaseDenomsProtoMsg): MsgSetBaseDenoms;
    toProto(message: MsgSetBaseDenoms): Uint8Array;
    toProtoMsg(message: MsgSetBaseDenoms): MsgSetBaseDenomsProtoMsg;
};
export declare const MsgSetBaseDenomsResponse: {
    typeUrl: string;
    encode(_: MsgSetBaseDenomsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetBaseDenomsResponse;
    fromPartial(_: Partial<MsgSetBaseDenomsResponse>): MsgSetBaseDenomsResponse;
    fromAmino(_: MsgSetBaseDenomsResponseAmino): MsgSetBaseDenomsResponse;
    toAmino(_: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseAmino;
    fromAminoMsg(object: MsgSetBaseDenomsResponseAminoMsg): MsgSetBaseDenomsResponse;
    toAminoMsg(message: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseAminoMsg;
    fromProtoMsg(message: MsgSetBaseDenomsResponseProtoMsg): MsgSetBaseDenomsResponse;
    toProto(message: MsgSetBaseDenomsResponse): Uint8Array;
    toProtoMsg(message: MsgSetBaseDenomsResponse): MsgSetBaseDenomsResponseProtoMsg;
};
