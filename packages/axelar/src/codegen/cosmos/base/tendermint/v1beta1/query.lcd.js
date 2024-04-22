import { setPaginationParams } from "../../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.getNodeInfo = this.getNodeInfo.bind(this);
        this.getSyncing = this.getSyncing.bind(this);
        this.getLatestBlock = this.getLatestBlock.bind(this);
        this.getBlockByHeight = this.getBlockByHeight.bind(this);
        this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
        this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    }
    /* GetNodeInfo queries the current node info. */
    async getNodeInfo(_params = {}) {
        const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
        return await this.req.get(endpoint);
    }
    /* GetSyncing queries node syncing. */
    async getSyncing(_params = {}) {
        const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
        return await this.req.get(endpoint);
    }
    /* GetLatestBlock returns the latest block. */
    async getLatestBlock(_params = {}) {
        const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
        return await this.req.get(endpoint);
    }
    /* GetBlockByHeight queries block for given height. */
    async getBlockByHeight(params) {
        const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
        return await this.req.get(endpoint);
    }
    /* GetLatestValidatorSet queries latest validator-set. */
    async getLatestValidatorSet(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
        return await this.req.get(endpoint, options);
    }
    /* GetValidatorSetByHeight queries validator-set at a given height. */
    async getValidatorSetByHeight(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map