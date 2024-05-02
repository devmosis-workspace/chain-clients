import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createProgram(request: MsgCreateProgram): Promise<MsgCreateProgramResponse>;
    editProgram(request: MsgEditProgram): Promise<MsgEditProgramResponse>;
    activateProgram(request: MsgActivateProgram): Promise<MsgActivateProgramResponse>;
    closeProgram(request: MsgCloseProgram): Promise<MsgCloseProgramResponse>;
    submitFinding(request: MsgSubmitFinding): Promise<MsgSubmitFindingResponse>;
    editFinding(request: MsgEditFinding): Promise<MsgEditFindingResponse>;
    activateFinding(request: MsgActivateFinding): Promise<MsgActivateFindingResponse>;
    confirmFinding(request: MsgConfirmFinding): Promise<MsgConfirmFindingResponse>;
    confirmFindingPaid(request: MsgConfirmFindingPaid): Promise<MsgConfirmFindingPaidResponse>;
    closeFinding(request: MsgCloseFinding): Promise<MsgCloseFindingResponse>;
    publishFinding(request: MsgPublishFinding): Promise<MsgPublishFindingResponse>;
}
