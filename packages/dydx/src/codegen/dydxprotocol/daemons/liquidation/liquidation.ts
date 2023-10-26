import { SubaccountId, SubaccountIdAmino, SubaccountIdSDKType } from "../../subaccounts/subaccount";
import { BinaryWriter } from "../../../binary";
/**
 * LiquidateSubaccountsRequest is a request message that contains a list of
 * subaccount ids that potentially need to be liquidated. The list of subaccount
 * ids should not contain duplicates. The application should re-verify these
 * subaccount ids against current state before liquidating their positions.
 */
export interface LiquidateSubaccountsRequest {
  subaccountIds: SubaccountId[];
}
export interface LiquidateSubaccountsRequestProtoMsg {
  typeUrl: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsRequest";
  value: Uint8Array;
}
/**
 * LiquidateSubaccountsRequest is a request message that contains a list of
 * subaccount ids that potentially need to be liquidated. The list of subaccount
 * ids should not contain duplicates. The application should re-verify these
 * subaccount ids against current state before liquidating their positions.
 */
export interface LiquidateSubaccountsRequestAmino {
  subaccount_ids: SubaccountIdAmino[];
}
export interface LiquidateSubaccountsRequestAminoMsg {
  type: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsRequest";
  value: LiquidateSubaccountsRequestAmino;
}
/**
 * LiquidateSubaccountsRequest is a request message that contains a list of
 * subaccount ids that potentially need to be liquidated. The list of subaccount
 * ids should not contain duplicates. The application should re-verify these
 * subaccount ids against current state before liquidating their positions.
 */
export interface LiquidateSubaccountsRequestSDKType {
  subaccount_ids: SubaccountIdSDKType[];
}
/**
 * LiquidateSubaccountsResponse is a response message for
 * LiquidateSubaccountsRequest.
 */
export interface LiquidateSubaccountsResponse {}
export interface LiquidateSubaccountsResponseProtoMsg {
  typeUrl: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsResponse";
  value: Uint8Array;
}
/**
 * LiquidateSubaccountsResponse is a response message for
 * LiquidateSubaccountsRequest.
 */
export interface LiquidateSubaccountsResponseAmino {}
export interface LiquidateSubaccountsResponseAminoMsg {
  type: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsResponse";
  value: LiquidateSubaccountsResponseAmino;
}
/**
 * LiquidateSubaccountsResponse is a response message for
 * LiquidateSubaccountsRequest.
 */
export interface LiquidateSubaccountsResponseSDKType {}
function createBaseLiquidateSubaccountsRequest(): LiquidateSubaccountsRequest {
  return {
    subaccountIds: []
  };
}
export const LiquidateSubaccountsRequest = {
  typeUrl: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsRequest",
  encode(message: LiquidateSubaccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccountIds) {
      SubaccountId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidateSubaccountsRequest {
    return {
      subaccountIds: Array.isArray(object?.subaccountIds) ? object.subaccountIds.map((e: any) => SubaccountId.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LiquidateSubaccountsRequest>): LiquidateSubaccountsRequest {
    const message = createBaseLiquidateSubaccountsRequest();
    message.subaccountIds = object.subaccountIds?.map(e => SubaccountId.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LiquidateSubaccountsRequestAmino): LiquidateSubaccountsRequest {
    return {
      subaccountIds: Array.isArray(object?.subaccount_ids) ? object.subaccount_ids.map((e: any) => SubaccountId.fromAmino(e)) : []
    };
  },
  toAmino(message: LiquidateSubaccountsRequest): LiquidateSubaccountsRequestAmino {
    const obj: any = {};
    if (message.subaccountIds) {
      obj.subaccount_ids = message.subaccountIds.map(e => e ? SubaccountId.toAmino(e) : undefined);
    } else {
      obj.subaccount_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: LiquidateSubaccountsRequestAminoMsg): LiquidateSubaccountsRequest {
    return LiquidateSubaccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidateSubaccountsRequestProtoMsg): LiquidateSubaccountsRequest {
    return LiquidateSubaccountsRequest.decode(message.value);
  },
  toProto(message: LiquidateSubaccountsRequest): Uint8Array {
    return LiquidateSubaccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: LiquidateSubaccountsRequest): LiquidateSubaccountsRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsRequest",
      value: LiquidateSubaccountsRequest.encode(message).finish()
    };
  }
};
function createBaseLiquidateSubaccountsResponse(): LiquidateSubaccountsResponse {
  return {};
}
export const LiquidateSubaccountsResponse = {
  typeUrl: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsResponse",
  encode(_: LiquidateSubaccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): LiquidateSubaccountsResponse {
    return {};
  },
  fromPartial(_: Partial<LiquidateSubaccountsResponse>): LiquidateSubaccountsResponse {
    const message = createBaseLiquidateSubaccountsResponse();
    return message;
  },
  fromAmino(_: LiquidateSubaccountsResponseAmino): LiquidateSubaccountsResponse {
    return {};
  },
  toAmino(_: LiquidateSubaccountsResponse): LiquidateSubaccountsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: LiquidateSubaccountsResponseAminoMsg): LiquidateSubaccountsResponse {
    return LiquidateSubaccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidateSubaccountsResponseProtoMsg): LiquidateSubaccountsResponse {
    return LiquidateSubaccountsResponse.decode(message.value);
  },
  toProto(message: LiquidateSubaccountsResponse): Uint8Array {
    return LiquidateSubaccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: LiquidateSubaccountsResponse): LiquidateSubaccountsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsResponse",
      value: LiquidateSubaccountsResponse.encode(message).finish()
    };
  }
};