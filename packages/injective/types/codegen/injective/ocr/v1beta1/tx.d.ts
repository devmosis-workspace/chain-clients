import { FeedConfig, FeedConfigSDKType, Report, ReportSDKType, Params, ParamsSDKType } from "./ocr";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateFeed {
    sender: string;
    config?: FeedConfig;
}
export interface MsgCreateFeedSDKType {
    sender: string;
    config?: FeedConfigSDKType;
}
export interface MsgCreateFeedResponse {
}
export interface MsgCreateFeedResponseSDKType {
}
export interface MsgUpdateFeed {
    sender: string;
    /** feed_id is an unique ID for the target of this config */
    feedId: string;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /**
     * transmitters ith element is address ith oracle uses to transmit a report
     * via the transmit method
     */
    transmitters: string[];
    /** Fixed LINK reward for each observer */
    linkPerObservation: string;
    /** Fixed LINK reward for transmitter */
    linkPerTransmission: string;
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** feed administrator */
    feedAdmin: string;
    /** feed billing administrator */
    billingAdmin: string;
}
export interface MsgUpdateFeedSDKType {
    sender: string;
    feed_id: string;
    signers: string[];
    transmitters: string[];
    link_per_observation: string;
    link_per_transmission: string;
    link_denom: string;
    feed_admin: string;
    billing_admin: string;
}
export interface MsgUpdateFeedResponse {
}
export interface MsgUpdateFeedResponseSDKType {
}
export interface MsgTransmit {
    /** Address of the transmitter */
    transmitter: string;
    configDigest: Uint8Array;
    feedId: string;
    epoch: Long;
    round: Long;
    extraHash: Uint8Array;
    report?: Report;
    signatures: Uint8Array[];
}
export interface MsgTransmitSDKType {
    transmitter: string;
    config_digest: Uint8Array;
    feed_id: string;
    epoch: Long;
    round: Long;
    extra_hash: Uint8Array;
    report?: ReportSDKType;
    signatures: Uint8Array[];
}
export interface MsgTransmitResponse {
}
export interface MsgTransmitResponseSDKType {
}
export interface MsgFundFeedRewardPool {
    sender: string;
    feedId: string;
    amount?: Coin;
}
export interface MsgFundFeedRewardPoolSDKType {
    sender: string;
    feed_id: string;
    amount?: CoinSDKType;
}
export interface MsgFundFeedRewardPoolResponse {
}
export interface MsgFundFeedRewardPoolResponseSDKType {
}
export interface MsgWithdrawFeedRewardPool {
    sender: string;
    feedId: string;
    amount?: Coin;
}
export interface MsgWithdrawFeedRewardPoolSDKType {
    sender: string;
    feed_id: string;
    amount?: CoinSDKType;
}
export interface MsgWithdrawFeedRewardPoolResponse {
}
export interface MsgWithdrawFeedRewardPoolResponseSDKType {
}
export interface MsgSetPayees {
    sender: string;
    feedId: string;
    /** addresses oracles use to transmit the reports */
    transmitters: string[];
    /** addresses of payees corresponding to list of transmitters */
    payees: string[];
}
export interface MsgSetPayeesSDKType {
    sender: string;
    feed_id: string;
    transmitters: string[];
    payees: string[];
}
export interface MsgSetPayeesResponse {
}
export interface MsgSetPayeesResponseSDKType {
}
export interface MsgTransferPayeeship {
    /** transmitter address of oracle whose payee is changing */
    sender: string;
    transmitter: string;
    feedId: string;
    /** new payee address */
    proposed: string;
}
export interface MsgTransferPayeeshipSDKType {
    sender: string;
    transmitter: string;
    feed_id: string;
    proposed: string;
}
export interface MsgTransferPayeeshipResponse {
}
export interface MsgTransferPayeeshipResponseSDKType {
}
export interface MsgAcceptPayeeship {
    /** new payee address */
    payee: string;
    /** transmitter address of oracle whose payee is changing */
    transmitter: string;
    feedId: string;
}
export interface MsgAcceptPayeeshipSDKType {
    payee: string;
    transmitter: string;
    feed_id: string;
}
export interface MsgAcceptPayeeshipResponse {
}
export interface MsgAcceptPayeeshipResponseSDKType {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the ocr parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateFeed: {
    encode(message: MsgCreateFeed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateFeed;
    fromPartial(object: Partial<MsgCreateFeed>): MsgCreateFeed;
};
export declare const MsgCreateFeedResponse: {
    encode(_: MsgCreateFeedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateFeedResponse;
    fromPartial(_: Partial<MsgCreateFeedResponse>): MsgCreateFeedResponse;
};
export declare const MsgUpdateFeed: {
    encode(message: MsgUpdateFeed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateFeed;
    fromPartial(object: Partial<MsgUpdateFeed>): MsgUpdateFeed;
};
export declare const MsgUpdateFeedResponse: {
    encode(_: MsgUpdateFeedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateFeedResponse;
    fromPartial(_: Partial<MsgUpdateFeedResponse>): MsgUpdateFeedResponse;
};
export declare const MsgTransmit: {
    encode(message: MsgTransmit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransmit;
    fromPartial(object: Partial<MsgTransmit>): MsgTransmit;
};
export declare const MsgTransmitResponse: {
    encode(_: MsgTransmitResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgTransmitResponse;
    fromPartial(_: Partial<MsgTransmitResponse>): MsgTransmitResponse;
};
export declare const MsgFundFeedRewardPool: {
    encode(message: MsgFundFeedRewardPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgFundFeedRewardPool;
    fromPartial(object: Partial<MsgFundFeedRewardPool>): MsgFundFeedRewardPool;
};
export declare const MsgFundFeedRewardPoolResponse: {
    encode(_: MsgFundFeedRewardPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgFundFeedRewardPoolResponse;
    fromPartial(_: Partial<MsgFundFeedRewardPoolResponse>): MsgFundFeedRewardPoolResponse;
};
export declare const MsgWithdrawFeedRewardPool: {
    encode(message: MsgWithdrawFeedRewardPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawFeedRewardPool;
    fromPartial(object: Partial<MsgWithdrawFeedRewardPool>): MsgWithdrawFeedRewardPool;
};
export declare const MsgWithdrawFeedRewardPoolResponse: {
    encode(_: MsgWithdrawFeedRewardPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawFeedRewardPoolResponse;
    fromPartial(_: Partial<MsgWithdrawFeedRewardPoolResponse>): MsgWithdrawFeedRewardPoolResponse;
};
export declare const MsgSetPayees: {
    encode(message: MsgSetPayees, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetPayees;
    fromPartial(object: Partial<MsgSetPayees>): MsgSetPayees;
};
export declare const MsgSetPayeesResponse: {
    encode(_: MsgSetPayeesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetPayeesResponse;
    fromPartial(_: Partial<MsgSetPayeesResponse>): MsgSetPayeesResponse;
};
export declare const MsgTransferPayeeship: {
    encode(message: MsgTransferPayeeship, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransferPayeeship;
    fromPartial(object: Partial<MsgTransferPayeeship>): MsgTransferPayeeship;
};
export declare const MsgTransferPayeeshipResponse: {
    encode(_: MsgTransferPayeeshipResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgTransferPayeeshipResponse;
    fromPartial(_: Partial<MsgTransferPayeeshipResponse>): MsgTransferPayeeshipResponse;
};
export declare const MsgAcceptPayeeship: {
    encode(message: MsgAcceptPayeeship, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAcceptPayeeship;
    fromPartial(object: Partial<MsgAcceptPayeeship>): MsgAcceptPayeeship;
};
export declare const MsgAcceptPayeeshipResponse: {
    encode(_: MsgAcceptPayeeshipResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAcceptPayeeshipResponse;
    fromPartial(_: Partial<MsgAcceptPayeeshipResponse>): MsgAcceptPayeeshipResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
