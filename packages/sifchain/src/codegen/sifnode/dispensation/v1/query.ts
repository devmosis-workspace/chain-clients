import { DistributionStatus, DistributionType, Distribution, DistributionAmino, DistributionSDKType, DistributionRecords, DistributionRecordsAmino, DistributionRecordsSDKType, UserClaim, UserClaimAmino, UserClaimSDKType, distributionStatusFromJSON, distributionTypeFromJSON } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryAllDistributionsRequest {}
export interface QueryAllDistributionsRequestProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.QueryAllDistributionsRequest";
  value: Uint8Array;
}
export interface QueryAllDistributionsRequestAmino {}
export interface QueryAllDistributionsRequestAminoMsg {
  type: "/sifnode.dispensation.v1.QueryAllDistributionsRequest";
  value: QueryAllDistributionsRequestAmino;
}
export interface QueryAllDistributionsRequestSDKType {}
export interface QueryAllDistributionsResponse {
  distributions: Distribution[];
  height: bigint;
}
export interface QueryAllDistributionsResponseProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.QueryAllDistributionsResponse";
  value: Uint8Array;
}
export interface QueryAllDistributionsResponseAmino {
  distributions?: DistributionAmino[];
  height?: string;
}
export interface QueryAllDistributionsResponseAminoMsg {
  type: "/sifnode.dispensation.v1.QueryAllDistributionsResponse";
  value: QueryAllDistributionsResponseAmino;
}
export interface QueryAllDistributionsResponseSDKType {
  distributions: DistributionSDKType[];
  height: bigint;
}
export interface QueryRecordsByDistributionNameRequest {
  distributionName: string;
  status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameRequestProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameRequest";
  value: Uint8Array;
}
export interface QueryRecordsByDistributionNameRequestAmino {
  distribution_name?: string;
  status?: DistributionStatus;
}
export interface QueryRecordsByDistributionNameRequestAminoMsg {
  type: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameRequest";
  value: QueryRecordsByDistributionNameRequestAmino;
}
export interface QueryRecordsByDistributionNameRequestSDKType {
  distribution_name: string;
  status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameResponse {
  distributionRecords?: DistributionRecords;
  height: bigint;
}
export interface QueryRecordsByDistributionNameResponseProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameResponse";
  value: Uint8Array;
}
export interface QueryRecordsByDistributionNameResponseAmino {
  distribution_records?: DistributionRecordsAmino;
  height?: string;
}
export interface QueryRecordsByDistributionNameResponseAminoMsg {
  type: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameResponse";
  value: QueryRecordsByDistributionNameResponseAmino;
}
export interface QueryRecordsByDistributionNameResponseSDKType {
  distribution_records?: DistributionRecordsSDKType;
  height: bigint;
}
export interface QueryRecordsByRecipientAddrRequest {
  address: string;
}
export interface QueryRecordsByRecipientAddrRequestProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrRequest";
  value: Uint8Array;
}
export interface QueryRecordsByRecipientAddrRequestAmino {
  address?: string;
}
export interface QueryRecordsByRecipientAddrRequestAminoMsg {
  type: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrRequest";
  value: QueryRecordsByRecipientAddrRequestAmino;
}
export interface QueryRecordsByRecipientAddrRequestSDKType {
  address: string;
}
export interface QueryRecordsByRecipientAddrResponse {
  distributionRecords?: DistributionRecords;
  height: bigint;
}
export interface QueryRecordsByRecipientAddrResponseProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrResponse";
  value: Uint8Array;
}
export interface QueryRecordsByRecipientAddrResponseAmino {
  distribution_records?: DistributionRecordsAmino;
  height?: string;
}
export interface QueryRecordsByRecipientAddrResponseAminoMsg {
  type: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrResponse";
  value: QueryRecordsByRecipientAddrResponseAmino;
}
export interface QueryRecordsByRecipientAddrResponseSDKType {
  distribution_records?: DistributionRecordsSDKType;
  height: bigint;
}
export interface QueryClaimsByTypeRequest {
  userClaimType: DistributionType;
}
export interface QueryClaimsByTypeRequestProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.QueryClaimsByTypeRequest";
  value: Uint8Array;
}
export interface QueryClaimsByTypeRequestAmino {
  user_claim_type?: DistributionType;
}
export interface QueryClaimsByTypeRequestAminoMsg {
  type: "/sifnode.dispensation.v1.QueryClaimsByTypeRequest";
  value: QueryClaimsByTypeRequestAmino;
}
export interface QueryClaimsByTypeRequestSDKType {
  user_claim_type: DistributionType;
}
export interface QueryClaimsResponse {
  claims: UserClaim[];
  height: bigint;
}
export interface QueryClaimsResponseProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.QueryClaimsResponse";
  value: Uint8Array;
}
export interface QueryClaimsResponseAmino {
  claims?: UserClaimAmino[];
  height?: string;
}
export interface QueryClaimsResponseAminoMsg {
  type: "/sifnode.dispensation.v1.QueryClaimsResponse";
  value: QueryClaimsResponseAmino;
}
export interface QueryClaimsResponseSDKType {
  claims: UserClaimSDKType[];
  height: bigint;
}
function createBaseQueryAllDistributionsRequest(): QueryAllDistributionsRequest {
  return {};
}
export const QueryAllDistributionsRequest = {
  typeUrl: "/sifnode.dispensation.v1.QueryAllDistributionsRequest",
  encode(_: QueryAllDistributionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAllDistributionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAllDistributionsRequest>): QueryAllDistributionsRequest {
    const message = createBaseQueryAllDistributionsRequest();
    return message;
  },
  fromAmino(_: QueryAllDistributionsRequestAmino): QueryAllDistributionsRequest {
    const message = createBaseQueryAllDistributionsRequest();
    return message;
  },
  toAmino(_: QueryAllDistributionsRequest): QueryAllDistributionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllDistributionsRequestAminoMsg): QueryAllDistributionsRequest {
    return QueryAllDistributionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDistributionsRequestProtoMsg): QueryAllDistributionsRequest {
    return QueryAllDistributionsRequest.decode(message.value);
  },
  toProto(message: QueryAllDistributionsRequest): Uint8Array {
    return QueryAllDistributionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDistributionsRequest): QueryAllDistributionsRequestProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.QueryAllDistributionsRequest",
      value: QueryAllDistributionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDistributionsResponse(): QueryAllDistributionsResponse {
  return {
    distributions: [],
    height: BigInt(0)
  };
}
export const QueryAllDistributionsResponse = {
  typeUrl: "/sifnode.dispensation.v1.QueryAllDistributionsResponse",
  encode(message: QueryAllDistributionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.distributions) {
      Distribution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDistributionsResponse {
    return {
      distributions: Array.isArray(object?.distributions) ? object.distributions.map((e: any) => Distribution.fromJSON(e)) : [],
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryAllDistributionsResponse>): QueryAllDistributionsResponse {
    const message = createBaseQueryAllDistributionsResponse();
    message.distributions = object.distributions?.map(e => Distribution.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAllDistributionsResponseAmino): QueryAllDistributionsResponse {
    const message = createBaseQueryAllDistributionsResponse();
    message.distributions = object.distributions?.map(e => Distribution.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryAllDistributionsResponse): QueryAllDistributionsResponseAmino {
    const obj: any = {};
    if (message.distributions) {
      obj.distributions = message.distributions.map(e => e ? Distribution.toAmino(e) : undefined);
    } else {
      obj.distributions = message.distributions;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDistributionsResponseAminoMsg): QueryAllDistributionsResponse {
    return QueryAllDistributionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDistributionsResponseProtoMsg): QueryAllDistributionsResponse {
    return QueryAllDistributionsResponse.decode(message.value);
  },
  toProto(message: QueryAllDistributionsResponse): Uint8Array {
    return QueryAllDistributionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDistributionsResponse): QueryAllDistributionsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.QueryAllDistributionsResponse",
      value: QueryAllDistributionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByDistributionNameRequest(): QueryRecordsByDistributionNameRequest {
  return {
    distributionName: "",
    status: 0
  };
}
export const QueryRecordsByDistributionNameRequest = {
  typeUrl: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameRequest",
  encode(message: QueryRecordsByDistributionNameRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      status: isSet(object.status) ? distributionStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<QueryRecordsByDistributionNameRequest>): QueryRecordsByDistributionNameRequest {
    const message = createBaseQueryRecordsByDistributionNameRequest();
    message.distributionName = object.distributionName ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: QueryRecordsByDistributionNameRequestAmino): QueryRecordsByDistributionNameRequest {
    const message = createBaseQueryRecordsByDistributionNameRequest();
    if (object.distribution_name !== undefined && object.distribution_name !== null) {
      message.distributionName = object.distribution_name;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryRecordsByDistributionNameRequest): QueryRecordsByDistributionNameRequestAmino {
    const obj: any = {};
    obj.distribution_name = message.distributionName === "" ? undefined : message.distributionName;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByDistributionNameRequestAminoMsg): QueryRecordsByDistributionNameRequest {
    return QueryRecordsByDistributionNameRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByDistributionNameRequestProtoMsg): QueryRecordsByDistributionNameRequest {
    return QueryRecordsByDistributionNameRequest.decode(message.value);
  },
  toProto(message: QueryRecordsByDistributionNameRequest): Uint8Array {
    return QueryRecordsByDistributionNameRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByDistributionNameRequest): QueryRecordsByDistributionNameRequestProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameRequest",
      value: QueryRecordsByDistributionNameRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByDistributionNameResponse(): QueryRecordsByDistributionNameResponse {
  return {
    distributionRecords: undefined,
    height: BigInt(0)
  };
}
export const QueryRecordsByDistributionNameResponse = {
  typeUrl: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameResponse",
  encode(message: QueryRecordsByDistributionNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionRecords !== undefined) {
      DistributionRecords.encode(message.distributionRecords, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByDistributionNameResponse {
    return {
      distributionRecords: isSet(object.distributionRecords) ? DistributionRecords.fromJSON(object.distributionRecords) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRecordsByDistributionNameResponse>): QueryRecordsByDistributionNameResponse {
    const message = createBaseQueryRecordsByDistributionNameResponse();
    message.distributionRecords = object.distributionRecords !== undefined && object.distributionRecords !== null ? DistributionRecords.fromPartial(object.distributionRecords) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRecordsByDistributionNameResponseAmino): QueryRecordsByDistributionNameResponse {
    const message = createBaseQueryRecordsByDistributionNameResponse();
    if (object.distribution_records !== undefined && object.distribution_records !== null) {
      message.distributionRecords = DistributionRecords.fromAmino(object.distribution_records);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryRecordsByDistributionNameResponse): QueryRecordsByDistributionNameResponseAmino {
    const obj: any = {};
    obj.distribution_records = message.distributionRecords ? DistributionRecords.toAmino(message.distributionRecords) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByDistributionNameResponseAminoMsg): QueryRecordsByDistributionNameResponse {
    return QueryRecordsByDistributionNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByDistributionNameResponseProtoMsg): QueryRecordsByDistributionNameResponse {
    return QueryRecordsByDistributionNameResponse.decode(message.value);
  },
  toProto(message: QueryRecordsByDistributionNameResponse): Uint8Array {
    return QueryRecordsByDistributionNameResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByDistributionNameResponse): QueryRecordsByDistributionNameResponseProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.QueryRecordsByDistributionNameResponse",
      value: QueryRecordsByDistributionNameResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByRecipientAddrRequest(): QueryRecordsByRecipientAddrRequest {
  return {
    address: ""
  };
}
export const QueryRecordsByRecipientAddrRequest = {
  typeUrl: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrRequest",
  encode(message: QueryRecordsByRecipientAddrRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryRecordsByRecipientAddrRequestAmino): QueryRecordsByRecipientAddrRequest {
    const message = createBaseQueryRecordsByRecipientAddrRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryRecordsByRecipientAddrRequest): QueryRecordsByRecipientAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByRecipientAddrRequestAminoMsg): QueryRecordsByRecipientAddrRequest {
    return QueryRecordsByRecipientAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByRecipientAddrRequestProtoMsg): QueryRecordsByRecipientAddrRequest {
    return QueryRecordsByRecipientAddrRequest.decode(message.value);
  },
  toProto(message: QueryRecordsByRecipientAddrRequest): Uint8Array {
    return QueryRecordsByRecipientAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByRecipientAddrRequest): QueryRecordsByRecipientAddrRequestProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrRequest",
      value: QueryRecordsByRecipientAddrRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRecordsByRecipientAddrResponse(): QueryRecordsByRecipientAddrResponse {
  return {
    distributionRecords: undefined,
    height: BigInt(0)
  };
}
export const QueryRecordsByRecipientAddrResponse = {
  typeUrl: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrResponse",
  encode(message: QueryRecordsByRecipientAddrResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionRecords !== undefined) {
      DistributionRecords.encode(message.distributionRecords, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryRecordsByRecipientAddrResponse {
    return {
      distributionRecords: isSet(object.distributionRecords) ? DistributionRecords.fromJSON(object.distributionRecords) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryRecordsByRecipientAddrResponse>): QueryRecordsByRecipientAddrResponse {
    const message = createBaseQueryRecordsByRecipientAddrResponse();
    message.distributionRecords = object.distributionRecords !== undefined && object.distributionRecords !== null ? DistributionRecords.fromPartial(object.distributionRecords) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRecordsByRecipientAddrResponseAmino): QueryRecordsByRecipientAddrResponse {
    const message = createBaseQueryRecordsByRecipientAddrResponse();
    if (object.distribution_records !== undefined && object.distribution_records !== null) {
      message.distributionRecords = DistributionRecords.fromAmino(object.distribution_records);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryRecordsByRecipientAddrResponse): QueryRecordsByRecipientAddrResponseAmino {
    const obj: any = {};
    obj.distribution_records = message.distributionRecords ? DistributionRecords.toAmino(message.distributionRecords) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRecordsByRecipientAddrResponseAminoMsg): QueryRecordsByRecipientAddrResponse {
    return QueryRecordsByRecipientAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecordsByRecipientAddrResponseProtoMsg): QueryRecordsByRecipientAddrResponse {
    return QueryRecordsByRecipientAddrResponse.decode(message.value);
  },
  toProto(message: QueryRecordsByRecipientAddrResponse): Uint8Array {
    return QueryRecordsByRecipientAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRecordsByRecipientAddrResponse): QueryRecordsByRecipientAddrResponseProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.QueryRecordsByRecipientAddrResponse",
      value: QueryRecordsByRecipientAddrResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsByTypeRequest(): QueryClaimsByTypeRequest {
  return {
    userClaimType: 0
  };
}
export const QueryClaimsByTypeRequest = {
  typeUrl: "/sifnode.dispensation.v1.QueryClaimsByTypeRequest",
  encode(message: QueryClaimsByTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userClaimType !== 0) {
      writer.uint32(8).int32(message.userClaimType);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsByTypeRequest {
    return {
      userClaimType: isSet(object.userClaimType) ? distributionTypeFromJSON(object.userClaimType) : -1
    };
  },
  fromPartial(object: Partial<QueryClaimsByTypeRequest>): QueryClaimsByTypeRequest {
    const message = createBaseQueryClaimsByTypeRequest();
    message.userClaimType = object.userClaimType ?? 0;
    return message;
  },
  fromAmino(object: QueryClaimsByTypeRequestAmino): QueryClaimsByTypeRequest {
    const message = createBaseQueryClaimsByTypeRequest();
    if (object.user_claim_type !== undefined && object.user_claim_type !== null) {
      message.userClaimType = object.user_claim_type;
    }
    return message;
  },
  toAmino(message: QueryClaimsByTypeRequest): QueryClaimsByTypeRequestAmino {
    const obj: any = {};
    obj.user_claim_type = message.userClaimType === 0 ? undefined : message.userClaimType;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsByTypeRequestAminoMsg): QueryClaimsByTypeRequest {
    return QueryClaimsByTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsByTypeRequestProtoMsg): QueryClaimsByTypeRequest {
    return QueryClaimsByTypeRequest.decode(message.value);
  },
  toProto(message: QueryClaimsByTypeRequest): Uint8Array {
    return QueryClaimsByTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsByTypeRequest): QueryClaimsByTypeRequestProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.QueryClaimsByTypeRequest",
      value: QueryClaimsByTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    height: BigInt(0)
  };
}
export const QueryClaimsResponse = {
  typeUrl: "/sifnode.dispensation.v1.QueryClaimsResponse",
  encode(message: QueryClaimsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claims) {
      UserClaim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => UserClaim.fromJSON(e)) : [],
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map(e => UserClaim.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryClaimsResponseAmino): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map(e => UserClaim.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryClaimsResponse): QueryClaimsResponseAmino {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? UserClaim.toAmino(e) : undefined);
    } else {
      obj.claims = message.claims;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsResponseAminoMsg): QueryClaimsResponse {
    return QueryClaimsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsResponseProtoMsg): QueryClaimsResponse {
    return QueryClaimsResponse.decode(message.value);
  },
  toProto(message: QueryClaimsResponse): Uint8Array {
    return QueryClaimsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsResponse): QueryClaimsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.QueryClaimsResponse",
      value: QueryClaimsResponse.encode(message).finish()
    };
  }
};