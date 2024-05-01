import { Rpc } from "../../../helpers";
import { MsgGovUpdateMinGasPrice, MsgGovUpdateMinGasPriceResponse, MsgGovSetEmergencyGroup, MsgGovSetEmergencyGroupResponse, MsgGovUpdateInflationParams, GovUpdateInflationParamsResponse } from "./tx";
/** Msg defines the x/ugov module's Msg service. */
export interface Msg {
    /** GovUpdateMinGasPrice sets protocol controlled tx min fees. */
    govUpdateMinGasPrice(request: MsgGovUpdateMinGasPrice): Promise<MsgGovUpdateMinGasPriceResponse>;
    /** GovSetEmergencyGroup sets emergency group address. */
    govSetEmergencyGroup(request: MsgGovSetEmergencyGroup): Promise<MsgGovSetEmergencyGroupResponse>;
    /** GovUpdateInflationParams sets new params for inflation rate change. */
    govUpdateInflationParams(request: MsgGovUpdateInflationParams): Promise<GovUpdateInflationParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    govUpdateMinGasPrice(request: MsgGovUpdateMinGasPrice): Promise<MsgGovUpdateMinGasPriceResponse>;
    govSetEmergencyGroup(request: MsgGovSetEmergencyGroup): Promise<MsgGovSetEmergencyGroupResponse>;
    govUpdateInflationParams(request: MsgGovUpdateInflationParams): Promise<GovUpdateInflationParamsResponse>;
}
