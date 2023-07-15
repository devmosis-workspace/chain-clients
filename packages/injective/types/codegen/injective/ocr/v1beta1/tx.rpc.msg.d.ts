import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createFeed(request: MsgCreateFeed): Promise<MsgCreateFeedResponse>;
    updateFeed(request: MsgUpdateFeed): Promise<MsgUpdateFeedResponse>;
    transmit(request: MsgTransmit): Promise<MsgTransmitResponse>;
    fundFeedRewardPool(request: MsgFundFeedRewardPool): Promise<MsgFundFeedRewardPoolResponse>;
    withdrawFeedRewardPool(request: MsgWithdrawFeedRewardPool): Promise<MsgWithdrawFeedRewardPoolResponse>;
    setPayees(request: MsgSetPayees): Promise<MsgSetPayeesResponse>;
    transferPayeeship(request: MsgTransferPayeeship): Promise<MsgTransferPayeeshipResponse>;
    acceptPayeeship(request: MsgAcceptPayeeship): Promise<MsgAcceptPayeeshipResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
