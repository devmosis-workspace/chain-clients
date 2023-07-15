import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateFeed, MsgCreateFeedResponse, MsgUpdateFeed, MsgUpdateFeedResponse, MsgTransmit, MsgTransmitResponse, MsgFundFeedRewardPool, MsgFundFeedRewardPoolResponse, MsgWithdrawFeedRewardPool, MsgWithdrawFeedRewardPoolResponse, MsgSetPayees, MsgSetPayeesResponse, MsgTransferPayeeship, MsgTransferPayeeshipResponse, MsgAcceptPayeeship, MsgAcceptPayeeshipResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the OCR Msg service. */
export interface Msg {
  /** CreateFeed defines a method for creating feed by module admin */
  createFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse>;
  /**
   * CreateFeed defines a method for creating feed by feed admin or feed billing
   * admin
   */
  updateFeed(request: MsgUpdateFeed): Promise<MsgUpdateFeedResponse>;
  /** Transmit defines a method for transmitting the feed info by transmitter */
  transmit(request: MsgTransmit): Promise<MsgTransmitResponse>;
  /** FundFeedRewardPool defines a method to put funds into feed reward pool */
  fundFeedRewardPool(request: MsgFundFeedRewardPool): Promise<MsgFundFeedRewardPoolResponse>;
  /**
   * WithdrawFeedRewardPool defines a method to witdhraw feed reward by feed
   * admin or billing admin
   */
  withdrawFeedRewardPool(request: MsgWithdrawFeedRewardPool): Promise<MsgWithdrawFeedRewardPoolResponse>;
  /** SetPayees defines a method to set payees for transmitters (batch action) */
  setPayees(request: MsgSetPayees): Promise<MsgSetPayeesResponse>;
  /**
   * TransferPayeeship defines a method for a payee to transfer reward receive
   * ownership
   */
  transferPayeeship(request: MsgTransferPayeeship): Promise<MsgTransferPayeeshipResponse>;
  /**
   * AcceptPayeeship defines a method for a new payee to accept reward receive
   * ownership
   */
  acceptPayeeship(request: MsgAcceptPayeeship): Promise<MsgAcceptPayeeshipResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createFeed = this.createFeed.bind(this);
    this.updateFeed = this.updateFeed.bind(this);
    this.transmit = this.transmit.bind(this);
    this.fundFeedRewardPool = this.fundFeedRewardPool.bind(this);
    this.withdrawFeedRewardPool = this.withdrawFeedRewardPool.bind(this);
    this.setPayees = this.setPayees.bind(this);
    this.transferPayeeship = this.transferPayeeship.bind(this);
    this.acceptPayeeship = this.acceptPayeeship.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse> {
    const data = MsgCreateFeed.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "CreateFeed", data);
    return promise.then(data => MsgCreateFeedResponse.decode(new _m0.Reader(data)));
  }
  updateFeed(request: MsgUpdateFeed): Promise<MsgUpdateFeedResponse> {
    const data = MsgUpdateFeed.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "UpdateFeed", data);
    return promise.then(data => MsgUpdateFeedResponse.decode(new _m0.Reader(data)));
  }
  transmit(request: MsgTransmit): Promise<MsgTransmitResponse> {
    const data = MsgTransmit.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "Transmit", data);
    return promise.then(data => MsgTransmitResponse.decode(new _m0.Reader(data)));
  }
  fundFeedRewardPool(request: MsgFundFeedRewardPool): Promise<MsgFundFeedRewardPoolResponse> {
    const data = MsgFundFeedRewardPool.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "FundFeedRewardPool", data);
    return promise.then(data => MsgFundFeedRewardPoolResponse.decode(new _m0.Reader(data)));
  }
  withdrawFeedRewardPool(request: MsgWithdrawFeedRewardPool): Promise<MsgWithdrawFeedRewardPoolResponse> {
    const data = MsgWithdrawFeedRewardPool.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "WithdrawFeedRewardPool", data);
    return promise.then(data => MsgWithdrawFeedRewardPoolResponse.decode(new _m0.Reader(data)));
  }
  setPayees(request: MsgSetPayees): Promise<MsgSetPayeesResponse> {
    const data = MsgSetPayees.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "SetPayees", data);
    return promise.then(data => MsgSetPayeesResponse.decode(new _m0.Reader(data)));
  }
  transferPayeeship(request: MsgTransferPayeeship): Promise<MsgTransferPayeeshipResponse> {
    const data = MsgTransferPayeeship.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "TransferPayeeship", data);
    return promise.then(data => MsgTransferPayeeshipResponse.decode(new _m0.Reader(data)));
  }
  acceptPayeeship(request: MsgAcceptPayeeship): Promise<MsgAcceptPayeeshipResponse> {
    const data = MsgAcceptPayeeship.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "AcceptPayeeship", data);
    return promise.then(data => MsgAcceptPayeeshipResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}