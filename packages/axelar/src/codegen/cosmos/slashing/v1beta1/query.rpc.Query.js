import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.signingInfo = this.signingInfo.bind(this);
        this.signingInfos = this.signingInfos.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    signingInfo(request) {
        const data = QuerySigningInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
        return promise.then(data => QuerySigningInfoResponse.decode(new BinaryReader(data)));
    }
    signingInfos(request = {
        pagination: undefined
    }) {
        const data = QuerySigningInfosRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
        return promise.then(data => QuerySigningInfosResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        signingInfo(request) {
            return queryService.signingInfo(request);
        },
        signingInfos(request) {
            return queryService.signingInfos(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map