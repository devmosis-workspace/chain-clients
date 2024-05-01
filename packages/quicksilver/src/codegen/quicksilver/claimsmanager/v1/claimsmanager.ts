import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export enum ClaimType {
  /** ClaimTypeUndefined - Undefined action (per protobuf spec) */
  ClaimTypeUndefined = 0,
  ClaimTypeLiquidToken = 1,
  ClaimTypeOsmosisPool = 2,
  ClaimTypeCrescentPool = 3,
  ClaimTypeSifchainPool = 4,
  ClaimTypeUmeeToken = 5,
  UNRECOGNIZED = -1,
}
export const ClaimTypeSDKType = ClaimType;
export const ClaimTypeAmino = ClaimType;
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "ClaimTypeUndefined":
      return ClaimType.ClaimTypeUndefined;
    case 1:
    case "ClaimTypeLiquidToken":
      return ClaimType.ClaimTypeLiquidToken;
    case 2:
    case "ClaimTypeOsmosisPool":
      return ClaimType.ClaimTypeOsmosisPool;
    case 3:
    case "ClaimTypeCrescentPool":
      return ClaimType.ClaimTypeCrescentPool;
    case 4:
    case "ClaimTypeSifchainPool":
      return ClaimType.ClaimTypeSifchainPool;
    case 5:
    case "ClaimTypeUmeeToken":
      return ClaimType.ClaimTypeUmeeToken;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.ClaimTypeUndefined:
      return "ClaimTypeUndefined";
    case ClaimType.ClaimTypeLiquidToken:
      return "ClaimTypeLiquidToken";
    case ClaimType.ClaimTypeOsmosisPool:
      return "ClaimTypeOsmosisPool";
    case ClaimType.ClaimTypeCrescentPool:
      return "ClaimTypeCrescentPool";
    case ClaimType.ClaimTypeSifchainPool:
      return "ClaimTypeSifchainPool";
    case ClaimType.ClaimTypeUmeeToken:
      return "ClaimTypeUmeeToken";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params holds parameters for the claimsmanager module. */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/quicksilver.claimsmanager.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the claimsmanager module. */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/quicksilver.claimsmanager.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the claimsmanager module. */
export interface ParamsSDKType {}
/** Claim define the users claim for holding assets within a given zone. */
export interface Claim {
  userAddress: string;
  chainId: string;
  module: ClaimType;
  sourceChainId: string;
  /** @deprecated */
  _amount: bigint;
  amount: string;
}
export interface ClaimProtoMsg {
  typeUrl: "/quicksilver.claimsmanager.v1.Claim";
  value: Uint8Array;
}
/** Claim define the users claim for holding assets within a given zone. */
export interface ClaimAmino {
  user_address?: string;
  chain_id?: string;
  module?: ClaimType;
  source_chain_id?: string;
  /** @deprecated */
  _amount?: string;
  amount?: string;
}
export interface ClaimAminoMsg {
  type: "/quicksilver.claimsmanager.v1.Claim";
  value: ClaimAmino;
}
/** Claim define the users claim for holding assets within a given zone. */
export interface ClaimSDKType {
  user_address: string;
  chain_id: string;
  module: ClaimType;
  source_chain_id: string;
  /** @deprecated */
  _amount: bigint;
  amount: string;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface Proof {
  key: Uint8Array;
  data: Uint8Array;
  proofOps?: ProofOps;
  height: bigint;
  proofType: string;
}
export interface ProofProtoMsg {
  typeUrl: "/quicksilver.claimsmanager.v1.Proof";
  value: Uint8Array;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface ProofAmino {
  key?: string;
  data?: string;
  proof_ops?: ProofOpsAmino;
  height?: string;
  proof_type?: string;
}
export interface ProofAminoMsg {
  type: "/quicksilver.claimsmanager.v1.Proof";
  value: ProofAmino;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface ProofSDKType {
  key: Uint8Array;
  data: Uint8Array;
  proof_ops?: ProofOpsSDKType;
  height: bigint;
  proof_type: string;
}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/quicksilver.claimsmanager.v1.Params",
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): Params {
    return {};
  },
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/quicksilver.claimsmanager.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseClaim(): Claim {
  return {
    userAddress: "",
    chainId: "",
    module: 0,
    sourceChainId: "",
    _amount: BigInt(0),
    amount: ""
  };
}
export const Claim = {
  typeUrl: "/quicksilver.claimsmanager.v1.Claim",
  encode(message: Claim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.module !== 0) {
      writer.uint32(24).int32(message.module);
    }
    if (message.sourceChainId !== "") {
      writer.uint32(34).string(message.sourceChainId);
    }
    if (message._amount !== BigInt(0)) {
      writer.uint32(40).uint64(message._amount);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): Claim {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      module: isSet(object.module) ? claimTypeFromJSON(object.module) : -1,
      sourceChainId: isSet(object.sourceChainId) ? String(object.sourceChainId) : "",
      _amount: isSet(object._amount) ? BigInt(object._amount.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<Claim>): Claim {
    const message = createBaseClaim();
    message.userAddress = object.userAddress ?? "";
    message.chainId = object.chainId ?? "";
    message.module = object.module ?? 0;
    message.sourceChainId = object.sourceChainId ?? "";
    message._amount = object._amount !== undefined && object._amount !== null ? BigInt(object._amount.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: ClaimAmino): Claim {
    const message = createBaseClaim();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.module !== undefined && object.module !== null) {
      message.module = claimTypeFromJSON(object.module);
    }
    if (object.source_chain_id !== undefined && object.source_chain_id !== null) {
      message.sourceChainId = object.source_chain_id;
    }
    if (object._amount !== undefined && object._amount !== null) {
      message._amount = BigInt(object._amount);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Claim): ClaimAmino {
    const obj: any = {};
    obj.user_address = message.userAddress;
    obj.chain_id = message.chainId;
    obj.module = message.module;
    obj.source_chain_id = message.sourceChainId;
    obj._amount = message._amount ? message._amount.toString() : undefined;
    obj.amount = message.amount;
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
      typeUrl: "/quicksilver.claimsmanager.v1.Claim",
      value: Claim.encode(message).finish()
    };
  }
};
function createBaseProof(): Proof {
  return {
    key: new Uint8Array(),
    data: new Uint8Array(),
    proofOps: undefined,
    height: BigInt(0),
    proofType: ""
  };
}
export const Proof = {
  typeUrl: "/quicksilver.claimsmanager.v1.Proof",
  encode(message: Proof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(26).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.proofType !== "") {
      writer.uint32(42).string(message.proofType);
    }
    return writer;
  },
  fromJSON(object: any): Proof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      proofOps: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      proofType: isSet(object.proof_type) ? String(object.proof_type) : ""
    };
  },
  fromPartial(object: Partial<Proof>): Proof {
    const message = createBaseProof();
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.proofType = object.proofType ?? "";
    return message;
  },
  fromAmino(object: ProofAmino): Proof {
    const message = createBaseProof();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.proof_ops !== undefined && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.proof_type !== undefined && object.proof_type !== null) {
      message.proofType = object.proof_type;
    }
    return message;
  },
  toAmino(message: Proof): ProofAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.proof_type = message.proofType;
    return obj;
  },
  fromAminoMsg(object: ProofAminoMsg): Proof {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofProtoMsg): Proof {
    return Proof.decode(message.value);
  },
  toProto(message: Proof): Uint8Array {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message: Proof): ProofProtoMsg {
    return {
      typeUrl: "/quicksilver.claimsmanager.v1.Proof",
      value: Proof.encode(message).finish()
    };
  }
};