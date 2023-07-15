import { Rpc } from "../../../helpers";
import { MsgCreateIssuer, MsgCreateIssuerResponse, MsgDestroyIssuer, MsgDestroyIssuerResponse, MsgSetGasPrices, MsgSetGasPricesResponse, MsgReplaceAuthority, MsgReplaceAuthorityResponse, MsgScheduleUpgrade, MsgScheduleUpgradeResponse, MsgSetParameters, MsgSetParametersResponse } from "./tx";
export interface Msg {
    createIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
    destroyIssuer(request: MsgDestroyIssuer): Promise<MsgDestroyIssuerResponse>;
    setGasPrices(request: MsgSetGasPrices): Promise<MsgSetGasPricesResponse>;
    replaceAuthority(request: MsgReplaceAuthority): Promise<MsgReplaceAuthorityResponse>;
    scheduleUpgrade(request: MsgScheduleUpgrade): Promise<MsgScheduleUpgradeResponse>;
    setParameters(request: MsgSetParameters): Promise<MsgSetParametersResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
    destroyIssuer(request: MsgDestroyIssuer): Promise<MsgDestroyIssuerResponse>;
    setGasPrices(request: MsgSetGasPrices): Promise<MsgSetGasPricesResponse>;
    replaceAuthority(request: MsgReplaceAuthority): Promise<MsgReplaceAuthorityResponse>;
    scheduleUpgrade(request: MsgScheduleUpgrade): Promise<MsgScheduleUpgradeResponse>;
    setParameters(request: MsgSetParameters): Promise<MsgSetParametersResponse>;
}
