import { LCDClient } from "@cosmology/lcd";
import { QueryCodeRequest, QueryCodeResponseSDKType, QueryAbiRequest, QueryAbiResponseSDKType, QueryStorageRequest, QueryStorageResponseSDKType, QueryAddressMetaRequest, QueryAddressMetaResponseSDKType, QueryMetaRequest, QueryMetaResponseSDKType, QueryAccountRequest, QueryViewRequest, QueryViewResponseSDKType } from "./query";
import { AccountSDKType } from "../../../burrow/acm";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.code = this.code.bind(this);
    this.abi = this.abi.bind(this);
    this.storage = this.storage.bind(this);
    this.addressMeta = this.addressMeta.bind(this);
    this.meta = this.meta.bind(this);
    this.account = this.account.bind(this);
    this.view = this.view.bind(this);
  }
  /* Code */
  async code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType> {
    const endpoint = `shentu/cvm/v1alpha1/contracts/${params.address}/code`;
    return await this.req.get<QueryCodeResponseSDKType>(endpoint);
  }
  /* Abi */
  async abi(params: QueryAbiRequest): Promise<QueryAbiResponseSDKType> {
    const endpoint = `shentu/cvm/v1alpha1/contracts/${params.address}/abi`;
    return await this.req.get<QueryAbiResponseSDKType>(endpoint);
  }
  /* Storage */
  async storage(params: QueryStorageRequest): Promise<QueryStorageResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.key !== "undefined") {
      options.params.key = params.key;
    }
    const endpoint = `shentu/cvm/v1alpha1/contracts/${params.address}/storage`;
    return await this.req.get<QueryStorageResponseSDKType>(endpoint, options);
  }
  /* AddressMeta */
  async addressMeta(params: QueryAddressMetaRequest): Promise<QueryAddressMetaResponseSDKType> {
    const endpoint = `shentu/cvm/v1alpha1/contracts/${params.address}/meta`;
    return await this.req.get<QueryAddressMetaResponseSDKType>(endpoint);
  }
  /* Meta */
  async meta(params: QueryMetaRequest): Promise<QueryMetaResponseSDKType> {
    const endpoint = `shentu/cvm/v1alpha1/meta/${params.hash}`;
    return await this.req.get<QueryMetaResponseSDKType>(endpoint);
  }
  /* Account */
  async account(params: QueryAccountRequest): Promise<acm.AccountSDKType> {
    const endpoint = `shentu/cvm/v1alpha1/account/${params.address}`;
    return await this.req.get<acm.AccountSDKType>(endpoint);
  }
  /* View */
  async view(params: QueryViewRequest): Promise<QueryViewResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.abiSpec !== "undefined") {
      options.params.abi_spec = params.abiSpec;
    }
    if (typeof params?.functionName !== "undefined") {
      options.params.function_name = params.functionName;
    }
    if (typeof params?.data !== "undefined") {
      options.params.data = params.data;
    }
    const endpoint = `shentu/cvm/v1alpha1/view/${params.caller}/${params.callee}`;
    return await this.req.get<QueryViewResponseSDKType>(endpoint, options);
  }
}