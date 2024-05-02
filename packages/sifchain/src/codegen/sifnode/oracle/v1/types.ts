import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** StatusText is an enum used to represent the status of the prophecy */
export enum StatusText {
  /** STATUS_TEXT_UNSPECIFIED - Default value */
  STATUS_TEXT_UNSPECIFIED = 0,
  /** STATUS_TEXT_PENDING - Pending status */
  STATUS_TEXT_PENDING = 1,
  /** STATUS_TEXT_SUCCESS - Success status */
  STATUS_TEXT_SUCCESS = 2,
  /** STATUS_TEXT_FAILED - Failed status */
  STATUS_TEXT_FAILED = 3,
  UNRECOGNIZED = -1,
}
export const StatusTextSDKType = StatusText;
export const StatusTextAmino = StatusText;
export function statusTextFromJSON(object: any): StatusText {
  switch (object) {
    case 0:
    case "STATUS_TEXT_UNSPECIFIED":
      return StatusText.STATUS_TEXT_UNSPECIFIED;
    case 1:
    case "STATUS_TEXT_PENDING":
      return StatusText.STATUS_TEXT_PENDING;
    case 2:
    case "STATUS_TEXT_SUCCESS":
      return StatusText.STATUS_TEXT_SUCCESS;
    case 3:
    case "STATUS_TEXT_FAILED":
      return StatusText.STATUS_TEXT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StatusText.UNRECOGNIZED;
  }
}
export function statusTextToJSON(object: StatusText): string {
  switch (object) {
    case StatusText.STATUS_TEXT_UNSPECIFIED:
      return "STATUS_TEXT_UNSPECIFIED";
    case StatusText.STATUS_TEXT_PENDING:
      return "STATUS_TEXT_PENDING";
    case StatusText.STATUS_TEXT_SUCCESS:
      return "STATUS_TEXT_SUCCESS";
    case StatusText.STATUS_TEXT_FAILED:
      return "STATUS_TEXT_FAILED";
    case StatusText.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Claim contains an arbitrary claim with arbitrary content made by a given
 * validator
 */
export interface Claim {
  id: string;
  validatorAddress: string;
  content: string;
}
export interface ClaimProtoMsg {
  typeUrl: "/sifnode.oracle.v1.Claim";
  value: Uint8Array;
}
/**
 * Claim contains an arbitrary claim with arbitrary content made by a given
 * validator
 */
export interface ClaimAmino {
  id?: string;
  validator_address?: string;
  content?: string;
}
export interface ClaimAminoMsg {
  type: "/sifnode.oracle.v1.Claim";
  value: ClaimAmino;
}
/**
 * Claim contains an arbitrary claim with arbitrary content made by a given
 * validator
 */
export interface ClaimSDKType {
  id: string;
  validator_address: string;
  content: string;
}
/**
 * DBProphecy is what the prophecy becomes when being saved to the database.
 *  Tendermint/Amino does not support maps so we must serialize those variables
 *  into bytes.
 */
export interface DBProphecy {
  id: string;
  status: Status;
  claimValidators: Uint8Array;
  validatorClaims: Uint8Array;
}
export interface DBProphecyProtoMsg {
  typeUrl: "/sifnode.oracle.v1.DBProphecy";
  value: Uint8Array;
}
/**
 * DBProphecy is what the prophecy becomes when being saved to the database.
 *  Tendermint/Amino does not support maps so we must serialize those variables
 *  into bytes.
 */
export interface DBProphecyAmino {
  id?: string;
  status?: StatusAmino;
  claim_validators?: string;
  validator_claims?: string;
}
export interface DBProphecyAminoMsg {
  type: "/sifnode.oracle.v1.DBProphecy";
  value: DBProphecyAmino;
}
/**
 * DBProphecy is what the prophecy becomes when being saved to the database.
 *  Tendermint/Amino does not support maps so we must serialize those variables
 *  into bytes.
 */
export interface DBProphecySDKType {
  id: string;
  status: StatusSDKType;
  claim_validators: Uint8Array;
  validator_claims: Uint8Array;
}
/** Status is a struct that contains the status of a given prophecy */
export interface Status {
  text: StatusText;
  finalClaim: string;
}
export interface StatusProtoMsg {
  typeUrl: "/sifnode.oracle.v1.Status";
  value: Uint8Array;
}
/** Status is a struct that contains the status of a given prophecy */
export interface StatusAmino {
  text?: StatusText;
  final_claim?: string;
}
export interface StatusAminoMsg {
  type: "/sifnode.oracle.v1.Status";
  value: StatusAmino;
}
/** Status is a struct that contains the status of a given prophecy */
export interface StatusSDKType {
  text: StatusText;
  final_claim: string;
}
function createBaseClaim(): Claim {
  return {
    id: "",
    validatorAddress: "",
    content: ""
  };
}
export const Claim = {
  typeUrl: "/sifnode.oracle.v1.Claim",
  encode(message: Claim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },
  fromJSON(object: any): Claim {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  fromPartial(object: Partial<Claim>): Claim {
    const message = createBaseClaim();
    message.id = object.id ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.content = object.content ?? "";
    return message;
  },
  fromAmino(object: ClaimAmino): Claim {
    const message = createBaseClaim();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: Claim): ClaimAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: ClaimAminoMsg): Claim {
    return Claim.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimProtoMsg): Claim {
    return Claim.decode(message.value);
  },
  toProto(message: Claim): Uint8Array {
    return Claim.encode(message).finish();
  },
  toProtoMsg(message: Claim): ClaimProtoMsg {
    return {
      typeUrl: "/sifnode.oracle.v1.Claim",
      value: Claim.encode(message).finish()
    };
  }
};
function createBaseDBProphecy(): DBProphecy {
  return {
    id: "",
    status: Status.fromPartial({}),
    claimValidators: new Uint8Array(),
    validatorClaims: new Uint8Array()
  };
}
export const DBProphecy = {
  typeUrl: "/sifnode.oracle.v1.DBProphecy",
  encode(message: DBProphecy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    if (message.claimValidators.length !== 0) {
      writer.uint32(26).bytes(message.claimValidators);
    }
    if (message.validatorClaims.length !== 0) {
      writer.uint32(34).bytes(message.validatorClaims);
    }
    return writer;
  },
  fromJSON(object: any): DBProphecy {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      claimValidators: isSet(object.claimValidators) ? bytesFromBase64(object.claimValidators) : new Uint8Array(),
      validatorClaims: isSet(object.validatorClaims) ? bytesFromBase64(object.validatorClaims) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<DBProphecy>): DBProphecy {
    const message = createBaseDBProphecy();
    message.id = object.id ?? "";
    message.status = object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined;
    message.claimValidators = object.claimValidators ?? new Uint8Array();
    message.validatorClaims = object.validatorClaims ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DBProphecyAmino): DBProphecy {
    const message = createBaseDBProphecy();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromAmino(object.status);
    }
    if (object.claim_validators !== undefined && object.claim_validators !== null) {
      message.claimValidators = bytesFromBase64(object.claim_validators);
    }
    if (object.validator_claims !== undefined && object.validator_claims !== null) {
      message.validatorClaims = bytesFromBase64(object.validator_claims);
    }
    return message;
  },
  toAmino(message: DBProphecy): DBProphecyAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.status = message.status ? Status.toAmino(message.status) : undefined;
    obj.claim_validators = message.claimValidators ? base64FromBytes(message.claimValidators) : undefined;
    obj.validator_claims = message.validatorClaims ? base64FromBytes(message.validatorClaims) : undefined;
    return obj;
  },
  fromAminoMsg(object: DBProphecyAminoMsg): DBProphecy {
    return DBProphecy.fromAmino(object.value);
  },
  fromProtoMsg(message: DBProphecyProtoMsg): DBProphecy {
    return DBProphecy.decode(message.value);
  },
  toProto(message: DBProphecy): Uint8Array {
    return DBProphecy.encode(message).finish();
  },
  toProtoMsg(message: DBProphecy): DBProphecyProtoMsg {
    return {
      typeUrl: "/sifnode.oracle.v1.DBProphecy",
      value: DBProphecy.encode(message).finish()
    };
  }
};
function createBaseStatus(): Status {
  return {
    text: 0,
    finalClaim: ""
  };
}
export const Status = {
  typeUrl: "/sifnode.oracle.v1.Status",
  encode(message: Status, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.text !== 0) {
      writer.uint32(8).int32(message.text);
    }
    if (message.finalClaim !== "") {
      writer.uint32(18).string(message.finalClaim);
    }
    return writer;
  },
  fromJSON(object: any): Status {
    return {
      text: isSet(object.text) ? statusTextFromJSON(object.text) : -1,
      finalClaim: isSet(object.finalClaim) ? String(object.finalClaim) : ""
    };
  },
  fromPartial(object: Partial<Status>): Status {
    const message = createBaseStatus();
    message.text = object.text ?? 0;
    message.finalClaim = object.finalClaim ?? "";
    return message;
  },
  fromAmino(object: StatusAmino): Status {
    const message = createBaseStatus();
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    }
    if (object.final_claim !== undefined && object.final_claim !== null) {
      message.finalClaim = object.final_claim;
    }
    return message;
  },
  toAmino(message: Status): StatusAmino {
    const obj: any = {};
    obj.text = message.text === 0 ? undefined : message.text;
    obj.final_claim = message.finalClaim === "" ? undefined : message.finalClaim;
    return obj;
  },
  fromAminoMsg(object: StatusAminoMsg): Status {
    return Status.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusProtoMsg): Status {
    return Status.decode(message.value);
  },
  toProto(message: Status): Uint8Array {
    return Status.encode(message).finish();
  },
  toProtoMsg(message: Status): StatusProtoMsg {
    return {
      typeUrl: "/sifnode.oracle.v1.Status",
      value: Status.encode(message).finish()
    };
  }
};