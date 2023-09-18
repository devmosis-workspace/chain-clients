import { BinaryWriter } from "../../../binary";
/** spot authz messages */
export interface CreateSpotLimitOrderAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface CreateSpotLimitOrderAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz";
    value: Uint8Array;
}
/** spot authz messages */
export interface CreateSpotLimitOrderAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateSpotLimitOrderAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz";
    value: CreateSpotLimitOrderAuthzAmino;
}
/** spot authz messages */
export interface CreateSpotLimitOrderAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateSpotMarketOrderAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface CreateSpotMarketOrderAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz";
    value: Uint8Array;
}
export interface CreateSpotMarketOrderAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateSpotMarketOrderAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz";
    value: CreateSpotMarketOrderAuthzAmino;
}
export interface CreateSpotMarketOrderAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCreateSpotLimitOrdersAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCreateSpotLimitOrdersAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz";
    value: Uint8Array;
}
export interface BatchCreateSpotLimitOrdersAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCreateSpotLimitOrdersAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz";
    value: BatchCreateSpotLimitOrdersAuthzAmino;
}
export interface BatchCreateSpotLimitOrdersAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
export interface CancelSpotOrderAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface CancelSpotOrderAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz";
    value: Uint8Array;
}
export interface CancelSpotOrderAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface CancelSpotOrderAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.CancelSpotOrderAuthz";
    value: CancelSpotOrderAuthzAmino;
}
export interface CancelSpotOrderAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCancelSpotOrdersAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCancelSpotOrdersAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz";
    value: Uint8Array;
}
export interface BatchCancelSpotOrdersAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCancelSpotOrdersAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz";
    value: BatchCancelSpotOrdersAuthzAmino;
}
export interface BatchCancelSpotOrdersAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface CreateDerivativeLimitOrderAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz";
    value: Uint8Array;
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateDerivativeLimitOrderAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz";
    value: CreateDerivativeLimitOrderAuthzAmino;
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateDerivativeMarketOrderAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface CreateDerivativeMarketOrderAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz";
    value: Uint8Array;
}
export interface CreateDerivativeMarketOrderAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateDerivativeMarketOrderAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz";
    value: CreateDerivativeMarketOrderAuthzAmino;
}
export interface CreateDerivativeMarketOrderAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz";
    value: Uint8Array;
}
export interface BatchCreateDerivativeLimitOrdersAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz";
    value: BatchCreateDerivativeLimitOrdersAuthzAmino;
}
export interface BatchCreateDerivativeLimitOrdersAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
export interface CancelDerivativeOrderAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface CancelDerivativeOrderAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz";
    value: Uint8Array;
}
export interface CancelDerivativeOrderAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface CancelDerivativeOrderAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz";
    value: CancelDerivativeOrderAuthzAmino;
}
export interface CancelDerivativeOrderAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCancelDerivativeOrdersAuthz {
    $typeUrl?: string;
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCancelDerivativeOrdersAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz";
    value: Uint8Array;
}
export interface BatchCancelDerivativeOrdersAuthzAmino {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCancelDerivativeOrdersAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz";
    value: BatchCancelDerivativeOrdersAuthzAmino;
}
export interface BatchCancelDerivativeOrdersAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    market_ids: string[];
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthz {
    $typeUrl?: string;
    subaccountId: string;
    spotMarkets: string[];
    derivativeMarkets: string[];
}
export interface BatchUpdateOrdersAuthzProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz";
    value: Uint8Array;
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthzAmino {
    subaccount_id: string;
    spot_markets: string[];
    derivative_markets: string[];
}
export interface BatchUpdateOrdersAuthzAminoMsg {
    type: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz";
    value: BatchUpdateOrdersAuthzAmino;
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthzSDKType {
    $typeUrl?: string;
    subaccount_id: string;
    spot_markets: string[];
    derivative_markets: string[];
}
export declare const CreateSpotLimitOrderAuthz: {
    typeUrl: string;
    encode(message: CreateSpotLimitOrderAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateSpotLimitOrderAuthz;
    fromPartial(object: Partial<CreateSpotLimitOrderAuthz>): CreateSpotLimitOrderAuthz;
    fromAmino(object: CreateSpotLimitOrderAuthzAmino): CreateSpotLimitOrderAuthz;
    toAmino(message: CreateSpotLimitOrderAuthz): CreateSpotLimitOrderAuthzAmino;
    fromAminoMsg(object: CreateSpotLimitOrderAuthzAminoMsg): CreateSpotLimitOrderAuthz;
    fromProtoMsg(message: CreateSpotLimitOrderAuthzProtoMsg): CreateSpotLimitOrderAuthz;
    toProto(message: CreateSpotLimitOrderAuthz): Uint8Array;
    toProtoMsg(message: CreateSpotLimitOrderAuthz): CreateSpotLimitOrderAuthzProtoMsg;
};
export declare const CreateSpotMarketOrderAuthz: {
    typeUrl: string;
    encode(message: CreateSpotMarketOrderAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateSpotMarketOrderAuthz;
    fromPartial(object: Partial<CreateSpotMarketOrderAuthz>): CreateSpotMarketOrderAuthz;
    fromAmino(object: CreateSpotMarketOrderAuthzAmino): CreateSpotMarketOrderAuthz;
    toAmino(message: CreateSpotMarketOrderAuthz): CreateSpotMarketOrderAuthzAmino;
    fromAminoMsg(object: CreateSpotMarketOrderAuthzAminoMsg): CreateSpotMarketOrderAuthz;
    fromProtoMsg(message: CreateSpotMarketOrderAuthzProtoMsg): CreateSpotMarketOrderAuthz;
    toProto(message: CreateSpotMarketOrderAuthz): Uint8Array;
    toProtoMsg(message: CreateSpotMarketOrderAuthz): CreateSpotMarketOrderAuthzProtoMsg;
};
export declare const BatchCreateSpotLimitOrdersAuthz: {
    typeUrl: string;
    encode(message: BatchCreateSpotLimitOrdersAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchCreateSpotLimitOrdersAuthz;
    fromPartial(object: Partial<BatchCreateSpotLimitOrdersAuthz>): BatchCreateSpotLimitOrdersAuthz;
    fromAmino(object: BatchCreateSpotLimitOrdersAuthzAmino): BatchCreateSpotLimitOrdersAuthz;
    toAmino(message: BatchCreateSpotLimitOrdersAuthz): BatchCreateSpotLimitOrdersAuthzAmino;
    fromAminoMsg(object: BatchCreateSpotLimitOrdersAuthzAminoMsg): BatchCreateSpotLimitOrdersAuthz;
    fromProtoMsg(message: BatchCreateSpotLimitOrdersAuthzProtoMsg): BatchCreateSpotLimitOrdersAuthz;
    toProto(message: BatchCreateSpotLimitOrdersAuthz): Uint8Array;
    toProtoMsg(message: BatchCreateSpotLimitOrdersAuthz): BatchCreateSpotLimitOrdersAuthzProtoMsg;
};
export declare const CancelSpotOrderAuthz: {
    typeUrl: string;
    encode(message: CancelSpotOrderAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CancelSpotOrderAuthz;
    fromPartial(object: Partial<CancelSpotOrderAuthz>): CancelSpotOrderAuthz;
    fromAmino(object: CancelSpotOrderAuthzAmino): CancelSpotOrderAuthz;
    toAmino(message: CancelSpotOrderAuthz): CancelSpotOrderAuthzAmino;
    fromAminoMsg(object: CancelSpotOrderAuthzAminoMsg): CancelSpotOrderAuthz;
    fromProtoMsg(message: CancelSpotOrderAuthzProtoMsg): CancelSpotOrderAuthz;
    toProto(message: CancelSpotOrderAuthz): Uint8Array;
    toProtoMsg(message: CancelSpotOrderAuthz): CancelSpotOrderAuthzProtoMsg;
};
export declare const BatchCancelSpotOrdersAuthz: {
    typeUrl: string;
    encode(message: BatchCancelSpotOrdersAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchCancelSpotOrdersAuthz;
    fromPartial(object: Partial<BatchCancelSpotOrdersAuthz>): BatchCancelSpotOrdersAuthz;
    fromAmino(object: BatchCancelSpotOrdersAuthzAmino): BatchCancelSpotOrdersAuthz;
    toAmino(message: BatchCancelSpotOrdersAuthz): BatchCancelSpotOrdersAuthzAmino;
    fromAminoMsg(object: BatchCancelSpotOrdersAuthzAminoMsg): BatchCancelSpotOrdersAuthz;
    fromProtoMsg(message: BatchCancelSpotOrdersAuthzProtoMsg): BatchCancelSpotOrdersAuthz;
    toProto(message: BatchCancelSpotOrdersAuthz): Uint8Array;
    toProtoMsg(message: BatchCancelSpotOrdersAuthz): BatchCancelSpotOrdersAuthzProtoMsg;
};
export declare const CreateDerivativeLimitOrderAuthz: {
    typeUrl: string;
    encode(message: CreateDerivativeLimitOrderAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateDerivativeLimitOrderAuthz;
    fromPartial(object: Partial<CreateDerivativeLimitOrderAuthz>): CreateDerivativeLimitOrderAuthz;
    fromAmino(object: CreateDerivativeLimitOrderAuthzAmino): CreateDerivativeLimitOrderAuthz;
    toAmino(message: CreateDerivativeLimitOrderAuthz): CreateDerivativeLimitOrderAuthzAmino;
    fromAminoMsg(object: CreateDerivativeLimitOrderAuthzAminoMsg): CreateDerivativeLimitOrderAuthz;
    fromProtoMsg(message: CreateDerivativeLimitOrderAuthzProtoMsg): CreateDerivativeLimitOrderAuthz;
    toProto(message: CreateDerivativeLimitOrderAuthz): Uint8Array;
    toProtoMsg(message: CreateDerivativeLimitOrderAuthz): CreateDerivativeLimitOrderAuthzProtoMsg;
};
export declare const CreateDerivativeMarketOrderAuthz: {
    typeUrl: string;
    encode(message: CreateDerivativeMarketOrderAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateDerivativeMarketOrderAuthz;
    fromPartial(object: Partial<CreateDerivativeMarketOrderAuthz>): CreateDerivativeMarketOrderAuthz;
    fromAmino(object: CreateDerivativeMarketOrderAuthzAmino): CreateDerivativeMarketOrderAuthz;
    toAmino(message: CreateDerivativeMarketOrderAuthz): CreateDerivativeMarketOrderAuthzAmino;
    fromAminoMsg(object: CreateDerivativeMarketOrderAuthzAminoMsg): CreateDerivativeMarketOrderAuthz;
    fromProtoMsg(message: CreateDerivativeMarketOrderAuthzProtoMsg): CreateDerivativeMarketOrderAuthz;
    toProto(message: CreateDerivativeMarketOrderAuthz): Uint8Array;
    toProtoMsg(message: CreateDerivativeMarketOrderAuthz): CreateDerivativeMarketOrderAuthzProtoMsg;
};
export declare const BatchCreateDerivativeLimitOrdersAuthz: {
    typeUrl: string;
    encode(message: BatchCreateDerivativeLimitOrdersAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchCreateDerivativeLimitOrdersAuthz;
    fromPartial(object: Partial<BatchCreateDerivativeLimitOrdersAuthz>): BatchCreateDerivativeLimitOrdersAuthz;
    fromAmino(object: BatchCreateDerivativeLimitOrdersAuthzAmino): BatchCreateDerivativeLimitOrdersAuthz;
    toAmino(message: BatchCreateDerivativeLimitOrdersAuthz): BatchCreateDerivativeLimitOrdersAuthzAmino;
    fromAminoMsg(object: BatchCreateDerivativeLimitOrdersAuthzAminoMsg): BatchCreateDerivativeLimitOrdersAuthz;
    fromProtoMsg(message: BatchCreateDerivativeLimitOrdersAuthzProtoMsg): BatchCreateDerivativeLimitOrdersAuthz;
    toProto(message: BatchCreateDerivativeLimitOrdersAuthz): Uint8Array;
    toProtoMsg(message: BatchCreateDerivativeLimitOrdersAuthz): BatchCreateDerivativeLimitOrdersAuthzProtoMsg;
};
export declare const CancelDerivativeOrderAuthz: {
    typeUrl: string;
    encode(message: CancelDerivativeOrderAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CancelDerivativeOrderAuthz;
    fromPartial(object: Partial<CancelDerivativeOrderAuthz>): CancelDerivativeOrderAuthz;
    fromAmino(object: CancelDerivativeOrderAuthzAmino): CancelDerivativeOrderAuthz;
    toAmino(message: CancelDerivativeOrderAuthz): CancelDerivativeOrderAuthzAmino;
    fromAminoMsg(object: CancelDerivativeOrderAuthzAminoMsg): CancelDerivativeOrderAuthz;
    fromProtoMsg(message: CancelDerivativeOrderAuthzProtoMsg): CancelDerivativeOrderAuthz;
    toProto(message: CancelDerivativeOrderAuthz): Uint8Array;
    toProtoMsg(message: CancelDerivativeOrderAuthz): CancelDerivativeOrderAuthzProtoMsg;
};
export declare const BatchCancelDerivativeOrdersAuthz: {
    typeUrl: string;
    encode(message: BatchCancelDerivativeOrdersAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchCancelDerivativeOrdersAuthz;
    fromPartial(object: Partial<BatchCancelDerivativeOrdersAuthz>): BatchCancelDerivativeOrdersAuthz;
    fromAmino(object: BatchCancelDerivativeOrdersAuthzAmino): BatchCancelDerivativeOrdersAuthz;
    toAmino(message: BatchCancelDerivativeOrdersAuthz): BatchCancelDerivativeOrdersAuthzAmino;
    fromAminoMsg(object: BatchCancelDerivativeOrdersAuthzAminoMsg): BatchCancelDerivativeOrdersAuthz;
    fromProtoMsg(message: BatchCancelDerivativeOrdersAuthzProtoMsg): BatchCancelDerivativeOrdersAuthz;
    toProto(message: BatchCancelDerivativeOrdersAuthz): Uint8Array;
    toProtoMsg(message: BatchCancelDerivativeOrdersAuthz): BatchCancelDerivativeOrdersAuthzProtoMsg;
};
export declare const BatchUpdateOrdersAuthz: {
    typeUrl: string;
    encode(message: BatchUpdateOrdersAuthz, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchUpdateOrdersAuthz;
    fromPartial(object: Partial<BatchUpdateOrdersAuthz>): BatchUpdateOrdersAuthz;
    fromAmino(object: BatchUpdateOrdersAuthzAmino): BatchUpdateOrdersAuthz;
    toAmino(message: BatchUpdateOrdersAuthz): BatchUpdateOrdersAuthzAmino;
    fromAminoMsg(object: BatchUpdateOrdersAuthzAminoMsg): BatchUpdateOrdersAuthz;
    fromProtoMsg(message: BatchUpdateOrdersAuthzProtoMsg): BatchUpdateOrdersAuthz;
    toProto(message: BatchUpdateOrdersAuthz): Uint8Array;
    toProtoMsg(message: BatchUpdateOrdersAuthz): BatchUpdateOrdersAuthzProtoMsg;
};
