import { Rpc } from "../../../helpers";
import { MsgIncreaseMintable, MsgIncreaseMintableResponse, MsgDecreaseMintable, MsgDecreaseMintableResponse, MsgRevokeLiquidityProvider, MsgRevokeLiquidityProviderResponse, MsgSetInflation, MsgSetInflationResponse } from "./tx";
export interface Msg {
    increaseMintable(request: MsgIncreaseMintable): Promise<MsgIncreaseMintableResponse>;
    decreaseMintable(request: MsgDecreaseMintable): Promise<MsgDecreaseMintableResponse>;
    revokeLiquidityProvider(request: MsgRevokeLiquidityProvider): Promise<MsgRevokeLiquidityProviderResponse>;
    setInflation(request: MsgSetInflation): Promise<MsgSetInflationResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    increaseMintable(request: MsgIncreaseMintable): Promise<MsgIncreaseMintableResponse>;
    decreaseMintable(request: MsgDecreaseMintable): Promise<MsgDecreaseMintableResponse>;
    revokeLiquidityProvider(request: MsgRevokeLiquidityProvider): Promise<MsgRevokeLiquidityProviderResponse>;
    setInflation(request: MsgSetInflation): Promise<MsgSetInflationResponse>;
}
