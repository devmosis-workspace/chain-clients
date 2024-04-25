import { Rpc } from "../../../helpers";
import { MsgCreateFunder, MsgCreateFunderResponse, MsgUpdateFunder, MsgUpdateFunderResponse, MsgFundPool, MsgFundPoolResponse, MsgDefundPool, MsgDefundPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** CreateFunder ... */
    createFunder(request: MsgCreateFunder): Promise<MsgCreateFunderResponse>;
    /** UpdateFunder ... */
    updateFunder(request: MsgUpdateFunder): Promise<MsgUpdateFunderResponse>;
    /** FundPool ... */
    fundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
    /** DefundPool ... */
    defundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/delegation module
     * parameters. The authority is hard-coded to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createFunder(request: MsgCreateFunder): Promise<MsgCreateFunderResponse>;
    updateFunder(request: MsgUpdateFunder): Promise<MsgUpdateFunderResponse>;
    fundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
    defundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
