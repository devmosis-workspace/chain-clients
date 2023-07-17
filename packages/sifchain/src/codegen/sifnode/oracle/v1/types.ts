import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
export interface GenesisState {
  addressWhitelist: string[];
  adminAddress: string;
  prophecies: DBProphecy[];
}
export interface GenesisStateSDKType {
  address_whitelist: string[];
  admin_address: string;
  prophecies: DBProphecySDKType[];
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
  status?: Status;
  claimValidators: Uint8Array;
  validatorClaims: Uint8Array;
}
/**
 * DBProphecy is what the prophecy becomes when being saved to the database.
 *  Tendermint/Amino does not support maps so we must serialize those variables
 *  into bytes.
 */
export interface DBProphecySDKType {
  id: string;
  status?: StatusSDKType;
  claim_validators: Uint8Array;
  validator_claims: Uint8Array;
}
/** Status is a struct that contains the status of a given prophecy */
export interface Status {
  text: StatusText;
  finalClaim: string;
}
/** Status is a struct that contains the status of a given prophecy */
export interface StatusSDKType {
  text: StatusText;
  final_claim: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    addressWhitelist: [],
    adminAddress: "",
    prophecies: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addressWhitelist) {
      writer.uint32(10).string(v!);
    }
    if (message.adminAddress !== "") {
      writer.uint32(18).string(message.adminAddress);
    }
    for (const v of message.prophecies) {
      DBProphecy.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      addressWhitelist: Array.isArray(object?.addressWhitelist) ? object.addressWhitelist.map((e: any) => String(e)) : [],
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      prophecies: Array.isArray(object?.prophecies) ? object.prophecies.map((e: any) => DBProphecy.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.addressWhitelist = object.addressWhitelist?.map(e => e) || [];
    message.adminAddress = object.adminAddress ?? "";
    message.prophecies = object.prophecies?.map(e => DBProphecy.fromPartial(e)) || [];
    return message;
  }
};
function createBaseClaim(): Claim {
  return {
    id: "",
    validatorAddress: "",
    content: ""
  };
}
export const Claim = {
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDBProphecy(): DBProphecy {
  return {
    id: "",
    status: undefined,
    claimValidators: new Uint8Array(),
    validatorClaims: new Uint8Array()
  };
}
export const DBProphecy = {
  encode(message: DBProphecy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseStatus(): Status {
  return {
    text: 0,
    finalClaim: ""
  };
}
export const Status = {
  encode(message: Status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      text: isSet(object.text) ? statusTextFromJSON(object.text) : 0,
      finalClaim: isSet(object.finalClaim) ? String(object.finalClaim) : ""
    };
  },
  fromPartial(object: Partial<Status>): Status {
    const message = createBaseStatus();
    message.text = object.text ?? 0;
    message.finalClaim = object.finalClaim ?? "";
    return message;
  }
};