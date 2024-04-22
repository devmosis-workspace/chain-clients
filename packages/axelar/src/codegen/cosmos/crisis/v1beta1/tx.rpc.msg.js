import { BinaryReader } from "../../../binary";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.verifyInvariant = this.verifyInvariant.bind(this);
    }
    verifyInvariant(request) {
        const data = MsgVerifyInvariant.encode(request).finish();
        const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
        return promise.then(data => MsgVerifyInvariantResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map