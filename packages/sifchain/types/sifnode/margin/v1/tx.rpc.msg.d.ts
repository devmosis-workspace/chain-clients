import { Rpc } from "../../../helpers";
import { MsgOpen, MsgOpenResponse, MsgClose, MsgCloseResponse, MsgForceClose, MsgForceCloseResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdatePools, MsgUpdatePoolsResponse, MsgUpdateRowanCollateral, MsgUpdateRowanCollateralResponse, MsgWhitelist, MsgWhitelistResponse, MsgDewhitelist, MsgDewhitelistResponse, MsgAdminClose, MsgAdminCloseResponse, MsgAdminCloseAll, MsgAdminCloseAllResponse } from "./tx";
export interface Msg {
    open(request: MsgOpen): Promise<MsgOpenResponse>;
    close(request: MsgClose): Promise<MsgCloseResponse>;
    forceClose(request: MsgForceClose): Promise<MsgForceCloseResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    updatePools(request: MsgUpdatePools): Promise<MsgUpdatePoolsResponse>;
    updateRowanCollateral(request: MsgUpdateRowanCollateral): Promise<MsgUpdateRowanCollateralResponse>;
    whitelist(request: MsgWhitelist): Promise<MsgWhitelistResponse>;
    dewhitelist(request: MsgDewhitelist): Promise<MsgDewhitelistResponse>;
    adminClose(request: MsgAdminClose): Promise<MsgAdminCloseResponse>;
    adminCloseAll(request: MsgAdminCloseAll): Promise<MsgAdminCloseAllResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    open(request: MsgOpen): Promise<MsgOpenResponse>;
    close(request: MsgClose): Promise<MsgCloseResponse>;
    forceClose(request: MsgForceClose): Promise<MsgForceCloseResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    updatePools(request: MsgUpdatePools): Promise<MsgUpdatePoolsResponse>;
    updateRowanCollateral(request: MsgUpdateRowanCollateral): Promise<MsgUpdateRowanCollateralResponse>;
    whitelist(request: MsgWhitelist): Promise<MsgWhitelistResponse>;
    dewhitelist(request: MsgDewhitelist): Promise<MsgDewhitelistResponse>;
    adminClose(request: MsgAdminClose): Promise<MsgAdminCloseResponse>;
    adminCloseAll(request: MsgAdminCloseAll): Promise<MsgAdminCloseAllResponse>;
}
