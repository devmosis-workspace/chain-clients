import { BinaryReader } from "../../../binary";
import { MsgUnjail, MsgUnjailResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.unjail = this.unjail.bind(this);
    }
    unjail(request) {
        const data = MsgUnjail.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
        return promise.then(data => MsgUnjailResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map