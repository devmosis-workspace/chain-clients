export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.governanceKey = this.governanceKey.bind(this);
        this.params = this.params.bind(this);
    }
    /* GovernanceKey returns the multisig governance key */
    async governanceKey(_params = {}) {
        const endpoint = `axelar/permission/v1beta1/governance_key`;
        return await this.req.get(endpoint);
    }
    /* Params */
    async params(_params = {}) {
        const endpoint = `axelar/permission/v1beta1/params`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=service.lcd.js.map