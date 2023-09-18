import { FeedConfig, FeedConfigAmino, FeedConfigSDKType, Report, ReportAmino, ReportSDKType, Params, ParamsAmino, ParamsSDKType } from "./ocr";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
export interface MsgCreateFeedResponse {}
export interface MsgCreateFeedResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse";
  value: Uint8Array;
}
export interface MsgCreateFeedResponseAmino {}
export interface MsgCreateFeedResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgCreateFeedResponse";
  value: MsgCreateFeedResponseAmino;
}
export interface MsgCreateFeedResponseSDKType {}
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
export interface MsgUpdateFeedResponse {}
export interface MsgUpdateFeedResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse";
  value: Uint8Array;
}
export interface MsgUpdateFeedResponseAmino {}
export interface MsgUpdateFeedResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgUpdateFeedResponse";
  value: MsgUpdateFeedResponseAmino;
}
export interface MsgUpdateFeedResponseSDKType {}
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
export interface MsgTransmitResponse {}
export interface MsgTransmitResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse";
  value: Uint8Array;
}
export interface MsgTransmitResponseAmino {}
export interface MsgTransmitResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgTransmitResponse";
  value: MsgTransmitResponseAmino;
}
export interface MsgTransmitResponseSDKType {}
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
export interface MsgFundFeedRewardPoolResponse {}
export interface MsgFundFeedRewardPoolResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse";
  value: Uint8Array;
}
export interface MsgFundFeedRewardPoolResponseAmino {}
export interface MsgFundFeedRewardPoolResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse";
  value: MsgFundFeedRewardPoolResponseAmino;
}
export interface MsgFundFeedRewardPoolResponseSDKType {}
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
export interface MsgWithdrawFeedRewardPoolResponse {}
export interface MsgWithdrawFeedRewardPoolResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse";
  value: Uint8Array;
}
export interface MsgWithdrawFeedRewardPoolResponseAmino {}
export interface MsgWithdrawFeedRewardPoolResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse";
  value: MsgWithdrawFeedRewardPoolResponseAmino;
}
export interface MsgWithdrawFeedRewardPoolResponseSDKType {}
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
export interface MsgSetPayeesResponse {}
export interface MsgSetPayeesResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse";
  value: Uint8Array;
}
export interface MsgSetPayeesResponseAmino {}
export interface MsgSetPayeesResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgSetPayeesResponse";
  value: MsgSetPayeesResponseAmino;
}
export interface MsgSetPayeesResponseSDKType {}
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
export interface MsgTransferPayeeshipResponse {}
export interface MsgTransferPayeeshipResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse";
  value: Uint8Array;
}
export interface MsgTransferPayeeshipResponseAmino {}
export interface MsgTransferPayeeshipResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse";
  value: MsgTransferPayeeshipResponseAmino;
}
export interface MsgTransferPayeeshipResponseSDKType {}
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
export interface MsgAcceptPayeeshipResponse {}
export interface MsgAcceptPayeeshipResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse";
  value: Uint8Array;
}
export interface MsgAcceptPayeeshipResponseAmino {}
export interface MsgAcceptPayeeshipResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse";
  value: MsgAcceptPayeeshipResponseAmino;
}
export interface MsgAcceptPayeeshipResponseSDKType {}
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
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.ocr.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateFeed(): MsgCreateFeed {
  return {
    sender: "",
    config: FeedConfig.fromPartial({})
  };
}
export const MsgCreateFeed = {
  typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
  encode(message: MsgCreateFeed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.config !== undefined) {
      FeedConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateFeed {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      config: isSet(object.config) ? FeedConfig.fromJSON(object.config) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateFeed>): MsgCreateFeed {
    const message = createBaseMsgCreateFeed();
    message.sender = object.sender ?? "";
    message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateFeedAmino): MsgCreateFeed {
    return {
      sender: object.sender,
      config: object?.config ? FeedConfig.fromAmino(object.config) : undefined
    };
  },
  toAmino(message: MsgCreateFeed): MsgCreateFeedAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.config = message.config ? FeedConfig.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateFeedAminoMsg): MsgCreateFeed {
    return MsgCreateFeed.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateFeedProtoMsg): MsgCreateFeed {
    return MsgCreateFeed.decode(message.value);
  },
  toProto(message: MsgCreateFeed): Uint8Array {
    return MsgCreateFeed.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateFeed): MsgCreateFeedProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
      value: MsgCreateFeed.encode(message).finish()
    };
  }
};
function createBaseMsgCreateFeedResponse(): MsgCreateFeedResponse {
  return {};
}
export const MsgCreateFeedResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse",
  encode(_: MsgCreateFeedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateFeedResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateFeedResponse>): MsgCreateFeedResponse {
    const message = createBaseMsgCreateFeedResponse();
    return message;
  },
  fromAmino(_: MsgCreateFeedResponseAmino): MsgCreateFeedResponse {
    return {};
  },
  toAmino(_: MsgCreateFeedResponse): MsgCreateFeedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateFeedResponseAminoMsg): MsgCreateFeedResponse {
    return MsgCreateFeedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateFeedResponseProtoMsg): MsgCreateFeedResponse {
    return MsgCreateFeedResponse.decode(message.value);
  },
  toProto(message: MsgCreateFeedResponse): Uint8Array {
    return MsgCreateFeedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateFeedResponse): MsgCreateFeedResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgCreateFeedResponse",
      value: MsgCreateFeedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFeed(): MsgUpdateFeed {
  return {
    sender: "",
    feedId: "",
    signers: [],
    transmitters: [],
    linkPerObservation: undefined,
    linkPerTransmission: undefined,
    linkDenom: "",
    feedAdmin: "",
    billingAdmin: ""
  };
}
export const MsgUpdateFeed = {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
  encode(message: MsgUpdateFeed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }
    for (const v of message.signers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.transmitters) {
      writer.uint32(34).string(v!);
    }
    if (message.linkPerObservation !== undefined) {
      writer.uint32(42).string(message.linkPerObservation);
    }
    if (message.linkPerTransmission !== undefined) {
      writer.uint32(50).string(message.linkPerTransmission);
    }
    if (message.linkDenom !== "") {
      writer.uint32(58).string(message.linkDenom);
    }
    if (message.feedAdmin !== "") {
      writer.uint32(66).string(message.feedAdmin);
    }
    if (message.billingAdmin !== "") {
      writer.uint32(74).string(message.billingAdmin);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateFeed {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => String(e)) : [],
      linkPerObservation: isSet(object.linkPerObservation) ? String(object.linkPerObservation) : undefined,
      linkPerTransmission: isSet(object.linkPerTransmission) ? String(object.linkPerTransmission) : undefined,
      linkDenom: isSet(object.linkDenom) ? String(object.linkDenom) : "",
      feedAdmin: isSet(object.feedAdmin) ? String(object.feedAdmin) : "",
      billingAdmin: isSet(object.billingAdmin) ? String(object.billingAdmin) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateFeed>): MsgUpdateFeed {
    const message = createBaseMsgUpdateFeed();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.linkPerObservation = object.linkPerObservation ?? undefined;
    message.linkPerTransmission = object.linkPerTransmission ?? undefined;
    message.linkDenom = object.linkDenom ?? "";
    message.feedAdmin = object.feedAdmin ?? "";
    message.billingAdmin = object.billingAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateFeedAmino): MsgUpdateFeed {
    return {
      sender: object.sender,
      feedId: object.feed_id,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => e) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => e) : [],
      linkPerObservation: object?.link_per_observation,
      linkPerTransmission: object?.link_per_transmission,
      linkDenom: object.link_denom,
      feedAdmin: object.feed_admin,
      billingAdmin: object.billing_admin
    };
  },
  toAmino(message: MsgUpdateFeed): MsgUpdateFeedAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.feed_id = message.feedId;
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    if (message.transmitters) {
      obj.transmitters = message.transmitters.map(e => e);
    } else {
      obj.transmitters = [];
    }
    obj.link_per_observation = message.linkPerObservation;
    obj.link_per_transmission = message.linkPerTransmission;
    obj.link_denom = message.linkDenom;
    obj.feed_admin = message.feedAdmin;
    obj.billing_admin = message.billingAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeedAminoMsg): MsgUpdateFeed {
    return MsgUpdateFeed.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeedProtoMsg): MsgUpdateFeed {
    return MsgUpdateFeed.decode(message.value);
  },
  toProto(message: MsgUpdateFeed): Uint8Array {
    return MsgUpdateFeed.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeed): MsgUpdateFeedProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
      value: MsgUpdateFeed.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFeedResponse(): MsgUpdateFeedResponse {
  return {};
}
export const MsgUpdateFeedResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse",
  encode(_: MsgUpdateFeedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateFeedResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateFeedResponse>): MsgUpdateFeedResponse {
    const message = createBaseMsgUpdateFeedResponse();
    return message;
  },
  fromAmino(_: MsgUpdateFeedResponseAmino): MsgUpdateFeedResponse {
    return {};
  },
  toAmino(_: MsgUpdateFeedResponse): MsgUpdateFeedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeedResponseAminoMsg): MsgUpdateFeedResponse {
    return MsgUpdateFeedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeedResponseProtoMsg): MsgUpdateFeedResponse {
    return MsgUpdateFeedResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFeedResponse): Uint8Array {
    return MsgUpdateFeedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeedResponse): MsgUpdateFeedResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeedResponse",
      value: MsgUpdateFeedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransmit(): MsgTransmit {
  return {
    transmitter: "",
    configDigest: new Uint8Array(),
    feedId: "",
    epoch: BigInt(0),
    round: BigInt(0),
    extraHash: new Uint8Array(),
    report: Report.fromPartial({}),
    signatures: []
  };
}
export const MsgTransmit = {
  typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
  encode(message: MsgTransmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transmitter !== "") {
      writer.uint32(10).string(message.transmitter);
    }
    if (message.configDigest.length !== 0) {
      writer.uint32(18).bytes(message.configDigest);
    }
    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(32).uint64(message.epoch);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(40).uint64(message.round);
    }
    if (message.extraHash.length !== 0) {
      writer.uint32(50).bytes(message.extraHash);
    }
    if (message.report !== undefined) {
      Report.encode(message.report, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(66).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransmit {
    return {
      transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
      configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0),
      extraHash: isSet(object.extraHash) ? bytesFromBase64(object.extraHash) : new Uint8Array(),
      report: isSet(object.report) ? Report.fromJSON(object.report) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<MsgTransmit>): MsgTransmit {
    const message = createBaseMsgTransmit();
    message.transmitter = object.transmitter ?? "";
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.feedId = object.feedId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.extraHash = object.extraHash ?? new Uint8Array();
    message.report = object.report !== undefined && object.report !== null ? Report.fromPartial(object.report) : undefined;
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgTransmitAmino): MsgTransmit {
    return {
      transmitter: object.transmitter,
      configDigest: object.config_digest,
      feedId: object.feed_id,
      epoch: BigInt(object.epoch),
      round: BigInt(object.round),
      extraHash: object.extra_hash,
      report: object?.report ? Report.fromAmino(object.report) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgTransmit): MsgTransmitAmino {
    const obj: any = {};
    obj.transmitter = message.transmitter;
    obj.config_digest = message.configDigest;
    obj.feed_id = message.feedId;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.round = message.round ? message.round.toString() : undefined;
    obj.extra_hash = message.extraHash;
    obj.report = message.report ? Report.toAmino(message.report) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgTransmitAminoMsg): MsgTransmit {
    return MsgTransmit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransmitProtoMsg): MsgTransmit {
    return MsgTransmit.decode(message.value);
  },
  toProto(message: MsgTransmit): Uint8Array {
    return MsgTransmit.encode(message).finish();
  },
  toProtoMsg(message: MsgTransmit): MsgTransmitProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
      value: MsgTransmit.encode(message).finish()
    };
  }
};
function createBaseMsgTransmitResponse(): MsgTransmitResponse {
  return {};
}
export const MsgTransmitResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse",
  encode(_: MsgTransmitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTransmitResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransmitResponse>): MsgTransmitResponse {
    const message = createBaseMsgTransmitResponse();
    return message;
  },
  fromAmino(_: MsgTransmitResponseAmino): MsgTransmitResponse {
    return {};
  },
  toAmino(_: MsgTransmitResponse): MsgTransmitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransmitResponseAminoMsg): MsgTransmitResponse {
    return MsgTransmitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransmitResponseProtoMsg): MsgTransmitResponse {
    return MsgTransmitResponse.decode(message.value);
  },
  toProto(message: MsgTransmitResponse): Uint8Array {
    return MsgTransmitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransmitResponse): MsgTransmitResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgTransmitResponse",
      value: MsgTransmitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundFeedRewardPool(): MsgFundFeedRewardPool {
  return {
    sender: "",
    feedId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgFundFeedRewardPool = {
  typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
  encode(message: MsgFundFeedRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgFundFeedRewardPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgFundFeedRewardPool>): MsgFundFeedRewardPool {
    const message = createBaseMsgFundFeedRewardPool();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgFundFeedRewardPoolAmino): MsgFundFeedRewardPool {
    return {
      sender: object.sender,
      feedId: object.feed_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgFundFeedRewardPool): MsgFundFeedRewardPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.feed_id = message.feedId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFundFeedRewardPoolAminoMsg): MsgFundFeedRewardPool {
    return MsgFundFeedRewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFeedRewardPoolProtoMsg): MsgFundFeedRewardPool {
    return MsgFundFeedRewardPool.decode(message.value);
  },
  toProto(message: MsgFundFeedRewardPool): Uint8Array {
    return MsgFundFeedRewardPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFeedRewardPool): MsgFundFeedRewardPoolProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
      value: MsgFundFeedRewardPool.encode(message).finish()
    };
  }
};
function createBaseMsgFundFeedRewardPoolResponse(): MsgFundFeedRewardPoolResponse {
  return {};
}
export const MsgFundFeedRewardPoolResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse",
  encode(_: MsgFundFeedRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgFundFeedRewardPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgFundFeedRewardPoolResponse>): MsgFundFeedRewardPoolResponse {
    const message = createBaseMsgFundFeedRewardPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundFeedRewardPoolResponseAmino): MsgFundFeedRewardPoolResponse {
    return {};
  },
  toAmino(_: MsgFundFeedRewardPoolResponse): MsgFundFeedRewardPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundFeedRewardPoolResponseAminoMsg): MsgFundFeedRewardPoolResponse {
    return MsgFundFeedRewardPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFeedRewardPoolResponseProtoMsg): MsgFundFeedRewardPoolResponse {
    return MsgFundFeedRewardPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundFeedRewardPoolResponse): Uint8Array {
    return MsgFundFeedRewardPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFeedRewardPoolResponse): MsgFundFeedRewardPoolResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse",
      value: MsgFundFeedRewardPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFeedRewardPool(): MsgWithdrawFeedRewardPool {
  return {
    sender: "",
    feedId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgWithdrawFeedRewardPool = {
  typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
  encode(message: MsgWithdrawFeedRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawFeedRewardPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgWithdrawFeedRewardPool>): MsgWithdrawFeedRewardPool {
    const message = createBaseMsgWithdrawFeedRewardPool();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawFeedRewardPoolAmino): MsgWithdrawFeedRewardPool {
    return {
      sender: object.sender,
      feedId: object.feed_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgWithdrawFeedRewardPool): MsgWithdrawFeedRewardPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.feed_id = message.feedId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFeedRewardPoolAminoMsg): MsgWithdrawFeedRewardPool {
    return MsgWithdrawFeedRewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFeedRewardPoolProtoMsg): MsgWithdrawFeedRewardPool {
    return MsgWithdrawFeedRewardPool.decode(message.value);
  },
  toProto(message: MsgWithdrawFeedRewardPool): Uint8Array {
    return MsgWithdrawFeedRewardPool.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFeedRewardPool): MsgWithdrawFeedRewardPoolProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
      value: MsgWithdrawFeedRewardPool.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawFeedRewardPoolResponse(): MsgWithdrawFeedRewardPoolResponse {
  return {};
}
export const MsgWithdrawFeedRewardPoolResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse",
  encode(_: MsgWithdrawFeedRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawFeedRewardPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawFeedRewardPoolResponse>): MsgWithdrawFeedRewardPoolResponse {
    const message = createBaseMsgWithdrawFeedRewardPoolResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawFeedRewardPoolResponseAmino): MsgWithdrawFeedRewardPoolResponse {
    return {};
  },
  toAmino(_: MsgWithdrawFeedRewardPoolResponse): MsgWithdrawFeedRewardPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawFeedRewardPoolResponseAminoMsg): MsgWithdrawFeedRewardPoolResponse {
    return MsgWithdrawFeedRewardPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawFeedRewardPoolResponseProtoMsg): MsgWithdrawFeedRewardPoolResponse {
    return MsgWithdrawFeedRewardPoolResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawFeedRewardPoolResponse): Uint8Array {
    return MsgWithdrawFeedRewardPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawFeedRewardPoolResponse): MsgWithdrawFeedRewardPoolResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse",
      value: MsgWithdrawFeedRewardPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPayees(): MsgSetPayees {
  return {
    sender: "",
    feedId: "",
    transmitters: [],
    payees: []
  };
}
export const MsgSetPayees = {
  typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
  encode(message: MsgSetPayees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.feedId !== "") {
      writer.uint32(18).string(message.feedId);
    }
    for (const v of message.transmitters) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.payees) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetPayees {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => String(e)) : [],
      payees: Array.isArray(object?.payees) ? object.payees.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSetPayees>): MsgSetPayees {
    const message = createBaseMsgSetPayees();
    message.sender = object.sender ?? "";
    message.feedId = object.feedId ?? "";
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.payees = object.payees?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetPayeesAmino): MsgSetPayees {
    return {
      sender: object.sender,
      feedId: object.feed_id,
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => e) : [],
      payees: Array.isArray(object?.payees) ? object.payees.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgSetPayees): MsgSetPayeesAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.feed_id = message.feedId;
    if (message.transmitters) {
      obj.transmitters = message.transmitters.map(e => e);
    } else {
      obj.transmitters = [];
    }
    if (message.payees) {
      obj.payees = message.payees.map(e => e);
    } else {
      obj.payees = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetPayeesAminoMsg): MsgSetPayees {
    return MsgSetPayees.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPayeesProtoMsg): MsgSetPayees {
    return MsgSetPayees.decode(message.value);
  },
  toProto(message: MsgSetPayees): Uint8Array {
    return MsgSetPayees.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPayees): MsgSetPayeesProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
      value: MsgSetPayees.encode(message).finish()
    };
  }
};
function createBaseMsgSetPayeesResponse(): MsgSetPayeesResponse {
  return {};
}
export const MsgSetPayeesResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse",
  encode(_: MsgSetPayeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetPayeesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetPayeesResponse>): MsgSetPayeesResponse {
    const message = createBaseMsgSetPayeesResponse();
    return message;
  },
  fromAmino(_: MsgSetPayeesResponseAmino): MsgSetPayeesResponse {
    return {};
  },
  toAmino(_: MsgSetPayeesResponse): MsgSetPayeesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPayeesResponseAminoMsg): MsgSetPayeesResponse {
    return MsgSetPayeesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPayeesResponseProtoMsg): MsgSetPayeesResponse {
    return MsgSetPayeesResponse.decode(message.value);
  },
  toProto(message: MsgSetPayeesResponse): Uint8Array {
    return MsgSetPayeesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPayeesResponse): MsgSetPayeesResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgSetPayeesResponse",
      value: MsgSetPayeesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferPayeeship(): MsgTransferPayeeship {
  return {
    sender: "",
    transmitter: "",
    feedId: "",
    proposed: ""
  };
}
export const MsgTransferPayeeship = {
  typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
  encode(message: MsgTransferPayeeship, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }
    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }
    if (message.proposed !== "") {
      writer.uint32(34).string(message.proposed);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransferPayeeship {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      proposed: isSet(object.proposed) ? String(object.proposed) : ""
    };
  },
  fromPartial(object: Partial<MsgTransferPayeeship>): MsgTransferPayeeship {
    const message = createBaseMsgTransferPayeeship();
    message.sender = object.sender ?? "";
    message.transmitter = object.transmitter ?? "";
    message.feedId = object.feedId ?? "";
    message.proposed = object.proposed ?? "";
    return message;
  },
  fromAmino(object: MsgTransferPayeeshipAmino): MsgTransferPayeeship {
    return {
      sender: object.sender,
      transmitter: object.transmitter,
      feedId: object.feed_id,
      proposed: object.proposed
    };
  },
  toAmino(message: MsgTransferPayeeship): MsgTransferPayeeshipAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.transmitter = message.transmitter;
    obj.feed_id = message.feedId;
    obj.proposed = message.proposed;
    return obj;
  },
  fromAminoMsg(object: MsgTransferPayeeshipAminoMsg): MsgTransferPayeeship {
    return MsgTransferPayeeship.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferPayeeshipProtoMsg): MsgTransferPayeeship {
    return MsgTransferPayeeship.decode(message.value);
  },
  toProto(message: MsgTransferPayeeship): Uint8Array {
    return MsgTransferPayeeship.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferPayeeship): MsgTransferPayeeshipProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
      value: MsgTransferPayeeship.encode(message).finish()
    };
  }
};
function createBaseMsgTransferPayeeshipResponse(): MsgTransferPayeeshipResponse {
  return {};
}
export const MsgTransferPayeeshipResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse",
  encode(_: MsgTransferPayeeshipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTransferPayeeshipResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferPayeeshipResponse>): MsgTransferPayeeshipResponse {
    const message = createBaseMsgTransferPayeeshipResponse();
    return message;
  },
  fromAmino(_: MsgTransferPayeeshipResponseAmino): MsgTransferPayeeshipResponse {
    return {};
  },
  toAmino(_: MsgTransferPayeeshipResponse): MsgTransferPayeeshipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferPayeeshipResponseAminoMsg): MsgTransferPayeeshipResponse {
    return MsgTransferPayeeshipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferPayeeshipResponseProtoMsg): MsgTransferPayeeshipResponse {
    return MsgTransferPayeeshipResponse.decode(message.value);
  },
  toProto(message: MsgTransferPayeeshipResponse): Uint8Array {
    return MsgTransferPayeeshipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferPayeeshipResponse): MsgTransferPayeeshipResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeshipResponse",
      value: MsgTransferPayeeshipResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptPayeeship(): MsgAcceptPayeeship {
  return {
    payee: "",
    transmitter: "",
    feedId: ""
  };
}
export const MsgAcceptPayeeship = {
  typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
  encode(message: MsgAcceptPayeeship, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payee !== "") {
      writer.uint32(10).string(message.payee);
    }
    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }
    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }
    return writer;
  },
  fromJSON(object: any): MsgAcceptPayeeship {
    return {
      payee: isSet(object.payee) ? String(object.payee) : "",
      transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
      feedId: isSet(object.feedId) ? String(object.feedId) : ""
    };
  },
  fromPartial(object: Partial<MsgAcceptPayeeship>): MsgAcceptPayeeship {
    const message = createBaseMsgAcceptPayeeship();
    message.payee = object.payee ?? "";
    message.transmitter = object.transmitter ?? "";
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromAmino(object: MsgAcceptPayeeshipAmino): MsgAcceptPayeeship {
    return {
      payee: object.payee,
      transmitter: object.transmitter,
      feedId: object.feed_id
    };
  },
  toAmino(message: MsgAcceptPayeeship): MsgAcceptPayeeshipAmino {
    const obj: any = {};
    obj.payee = message.payee;
    obj.transmitter = message.transmitter;
    obj.feed_id = message.feedId;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptPayeeshipAminoMsg): MsgAcceptPayeeship {
    return MsgAcceptPayeeship.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptPayeeshipProtoMsg): MsgAcceptPayeeship {
    return MsgAcceptPayeeship.decode(message.value);
  },
  toProto(message: MsgAcceptPayeeship): Uint8Array {
    return MsgAcceptPayeeship.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptPayeeship): MsgAcceptPayeeshipProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
      value: MsgAcceptPayeeship.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptPayeeshipResponse(): MsgAcceptPayeeshipResponse {
  return {};
}
export const MsgAcceptPayeeshipResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse",
  encode(_: MsgAcceptPayeeshipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAcceptPayeeshipResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAcceptPayeeshipResponse>): MsgAcceptPayeeshipResponse {
    const message = createBaseMsgAcceptPayeeshipResponse();
    return message;
  },
  fromAmino(_: MsgAcceptPayeeshipResponseAmino): MsgAcceptPayeeshipResponse {
    return {};
  },
  toAmino(_: MsgAcceptPayeeshipResponse): MsgAcceptPayeeshipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptPayeeshipResponseAminoMsg): MsgAcceptPayeeshipResponse {
    return MsgAcceptPayeeshipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptPayeeshipResponseProtoMsg): MsgAcceptPayeeshipResponse {
    return MsgAcceptPayeeshipResponse.decode(message.value);
  },
  toProto(message: MsgAcceptPayeeshipResponse): Uint8Array {
    return MsgAcceptPayeeshipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptPayeeshipResponse): MsgAcceptPayeeshipResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeshipResponse",
      value: MsgAcceptPayeeshipResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.ocr.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};