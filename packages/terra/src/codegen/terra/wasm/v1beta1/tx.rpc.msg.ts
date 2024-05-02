import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgStoreCode, MsgStoreCodeResponse, MsgMigrateCode, MsgMigrateCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateContractAdmin, MsgUpdateContractAdminResponse, MsgClearContractAdmin, MsgClearContractAdminResponse } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /** MigrateCode to submit new version Wasm code to the system */
  migrateCode(request: MsgMigrateCode): Promise<MsgMigrateCodeResponse>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
  /** Execute submits the given message data to a smart contract */
  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
  /** UpdateContractAdmin sets a new admin for a smart contract */
  updateContractAdmin(request: MsgUpdateContractAdmin): Promise<MsgUpdateContractAdminResponse>;
  /** ClearContractAdmin remove admin flag from a smart contract */
  clearContractAdmin(request: MsgClearContractAdmin): Promise<MsgClearContractAdminResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.migrateCode = this.migrateCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.executeContract = this.executeContract.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
    this.updateContractAdmin = this.updateContractAdmin.bind(this);
    this.clearContractAdmin = this.clearContractAdmin.bind(this);
  }
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("terra.wasm.v1beta1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new BinaryReader(data)));
  }
  migrateCode(request: MsgMigrateCode): Promise<MsgMigrateCodeResponse> {
    const data = MsgMigrateCode.encode(request).finish();
    const promise = this.rpc.request("terra.wasm.v1beta1.Msg", "MigrateCode", data);
    return promise.then(data => MsgMigrateCodeResponse.decode(new BinaryReader(data)));
  }
  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("terra.wasm.v1beta1.Msg", "InstantiateContract", data);
    return promise.then(data => MsgInstantiateContractResponse.decode(new BinaryReader(data)));
  }
  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("terra.wasm.v1beta1.Msg", "ExecuteContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new BinaryReader(data)));
  }
  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse> {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("terra.wasm.v1beta1.Msg", "MigrateContract", data);
    return promise.then(data => MsgMigrateContractResponse.decode(new BinaryReader(data)));
  }
  updateContractAdmin(request: MsgUpdateContractAdmin): Promise<MsgUpdateContractAdminResponse> {
    const data = MsgUpdateContractAdmin.encode(request).finish();
    const promise = this.rpc.request("terra.wasm.v1beta1.Msg", "UpdateContractAdmin", data);
    return promise.then(data => MsgUpdateContractAdminResponse.decode(new BinaryReader(data)));
  }
  clearContractAdmin(request: MsgClearContractAdmin): Promise<MsgClearContractAdminResponse> {
    const data = MsgClearContractAdmin.encode(request).finish();
    const promise = this.rpc.request("terra.wasm.v1beta1.Msg", "ClearContractAdmin", data);
    return promise.then(data => MsgClearContractAdminResponse.decode(new BinaryReader(data)));
  }
}