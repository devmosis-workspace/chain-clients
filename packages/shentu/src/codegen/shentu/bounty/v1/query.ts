import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Program, ProgramAmino, ProgramSDKType, Finding, FindingAmino, FindingSDKType } from "./bounty";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryHostsRequest is the request type for the Query/Hosts RPC method. */
export interface QueryHostsRequest {}
export interface QueryHostsRequestProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryHostsRequest";
  value: Uint8Array;
}
/** QueryHostsRequest is the request type for the Query/Hosts RPC method. */
export interface QueryHostsRequestAmino {}
export interface QueryHostsRequestAminoMsg {
  type: "/shentu.bounty.v1.QueryHostsRequest";
  value: QueryHostsRequestAmino;
}
/** QueryHostsRequest is the request type for the Query/Hosts RPC method. */
export interface QueryHostsRequestSDKType {}
/** QueryHostsResponse is the response type for the Query/Hosts RPC method. */
export interface QueryHostsResponse {}
export interface QueryHostsResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryHostsResponse";
  value: Uint8Array;
}
/** QueryHostsResponse is the response type for the Query/Hosts RPC method. */
export interface QueryHostsResponseAmino {}
export interface QueryHostsResponseAminoMsg {
  type: "/shentu.bounty.v1.QueryHostsResponse";
  value: QueryHostsResponseAmino;
}
/** QueryHostsResponse is the response type for the Query/Hosts RPC method. */
export interface QueryHostsResponseSDKType {}
/** QueryHostRequest is the request type for the Query/Host RPC method. */
export interface QueryHostRequest {
  /** host_addr defines the host address to query for. */
  hostAddr: string;
}
export interface QueryHostRequestProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryHostRequest";
  value: Uint8Array;
}
/** QueryHostRequest is the request type for the Query/Host RPC method. */
export interface QueryHostRequestAmino {
  /** host_addr defines the host address to query for. */
  host_addr?: string;
}
export interface QueryHostRequestAminoMsg {
  type: "/shentu.bounty.v1.QueryHostRequest";
  value: QueryHostRequestAmino;
}
/** QueryHostRequest is the request type for the Query/Host RPC method. */
export interface QueryHostRequestSDKType {
  host_addr: string;
}
/** QueryHostResponse is the response type for the Query/Host RPC method. */
export interface QueryHostResponse {}
export interface QueryHostResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryHostResponse";
  value: Uint8Array;
}
/** QueryHostResponse is the response type for the Query/Host RPC method. */
export interface QueryHostResponseAmino {}
export interface QueryHostResponseAminoMsg {
  type: "/shentu.bounty.v1.QueryHostResponse";
  value: QueryHostResponseAmino;
}
/** QueryHostResponse is the response type for the Query/Host RPC method. */
export interface QueryHostResponseSDKType {}
/** QueryProgramsRequest is the request type for the Query/Programs RPC method. */
export interface QueryProgramsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryProgramsRequestProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryProgramsRequest";
  value: Uint8Array;
}
/** QueryProgramsRequest is the request type for the Query/Programs RPC method. */
export interface QueryProgramsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryProgramsRequestAminoMsg {
  type: "/shentu.bounty.v1.QueryProgramsRequest";
  value: QueryProgramsRequestAmino;
}
/** QueryProgramsRequest is the request type for the Query/Programs RPC method. */
export interface QueryProgramsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryProgramsResponse is the response type for the Query/Programs RPC method. */
export interface QueryProgramsResponse {
  programs: Program[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryProgramsResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryProgramsResponse";
  value: Uint8Array;
}
/** QueryProgramsResponse is the response type for the Query/Programs RPC method. */
export interface QueryProgramsResponseAmino {
  programs?: ProgramAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryProgramsResponseAminoMsg {
  type: "/shentu.bounty.v1.QueryProgramsResponse";
  value: QueryProgramsResponseAmino;
}
/** QueryProgramsResponse is the response type for the Query/Programs RPC method. */
export interface QueryProgramsResponseSDKType {
  programs: ProgramSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProgramRequest is the request type for the Query/Program RPC method. */
export interface QueryProgramRequest {
  /** program_id defines the unique id of the bounty program. */
  programId: string;
}
export interface QueryProgramRequestProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryProgramRequest";
  value: Uint8Array;
}
/** QueryProgramRequest is the request type for the Query/Program RPC method. */
export interface QueryProgramRequestAmino {
  /** program_id defines the unique id of the bounty program. */
  program_id?: string;
}
export interface QueryProgramRequestAminoMsg {
  type: "/shentu.bounty.v1.QueryProgramRequest";
  value: QueryProgramRequestAmino;
}
/** QueryProgramRequest is the request type for the Query/Program RPC method. */
export interface QueryProgramRequestSDKType {
  program_id: string;
}
/** QueryProgramResponse is the response type for the Query/Program RPC method. */
export interface QueryProgramResponse {
  program: Program;
}
export interface QueryProgramResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryProgramResponse";
  value: Uint8Array;
}
/** QueryProgramResponse is the response type for the Query/Program RPC method. */
export interface QueryProgramResponseAmino {
  program?: ProgramAmino;
}
export interface QueryProgramResponseAminoMsg {
  type: "/shentu.bounty.v1.QueryProgramResponse";
  value: QueryProgramResponseAmino;
}
/** QueryProgramResponse is the response type for the Query/Program RPC method. */
export interface QueryProgramResponseSDKType {
  program: ProgramSDKType;
}
/** QueryFindingRequests is the request type for the Query/Findings RPC method. */
export interface QueryFindingsRequest {
  /** program_id defines the unique id of the program. */
  programId: string;
  /** submitter_address defines the find address for the finding. */
  submitterAddress: string;
  /** pagination defines the pagination in the request. */
  pagination?: PageRequest;
}
export interface QueryFindingsRequestProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryFindingsRequest";
  value: Uint8Array;
}
/** QueryFindingRequests is the request type for the Query/Findings RPC method. */
export interface QueryFindingsRequestAmino {
  /** program_id defines the unique id of the program. */
  program_id?: string;
  /** submitter_address defines the find address for the finding. */
  submitter_address?: string;
  /** pagination defines the pagination in the request. */
  pagination?: PageRequestAmino;
}
export interface QueryFindingsRequestAminoMsg {
  type: "/shentu.bounty.v1.QueryFindingsRequest";
  value: QueryFindingsRequestAmino;
}
/** QueryFindingRequests is the request type for the Query/Findings RPC method. */
export interface QueryFindingsRequestSDKType {
  program_id: string;
  submitter_address: string;
  pagination?: PageRequestSDKType;
}
/** QueryFindingsResponse is the response type for the Query/Findings RPC method. */
export interface QueryFindingsResponse {
  findings: Finding[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryFindingsResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryFindingsResponse";
  value: Uint8Array;
}
/** QueryFindingsResponse is the response type for the Query/Findings RPC method. */
export interface QueryFindingsResponseAmino {
  findings?: FindingAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryFindingsResponseAminoMsg {
  type: "/shentu.bounty.v1.QueryFindingsResponse";
  value: QueryFindingsResponseAmino;
}
/** QueryFindingsResponse is the response type for the Query/Findings RPC method. */
export interface QueryFindingsResponseSDKType {
  findings: FindingSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryFindingRequest is the request type for the Query/Finding RPC method. */
export interface QueryFindingRequest {
  /** finding_id defines the unique id of the finding. */
  findingId: string;
}
export interface QueryFindingRequestProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryFindingRequest";
  value: Uint8Array;
}
/** QueryFindingRequest is the request type for the Query/Finding RPC method. */
export interface QueryFindingRequestAmino {
  /** finding_id defines the unique id of the finding. */
  finding_id?: string;
}
export interface QueryFindingRequestAminoMsg {
  type: "/shentu.bounty.v1.QueryFindingRequest";
  value: QueryFindingRequestAmino;
}
/** QueryFindingRequest is the request type for the Query/Finding RPC method. */
export interface QueryFindingRequestSDKType {
  finding_id: string;
}
/** QueryFindingResponse is the response type for the Query/Finding RPC method. */
export interface QueryFindingResponse {
  finding: Finding;
}
export interface QueryFindingResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryFindingResponse";
  value: Uint8Array;
}
/** QueryFindingResponse is the response type for the Query/Finding RPC method. */
export interface QueryFindingResponseAmino {
  finding?: FindingAmino;
}
export interface QueryFindingResponseAminoMsg {
  type: "/shentu.bounty.v1.QueryFindingResponse";
  value: QueryFindingResponseAmino;
}
/** QueryFindingResponse is the response type for the Query/Finding RPC method. */
export interface QueryFindingResponseSDKType {
  finding: FindingSDKType;
}
/** QueryFindingFingerPrint is the request type for the Query/Finding RPC method. */
export interface QueryFindingFingerprintRequest {
  /** finding_id defines the unique id of the finding. */
  findingId: string;
}
export interface QueryFindingFingerprintRequestProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryFindingFingerprintRequest";
  value: Uint8Array;
}
/** QueryFindingFingerPrint is the request type for the Query/Finding RPC method. */
export interface QueryFindingFingerprintRequestAmino {
  /** finding_id defines the unique id of the finding. */
  finding_id?: string;
}
export interface QueryFindingFingerprintRequestAminoMsg {
  type: "/shentu.bounty.v1.QueryFindingFingerprintRequest";
  value: QueryFindingFingerprintRequestAmino;
}
/** QueryFindingFingerPrint is the request type for the Query/Finding RPC method. */
export interface QueryFindingFingerprintRequestSDKType {
  finding_id: string;
}
/** QueryFindingFingerPrintResponse is the response type for the Query/Finding RPC method. */
export interface QueryFindingFingerprintResponse {
  fingerprint: string;
}
export interface QueryFindingFingerprintResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryFindingFingerprintResponse";
  value: Uint8Array;
}
/** QueryFindingFingerPrintResponse is the response type for the Query/Finding RPC method. */
export interface QueryFindingFingerprintResponseAmino {
  fingerprint?: string;
}
export interface QueryFindingFingerprintResponseAminoMsg {
  type: "/shentu.bounty.v1.QueryFindingFingerprintResponse";
  value: QueryFindingFingerprintResponseAmino;
}
/** QueryFindingFingerPrintResponse is the response type for the Query/Finding RPC method. */
export interface QueryFindingFingerprintResponseSDKType {
  fingerprint: string;
}
/** QueryProgramFingerprintRequest is the request type for the Query/Finding RPC method. */
export interface QueryProgramFingerprintRequest {
  /** program_id defines the unique id of the finding. */
  programId: string;
}
export interface QueryProgramFingerprintRequestProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryProgramFingerprintRequest";
  value: Uint8Array;
}
/** QueryProgramFingerprintRequest is the request type for the Query/Finding RPC method. */
export interface QueryProgramFingerprintRequestAmino {
  /** program_id defines the unique id of the finding. */
  program_id?: string;
}
export interface QueryProgramFingerprintRequestAminoMsg {
  type: "/shentu.bounty.v1.QueryProgramFingerprintRequest";
  value: QueryProgramFingerprintRequestAmino;
}
/** QueryProgramFingerprintRequest is the request type for the Query/Finding RPC method. */
export interface QueryProgramFingerprintRequestSDKType {
  program_id: string;
}
/** QueryProgramFingerprintResponse is the response type for the Query/Finding RPC method. */
export interface QueryProgramFingerprintResponse {
  fingerprint: string;
}
export interface QueryProgramFingerprintResponseProtoMsg {
  typeUrl: "/shentu.bounty.v1.QueryProgramFingerprintResponse";
  value: Uint8Array;
}
/** QueryProgramFingerprintResponse is the response type for the Query/Finding RPC method. */
export interface QueryProgramFingerprintResponseAmino {
  fingerprint?: string;
}
export interface QueryProgramFingerprintResponseAminoMsg {
  type: "/shentu.bounty.v1.QueryProgramFingerprintResponse";
  value: QueryProgramFingerprintResponseAmino;
}
/** QueryProgramFingerprintResponse is the response type for the Query/Finding RPC method. */
export interface QueryProgramFingerprintResponseSDKType {
  fingerprint: string;
}
function createBaseQueryHostsRequest(): QueryHostsRequest {
  return {};
}
export const QueryHostsRequest = {
  typeUrl: "/shentu.bounty.v1.QueryHostsRequest",
  encode(_: QueryHostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryHostsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryHostsRequest>): QueryHostsRequest {
    const message = createBaseQueryHostsRequest();
    return message;
  },
  fromAmino(_: QueryHostsRequestAmino): QueryHostsRequest {
    const message = createBaseQueryHostsRequest();
    return message;
  },
  toAmino(_: QueryHostsRequest): QueryHostsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryHostsRequestAminoMsg): QueryHostsRequest {
    return QueryHostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostsRequestProtoMsg): QueryHostsRequest {
    return QueryHostsRequest.decode(message.value);
  },
  toProto(message: QueryHostsRequest): Uint8Array {
    return QueryHostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostsRequest): QueryHostsRequestProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryHostsRequest",
      value: QueryHostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHostsResponse(): QueryHostsResponse {
  return {};
}
export const QueryHostsResponse = {
  typeUrl: "/shentu.bounty.v1.QueryHostsResponse",
  encode(_: QueryHostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryHostsResponse {
    return {};
  },
  fromPartial(_: Partial<QueryHostsResponse>): QueryHostsResponse {
    const message = createBaseQueryHostsResponse();
    return message;
  },
  fromAmino(_: QueryHostsResponseAmino): QueryHostsResponse {
    const message = createBaseQueryHostsResponse();
    return message;
  },
  toAmino(_: QueryHostsResponse): QueryHostsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryHostsResponseAminoMsg): QueryHostsResponse {
    return QueryHostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostsResponseProtoMsg): QueryHostsResponse {
    return QueryHostsResponse.decode(message.value);
  },
  toProto(message: QueryHostsResponse): Uint8Array {
    return QueryHostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostsResponse): QueryHostsResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryHostsResponse",
      value: QueryHostsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHostRequest(): QueryHostRequest {
  return {
    hostAddr: ""
  };
}
export const QueryHostRequest = {
  typeUrl: "/shentu.bounty.v1.QueryHostRequest",
  encode(message: QueryHostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostAddr !== "") {
      writer.uint32(10).string(message.hostAddr);
    }
    return writer;
  },
  fromJSON(object: any): QueryHostRequest {
    return {
      hostAddr: isSet(object.hostAddr) ? String(object.hostAddr) : ""
    };
  },
  fromPartial(object: Partial<QueryHostRequest>): QueryHostRequest {
    const message = createBaseQueryHostRequest();
    message.hostAddr = object.hostAddr ?? "";
    return message;
  },
  fromAmino(object: QueryHostRequestAmino): QueryHostRequest {
    const message = createBaseQueryHostRequest();
    if (object.host_addr !== undefined && object.host_addr !== null) {
      message.hostAddr = object.host_addr;
    }
    return message;
  },
  toAmino(message: QueryHostRequest): QueryHostRequestAmino {
    const obj: any = {};
    obj.host_addr = message.hostAddr === "" ? undefined : message.hostAddr;
    return obj;
  },
  fromAminoMsg(object: QueryHostRequestAminoMsg): QueryHostRequest {
    return QueryHostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostRequestProtoMsg): QueryHostRequest {
    return QueryHostRequest.decode(message.value);
  },
  toProto(message: QueryHostRequest): Uint8Array {
    return QueryHostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostRequest): QueryHostRequestProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryHostRequest",
      value: QueryHostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHostResponse(): QueryHostResponse {
  return {};
}
export const QueryHostResponse = {
  typeUrl: "/shentu.bounty.v1.QueryHostResponse",
  encode(_: QueryHostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryHostResponse {
    return {};
  },
  fromPartial(_: Partial<QueryHostResponse>): QueryHostResponse {
    const message = createBaseQueryHostResponse();
    return message;
  },
  fromAmino(_: QueryHostResponseAmino): QueryHostResponse {
    const message = createBaseQueryHostResponse();
    return message;
  },
  toAmino(_: QueryHostResponse): QueryHostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryHostResponseAminoMsg): QueryHostResponse {
    return QueryHostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostResponseProtoMsg): QueryHostResponse {
    return QueryHostResponse.decode(message.value);
  },
  toProto(message: QueryHostResponse): Uint8Array {
    return QueryHostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostResponse): QueryHostResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryHostResponse",
      value: QueryHostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProgramsRequest(): QueryProgramsRequest {
  return {
    pagination: undefined
  };
}
export const QueryProgramsRequest = {
  typeUrl: "/shentu.bounty.v1.QueryProgramsRequest",
  encode(message: QueryProgramsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProgramsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryProgramsRequest>): QueryProgramsRequest {
    const message = createBaseQueryProgramsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProgramsRequestAmino): QueryProgramsRequest {
    const message = createBaseQueryProgramsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProgramsRequest): QueryProgramsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProgramsRequestAminoMsg): QueryProgramsRequest {
    return QueryProgramsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProgramsRequestProtoMsg): QueryProgramsRequest {
    return QueryProgramsRequest.decode(message.value);
  },
  toProto(message: QueryProgramsRequest): Uint8Array {
    return QueryProgramsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProgramsRequest): QueryProgramsRequestProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryProgramsRequest",
      value: QueryProgramsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProgramsResponse(): QueryProgramsResponse {
  return {
    programs: [],
    pagination: undefined
  };
}
export const QueryProgramsResponse = {
  typeUrl: "/shentu.bounty.v1.QueryProgramsResponse",
  encode(message: QueryProgramsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.programs) {
      Program.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProgramsResponse {
    return {
      programs: Array.isArray(object?.programs) ? object.programs.map((e: any) => Program.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryProgramsResponse>): QueryProgramsResponse {
    const message = createBaseQueryProgramsResponse();
    message.programs = object.programs?.map(e => Program.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProgramsResponseAmino): QueryProgramsResponse {
    const message = createBaseQueryProgramsResponse();
    message.programs = object.programs?.map(e => Program.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProgramsResponse): QueryProgramsResponseAmino {
    const obj: any = {};
    if (message.programs) {
      obj.programs = message.programs.map(e => e ? Program.toAmino(e) : undefined);
    } else {
      obj.programs = message.programs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProgramsResponseAminoMsg): QueryProgramsResponse {
    return QueryProgramsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProgramsResponseProtoMsg): QueryProgramsResponse {
    return QueryProgramsResponse.decode(message.value);
  },
  toProto(message: QueryProgramsResponse): Uint8Array {
    return QueryProgramsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProgramsResponse): QueryProgramsResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryProgramsResponse",
      value: QueryProgramsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProgramRequest(): QueryProgramRequest {
  return {
    programId: ""
  };
}
export const QueryProgramRequest = {
  typeUrl: "/shentu.bounty.v1.QueryProgramRequest",
  encode(message: QueryProgramRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    return writer;
  },
  fromJSON(object: any): QueryProgramRequest {
    return {
      programId: isSet(object.programId) ? String(object.programId) : ""
    };
  },
  fromPartial(object: Partial<QueryProgramRequest>): QueryProgramRequest {
    const message = createBaseQueryProgramRequest();
    message.programId = object.programId ?? "";
    return message;
  },
  fromAmino(object: QueryProgramRequestAmino): QueryProgramRequest {
    const message = createBaseQueryProgramRequest();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    return message;
  },
  toAmino(message: QueryProgramRequest): QueryProgramRequestAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    return obj;
  },
  fromAminoMsg(object: QueryProgramRequestAminoMsg): QueryProgramRequest {
    return QueryProgramRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProgramRequestProtoMsg): QueryProgramRequest {
    return QueryProgramRequest.decode(message.value);
  },
  toProto(message: QueryProgramRequest): Uint8Array {
    return QueryProgramRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProgramRequest): QueryProgramRequestProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryProgramRequest",
      value: QueryProgramRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProgramResponse(): QueryProgramResponse {
  return {
    program: Program.fromPartial({})
  };
}
export const QueryProgramResponse = {
  typeUrl: "/shentu.bounty.v1.QueryProgramResponse",
  encode(message: QueryProgramResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== undefined) {
      Program.encode(message.program, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryProgramResponse {
    return {
      program: isSet(object.program) ? Program.fromJSON(object.program) : undefined
    };
  },
  fromPartial(object: Partial<QueryProgramResponse>): QueryProgramResponse {
    const message = createBaseQueryProgramResponse();
    message.program = object.program !== undefined && object.program !== null ? Program.fromPartial(object.program) : undefined;
    return message;
  },
  fromAmino(object: QueryProgramResponseAmino): QueryProgramResponse {
    const message = createBaseQueryProgramResponse();
    if (object.program !== undefined && object.program !== null) {
      message.program = Program.fromAmino(object.program);
    }
    return message;
  },
  toAmino(message: QueryProgramResponse): QueryProgramResponseAmino {
    const obj: any = {};
    obj.program = message.program ? Program.toAmino(message.program) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProgramResponseAminoMsg): QueryProgramResponse {
    return QueryProgramResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProgramResponseProtoMsg): QueryProgramResponse {
    return QueryProgramResponse.decode(message.value);
  },
  toProto(message: QueryProgramResponse): Uint8Array {
    return QueryProgramResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProgramResponse): QueryProgramResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryProgramResponse",
      value: QueryProgramResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFindingsRequest(): QueryFindingsRequest {
  return {
    programId: "",
    submitterAddress: "",
    pagination: undefined
  };
}
export const QueryFindingsRequest = {
  typeUrl: "/shentu.bounty.v1.QueryFindingsRequest",
  encode(message: QueryFindingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.submitterAddress !== "") {
      writer.uint32(18).string(message.submitterAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFindingsRequest {
    return {
      programId: isSet(object.programId) ? String(object.programId) : "",
      submitterAddress: isSet(object.submitterAddress) ? String(object.submitterAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryFindingsRequest>): QueryFindingsRequest {
    const message = createBaseQueryFindingsRequest();
    message.programId = object.programId ?? "";
    message.submitterAddress = object.submitterAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFindingsRequestAmino): QueryFindingsRequest {
    const message = createBaseQueryFindingsRequest();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    if (object.submitter_address !== undefined && object.submitter_address !== null) {
      message.submitterAddress = object.submitter_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFindingsRequest): QueryFindingsRequestAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    obj.submitter_address = message.submitterAddress === "" ? undefined : message.submitterAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFindingsRequestAminoMsg): QueryFindingsRequest {
    return QueryFindingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFindingsRequestProtoMsg): QueryFindingsRequest {
    return QueryFindingsRequest.decode(message.value);
  },
  toProto(message: QueryFindingsRequest): Uint8Array {
    return QueryFindingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFindingsRequest): QueryFindingsRequestProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryFindingsRequest",
      value: QueryFindingsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFindingsResponse(): QueryFindingsResponse {
  return {
    findings: [],
    pagination: undefined
  };
}
export const QueryFindingsResponse = {
  typeUrl: "/shentu.bounty.v1.QueryFindingsResponse",
  encode(message: QueryFindingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.findings) {
      Finding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFindingsResponse {
    return {
      findings: Array.isArray(object?.findings) ? object.findings.map((e: any) => Finding.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryFindingsResponse>): QueryFindingsResponse {
    const message = createBaseQueryFindingsResponse();
    message.findings = object.findings?.map(e => Finding.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFindingsResponseAmino): QueryFindingsResponse {
    const message = createBaseQueryFindingsResponse();
    message.findings = object.findings?.map(e => Finding.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFindingsResponse): QueryFindingsResponseAmino {
    const obj: any = {};
    if (message.findings) {
      obj.findings = message.findings.map(e => e ? Finding.toAmino(e) : undefined);
    } else {
      obj.findings = message.findings;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFindingsResponseAminoMsg): QueryFindingsResponse {
    return QueryFindingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFindingsResponseProtoMsg): QueryFindingsResponse {
    return QueryFindingsResponse.decode(message.value);
  },
  toProto(message: QueryFindingsResponse): Uint8Array {
    return QueryFindingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFindingsResponse): QueryFindingsResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryFindingsResponse",
      value: QueryFindingsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFindingRequest(): QueryFindingRequest {
  return {
    findingId: ""
  };
}
export const QueryFindingRequest = {
  typeUrl: "/shentu.bounty.v1.QueryFindingRequest",
  encode(message: QueryFindingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.findingId !== "") {
      writer.uint32(10).string(message.findingId);
    }
    return writer;
  },
  fromJSON(object: any): QueryFindingRequest {
    return {
      findingId: isSet(object.findingId) ? String(object.findingId) : ""
    };
  },
  fromPartial(object: Partial<QueryFindingRequest>): QueryFindingRequest {
    const message = createBaseQueryFindingRequest();
    message.findingId = object.findingId ?? "";
    return message;
  },
  fromAmino(object: QueryFindingRequestAmino): QueryFindingRequest {
    const message = createBaseQueryFindingRequest();
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    return message;
  },
  toAmino(message: QueryFindingRequest): QueryFindingRequestAmino {
    const obj: any = {};
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    return obj;
  },
  fromAminoMsg(object: QueryFindingRequestAminoMsg): QueryFindingRequest {
    return QueryFindingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFindingRequestProtoMsg): QueryFindingRequest {
    return QueryFindingRequest.decode(message.value);
  },
  toProto(message: QueryFindingRequest): Uint8Array {
    return QueryFindingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFindingRequest): QueryFindingRequestProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryFindingRequest",
      value: QueryFindingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFindingResponse(): QueryFindingResponse {
  return {
    finding: Finding.fromPartial({})
  };
}
export const QueryFindingResponse = {
  typeUrl: "/shentu.bounty.v1.QueryFindingResponse",
  encode(message: QueryFindingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.finding !== undefined) {
      Finding.encode(message.finding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFindingResponse {
    return {
      finding: isSet(object.finding) ? Finding.fromJSON(object.finding) : undefined
    };
  },
  fromPartial(object: Partial<QueryFindingResponse>): QueryFindingResponse {
    const message = createBaseQueryFindingResponse();
    message.finding = object.finding !== undefined && object.finding !== null ? Finding.fromPartial(object.finding) : undefined;
    return message;
  },
  fromAmino(object: QueryFindingResponseAmino): QueryFindingResponse {
    const message = createBaseQueryFindingResponse();
    if (object.finding !== undefined && object.finding !== null) {
      message.finding = Finding.fromAmino(object.finding);
    }
    return message;
  },
  toAmino(message: QueryFindingResponse): QueryFindingResponseAmino {
    const obj: any = {};
    obj.finding = message.finding ? Finding.toAmino(message.finding) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFindingResponseAminoMsg): QueryFindingResponse {
    return QueryFindingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFindingResponseProtoMsg): QueryFindingResponse {
    return QueryFindingResponse.decode(message.value);
  },
  toProto(message: QueryFindingResponse): Uint8Array {
    return QueryFindingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFindingResponse): QueryFindingResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryFindingResponse",
      value: QueryFindingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFindingFingerprintRequest(): QueryFindingFingerprintRequest {
  return {
    findingId: ""
  };
}
export const QueryFindingFingerprintRequest = {
  typeUrl: "/shentu.bounty.v1.QueryFindingFingerprintRequest",
  encode(message: QueryFindingFingerprintRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.findingId !== "") {
      writer.uint32(10).string(message.findingId);
    }
    return writer;
  },
  fromJSON(object: any): QueryFindingFingerprintRequest {
    return {
      findingId: isSet(object.findingId) ? String(object.findingId) : ""
    };
  },
  fromPartial(object: Partial<QueryFindingFingerprintRequest>): QueryFindingFingerprintRequest {
    const message = createBaseQueryFindingFingerprintRequest();
    message.findingId = object.findingId ?? "";
    return message;
  },
  fromAmino(object: QueryFindingFingerprintRequestAmino): QueryFindingFingerprintRequest {
    const message = createBaseQueryFindingFingerprintRequest();
    if (object.finding_id !== undefined && object.finding_id !== null) {
      message.findingId = object.finding_id;
    }
    return message;
  },
  toAmino(message: QueryFindingFingerprintRequest): QueryFindingFingerprintRequestAmino {
    const obj: any = {};
    obj.finding_id = message.findingId === "" ? undefined : message.findingId;
    return obj;
  },
  fromAminoMsg(object: QueryFindingFingerprintRequestAminoMsg): QueryFindingFingerprintRequest {
    return QueryFindingFingerprintRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFindingFingerprintRequestProtoMsg): QueryFindingFingerprintRequest {
    return QueryFindingFingerprintRequest.decode(message.value);
  },
  toProto(message: QueryFindingFingerprintRequest): Uint8Array {
    return QueryFindingFingerprintRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFindingFingerprintRequest): QueryFindingFingerprintRequestProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryFindingFingerprintRequest",
      value: QueryFindingFingerprintRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFindingFingerprintResponse(): QueryFindingFingerprintResponse {
  return {
    fingerprint: ""
  };
}
export const QueryFindingFingerprintResponse = {
  typeUrl: "/shentu.bounty.v1.QueryFindingFingerprintResponse",
  encode(message: QueryFindingFingerprintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fingerprint !== "") {
      writer.uint32(10).string(message.fingerprint);
    }
    return writer;
  },
  fromJSON(object: any): QueryFindingFingerprintResponse {
    return {
      fingerprint: isSet(object.fingerprint) ? String(object.fingerprint) : ""
    };
  },
  fromPartial(object: Partial<QueryFindingFingerprintResponse>): QueryFindingFingerprintResponse {
    const message = createBaseQueryFindingFingerprintResponse();
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
  fromAmino(object: QueryFindingFingerprintResponseAmino): QueryFindingFingerprintResponse {
    const message = createBaseQueryFindingFingerprintResponse();
    if (object.fingerprint !== undefined && object.fingerprint !== null) {
      message.fingerprint = object.fingerprint;
    }
    return message;
  },
  toAmino(message: QueryFindingFingerprintResponse): QueryFindingFingerprintResponseAmino {
    const obj: any = {};
    obj.fingerprint = message.fingerprint === "" ? undefined : message.fingerprint;
    return obj;
  },
  fromAminoMsg(object: QueryFindingFingerprintResponseAminoMsg): QueryFindingFingerprintResponse {
    return QueryFindingFingerprintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFindingFingerprintResponseProtoMsg): QueryFindingFingerprintResponse {
    return QueryFindingFingerprintResponse.decode(message.value);
  },
  toProto(message: QueryFindingFingerprintResponse): Uint8Array {
    return QueryFindingFingerprintResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFindingFingerprintResponse): QueryFindingFingerprintResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryFindingFingerprintResponse",
      value: QueryFindingFingerprintResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProgramFingerprintRequest(): QueryProgramFingerprintRequest {
  return {
    programId: ""
  };
}
export const QueryProgramFingerprintRequest = {
  typeUrl: "/shentu.bounty.v1.QueryProgramFingerprintRequest",
  encode(message: QueryProgramFingerprintRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    return writer;
  },
  fromJSON(object: any): QueryProgramFingerprintRequest {
    return {
      programId: isSet(object.programId) ? String(object.programId) : ""
    };
  },
  fromPartial(object: Partial<QueryProgramFingerprintRequest>): QueryProgramFingerprintRequest {
    const message = createBaseQueryProgramFingerprintRequest();
    message.programId = object.programId ?? "";
    return message;
  },
  fromAmino(object: QueryProgramFingerprintRequestAmino): QueryProgramFingerprintRequest {
    const message = createBaseQueryProgramFingerprintRequest();
    if (object.program_id !== undefined && object.program_id !== null) {
      message.programId = object.program_id;
    }
    return message;
  },
  toAmino(message: QueryProgramFingerprintRequest): QueryProgramFingerprintRequestAmino {
    const obj: any = {};
    obj.program_id = message.programId === "" ? undefined : message.programId;
    return obj;
  },
  fromAminoMsg(object: QueryProgramFingerprintRequestAminoMsg): QueryProgramFingerprintRequest {
    return QueryProgramFingerprintRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProgramFingerprintRequestProtoMsg): QueryProgramFingerprintRequest {
    return QueryProgramFingerprintRequest.decode(message.value);
  },
  toProto(message: QueryProgramFingerprintRequest): Uint8Array {
    return QueryProgramFingerprintRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProgramFingerprintRequest): QueryProgramFingerprintRequestProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryProgramFingerprintRequest",
      value: QueryProgramFingerprintRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProgramFingerprintResponse(): QueryProgramFingerprintResponse {
  return {
    fingerprint: ""
  };
}
export const QueryProgramFingerprintResponse = {
  typeUrl: "/shentu.bounty.v1.QueryProgramFingerprintResponse",
  encode(message: QueryProgramFingerprintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fingerprint !== "") {
      writer.uint32(10).string(message.fingerprint);
    }
    return writer;
  },
  fromJSON(object: any): QueryProgramFingerprintResponse {
    return {
      fingerprint: isSet(object.fingerprint) ? String(object.fingerprint) : ""
    };
  },
  fromPartial(object: Partial<QueryProgramFingerprintResponse>): QueryProgramFingerprintResponse {
    const message = createBaseQueryProgramFingerprintResponse();
    message.fingerprint = object.fingerprint ?? "";
    return message;
  },
  fromAmino(object: QueryProgramFingerprintResponseAmino): QueryProgramFingerprintResponse {
    const message = createBaseQueryProgramFingerprintResponse();
    if (object.fingerprint !== undefined && object.fingerprint !== null) {
      message.fingerprint = object.fingerprint;
    }
    return message;
  },
  toAmino(message: QueryProgramFingerprintResponse): QueryProgramFingerprintResponseAmino {
    const obj: any = {};
    obj.fingerprint = message.fingerprint === "" ? undefined : message.fingerprint;
    return obj;
  },
  fromAminoMsg(object: QueryProgramFingerprintResponseAminoMsg): QueryProgramFingerprintResponse {
    return QueryProgramFingerprintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProgramFingerprintResponseProtoMsg): QueryProgramFingerprintResponse {
    return QueryProgramFingerprintResponse.decode(message.value);
  },
  toProto(message: QueryProgramFingerprintResponse): Uint8Array {
    return QueryProgramFingerprintResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProgramFingerprintResponse): QueryProgramFingerprintResponseProtoMsg {
    return {
      typeUrl: "/shentu.bounty.v1.QueryProgramFingerprintResponse",
      value: QueryProgramFingerprintResponse.encode(message).finish()
    };
  }
};