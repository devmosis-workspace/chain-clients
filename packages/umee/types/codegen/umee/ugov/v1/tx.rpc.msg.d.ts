import { Rpc } from "../../../helpers";
import { MsgGovUpdateMinGasPrice, MsgGovUpdateMinGasPriceResponse } from "./tx";
/** Msg defines the x/ugov module's Msg service. */
export interface Msg {
    /** GovUpdateMinGasPrice sets protocol controlled tx min fees. */
    govUpdateMinGasPrice(request: MsgGovUpdateMinGasPrice): Promise<MsgGovUpdateMinGasPriceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    govUpdateMinGasPrice(request: MsgGovUpdateMinGasPrice): Promise<MsgGovUpdateMinGasPriceResponse>;
}
