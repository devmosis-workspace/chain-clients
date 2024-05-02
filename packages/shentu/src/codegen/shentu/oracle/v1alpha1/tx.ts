import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp, base64FromBytes } from "../../../helpers";
export interface MsgCreateOperator {
  address: string;
  collateral: Coin[];
  proposer: string;
  name: string;
}
export interface MsgCreateOperatorProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperator";
  value: Uint8Array;
}
export interface MsgCreateOperatorAmino {
  address?: string;
  collateral?: CoinAmino[];
  proposer?: string;
  name?: string;
}
export interface MsgCreateOperatorAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgCreateOperator";
  value: MsgCreateOperatorAmino;
}
export interface MsgCreateOperatorSDKType {
  address: string;
  collateral: CoinSDKType[];
  proposer: string;
  name: string;
}
export interface MsgCreateOperatorResponse {}
export interface MsgCreateOperatorResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperatorResponse";
  value: Uint8Array;
}
export interface MsgCreateOperatorResponseAmino {}
export interface MsgCreateOperatorResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgCreateOperatorResponse";
  value: MsgCreateOperatorResponseAmino;
}
export interface MsgCreateOperatorResponseSDKType {}
export interface MsgRemoveOperator {
  address: string;
  proposer: string;
}
export interface MsgRemoveOperatorProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperator";
  value: Uint8Array;
}
export interface MsgRemoveOperatorAmino {
  address?: string;
  proposer?: string;
}
export interface MsgRemoveOperatorAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgRemoveOperator";
  value: MsgRemoveOperatorAmino;
}
export interface MsgRemoveOperatorSDKType {
  address: string;
  proposer: string;
}
export interface MsgRemoveOperatorResponse {}
export interface MsgRemoveOperatorResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperatorResponse";
  value: Uint8Array;
}
export interface MsgRemoveOperatorResponseAmino {}
export interface MsgRemoveOperatorResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgRemoveOperatorResponse";
  value: MsgRemoveOperatorResponseAmino;
}
export interface MsgRemoveOperatorResponseSDKType {}
export interface MsgAddCollateral {
  address: string;
  collateralIncrement: Coin[];
}
export interface MsgAddCollateralProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateral";
  value: Uint8Array;
}
export interface MsgAddCollateralAmino {
  address?: string;
  collateral_increment?: CoinAmino[];
}
export interface MsgAddCollateralAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgAddCollateral";
  value: MsgAddCollateralAmino;
}
export interface MsgAddCollateralSDKType {
  address: string;
  collateral_increment: CoinSDKType[];
}
export interface MsgAddCollateralResponse {}
export interface MsgAddCollateralResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateralResponse";
  value: Uint8Array;
}
export interface MsgAddCollateralResponseAmino {}
export interface MsgAddCollateralResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgAddCollateralResponse";
  value: MsgAddCollateralResponseAmino;
}
export interface MsgAddCollateralResponseSDKType {}
export interface MsgReduceCollateral {
  address: string;
  collateralDecrement: Coin[];
}
export interface MsgReduceCollateralProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateral";
  value: Uint8Array;
}
export interface MsgReduceCollateralAmino {
  address?: string;
  collateral_decrement?: CoinAmino[];
}
export interface MsgReduceCollateralAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgReduceCollateral";
  value: MsgReduceCollateralAmino;
}
export interface MsgReduceCollateralSDKType {
  address: string;
  collateral_decrement: CoinSDKType[];
}
export interface MsgReduceCollateralResponse {}
export interface MsgReduceCollateralResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateralResponse";
  value: Uint8Array;
}
export interface MsgReduceCollateralResponseAmino {}
export interface MsgReduceCollateralResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgReduceCollateralResponse";
  value: MsgReduceCollateralResponseAmino;
}
export interface MsgReduceCollateralResponseSDKType {}
export interface MsgWithdrawReward {
  address: string;
}
export interface MsgWithdrawRewardProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawReward";
  value: Uint8Array;
}
export interface MsgWithdrawRewardAmino {
  address?: string;
}
export interface MsgWithdrawRewardAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgWithdrawReward";
  value: MsgWithdrawRewardAmino;
}
export interface MsgWithdrawRewardSDKType {
  address: string;
}
export interface MsgWithdrawRewardResponse {}
export interface MsgWithdrawRewardResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawRewardResponse";
  value: Uint8Array;
}
export interface MsgWithdrawRewardResponseAmino {}
export interface MsgWithdrawRewardResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgWithdrawRewardResponse";
  value: MsgWithdrawRewardResponseAmino;
}
export interface MsgWithdrawRewardResponseSDKType {}
export interface MsgCreateTask {
  contract: string;
  function: string;
  bounty: Coin[];
  description: string;
  creator: string;
  wait: bigint;
  validDuration: Duration;
}
export interface MsgCreateTaskProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTask";
  value: Uint8Array;
}
export interface MsgCreateTaskAmino {
  contract?: string;
  function?: string;
  bounty?: CoinAmino[];
  description?: string;
  creator?: string;
  wait?: string;
  valid_duration?: DurationAmino;
}
export interface MsgCreateTaskAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgCreateTask";
  value: MsgCreateTaskAmino;
}
export interface MsgCreateTaskSDKType {
  contract: string;
  function: string;
  bounty: CoinSDKType[];
  description: string;
  creator: string;
  wait: bigint;
  valid_duration: DurationSDKType;
}
export interface MsgCreateTaskResponse {}
export interface MsgCreateTaskResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTaskResponse";
  value: Uint8Array;
}
export interface MsgCreateTaskResponseAmino {}
export interface MsgCreateTaskResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgCreateTaskResponse";
  value: MsgCreateTaskResponseAmino;
}
export interface MsgCreateTaskResponseSDKType {}
export interface MsgTaskResponse {
  contract: string;
  function: string;
  score: bigint;
  operator: string;
}
export interface MsgTaskResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponse";
  value: Uint8Array;
}
export interface MsgTaskResponseAmino {
  contract?: string;
  function?: string;
  score?: string;
  operator?: string;
}
export interface MsgTaskResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgTaskResponse";
  value: MsgTaskResponseAmino;
}
export interface MsgTaskResponseSDKType {
  contract: string;
  function: string;
  score: bigint;
  operator: string;
}
export interface MsgTaskResponseResponse {}
export interface MsgTaskResponseResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponseResponse";
  value: Uint8Array;
}
export interface MsgTaskResponseResponseAmino {}
export interface MsgTaskResponseResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgTaskResponseResponse";
  value: MsgTaskResponseResponseAmino;
}
export interface MsgTaskResponseResponseSDKType {}
export interface MsgDeleteTask {
  contract: string;
  function: string;
  force: boolean;
  from: string;
}
export interface MsgDeleteTaskProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTask";
  value: Uint8Array;
}
export interface MsgDeleteTaskAmino {
  contract?: string;
  function?: string;
  force?: boolean;
  from?: string;
}
export interface MsgDeleteTaskAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgDeleteTask";
  value: MsgDeleteTaskAmino;
}
export interface MsgDeleteTaskSDKType {
  contract: string;
  function: string;
  force: boolean;
  from: string;
}
export interface MsgDeleteTaskResponse {}
export interface MsgDeleteTaskResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTaskResponse";
  value: Uint8Array;
}
export interface MsgDeleteTaskResponseAmino {}
export interface MsgDeleteTaskResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgDeleteTaskResponse";
  value: MsgDeleteTaskResponseAmino;
}
export interface MsgDeleteTaskResponseSDKType {}
export interface MsgCreateTxTask {
  creator: string;
  chainId: string;
  /** the bytes of application chain transaction that is going to be evaluated */
  atxBytes: Uint8Array;
  bounty: Coin[];
  validTime: Timestamp;
}
export interface MsgCreateTxTaskProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTask";
  value: Uint8Array;
}
export interface MsgCreateTxTaskAmino {
  creator?: string;
  chain_id?: string;
  /** the bytes of application chain transaction that is going to be evaluated */
  atx_bytes?: string;
  bounty?: CoinAmino[];
  valid_time?: string;
}
export interface MsgCreateTxTaskAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgCreateTxTask";
  value: MsgCreateTxTaskAmino;
}
export interface MsgCreateTxTaskSDKType {
  creator: string;
  chain_id: string;
  atx_bytes: Uint8Array;
  bounty: CoinSDKType[];
  valid_time: TimestampSDKType;
}
export interface MsgCreateTxTaskResponse {
  /** sha256 hash of the application chain transaction */
  atxHash: Uint8Array;
}
export interface MsgCreateTxTaskResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTaskResponse";
  value: Uint8Array;
}
export interface MsgCreateTxTaskResponseAmino {
  /** sha256 hash of the application chain transaction */
  atx_hash?: string;
}
export interface MsgCreateTxTaskResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgCreateTxTaskResponse";
  value: MsgCreateTxTaskResponseAmino;
}
export interface MsgCreateTxTaskResponseSDKType {
  atx_hash: Uint8Array;
}
export interface MsgTxTaskResponse {
  /** sha256 hash of the application chain transaction */
  atxHash: Uint8Array;
  score: bigint;
  operator: string;
}
export interface MsgTxTaskResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponse";
  value: Uint8Array;
}
export interface MsgTxTaskResponseAmino {
  /** sha256 hash of the application chain transaction */
  atx_hash?: string;
  score?: string;
  operator?: string;
}
export interface MsgTxTaskResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgTxTaskResponse";
  value: MsgTxTaskResponseAmino;
}
export interface MsgTxTaskResponseSDKType {
  atx_hash: Uint8Array;
  score: bigint;
  operator: string;
}
export interface MsgTxTaskResponseResponse {}
export interface MsgTxTaskResponseResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponseResponse";
  value: Uint8Array;
}
export interface MsgTxTaskResponseResponseAmino {}
export interface MsgTxTaskResponseResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgTxTaskResponseResponse";
  value: MsgTxTaskResponseResponseAmino;
}
export interface MsgTxTaskResponseResponseSDKType {}
export interface MsgDeleteTxTask {
  /** sha256 hash of the application chain transaction */
  atxHash: Uint8Array;
  from: string;
}
export interface MsgDeleteTxTaskProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTask";
  value: Uint8Array;
}
export interface MsgDeleteTxTaskAmino {
  /** sha256 hash of the application chain transaction */
  atx_hash?: string;
  from?: string;
}
export interface MsgDeleteTxTaskAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgDeleteTxTask";
  value: MsgDeleteTxTaskAmino;
}
export interface MsgDeleteTxTaskSDKType {
  atx_hash: Uint8Array;
  from: string;
}
export interface MsgDeleteTxTaskResponse {}
export interface MsgDeleteTxTaskResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTaskResponse";
  value: Uint8Array;
}
export interface MsgDeleteTxTaskResponseAmino {}
export interface MsgDeleteTxTaskResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.MsgDeleteTxTaskResponse";
  value: MsgDeleteTxTaskResponseAmino;
}
export interface MsgDeleteTxTaskResponseSDKType {}
function createBaseMsgCreateOperator(): MsgCreateOperator {
  return {
    address: "",
    collateral: [],
    proposer: "",
    name: ""
  };
}
export const MsgCreateOperator = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperator",
  encode(message: MsgCreateOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateOperator {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Coin.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateOperator>): MsgCreateOperator {
    const message = createBaseMsgCreateOperator();
    message.address = object.address ?? "";
    message.collateral = object.collateral?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgCreateOperatorAmino): MsgCreateOperator {
    const message = createBaseMsgCreateOperator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.collateral = object.collateral?.map(e => Coin.fromAmino(e)) || [];
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgCreateOperator): MsgCreateOperatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral = message.collateral;
    }
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOperatorAminoMsg): MsgCreateOperator {
    return MsgCreateOperator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOperatorProtoMsg): MsgCreateOperator {
    return MsgCreateOperator.decode(message.value);
  },
  toProto(message: MsgCreateOperator): Uint8Array {
    return MsgCreateOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOperator): MsgCreateOperatorProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperator",
      value: MsgCreateOperator.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOperatorResponse(): MsgCreateOperatorResponse {
  return {};
}
export const MsgCreateOperatorResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperatorResponse",
  encode(_: MsgCreateOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateOperatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateOperatorResponse>): MsgCreateOperatorResponse {
    const message = createBaseMsgCreateOperatorResponse();
    return message;
  },
  fromAmino(_: MsgCreateOperatorResponseAmino): MsgCreateOperatorResponse {
    const message = createBaseMsgCreateOperatorResponse();
    return message;
  },
  toAmino(_: MsgCreateOperatorResponse): MsgCreateOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateOperatorResponseAminoMsg): MsgCreateOperatorResponse {
    return MsgCreateOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOperatorResponseProtoMsg): MsgCreateOperatorResponse {
    return MsgCreateOperatorResponse.decode(message.value);
  },
  toProto(message: MsgCreateOperatorResponse): Uint8Array {
    return MsgCreateOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOperatorResponse): MsgCreateOperatorResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperatorResponse",
      value: MsgCreateOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOperator(): MsgRemoveOperator {
  return {
    address: "",
    proposer: ""
  };
}
export const MsgRemoveOperator = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperator",
  encode(message: MsgRemoveOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveOperator {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveOperator>): MsgRemoveOperator {
    const message = createBaseMsgRemoveOperator();
    message.address = object.address ?? "";
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveOperatorAmino): MsgRemoveOperator {
    const message = createBaseMsgRemoveOperator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message: MsgRemoveOperator): MsgRemoveOperatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOperatorAminoMsg): MsgRemoveOperator {
    return MsgRemoveOperator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveOperatorProtoMsg): MsgRemoveOperator {
    return MsgRemoveOperator.decode(message.value);
  },
  toProto(message: MsgRemoveOperator): Uint8Array {
    return MsgRemoveOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOperator): MsgRemoveOperatorProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperator",
      value: MsgRemoveOperator.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOperatorResponse(): MsgRemoveOperatorResponse {
  return {};
}
export const MsgRemoveOperatorResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperatorResponse",
  encode(_: MsgRemoveOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveOperatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveOperatorResponse>): MsgRemoveOperatorResponse {
    const message = createBaseMsgRemoveOperatorResponse();
    return message;
  },
  fromAmino(_: MsgRemoveOperatorResponseAmino): MsgRemoveOperatorResponse {
    const message = createBaseMsgRemoveOperatorResponse();
    return message;
  },
  toAmino(_: MsgRemoveOperatorResponse): MsgRemoveOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOperatorResponseAminoMsg): MsgRemoveOperatorResponse {
    return MsgRemoveOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveOperatorResponseProtoMsg): MsgRemoveOperatorResponse {
    return MsgRemoveOperatorResponse.decode(message.value);
  },
  toProto(message: MsgRemoveOperatorResponse): Uint8Array {
    return MsgRemoveOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOperatorResponse): MsgRemoveOperatorResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperatorResponse",
      value: MsgRemoveOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddCollateral(): MsgAddCollateral {
  return {
    address: "",
    collateralIncrement: []
  };
}
export const MsgAddCollateral = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateral",
  encode(message: MsgAddCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.collateralIncrement) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddCollateral {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      collateralIncrement: Array.isArray(object?.collateralIncrement) ? object.collateralIncrement.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddCollateral>): MsgAddCollateral {
    const message = createBaseMsgAddCollateral();
    message.address = object.address ?? "";
    message.collateralIncrement = object.collateralIncrement?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddCollateralAmino): MsgAddCollateral {
    const message = createBaseMsgAddCollateral();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.collateralIncrement = object.collateral_increment?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddCollateral): MsgAddCollateralAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.collateralIncrement) {
      obj.collateral_increment = message.collateralIncrement.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral_increment = message.collateralIncrement;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddCollateralAminoMsg): MsgAddCollateral {
    return MsgAddCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddCollateralProtoMsg): MsgAddCollateral {
    return MsgAddCollateral.decode(message.value);
  },
  toProto(message: MsgAddCollateral): Uint8Array {
    return MsgAddCollateral.encode(message).finish();
  },
  toProtoMsg(message: MsgAddCollateral): MsgAddCollateralProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateral",
      value: MsgAddCollateral.encode(message).finish()
    };
  }
};
function createBaseMsgAddCollateralResponse(): MsgAddCollateralResponse {
  return {};
}
export const MsgAddCollateralResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateralResponse",
  encode(_: MsgAddCollateralResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddCollateralResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddCollateralResponse>): MsgAddCollateralResponse {
    const message = createBaseMsgAddCollateralResponse();
    return message;
  },
  fromAmino(_: MsgAddCollateralResponseAmino): MsgAddCollateralResponse {
    const message = createBaseMsgAddCollateralResponse();
    return message;
  },
  toAmino(_: MsgAddCollateralResponse): MsgAddCollateralResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddCollateralResponseAminoMsg): MsgAddCollateralResponse {
    return MsgAddCollateralResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddCollateralResponseProtoMsg): MsgAddCollateralResponse {
    return MsgAddCollateralResponse.decode(message.value);
  },
  toProto(message: MsgAddCollateralResponse): Uint8Array {
    return MsgAddCollateralResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddCollateralResponse): MsgAddCollateralResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateralResponse",
      value: MsgAddCollateralResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReduceCollateral(): MsgReduceCollateral {
  return {
    address: "",
    collateralDecrement: []
  };
}
export const MsgReduceCollateral = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateral",
  encode(message: MsgReduceCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.collateralDecrement) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgReduceCollateral {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      collateralDecrement: Array.isArray(object?.collateralDecrement) ? object.collateralDecrement.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgReduceCollateral>): MsgReduceCollateral {
    const message = createBaseMsgReduceCollateral();
    message.address = object.address ?? "";
    message.collateralDecrement = object.collateralDecrement?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgReduceCollateralAmino): MsgReduceCollateral {
    const message = createBaseMsgReduceCollateral();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.collateralDecrement = object.collateral_decrement?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgReduceCollateral): MsgReduceCollateralAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.collateralDecrement) {
      obj.collateral_decrement = message.collateralDecrement.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral_decrement = message.collateralDecrement;
    }
    return obj;
  },
  fromAminoMsg(object: MsgReduceCollateralAminoMsg): MsgReduceCollateral {
    return MsgReduceCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReduceCollateralProtoMsg): MsgReduceCollateral {
    return MsgReduceCollateral.decode(message.value);
  },
  toProto(message: MsgReduceCollateral): Uint8Array {
    return MsgReduceCollateral.encode(message).finish();
  },
  toProtoMsg(message: MsgReduceCollateral): MsgReduceCollateralProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateral",
      value: MsgReduceCollateral.encode(message).finish()
    };
  }
};
function createBaseMsgReduceCollateralResponse(): MsgReduceCollateralResponse {
  return {};
}
export const MsgReduceCollateralResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateralResponse",
  encode(_: MsgReduceCollateralResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgReduceCollateralResponse {
    return {};
  },
  fromPartial(_: Partial<MsgReduceCollateralResponse>): MsgReduceCollateralResponse {
    const message = createBaseMsgReduceCollateralResponse();
    return message;
  },
  fromAmino(_: MsgReduceCollateralResponseAmino): MsgReduceCollateralResponse {
    const message = createBaseMsgReduceCollateralResponse();
    return message;
  },
  toAmino(_: MsgReduceCollateralResponse): MsgReduceCollateralResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReduceCollateralResponseAminoMsg): MsgReduceCollateralResponse {
    return MsgReduceCollateralResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReduceCollateralResponseProtoMsg): MsgReduceCollateralResponse {
    return MsgReduceCollateralResponse.decode(message.value);
  },
  toProto(message: MsgReduceCollateralResponse): Uint8Array {
    return MsgReduceCollateralResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReduceCollateralResponse): MsgReduceCollateralResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateralResponse",
      value: MsgReduceCollateralResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawReward(): MsgWithdrawReward {
  return {
    address: ""
  };
}
export const MsgWithdrawReward = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawReward",
  encode(message: MsgWithdrawReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawReward {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawReward>): MsgWithdrawReward {
    const message = createBaseMsgWithdrawReward();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawRewardAmino): MsgWithdrawReward {
    const message = createBaseMsgWithdrawReward();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawReward): MsgWithdrawRewardAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardAminoMsg): MsgWithdrawReward {
    return MsgWithdrawReward.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardProtoMsg): MsgWithdrawReward {
    return MsgWithdrawReward.decode(message.value);
  },
  toProto(message: MsgWithdrawReward): Uint8Array {
    return MsgWithdrawReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawReward): MsgWithdrawRewardProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawReward",
      value: MsgWithdrawReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewardResponse(): MsgWithdrawRewardResponse {
  return {};
}
export const MsgWithdrawRewardResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawRewardResponse",
  encode(_: MsgWithdrawRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawRewardResponse>): MsgWithdrawRewardResponse {
    const message = createBaseMsgWithdrawRewardResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawRewardResponseAmino): MsgWithdrawRewardResponse {
    const message = createBaseMsgWithdrawRewardResponse();
    return message;
  },
  toAmino(_: MsgWithdrawRewardResponse): MsgWithdrawRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardResponseAminoMsg): MsgWithdrawRewardResponse {
    return MsgWithdrawRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardResponseProtoMsg): MsgWithdrawRewardResponse {
    return MsgWithdrawRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawRewardResponse): Uint8Array {
    return MsgWithdrawRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewardResponse): MsgWithdrawRewardResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawRewardResponse",
      value: MsgWithdrawRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTask(): MsgCreateTask {
  return {
    contract: "",
    function: "",
    bounty: [],
    description: "",
    creator: "",
    wait: BigInt(0),
    validDuration: Duration.fromPartial({})
  };
}
export const MsgCreateTask = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTask",
  encode(message: MsgCreateTask, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    for (const v of message.bounty) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.wait !== BigInt(0)) {
      writer.uint32(48).int64(message.wait);
    }
    if (message.validDuration !== undefined) {
      Duration.encode(message.validDuration, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateTask {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      function: isSet(object.function) ? String(object.function) : "",
      bounty: Array.isArray(object?.bounty) ? object.bounty.map((e: any) => Coin.fromJSON(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      wait: isSet(object.wait) ? BigInt(object.wait.toString()) : BigInt(0),
      validDuration: isSet(object.validDuration) ? Duration.fromJSON(object.validDuration) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateTask>): MsgCreateTask {
    const message = createBaseMsgCreateTask();
    message.contract = object.contract ?? "";
    message.function = object.function ?? "";
    message.bounty = object.bounty?.map(e => Coin.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.creator = object.creator ?? "";
    message.wait = object.wait !== undefined && object.wait !== null ? BigInt(object.wait.toString()) : BigInt(0);
    message.validDuration = object.validDuration !== undefined && object.validDuration !== null ? Duration.fromPartial(object.validDuration) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateTaskAmino): MsgCreateTask {
    const message = createBaseMsgCreateTask();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    }
    message.bounty = object.bounty?.map(e => Coin.fromAmino(e)) || [];
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.wait !== undefined && object.wait !== null) {
      message.wait = BigInt(object.wait);
    }
    if (object.valid_duration !== undefined && object.valid_duration !== null) {
      message.validDuration = Duration.fromAmino(object.valid_duration);
    }
    return message;
  },
  toAmino(message: MsgCreateTask): MsgCreateTaskAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.function = message.function === "" ? undefined : message.function;
    if (message.bounty) {
      obj.bounty = message.bounty.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bounty = message.bounty;
    }
    obj.description = message.description === "" ? undefined : message.description;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.wait = message.wait !== BigInt(0) ? message.wait.toString() : undefined;
    obj.valid_duration = message.validDuration ? Duration.toAmino(message.validDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTaskAminoMsg): MsgCreateTask {
    return MsgCreateTask.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTaskProtoMsg): MsgCreateTask {
    return MsgCreateTask.decode(message.value);
  },
  toProto(message: MsgCreateTask): Uint8Array {
    return MsgCreateTask.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTask): MsgCreateTaskProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTask",
      value: MsgCreateTask.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTaskResponse(): MsgCreateTaskResponse {
  return {};
}
export const MsgCreateTaskResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTaskResponse",
  encode(_: MsgCreateTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateTaskResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateTaskResponse>): MsgCreateTaskResponse {
    const message = createBaseMsgCreateTaskResponse();
    return message;
  },
  fromAmino(_: MsgCreateTaskResponseAmino): MsgCreateTaskResponse {
    const message = createBaseMsgCreateTaskResponse();
    return message;
  },
  toAmino(_: MsgCreateTaskResponse): MsgCreateTaskResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateTaskResponseAminoMsg): MsgCreateTaskResponse {
    return MsgCreateTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTaskResponseProtoMsg): MsgCreateTaskResponse {
    return MsgCreateTaskResponse.decode(message.value);
  },
  toProto(message: MsgCreateTaskResponse): Uint8Array {
    return MsgCreateTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTaskResponse): MsgCreateTaskResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTaskResponse",
      value: MsgCreateTaskResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTaskResponse(): MsgTaskResponse {
  return {
    contract: "",
    function: "",
    score: BigInt(0),
    operator: ""
  };
}
export const MsgTaskResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponse",
  encode(message: MsgTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    if (message.score !== BigInt(0)) {
      writer.uint32(24).int64(message.score);
    }
    if (message.operator !== "") {
      writer.uint32(34).string(message.operator);
    }
    return writer;
  },
  fromJSON(object: any): MsgTaskResponse {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      function: isSet(object.function) ? String(object.function) : "",
      score: isSet(object.score) ? BigInt(object.score.toString()) : BigInt(0),
      operator: isSet(object.operator) ? String(object.operator) : ""
    };
  },
  fromPartial(object: Partial<MsgTaskResponse>): MsgTaskResponse {
    const message = createBaseMsgTaskResponse();
    message.contract = object.contract ?? "";
    message.function = object.function ?? "";
    message.score = object.score !== undefined && object.score !== null ? BigInt(object.score.toString()) : BigInt(0);
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: MsgTaskResponseAmino): MsgTaskResponse {
    const message = createBaseMsgTaskResponse();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = BigInt(object.score);
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgTaskResponse): MsgTaskResponseAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.function = message.function === "" ? undefined : message.function;
    obj.score = message.score !== BigInt(0) ? message.score.toString() : undefined;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: MsgTaskResponseAminoMsg): MsgTaskResponse {
    return MsgTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTaskResponseProtoMsg): MsgTaskResponse {
    return MsgTaskResponse.decode(message.value);
  },
  toProto(message: MsgTaskResponse): Uint8Array {
    return MsgTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTaskResponse): MsgTaskResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponse",
      value: MsgTaskResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTaskResponseResponse(): MsgTaskResponseResponse {
  return {};
}
export const MsgTaskResponseResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponseResponse",
  encode(_: MsgTaskResponseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTaskResponseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTaskResponseResponse>): MsgTaskResponseResponse {
    const message = createBaseMsgTaskResponseResponse();
    return message;
  },
  fromAmino(_: MsgTaskResponseResponseAmino): MsgTaskResponseResponse {
    const message = createBaseMsgTaskResponseResponse();
    return message;
  },
  toAmino(_: MsgTaskResponseResponse): MsgTaskResponseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTaskResponseResponseAminoMsg): MsgTaskResponseResponse {
    return MsgTaskResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTaskResponseResponseProtoMsg): MsgTaskResponseResponse {
    return MsgTaskResponseResponse.decode(message.value);
  },
  toProto(message: MsgTaskResponseResponse): Uint8Array {
    return MsgTaskResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTaskResponseResponse): MsgTaskResponseResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponseResponse",
      value: MsgTaskResponseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTask(): MsgDeleteTask {
  return {
    contract: "",
    function: "",
    force: false,
    from: ""
  };
}
export const MsgDeleteTask = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTask",
  encode(message: MsgDeleteTask, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteTask {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      function: isSet(object.function) ? String(object.function) : "",
      force: isSet(object.force) ? Boolean(object.force) : false,
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteTask>): MsgDeleteTask {
    const message = createBaseMsgDeleteTask();
    message.contract = object.contract ?? "";
    message.function = object.function ?? "";
    message.force = object.force ?? false;
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteTaskAmino): MsgDeleteTask {
    const message = createBaseMsgDeleteTask();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgDeleteTask): MsgDeleteTaskAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.function = message.function === "" ? undefined : message.function;
    obj.force = message.force === false ? undefined : message.force;
    obj.from = message.from === "" ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTaskAminoMsg): MsgDeleteTask {
    return MsgDeleteTask.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTaskProtoMsg): MsgDeleteTask {
    return MsgDeleteTask.decode(message.value);
  },
  toProto(message: MsgDeleteTask): Uint8Array {
    return MsgDeleteTask.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTask): MsgDeleteTaskProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTask",
      value: MsgDeleteTask.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTaskResponse(): MsgDeleteTaskResponse {
  return {};
}
export const MsgDeleteTaskResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTaskResponse",
  encode(_: MsgDeleteTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteTaskResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteTaskResponse>): MsgDeleteTaskResponse {
    const message = createBaseMsgDeleteTaskResponse();
    return message;
  },
  fromAmino(_: MsgDeleteTaskResponseAmino): MsgDeleteTaskResponse {
    const message = createBaseMsgDeleteTaskResponse();
    return message;
  },
  toAmino(_: MsgDeleteTaskResponse): MsgDeleteTaskResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTaskResponseAminoMsg): MsgDeleteTaskResponse {
    return MsgDeleteTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTaskResponseProtoMsg): MsgDeleteTaskResponse {
    return MsgDeleteTaskResponse.decode(message.value);
  },
  toProto(message: MsgDeleteTaskResponse): Uint8Array {
    return MsgDeleteTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTaskResponse): MsgDeleteTaskResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTaskResponse",
      value: MsgDeleteTaskResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTxTask(): MsgCreateTxTask {
  return {
    creator: "",
    chainId: "",
    atxBytes: new Uint8Array(),
    bounty: [],
    validTime: Timestamp.fromPartial({})
  };
}
export const MsgCreateTxTask = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTask",
  encode(message: MsgCreateTxTask, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.atxBytes.length !== 0) {
      writer.uint32(26).bytes(message.atxBytes);
    }
    for (const v of message.bounty) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.validTime !== undefined) {
      Timestamp.encode(message.validTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateTxTask {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      atxBytes: isSet(object.atxBytes) ? bytesFromBase64(object.atxBytes) : new Uint8Array(),
      bounty: Array.isArray(object?.bounty) ? object.bounty.map((e: any) => Coin.fromJSON(e)) : [],
      validTime: isSet(object.validTime) ? fromJsonTimestamp(object.validTime) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateTxTask>): MsgCreateTxTask {
    const message = createBaseMsgCreateTxTask();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.atxBytes = object.atxBytes ?? new Uint8Array();
    message.bounty = object.bounty?.map(e => Coin.fromPartial(e)) || [];
    message.validTime = object.validTime !== undefined && object.validTime !== null ? Timestamp.fromPartial(object.validTime) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateTxTaskAmino): MsgCreateTxTask {
    const message = createBaseMsgCreateTxTask();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.atx_bytes !== undefined && object.atx_bytes !== null) {
      message.atxBytes = bytesFromBase64(object.atx_bytes);
    }
    message.bounty = object.bounty?.map(e => Coin.fromAmino(e)) || [];
    if (object.valid_time !== undefined && object.valid_time !== null) {
      message.validTime = Timestamp.fromAmino(object.valid_time);
    }
    return message;
  },
  toAmino(message: MsgCreateTxTask): MsgCreateTxTaskAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.atx_bytes = message.atxBytes ? base64FromBytes(message.atxBytes) : undefined;
    if (message.bounty) {
      obj.bounty = message.bounty.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bounty = message.bounty;
    }
    obj.valid_time = message.validTime ? Timestamp.toAmino(message.validTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTxTaskAminoMsg): MsgCreateTxTask {
    return MsgCreateTxTask.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTxTaskProtoMsg): MsgCreateTxTask {
    return MsgCreateTxTask.decode(message.value);
  },
  toProto(message: MsgCreateTxTask): Uint8Array {
    return MsgCreateTxTask.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTxTask): MsgCreateTxTaskProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTask",
      value: MsgCreateTxTask.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTxTaskResponse(): MsgCreateTxTaskResponse {
  return {
    atxHash: new Uint8Array()
  };
}
export const MsgCreateTxTaskResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTaskResponse",
  encode(message: MsgCreateTxTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atxHash.length !== 0) {
      writer.uint32(10).bytes(message.atxHash);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateTxTaskResponse {
    return {
      atxHash: isSet(object.atxHash) ? bytesFromBase64(object.atxHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgCreateTxTaskResponse>): MsgCreateTxTaskResponse {
    const message = createBaseMsgCreateTxTaskResponse();
    message.atxHash = object.atxHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCreateTxTaskResponseAmino): MsgCreateTxTaskResponse {
    const message = createBaseMsgCreateTxTaskResponse();
    if (object.atx_hash !== undefined && object.atx_hash !== null) {
      message.atxHash = bytesFromBase64(object.atx_hash);
    }
    return message;
  },
  toAmino(message: MsgCreateTxTaskResponse): MsgCreateTxTaskResponseAmino {
    const obj: any = {};
    obj.atx_hash = message.atxHash ? base64FromBytes(message.atxHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTxTaskResponseAminoMsg): MsgCreateTxTaskResponse {
    return MsgCreateTxTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTxTaskResponseProtoMsg): MsgCreateTxTaskResponse {
    return MsgCreateTxTaskResponse.decode(message.value);
  },
  toProto(message: MsgCreateTxTaskResponse): Uint8Array {
    return MsgCreateTxTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTxTaskResponse): MsgCreateTxTaskResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTaskResponse",
      value: MsgCreateTxTaskResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTxTaskResponse(): MsgTxTaskResponse {
  return {
    atxHash: new Uint8Array(),
    score: BigInt(0),
    operator: ""
  };
}
export const MsgTxTaskResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponse",
  encode(message: MsgTxTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atxHash.length !== 0) {
      writer.uint32(10).bytes(message.atxHash);
    }
    if (message.score !== BigInt(0)) {
      writer.uint32(16).int64(message.score);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },
  fromJSON(object: any): MsgTxTaskResponse {
    return {
      atxHash: isSet(object.atxHash) ? bytesFromBase64(object.atxHash) : new Uint8Array(),
      score: isSet(object.score) ? BigInt(object.score.toString()) : BigInt(0),
      operator: isSet(object.operator) ? String(object.operator) : ""
    };
  },
  fromPartial(object: Partial<MsgTxTaskResponse>): MsgTxTaskResponse {
    const message = createBaseMsgTxTaskResponse();
    message.atxHash = object.atxHash ?? new Uint8Array();
    message.score = object.score !== undefined && object.score !== null ? BigInt(object.score.toString()) : BigInt(0);
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: MsgTxTaskResponseAmino): MsgTxTaskResponse {
    const message = createBaseMsgTxTaskResponse();
    if (object.atx_hash !== undefined && object.atx_hash !== null) {
      message.atxHash = bytesFromBase64(object.atx_hash);
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = BigInt(object.score);
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgTxTaskResponse): MsgTxTaskResponseAmino {
    const obj: any = {};
    obj.atx_hash = message.atxHash ? base64FromBytes(message.atxHash) : undefined;
    obj.score = message.score !== BigInt(0) ? message.score.toString() : undefined;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: MsgTxTaskResponseAminoMsg): MsgTxTaskResponse {
    return MsgTxTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTxTaskResponseProtoMsg): MsgTxTaskResponse {
    return MsgTxTaskResponse.decode(message.value);
  },
  toProto(message: MsgTxTaskResponse): Uint8Array {
    return MsgTxTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTxTaskResponse): MsgTxTaskResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponse",
      value: MsgTxTaskResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTxTaskResponseResponse(): MsgTxTaskResponseResponse {
  return {};
}
export const MsgTxTaskResponseResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponseResponse",
  encode(_: MsgTxTaskResponseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTxTaskResponseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTxTaskResponseResponse>): MsgTxTaskResponseResponse {
    const message = createBaseMsgTxTaskResponseResponse();
    return message;
  },
  fromAmino(_: MsgTxTaskResponseResponseAmino): MsgTxTaskResponseResponse {
    const message = createBaseMsgTxTaskResponseResponse();
    return message;
  },
  toAmino(_: MsgTxTaskResponseResponse): MsgTxTaskResponseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTxTaskResponseResponseAminoMsg): MsgTxTaskResponseResponse {
    return MsgTxTaskResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTxTaskResponseResponseProtoMsg): MsgTxTaskResponseResponse {
    return MsgTxTaskResponseResponse.decode(message.value);
  },
  toProto(message: MsgTxTaskResponseResponse): Uint8Array {
    return MsgTxTaskResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTxTaskResponseResponse): MsgTxTaskResponseResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponseResponse",
      value: MsgTxTaskResponseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTxTask(): MsgDeleteTxTask {
  return {
    atxHash: new Uint8Array(),
    from: ""
  };
}
export const MsgDeleteTxTask = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTask",
  encode(message: MsgDeleteTxTask, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atxHash.length !== 0) {
      writer.uint32(10).bytes(message.atxHash);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteTxTask {
    return {
      atxHash: isSet(object.atxHash) ? bytesFromBase64(object.atxHash) : new Uint8Array(),
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteTxTask>): MsgDeleteTxTask {
    const message = createBaseMsgDeleteTxTask();
    message.atxHash = object.atxHash ?? new Uint8Array();
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteTxTaskAmino): MsgDeleteTxTask {
    const message = createBaseMsgDeleteTxTask();
    if (object.atx_hash !== undefined && object.atx_hash !== null) {
      message.atxHash = bytesFromBase64(object.atx_hash);
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgDeleteTxTask): MsgDeleteTxTaskAmino {
    const obj: any = {};
    obj.atx_hash = message.atxHash ? base64FromBytes(message.atxHash) : undefined;
    obj.from = message.from === "" ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTxTaskAminoMsg): MsgDeleteTxTask {
    return MsgDeleteTxTask.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTxTaskProtoMsg): MsgDeleteTxTask {
    return MsgDeleteTxTask.decode(message.value);
  },
  toProto(message: MsgDeleteTxTask): Uint8Array {
    return MsgDeleteTxTask.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTxTask): MsgDeleteTxTaskProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTask",
      value: MsgDeleteTxTask.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTxTaskResponse(): MsgDeleteTxTaskResponse {
  return {};
}
export const MsgDeleteTxTaskResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTaskResponse",
  encode(_: MsgDeleteTxTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteTxTaskResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteTxTaskResponse>): MsgDeleteTxTaskResponse {
    const message = createBaseMsgDeleteTxTaskResponse();
    return message;
  },
  fromAmino(_: MsgDeleteTxTaskResponseAmino): MsgDeleteTxTaskResponse {
    const message = createBaseMsgDeleteTxTaskResponse();
    return message;
  },
  toAmino(_: MsgDeleteTxTaskResponse): MsgDeleteTxTaskResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTxTaskResponseAminoMsg): MsgDeleteTxTaskResponse {
    return MsgDeleteTxTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTxTaskResponseProtoMsg): MsgDeleteTxTaskResponse {
    return MsgDeleteTxTaskResponse.decode(message.value);
  },
  toProto(message: MsgDeleteTxTaskResponse): Uint8Array {
    return MsgDeleteTxTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTxTaskResponse): MsgDeleteTxTaskResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTaskResponse",
      value: MsgDeleteTxTaskResponse.encode(message).finish()
    };
  }
};