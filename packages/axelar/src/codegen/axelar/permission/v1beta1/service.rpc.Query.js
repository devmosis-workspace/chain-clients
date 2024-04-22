import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGovernanceKeyRequest, QueryGovernanceKeyResponse, ParamsRequest, ParamsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.governanceKey = this.governanceKey.bind(this);
        this.params = this.params.bind(this);
    }
    governanceKey(request = {}) {
        const data = QueryGovernanceKeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Query", "GovernanceKey", data);
        return promise.then(data => QueryGovernanceKeyResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Query", "Params", data);
        return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        governanceKey(request) {
            return queryService.governanceKey(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
//# sourceMappingURL=service.rpc.Query.js.map