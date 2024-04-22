export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.inflation = this.inflation.bind(this);
        this.annualProvisions = this.annualProvisions.bind(this);
    }
    /* Params returns the total set of minting parameters. */
    async params(_params = {}) {
        const endpoint = `cosmos/mint/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* Inflation returns the current minting inflation value. */
    async inflation(_params = {}) {
        const endpoint = `cosmos/mint/v1beta1/inflation`;
        return await this.req.get(endpoint);
    }
    /* AnnualProvisions current minting annual provisions value. */
    async annualProvisions(_params = {}) {
        const endpoint = `cosmos/mint/v1beta1/annual_provisions`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map