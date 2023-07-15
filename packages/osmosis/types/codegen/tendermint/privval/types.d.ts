import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { Vote, VoteSDKType, Proposal, ProposalSDKType } from "../types/types";
import * as _m0 from "protobufjs/minimal";
export declare enum Errors {
    ERRORS_UNKNOWN = 0,
    ERRORS_UNEXPECTED_RESPONSE = 1,
    ERRORS_NO_CONNECTION = 2,
    ERRORS_CONNECTION_TIMEOUT = 3,
    ERRORS_READ_TIMEOUT = 4,
    ERRORS_WRITE_TIMEOUT = 5,
    UNRECOGNIZED = -1
}
export declare const ErrorsSDKType: typeof Errors;
export declare function errorsFromJSON(object: any): Errors;
export declare function errorsToJSON(object: Errors): string;
export interface RemoteSignerError {
    code: number;
    description: string;
}
export interface RemoteSignerErrorSDKType {
    code: number;
    description: string;
}
/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequest {
    chainId: string;
}
/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequestSDKType {
    chain_id: string;
}
/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponse {
    pubKey?: PublicKey;
    error?: RemoteSignerError;
}
/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponseSDKType {
    pub_key?: PublicKeySDKType;
    error?: RemoteSignerErrorSDKType;
}
/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequest {
    vote?: Vote;
    chainId: string;
}
/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequestSDKType {
    vote?: VoteSDKType;
    chain_id: string;
}
/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponse {
    vote?: Vote;
    error?: RemoteSignerError;
}
/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponseSDKType {
    vote?: VoteSDKType;
    error?: RemoteSignerErrorSDKType;
}
/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequest {
    proposal?: Proposal;
    chainId: string;
}
/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequestSDKType {
    proposal?: ProposalSDKType;
    chain_id: string;
}
/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponse {
    proposal?: Proposal;
    error?: RemoteSignerError;
}
/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponseSDKType {
    proposal?: ProposalSDKType;
    error?: RemoteSignerErrorSDKType;
}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequest {
}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequestSDKType {
}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {
}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponseSDKType {
}
export interface Message {
    pubKeyRequest?: PubKeyRequest;
    pubKeyResponse?: PubKeyResponse;
    signVoteRequest?: SignVoteRequest;
    signedVoteResponse?: SignedVoteResponse;
    signProposalRequest?: SignProposalRequest;
    signedProposalResponse?: SignedProposalResponse;
    pingRequest?: PingRequest;
    pingResponse?: PingResponse;
}
export interface MessageSDKType {
    pub_key_request?: PubKeyRequestSDKType;
    pub_key_response?: PubKeyResponseSDKType;
    sign_vote_request?: SignVoteRequestSDKType;
    signed_vote_response?: SignedVoteResponseSDKType;
    sign_proposal_request?: SignProposalRequestSDKType;
    signed_proposal_response?: SignedProposalResponseSDKType;
    ping_request?: PingRequestSDKType;
    ping_response?: PingResponseSDKType;
}
export declare const RemoteSignerError: {
    encode(message: RemoteSignerError, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RemoteSignerError;
    fromPartial(object: Partial<RemoteSignerError>): RemoteSignerError;
};
export declare const PubKeyRequest: {
    encode(message: PubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PubKeyRequest;
    fromPartial(object: Partial<PubKeyRequest>): PubKeyRequest;
};
export declare const PubKeyResponse: {
    encode(message: PubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PubKeyResponse;
    fromPartial(object: Partial<PubKeyResponse>): PubKeyResponse;
};
export declare const SignVoteRequest: {
    encode(message: SignVoteRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignVoteRequest;
    fromPartial(object: Partial<SignVoteRequest>): SignVoteRequest;
};
export declare const SignedVoteResponse: {
    encode(message: SignedVoteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignedVoteResponse;
    fromPartial(object: Partial<SignedVoteResponse>): SignedVoteResponse;
};
export declare const SignProposalRequest: {
    encode(message: SignProposalRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignProposalRequest;
    fromPartial(object: Partial<SignProposalRequest>): SignProposalRequest;
};
export declare const SignedProposalResponse: {
    encode(message: SignedProposalResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignedProposalResponse;
    fromPartial(object: Partial<SignedProposalResponse>): SignedProposalResponse;
};
export declare const PingRequest: {
    encode(_: PingRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): PingRequest;
    fromPartial(_: Partial<PingRequest>): PingRequest;
};
export declare const PingResponse: {
    encode(_: PingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): PingResponse;
    fromPartial(_: Partial<PingResponse>): PingResponse;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
};
