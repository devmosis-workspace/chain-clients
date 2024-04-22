import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
export class ServiceClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.getNodeInfo = this.getNodeInfo.bind(this);
        this.getSyncing = this.getSyncing.bind(this);
        this.getLatestBlock = this.getLatestBlock.bind(this);
        this.getBlockByHeight = this.getBlockByHeight.bind(this);
        this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
        this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    }
    getNodeInfo(request = {}) {
        const data = GetNodeInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then(data => GetNodeInfoResponse.decode(new BinaryReader(data)));
    }
    getSyncing(request = {}) {
        const data = GetSyncingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then(data => GetSyncingResponse.decode(new BinaryReader(data)));
    }
    getLatestBlock(request = {}) {
        const data = GetLatestBlockRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then(data => GetLatestBlockResponse.decode(new BinaryReader(data)));
    }
    getBlockByHeight(request) {
        const data = GetBlockByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then(data => GetBlockByHeightResponse.decode(new BinaryReader(data)));
    }
    getLatestValidatorSet(request = {
        pagination: undefined
    }) {
        const data = GetLatestValidatorSetRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then(data => GetLatestValidatorSetResponse.decode(new BinaryReader(data)));
    }
    getValidatorSetByHeight(request) {
        const data = GetValidatorSetByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then(data => GetValidatorSetByHeightResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new ServiceClientImpl(rpc);
    return {
        getNodeInfo(request) {
            return queryService.getNodeInfo(request);
        },
        getSyncing(request) {
            return queryService.getSyncing(request);
        },
        getLatestBlock(request) {
            return queryService.getLatestBlock(request);
        },
        getBlockByHeight(request) {
            return queryService.getBlockByHeight(request);
        },
        getLatestValidatorSet(request) {
            return queryService.getLatestValidatorSet(request);
        },
        getValidatorSetByHeight(request) {
            return queryService.getValidatorSetByHeight(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Service.js.map