import { Rpc } from "../../../helpers";
import { MsgFundPool, MsgFundPoolResponse, MsgDefundPool, MsgDefundPoolResponse, MsgCreatePool, MsgCreatePoolResponse, MsgUpdatePool, MsgUpdatePoolResponse, MsgDisablePool, MsgDisablePoolResponse, MsgEnablePool, MsgEnablePoolResponse, MsgScheduleRuntimeUpgrade, MsgScheduleRuntimeUpgradeResponse, MsgCancelRuntimeUpgrade, MsgCancelRuntimeUpgradeResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** FundPool ... */
    fundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
    /** DefundPool ... */
    defundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
    /**
     * CreatePool defines a governance operation for creating a new pool.
     * The authority is hard-coded to the x/gov module account.
     */
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    /**
     * UpdatePool defines a governance operation for updating an existing pool.
     * The authority is hard-coded to the x/gov module account.
     */
    updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    /**
     * DisablePool defines a governance operation for disabling an existing pool.
     * The authority is hard-coded to the x/gov module account.
     */
    disablePool(request: MsgDisablePool): Promise<MsgDisablePoolResponse>;
    /**
     * EnablePool defines a governance operation for enabling an existing pool.
     * The authority is hard-coded to the x/gov module account.
     */
    enablePool(request: MsgEnablePool): Promise<MsgEnablePoolResponse>;
    /**
     * ScheduleRuntimeUpgrade defines a governance operation for scheduling a runtime upgrade.
     * The authority is hard-coded to the x/gov module account.
     */
    scheduleRuntimeUpgrade(request: MsgScheduleRuntimeUpgrade): Promise<MsgScheduleRuntimeUpgradeResponse>;
    /**
     * CancelRuntimeUpgrade defines a governance operation for cancelling a runtime upgrade.
     * The authority is hard-coded to the x/gov module account.
     */
    cancelRuntimeUpgrade(request: MsgCancelRuntimeUpgrade): Promise<MsgCancelRuntimeUpgradeResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/pool module
     * parameters. The authority is hard-coded to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    fundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
    defundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    disablePool(request: MsgDisablePool): Promise<MsgDisablePoolResponse>;
    enablePool(request: MsgEnablePool): Promise<MsgEnablePoolResponse>;
    scheduleRuntimeUpgrade(request: MsgScheduleRuntimeUpgrade): Promise<MsgScheduleRuntimeUpgradeResponse>;
    cancelRuntimeUpgrade(request: MsgCancelRuntimeUpgrade): Promise<MsgCancelRuntimeUpgradeResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
