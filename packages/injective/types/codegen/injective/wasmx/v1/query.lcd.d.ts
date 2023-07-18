import { LCDClient } from "@osmonauts/lcd";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponseSDKType, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    wasmxParams(_params?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponseSDKType>;
    contractRegistrationInfo(params: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponseSDKType>;
    wasmxModuleState(_params?: QueryModuleStateRequest): Promise<QueryModuleStateResponseSDKType>;
}
