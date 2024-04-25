import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStaker {
  /** creator is the address of the staker. */
  creator: string;
  /** amount is the initial self-stake of the staker. */
  amount: bigint;
  /**
   * commission is the percentage that is deducted from rewards before
   * distributing the staker's delegators.
   */
  commission: string;
}
export interface MsgCreateStakerProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker";
  value: Uint8Array;
}
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStakerAmino {
  /** creator is the address of the staker. */
  creator?: string;
  /** amount is the initial self-stake of the staker. */
  amount?: string;
  /**
   * commission is the percentage that is deducted from rewards before
   * distributing the staker's delegators.
   */
  commission?: string;
}
export interface MsgCreateStakerAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgCreateStaker";
  value: MsgCreateStakerAmino;
}
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStakerSDKType {
  creator: string;
  amount: bigint;
  commission: string;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponse {}
export interface MsgCreateStakerResponseProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgCreateStakerResponse";
  value: Uint8Array;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponseAmino {}
export interface MsgCreateStakerResponseAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgCreateStakerResponse";
  value: MsgCreateStakerResponseAmino;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponseSDKType {}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadata {
  /** creator ... */
  creator: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity from keybase.io */
  identity: string;
  /** security_contact ... */
  securityContact: string;
  /** details ... */
  details: string;
}
export interface MsgUpdateMetadataProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata";
  value: Uint8Array;
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadataAmino {
  /** creator ... */
  creator?: string;
  /** moniker ... */
  moniker?: string;
  /** website ... */
  website?: string;
  /** identity from keybase.io */
  identity?: string;
  /** security_contact ... */
  security_contact?: string;
  /** details ... */
  details?: string;
}
export interface MsgUpdateMetadataAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateMetadata";
  value: MsgUpdateMetadataAmino;
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadataSDKType {
  creator: string;
  moniker: string;
  website: string;
  identity: string;
  security_contact: string;
  details: string;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponse {}
export interface MsgUpdateMetadataResponseProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponseAmino {}
export interface MsgUpdateMetadataResponseAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateMetadataResponse";
  value: MsgUpdateMetadataResponseAmino;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponseSDKType {}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommission {
  /** creator ... */
  creator: string;
  /** commission ... */
  commission: string;
}
export interface MsgUpdateCommissionProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission";
  value: Uint8Array;
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommissionAmino {
  /** creator ... */
  creator?: string;
  /** commission ... */
  commission?: string;
}
export interface MsgUpdateCommissionAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateCommission";
  value: MsgUpdateCommissionAmino;
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommissionSDKType {
  creator: string;
  commission: string;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponse {}
export interface MsgUpdateCommissionResponseProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommissionResponse";
  value: Uint8Array;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponseAmino {}
export interface MsgUpdateCommissionResponseAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateCommissionResponse";
  value: MsgUpdateCommissionResponseAmino;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponseSDKType {}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewards {
  /** creator ... */
  creator: string;
  /** amount ... */
  amount: bigint;
}
export interface MsgClaimCommissionRewardsProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards";
  value: Uint8Array;
}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewardsAmino {
  /** creator ... */
  creator?: string;
  /** amount ... */
  amount?: string;
}
export interface MsgClaimCommissionRewardsAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards";
  value: MsgClaimCommissionRewardsAmino;
}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewardsSDKType {
  creator: string;
  amount: bigint;
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponse {}
export interface MsgClaimCommissionRewardsResponseProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewardsResponse";
  value: Uint8Array;
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponseAmino {}
export interface MsgClaimCommissionRewardsResponseAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgClaimCommissionRewardsResponse";
  value: MsgClaimCommissionRewardsResponseAmino;
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponseSDKType {}
/** MsgJoinPool ... */
export interface MsgJoinPool {
  /** creator ... */
  creator: string;
  /** pool_id ... */
  poolId: bigint;
  /** valaddress ... */
  valaddress: string;
  /** amount ... */
  amount: bigint;
}
export interface MsgJoinPoolProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool";
  value: Uint8Array;
}
/** MsgJoinPool ... */
export interface MsgJoinPoolAmino {
  /** creator ... */
  creator?: string;
  /** pool_id ... */
  pool_id?: string;
  /** valaddress ... */
  valaddress?: string;
  /** amount ... */
  amount?: string;
}
export interface MsgJoinPoolAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgJoinPool";
  value: MsgJoinPoolAmino;
}
/** MsgJoinPool ... */
export interface MsgJoinPoolSDKType {
  creator: string;
  pool_id: bigint;
  valaddress: string;
  amount: bigint;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponse {}
export interface MsgJoinPoolResponseProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgJoinPoolResponse";
  value: Uint8Array;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponseAmino {}
export interface MsgJoinPoolResponseAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgJoinPoolResponse";
  value: MsgJoinPoolResponseAmino;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponseSDKType {}
/** MsgLeavePool ... */
export interface MsgLeavePool {
  /** creator ... */
  creator: string;
  /** pool_id ... */
  poolId: bigint;
}
export interface MsgLeavePoolProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool";
  value: Uint8Array;
}
/** MsgLeavePool ... */
export interface MsgLeavePoolAmino {
  /** creator ... */
  creator?: string;
  /** pool_id ... */
  pool_id?: string;
}
export interface MsgLeavePoolAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgLeavePool";
  value: MsgLeavePoolAmino;
}
/** MsgLeavePool ... */
export interface MsgLeavePoolSDKType {
  creator: string;
  pool_id: bigint;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponse {}
export interface MsgLeavePoolResponseProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgLeavePoolResponse";
  value: Uint8Array;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponseAmino {}
export interface MsgLeavePoolResponseAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgLeavePoolResponse";
  value: MsgLeavePoolResponseAmino;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponseSDKType {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/stakers parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** payload defines the x/stakers parameters to update. */
  payload?: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/kyve.stakers.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateStaker(): MsgCreateStaker {
  return {
    creator: "",
    amount: BigInt(0),
    commission: ""
  };
}
export const MsgCreateStaker = {
  typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker",
  encode(message: MsgCreateStaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateStaker {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      commission: isSet(object.commission) ? String(object.commission) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateStaker>): MsgCreateStaker {
    const message = createBaseMsgCreateStaker();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.commission = object.commission ?? "";
    return message;
  },
  fromAmino(object: MsgCreateStakerAmino): MsgCreateStaker {
    const message = createBaseMsgCreateStaker();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = object.commission;
    }
    return message;
  },
  toAmino(message: MsgCreateStaker): MsgCreateStakerAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.commission = message.commission;
    return obj;
  },
  fromAminoMsg(object: MsgCreateStakerAminoMsg): MsgCreateStaker {
    return MsgCreateStaker.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStakerProtoMsg): MsgCreateStaker {
    return MsgCreateStaker.decode(message.value);
  },
  toProto(message: MsgCreateStaker): Uint8Array {
    return MsgCreateStaker.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStaker): MsgCreateStakerProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker",
      value: MsgCreateStaker.encode(message).finish()
    };
  }
};
function createBaseMsgCreateStakerResponse(): MsgCreateStakerResponse {
  return {};
}
export const MsgCreateStakerResponse = {
  typeUrl: "/kyve.stakers.v1beta1.MsgCreateStakerResponse",
  encode(_: MsgCreateStakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateStakerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateStakerResponse>): MsgCreateStakerResponse {
    const message = createBaseMsgCreateStakerResponse();
    return message;
  },
  fromAmino(_: MsgCreateStakerResponseAmino): MsgCreateStakerResponse {
    const message = createBaseMsgCreateStakerResponse();
    return message;
  },
  toAmino(_: MsgCreateStakerResponse): MsgCreateStakerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateStakerResponseAminoMsg): MsgCreateStakerResponse {
    return MsgCreateStakerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateStakerResponseProtoMsg): MsgCreateStakerResponse {
    return MsgCreateStakerResponse.decode(message.value);
  },
  toProto(message: MsgCreateStakerResponse): Uint8Array {
    return MsgCreateStakerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateStakerResponse): MsgCreateStakerResponseProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgCreateStakerResponse",
      value: MsgCreateStakerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMetadata(): MsgUpdateMetadata {
  return {
    creator: "",
    moniker: "",
    website: "",
    identity: "",
    securityContact: "",
    details: ""
  };
}
export const MsgUpdateMetadata = {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
  encode(message: MsgUpdateMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.securityContact !== "") {
      writer.uint32(42).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(50).string(message.details);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateMetadata {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateMetadata>): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    message.creator = object.creator ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMetadataAmino): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.security_contact !== undefined && object.security_contact !== null) {
      message.securityContact = object.security_contact;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    return message;
  },
  toAmino(message: MsgUpdateMetadata): MsgUpdateMetadataAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.moniker = message.moniker;
    obj.website = message.website;
    obj.identity = message.identity;
    obj.security_contact = message.securityContact;
    obj.details = message.details;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMetadataAminoMsg): MsgUpdateMetadata {
    return MsgUpdateMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMetadataProtoMsg): MsgUpdateMetadata {
    return MsgUpdateMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateMetadata): Uint8Array {
    return MsgUpdateMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMetadata): MsgUpdateMetadataProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
      value: MsgUpdateMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMetadataResponse(): MsgUpdateMetadataResponse {
  return {};
}
export const MsgUpdateMetadataResponse = {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadataResponse",
  encode(_: MsgUpdateMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateMetadataResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateMetadataResponse>): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMetadataResponseAmino): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
  toAmino(_: MsgUpdateMetadataResponse): MsgUpdateMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMetadataResponseAminoMsg): MsgUpdateMetadataResponse {
    return MsgUpdateMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMetadataResponseProtoMsg): MsgUpdateMetadataResponse {
    return MsgUpdateMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMetadataResponse): Uint8Array {
    return MsgUpdateMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMetadataResponse): MsgUpdateMetadataResponseProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadataResponse",
      value: MsgUpdateMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCommission(): MsgUpdateCommission {
  return {
    creator: "",
    commission: ""
  };
}
export const MsgUpdateCommission = {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission",
  encode(message: MsgUpdateCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateCommission {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      commission: isSet(object.commission) ? String(object.commission) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateCommission>): MsgUpdateCommission {
    const message = createBaseMsgUpdateCommission();
    message.creator = object.creator ?? "";
    message.commission = object.commission ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateCommissionAmino): MsgUpdateCommission {
    const message = createBaseMsgUpdateCommission();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = object.commission;
    }
    return message;
  },
  toAmino(message: MsgUpdateCommission): MsgUpdateCommissionAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.commission = message.commission;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCommissionAminoMsg): MsgUpdateCommission {
    return MsgUpdateCommission.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCommissionProtoMsg): MsgUpdateCommission {
    return MsgUpdateCommission.decode(message.value);
  },
  toProto(message: MsgUpdateCommission): Uint8Array {
    return MsgUpdateCommission.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCommission): MsgUpdateCommissionProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission",
      value: MsgUpdateCommission.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCommissionResponse(): MsgUpdateCommissionResponse {
  return {};
}
export const MsgUpdateCommissionResponse = {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommissionResponse",
  encode(_: MsgUpdateCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateCommissionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateCommissionResponse>): MsgUpdateCommissionResponse {
    const message = createBaseMsgUpdateCommissionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateCommissionResponseAmino): MsgUpdateCommissionResponse {
    const message = createBaseMsgUpdateCommissionResponse();
    return message;
  },
  toAmino(_: MsgUpdateCommissionResponse): MsgUpdateCommissionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCommissionResponseAminoMsg): MsgUpdateCommissionResponse {
    return MsgUpdateCommissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCommissionResponseProtoMsg): MsgUpdateCommissionResponse {
    return MsgUpdateCommissionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateCommissionResponse): Uint8Array {
    return MsgUpdateCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCommissionResponse): MsgUpdateCommissionResponseProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommissionResponse",
      value: MsgUpdateCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimCommissionRewards(): MsgClaimCommissionRewards {
  return {
    creator: "",
    amount: BigInt(0)
  };
}
export const MsgClaimCommissionRewards = {
  typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards",
  encode(message: MsgClaimCommissionRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimCommissionRewards {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgClaimCommissionRewards>): MsgClaimCommissionRewards {
    const message = createBaseMsgClaimCommissionRewards();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimCommissionRewardsAmino): MsgClaimCommissionRewards {
    const message = createBaseMsgClaimCommissionRewards();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: MsgClaimCommissionRewards): MsgClaimCommissionRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimCommissionRewardsAminoMsg): MsgClaimCommissionRewards {
    return MsgClaimCommissionRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimCommissionRewardsProtoMsg): MsgClaimCommissionRewards {
    return MsgClaimCommissionRewards.decode(message.value);
  },
  toProto(message: MsgClaimCommissionRewards): Uint8Array {
    return MsgClaimCommissionRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimCommissionRewards): MsgClaimCommissionRewardsProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards",
      value: MsgClaimCommissionRewards.encode(message).finish()
    };
  }
};
function createBaseMsgClaimCommissionRewardsResponse(): MsgClaimCommissionRewardsResponse {
  return {};
}
export const MsgClaimCommissionRewardsResponse = {
  typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewardsResponse",
  encode(_: MsgClaimCommissionRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimCommissionRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimCommissionRewardsResponse>): MsgClaimCommissionRewardsResponse {
    const message = createBaseMsgClaimCommissionRewardsResponse();
    return message;
  },
  fromAmino(_: MsgClaimCommissionRewardsResponseAmino): MsgClaimCommissionRewardsResponse {
    const message = createBaseMsgClaimCommissionRewardsResponse();
    return message;
  },
  toAmino(_: MsgClaimCommissionRewardsResponse): MsgClaimCommissionRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimCommissionRewardsResponseAminoMsg): MsgClaimCommissionRewardsResponse {
    return MsgClaimCommissionRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimCommissionRewardsResponseProtoMsg): MsgClaimCommissionRewardsResponse {
    return MsgClaimCommissionRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimCommissionRewardsResponse): Uint8Array {
    return MsgClaimCommissionRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimCommissionRewardsResponse): MsgClaimCommissionRewardsResponseProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewardsResponse",
      value: MsgClaimCommissionRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinPool(): MsgJoinPool {
  return {
    creator: "",
    poolId: BigInt(0),
    valaddress: "",
    amount: BigInt(0)
  };
}
export const MsgJoinPool = {
  typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool",
  encode(message: MsgJoinPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgJoinPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.valaddress = object.valaddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgJoinPoolAmino): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.valaddress !== undefined && object.valaddress !== null) {
      message.valaddress = object.valaddress;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: MsgJoinPool): MsgJoinPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.valaddress = message.valaddress;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolAminoMsg): MsgJoinPool {
    return MsgJoinPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinPoolProtoMsg): MsgJoinPool {
    return MsgJoinPool.decode(message.value);
  },
  toProto(message: MsgJoinPool): Uint8Array {
    return MsgJoinPool.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinPool): MsgJoinPoolProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool",
      value: MsgJoinPool.encode(message).finish()
    };
  }
};
function createBaseMsgJoinPoolResponse(): MsgJoinPoolResponse {
  return {};
}
export const MsgJoinPoolResponse = {
  typeUrl: "/kyve.stakers.v1beta1.MsgJoinPoolResponse",
  encode(_: MsgJoinPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgJoinPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    return message;
  },
  fromAmino(_: MsgJoinPoolResponseAmino): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    return message;
  },
  toAmino(_: MsgJoinPoolResponse): MsgJoinPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolResponseAminoMsg): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinPoolResponseProtoMsg): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.decode(message.value);
  },
  toProto(message: MsgJoinPoolResponse): Uint8Array {
    return MsgJoinPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgJoinPoolResponse",
      value: MsgJoinPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeavePool(): MsgLeavePool {
  return {
    creator: "",
    poolId: BigInt(0)
  };
}
export const MsgLeavePool = {
  typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool",
  encode(message: MsgLeavePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgLeavePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgLeavePool>): MsgLeavePool {
    const message = createBaseMsgLeavePool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgLeavePoolAmino): MsgLeavePool {
    const message = createBaseMsgLeavePool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgLeavePool): MsgLeavePoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLeavePoolAminoMsg): MsgLeavePool {
    return MsgLeavePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeavePoolProtoMsg): MsgLeavePool {
    return MsgLeavePool.decode(message.value);
  },
  toProto(message: MsgLeavePool): Uint8Array {
    return MsgLeavePool.encode(message).finish();
  },
  toProtoMsg(message: MsgLeavePool): MsgLeavePoolProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool",
      value: MsgLeavePool.encode(message).finish()
    };
  }
};
function createBaseMsgLeavePoolResponse(): MsgLeavePoolResponse {
  return {};
}
export const MsgLeavePoolResponse = {
  typeUrl: "/kyve.stakers.v1beta1.MsgLeavePoolResponse",
  encode(_: MsgLeavePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLeavePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLeavePoolResponse>): MsgLeavePoolResponse {
    const message = createBaseMsgLeavePoolResponse();
    return message;
  },
  fromAmino(_: MsgLeavePoolResponseAmino): MsgLeavePoolResponse {
    const message = createBaseMsgLeavePoolResponse();
    return message;
  },
  toAmino(_: MsgLeavePoolResponse): MsgLeavePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLeavePoolResponseAminoMsg): MsgLeavePoolResponse {
    return MsgLeavePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeavePoolResponseProtoMsg): MsgLeavePoolResponse {
    return MsgLeavePoolResponse.decode(message.value);
  },
  toProto(message: MsgLeavePoolResponse): Uint8Array {
    return MsgLeavePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeavePoolResponse): MsgLeavePoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgLeavePoolResponse",
      value: MsgLeavePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    payload: ""
  };
}
export const MsgUpdateParams = {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.payload = message.payload;
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
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParamsResponse",
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
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
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};