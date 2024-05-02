import { Rpc } from "../../../helpers";
import { ComputeTaxRequest, ComputeTaxResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
    /** EstimateFee simulates executing a transaction for estimating gas usage. */
    computeTax(request: ComputeTaxRequest): Promise<ComputeTaxResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    computeTax(request: ComputeTaxRequest): Promise<ComputeTaxResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    computeTax(request: ComputeTaxRequest): Promise<ComputeTaxResponse>;
};
