import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegister, MsgRegisterResponse, MsgDeregister, MsgDeregisterResponse, MsgSetRegistry, MsgSetRegistryResponse } from "./tx";
export interface Msg {
  register(request: MsgRegister): Promise<MsgRegisterResponse>;
  deregister(request: MsgDeregister): Promise<MsgDeregisterResponse>;
  setRegistry(request: MsgSetRegistry): Promise<MsgSetRegistryResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.register = this.register.bind(this);
    this.deregister = this.deregister.bind(this);
    this.setRegistry = this.setRegistry.bind(this);
  }
  register(request: MsgRegister): Promise<MsgRegisterResponse> {
    const data = MsgRegister.encode(request).finish();
    const promise = this.rpc.request("sifnode.tokenregistry.v1.Msg", "Register", data);
    return promise.then(data => MsgRegisterResponse.decode(new BinaryReader(data)));
  }
  deregister(request: MsgDeregister): Promise<MsgDeregisterResponse> {
    const data = MsgDeregister.encode(request).finish();
    const promise = this.rpc.request("sifnode.tokenregistry.v1.Msg", "Deregister", data);
    return promise.then(data => MsgDeregisterResponse.decode(new BinaryReader(data)));
  }
  setRegistry(request: MsgSetRegistry): Promise<MsgSetRegistryResponse> {
    const data = MsgSetRegistry.encode(request).finish();
    const promise = this.rpc.request("sifnode.tokenregistry.v1.Msg", "SetRegistry", data);
    return promise.then(data => MsgSetRegistryResponse.decode(new BinaryReader(data)));
  }
}