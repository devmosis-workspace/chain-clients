import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterEVMAddress, MsgRegisterEVMAddressResponse } from "./tx";
/** Msg is the message server for receiving qgb transactions */
export interface Msg {
  /**
   * RegisterEVMAddress records an evm address for the validator which is used
   * by the relayer to aggregate signatures. A validator can only register a
   * single EVM address. The EVM address can be overridden by a later message.
   * There are no validity checks of the EVM addresses existence on the Ethereum
   * state machine.
   */
  registerEVMAddress(request: MsgRegisterEVMAddress): Promise<MsgRegisterEVMAddressResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerEVMAddress = this.registerEVMAddress.bind(this);
  }
  registerEVMAddress(request: MsgRegisterEVMAddress): Promise<MsgRegisterEVMAddressResponse> {
    const data = MsgRegisterEVMAddress.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Msg", "RegisterEVMAddress", data);
    return promise.then(data => MsgRegisterEVMAddressResponse.decode(new BinaryReader(data)));
  }
}