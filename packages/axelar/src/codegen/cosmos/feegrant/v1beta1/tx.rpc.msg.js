import { BinaryReader } from "../../../binary";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.grantAllowance = this.grantAllowance.bind(this);
        this.revokeAllowance = this.revokeAllowance.bind(this);
    }
    grantAllowance(request) {
        const data = MsgGrantAllowance.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
        return promise.then(data => MsgGrantAllowanceResponse.decode(new BinaryReader(data)));
    }
    revokeAllowance(request) {
        const data = MsgRevokeAllowance.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
        return promise.then(data => MsgRevokeAllowanceResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map