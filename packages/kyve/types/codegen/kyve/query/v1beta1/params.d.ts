import { Params as Params1 } from "../../bundles/v1beta1/params";
import { ParamsSDKType as Params1SDKType } from "../../bundles/v1beta1/params";
import { Params as Params2 } from "../../delegation/v1beta1/params";
import { ParamsSDKType as Params2SDKType } from "../../delegation/v1beta1/params";
import { Params as Params3 } from "../../global/v1beta1/global";
import { ParamsSDKType as Params3SDKType } from "../../global/v1beta1/global";
import { QueryParamsResponse as QueryParamsResponse1 } from "../../../cosmos/gov/v1/query";
import { QueryParamsResponseSDKType as QueryParamsResponse1SDKType } from "../../../cosmos/gov/v1/query";
import { Params as Params4 } from "../../stakers/v1beta1/params";
import { ParamsSDKType as Params4SDKType } from "../../stakers/v1beta1/params";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest ... */
export interface QueryParamsRequest {
}
/** QueryParamsRequest ... */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse ... */
export interface QueryParamsResponse {
    /** bundles_params ... */
    bundlesParams?: Params1;
    /** delegation_params ... */
    delegationParams?: Params2;
    /** global_params ... */
    globalParams?: Params3;
    /** gov_params ... */
    govParams?: QueryParamsResponse1;
    /** stakers_params ... */
    stakersParams?: Params4;
}
/** QueryParamsResponse ... */
export interface QueryParamsResponseSDKType {
    bundles_params?: Params1SDKType;
    delegation_params?: Params2SDKType;
    global_params?: Params3SDKType;
    gov_params?: QueryParamsResponse1SDKType;
    stakers_params?: Params4SDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
