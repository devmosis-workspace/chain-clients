export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
    }
    /* Params queries a specific parameter of a module, given its subspace and
     key. */
    async params(params) {
        const options = {
            params: {}
        };
        if (typeof params?.subspace !== "undefined") {
            options.params.subspace = params.subspace;
        }
        if (typeof params?.key !== "undefined") {
            options.params.key = params.key;
        }
        const endpoint = `cosmos/params/v1beta1/params`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map