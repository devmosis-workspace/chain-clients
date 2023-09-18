import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse } from "./msg";
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
  /** Execute submits the given message data to a smart contract */
  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.executeContract = this.executeContract.bind(this);
  }
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new BinaryReader(data)));
  }
  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Msg", "InstantiateContract", data);
    return promise.then(data => MsgInstantiateContractResponse.decode(new BinaryReader(data)));
  }
  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("secret.compute.v1beta1.Msg", "ExecuteContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new BinaryReader(data)));
  }
}