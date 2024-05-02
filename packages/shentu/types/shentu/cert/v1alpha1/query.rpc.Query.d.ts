import { Rpc } from "../../../helpers";
import { QueryCertifierRequest, QueryCertifierResponse, QueryCertifiersRequest, QueryCertifiersResponse, QueryPlatformRequest, QueryPlatformResponse, QueryCertificateRequest, QueryCertificateResponse, QueryCertificatesRequest, QueryCertificatesResponse, ConversionToShentuAddrRequest, ConversionToShentuAddrResponse } from "./query";
/** Query defines the gRPC querier service for cert module. */
export interface Query {
    certifier(request: QueryCertifierRequest): Promise<QueryCertifierResponse>;
    certifiers(request?: QueryCertifiersRequest): Promise<QueryCertifiersResponse>;
    platform(request: QueryPlatformRequest): Promise<QueryPlatformResponse>;
    certificate(request: QueryCertificateRequest): Promise<QueryCertificateResponse>;
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
    addrConversion(request: ConversionToShentuAddrRequest): Promise<ConversionToShentuAddrResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    certifier(request: QueryCertifierRequest): Promise<QueryCertifierResponse>;
    certifiers(request?: QueryCertifiersRequest): Promise<QueryCertifiersResponse>;
    platform(request: QueryPlatformRequest): Promise<QueryPlatformResponse>;
    certificate(request: QueryCertificateRequest): Promise<QueryCertificateResponse>;
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
    addrConversion(request: ConversionToShentuAddrRequest): Promise<ConversionToShentuAddrResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    certifier(request: QueryCertifierRequest): Promise<QueryCertifierResponse>;
    certifiers(request?: QueryCertifiersRequest): Promise<QueryCertifiersResponse>;
    platform(request: QueryPlatformRequest): Promise<QueryPlatformResponse>;
    certificate(request: QueryCertificateRequest): Promise<QueryCertificateResponse>;
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
    addrConversion(request: ConversionToShentuAddrRequest): Promise<ConversionToShentuAddrResponse>;
};
