import { LCDClient } from "@cosmology/lcd";
import { QueryCertifierRequest, QueryCertifierResponseSDKType, QueryCertifiersRequest, QueryCertifiersResponseSDKType, QueryPlatformRequest, QueryPlatformResponseSDKType, QueryCertificateRequest, QueryCertificateResponseSDKType, QueryCertificatesRequest, QueryCertificatesResponseSDKType, ConversionToShentuAddrRequest, ConversionToShentuAddrResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    certifier(params: QueryCertifierRequest): Promise<QueryCertifierResponseSDKType>;
    certifiers(_params?: QueryCertifiersRequest): Promise<QueryCertifiersResponseSDKType>;
    platform(params: QueryPlatformRequest): Promise<QueryPlatformResponseSDKType>;
    certificate(params: QueryCertificateRequest): Promise<QueryCertificateResponseSDKType>;
    certificates(params: QueryCertificatesRequest): Promise<QueryCertificatesResponseSDKType>;
    addrConversion(params: ConversionToShentuAddrRequest): Promise<ConversionToShentuAddrResponseSDKType>;
}
