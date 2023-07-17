import { DistributionStatus, DistributionType, Distribution, DistributionSDKType, DistributionRecords, DistributionRecordsSDKType, UserClaim, UserClaimSDKType, distributionStatusFromJSON, distributionTypeFromJSON } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryAllDistributionsRequest {}
export interface QueryAllDistributionsRequestSDKType {}
export interface QueryAllDistributionsResponse {
  distributions: Distribution[];
  height: Long;
}
export interface QueryAllDistributionsResponseSDKType {
  distributions: DistributionSDKType[];
  height: Long;
}
export interface QueryRecordsByDistributionNameRequest {
  distributionName: string;
  status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameRequestSDKType {
  distribution_name: string;
  status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameResponse {
  distributionRecords?: DistributionRecords;
  height: Long;
}
export interface QueryRecordsByDistributionNameResponseSDKType {
  distribution_records?: DistributionRecordsSDKType;
  height: Long;
}
export interface QueryRecordsByRecipientAddrRequest {
  address: string;
}
export interface QueryRecordsByRecipientAddrRequestSDKType {
  address: string;
}
export interface QueryRecordsByRecipientAddrResponse {
  distributionRecords?: DistributionRecords;
  height: Long;
}
export interface QueryRecordsByRecipientAddrResponseSDKType {
  distribution_records?: DistributionRecordsSDKType;
  height: Long;
}
export interface QueryClaimsByTypeRequest {
  userClaimType: DistributionType;
}
export interface QueryClaimsByTypeRequestSDKType {
  user_claim_type: DistributionType;
}
export interface QueryClaimsResponse {
  claims: UserClaim[];
  height: Long;
}
export interface QueryClaimsResponseSDKType {
  claims: UserClaimSDKType[];
  height: Long;
}
function createBaseQueryAllDistributionsRequest(): QueryAllDistributionsRequest {
  return {};
}
export const QueryAllDistributionsRequest = {
  encode(_: QueryAllDistributionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAllDistributionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllDistributionsRequest>): QueryAllDistributionsRequest {
    const message = createBaseQueryAllDistributionsRequest();
    return message;
  }
};
function createBaseQueryAllDistributionsResponse(): QueryAllDistributionsResponse {
  return {
    distributions: [],
    height: Long.ZERO
  };
}
export const QueryAllDistributionsResponse = {
  encode(message: QueryAllDistributionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.distributions) {
      Distribution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDistributionsResponse {
    return {
      distributions: Array.isArray(object?.distributions) ? object.distributions.map((e: any) => Distribution.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryAllDistributionsResponse>): QueryAllDistributionsResponse {
    const message = createBaseQueryAllDistributionsResponse();
    message.distributions = object.distributions?.map(e => Distribution.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseQueryRecordsByDistributionNameRequest(): QueryRecordsByDistributionNameRequest {
  return {
    distributionName: "",
    status: 0
  };
}
export const QueryRecordsByDistributionNameRequest = {
  encode(message: QueryRecordsByDistributionNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionName !== "") {
      writer.uint32(10).string(message.distributionName);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByDistributionNameRequest {
    return {
      distributionName: isSet(object.distributionName) ? String(object.distributionName) : "",
      status: isSet(object.status) ? distributionStatusFromJSON(object.status) : 0
    };
  },
  fromPartial(object: Partial<QueryRecordsByDistributionNameRequest>): QueryRecordsByDistributionNameRequest {
    const message = createBaseQueryRecordsByDistributionNameRequest();
    message.distributionName = object.distributionName ?? "";
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseQueryRecordsByDistributionNameResponse(): QueryRecordsByDistributionNameResponse {
  return {
    distributionRecords: undefined,
    height: Long.ZERO
  };
}
export const QueryRecordsByDistributionNameResponse = {
  encode(message: QueryRecordsByDistributionNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionRecords !== undefined) {
      DistributionRecords.encode(message.distributionRecords, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByDistributionNameResponse {
    return {
      distributionRecords: isSet(object.distributionRecords) ? DistributionRecords.fromJSON(object.distributionRecords) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryRecordsByDistributionNameResponse>): QueryRecordsByDistributionNameResponse {
    const message = createBaseQueryRecordsByDistributionNameResponse();
    message.distributionRecords = object.distributionRecords !== undefined && object.distributionRecords !== null ? DistributionRecords.fromPartial(object.distributionRecords) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseQueryRecordsByRecipientAddrRequest(): QueryRecordsByRecipientAddrRequest {
  return {
    address: ""
  };
}
export const QueryRecordsByRecipientAddrRequest = {
  encode(message: QueryRecordsByRecipientAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByRecipientAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryRecordsByRecipientAddrRequest>): QueryRecordsByRecipientAddrRequest {
    const message = createBaseQueryRecordsByRecipientAddrRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryRecordsByRecipientAddrResponse(): QueryRecordsByRecipientAddrResponse {
  return {
    distributionRecords: undefined,
    height: Long.ZERO
  };
}
export const QueryRecordsByRecipientAddrResponse = {
  encode(message: QueryRecordsByRecipientAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionRecords !== undefined) {
      DistributionRecords.encode(message.distributionRecords, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByRecipientAddrResponse {
    return {
      distributionRecords: isSet(object.distributionRecords) ? DistributionRecords.fromJSON(object.distributionRecords) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryRecordsByRecipientAddrResponse>): QueryRecordsByRecipientAddrResponse {
    const message = createBaseQueryRecordsByRecipientAddrResponse();
    message.distributionRecords = object.distributionRecords !== undefined && object.distributionRecords !== null ? DistributionRecords.fromPartial(object.distributionRecords) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseQueryClaimsByTypeRequest(): QueryClaimsByTypeRequest {
  return {
    userClaimType: 0
  };
}
export const QueryClaimsByTypeRequest = {
  encode(message: QueryClaimsByTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userClaimType !== 0) {
      writer.uint32(8).int32(message.userClaimType);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsByTypeRequest {
    return {
      userClaimType: isSet(object.userClaimType) ? distributionTypeFromJSON(object.userClaimType) : 0
    };
  },
  fromPartial(object: Partial<QueryClaimsByTypeRequest>): QueryClaimsByTypeRequest {
    const message = createBaseQueryClaimsByTypeRequest();
    message.userClaimType = object.userClaimType ?? 0;
    return message;
  }
};
function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    height: Long.ZERO
  };
}
export const QueryClaimsResponse = {
  encode(message: QueryClaimsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claims) {
      UserClaim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => UserClaim.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map(e => UserClaim.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};