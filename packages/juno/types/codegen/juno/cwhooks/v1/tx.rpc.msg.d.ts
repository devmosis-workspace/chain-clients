import { Rpc } from "../../../helpers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterStaking, MsgRegisterStakingResponse, MsgUnregisterStaking, MsgUnregisterStakingResponse, MsgRegisterGovernance, MsgRegisterGovernanceResponse, MsgUnregisterGovernance, MsgUnregisterGovernanceResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/clock module
     * parameters. The authority is hard-coded to the x/gov module account.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /** RegisterStaking. */
    registerStaking(request: MsgRegisterStaking): Promise<MsgRegisterStakingResponse>;
    /** UnregisterStaking. */
    unregisterStaking(request: MsgUnregisterStaking): Promise<MsgUnregisterStakingResponse>;
    /** RegisterGovernance. */
    registerGovernance(request: MsgRegisterGovernance): Promise<MsgRegisterGovernanceResponse>;
    /** UnregisterGovernance. */
    unregisterGovernance(request: MsgUnregisterGovernance): Promise<MsgUnregisterGovernanceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    registerStaking(request: MsgRegisterStaking): Promise<MsgRegisterStakingResponse>;
    unregisterStaking(request: MsgUnregisterStaking): Promise<MsgUnregisterStakingResponse>;
    registerGovernance(request: MsgRegisterGovernance): Promise<MsgRegisterGovernanceResponse>;
    unregisterGovernance(request: MsgUnregisterGovernance): Promise<MsgUnregisterGovernanceResponse>;
}
