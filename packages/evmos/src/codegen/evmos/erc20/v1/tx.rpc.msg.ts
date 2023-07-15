import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.convertCoin = this.convertCoin.bind(this);
    this.convertERC20 = this.convertERC20.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  convertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse> {
    const data = MsgConvertCoin.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertCoin", data);
    return promise.then(data => MsgConvertCoinResponse.decode(new _m0.Reader(data)));
  }
  convertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response> {
    const data = MsgConvertERC20.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Msg", "ConvertERC20", data);
    return promise.then(data => MsgConvertERC20Response.decode(new _m0.Reader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}