import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseCreateSpotLimitOrderAuthz(): CreateSpotLimitOrderAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const CreateSpotLimitOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
  encode(message: CreateSpotLimitOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CreateSpotLimitOrderAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CreateSpotLimitOrderAuthz>): CreateSpotLimitOrderAuthz {
    const message = createBaseCreateSpotLimitOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateSpotLimitOrderAuthzAmino): CreateSpotLimitOrderAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: CreateSpotLimitOrderAuthz): CreateSpotLimitOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CreateSpotLimitOrderAuthzAminoMsg): CreateSpotLimitOrderAuthz {
    return CreateSpotLimitOrderAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateSpotLimitOrderAuthzProtoMsg): CreateSpotLimitOrderAuthz {
    return CreateSpotLimitOrderAuthz.decode(message.value);
  },
  toProto(message: CreateSpotLimitOrderAuthz): Uint8Array {
    return CreateSpotLimitOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CreateSpotLimitOrderAuthz): CreateSpotLimitOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
      value: CreateSpotLimitOrderAuthz.encode(message).finish()
    };
  }
};
function createBaseCreateSpotMarketOrderAuthz(): CreateSpotMarketOrderAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const CreateSpotMarketOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
  encode(message: CreateSpotMarketOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CreateSpotMarketOrderAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CreateSpotMarketOrderAuthz>): CreateSpotMarketOrderAuthz {
    const message = createBaseCreateSpotMarketOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateSpotMarketOrderAuthzAmino): CreateSpotMarketOrderAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: CreateSpotMarketOrderAuthz): CreateSpotMarketOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CreateSpotMarketOrderAuthzAminoMsg): CreateSpotMarketOrderAuthz {
    return CreateSpotMarketOrderAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateSpotMarketOrderAuthzProtoMsg): CreateSpotMarketOrderAuthz {
    return CreateSpotMarketOrderAuthz.decode(message.value);
  },
  toProto(message: CreateSpotMarketOrderAuthz): Uint8Array {
    return CreateSpotMarketOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CreateSpotMarketOrderAuthz): CreateSpotMarketOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
      value: CreateSpotMarketOrderAuthz.encode(message).finish()
    };
  }
};
function createBaseBatchCreateSpotLimitOrdersAuthz(): BatchCreateSpotLimitOrdersAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const BatchCreateSpotLimitOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
  encode(message: BatchCreateSpotLimitOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): BatchCreateSpotLimitOrdersAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<BatchCreateSpotLimitOrdersAuthz>): BatchCreateSpotLimitOrdersAuthz {
    const message = createBaseBatchCreateSpotLimitOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchCreateSpotLimitOrdersAuthzAmino): BatchCreateSpotLimitOrdersAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: BatchCreateSpotLimitOrdersAuthz): BatchCreateSpotLimitOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchCreateSpotLimitOrdersAuthzAminoMsg): BatchCreateSpotLimitOrdersAuthz {
    return BatchCreateSpotLimitOrdersAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchCreateSpotLimitOrdersAuthzProtoMsg): BatchCreateSpotLimitOrdersAuthz {
    return BatchCreateSpotLimitOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchCreateSpotLimitOrdersAuthz): Uint8Array {
    return BatchCreateSpotLimitOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchCreateSpotLimitOrdersAuthz): BatchCreateSpotLimitOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
      value: BatchCreateSpotLimitOrdersAuthz.encode(message).finish()
    };
  }
};
function createBaseCancelSpotOrderAuthz(): CancelSpotOrderAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const CancelSpotOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
  encode(message: CancelSpotOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CancelSpotOrderAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CancelSpotOrderAuthz>): CancelSpotOrderAuthz {
    const message = createBaseCancelSpotOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CancelSpotOrderAuthzAmino): CancelSpotOrderAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: CancelSpotOrderAuthz): CancelSpotOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CancelSpotOrderAuthzAminoMsg): CancelSpotOrderAuthz {
    return CancelSpotOrderAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: CancelSpotOrderAuthzProtoMsg): CancelSpotOrderAuthz {
    return CancelSpotOrderAuthz.decode(message.value);
  },
  toProto(message: CancelSpotOrderAuthz): Uint8Array {
    return CancelSpotOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CancelSpotOrderAuthz): CancelSpotOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
      value: CancelSpotOrderAuthz.encode(message).finish()
    };
  }
};
function createBaseBatchCancelSpotOrdersAuthz(): BatchCancelSpotOrdersAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const BatchCancelSpotOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
  encode(message: BatchCancelSpotOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): BatchCancelSpotOrdersAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<BatchCancelSpotOrdersAuthz>): BatchCancelSpotOrdersAuthz {
    const message = createBaseBatchCancelSpotOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchCancelSpotOrdersAuthzAmino): BatchCancelSpotOrdersAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: BatchCancelSpotOrdersAuthz): BatchCancelSpotOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchCancelSpotOrdersAuthzAminoMsg): BatchCancelSpotOrdersAuthz {
    return BatchCancelSpotOrdersAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchCancelSpotOrdersAuthzProtoMsg): BatchCancelSpotOrdersAuthz {
    return BatchCancelSpotOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchCancelSpotOrdersAuthz): Uint8Array {
    return BatchCancelSpotOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchCancelSpotOrdersAuthz): BatchCancelSpotOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
      value: BatchCancelSpotOrdersAuthz.encode(message).finish()
    };
  }
};
function createBaseCreateDerivativeLimitOrderAuthz(): CreateDerivativeLimitOrderAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const CreateDerivativeLimitOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
  encode(message: CreateDerivativeLimitOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CreateDerivativeLimitOrderAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CreateDerivativeLimitOrderAuthz>): CreateDerivativeLimitOrderAuthz {
    const message = createBaseCreateDerivativeLimitOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateDerivativeLimitOrderAuthzAmino): CreateDerivativeLimitOrderAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: CreateDerivativeLimitOrderAuthz): CreateDerivativeLimitOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CreateDerivativeLimitOrderAuthzAminoMsg): CreateDerivativeLimitOrderAuthz {
    return CreateDerivativeLimitOrderAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateDerivativeLimitOrderAuthzProtoMsg): CreateDerivativeLimitOrderAuthz {
    return CreateDerivativeLimitOrderAuthz.decode(message.value);
  },
  toProto(message: CreateDerivativeLimitOrderAuthz): Uint8Array {
    return CreateDerivativeLimitOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CreateDerivativeLimitOrderAuthz): CreateDerivativeLimitOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
      value: CreateDerivativeLimitOrderAuthz.encode(message).finish()
    };
  }
};
function createBaseCreateDerivativeMarketOrderAuthz(): CreateDerivativeMarketOrderAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const CreateDerivativeMarketOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
  encode(message: CreateDerivativeMarketOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CreateDerivativeMarketOrderAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CreateDerivativeMarketOrderAuthz>): CreateDerivativeMarketOrderAuthz {
    const message = createBaseCreateDerivativeMarketOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateDerivativeMarketOrderAuthzAmino): CreateDerivativeMarketOrderAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: CreateDerivativeMarketOrderAuthz): CreateDerivativeMarketOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CreateDerivativeMarketOrderAuthzAminoMsg): CreateDerivativeMarketOrderAuthz {
    return CreateDerivativeMarketOrderAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateDerivativeMarketOrderAuthzProtoMsg): CreateDerivativeMarketOrderAuthz {
    return CreateDerivativeMarketOrderAuthz.decode(message.value);
  },
  toProto(message: CreateDerivativeMarketOrderAuthz): Uint8Array {
    return CreateDerivativeMarketOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CreateDerivativeMarketOrderAuthz): CreateDerivativeMarketOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
      value: CreateDerivativeMarketOrderAuthz.encode(message).finish()
    };
  }
};
function createBaseBatchCreateDerivativeLimitOrdersAuthz(): BatchCreateDerivativeLimitOrdersAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const BatchCreateDerivativeLimitOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
  encode(message: BatchCreateDerivativeLimitOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): BatchCreateDerivativeLimitOrdersAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<BatchCreateDerivativeLimitOrdersAuthz>): BatchCreateDerivativeLimitOrdersAuthz {
    const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchCreateDerivativeLimitOrdersAuthzAmino): BatchCreateDerivativeLimitOrdersAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: BatchCreateDerivativeLimitOrdersAuthz): BatchCreateDerivativeLimitOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchCreateDerivativeLimitOrdersAuthzAminoMsg): BatchCreateDerivativeLimitOrdersAuthz {
    return BatchCreateDerivativeLimitOrdersAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchCreateDerivativeLimitOrdersAuthzProtoMsg): BatchCreateDerivativeLimitOrdersAuthz {
    return BatchCreateDerivativeLimitOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchCreateDerivativeLimitOrdersAuthz): Uint8Array {
    return BatchCreateDerivativeLimitOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchCreateDerivativeLimitOrdersAuthz): BatchCreateDerivativeLimitOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
      value: BatchCreateDerivativeLimitOrdersAuthz.encode(message).finish()
    };
  }
};
function createBaseCancelDerivativeOrderAuthz(): CancelDerivativeOrderAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const CancelDerivativeOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
  encode(message: CancelDerivativeOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CancelDerivativeOrderAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CancelDerivativeOrderAuthz>): CancelDerivativeOrderAuthz {
    const message = createBaseCancelDerivativeOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CancelDerivativeOrderAuthzAmino): CancelDerivativeOrderAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: CancelDerivativeOrderAuthz): CancelDerivativeOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CancelDerivativeOrderAuthzAminoMsg): CancelDerivativeOrderAuthz {
    return CancelDerivativeOrderAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: CancelDerivativeOrderAuthzProtoMsg): CancelDerivativeOrderAuthz {
    return CancelDerivativeOrderAuthz.decode(message.value);
  },
  toProto(message: CancelDerivativeOrderAuthz): Uint8Array {
    return CancelDerivativeOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CancelDerivativeOrderAuthz): CancelDerivativeOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
      value: CancelDerivativeOrderAuthz.encode(message).finish()
    };
  }
};
function createBaseBatchCancelDerivativeOrdersAuthz(): BatchCancelDerivativeOrdersAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
    subaccountId: "",
    marketIds: []
  };
}
export const BatchCancelDerivativeOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
  encode(message: BatchCancelDerivativeOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): BatchCancelDerivativeOrdersAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<BatchCancelDerivativeOrdersAuthz>): BatchCancelDerivativeOrdersAuthz {
    const message = createBaseBatchCancelDerivativeOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchCancelDerivativeOrdersAuthzAmino): BatchCancelDerivativeOrdersAuthz {
    return {
      subaccountId: object.subaccount_id,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: BatchCancelDerivativeOrdersAuthz): BatchCancelDerivativeOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchCancelDerivativeOrdersAuthzAminoMsg): BatchCancelDerivativeOrdersAuthz {
    return BatchCancelDerivativeOrdersAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchCancelDerivativeOrdersAuthzProtoMsg): BatchCancelDerivativeOrdersAuthz {
    return BatchCancelDerivativeOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchCancelDerivativeOrdersAuthz): Uint8Array {
    return BatchCancelDerivativeOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchCancelDerivativeOrdersAuthz): BatchCancelDerivativeOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
      value: BatchCancelDerivativeOrdersAuthz.encode(message).finish()
    };
  }
};
function createBaseBatchUpdateOrdersAuthz(): BatchUpdateOrdersAuthz {
  return {
    $typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
    subaccountId: "",
    spotMarkets: [],
    derivativeMarkets: []
  };
}
export const BatchUpdateOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
  encode(message: BatchUpdateOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.spotMarkets) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.derivativeMarkets) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): BatchUpdateOrdersAuthz {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      spotMarkets: Array.isArray(object?.spotMarkets) ? object.spotMarkets.map((e: any) => String(e)) : [],
      derivativeMarkets: Array.isArray(object?.derivativeMarkets) ? object.derivativeMarkets.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<BatchUpdateOrdersAuthz>): BatchUpdateOrdersAuthz {
    const message = createBaseBatchUpdateOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.spotMarkets = object.spotMarkets?.map(e => e) || [];
    message.derivativeMarkets = object.derivativeMarkets?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchUpdateOrdersAuthzAmino): BatchUpdateOrdersAuthz {
    return {
      subaccountId: object.subaccount_id,
      spotMarkets: Array.isArray(object?.spot_markets) ? object.spot_markets.map((e: any) => e) : [],
      derivativeMarkets: Array.isArray(object?.derivative_markets) ? object.derivative_markets.map((e: any) => e) : []
    };
  },
  toAmino(message: BatchUpdateOrdersAuthz): BatchUpdateOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    if (message.spotMarkets) {
      obj.spot_markets = message.spotMarkets.map(e => e);
    } else {
      obj.spot_markets = [];
    }
    if (message.derivativeMarkets) {
      obj.derivative_markets = message.derivativeMarkets.map(e => e);
    } else {
      obj.derivative_markets = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchUpdateOrdersAuthzAminoMsg): BatchUpdateOrdersAuthz {
    return BatchUpdateOrdersAuthz.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchUpdateOrdersAuthzProtoMsg): BatchUpdateOrdersAuthz {
    return BatchUpdateOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchUpdateOrdersAuthz): Uint8Array {
    return BatchUpdateOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchUpdateOrdersAuthz): BatchUpdateOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
      value: BatchUpdateOrdersAuthz.encode(message).finish()
    };
  }
};