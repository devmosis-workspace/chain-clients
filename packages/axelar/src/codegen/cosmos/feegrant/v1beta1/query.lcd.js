import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.allowance = this.allowance.bind(this);
        this.allowances = this.allowances.bind(this);
        this.allowancesByGranter = this.allowancesByGranter.bind(this);
    }
    /* Allowance returns fee granted to the grantee by the granter. */
    async allowance(params) {
        const endpoint = `cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`;
        return await this.req.get(endpoint);
    }
    /* Allowances returns all the grants for address. */
    async allowances(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/feegrant/v1beta1/allowances/${params.grantee}`;
        return await this.req.get(endpoint, options);
    }
    /* AllowancesByGranter returns all the grants given by an address
     Since v0.46 */
    async allowancesByGranter(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/feegrant/v1beta1/issued/${params.granter}`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map