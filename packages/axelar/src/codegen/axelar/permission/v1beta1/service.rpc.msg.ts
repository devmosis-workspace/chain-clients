import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { RegisterControllerRequest, RegisterControllerResponse, DeregisterControllerRequest, DeregisterControllerResponse, UpdateGovernanceKeyRequest, UpdateGovernanceKeyResponse } from "./tx";
/** Msg defines the gov Msg service. */
export interface Msg {
  registerController(request: axelar.permission.v1beta1.RegisterControllerRequest): Promise<RegisterControllerResponse>;
  deregisterController(request: axelar.permission.v1beta1.DeregisterControllerRequest): Promise<DeregisterControllerResponse>;
  updateGovernanceKey(request: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerController = this.registerController.bind(this);
    this.deregisterController = this.deregisterController.bind(this);
    this.updateGovernanceKey = this.updateGovernanceKey.bind(this);
  }
  registerController(request: axelar.permission.v1beta1.RegisterControllerRequest): Promise<RegisterControllerResponse> {
    const data = axelar.permission.v1beta1.RegisterControllerRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "RegisterController", data);
    return promise.then(data => RegisterControllerResponse.decode(new _m0.Reader(data)));
  }
  deregisterController(request: axelar.permission.v1beta1.DeregisterControllerRequest): Promise<DeregisterControllerResponse> {
    const data = axelar.permission.v1beta1.DeregisterControllerRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "DeregisterController", data);
    return promise.then(data => DeregisterControllerResponse.decode(new _m0.Reader(data)));
  }
  updateGovernanceKey(request: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse> {
    const data = axelar.permission.v1beta1.UpdateGovernanceKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "UpdateGovernanceKey", data);
    return promise.then(data => UpdateGovernanceKeyResponse.decode(new _m0.Reader(data)));
  }
}