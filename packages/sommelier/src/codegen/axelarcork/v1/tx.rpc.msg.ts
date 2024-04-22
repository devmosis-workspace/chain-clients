import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgScheduleAxelarCorkRequest, MsgScheduleAxelarCorkResponse, MsgRelayAxelarCorkRequest, MsgRelayAxelarCorkResponse, MsgBumpAxelarCorkGasRequest, MsgBumpAxelarCorkGasResponse, MsgCancelAxelarCorkRequest, MsgCancelAxelarCorkResponse } from "./tx";
/** MsgService defines the msgs that the cork module handles */
export interface Msg {
  scheduleCork(request: MsgScheduleAxelarCorkRequest): Promise<MsgScheduleAxelarCorkResponse>;
  relayCork(request: MsgRelayAxelarCorkRequest): Promise<MsgRelayAxelarCorkResponse>;
  bumpCorkGas(request: MsgBumpAxelarCorkGasRequest): Promise<MsgBumpAxelarCorkGasResponse>;
  cancelScheduledCork(request: MsgCancelAxelarCorkRequest): Promise<MsgCancelAxelarCorkResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.scheduleCork = this.scheduleCork.bind(this);
    this.relayCork = this.relayCork.bind(this);
    this.bumpCorkGas = this.bumpCorkGas.bind(this);
    this.cancelScheduledCork = this.cancelScheduledCork.bind(this);
  }
  scheduleCork(request: MsgScheduleAxelarCorkRequest): Promise<MsgScheduleAxelarCorkResponse> {
    const data = MsgScheduleAxelarCorkRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Msg", "ScheduleCork", data);
    return promise.then(data => MsgScheduleAxelarCorkResponse.decode(new BinaryReader(data)));
  }
  relayCork(request: MsgRelayAxelarCorkRequest): Promise<MsgRelayAxelarCorkResponse> {
    const data = MsgRelayAxelarCorkRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Msg", "RelayCork", data);
    return promise.then(data => MsgRelayAxelarCorkResponse.decode(new BinaryReader(data)));
  }
  bumpCorkGas(request: MsgBumpAxelarCorkGasRequest): Promise<MsgBumpAxelarCorkGasResponse> {
    const data = MsgBumpAxelarCorkGasRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Msg", "BumpCorkGas", data);
    return promise.then(data => MsgBumpAxelarCorkGasResponse.decode(new BinaryReader(data)));
  }
  cancelScheduledCork(request: MsgCancelAxelarCorkRequest): Promise<MsgCancelAxelarCorkResponse> {
    const data = MsgCancelAxelarCorkRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Msg", "CancelScheduledCork", data);
    return promise.then(data => MsgCancelAxelarCorkResponse.decode(new BinaryReader(data)));
  }
}