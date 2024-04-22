import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.evidence = this.evidence.bind(this);
        this.allEvidence = this.allEvidence.bind(this);
    }
    /* Evidence queries evidence based on evidence hash. */
    async evidence(params) {
        const endpoint = `cosmos/evidence/v1beta1/evidence/${params.evidenceHash}`;
        return await this.req.get(endpoint);
    }
    /* AllEvidence queries all evidence. */
    async allEvidence(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `cosmos/evidence/v1beta1/evidence`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map