import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
/**
 * CoreEvalProposal is a gov Content type for evaluating code in the SwingSet
 * core.
 * See `agoric-sdk/packages/vats/src/core/eval.js`.
 */
export interface CoreEvalProposal {
  title: string;
  description: string;
  /**
   * Although evals are sequential, they may run concurrently, since they each
   * can return a Promise.
   */
  evals: CoreEval[];
}
/**
 * CoreEvalProposal is a gov Content type for evaluating code in the SwingSet
 * core.
 * See `agoric-sdk/packages/vats/src/core/eval.js`.
 */
export interface CoreEvalProposalSDKType {
  title: string;
  description: string;
  evals: CoreEvalSDKType[];
}
/**
 * CoreEval defines an individual SwingSet core evaluation, for use in
 * CoreEvalProposal.
 */
export interface CoreEval {
  /**
   * Grant these JSON-stringified core bootstrap permits to the jsCode, as the
   * `powers` endowment.
   */
  jsonPermits: string;
  /**
   * Evaluate this JavaScript code in a Compartment endowed with `powers` as
   * well as some powerless helpers.
   */
  jsCode: string;
}
/**
 * CoreEval defines an individual SwingSet core evaluation, for use in
 * CoreEvalProposal.
 */
export interface CoreEvalSDKType {
  json_permits: string;
  js_code: string;
}
/** Params are the swingset configuration/governance parameters. */
export interface Params {
  /**
   * Map from unit name to a value in SwingSet "beans".
   * Must not be negative.
   * 
   * These values are used by SwingSet to normalize named per-resource charges
   * (maybe rent) in a single Nat usage unit, the "bean".
   * 
   * There is no required order to this list of entries, but all the chain
   * nodes must all serialize and deserialize the existing order without
   * permuting it.
   */
  beansPerUnit: StringBeans[];
  /**
   * The price in Coins per the unit named "fee".  This value is used by
   * cosmic-swingset JS code to decide how many tokens to charge.
   * 
   * cost = beans_used * fee_unit_price / beans_per_unit["fee"]
   */
  feeUnitPrice: Coin[];
  /**
   * The SwingSet bootstrap vat configuration file.  Not usefully modifiable
   * via governance as it is only referenced by the chain's initial
   * construction.
   */
  bootstrapVatConfig: string;
  /**
   * If the provision submitter doesn't hold a provisionpass, their requested
   * power flags are looked up in this fee menu (first match wins) and the sum
   * is charged.  If any power flag is not found in this menu, the request is
   * rejected.
   */
  powerFlagFees: PowerFlagFee[];
  /**
   * Maximum sizes for queues.
   * These values are used by SwingSet to compute how many messages should be
   * accepted in a block.
   * 
   * There is no required order to this list of entries, but all the chain
   * nodes must all serialize and deserialize the existing order without
   * permuting it.
   */
  queueMax: QueueSize[];
}
/** Params are the swingset configuration/governance parameters. */
export interface ParamsSDKType {
  beans_per_unit: StringBeansSDKType[];
  fee_unit_price: CoinSDKType[];
  bootstrap_vat_config: string;
  power_flag_fees: PowerFlagFeeSDKType[];
  queue_max: QueueSizeSDKType[];
}
/** The current state of the module. */
export interface State {
  /**
   * The allowed number of items to add to queues, as determined by SwingSet.
   * Transactions which attempt to enqueue more should be rejected.
   */
  queueAllowed: QueueSize[];
}
/** The current state of the module. */
export interface StateSDKType {
  queue_allowed: QueueSizeSDKType[];
}
/** Map element of a string key to a Nat bean count. */
export interface StringBeans {
  /** What the beans are for. */
  key: string;
  /** The actual bean value. */
  beans: string;
}
/** Map element of a string key to a Nat bean count. */
export interface StringBeansSDKType {
  key: string;
  beans: string;
}
/** Map a provisioning power flag to its corresponding fee. */
export interface PowerFlagFee {
  powerFlag: string;
  fee: Coin[];
}
/** Map a provisioning power flag to its corresponding fee. */
export interface PowerFlagFeeSDKType {
  power_flag: string;
  fee: CoinSDKType[];
}
/** Map element of a string key to a size. */
export interface QueueSize {
  /** What the size is for. */
  key: string;
  /** The actual size value. */
  size: number;
}
/** Map element of a string key to a size. */
export interface QueueSizeSDKType {
  key: string;
  size: number;
}
/** Egress is the format for a swingset egress. */
export interface Egress {
  nickname: string;
  peer: Uint8Array;
  /** TODO: Remove these power flags as they are deprecated and have no effect. */
  powerFlags: string[];
}
/** Egress is the format for a swingset egress. */
export interface EgressSDKType {
  nickname: string;
  peer: Uint8Array;
  power_flags: string[];
}
/** The payload messages used by swingset state-sync */
export interface ExtensionSnapshotterArtifactPayload {
  name: string;
  data: Uint8Array;
}
/** The payload messages used by swingset state-sync */
export interface ExtensionSnapshotterArtifactPayloadSDKType {
  name: string;
  data: Uint8Array;
}
function createBaseCoreEvalProposal(): CoreEvalProposal {
  return {
    title: "",
    description: "",
    evals: []
  };
}
export const CoreEvalProposal = {
  encode(message: CoreEvalProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.evals) {
      CoreEval.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CoreEvalProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      evals: Array.isArray(object?.evals) ? object.evals.map((e: any) => CoreEval.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CoreEvalProposal>): CoreEvalProposal {
    const message = createBaseCoreEvalProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.evals = object.evals?.map(e => CoreEval.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCoreEval(): CoreEval {
  return {
    jsonPermits: "",
    jsCode: ""
  };
}
export const CoreEval = {
  encode(message: CoreEval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jsonPermits !== "") {
      writer.uint32(10).string(message.jsonPermits);
    }
    if (message.jsCode !== "") {
      writer.uint32(18).string(message.jsCode);
    }
    return writer;
  },
  fromJSON(object: any): CoreEval {
    return {
      jsonPermits: isSet(object.jsonPermits) ? String(object.jsonPermits) : "",
      jsCode: isSet(object.jsCode) ? String(object.jsCode) : ""
    };
  },
  fromPartial(object: Partial<CoreEval>): CoreEval {
    const message = createBaseCoreEval();
    message.jsonPermits = object.jsonPermits ?? "";
    message.jsCode = object.jsCode ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    beansPerUnit: [],
    feeUnitPrice: [],
    bootstrapVatConfig: "",
    powerFlagFees: [],
    queueMax: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.beansPerUnit) {
      StringBeans.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeUnitPrice) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.bootstrapVatConfig !== "") {
      writer.uint32(26).string(message.bootstrapVatConfig);
    }
    for (const v of message.powerFlagFees) {
      PowerFlagFee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.queueMax) {
      QueueSize.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      beansPerUnit: Array.isArray(object?.beansPerUnit) ? object.beansPerUnit.map((e: any) => StringBeans.fromJSON(e)) : [],
      feeUnitPrice: Array.isArray(object?.feeUnitPrice) ? object.feeUnitPrice.map((e: any) => Coin.fromJSON(e)) : [],
      bootstrapVatConfig: isSet(object.bootstrapVatConfig) ? String(object.bootstrapVatConfig) : "",
      powerFlagFees: Array.isArray(object?.powerFlagFees) ? object.powerFlagFees.map((e: any) => PowerFlagFee.fromJSON(e)) : [],
      queueMax: Array.isArray(object?.queueMax) ? object.queueMax.map((e: any) => QueueSize.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.beansPerUnit = object.beansPerUnit?.map(e => StringBeans.fromPartial(e)) || [];
    message.feeUnitPrice = object.feeUnitPrice?.map(e => Coin.fromPartial(e)) || [];
    message.bootstrapVatConfig = object.bootstrapVatConfig ?? "";
    message.powerFlagFees = object.powerFlagFees?.map(e => PowerFlagFee.fromPartial(e)) || [];
    message.queueMax = object.queueMax?.map(e => QueueSize.fromPartial(e)) || [];
    return message;
  }
};
function createBaseState(): State {
  return {
    queueAllowed: []
  };
}
export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queueAllowed) {
      QueueSize.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): State {
    return {
      queueAllowed: Array.isArray(object?.queueAllowed) ? object.queueAllowed.map((e: any) => QueueSize.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.queueAllowed = object.queueAllowed?.map(e => QueueSize.fromPartial(e)) || [];
    return message;
  }
};
function createBaseStringBeans(): StringBeans {
  return {
    key: "",
    beans: ""
  };
}
export const StringBeans = {
  encode(message: StringBeans, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.beans !== "") {
      writer.uint32(18).string(message.beans);
    }
    return writer;
  },
  fromJSON(object: any): StringBeans {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      beans: isSet(object.beans) ? String(object.beans) : ""
    };
  },
  fromPartial(object: Partial<StringBeans>): StringBeans {
    const message = createBaseStringBeans();
    message.key = object.key ?? "";
    message.beans = object.beans ?? "";
    return message;
  }
};
function createBasePowerFlagFee(): PowerFlagFee {
  return {
    powerFlag: "",
    fee: []
  };
}
export const PowerFlagFee = {
  encode(message: PowerFlagFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.powerFlag !== "") {
      writer.uint32(10).string(message.powerFlag);
    }
    for (const v of message.fee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PowerFlagFee {
    return {
      powerFlag: isSet(object.powerFlag) ? String(object.powerFlag) : "",
      fee: Array.isArray(object?.fee) ? object.fee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PowerFlagFee>): PowerFlagFee {
    const message = createBasePowerFlagFee();
    message.powerFlag = object.powerFlag ?? "";
    message.fee = object.fee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueueSize(): QueueSize {
  return {
    key: "",
    size: 0
  };
}
export const QueueSize = {
  encode(message: QueueSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.size !== 0) {
      writer.uint32(16).int32(message.size);
    }
    return writer;
  },
  fromJSON(object: any): QueueSize {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      size: isSet(object.size) ? Number(object.size) : 0
    };
  },
  fromPartial(object: Partial<QueueSize>): QueueSize {
    const message = createBaseQueueSize();
    message.key = object.key ?? "";
    message.size = object.size ?? 0;
    return message;
  }
};
function createBaseEgress(): Egress {
  return {
    nickname: "",
    peer: new Uint8Array(),
    powerFlags: []
  };
}
export const Egress = {
  encode(message: Egress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== "") {
      writer.uint32(10).string(message.nickname);
    }
    if (message.peer.length !== 0) {
      writer.uint32(18).bytes(message.peer);
    }
    for (const v of message.powerFlags) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Egress {
    return {
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      peer: isSet(object.peer) ? bytesFromBase64(object.peer) : new Uint8Array(),
      powerFlags: Array.isArray(object?.powerFlags) ? object.powerFlags.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Egress>): Egress {
    const message = createBaseEgress();
    message.nickname = object.nickname ?? "";
    message.peer = object.peer ?? new Uint8Array();
    message.powerFlags = object.powerFlags?.map(e => e) || [];
    return message;
  }
};
function createBaseExtensionSnapshotterArtifactPayload(): ExtensionSnapshotterArtifactPayload {
  return {
    name: "",
    data: new Uint8Array()
  };
}
export const ExtensionSnapshotterArtifactPayload = {
  encode(message: ExtensionSnapshotterArtifactPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): ExtensionSnapshotterArtifactPayload {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ExtensionSnapshotterArtifactPayload>): ExtensionSnapshotterArtifactPayload {
    const message = createBaseExtensionSnapshotterArtifactPayload();
    message.name = object.name ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};