import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponse {
    certificate?: Certificate;
    serial: string;
}
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponseSDKType {
    certificate?: CertificateSDKType;
    serial: string;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
    filter?: CertificateFilter;
    pagination?: PageRequest;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequestSDKType {
    filter?: CertificateFilterSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
    certificates: CertificateResponse[];
    pagination?: PageResponse;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponseSDKType {
    certificates: CertificateResponseSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const CertificateResponse: {
    encode(message: CertificateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CertificateResponse;
    fromPartial(object: Partial<CertificateResponse>): CertificateResponse;
};
export declare const QueryCertificatesRequest: {
    encode(message: QueryCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCertificatesRequest;
    fromPartial(object: Partial<QueryCertificatesRequest>): QueryCertificatesRequest;
};
export declare const QueryCertificatesResponse: {
    encode(message: QueryCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCertificatesResponse;
    fromPartial(object: Partial<QueryCertificatesResponse>): QueryCertificatesResponse;
};
