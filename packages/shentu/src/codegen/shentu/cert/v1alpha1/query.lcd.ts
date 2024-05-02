import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryCertifierRequest, QueryCertifierResponseSDKType, QueryCertifiersRequest, QueryCertifiersResponseSDKType, QueryPlatformRequest, QueryPlatformResponseSDKType, QueryCertificateRequest, QueryCertificateResponseSDKType, QueryCertificatesRequest, QueryCertificatesResponseSDKType, ConversionToShentuAddrRequest, ConversionToShentuAddrResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.certifier = this.certifier.bind(this);
    this.certifiers = this.certifiers.bind(this);
    this.platform = this.platform.bind(this);
    this.certificate = this.certificate.bind(this);
    this.certificates = this.certificates.bind(this);
    this.addrConversion = this.addrConversion.bind(this);
  }
  /* Certifier */
  async certifier(params: QueryCertifierRequest): Promise<QueryCertifierResponseSDKType> {
    const endpoint = `shentu/cert/v1alpha1/certifier/${params.address}/alias/${params.alias}`;
    return await this.req.get<QueryCertifierResponseSDKType>(endpoint);
  }
  /* Certifiers */
  async certifiers(_params: QueryCertifiersRequest = {}): Promise<QueryCertifiersResponseSDKType> {
    const endpoint = `shentu/cert/v1alpha1/certifiers`;
    return await this.req.get<QueryCertifiersResponseSDKType>(endpoint);
  }
  /* Platform */
  async platform(params: QueryPlatformRequest): Promise<QueryPlatformResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pubkey !== "undefined") {
      options.params.pubkey = params.pubkey;
    }
    const endpoint = `shentu/cert/v1alpha1/platform`;
    return await this.req.get<QueryPlatformResponseSDKType>(endpoint, options);
  }
  /* Certificate */
  async certificate(params: QueryCertificateRequest): Promise<QueryCertificateResponseSDKType> {
    const endpoint = `shentu/cert/v1alpha1/certificate/${params.certificateId}`;
    return await this.req.get<QueryCertificateResponseSDKType>(endpoint);
  }
  /* Certificates */
  async certificates(params: QueryCertificatesRequest): Promise<QueryCertificatesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.certifier !== "undefined") {
      options.params.certifier = params.certifier;
    }
    if (typeof params?.certificateType !== "undefined") {
      options.params.certificate_type = params.certificateType;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `shentu/cert/v1alpha1/certificates`;
    return await this.req.get<QueryCertificatesResponseSDKType>(endpoint, options);
  }
  /* AddrConversion */
  async addrConversion(params: ConversionToShentuAddrRequest): Promise<ConversionToShentuAddrResponseSDKType> {
    const endpoint = `shentu/conversion/to-shentu/${params.address}`;
    return await this.req.get<ConversionToShentuAddrResponseSDKType>(endpoint);
  }
}