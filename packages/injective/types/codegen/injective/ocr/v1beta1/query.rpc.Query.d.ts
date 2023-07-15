import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service for OCR module. */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Retrieves the OCR FeedConfig for a given FeedId */
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
    /** Retrieves the OCR FeedConfigInfo for a given FeedId */
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
    /** Retrieves latest round ID and data, including median answer for that round */
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
    /**
     * LatestTransmissionDetails returns details about the latest trasmission
     * recorded on chain for the given feed ID.
     */
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
    /** Retrieves transmitter's owed amount */
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
    /** Retrieves the entire OCR module's state */
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
};
