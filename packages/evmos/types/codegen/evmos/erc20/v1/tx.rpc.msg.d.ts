import { Rpc } from "../../../helpers";
import { MsgConvertCoin, MsgConvertCoinResponse, MsgConvertERC20, MsgConvertERC20Response, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the erc20 Msg service. */
export interface Msg {
    /**
     * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
     * that is registered on the token mapping.
     */
    convertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
    /**
     * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
     * contract that is registered on the token mapping.
     */
    convertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
    /**
     * UpdateParams defined a governance operation for updating the x/erc20 module parameters.
     * The authority is hard-coded to the Cosmos SDK x/gov module account
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    convertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
    convertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
