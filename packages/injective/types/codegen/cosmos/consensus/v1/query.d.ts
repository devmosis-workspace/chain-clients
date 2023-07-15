import { ConsensusParams, ConsensusParamsSDKType } from "../../../tendermint/types/params";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/consensus parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/consensus parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/consensus parameters. */
export interface QueryParamsResponse {
    /**
     * params are the tendermint consensus params stored in the consensus module.
     * Please note that `params.version` is not populated in this response, it is
     * tracked separately in the x/upgrade module.
     */
    params?: ConsensusParams;
}
/** QueryParamsResponse defines the response type for querying x/consensus parameters. */
export interface QueryParamsResponseSDKType {
    params?: ConsensusParamsSDKType;
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
