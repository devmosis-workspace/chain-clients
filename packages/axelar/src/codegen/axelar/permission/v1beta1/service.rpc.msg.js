import { BinaryReader } from "../../../binary";
import { RegisterControllerResponse, DeregisterControllerResponse, UpdateGovernanceKeyResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerController = this.registerController.bind(this);
        this.deregisterController = this.deregisterController.bind(this);
        this.updateGovernanceKey = this.updateGovernanceKey.bind(this);
    }
    registerController(request) {
        const data = axelar.permission.v1beta1.RegisterControllerRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "RegisterController", data);
        return promise.then(data => RegisterControllerResponse.decode(new BinaryReader(data)));
    }
    deregisterController(request) {
        const data = axelar.permission.v1beta1.DeregisterControllerRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "DeregisterController", data);
        return promise.then(data => DeregisterControllerResponse.decode(new BinaryReader(data)));
    }
    updateGovernanceKey(request) {
        const data = axelar.permission.v1beta1.UpdateGovernanceKeyRequest.encode(request).finish();
        const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "UpdateGovernanceKey", data);
        return promise.then(data => UpdateGovernanceKeyResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=service.rpc.msg.js.map