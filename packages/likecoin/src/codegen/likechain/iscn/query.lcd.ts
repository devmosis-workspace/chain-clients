import { LCDClient } from "@osmonauts/lcd";
import { QueryRecordsByIdRequest, QueryRecordsByIdResponseSDKType, QueryRecordsByFingerprintRequest, QueryRecordsByFingerprintResponseSDKType, QueryRecordsByOwnerRequest, QueryRecordsByOwnerResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryGetCidRequest, QueryGetCidResponseSDKType, QueryHasCidRequest, QueryHasCidResponseSDKType, QueryGetCidSizeRequest, QueryGetCidSizeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.recordsById = this.recordsById.bind(this);
    this.recordsByFingerprint = this.recordsByFingerprint.bind(this);
    this.recordsByOwner = this.recordsByOwner.bind(this);
    this.params = this.params.bind(this);
    this.getCid = this.getCid.bind(this);
    this.hasCid = this.hasCid.bind(this);
    this.getCidSize = this.getCidSize.bind(this);
  }
  /* RecordsById */
  async recordsById(params: QueryRecordsByIdRequest): Promise<QueryRecordsByIdResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.iscnId !== "undefined") {
      options.params.iscn_id = params.iscnId;
    }
    if (typeof params?.fromVersion !== "undefined") {
      options.params.from_version = params.fromVersion;
    }
    if (typeof params?.toVersion !== "undefined") {
      options.params.to_version = params.toVersion;
    }
    const endpoint = `iscn/records/id`;
    return await this.req.get<QueryRecordsByIdResponseSDKType>(endpoint, options);
  }
  /* RecordsByFingerprint */
  async recordsByFingerprint(params: QueryRecordsByFingerprintRequest): Promise<QueryRecordsByFingerprintResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fingerprint !== "undefined") {
      options.params.fingerprint = params.fingerprint;
    }
    if (typeof params?.fromSequence !== "undefined") {
      options.params.from_sequence = params.fromSequence;
    }
    const endpoint = `iscn/records/fingerprint`;
    return await this.req.get<QueryRecordsByFingerprintResponseSDKType>(endpoint, options);
  }
  /* RecordsByOwner */
  async recordsByOwner(params: QueryRecordsByOwnerRequest): Promise<QueryRecordsByOwnerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.fromSequence !== "undefined") {
      options.params.from_sequence = params.fromSequence;
    }
    const endpoint = `iscn/records/owner`;
    return await this.req.get<QueryRecordsByOwnerResponseSDKType>(endpoint, options);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `iscn/parameters`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* GetCid */
  async getCid(params: QueryGetCidRequest): Promise<QueryGetCidResponseSDKType> {
    const endpoint = `iscn/get_cid/${params.cid}`;
    return await this.req.get<QueryGetCidResponseSDKType>(endpoint);
  }
  /* HasCid */
  async hasCid(params: QueryHasCidRequest): Promise<QueryHasCidResponseSDKType> {
    const endpoint = `iscn/has_cid/${params.cid}`;
    return await this.req.get<QueryHasCidResponseSDKType>(endpoint);
  }
  /* GetCidSize */
  async getCidSize(params: QueryGetCidSizeRequest): Promise<QueryGetCidSizeResponseSDKType> {
    const endpoint = `iscn/get_cid_size/${params.cid}`;
    return await this.req.get<QueryGetCidSizeResponseSDKType>(endpoint);
  }
}