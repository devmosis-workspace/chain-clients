import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgSwapExactForTokens, MsgSwapExactForTokensResponse, MsgSwapForExactTokens, MsgSwapForExactTokensResponse } from "./tx";
/** Msg defines the swap Msg service. */
export interface Msg {
  /** Deposit defines a method for depositing liquidity into a pool */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /** Withdraw defines a method for withdrawing liquidity into a pool */
  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /** SwapExactForTokens represents a message for trading exact coinA for coinB */
  swapExactForTokens(request: MsgSwapExactForTokens): Promise<MsgSwapExactForTokensResponse>;
  /** SwapForExactTokens represents a message for trading coinA for an exact coinB */
  swapForExactTokens(request: MsgSwapForExactTokens): Promise<MsgSwapForExactTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.swapExactForTokens = this.swapExactForTokens.bind(this);
    this.swapForExactTokens = this.swapForExactTokens.bind(this);
  }
  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("kava.swap.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
  }
  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("kava.swap.v1beta1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
  }
  swapExactForTokens(request: MsgSwapExactForTokens): Promise<MsgSwapExactForTokensResponse> {
    const data = MsgSwapExactForTokens.encode(request).finish();
    const promise = this.rpc.request("kava.swap.v1beta1.Msg", "SwapExactForTokens", data);
    return promise.then(data => MsgSwapExactForTokensResponse.decode(new BinaryReader(data)));
  }
  swapForExactTokens(request: MsgSwapForExactTokens): Promise<MsgSwapForExactTokensResponse> {
    const data = MsgSwapForExactTokens.encode(request).finish();
    const promise = this.rpc.request("kava.swap.v1beta1.Msg", "SwapForExactTokens", data);
    return promise.then(data => MsgSwapForExactTokensResponse.decode(new BinaryReader(data)));
  }
}