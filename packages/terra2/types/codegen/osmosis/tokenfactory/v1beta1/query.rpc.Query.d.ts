import { Rpc } from "../../../helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryBeforeSendHookAddressRequest, QueryBeforeSendHookAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * Given the denom, returns the authority metadata for the denom.
     * This method can receive both the denom encoded to URL (for the LCD requests)
     * and the denom not encoded:
     * e.g. factory%2Fterra1v0eee20gjl68fuk0chyrkch2z7suw2mhg3wkxf%2Futoken931
     */
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    /**
     * BeforeSendHookAddress defines a gRPC query method for
     * getting the address registered for the before send hook.
     */
    beforeSendHookAddress(request: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    beforeSendHookAddress(request: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    beforeSendHookAddress(request: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponse>;
};
