import { MsgCloseGroup, MsgCloseGroupResponse, MsgPauseGroup, MsgPauseGroupResponse, MsgStartGroup, MsgStartGroupResponse } from "./group";
import { Rpc } from "../../../helpers";
import { MsgCreateDeployment, MsgCreateDeploymentResponse, MsgDepositDeployment, MsgDepositDeploymentResponse, MsgUpdateDeployment, MsgUpdateDeploymentResponse, MsgCloseDeployment, MsgCloseDeploymentResponse } from "./deployment";
/** Msg defines the deployment Msg service. */
export interface Msg {
    /** CreateDeployment defines a method to create new deployment given proper inputs. */
    createDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    /** DepositDeployment deposits more funds into the deployment account */
    depositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    /** UpdateDeployment defines a method to update a deployment given proper inputs. */
    updateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    /** CloseDeployment defines a method to close a deployment given proper inputs. */
    closeDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
    closeGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
    pauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    /** StartGroup defines a method to close a group of a deployment given proper inputs. */
    startGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
    depositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
    updateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
    closeDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
    closeGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
    pauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
    startGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
