import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { IBCTransferStatus, iBCTransferStatusFromJSON } from "./quota";
import * as _m0 from "protobufjs/minimal";
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
  quotaDuration?: Duration;
}
/** MsgGovUpdateQuota defines the Msg/GovUpdateQuota request type. */
export interface MsgGovUpdateQuotaSDKType {
  authority: string;
  title: string;
  description: string;
  total: string;
  per_denom: string;
  quota_duration?: DurationSDKType;
}
/** MsgGovUpdateQuotaResponse defines response type for the Msg/GovUpdateQuota for with x/gov proposals. */
export interface MsgGovUpdateQuotaResponse {}
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
/** MsgGovSetIBCStatus defines the request type for setting the IBC quota status. */
export interface MsgGovSetIBCStatusSDKType {
  authority: string;
  title: string;
  description: string;
  ibc_status: IBCTransferStatus;
}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponse {}
/** MsgGovSetIBCStatusResponse define the response type for Msg/MsgGovSetIBCStatus with x/gov proposals. */
export interface MsgGovSetIBCStatusResponseSDKType {}
function createBaseMsgGovUpdateQuota(): MsgGovUpdateQuota {
  return {
    authority: "",
    title: "",
    description: "",
    total: "",
    perDenom: "",
    quotaDuration: undefined
  };
}
export const MsgGovUpdateQuota = {
  encode(message: MsgGovUpdateQuota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(message.total);
    }
    if (message.perDenom !== "") {
      writer.uint32(42).string(message.perDenom);
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
  }
};
function createBaseMsgGovUpdateQuotaResponse(): MsgGovUpdateQuotaResponse {
  return {};
}
export const MsgGovUpdateQuotaResponse = {
  encode(_: MsgGovUpdateQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateQuotaResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateQuotaResponse>): MsgGovUpdateQuotaResponse {
    const message = createBaseMsgGovUpdateQuotaResponse();
    return message;
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
  encode(message: MsgGovSetIBCStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      ibcStatus: isSet(object.ibcStatus) ? iBCTransferStatusFromJSON(object.ibcStatus) : 0
    };
  },
  fromPartial(object: Partial<MsgGovSetIBCStatus>): MsgGovSetIBCStatus {
    const message = createBaseMsgGovSetIBCStatus();
    message.authority = object.authority ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ibcStatus = object.ibcStatus ?? 0;
    return message;
  }
};
function createBaseMsgGovSetIBCStatusResponse(): MsgGovSetIBCStatusResponse {
  return {};
}
export const MsgGovSetIBCStatusResponse = {
  encode(_: MsgGovSetIBCStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgGovSetIBCStatusResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovSetIBCStatusResponse>): MsgGovSetIBCStatusResponse {
    const message = createBaseMsgGovSetIBCStatusResponse();
    return message;
  }
};