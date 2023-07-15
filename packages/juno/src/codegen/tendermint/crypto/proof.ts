import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Proof {
  total: Long;
  index: Long;
  leafHash: Uint8Array;
  aunts: Uint8Array[];
}
export interface ProofSDKType {
  total: Long;
  index: Long;
  leaf_hash: Uint8Array;
  aunts: Uint8Array[];
}
export interface ValueOp {
  /** Encoded in ProofOp.Key. */
  key: Uint8Array;
  /** To encode in ProofOp.Data */
  proof?: Proof;
}
export interface ValueOpSDKType {
  key: Uint8Array;
  proof?: ProofSDKType;
}
export interface DominoOp {
  key: string;
  input: string;
  output: string;
}
export interface DominoOpSDKType {
  key: string;
  input: string;
  output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOpSDKType {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
  ops: ProofOp[];
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsSDKType {
  ops: ProofOpSDKType[];
}
function createBaseProof(): Proof {
  return {
    total: Long.ZERO,
    index: Long.ZERO,
    leafHash: new Uint8Array(),
    aunts: []
  };
}
export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.total.isZero()) {
      writer.uint32(8).int64(message.total);
    }
    if (!message.index.isZero()) {
      writer.uint32(16).int64(message.index);
    }
    if (message.leafHash.length !== 0) {
      writer.uint32(26).bytes(message.leafHash);
    }
    for (const v of message.aunts) {
      writer.uint32(34).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): Proof {
    return {
      total: isSet(object.total) ? Long.fromValue(object.total) : Long.ZERO,
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      leafHash: isSet(object.leafHash) ? bytesFromBase64(object.leafHash) : new Uint8Array(),
      aunts: Array.isArray(object?.aunts) ? object.aunts.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<Proof>): Proof {
    const message = createBaseProof();
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.ZERO;
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.leafHash = object.leafHash ?? new Uint8Array();
    message.aunts = object.aunts?.map(e => e) || [];
    return message;
  }
};
function createBaseValueOp(): ValueOp {
  return {
    key: new Uint8Array(),
    proof: undefined
  };
}
export const ValueOp = {
  encode(message: ValueOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ValueOp {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
    };
  },
  fromPartial(object: Partial<ValueOp>): ValueOp {
    const message = createBaseValueOp();
    message.key = object.key ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  }
};
function createBaseDominoOp(): DominoOp {
  return {
    key: "",
    input: "",
    output: ""
  };
}
export const DominoOp = {
  encode(message: DominoOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.output !== "") {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },
  fromJSON(object: any): DominoOp {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      input: isSet(object.input) ? String(object.input) : "",
      output: isSet(object.output) ? String(object.output) : ""
    };
  },
  fromPartial(object: Partial<DominoOp>): DominoOp {
    const message = createBaseDominoOp();
    message.key = object.key ?? "";
    message.input = object.input ?? "";
    message.output = object.output ?? "";
    return message;
  }
};
function createBaseProofOp(): ProofOp {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const ProofOp = {
  encode(message: ProofOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): ProofOp {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ProofOp>): ProofOp {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseProofOps(): ProofOps {
  return {
    ops: []
  };
}
export const ProofOps = {
  encode(message: ProofOps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProofOps {
    return {
      ops: Array.isArray(object?.ops) ? object.ops.map((e: any) => ProofOp.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ProofOps>): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map(e => ProofOp.fromPartial(e)) || [];
    return message;
  }
};