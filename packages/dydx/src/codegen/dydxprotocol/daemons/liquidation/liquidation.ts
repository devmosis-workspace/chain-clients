import { SubaccountId, SubaccountIdSDKType } from "../../subaccounts/subaccount";
import { SubaccountOpenPositionInfo, SubaccountOpenPositionInfoSDKType } from "../../clob/liquidations";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * LiquidateSubaccountsRequest is a request message that contains a list of
 * subaccount ids that potentially need to be liquidated. The list of subaccount
 * ids should not contain duplicates. The application should re-verify these
 * subaccount ids against current state before liquidating their positions.
 */
export interface LiquidateSubaccountsRequest {
  /** The block height at which the liquidation daemon is processing. */
  blockHeight: number;
  /** The list of liquidatable subaccount ids. */
  liquidatableSubaccountIds: SubaccountId[];
  /** The list of subaccount ids with negative total net collateral. */
  negativeTncSubaccountIds: SubaccountId[];
  subaccountOpenPositionInfo: SubaccountOpenPositionInfo[];
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
export interface LiquidateSubaccountsRequestSDKType {
  block_height: number;
  liquidatable_subaccount_ids: SubaccountIdSDKType[];
  negative_tnc_subaccount_ids: SubaccountIdSDKType[];
  subaccount_open_position_info: SubaccountOpenPositionInfoSDKType[];
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
export interface LiquidateSubaccountsResponseSDKType {}
function createBaseLiquidateSubaccountsRequest(): LiquidateSubaccountsRequest {
  return {
    blockHeight: 0,
    liquidatableSubaccountIds: [],
    negativeTncSubaccountIds: [],
    subaccountOpenPositionInfo: []
  };
}
export const LiquidateSubaccountsRequest = {
  typeUrl: "/dydxprotocol.daemons.liquidation.LiquidateSubaccountsRequest",
  encode(message: LiquidateSubaccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== 0) {
      writer.uint32(8).uint32(message.blockHeight);
    }
    for (const v of message.liquidatableSubaccountIds) {
      SubaccountId.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.negativeTncSubaccountIds) {
      SubaccountId.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.subaccountOpenPositionInfo) {
      SubaccountOpenPositionInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidateSubaccountsRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      liquidatableSubaccountIds: Array.isArray(object?.liquidatableSubaccountIds) ? object.liquidatableSubaccountIds.map((e: any) => SubaccountId.fromJSON(e)) : [],
      negativeTncSubaccountIds: Array.isArray(object?.negativeTncSubaccountIds) ? object.negativeTncSubaccountIds.map((e: any) => SubaccountId.fromJSON(e)) : [],
      subaccountOpenPositionInfo: Array.isArray(object?.subaccountOpenPositionInfo) ? object.subaccountOpenPositionInfo.map((e: any) => SubaccountOpenPositionInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LiquidateSubaccountsRequest>): LiquidateSubaccountsRequest {
    const message = createBaseLiquidateSubaccountsRequest();
    message.blockHeight = object.blockHeight ?? 0;
    message.liquidatableSubaccountIds = object.liquidatableSubaccountIds?.map(e => SubaccountId.fromPartial(e)) || [];
    message.negativeTncSubaccountIds = object.negativeTncSubaccountIds?.map(e => SubaccountId.fromPartial(e)) || [];
    message.subaccountOpenPositionInfo = object.subaccountOpenPositionInfo?.map(e => SubaccountOpenPositionInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LiquidateSubaccountsRequestAmino): LiquidateSubaccountsRequest {
    const message = createBaseLiquidateSubaccountsRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = object.block_height;
    }
    message.liquidatableSubaccountIds = object.liquidatable_subaccount_ids?.map(e => SubaccountId.fromAmino(e)) || [];
    message.negativeTncSubaccountIds = object.negative_tnc_subaccount_ids?.map(e => SubaccountId.fromAmino(e)) || [];
    message.subaccountOpenPositionInfo = object.subaccount_open_position_info?.map(e => SubaccountOpenPositionInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LiquidateSubaccountsRequest): LiquidateSubaccountsRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    if (message.liquidatableSubaccountIds) {
      obj.liquidatable_subaccount_ids = message.liquidatableSubaccountIds.map(e => e ? SubaccountId.toAmino(e) : undefined);
    } else {
      obj.liquidatable_subaccount_ids = [];
    }
    if (message.negativeTncSubaccountIds) {
      obj.negative_tnc_subaccount_ids = message.negativeTncSubaccountIds.map(e => e ? SubaccountId.toAmino(e) : undefined);
    } else {
      obj.negative_tnc_subaccount_ids = [];
    }
    if (message.subaccountOpenPositionInfo) {
      obj.subaccount_open_position_info = message.subaccountOpenPositionInfo.map(e => e ? SubaccountOpenPositionInfo.toAmino(e) : undefined);
    } else {
      obj.subaccount_open_position_info = [];
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
    const message = createBaseLiquidateSubaccountsResponse();
    return message;
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