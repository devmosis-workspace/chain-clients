import { Params as Params1 } from "../../bundles/v1beta1/params";
import { ParamsAmino as Params1Amino } from "../../bundles/v1beta1/params";
import { ParamsSDKType as Params1SDKType } from "../../bundles/v1beta1/params";
import { Params as Params2 } from "../../delegation/v1beta1/params";
import { ParamsAmino as Params2Amino } from "../../delegation/v1beta1/params";
import { ParamsSDKType as Params2SDKType } from "../../delegation/v1beta1/params";
import { Params as Params3 } from "../../global/v1beta1/global";
import { ParamsAmino as Params3Amino } from "../../global/v1beta1/global";
import { ParamsSDKType as Params3SDKType } from "../../global/v1beta1/global";
import { QueryParamsResponse as QueryParamsResponse1 } from "../../../cosmos/gov/v1/query";
import { QueryParamsResponseAmino as QueryParamsResponse1Amino } from "../../../cosmos/gov/v1/query";
import { QueryParamsResponseSDKType as QueryParamsResponse1SDKType } from "../../../cosmos/gov/v1/query";
import { Params as Params4 } from "../../stakers/v1beta1/params";
import { ParamsAmino as Params4Amino } from "../../stakers/v1beta1/params";
import { ParamsSDKType as Params4SDKType } from "../../stakers/v1beta1/params";
import { Params as Params5 } from "../../pool/v1beta1/params";
import { ParamsAmino as Params5Amino } from "../../pool/v1beta1/params";
import { ParamsSDKType as Params5SDKType } from "../../pool/v1beta1/params";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest ... */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest ... */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/kyve.query.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest ... */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse ... */
export interface QueryParamsResponse {
    /** bundles_params ... */
    bundlesParams: Params1;
    /** delegation_params ... */
    delegationParams: Params2;
    /** global_params ... */
    globalParams: Params3;
    /** gov_params ... */
    govParams: QueryParamsResponse1;
    /** stakers_params ... */
    stakersParams: Params4;
    /** pool_params ... */
    poolParams: Params5;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/kyve.query.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse ... */
export interface QueryParamsResponseAmino {
    /** bundles_params ... */
    bundles_params?: Params1Amino;
    /** delegation_params ... */
    delegation_params?: Params2Amino;
    /** global_params ... */
    global_params?: Params3Amino;
    /** gov_params ... */
    gov_params?: QueryParamsResponse1Amino;
    /** stakers_params ... */
    stakers_params?: Params4Amino;
    /** pool_params ... */
    pool_params?: Params5Amino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/kyve.query.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse ... */
export interface QueryParamsResponseSDKType {
    bundles_params: Params1SDKType;
    delegation_params: Params2SDKType;
    global_params: Params3SDKType;
    gov_params: QueryParamsResponse1SDKType;
    stakers_params: Params4SDKType;
    pool_params: Params5SDKType;
}
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
