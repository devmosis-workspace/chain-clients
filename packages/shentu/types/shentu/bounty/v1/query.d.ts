import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Program, ProgramAmino, ProgramSDKType, Finding, FindingAmino, FindingSDKType } from "./bounty";
import { BinaryWriter } from "../../../binary";
/** QueryHostsRequest is the request type for the Query/Hosts RPC method. */
export interface QueryHostsRequest {
}
export interface QueryHostsRequestProtoMsg {
    typeUrl: "/shentu.bounty.v1.QueryHostsRequest";
    value: Uint8Array;
}
/** QueryHostsRequest is the request type for the Query/Hosts RPC method. */
export interface QueryHostsRequestAmino {
}
export interface QueryHostsRequestAminoMsg {
    type: "/shentu.bounty.v1.QueryHostsRequest";
    value: QueryHostsRequestAmino;
}
/** QueryHostsRequest is the request type for the Query/Hosts RPC method. */
export interface QueryHostsRequestSDKType {
}
/** QueryHostsResponse is the response type for the Query/Hosts RPC method. */
export interface QueryHostsResponse {
}
export interface QueryHostsResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.QueryHostsResponse";
    value: Uint8Array;
}
/** QueryHostsResponse is the response type for the Query/Hosts RPC method. */
export interface QueryHostsResponseAmino {
}
export interface QueryHostsResponseAminoMsg {
    type: "/shentu.bounty.v1.QueryHostsResponse";
    value: QueryHostsResponseAmino;
}
/** QueryHostsResponse is the response type for the Query/Hosts RPC method. */
export interface QueryHostsResponseSDKType {
}
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
export interface QueryHostResponse {
}
export interface QueryHostResponseProtoMsg {
    typeUrl: "/shentu.bounty.v1.QueryHostResponse";
    value: Uint8Array;
}
/** QueryHostResponse is the response type for the Query/Host RPC method. */
export interface QueryHostResponseAmino {
}
export interface QueryHostResponseAminoMsg {
    type: "/shentu.bounty.v1.QueryHostResponse";
    value: QueryHostResponseAmino;
}
/** QueryHostResponse is the response type for the Query/Host RPC method. */
export interface QueryHostResponseSDKType {
}
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
export declare const QueryHostsRequest: {
    typeUrl: string;
    encode(_: QueryHostsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryHostsRequest;
    fromPartial(_: Partial<QueryHostsRequest>): QueryHostsRequest;
    fromAmino(_: QueryHostsRequestAmino): QueryHostsRequest;
    toAmino(_: QueryHostsRequest): QueryHostsRequestAmino;
    fromAminoMsg(object: QueryHostsRequestAminoMsg): QueryHostsRequest;
    fromProtoMsg(message: QueryHostsRequestProtoMsg): QueryHostsRequest;
    toProto(message: QueryHostsRequest): Uint8Array;
    toProtoMsg(message: QueryHostsRequest): QueryHostsRequestProtoMsg;
};
export declare const QueryHostsResponse: {
    typeUrl: string;
    encode(_: QueryHostsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryHostsResponse;
    fromPartial(_: Partial<QueryHostsResponse>): QueryHostsResponse;
    fromAmino(_: QueryHostsResponseAmino): QueryHostsResponse;
    toAmino(_: QueryHostsResponse): QueryHostsResponseAmino;
    fromAminoMsg(object: QueryHostsResponseAminoMsg): QueryHostsResponse;
    fromProtoMsg(message: QueryHostsResponseProtoMsg): QueryHostsResponse;
    toProto(message: QueryHostsResponse): Uint8Array;
    toProtoMsg(message: QueryHostsResponse): QueryHostsResponseProtoMsg;
};
export declare const QueryHostRequest: {
    typeUrl: string;
    encode(message: QueryHostRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryHostRequest;
    fromPartial(object: Partial<QueryHostRequest>): QueryHostRequest;
    fromAmino(object: QueryHostRequestAmino): QueryHostRequest;
    toAmino(message: QueryHostRequest): QueryHostRequestAmino;
    fromAminoMsg(object: QueryHostRequestAminoMsg): QueryHostRequest;
    fromProtoMsg(message: QueryHostRequestProtoMsg): QueryHostRequest;
    toProto(message: QueryHostRequest): Uint8Array;
    toProtoMsg(message: QueryHostRequest): QueryHostRequestProtoMsg;
};
export declare const QueryHostResponse: {
    typeUrl: string;
    encode(_: QueryHostResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryHostResponse;
    fromPartial(_: Partial<QueryHostResponse>): QueryHostResponse;
    fromAmino(_: QueryHostResponseAmino): QueryHostResponse;
    toAmino(_: QueryHostResponse): QueryHostResponseAmino;
    fromAminoMsg(object: QueryHostResponseAminoMsg): QueryHostResponse;
    fromProtoMsg(message: QueryHostResponseProtoMsg): QueryHostResponse;
    toProto(message: QueryHostResponse): Uint8Array;
    toProtoMsg(message: QueryHostResponse): QueryHostResponseProtoMsg;
};
export declare const QueryProgramsRequest: {
    typeUrl: string;
    encode(message: QueryProgramsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProgramsRequest;
    fromPartial(object: Partial<QueryProgramsRequest>): QueryProgramsRequest;
    fromAmino(object: QueryProgramsRequestAmino): QueryProgramsRequest;
    toAmino(message: QueryProgramsRequest): QueryProgramsRequestAmino;
    fromAminoMsg(object: QueryProgramsRequestAminoMsg): QueryProgramsRequest;
    fromProtoMsg(message: QueryProgramsRequestProtoMsg): QueryProgramsRequest;
    toProto(message: QueryProgramsRequest): Uint8Array;
    toProtoMsg(message: QueryProgramsRequest): QueryProgramsRequestProtoMsg;
};
export declare const QueryProgramsResponse: {
    typeUrl: string;
    encode(message: QueryProgramsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProgramsResponse;
    fromPartial(object: Partial<QueryProgramsResponse>): QueryProgramsResponse;
    fromAmino(object: QueryProgramsResponseAmino): QueryProgramsResponse;
    toAmino(message: QueryProgramsResponse): QueryProgramsResponseAmino;
    fromAminoMsg(object: QueryProgramsResponseAminoMsg): QueryProgramsResponse;
    fromProtoMsg(message: QueryProgramsResponseProtoMsg): QueryProgramsResponse;
    toProto(message: QueryProgramsResponse): Uint8Array;
    toProtoMsg(message: QueryProgramsResponse): QueryProgramsResponseProtoMsg;
};
export declare const QueryProgramRequest: {
    typeUrl: string;
    encode(message: QueryProgramRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProgramRequest;
    fromPartial(object: Partial<QueryProgramRequest>): QueryProgramRequest;
    fromAmino(object: QueryProgramRequestAmino): QueryProgramRequest;
    toAmino(message: QueryProgramRequest): QueryProgramRequestAmino;
    fromAminoMsg(object: QueryProgramRequestAminoMsg): QueryProgramRequest;
    fromProtoMsg(message: QueryProgramRequestProtoMsg): QueryProgramRequest;
    toProto(message: QueryProgramRequest): Uint8Array;
    toProtoMsg(message: QueryProgramRequest): QueryProgramRequestProtoMsg;
};
export declare const QueryProgramResponse: {
    typeUrl: string;
    encode(message: QueryProgramResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProgramResponse;
    fromPartial(object: Partial<QueryProgramResponse>): QueryProgramResponse;
    fromAmino(object: QueryProgramResponseAmino): QueryProgramResponse;
    toAmino(message: QueryProgramResponse): QueryProgramResponseAmino;
    fromAminoMsg(object: QueryProgramResponseAminoMsg): QueryProgramResponse;
    fromProtoMsg(message: QueryProgramResponseProtoMsg): QueryProgramResponse;
    toProto(message: QueryProgramResponse): Uint8Array;
    toProtoMsg(message: QueryProgramResponse): QueryProgramResponseProtoMsg;
};
export declare const QueryFindingsRequest: {
    typeUrl: string;
    encode(message: QueryFindingsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFindingsRequest;
    fromPartial(object: Partial<QueryFindingsRequest>): QueryFindingsRequest;
    fromAmino(object: QueryFindingsRequestAmino): QueryFindingsRequest;
    toAmino(message: QueryFindingsRequest): QueryFindingsRequestAmino;
    fromAminoMsg(object: QueryFindingsRequestAminoMsg): QueryFindingsRequest;
    fromProtoMsg(message: QueryFindingsRequestProtoMsg): QueryFindingsRequest;
    toProto(message: QueryFindingsRequest): Uint8Array;
    toProtoMsg(message: QueryFindingsRequest): QueryFindingsRequestProtoMsg;
};
export declare const QueryFindingsResponse: {
    typeUrl: string;
    encode(message: QueryFindingsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFindingsResponse;
    fromPartial(object: Partial<QueryFindingsResponse>): QueryFindingsResponse;
    fromAmino(object: QueryFindingsResponseAmino): QueryFindingsResponse;
    toAmino(message: QueryFindingsResponse): QueryFindingsResponseAmino;
    fromAminoMsg(object: QueryFindingsResponseAminoMsg): QueryFindingsResponse;
    fromProtoMsg(message: QueryFindingsResponseProtoMsg): QueryFindingsResponse;
    toProto(message: QueryFindingsResponse): Uint8Array;
    toProtoMsg(message: QueryFindingsResponse): QueryFindingsResponseProtoMsg;
};
export declare const QueryFindingRequest: {
    typeUrl: string;
    encode(message: QueryFindingRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFindingRequest;
    fromPartial(object: Partial<QueryFindingRequest>): QueryFindingRequest;
    fromAmino(object: QueryFindingRequestAmino): QueryFindingRequest;
    toAmino(message: QueryFindingRequest): QueryFindingRequestAmino;
    fromAminoMsg(object: QueryFindingRequestAminoMsg): QueryFindingRequest;
    fromProtoMsg(message: QueryFindingRequestProtoMsg): QueryFindingRequest;
    toProto(message: QueryFindingRequest): Uint8Array;
    toProtoMsg(message: QueryFindingRequest): QueryFindingRequestProtoMsg;
};
export declare const QueryFindingResponse: {
    typeUrl: string;
    encode(message: QueryFindingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFindingResponse;
    fromPartial(object: Partial<QueryFindingResponse>): QueryFindingResponse;
    fromAmino(object: QueryFindingResponseAmino): QueryFindingResponse;
    toAmino(message: QueryFindingResponse): QueryFindingResponseAmino;
    fromAminoMsg(object: QueryFindingResponseAminoMsg): QueryFindingResponse;
    fromProtoMsg(message: QueryFindingResponseProtoMsg): QueryFindingResponse;
    toProto(message: QueryFindingResponse): Uint8Array;
    toProtoMsg(message: QueryFindingResponse): QueryFindingResponseProtoMsg;
};
export declare const QueryFindingFingerprintRequest: {
    typeUrl: string;
    encode(message: QueryFindingFingerprintRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFindingFingerprintRequest;
    fromPartial(object: Partial<QueryFindingFingerprintRequest>): QueryFindingFingerprintRequest;
    fromAmino(object: QueryFindingFingerprintRequestAmino): QueryFindingFingerprintRequest;
    toAmino(message: QueryFindingFingerprintRequest): QueryFindingFingerprintRequestAmino;
    fromAminoMsg(object: QueryFindingFingerprintRequestAminoMsg): QueryFindingFingerprintRequest;
    fromProtoMsg(message: QueryFindingFingerprintRequestProtoMsg): QueryFindingFingerprintRequest;
    toProto(message: QueryFindingFingerprintRequest): Uint8Array;
    toProtoMsg(message: QueryFindingFingerprintRequest): QueryFindingFingerprintRequestProtoMsg;
};
export declare const QueryFindingFingerprintResponse: {
    typeUrl: string;
    encode(message: QueryFindingFingerprintResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFindingFingerprintResponse;
    fromPartial(object: Partial<QueryFindingFingerprintResponse>): QueryFindingFingerprintResponse;
    fromAmino(object: QueryFindingFingerprintResponseAmino): QueryFindingFingerprintResponse;
    toAmino(message: QueryFindingFingerprintResponse): QueryFindingFingerprintResponseAmino;
    fromAminoMsg(object: QueryFindingFingerprintResponseAminoMsg): QueryFindingFingerprintResponse;
    fromProtoMsg(message: QueryFindingFingerprintResponseProtoMsg): QueryFindingFingerprintResponse;
    toProto(message: QueryFindingFingerprintResponse): Uint8Array;
    toProtoMsg(message: QueryFindingFingerprintResponse): QueryFindingFingerprintResponseProtoMsg;
};
export declare const QueryProgramFingerprintRequest: {
    typeUrl: string;
    encode(message: QueryProgramFingerprintRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProgramFingerprintRequest;
    fromPartial(object: Partial<QueryProgramFingerprintRequest>): QueryProgramFingerprintRequest;
    fromAmino(object: QueryProgramFingerprintRequestAmino): QueryProgramFingerprintRequest;
    toAmino(message: QueryProgramFingerprintRequest): QueryProgramFingerprintRequestAmino;
    fromAminoMsg(object: QueryProgramFingerprintRequestAminoMsg): QueryProgramFingerprintRequest;
    fromProtoMsg(message: QueryProgramFingerprintRequestProtoMsg): QueryProgramFingerprintRequest;
    toProto(message: QueryProgramFingerprintRequest): Uint8Array;
    toProtoMsg(message: QueryProgramFingerprintRequest): QueryProgramFingerprintRequestProtoMsg;
};
export declare const QueryProgramFingerprintResponse: {
    typeUrl: string;
    encode(message: QueryProgramFingerprintResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryProgramFingerprintResponse;
    fromPartial(object: Partial<QueryProgramFingerprintResponse>): QueryProgramFingerprintResponse;
    fromAmino(object: QueryProgramFingerprintResponseAmino): QueryProgramFingerprintResponse;
    toAmino(message: QueryProgramFingerprintResponse): QueryProgramFingerprintResponseAmino;
    fromAminoMsg(object: QueryProgramFingerprintResponseAminoMsg): QueryProgramFingerprintResponse;
    fromProtoMsg(message: QueryProgramFingerprintResponseProtoMsg): QueryProgramFingerprintResponse;
    toProto(message: QueryProgramFingerprintResponse): Uint8Array;
    toProtoMsg(message: QueryProgramFingerprintResponse): QueryProgramFingerprintResponseProtoMsg;
};
