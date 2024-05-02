import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.certifier = this.certifier.bind(this);
    this.certifiers = this.certifiers.bind(this);
    this.platform = this.platform.bind(this);
    this.certificate = this.certificate.bind(this);
    this.certificates = this.certificates.bind(this);
    this.addrConversion = this.addrConversion.bind(this);
  }
  certifier(request: QueryCertifierRequest): Promise<QueryCertifierResponse> {
    const data = QueryCertifierRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Query", "Certifier", data);
    return promise.then(data => QueryCertifierResponse.decode(new BinaryReader(data)));
  }
  certifiers(request: QueryCertifiersRequest = {}): Promise<QueryCertifiersResponse> {
    const data = QueryCertifiersRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Query", "Certifiers", data);
    return promise.then(data => QueryCertifiersResponse.decode(new BinaryReader(data)));
  }
  platform(request: QueryPlatformRequest): Promise<QueryPlatformResponse> {
    const data = QueryPlatformRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Query", "Platform", data);
    return promise.then(data => QueryPlatformResponse.decode(new BinaryReader(data)));
  }
  certificate(request: QueryCertificateRequest): Promise<QueryCertificateResponse> {
    const data = QueryCertificateRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Query", "Certificate", data);
    return promise.then(data => QueryCertificateResponse.decode(new BinaryReader(data)));
  }
  certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Query", "Certificates", data);
    return promise.then(data => QueryCertificatesResponse.decode(new BinaryReader(data)));
  }
  addrConversion(request: ConversionToShentuAddrRequest): Promise<ConversionToShentuAddrResponse> {
    const data = ConversionToShentuAddrRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cert.v1alpha1.Query", "AddrConversion", data);
    return promise.then(data => ConversionToShentuAddrResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    certifier(request: QueryCertifierRequest): Promise<QueryCertifierResponse> {
      return queryService.certifier(request);
    },
    certifiers(request?: QueryCertifiersRequest): Promise<QueryCertifiersResponse> {
      return queryService.certifiers(request);
    },
    platform(request: QueryPlatformRequest): Promise<QueryPlatformResponse> {
      return queryService.platform(request);
    },
    certificate(request: QueryCertificateRequest): Promise<QueryCertificateResponse> {
      return queryService.certificate(request);
    },
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
      return queryService.certificates(request);
    },
    addrConversion(request: ConversionToShentuAddrRequest): Promise<ConversionToShentuAddrResponse> {
      return queryService.addrConversion(request);
    }
  };
};