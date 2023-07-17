import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** IBCTransferStatus status of ibc-transfer quota check for inflow and outflow */
export enum IBCTransferStatus {
  /** IBC_TRANSFER_STATUS_UNSPECIFIED - UNSPECIFIED  defines a no-op status. */
  IBC_TRANSFER_STATUS_UNSPECIFIED = 0,
  /** IBC_TRANSFER_STATUS_QUOTA_DISABLED - DISABLED: all inflow and outflow quota checks are disabled. */
  IBC_TRANSFER_STATUS_QUOTA_DISABLED = 1,
  /** IBC_TRANSFER_STATUS_QUOTA_ENABLED - ENABLED: all inflow and outflow quota checks are enabled. */
  IBC_TRANSFER_STATUS_QUOTA_ENABLED = 2,
  /** IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED - DISABLED OUT: outflow quota check is disabled, while the inflow quota check is enabled. */
  IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED = 3,
  /** IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED - DISABLED IN: inflow quota check is disabled, while the outflow quota check is enabled. */
  IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED = 4,
  /** IBC_TRANSFER_STATUS_TRANSFERS_PAUSED - PAUSED: all IBC transfers are paused. */
  IBC_TRANSFER_STATUS_TRANSFERS_PAUSED = 5,
  UNRECOGNIZED = -1,
}
export const IBCTransferStatusSDKType = IBCTransferStatus;
export function iBCTransferStatusFromJSON(object: any): IBCTransferStatus {
  switch (object) {
    case 0:
    case "IBC_TRANSFER_STATUS_UNSPECIFIED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_UNSPECIFIED;
    case 1:
    case "IBC_TRANSFER_STATUS_QUOTA_DISABLED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_DISABLED;
    case 2:
    case "IBC_TRANSFER_STATUS_QUOTA_ENABLED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_ENABLED;
    case 3:
    case "IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED;
    case 4:
    case "IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED;
    case 5:
    case "IBC_TRANSFER_STATUS_TRANSFERS_PAUSED":
      return IBCTransferStatus.IBC_TRANSFER_STATUS_TRANSFERS_PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IBCTransferStatus.UNRECOGNIZED;
  }
}
export function iBCTransferStatusToJSON(object: IBCTransferStatus): string {
  switch (object) {
    case IBCTransferStatus.IBC_TRANSFER_STATUS_UNSPECIFIED:
      return "IBC_TRANSFER_STATUS_UNSPECIFIED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_DISABLED:
      return "IBC_TRANSFER_STATUS_QUOTA_DISABLED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_ENABLED:
      return "IBC_TRANSFER_STATUS_QUOTA_ENABLED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED:
      return "IBC_TRANSFER_STATUS_QUOTA_OUT_DISABLED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED:
      return "IBC_TRANSFER_STATUS_QUOTA_IN_DISABLED";
    case IBCTransferStatus.IBC_TRANSFER_STATUS_TRANSFERS_PAUSED:
      return "IBC_TRANSFER_STATUS_TRANSFERS_PAUSED";
    case IBCTransferStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params of x/uibc module */
export interface Params {
  /** ibc_status defines the IBC ICS20 status (transfer quota or transfers disabled). */
  ibcStatus: IBCTransferStatus;
  /** total_quota defines the total outflow limit of ibc-transfer in USD */
  totalQuota: string;
  /** token_quota defines the outflow limit per token in USD */
  tokenQuota: string;
  /** quota_duration defines quota expires for each ibc-transfer denom in seconds */
  quotaDuration?: Duration;
}
/** Params of x/uibc module */
export interface ParamsSDKType {
  ibc_status: IBCTransferStatus;
  total_quota: string;
  token_quota: string;
  quota_duration?: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    ibcStatus: 0,
    totalQuota: "",
    tokenQuota: "",
    quotaDuration: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ibcStatus !== 0) {
      writer.uint32(8).int32(message.ibcStatus);
    }
    if (message.totalQuota !== "") {
      writer.uint32(18).string(message.totalQuota);
    }
    if (message.tokenQuota !== "") {
      writer.uint32(26).string(message.tokenQuota);
    }
    if (message.quotaDuration !== undefined) {
      Duration.encode(message.quotaDuration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      ibcStatus: isSet(object.ibcStatus) ? iBCTransferStatusFromJSON(object.ibcStatus) : 0,
      totalQuota: isSet(object.totalQuota) ? String(object.totalQuota) : "",
      tokenQuota: isSet(object.tokenQuota) ? String(object.tokenQuota) : "",
      quotaDuration: isSet(object.quotaDuration) ? Duration.fromJSON(object.quotaDuration) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.ibcStatus = object.ibcStatus ?? 0;
    message.totalQuota = object.totalQuota ?? "";
    message.tokenQuota = object.tokenQuota ?? "";
    message.quotaDuration = object.quotaDuration !== undefined && object.quotaDuration !== null ? Duration.fromPartial(object.quotaDuration) : undefined;
    return message;
  }
};