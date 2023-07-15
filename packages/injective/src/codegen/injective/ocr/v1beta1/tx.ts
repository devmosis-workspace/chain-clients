import { FeedConfig, FeedConfigSDKType, Report, ReportSDKType, Params, ParamsSDKType } from "./ocr";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateFeed {
  sender: string;
  config?: FeedConfig;
}
export interface MsgCreateFeedSDKType {
  sender: string;
  config?: FeedConfigSDKType;
}
export interface MsgCreateFeedResponse {}
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
export interface MsgUpdateFeedResponse {}
export interface MsgUpdateFeedResponseSDKType {}
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
export interface MsgTransmitResponse {}
export interface MsgTransmitResponseSDKType {}
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
export interface MsgFundFeedRewardPoolResponse {}
export interface MsgFundFeedRewardPoolResponseSDKType {}
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
export interface MsgWithdrawFeedRewardPoolResponse {}
export interface MsgWithdrawFeedRewardPoolResponseSDKType {}
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
export interface MsgSetPayeesResponse {}
export interface MsgSetPayeesResponseSDKType {}
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
export interface MsgTransferPayeeshipResponse {}
export interface MsgTransferPayeeshipResponseSDKType {}
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
export interface MsgAcceptPayeeshipResponse {}
export interface MsgAcceptPayeeshipResponseSDKType {}
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
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateFeed(): MsgCreateFeed {
  return {
    sender: "",
    config: undefined
  };
}
export const MsgCreateFeed = {
  encode(message: MsgCreateFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgCreateFeedResponse(): MsgCreateFeedResponse {
  return {};
}
export const MsgCreateFeedResponse = {
  encode(_: MsgCreateFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateFeedResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateFeedResponse>): MsgCreateFeedResponse {
    const message = createBaseMsgCreateFeedResponse();
    return message;
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
  encode(message: MsgUpdateFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateFeedResponse(): MsgUpdateFeedResponse {
  return {};
}
export const MsgUpdateFeedResponse = {
  encode(_: MsgUpdateFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateFeedResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateFeedResponse>): MsgUpdateFeedResponse {
    const message = createBaseMsgUpdateFeedResponse();
    return message;
  }
};
function createBaseMsgTransmit(): MsgTransmit {
  return {
    transmitter: "",
    configDigest: new Uint8Array(),
    feedId: "",
    epoch: Long.UZERO,
    round: Long.UZERO,
    extraHash: new Uint8Array(),
    report: undefined,
    signatures: []
  };
}
export const MsgTransmit = {
  encode(message: MsgTransmit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transmitter !== "") {
      writer.uint32(10).string(message.transmitter);
    }
    if (message.configDigest.length !== 0) {
      writer.uint32(18).bytes(message.configDigest);
    }
    if (message.feedId !== "") {
      writer.uint32(26).string(message.feedId);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(32).uint64(message.epoch);
    }
    if (!message.round.isZero()) {
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
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.UZERO,
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
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.extraHash = object.extraHash ?? new Uint8Array();
    message.report = object.report !== undefined && object.report !== null ? Report.fromPartial(object.report) : undefined;
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgTransmitResponse(): MsgTransmitResponse {
  return {};
}
export const MsgTransmitResponse = {
  encode(_: MsgTransmitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgTransmitResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransmitResponse>): MsgTransmitResponse {
    const message = createBaseMsgTransmitResponse();
    return message;
  }
};
function createBaseMsgFundFeedRewardPool(): MsgFundFeedRewardPool {
  return {
    sender: "",
    feedId: "",
    amount: undefined
  };
}
export const MsgFundFeedRewardPool = {
  encode(message: MsgFundFeedRewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgFundFeedRewardPoolResponse(): MsgFundFeedRewardPoolResponse {
  return {};
}
export const MsgFundFeedRewardPoolResponse = {
  encode(_: MsgFundFeedRewardPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgFundFeedRewardPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgFundFeedRewardPoolResponse>): MsgFundFeedRewardPoolResponse {
    const message = createBaseMsgFundFeedRewardPoolResponse();
    return message;
  }
};
function createBaseMsgWithdrawFeedRewardPool(): MsgWithdrawFeedRewardPool {
  return {
    sender: "",
    feedId: "",
    amount: undefined
  };
}
export const MsgWithdrawFeedRewardPool = {
  encode(message: MsgWithdrawFeedRewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgWithdrawFeedRewardPoolResponse(): MsgWithdrawFeedRewardPoolResponse {
  return {};
}
export const MsgWithdrawFeedRewardPoolResponse = {
  encode(_: MsgWithdrawFeedRewardPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawFeedRewardPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawFeedRewardPoolResponse>): MsgWithdrawFeedRewardPoolResponse {
    const message = createBaseMsgWithdrawFeedRewardPoolResponse();
    return message;
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
  encode(message: MsgSetPayees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgSetPayeesResponse(): MsgSetPayeesResponse {
  return {};
}
export const MsgSetPayeesResponse = {
  encode(_: MsgSetPayeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetPayeesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetPayeesResponse>): MsgSetPayeesResponse {
    const message = createBaseMsgSetPayeesResponse();
    return message;
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
  encode(message: MsgTransferPayeeship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgTransferPayeeshipResponse(): MsgTransferPayeeshipResponse {
  return {};
}
export const MsgTransferPayeeshipResponse = {
  encode(_: MsgTransferPayeeshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgTransferPayeeshipResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferPayeeshipResponse>): MsgTransferPayeeshipResponse {
    const message = createBaseMsgTransferPayeeshipResponse();
    return message;
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
  encode(message: MsgAcceptPayeeship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgAcceptPayeeshipResponse(): MsgAcceptPayeeshipResponse {
  return {};
}
export const MsgAcceptPayeeshipResponse = {
  encode(_: MsgAcceptPayeeshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAcceptPayeeshipResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAcceptPayeeshipResponse>): MsgAcceptPayeeshipResponse {
    const message = createBaseMsgAcceptPayeeshipResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};