import { BinaryWriter } from "../../../binary";
/** StatusText is an enum used to represent the status of the prophecy */
export declare enum StatusText {
    /** STATUS_TEXT_UNSPECIFIED - Default value */
    STATUS_TEXT_UNSPECIFIED = 0,
    /** STATUS_TEXT_PENDING - Pending status */
    STATUS_TEXT_PENDING = 1,
    /** STATUS_TEXT_SUCCESS - Success status */
    STATUS_TEXT_SUCCESS = 2,
    /** STATUS_TEXT_FAILED - Failed status */
    STATUS_TEXT_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const StatusTextSDKType: typeof StatusText;
export declare const StatusTextAmino: typeof StatusText;
export declare function statusTextFromJSON(object: any): StatusText;
export declare function statusTextToJSON(object: StatusText): string;
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
export declare const Claim: {
    typeUrl: string;
    encode(message: Claim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Claim;
    fromPartial(object: Partial<Claim>): Claim;
    fromAmino(object: ClaimAmino): Claim;
    toAmino(message: Claim): ClaimAmino;
    fromAminoMsg(object: ClaimAminoMsg): Claim;
    fromProtoMsg(message: ClaimProtoMsg): Claim;
    toProto(message: Claim): Uint8Array;
    toProtoMsg(message: Claim): ClaimProtoMsg;
};
export declare const DBProphecy: {
    typeUrl: string;
    encode(message: DBProphecy, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DBProphecy;
    fromPartial(object: Partial<DBProphecy>): DBProphecy;
    fromAmino(object: DBProphecyAmino): DBProphecy;
    toAmino(message: DBProphecy): DBProphecyAmino;
    fromAminoMsg(object: DBProphecyAminoMsg): DBProphecy;
    fromProtoMsg(message: DBProphecyProtoMsg): DBProphecy;
    toProto(message: DBProphecy): Uint8Array;
    toProtoMsg(message: DBProphecy): DBProphecyProtoMsg;
};
export declare const Status: {
    typeUrl: string;
    encode(message: Status, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Status;
    fromPartial(object: Partial<Status>): Status;
    fromAmino(object: StatusAmino): Status;
    toAmino(message: Status): StatusAmino;
    fromAminoMsg(object: StatusAminoMsg): Status;
    fromProtoMsg(message: StatusProtoMsg): Status;
    toProto(message: Status): Uint8Array;
    toProtoMsg(message: Status): StatusProtoMsg;
};
