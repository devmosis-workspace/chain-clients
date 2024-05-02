import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateProgram, MsgCreateProgramResponse, MsgEditProgram, MsgEditProgramResponse, MsgActivateProgram, MsgActivateProgramResponse, MsgCloseProgram, MsgCloseProgramResponse, MsgSubmitFinding, MsgSubmitFindingResponse, MsgEditFinding, MsgEditFindingResponse, MsgActivateFinding, MsgActivateFindingResponse, MsgConfirmFinding, MsgConfirmFindingResponse, MsgConfirmFindingPaid, MsgConfirmFindingPaidResponse, MsgCloseFinding, MsgCloseFindingResponse, MsgPublishFinding, MsgPublishFindingResponse } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateProgram defines a method for creating a new program. */
  createProgram(request: MsgCreateProgram): Promise<MsgCreateProgramResponse>;
  /** EditProgram defines a method for modifying a program. */
  editProgram(request: MsgEditProgram): Promise<MsgEditProgramResponse>;
  /** Activate a program status by program_id */
  activateProgram(request: MsgActivateProgram): Promise<MsgActivateProgramResponse>;
  /** Closed a program status by program_id */
  closeProgram(request: MsgCloseProgram): Promise<MsgCloseProgramResponse>;
  /** SubmitFinding defines a method for submitting a new finding. */
  submitFinding(request: MsgSubmitFinding): Promise<MsgSubmitFindingResponse>;
  /** EditFinding defines a method for editing a new finding. */
  editFinding(request: MsgEditFinding): Promise<MsgEditFindingResponse>;
  /** ActivateFinding defines a method for activate a new finding. */
  activateFinding(request: MsgActivateFinding): Promise<MsgActivateFindingResponse>;
  /** ConfirmFinding defines a method for host confirm a finding. */
  confirmFinding(request: MsgConfirmFinding): Promise<MsgConfirmFindingResponse>;
  /** ConfirmFindingPaid defines a method for submitter confirm a finding paid */
  confirmFindingPaid(request: MsgConfirmFindingPaid): Promise<MsgConfirmFindingPaidResponse>;
  /** CloseFinding defines a method for submitter or certifier close a finding */
  closeFinding(request: MsgCloseFinding): Promise<MsgCloseFindingResponse>;
  /** PublishFinding defines a method for publish a finding. */
  publishFinding(request: MsgPublishFinding): Promise<MsgPublishFindingResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createProgram = this.createProgram.bind(this);
    this.editProgram = this.editProgram.bind(this);
    this.activateProgram = this.activateProgram.bind(this);
    this.closeProgram = this.closeProgram.bind(this);
    this.submitFinding = this.submitFinding.bind(this);
    this.editFinding = this.editFinding.bind(this);
    this.activateFinding = this.activateFinding.bind(this);
    this.confirmFinding = this.confirmFinding.bind(this);
    this.confirmFindingPaid = this.confirmFindingPaid.bind(this);
    this.closeFinding = this.closeFinding.bind(this);
    this.publishFinding = this.publishFinding.bind(this);
  }
  createProgram(request: MsgCreateProgram): Promise<MsgCreateProgramResponse> {
    const data = MsgCreateProgram.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "CreateProgram", data);
    return promise.then(data => MsgCreateProgramResponse.decode(new BinaryReader(data)));
  }
  editProgram(request: MsgEditProgram): Promise<MsgEditProgramResponse> {
    const data = MsgEditProgram.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "EditProgram", data);
    return promise.then(data => MsgEditProgramResponse.decode(new BinaryReader(data)));
  }
  activateProgram(request: MsgActivateProgram): Promise<MsgActivateProgramResponse> {
    const data = MsgActivateProgram.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "ActivateProgram", data);
    return promise.then(data => MsgActivateProgramResponse.decode(new BinaryReader(data)));
  }
  closeProgram(request: MsgCloseProgram): Promise<MsgCloseProgramResponse> {
    const data = MsgCloseProgram.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "CloseProgram", data);
    return promise.then(data => MsgCloseProgramResponse.decode(new BinaryReader(data)));
  }
  submitFinding(request: MsgSubmitFinding): Promise<MsgSubmitFindingResponse> {
    const data = MsgSubmitFinding.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "SubmitFinding", data);
    return promise.then(data => MsgSubmitFindingResponse.decode(new BinaryReader(data)));
  }
  editFinding(request: MsgEditFinding): Promise<MsgEditFindingResponse> {
    const data = MsgEditFinding.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "EditFinding", data);
    return promise.then(data => MsgEditFindingResponse.decode(new BinaryReader(data)));
  }
  activateFinding(request: MsgActivateFinding): Promise<MsgActivateFindingResponse> {
    const data = MsgActivateFinding.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "ActivateFinding", data);
    return promise.then(data => MsgActivateFindingResponse.decode(new BinaryReader(data)));
  }
  confirmFinding(request: MsgConfirmFinding): Promise<MsgConfirmFindingResponse> {
    const data = MsgConfirmFinding.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "ConfirmFinding", data);
    return promise.then(data => MsgConfirmFindingResponse.decode(new BinaryReader(data)));
  }
  confirmFindingPaid(request: MsgConfirmFindingPaid): Promise<MsgConfirmFindingPaidResponse> {
    const data = MsgConfirmFindingPaid.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "ConfirmFindingPaid", data);
    return promise.then(data => MsgConfirmFindingPaidResponse.decode(new BinaryReader(data)));
  }
  closeFinding(request: MsgCloseFinding): Promise<MsgCloseFindingResponse> {
    const data = MsgCloseFinding.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "CloseFinding", data);
    return promise.then(data => MsgCloseFindingResponse.decode(new BinaryReader(data)));
  }
  publishFinding(request: MsgPublishFinding): Promise<MsgPublishFindingResponse> {
    const data = MsgPublishFinding.encode(request).finish();
    const promise = this.rpc.request("shentu.bounty.v1.Msg", "PublishFinding", data);
    return promise.then(data => MsgPublishFindingResponse.decode(new BinaryReader(data)));
  }
}