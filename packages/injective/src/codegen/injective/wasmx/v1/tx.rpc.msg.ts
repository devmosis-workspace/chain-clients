import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateContract, MsgUpdateContractResponse, MsgActivateContract, MsgActivateContractResponse, MsgDeactivateContract, MsgDeactivateContractResponse, MsgExecuteContractCompat, MsgExecuteContractCompatResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterContract, MsgRegisterContractResponse } from "./tx";
/** Msg defines the wasmx Msg service. */
export interface Msg {
  updateRegistryContractParams(request: MsgUpdateContract): Promise<MsgUpdateContractResponse>;
  activateRegistryContract(request: MsgActivateContract): Promise<MsgActivateContractResponse>;
  deactivateRegistryContract(request: MsgDeactivateContract): Promise<MsgDeactivateContractResponse>;
  executeContractCompat(request: MsgExecuteContractCompat): Promise<MsgExecuteContractCompatResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateRegistryContractParams = this.updateRegistryContractParams.bind(this);
    this.activateRegistryContract = this.activateRegistryContract.bind(this);
    this.deactivateRegistryContract = this.deactivateRegistryContract.bind(this);
    this.executeContractCompat = this.executeContractCompat.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.registerContract = this.registerContract.bind(this);
  }
  updateRegistryContractParams(request: MsgUpdateContract): Promise<MsgUpdateContractResponse> {
    const data = MsgUpdateContract.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "UpdateRegistryContractParams", data);
    return promise.then(data => MsgUpdateContractResponse.decode(new _m0.Reader(data)));
  }
  activateRegistryContract(request: MsgActivateContract): Promise<MsgActivateContractResponse> {
    const data = MsgActivateContract.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "ActivateRegistryContract", data);
    return promise.then(data => MsgActivateContractResponse.decode(new _m0.Reader(data)));
  }
  deactivateRegistryContract(request: MsgDeactivateContract): Promise<MsgDeactivateContractResponse> {
    const data = MsgDeactivateContract.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "DeactivateRegistryContract", data);
    return promise.then(data => MsgDeactivateContractResponse.decode(new _m0.Reader(data)));
  }
  executeContractCompat(request: MsgExecuteContractCompat): Promise<MsgExecuteContractCompatResponse> {
    const data = MsgExecuteContractCompat.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "ExecuteContractCompat", data);
    return promise.then(data => MsgExecuteContractCompatResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
  registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse> {
    const data = MsgRegisterContract.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Msg", "RegisterContract", data);
    return promise.then(data => MsgRegisterContractResponse.decode(new _m0.Reader(data)));
  }
}