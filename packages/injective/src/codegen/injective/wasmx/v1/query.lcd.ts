import { LCDClient } from "@osmonauts/lcd";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponseSDKType, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.wasmxParams = this.wasmxParams.bind(this);
    this.contractRegistrationInfo = this.contractRegistrationInfo.bind(this);
    this.wasmxModuleState = this.wasmxModuleState.bind(this);
  }
  /* Retrieves wasmx params */
  async wasmxParams(_params: QueryWasmxParamsRequest = {}): Promise<QueryWasmxParamsResponseSDKType> {
    const endpoint = `injective/wasmx/v1/params`;
    return await this.req.get<QueryWasmxParamsResponseSDKType>(endpoint);
  }
  /* Retrieves contract registration info */
  async contractRegistrationInfo(params: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponseSDKType> {
    const endpoint = `injective/wasmx/v1/registration_info/${params.contractAddress}`;
    return await this.req.get<QueryContractRegistrationInfoResponseSDKType>(endpoint);
  }
  /* Retrieves the entire wasmx module's state */
  async wasmxModuleState(_params: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponseSDKType> {
    const endpoint = `injective/wasmx/v1/module_state`;
    return await this.req.get<QueryModuleStateResponseSDKType>(endpoint);
  }
}