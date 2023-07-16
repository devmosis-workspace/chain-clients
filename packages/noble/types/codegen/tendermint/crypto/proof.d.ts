import { Long } from "../../helpers";
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
    /** ProofOps is Merkle proof defined by the list of ProofOps */
    ops: ProofOp[];
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsSDKType {
    ops: ProofOpSDKType[];
}
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Proof;
    fromPartial(object: Partial<Proof>): Proof;
};
export declare const ValueOp: {
    encode(message: ValueOp, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ValueOp;
    fromPartial(object: Partial<ValueOp>): ValueOp;
};
export declare const DominoOp: {
    encode(message: DominoOp, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DominoOp;
    fromPartial(object: Partial<DominoOp>): DominoOp;
};
export declare const ProofOp: {
    encode(message: ProofOp, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProofOp;
    fromPartial(object: Partial<ProofOp>): ProofOp;
};
export declare const ProofOps: {
    encode(message: ProofOps, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProofOps;
    fromPartial(object: Partial<ProofOps>): ProofOps;
};
