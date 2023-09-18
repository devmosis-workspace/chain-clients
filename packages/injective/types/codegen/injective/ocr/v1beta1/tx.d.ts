import { FeedConfig, FeedConfigAmino, FeedConfigSDKType, Report, ReportAmino, ReportSDKType, Params, ParamsAmino, ParamsSDKType } from "./ocr";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgCreateFeed {
    sender: string;
    config: FeedConfig;
}
export interface MsgCreateFeedProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed";
    value: Uint8Array;
}
export interface MsgCreateFeedAmino {
    sender: string;
    config?: FeedConfigAmino;
}
export interface MsgCreateFeedAminoMsg {
    type: "/injective.ocr.v1beta1.MsgCreateFeed";
    value: MsgCreateFeedAmino;
}
export interface MsgCreateFeedSDKType {
    sender: string;
    config: FeedConfigSDKType;
}
export interface MsgCreateFeedResponse {
}
export interface MsgCreateFeedResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse";
    value: Uint8Array;
}
export interface MsgCreateFeedResponseAmino {
}
export interface MsgCreateFeedResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgCreateFeedResponse";
    value: MsgCreateFeedResponseAmino;
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
    linkPerObservation?: string;
    /** Fixed LINK reward for transmitter */
    linkPerTransmission?: string;
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** feed administrator */
    feedAdmin: string;
    /** feed billing administrator */
    billingAdmin: string;
}
export interface MsgUpdateFeedProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed";
    value: Uint8Array;
}
export interface MsgUpdateFeedAmino {
    sender: string;
    /** feed_id is an unique ID for the target of this config */
    feed_id: string;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /**
     * transmitters ith element is address ith oracle uses to transmit a report
     * via the transmit method
     */
    transmitters: string[];
    /** Fixed LINK reward for each observer */
    link_per_observation: string;
    /** Fixed LINK reward for transmitter */
    link_per_transmission: string;
    /** Native denom for LINK coin in the bank keeper */
    link_denom: string;
    /** feed administrator */
    feed_admin: string;
    /** feed billing administrator */
    billing_admin: string;
}
export interface MsgUpdateFeedAminoMsg {
    type: "/injective.ocr.v1beta1.MsgUpdateFeed";
    value: MsgUpdateFeedAmino;
}
export interface MsgUpdateFeedSDKType {
    sender: string;
    feed_id: string;
    signers: string[];
    transmitters: string[];
    link_per_observation?: string;
    link_per_transmission?: string;
    link_denom: string;
    feed_admin: string;
    billing_admin: string;
}
export interface MsgUpdateFeedResponse {
}
export interface MsgUpdateFeedResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse";
    value: Uint8Array;
}
export interface MsgUpdateFeedResponseAmino {
}
export interface MsgUpdateFeedResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgUpdateFeedResponse";
    value: MsgUpdateFeedResponseAmino;
}
export interface MsgUpdateFeedResponseSDKType {
}
export interface MsgTransmit {
    /** Address of the transmitter */
    transmitter: string;
    configDigest: Uint8Array;
    feedId: string;
    epoch: bigint;
    round: bigint;
    extraHash: Uint8Array;
    report: Report;
    signatures: Uint8Array[];
}
export interface MsgTransmitProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgTransmit";
    value: Uint8Array;
}
export interface MsgTransmitAmino {
    /** Address of the transmitter */
    transmitter: string;
    config_digest: Uint8Array;
    feed_id: string;
    epoch: string;
    round: string;
    extra_hash: Uint8Array;
    report?: ReportAmino;
    signatures: Uint8Array[];
}
export interface MsgTransmitAminoMsg {
    type: "/injective.ocr.v1beta1.MsgTransmit";
    value: MsgTransmitAmino;
}
export interface MsgTransmitSDKType {
    transmitter: string;
    config_digest: Uint8Array;
    feed_id: string;
    epoch: bigint;
    round: bigint;
    extra_hash: Uint8Array;
    report: ReportSDKType;
    signatures: Uint8Array[];
}
export interface MsgTransmitResponse {
}
export interface MsgTransmitResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse";
    value: Uint8Array;
}
export interface MsgTransmitResponseAmino {
}
export interface MsgTransmitResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgTransmitResponse";
    value: MsgTransmitResponseAmino;
}
export interface MsgTransmitResponseSDKType {
}
export interface MsgFundFeedRewardPool {
    sender: string;
    feedId: string;
    amount: Coin;
}
export interface MsgFundFeedRewardPoolProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool";
    value: Uint8Array;
}
export interface MsgFundFeedRewardPoolAmino {
    sender: string;
    feed_id: string;
    amount?: CoinAmino;
}
export interface MsgFundFeedRewardPoolAminoMsg {
    type: "/injective.ocr.v1beta1.MsgFundFeedRewardPool";
    value: MsgFundFeedRewardPoolAmino;
}
export interface MsgFundFeedRewardPoolSDKType {
    sender: string;
    feed_id: string;
    amount: CoinSDKType;
}
export interface MsgFundFeedRewardPoolResponse {
}
export interface MsgFundFeedRewardPoolResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse";
    value: Uint8Array;
}
export interface MsgFundFeedRewardPoolResponseAmino {
}
export interface MsgFundFeedRewardPoolResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse";
    value: MsgFundFeedRewardPoolResponseAmino;
}
export interface MsgFundFeedRewardPoolResponseSDKType {
}
export interface MsgWithdrawFeedRewardPool {
    sender: string;
    feedId: string;
    amount: Coin;
}
export interface MsgWithdrawFeedRewardPoolProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool";
    value: Uint8Array;
}
export interface MsgWithdrawFeedRewardPoolAmino {
    sender: string;
    feed_id: string;
    amount?: CoinAmino;
}
export interface MsgWithdrawFeedRewardPoolAminoMsg {
    type: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool";
    value: MsgWithdrawFeedRewardPoolAmino;
}
export interface MsgWithdrawFeedRewardPoolSDKType {
    sender: string;
    feed_id: string;
    amount: CoinSDKType;
}
export interface MsgWithdrawFeedRewardPoolResponse {
}
export interface MsgWithdrawFeedRewardPoolResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse";
    value: Uint8Array;
}
export interface MsgWithdrawFeedRewardPoolResponseAmino {
}
export interface MsgWithdrawFeedRewardPoolResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse";
    value: MsgWithdrawFeedRewardPoolResponseAmino;
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
export interface MsgSetPayeesProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgSetPayees";
    value: Uint8Array;
}
export interface MsgSetPayeesAmino {
    sender: string;
    feed_id: string;
    /** addresses oracles use to transmit the reports */
    transmitters: string[];
    /** addresses of payees corresponding to list of transmitters */
    payees: string[];
}
export interface MsgSetPayeesAminoMsg {
    type: "/injective.ocr.v1beta1.MsgSetPayees";
    value: MsgSetPayeesAmino;
}
export interface MsgSetPayeesSDKType {
    sender: string;
    feed_id: string;
    transmitters: string[];
    payees: string[];
}
export interface MsgSetPayeesResponse {
}
export interface MsgSetPayeesResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse";
    value: Uint8Array;
}
export interface MsgSetPayeesResponseAmino {
}
export interface MsgSetPayeesResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgSetPayeesResponse";
    value: MsgSetPayeesResponseAmino;
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
export interface MsgTransferPayeeshipProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship";
    value: Uint8Array;
}
export interface MsgTransferPayeeshipAmino {
    /** transmitter address of oracle whose payee is changing */
    sender: string;
    transmitter: string;
    feed_id: string;
    /** new payee address */
    proposed: string;
}
export interface MsgTransferPayeeshipAminoMsg {
    type: "/injective.ocr.v1beta1.MsgTransferPayeeship";
    value: MsgTransferPayeeshipAmino;
}
export interface MsgTransferPayeeshipSDKType {
    sender: string;
    transmitter: string;
    feed_id: string;
    proposed: string;
}
export interface MsgTransferPayeeshipResponse {
}
export interface MsgTransferPayeeshipResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse";
    value: Uint8Array;
}
export interface MsgTransferPayeeshipResponseAmino {
}
export interface MsgTransferPayeeshipResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse";
    value: MsgTransferPayeeshipResponseAmino;
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
export interface MsgAcceptPayeeshipProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship";
    value: Uint8Array;
}
export interface MsgAcceptPayeeshipAmino {
    /** new payee address */
    payee: string;
    /** transmitter address of oracle whose payee is changing */
    transmitter: string;
    feed_id: string;
}
export interface MsgAcceptPayeeshipAminoMsg {
    type: "/injective.ocr.v1beta1.MsgAcceptPayeeship";
    value: MsgAcceptPayeeshipAmino;
}
export interface MsgAcceptPayeeshipSDKType {
    payee: string;
    transmitter: string;
    feed_id: string;
}
export interface MsgAcceptPayeeshipResponse {
}
export interface MsgAcceptPayeeshipResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse";
    value: Uint8Array;
}
export interface MsgAcceptPayeeshipResponseAmino {
}
export interface MsgAcceptPayeeshipResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse";
    value: MsgAcceptPayeeshipResponseAmino;
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
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the ocr parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/injective.ocr.v1beta1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/injective.ocr.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateFeed: {
    typeUrl: string;
    encode(message: MsgCreateFeed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateFeed;
    fromPartial(object: Partial<MsgCreateFeed>): MsgCreateFeed;
    fromAmino(object: MsgCreateFeedAmino): MsgCreateFeed;
    toAmino(message: MsgCreateFeed): MsgCreateFeedAmino;
    fromAminoMsg(object: MsgCreateFeedAminoMsg): MsgCreateFeed;
    fromProtoMsg(message: MsgCreateFeedProtoMsg): MsgCreateFeed;
    toProto(message: MsgCreateFeed): Uint8Array;
    toProtoMsg(message: MsgCreateFeed): MsgCreateFeedProtoMsg;
};
export declare const MsgCreateFeedResponse: {
    typeUrl: string;
    encode(_: MsgCreateFeedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateFeedResponse;
    fromPartial(_: Partial<MsgCreateFeedResponse>): MsgCreateFeedResponse;
    fromAmino(_: MsgCreateFeedResponseAmino): MsgCreateFeedResponse;
    toAmino(_: MsgCreateFeedResponse): MsgCreateFeedResponseAmino;
    fromAminoMsg(object: MsgCreateFeedResponseAminoMsg): MsgCreateFeedResponse;
    fromProtoMsg(message: MsgCreateFeedResponseProtoMsg): MsgCreateFeedResponse;
    toProto(message: MsgCreateFeedResponse): Uint8Array;
    toProtoMsg(message: MsgCreateFeedResponse): MsgCreateFeedResponseProtoMsg;
};
export declare const MsgUpdateFeed: {
    typeUrl: string;
    encode(message: MsgUpdateFeed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateFeed;
    fromPartial(object: Partial<MsgUpdateFeed>): MsgUpdateFeed;
    fromAmino(object: MsgUpdateFeedAmino): MsgUpdateFeed;
    toAmino(message: MsgUpdateFeed): MsgUpdateFeedAmino;
    fromAminoMsg(object: MsgUpdateFeedAminoMsg): MsgUpdateFeed;
    fromProtoMsg(message: MsgUpdateFeedProtoMsg): MsgUpdateFeed;
    toProto(message: MsgUpdateFeed): Uint8Array;
    toProtoMsg(message: MsgUpdateFeed): MsgUpdateFeedProtoMsg;
};
export declare const MsgUpdateFeedResponse: {
    typeUrl: string;
    encode(_: MsgUpdateFeedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateFeedResponse;
    fromPartial(_: Partial<MsgUpdateFeedResponse>): MsgUpdateFeedResponse;
    fromAmino(_: MsgUpdateFeedResponseAmino): MsgUpdateFeedResponse;
    toAmino(_: MsgUpdateFeedResponse): MsgUpdateFeedResponseAmino;
    fromAminoMsg(object: MsgUpdateFeedResponseAminoMsg): MsgUpdateFeedResponse;
    fromProtoMsg(message: MsgUpdateFeedResponseProtoMsg): MsgUpdateFeedResponse;
    toProto(message: MsgUpdateFeedResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateFeedResponse): MsgUpdateFeedResponseProtoMsg;
};
export declare const MsgTransmit: {
    typeUrl: string;
    encode(message: MsgTransmit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransmit;
    fromPartial(object: Partial<MsgTransmit>): MsgTransmit;
    fromAmino(object: MsgTransmitAmino): MsgTransmit;
    toAmino(message: MsgTransmit): MsgTransmitAmino;
    fromAminoMsg(object: MsgTransmitAminoMsg): MsgTransmit;
    fromProtoMsg(message: MsgTransmitProtoMsg): MsgTransmit;
    toProto(message: MsgTransmit): Uint8Array;
    toProtoMsg(message: MsgTransmit): MsgTransmitProtoMsg;
};
export declare const MsgTransmitResponse: {
    typeUrl: string;
    encode(_: MsgTransmitResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransmitResponse;
    fromPartial(_: Partial<MsgTransmitResponse>): MsgTransmitResponse;
    fromAmino(_: MsgTransmitResponseAmino): MsgTransmitResponse;
    toAmino(_: MsgTransmitResponse): MsgTransmitResponseAmino;
    fromAminoMsg(object: MsgTransmitResponseAminoMsg): MsgTransmitResponse;
    fromProtoMsg(message: MsgTransmitResponseProtoMsg): MsgTransmitResponse;
    toProto(message: MsgTransmitResponse): Uint8Array;
    toProtoMsg(message: MsgTransmitResponse): MsgTransmitResponseProtoMsg;
};
export declare const MsgFundFeedRewardPool: {
    typeUrl: string;
    encode(message: MsgFundFeedRewardPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgFundFeedRewardPool;
    fromPartial(object: Partial<MsgFundFeedRewardPool>): MsgFundFeedRewardPool;
    fromAmino(object: MsgFundFeedRewardPoolAmino): MsgFundFeedRewardPool;
    toAmino(message: MsgFundFeedRewardPool): MsgFundFeedRewardPoolAmino;
    fromAminoMsg(object: MsgFundFeedRewardPoolAminoMsg): MsgFundFeedRewardPool;
    fromProtoMsg(message: MsgFundFeedRewardPoolProtoMsg): MsgFundFeedRewardPool;
    toProto(message: MsgFundFeedRewardPool): Uint8Array;
    toProtoMsg(message: MsgFundFeedRewardPool): MsgFundFeedRewardPoolProtoMsg;
};
export declare const MsgFundFeedRewardPoolResponse: {
    typeUrl: string;
    encode(_: MsgFundFeedRewardPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgFundFeedRewardPoolResponse;
    fromPartial(_: Partial<MsgFundFeedRewardPoolResponse>): MsgFundFeedRewardPoolResponse;
    fromAmino(_: MsgFundFeedRewardPoolResponseAmino): MsgFundFeedRewardPoolResponse;
    toAmino(_: MsgFundFeedRewardPoolResponse): MsgFundFeedRewardPoolResponseAmino;
    fromAminoMsg(object: MsgFundFeedRewardPoolResponseAminoMsg): MsgFundFeedRewardPoolResponse;
    fromProtoMsg(message: MsgFundFeedRewardPoolResponseProtoMsg): MsgFundFeedRewardPoolResponse;
    toProto(message: MsgFundFeedRewardPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundFeedRewardPoolResponse): MsgFundFeedRewardPoolResponseProtoMsg;
};
export declare const MsgWithdrawFeedRewardPool: {
    typeUrl: string;
    encode(message: MsgWithdrawFeedRewardPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawFeedRewardPool;
    fromPartial(object: Partial<MsgWithdrawFeedRewardPool>): MsgWithdrawFeedRewardPool;
    fromAmino(object: MsgWithdrawFeedRewardPoolAmino): MsgWithdrawFeedRewardPool;
    toAmino(message: MsgWithdrawFeedRewardPool): MsgWithdrawFeedRewardPoolAmino;
    fromAminoMsg(object: MsgWithdrawFeedRewardPoolAminoMsg): MsgWithdrawFeedRewardPool;
    fromProtoMsg(message: MsgWithdrawFeedRewardPoolProtoMsg): MsgWithdrawFeedRewardPool;
    toProto(message: MsgWithdrawFeedRewardPool): Uint8Array;
    toProtoMsg(message: MsgWithdrawFeedRewardPool): MsgWithdrawFeedRewardPoolProtoMsg;
};
export declare const MsgWithdrawFeedRewardPoolResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawFeedRewardPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawFeedRewardPoolResponse;
    fromPartial(_: Partial<MsgWithdrawFeedRewardPoolResponse>): MsgWithdrawFeedRewardPoolResponse;
    fromAmino(_: MsgWithdrawFeedRewardPoolResponseAmino): MsgWithdrawFeedRewardPoolResponse;
    toAmino(_: MsgWithdrawFeedRewardPoolResponse): MsgWithdrawFeedRewardPoolResponseAmino;
    fromAminoMsg(object: MsgWithdrawFeedRewardPoolResponseAminoMsg): MsgWithdrawFeedRewardPoolResponse;
    fromProtoMsg(message: MsgWithdrawFeedRewardPoolResponseProtoMsg): MsgWithdrawFeedRewardPoolResponse;
    toProto(message: MsgWithdrawFeedRewardPoolResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawFeedRewardPoolResponse): MsgWithdrawFeedRewardPoolResponseProtoMsg;
};
export declare const MsgSetPayees: {
    typeUrl: string;
    encode(message: MsgSetPayees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetPayees;
    fromPartial(object: Partial<MsgSetPayees>): MsgSetPayees;
    fromAmino(object: MsgSetPayeesAmino): MsgSetPayees;
    toAmino(message: MsgSetPayees): MsgSetPayeesAmino;
    fromAminoMsg(object: MsgSetPayeesAminoMsg): MsgSetPayees;
    fromProtoMsg(message: MsgSetPayeesProtoMsg): MsgSetPayees;
    toProto(message: MsgSetPayees): Uint8Array;
    toProtoMsg(message: MsgSetPayees): MsgSetPayeesProtoMsg;
};
export declare const MsgSetPayeesResponse: {
    typeUrl: string;
    encode(_: MsgSetPayeesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetPayeesResponse;
    fromPartial(_: Partial<MsgSetPayeesResponse>): MsgSetPayeesResponse;
    fromAmino(_: MsgSetPayeesResponseAmino): MsgSetPayeesResponse;
    toAmino(_: MsgSetPayeesResponse): MsgSetPayeesResponseAmino;
    fromAminoMsg(object: MsgSetPayeesResponseAminoMsg): MsgSetPayeesResponse;
    fromProtoMsg(message: MsgSetPayeesResponseProtoMsg): MsgSetPayeesResponse;
    toProto(message: MsgSetPayeesResponse): Uint8Array;
    toProtoMsg(message: MsgSetPayeesResponse): MsgSetPayeesResponseProtoMsg;
};
export declare const MsgTransferPayeeship: {
    typeUrl: string;
    encode(message: MsgTransferPayeeship, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferPayeeship;
    fromPartial(object: Partial<MsgTransferPayeeship>): MsgTransferPayeeship;
    fromAmino(object: MsgTransferPayeeshipAmino): MsgTransferPayeeship;
    toAmino(message: MsgTransferPayeeship): MsgTransferPayeeshipAmino;
    fromAminoMsg(object: MsgTransferPayeeshipAminoMsg): MsgTransferPayeeship;
    fromProtoMsg(message: MsgTransferPayeeshipProtoMsg): MsgTransferPayeeship;
    toProto(message: MsgTransferPayeeship): Uint8Array;
    toProtoMsg(message: MsgTransferPayeeship): MsgTransferPayeeshipProtoMsg;
};
export declare const MsgTransferPayeeshipResponse: {
    typeUrl: string;
    encode(_: MsgTransferPayeeshipResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferPayeeshipResponse;
    fromPartial(_: Partial<MsgTransferPayeeshipResponse>): MsgTransferPayeeshipResponse;
    fromAmino(_: MsgTransferPayeeshipResponseAmino): MsgTransferPayeeshipResponse;
    toAmino(_: MsgTransferPayeeshipResponse): MsgTransferPayeeshipResponseAmino;
    fromAminoMsg(object: MsgTransferPayeeshipResponseAminoMsg): MsgTransferPayeeshipResponse;
    fromProtoMsg(message: MsgTransferPayeeshipResponseProtoMsg): MsgTransferPayeeshipResponse;
    toProto(message: MsgTransferPayeeshipResponse): Uint8Array;
    toProtoMsg(message: MsgTransferPayeeshipResponse): MsgTransferPayeeshipResponseProtoMsg;
};
export declare const MsgAcceptPayeeship: {
    typeUrl: string;
    encode(message: MsgAcceptPayeeship, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAcceptPayeeship;
    fromPartial(object: Partial<MsgAcceptPayeeship>): MsgAcceptPayeeship;
    fromAmino(object: MsgAcceptPayeeshipAmino): MsgAcceptPayeeship;
    toAmino(message: MsgAcceptPayeeship): MsgAcceptPayeeshipAmino;
    fromAminoMsg(object: MsgAcceptPayeeshipAminoMsg): MsgAcceptPayeeship;
    fromProtoMsg(message: MsgAcceptPayeeshipProtoMsg): MsgAcceptPayeeship;
    toProto(message: MsgAcceptPayeeship): Uint8Array;
    toProtoMsg(message: MsgAcceptPayeeship): MsgAcceptPayeeshipProtoMsg;
};
export declare const MsgAcceptPayeeshipResponse: {
    typeUrl: string;
    encode(_: MsgAcceptPayeeshipResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAcceptPayeeshipResponse;
    fromPartial(_: Partial<MsgAcceptPayeeshipResponse>): MsgAcceptPayeeshipResponse;
    fromAmino(_: MsgAcceptPayeeshipResponseAmino): MsgAcceptPayeeshipResponse;
    toAmino(_: MsgAcceptPayeeshipResponse): MsgAcceptPayeeshipResponseAmino;
    fromAminoMsg(object: MsgAcceptPayeeshipResponseAminoMsg): MsgAcceptPayeeshipResponse;
    fromProtoMsg(message: MsgAcceptPayeeshipResponseProtoMsg): MsgAcceptPayeeshipResponse;
    toProto(message: MsgAcceptPayeeshipResponse): Uint8Array;
    toProtoMsg(message: MsgAcceptPayeeshipResponse): MsgAcceptPayeeshipResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
