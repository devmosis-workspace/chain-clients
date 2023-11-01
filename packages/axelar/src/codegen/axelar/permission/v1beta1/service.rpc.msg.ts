import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { RegisterControllerRequest, RegisterControllerResponse, DeregisterControllerRequest, DeregisterControllerResponse, UpdateGovernanceKeyRequest, UpdateGovernanceKeyResponse } from "./tx";
/** Msg defines the gov Msg service. */
export interface Msg {
  registerController(request: RegisterControllerRequest): Promise<RegisterControllerResponse>;
  deregisterController(request: DeregisterControllerRequest): Promise<DeregisterControllerResponse>;
  updateGovernanceKey(request: UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerController = this.registerController.bind(this);
    this.deregisterController = this.deregisterController.bind(this);
    this.updateGovernanceKey = this.updateGovernanceKey.bind(this);
  }
  registerController(request: RegisterControllerRequest): Promise<RegisterControllerResponse> {
    const data = RegisterControllerRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "RegisterController", data);
    return promise.then(data => RegisterControllerResponse.decode(new BinaryReader(data)));
  }
  deregisterController(request: DeregisterControllerRequest): Promise<DeregisterControllerResponse> {
    const data = DeregisterControllerRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "DeregisterController", data);
    return promise.then(data => DeregisterControllerResponse.decode(new BinaryReader(data)));
  }
  updateGovernanceKey(request: UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse> {
    const data = UpdateGovernanceKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "UpdateGovernanceKey", data);
    return promise.then(data => UpdateGovernanceKeyResponse.decode(new BinaryReader(data)));
  }
}
