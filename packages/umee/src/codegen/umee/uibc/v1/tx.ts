import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { IBCTransferStatus, iBCTransferStatusFromJSON } from "./quota";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuota {
  /** authority is the address of the governance account. */
  authority: string;
  title: string;
  description: string;
  /** total quota defines the total outflow of ibc-transfer in USD */
  total: string;
  /** per_denom quota for outflows per denom. All denoms have the same quota size. */
  perDenom: string;
  /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
  quotaDuration: Duration;
}
export interface MsgGovUpdateQuotaProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota";
  value: Uint8Array;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaAmino {
  /** authority is the address of the governance account. */
  authority: string;
  title: string;
  description: string;
  /** total quota defines the total outflow of ibc-transfer in USD */
  total: string;
  /** per_denom quota for outflows per denom. All denoms have the same quota size. */
  per_denom: string;
  /** quota_duration defines quota expires per denom, All denoms have the same expire time. */
  quota_duration?: DurationAmino;
}
export interface MsgGovUpdateQuotaAminoMsg {
  type: "/umee.uibc.v1.MsgGovUpdateQuota";
  value: MsgGovUpdateQuotaAmino;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaSDKType {
  authority: string;
  title: string;
  description: string;
  total: string;
  per_denom: string;
  quota_duration: DurationSDKType;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponse {}
export interface MsgGovUpdateQuotaResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse";
  value: Uint8Array;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponseAmino {}
export interface MsgGovUpdateQuotaResponseAminoMsg {
  type: "/umee.uibc.v1.MsgGovUpdateQuotaResponse";
  value: MsgGovUpdateQuotaResponseAmino;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponseSDKType {}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatus {
  /** authority is the address of the governance account. */
  authority: string;
  title: string;
  description: string;
  /** ibc_status defines status for ibc transfers */
  ibcStatus: IBCTransferStatus;
}
export interface MsgGovSetIBCStatusProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus";
  value: Uint8Array;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusAmino {
  /** authority is the address of the governance account. */
  authority: string;
  title: string;
  description: string;
  /** ibc_status defines status for ibc transfers */
  ibc_status: IBCTransferStatus;
}
export interface MsgGovSetIBCStatusAminoMsg {
  type: "/umee.uibc.v1.MsgGovSetIBCStatus";
  value: MsgGovSetIBCStatusAmino;
}
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusSDKType {
  authority: string;
  title: string;
  description: string;
  ibc_status: IBCTransferStatus;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponse {}
export interface MsgGovSetIBCStatusResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
  value: Uint8Array;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponseAmino {}
export interface MsgGovSetIBCStatusResponseAminoMsg {
  type: "/umee.uibc.v1.MsgGovSetIBCStatusResponse";
  value: MsgGovSetIBCStatusResponseAmino;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponseSDKType {}
function createBaseMsgGovUpdateQuota(): MsgGovUpdateQuota {
  return {
    authority: "",
    title: "",
    description: "",
    total: "",
    perDenom: "",
    quotaDuration: Duration.fromPartial({})
  };
}
export const MsgGovUpdateQuota = {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
  encode(message: MsgGovUpdateQuota, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.total !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    if (message.perDenom !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.perDenom, 18).atomics);
    }
    if (message.quotaDuration !== undefined) {
      Duration.encode(message.quotaDuration, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovUpdateQuota {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      total: isSet(object.total) ? String(object.total) : "",
      perDenom: isSet(object.perDenom) ? String(object.perDenom) : "",
      quotaDuration: isSet(object.quotaDuration) ? Duration.fromJSON(object.quotaDuration) : undefined
    };
  },
  fromPartial(object: Partial<MsgGovUpdateQuota>): MsgGovUpdateQuota {
    const message = createBaseMsgGovUpdateQuota();
    message.authority = object.authority ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.total = object.total ?? "";
    message.perDenom = object.perDenom ?? "";
    message.quotaDuration = object.quotaDuration !== undefined && object.quotaDuration !== null ? Duration.fromPartial(object.quotaDuration) : undefined;
    return message;
  },
  fromAmino(object: MsgGovUpdateQuotaAmino): MsgGovUpdateQuota {
    return {
      authority: object.authority,
      title: object.title,
      description: object.description,
      total: object.total,
      perDenom: object.per_denom,
      quotaDuration: object?.quota_duration ? Duration.fromAmino(object.quota_duration) : undefined
    };
  },
  toAmino(message: MsgGovUpdateQuota): MsgGovUpdateQuotaAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.title = message.title;
    obj.description = message.description;
    obj.total = message.total;
    obj.per_denom = message.perDenom;
    obj.quota_duration = message.quotaDuration ? Duration.toAmino(message.quotaDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateQuotaAminoMsg): MsgGovUpdateQuota {
    return MsgGovUpdateQuota.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateQuotaProtoMsg): MsgGovUpdateQuota {
    return MsgGovUpdateQuota.decode(message.value);
  },
  toProto(message: MsgGovUpdateQuota): Uint8Array {
    return MsgGovUpdateQuota.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateQuota): MsgGovUpdateQuotaProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
      value: MsgGovUpdateQuota.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateQuotaResponse(): MsgGovUpdateQuotaResponse {
  return {};
}
export const MsgGovUpdateQuotaResponse = {
  typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse",
  encode(_: MsgGovUpdateQuotaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateQuotaResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateQuotaResponse>): MsgGovUpdateQuotaResponse {
    const message = createBaseMsgGovUpdateQuotaResponse();
    return message;
  },
  fromAmino(_: MsgGovUpdateQuotaResponseAmino): MsgGovUpdateQuotaResponse {
    return {};
  },
  toAmino(_: MsgGovUpdateQuotaResponse): MsgGovUpdateQuotaResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateQuotaResponseAminoMsg): MsgGovUpdateQuotaResponse {
    return MsgGovUpdateQuotaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateQuotaResponseProtoMsg): MsgGovUpdateQuotaResponse {
    return MsgGovUpdateQuotaResponse.decode(message.value);
  },
  toProto(message: MsgGovUpdateQuotaResponse): Uint8Array {
    return MsgGovUpdateQuotaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateQuotaResponse): MsgGovUpdateQuotaResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovUpdateQuotaResponse",
      value: MsgGovUpdateQuotaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetIBCStatus(): MsgGovSetIBCStatus {
  return {
    authority: "",
    title: "",
    description: "",
    ibcStatus: 0
  };
}
export const MsgGovSetIBCStatus = {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
  encode(message: MsgGovSetIBCStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.ibcStatus !== 0) {
      writer.uint32(32).int32(message.ibcStatus);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovSetIBCStatus {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ibcStatus: isSet(object.ibcStatus) ? iBCTransferStatusFromJSON(object.ibcStatus) : -1
    };
  },
  fromPartial(object: Partial<MsgGovSetIBCStatus>): MsgGovSetIBCStatus {
    const message = createBaseMsgGovSetIBCStatus();
    message.authority = object.authority ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ibcStatus = object.ibcStatus ?? 0;
    return message;
  },
  fromAmino(object: MsgGovSetIBCStatusAmino): MsgGovSetIBCStatus {
    return {
      authority: object.authority,
      title: object.title,
      description: object.description,
      ibcStatus: isSet(object.ibc_status) ? iBCTransferStatusFromJSON(object.ibc_status) : -1
    };
  },
  toAmino(message: MsgGovSetIBCStatus): MsgGovSetIBCStatusAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.title = message.title;
    obj.description = message.description;
    obj.ibc_status = message.ibcStatus;
    return obj;
  },
  fromAminoMsg(object: MsgGovSetIBCStatusAminoMsg): MsgGovSetIBCStatus {
    return MsgGovSetIBCStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetIBCStatusProtoMsg): MsgGovSetIBCStatus {
    return MsgGovSetIBCStatus.decode(message.value);
  },
  toProto(message: MsgGovSetIBCStatus): Uint8Array {
    return MsgGovSetIBCStatus.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetIBCStatus): MsgGovSetIBCStatusProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
      value: MsgGovSetIBCStatus.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetIBCStatusResponse(): MsgGovSetIBCStatusResponse {
  return {};
}
export const MsgGovSetIBCStatusResponse = {
  typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse",
  encode(_: MsgGovSetIBCStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovSetIBCStatusResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovSetIBCStatusResponse>): MsgGovSetIBCStatusResponse {
    const message = createBaseMsgGovSetIBCStatusResponse();
    return message;
  },
  fromAmino(_: MsgGovSetIBCStatusResponseAmino): MsgGovSetIBCStatusResponse {
    return {};
  },
  toAmino(_: MsgGovSetIBCStatusResponse): MsgGovSetIBCStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetIBCStatusResponseAminoMsg): MsgGovSetIBCStatusResponse {
    return MsgGovSetIBCStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetIBCStatusResponseProtoMsg): MsgGovSetIBCStatusResponse {
    return MsgGovSetIBCStatusResponse.decode(message.value);
  },
  toProto(message: MsgGovSetIBCStatusResponse): Uint8Array {
    return MsgGovSetIBCStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetIBCStatusResponse): MsgGovSetIBCStatusResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatusResponse",
      value: MsgGovSetIBCStatusResponse.encode(message).finish()
    };
  }
};