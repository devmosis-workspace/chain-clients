import { AdminAccount, AdminAccountSDKType, Params, ParamsSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
export interface ListAccountsRequest {
}
export interface ListAccountsRequestSDKType {
}
export interface ListAccountsResponse {
    keys: AdminAccount[];
}
export interface ListAccountsResponseSDKType {
    keys: AdminAccountSDKType[];
}
export interface GetParamsRequest {
}
export interface GetParamsRequestSDKType {
}
export interface GetParamsResponse {
    params?: Params;
}
export interface GetParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const ListAccountsRequest: {
    encode(_: ListAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ListAccountsRequest;
    fromPartial(_: Partial<ListAccountsRequest>): ListAccountsRequest;
};
export declare const ListAccountsResponse: {
    encode(message: ListAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ListAccountsResponse;
    fromPartial(object: Partial<ListAccountsResponse>): ListAccountsResponse;
};
export declare const GetParamsRequest: {
    encode(_: GetParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): GetParamsRequest;
    fromPartial(_: Partial<GetParamsRequest>): GetParamsRequest;
};
export declare const GetParamsResponse: {
    encode(message: GetParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetParamsResponse;
    fromPartial(object: Partial<GetParamsResponse>): GetParamsResponse;
};
