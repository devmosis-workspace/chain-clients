import * as _m0 from "protobufjs/minimal";
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
export declare function statusTextFromJSON(object: any): StatusText;
export declare function statusTextToJSON(object: StatusText): string;
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Claim;
    fromPartial(object: Partial<Claim>): Claim;
};
export declare const DBProphecy: {
    encode(message: DBProphecy, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DBProphecy;
    fromPartial(object: Partial<DBProphecy>): DBProphecy;
};
export declare const Status: {
    encode(message: Status, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Status;
    fromPartial(object: Partial<Status>): Status;
};
