import { Plan, PlanAmino, PlanSDKType } from "./upgrade";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {
}
export interface QueryCurrentPlanRequestProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest";
    value: Uint8Array;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequestAmino {
}
export interface QueryCurrentPlanRequestAminoMsg {
    type: "cosmos-sdk/QueryCurrentPlanRequest";
    value: QueryCurrentPlanRequestAmino;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequestSDKType {
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
    /** plan is the current upgrade plan. */
    plan: Plan;
}
export interface QueryCurrentPlanResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse";
    value: Uint8Array;
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponseAmino {
    /** plan is the current upgrade plan. */
    plan?: PlanAmino;
}
export interface QueryCurrentPlanResponseAminoMsg {
    type: "cosmos-sdk/QueryCurrentPlanResponse";
    value: QueryCurrentPlanResponseAmino;
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponseSDKType {
    plan: PlanSDKType;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
    /** name is the name of the applied plan to query for. */
    name: string;
}
export interface QueryAppliedPlanRequestProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest";
    value: Uint8Array;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequestAmino {
    /** name is the name of the applied plan to query for. */
    name: string;
}
export interface QueryAppliedPlanRequestAminoMsg {
    type: "cosmos-sdk/QueryAppliedPlanRequest";
    value: QueryAppliedPlanRequestAmino;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequestSDKType {
    name: string;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
    /** height is the block height at which the plan was applied. */
    height: bigint;
}
export interface QueryAppliedPlanResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse";
    value: Uint8Array;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponseAmino {
    /** height is the block height at which the plan was applied. */
    height: string;
}
export interface QueryAppliedPlanResponseAminoMsg {
    type: "cosmos-sdk/QueryAppliedPlanResponse";
    value: QueryAppliedPlanResponseAmino;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponseSDKType {
    height: bigint;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateRequest {
    /**
     * last height of the current chain must be sent in request
     * as this is the height under which next consensus state is stored
     */
    lastHeight: bigint;
}
export interface QueryUpgradedConsensusStateRequestProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest";
    value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateRequestAmino {
    /**
     * last height of the current chain must be sent in request
     * as this is the height under which next consensus state is stored
     */
    last_height: string;
}
export interface QueryUpgradedConsensusStateRequestAminoMsg {
    type: "cosmos-sdk/QueryUpgradedConsensusStateRequest";
    value: QueryUpgradedConsensusStateRequestAmino;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateRequestSDKType {
    last_height: bigint;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
    upgradedConsensusState: Any;
}
export interface QueryUpgradedConsensusStateResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse";
    value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateResponseAmino {
    upgraded_consensus_state?: AnyAmino;
}
export interface QueryUpgradedConsensusStateResponseAminoMsg {
    type: "cosmos-sdk/QueryUpgradedConsensusStateResponse";
    value: QueryUpgradedConsensusStateResponseAmino;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateResponseSDKType {
    upgraded_consensus_state: AnySDKType;
}
export declare const QueryCurrentPlanRequest: {
    typeUrl: string;
    encode(_: QueryCurrentPlanRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCurrentPlanRequest;
    fromPartial(_: Partial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest;
    fromAmino(_: QueryCurrentPlanRequestAmino): QueryCurrentPlanRequest;
    toAmino(_: QueryCurrentPlanRequest): QueryCurrentPlanRequestAmino;
    fromAminoMsg(object: QueryCurrentPlanRequestAminoMsg): QueryCurrentPlanRequest;
    toAminoMsg(message: QueryCurrentPlanRequest): QueryCurrentPlanRequestAminoMsg;
    fromProtoMsg(message: QueryCurrentPlanRequestProtoMsg): QueryCurrentPlanRequest;
    toProto(message: QueryCurrentPlanRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentPlanRequest): QueryCurrentPlanRequestProtoMsg;
};
export declare const QueryCurrentPlanResponse: {
    typeUrl: string;
    encode(message: QueryCurrentPlanResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentPlanResponse;
    fromPartial(object: Partial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse;
    fromAmino(object: QueryCurrentPlanResponseAmino): QueryCurrentPlanResponse;
    toAmino(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseAmino;
    fromAminoMsg(object: QueryCurrentPlanResponseAminoMsg): QueryCurrentPlanResponse;
    toAminoMsg(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseAminoMsg;
    fromProtoMsg(message: QueryCurrentPlanResponseProtoMsg): QueryCurrentPlanResponse;
    toProto(message: QueryCurrentPlanResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseProtoMsg;
};
export declare const QueryAppliedPlanRequest: {
    typeUrl: string;
    encode(message: QueryAppliedPlanRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAppliedPlanRequest;
    fromPartial(object: Partial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest;
    fromAmino(object: QueryAppliedPlanRequestAmino): QueryAppliedPlanRequest;
    toAmino(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestAmino;
    fromAminoMsg(object: QueryAppliedPlanRequestAminoMsg): QueryAppliedPlanRequest;
    toAminoMsg(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestAminoMsg;
    fromProtoMsg(message: QueryAppliedPlanRequestProtoMsg): QueryAppliedPlanRequest;
    toProto(message: QueryAppliedPlanRequest): Uint8Array;
    toProtoMsg(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestProtoMsg;
};
export declare const QueryAppliedPlanResponse: {
    typeUrl: string;
    encode(message: QueryAppliedPlanResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAppliedPlanResponse;
    fromPartial(object: Partial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse;
    fromAmino(object: QueryAppliedPlanResponseAmino): QueryAppliedPlanResponse;
    toAmino(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseAmino;
    fromAminoMsg(object: QueryAppliedPlanResponseAminoMsg): QueryAppliedPlanResponse;
    toAminoMsg(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseAminoMsg;
    fromProtoMsg(message: QueryAppliedPlanResponseProtoMsg): QueryAppliedPlanResponse;
    toProto(message: QueryAppliedPlanResponse): Uint8Array;
    toProtoMsg(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseProtoMsg;
};
export declare const QueryUpgradedConsensusStateRequest: {
    typeUrl: string;
    encode(message: QueryUpgradedConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUpgradedConsensusStateRequest;
    fromPartial(object: Partial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest;
    fromAmino(object: QueryUpgradedConsensusStateRequestAmino): QueryUpgradedConsensusStateRequest;
    toAmino(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAmino;
    fromAminoMsg(object: QueryUpgradedConsensusStateRequestAminoMsg): QueryUpgradedConsensusStateRequest;
    toAminoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryUpgradedConsensusStateRequestProtoMsg): QueryUpgradedConsensusStateRequest;
    toProto(message: QueryUpgradedConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestProtoMsg;
};
export declare const QueryUpgradedConsensusStateResponse: {
    typeUrl: string;
    encode(message: QueryUpgradedConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    fromPartial(object: Partial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse;
    fromAmino(object: QueryUpgradedConsensusStateResponseAmino): QueryUpgradedConsensusStateResponse;
    toAmino(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAmino;
    fromAminoMsg(object: QueryUpgradedConsensusStateResponseAminoMsg): QueryUpgradedConsensusStateResponse;
    toAminoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryUpgradedConsensusStateResponseProtoMsg): QueryUpgradedConsensusStateResponse;
    toProto(message: QueryUpgradedConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseProtoMsg;
};
