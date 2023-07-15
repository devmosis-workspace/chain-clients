import { Snapshot, SnapshotSDKType } from "../../snapshot/exported/v1beta1/types";
import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { KeyState, MultisigState } from "../exported/v1beta1/types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Key_PubKeysEntry {
    key: string;
    value: Uint8Array;
}
export interface Key_PubKeysEntrySDKType {
    key: string;
    value: Uint8Array;
}
export interface Key {
    id: string;
    snapshot?: Snapshot;
    pubKeys: {
        [key: string]: Uint8Array;
    };
    signingThreshold?: Threshold;
    state: KeyState;
}
export interface KeySDKType {
    id: string;
    snapshot?: SnapshotSDKType;
    pub_keys: {
        [key: string]: Uint8Array;
    };
    signing_threshold?: ThresholdSDKType;
    state: KeyState;
}
export interface KeygenSession_IsPubKeyReceivedEntry {
    key: string;
    value: boolean;
}
export interface KeygenSession_IsPubKeyReceivedEntrySDKType {
    key: string;
    value: boolean;
}
export interface KeygenSession {
    key?: Key;
    state: MultisigState;
    keygenThreshold?: Threshold;
    expiresAt: Long;
    completedAt: Long;
    isPubKeyReceived: {
        [key: string]: boolean;
    };
    gracePeriod: Long;
}
export interface KeygenSessionSDKType {
    key?: KeySDKType;
    state: MultisigState;
    keygen_threshold?: ThresholdSDKType;
    expires_at: Long;
    completed_at: Long;
    is_pub_key_received: {
        [key: string]: boolean;
    };
    grace_period: Long;
}
export interface MultiSig_SigsEntry {
    key: string;
    value: Uint8Array;
}
export interface MultiSig_SigsEntrySDKType {
    key: string;
    value: Uint8Array;
}
export interface MultiSig {
    keyId: string;
    payloadHash: Uint8Array;
    sigs: {
        [key: string]: Uint8Array;
    };
}
export interface MultiSigSDKType {
    key_id: string;
    payload_hash: Uint8Array;
    sigs: {
        [key: string]: Uint8Array;
    };
}
export interface SigningSession {
    id: Long;
    multiSig?: MultiSig;
    state: MultisigState;
    key?: Key;
    expiresAt: Long;
    completedAt: Long;
    gracePeriod: Long;
    module: string;
    moduleMetadata?: Any;
}
export interface SigningSessionSDKType {
    id: Long;
    multi_sig?: MultiSigSDKType;
    state: MultisigState;
    key?: KeySDKType;
    expires_at: Long;
    completed_at: Long;
    grace_period: Long;
    module: string;
    module_metadata?: AnySDKType;
}
export interface KeyEpoch {
    epoch: Long;
    chain: string;
    keyId: string;
}
export interface KeyEpochSDKType {
    epoch: Long;
    chain: string;
    key_id: string;
}
export declare const Key_PubKeysEntry: {
    encode(message: Key_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Key_PubKeysEntry;
    fromPartial(object: Partial<Key_PubKeysEntry>): Key_PubKeysEntry;
};
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Key;
    fromPartial(object: Partial<Key>): Key;
};
export declare const KeygenSession_IsPubKeyReceivedEntry: {
    encode(message: KeygenSession_IsPubKeyReceivedEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenSession_IsPubKeyReceivedEntry;
    fromPartial(object: Partial<KeygenSession_IsPubKeyReceivedEntry>): KeygenSession_IsPubKeyReceivedEntry;
};
export declare const KeygenSession: {
    encode(message: KeygenSession, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenSession;
    fromPartial(object: Partial<KeygenSession>): KeygenSession;
};
export declare const MultiSig_SigsEntry: {
    encode(message: MultiSig_SigsEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MultiSig_SigsEntry;
    fromPartial(object: Partial<MultiSig_SigsEntry>): MultiSig_SigsEntry;
};
export declare const MultiSig: {
    encode(message: MultiSig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MultiSig;
    fromPartial(object: Partial<MultiSig>): MultiSig;
};
export declare const SigningSession: {
    encode(message: SigningSession, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SigningSession;
    fromPartial(object: Partial<SigningSession>): SigningSession;
};
export declare const KeyEpoch: {
    encode(message: KeyEpoch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyEpoch;
    fromPartial(object: Partial<KeyEpoch>): KeyEpoch;
};
