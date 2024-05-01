import { ClaimType, Proof, ProofAmino, ProofSDKType, claimTypeFromJSON } from "../../claimsmanager/v1/claimsmanager";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaim {
  userAddress: string;
  zone: string;
  srcZone: string;
  claimType: ClaimType;
  proofs: Proof[];
}
export interface MsgSubmitClaimProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
  value: Uint8Array;
}
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaimAmino {
  user_address?: string;
  zone?: string;
  src_zone?: string;
  claim_type?: ClaimType;
  proofs?: ProofAmino[];
}
export interface MsgSubmitClaimAminoMsg {
  type: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
  value: MsgSubmitClaimAmino;
}
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaimSDKType {
  user_address: string;
  zone: string;
  src_zone: string;
  claim_type: ClaimType;
  proofs: ProofSDKType[];
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponse {}
export interface MsgSubmitClaimResponseProtoMsg {
  typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse";
  value: Uint8Array;
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponseAmino {}
export interface MsgSubmitClaimResponseAminoMsg {
  type: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse";
  value: MsgSubmitClaimResponseAmino;
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponseSDKType {}
function createBaseMsgSubmitClaim(): MsgSubmitClaim {
  return {
    userAddress: "",
    zone: "",
    srcZone: "",
    claimType: 0,
    proofs: []
  };
}
export const MsgSubmitClaim = {
  typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
  encode(message: MsgSubmitClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.zone !== "") {
      writer.uint32(18).string(message.zone);
    }
    if (message.srcZone !== "") {
      writer.uint32(26).string(message.srcZone);
    }
    if (message.claimType !== 0) {
      writer.uint32(32).int32(message.claimType);
    }
    for (const v of message.proofs) {
      Proof.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitClaim {
    return {
      userAddress: isSet(object.user_address) ? String(object.user_address) : "",
      zone: isSet(object.zone) ? String(object.zone) : "",
      srcZone: isSet(object.src_zone) ? String(object.src_zone) : "",
      claimType: isSet(object.claim_type) ? claimTypeFromJSON(object.claim_type) : -1,
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => Proof.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSubmitClaim>): MsgSubmitClaim {
    const message = createBaseMsgSubmitClaim();
    message.userAddress = object.userAddress ?? "";
    message.zone = object.zone ?? "";
    message.srcZone = object.srcZone ?? "";
    message.claimType = object.claimType ?? 0;
    message.proofs = object.proofs?.map(e => Proof.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSubmitClaimAmino): MsgSubmitClaim {
    const message = createBaseMsgSubmitClaim();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    if (object.zone !== undefined && object.zone !== null) {
      message.zone = object.zone;
    }
    if (object.src_zone !== undefined && object.src_zone !== null) {
      message.srcZone = object.src_zone;
    }
    if (object.claim_type !== undefined && object.claim_type !== null) {
      message.claimType = claimTypeFromJSON(object.claim_type);
    }
    message.proofs = object.proofs?.map(e => Proof.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSubmitClaim): MsgSubmitClaimAmino {
    const obj: any = {};
    obj.user_address = message.userAddress;
    obj.zone = message.zone;
    obj.src_zone = message.srcZone;
    obj.claim_type = message.claimType;
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? Proof.toAmino(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSubmitClaimAminoMsg): MsgSubmitClaim {
    return MsgSubmitClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitClaimProtoMsg): MsgSubmitClaim {
    return MsgSubmitClaim.decode(message.value);
  },
  toProto(message: MsgSubmitClaim): Uint8Array {
    return MsgSubmitClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitClaim): MsgSubmitClaimProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
      value: MsgSubmitClaim.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitClaimResponse(): MsgSubmitClaimResponse {
  return {};
}
export const MsgSubmitClaimResponse = {
  typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse",
  encode(_: MsgSubmitClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubmitClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitClaimResponse>): MsgSubmitClaimResponse {
    const message = createBaseMsgSubmitClaimResponse();
    return message;
  },
  fromAmino(_: MsgSubmitClaimResponseAmino): MsgSubmitClaimResponse {
    const message = createBaseMsgSubmitClaimResponse();
    return message;
  },
  toAmino(_: MsgSubmitClaimResponse): MsgSubmitClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitClaimResponseAminoMsg): MsgSubmitClaimResponse {
    return MsgSubmitClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitClaimResponseProtoMsg): MsgSubmitClaimResponse {
    return MsgSubmitClaimResponse.decode(message.value);
  },
  toProto(message: MsgSubmitClaimResponse): Uint8Array {
    return MsgSubmitClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitClaimResponse): MsgSubmitClaimResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse",
      value: MsgSubmitClaimResponse.encode(message).finish()
    };
  }
};