import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Sequencer, SequencerAmino, SequencerSDKType } from "./sequencer";
import { OperatingStatus } from "./operating_status";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Scheduler, SchedulerAmino, SchedulerSDKType } from "./scheduler";
import { BinaryWriter } from "../../binary";
/** SequencerInfo holds information for user query. */
export interface SequencerInfo {
    /** basic sequencer info */
    sequencer: Sequencer;
    /** sequencers' operating status */
    status: OperatingStatus;
}
export interface SequencerInfoProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.SequencerInfo";
    value: Uint8Array;
}
/** SequencerInfo holds information for user query. */
export interface SequencerInfoAmino {
    /** basic sequencer info */
    sequencer?: SequencerAmino;
    /** sequencers' operating status */
    status?: OperatingStatus;
}
export interface SequencerInfoAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.SequencerInfo";
    value: SequencerInfoAmino;
}
/** SequencerInfo holds information for user query. */
export interface SequencerInfoSDKType {
    sequencer: SequencerSDKType;
    status: OperatingStatus;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetSequencerRequest {
    sequencerAddress: string;
}
export interface QueryGetSequencerRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencerRequest";
    value: Uint8Array;
}
export interface QueryGetSequencerRequestAmino {
    sequencerAddress?: string;
}
export interface QueryGetSequencerRequestAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryGetSequencerRequest";
    value: QueryGetSequencerRequestAmino;
}
export interface QueryGetSequencerRequestSDKType {
    sequencerAddress: string;
}
export interface QueryGetSequencerResponse {
    sequencerInfo: SequencerInfo;
}
export interface QueryGetSequencerResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencerResponse";
    value: Uint8Array;
}
export interface QueryGetSequencerResponseAmino {
    sequencerInfo?: SequencerInfoAmino;
}
export interface QueryGetSequencerResponseAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryGetSequencerResponse";
    value: QueryGetSequencerResponseAmino;
}
export interface QueryGetSequencerResponseSDKType {
    sequencerInfo: SequencerInfoSDKType;
}
export interface QueryAllSequencerRequest {
    pagination?: PageRequest;
}
export interface QueryAllSequencerRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencerRequest";
    value: Uint8Array;
}
export interface QueryAllSequencerRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllSequencerRequestAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryAllSequencerRequest";
    value: QueryAllSequencerRequestAmino;
}
export interface QueryAllSequencerRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllSequencerResponse {
    sequencerInfoList: SequencerInfo[];
    pagination?: PageResponse;
}
export interface QueryAllSequencerResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencerResponse";
    value: Uint8Array;
}
export interface QueryAllSequencerResponseAmino {
    sequencerInfoList?: SequencerInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllSequencerResponseAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryAllSequencerResponse";
    value: QueryAllSequencerResponseAmino;
}
export interface QueryAllSequencerResponseSDKType {
    sequencerInfoList: SequencerInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetSequencersByRollappRequest {
    rollappId: string;
}
export interface QueryGetSequencersByRollappRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappRequest";
    value: Uint8Array;
}
export interface QueryGetSequencersByRollappRequestAmino {
    rollappId?: string;
}
export interface QueryGetSequencersByRollappRequestAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappRequest";
    value: QueryGetSequencersByRollappRequestAmino;
}
export interface QueryGetSequencersByRollappRequestSDKType {
    rollappId: string;
}
export interface QueryGetSequencersByRollappResponse {
    rollappId: string;
    sequencerInfoList: SequencerInfo[];
}
export interface QueryGetSequencersByRollappResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappResponse";
    value: Uint8Array;
}
export interface QueryGetSequencersByRollappResponseAmino {
    rollappId?: string;
    sequencerInfoList?: SequencerInfoAmino[];
}
export interface QueryGetSequencersByRollappResponseAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryGetSequencersByRollappResponse";
    value: QueryGetSequencersByRollappResponseAmino;
}
export interface QueryGetSequencersByRollappResponseSDKType {
    rollappId: string;
    sequencerInfoList: SequencerInfoSDKType[];
}
export interface QueryAllSequencersByRollappRequest {
    pagination?: PageRequest;
}
export interface QueryAllSequencersByRollappRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappRequest";
    value: Uint8Array;
}
export interface QueryAllSequencersByRollappRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllSequencersByRollappRequestAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappRequest";
    value: QueryAllSequencersByRollappRequestAmino;
}
export interface QueryAllSequencersByRollappRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllSequencersByRollappResponse {
    sequencersByRollapp: QueryGetSequencersByRollappResponse[];
    pagination?: PageResponse;
}
export interface QueryAllSequencersByRollappResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappResponse";
    value: Uint8Array;
}
export interface QueryAllSequencersByRollappResponseAmino {
    sequencersByRollapp?: QueryGetSequencersByRollappResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllSequencersByRollappResponseAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryAllSequencersByRollappResponse";
    value: QueryAllSequencersByRollappResponseAmino;
}
export interface QueryAllSequencersByRollappResponseSDKType {
    sequencersByRollapp: QueryGetSequencersByRollappResponseSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetSchedulerRequest {
    sequencerAddress: string;
}
export interface QueryGetSchedulerRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerRequest";
    value: Uint8Array;
}
export interface QueryGetSchedulerRequestAmino {
    sequencerAddress?: string;
}
export interface QueryGetSchedulerRequestAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerRequest";
    value: QueryGetSchedulerRequestAmino;
}
export interface QueryGetSchedulerRequestSDKType {
    sequencerAddress: string;
}
export interface QueryGetSchedulerResponse {
    scheduler: Scheduler;
}
export interface QueryGetSchedulerResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerResponse";
    value: Uint8Array;
}
export interface QueryGetSchedulerResponseAmino {
    scheduler?: SchedulerAmino;
}
export interface QueryGetSchedulerResponseAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryGetSchedulerResponse";
    value: QueryGetSchedulerResponseAmino;
}
export interface QueryGetSchedulerResponseSDKType {
    scheduler: SchedulerSDKType;
}
export interface QueryAllSchedulerRequest {
    pagination?: PageRequest;
}
export interface QueryAllSchedulerRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerRequest";
    value: Uint8Array;
}
export interface QueryAllSchedulerRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllSchedulerRequestAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerRequest";
    value: QueryAllSchedulerRequestAmino;
}
export interface QueryAllSchedulerRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllSchedulerResponse {
    scheduler: Scheduler[];
    pagination?: PageResponse;
}
export interface QueryAllSchedulerResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerResponse";
    value: Uint8Array;
}
export interface QueryAllSchedulerResponseAmino {
    scheduler?: SchedulerAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllSchedulerResponseAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.QueryAllSchedulerResponse";
    value: QueryAllSchedulerResponseAmino;
}
export interface QueryAllSchedulerResponseSDKType {
    scheduler: SchedulerSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const SequencerInfo: {
    typeUrl: string;
    encode(message: SequencerInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SequencerInfo;
    fromPartial(object: Partial<SequencerInfo>): SequencerInfo;
    fromAmino(object: SequencerInfoAmino): SequencerInfo;
    toAmino(message: SequencerInfo): SequencerInfoAmino;
    fromAminoMsg(object: SequencerInfoAminoMsg): SequencerInfo;
    fromProtoMsg(message: SequencerInfoProtoMsg): SequencerInfo;
    toProto(message: SequencerInfo): Uint8Array;
    toProtoMsg(message: SequencerInfo): SequencerInfoProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetSequencerRequest: {
    typeUrl: string;
    encode(message: QueryGetSequencerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetSequencerRequest;
    fromPartial(object: Partial<QueryGetSequencerRequest>): QueryGetSequencerRequest;
    fromAmino(object: QueryGetSequencerRequestAmino): QueryGetSequencerRequest;
    toAmino(message: QueryGetSequencerRequest): QueryGetSequencerRequestAmino;
    fromAminoMsg(object: QueryGetSequencerRequestAminoMsg): QueryGetSequencerRequest;
    fromProtoMsg(message: QueryGetSequencerRequestProtoMsg): QueryGetSequencerRequest;
    toProto(message: QueryGetSequencerRequest): Uint8Array;
    toProtoMsg(message: QueryGetSequencerRequest): QueryGetSequencerRequestProtoMsg;
};
export declare const QueryGetSequencerResponse: {
    typeUrl: string;
    encode(message: QueryGetSequencerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetSequencerResponse;
    fromPartial(object: Partial<QueryGetSequencerResponse>): QueryGetSequencerResponse;
    fromAmino(object: QueryGetSequencerResponseAmino): QueryGetSequencerResponse;
    toAmino(message: QueryGetSequencerResponse): QueryGetSequencerResponseAmino;
    fromAminoMsg(object: QueryGetSequencerResponseAminoMsg): QueryGetSequencerResponse;
    fromProtoMsg(message: QueryGetSequencerResponseProtoMsg): QueryGetSequencerResponse;
    toProto(message: QueryGetSequencerResponse): Uint8Array;
    toProtoMsg(message: QueryGetSequencerResponse): QueryGetSequencerResponseProtoMsg;
};
export declare const QueryAllSequencerRequest: {
    typeUrl: string;
    encode(message: QueryAllSequencerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllSequencerRequest;
    fromPartial(object: Partial<QueryAllSequencerRequest>): QueryAllSequencerRequest;
    fromAmino(object: QueryAllSequencerRequestAmino): QueryAllSequencerRequest;
    toAmino(message: QueryAllSequencerRequest): QueryAllSequencerRequestAmino;
    fromAminoMsg(object: QueryAllSequencerRequestAminoMsg): QueryAllSequencerRequest;
    fromProtoMsg(message: QueryAllSequencerRequestProtoMsg): QueryAllSequencerRequest;
    toProto(message: QueryAllSequencerRequest): Uint8Array;
    toProtoMsg(message: QueryAllSequencerRequest): QueryAllSequencerRequestProtoMsg;
};
export declare const QueryAllSequencerResponse: {
    typeUrl: string;
    encode(message: QueryAllSequencerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllSequencerResponse;
    fromPartial(object: Partial<QueryAllSequencerResponse>): QueryAllSequencerResponse;
    fromAmino(object: QueryAllSequencerResponseAmino): QueryAllSequencerResponse;
    toAmino(message: QueryAllSequencerResponse): QueryAllSequencerResponseAmino;
    fromAminoMsg(object: QueryAllSequencerResponseAminoMsg): QueryAllSequencerResponse;
    fromProtoMsg(message: QueryAllSequencerResponseProtoMsg): QueryAllSequencerResponse;
    toProto(message: QueryAllSequencerResponse): Uint8Array;
    toProtoMsg(message: QueryAllSequencerResponse): QueryAllSequencerResponseProtoMsg;
};
export declare const QueryGetSequencersByRollappRequest: {
    typeUrl: string;
    encode(message: QueryGetSequencersByRollappRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetSequencersByRollappRequest;
    fromPartial(object: Partial<QueryGetSequencersByRollappRequest>): QueryGetSequencersByRollappRequest;
    fromAmino(object: QueryGetSequencersByRollappRequestAmino): QueryGetSequencersByRollappRequest;
    toAmino(message: QueryGetSequencersByRollappRequest): QueryGetSequencersByRollappRequestAmino;
    fromAminoMsg(object: QueryGetSequencersByRollappRequestAminoMsg): QueryGetSequencersByRollappRequest;
    fromProtoMsg(message: QueryGetSequencersByRollappRequestProtoMsg): QueryGetSequencersByRollappRequest;
    toProto(message: QueryGetSequencersByRollappRequest): Uint8Array;
    toProtoMsg(message: QueryGetSequencersByRollappRequest): QueryGetSequencersByRollappRequestProtoMsg;
};
export declare const QueryGetSequencersByRollappResponse: {
    typeUrl: string;
    encode(message: QueryGetSequencersByRollappResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetSequencersByRollappResponse;
    fromPartial(object: Partial<QueryGetSequencersByRollappResponse>): QueryGetSequencersByRollappResponse;
    fromAmino(object: QueryGetSequencersByRollappResponseAmino): QueryGetSequencersByRollappResponse;
    toAmino(message: QueryGetSequencersByRollappResponse): QueryGetSequencersByRollappResponseAmino;
    fromAminoMsg(object: QueryGetSequencersByRollappResponseAminoMsg): QueryGetSequencersByRollappResponse;
    fromProtoMsg(message: QueryGetSequencersByRollappResponseProtoMsg): QueryGetSequencersByRollappResponse;
    toProto(message: QueryGetSequencersByRollappResponse): Uint8Array;
    toProtoMsg(message: QueryGetSequencersByRollappResponse): QueryGetSequencersByRollappResponseProtoMsg;
};
export declare const QueryAllSequencersByRollappRequest: {
    typeUrl: string;
    encode(message: QueryAllSequencersByRollappRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllSequencersByRollappRequest;
    fromPartial(object: Partial<QueryAllSequencersByRollappRequest>): QueryAllSequencersByRollappRequest;
    fromAmino(object: QueryAllSequencersByRollappRequestAmino): QueryAllSequencersByRollappRequest;
    toAmino(message: QueryAllSequencersByRollappRequest): QueryAllSequencersByRollappRequestAmino;
    fromAminoMsg(object: QueryAllSequencersByRollappRequestAminoMsg): QueryAllSequencersByRollappRequest;
    fromProtoMsg(message: QueryAllSequencersByRollappRequestProtoMsg): QueryAllSequencersByRollappRequest;
    toProto(message: QueryAllSequencersByRollappRequest): Uint8Array;
    toProtoMsg(message: QueryAllSequencersByRollappRequest): QueryAllSequencersByRollappRequestProtoMsg;
};
export declare const QueryAllSequencersByRollappResponse: {
    typeUrl: string;
    encode(message: QueryAllSequencersByRollappResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllSequencersByRollappResponse;
    fromPartial(object: Partial<QueryAllSequencersByRollappResponse>): QueryAllSequencersByRollappResponse;
    fromAmino(object: QueryAllSequencersByRollappResponseAmino): QueryAllSequencersByRollappResponse;
    toAmino(message: QueryAllSequencersByRollappResponse): QueryAllSequencersByRollappResponseAmino;
    fromAminoMsg(object: QueryAllSequencersByRollappResponseAminoMsg): QueryAllSequencersByRollappResponse;
    fromProtoMsg(message: QueryAllSequencersByRollappResponseProtoMsg): QueryAllSequencersByRollappResponse;
    toProto(message: QueryAllSequencersByRollappResponse): Uint8Array;
    toProtoMsg(message: QueryAllSequencersByRollappResponse): QueryAllSequencersByRollappResponseProtoMsg;
};
export declare const QueryGetSchedulerRequest: {
    typeUrl: string;
    encode(message: QueryGetSchedulerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetSchedulerRequest;
    fromPartial(object: Partial<QueryGetSchedulerRequest>): QueryGetSchedulerRequest;
    fromAmino(object: QueryGetSchedulerRequestAmino): QueryGetSchedulerRequest;
    toAmino(message: QueryGetSchedulerRequest): QueryGetSchedulerRequestAmino;
    fromAminoMsg(object: QueryGetSchedulerRequestAminoMsg): QueryGetSchedulerRequest;
    fromProtoMsg(message: QueryGetSchedulerRequestProtoMsg): QueryGetSchedulerRequest;
    toProto(message: QueryGetSchedulerRequest): Uint8Array;
    toProtoMsg(message: QueryGetSchedulerRequest): QueryGetSchedulerRequestProtoMsg;
};
export declare const QueryGetSchedulerResponse: {
    typeUrl: string;
    encode(message: QueryGetSchedulerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetSchedulerResponse;
    fromPartial(object: Partial<QueryGetSchedulerResponse>): QueryGetSchedulerResponse;
    fromAmino(object: QueryGetSchedulerResponseAmino): QueryGetSchedulerResponse;
    toAmino(message: QueryGetSchedulerResponse): QueryGetSchedulerResponseAmino;
    fromAminoMsg(object: QueryGetSchedulerResponseAminoMsg): QueryGetSchedulerResponse;
    fromProtoMsg(message: QueryGetSchedulerResponseProtoMsg): QueryGetSchedulerResponse;
    toProto(message: QueryGetSchedulerResponse): Uint8Array;
    toProtoMsg(message: QueryGetSchedulerResponse): QueryGetSchedulerResponseProtoMsg;
};
export declare const QueryAllSchedulerRequest: {
    typeUrl: string;
    encode(message: QueryAllSchedulerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllSchedulerRequest;
    fromPartial(object: Partial<QueryAllSchedulerRequest>): QueryAllSchedulerRequest;
    fromAmino(object: QueryAllSchedulerRequestAmino): QueryAllSchedulerRequest;
    toAmino(message: QueryAllSchedulerRequest): QueryAllSchedulerRequestAmino;
    fromAminoMsg(object: QueryAllSchedulerRequestAminoMsg): QueryAllSchedulerRequest;
    fromProtoMsg(message: QueryAllSchedulerRequestProtoMsg): QueryAllSchedulerRequest;
    toProto(message: QueryAllSchedulerRequest): Uint8Array;
    toProtoMsg(message: QueryAllSchedulerRequest): QueryAllSchedulerRequestProtoMsg;
};
export declare const QueryAllSchedulerResponse: {
    typeUrl: string;
    encode(message: QueryAllSchedulerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllSchedulerResponse;
    fromPartial(object: Partial<QueryAllSchedulerResponse>): QueryAllSchedulerResponse;
    fromAmino(object: QueryAllSchedulerResponseAmino): QueryAllSchedulerResponse;
    toAmino(message: QueryAllSchedulerResponse): QueryAllSchedulerResponseAmino;
    fromAminoMsg(object: QueryAllSchedulerResponseAminoMsg): QueryAllSchedulerResponse;
    fromProtoMsg(message: QueryAllSchedulerResponseProtoMsg): QueryAllSchedulerResponse;
    toProto(message: QueryAllSchedulerResponse): Uint8Array;
    toProtoMsg(message: QueryAllSchedulerResponse): QueryAllSchedulerResponseProtoMsg;
};
