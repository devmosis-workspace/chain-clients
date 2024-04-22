import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { Vote, VoteAmino, VoteSDKType, Proposal, ProposalAmino, ProposalSDKType } from "../types/types";
import { BinaryWriter } from "../../binary";
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
export declare const ErrorsAmino: typeof Errors;
export declare function errorsFromJSON(object: any): Errors;
export declare function errorsToJSON(object: Errors): string;
export interface RemoteSignerError {
    code: number;
    description: string;
}
export interface RemoteSignerErrorProtoMsg {
    typeUrl: "/tendermint.privval.RemoteSignerError";
    value: Uint8Array;
}
export interface RemoteSignerErrorAmino {
    code?: number;
    description?: string;
}
export interface RemoteSignerErrorAminoMsg {
    type: "/tendermint.privval.RemoteSignerError";
    value: RemoteSignerErrorAmino;
}
export interface RemoteSignerErrorSDKType {
    code: number;
    description: string;
}
/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequest {
    chainId: string;
}
export interface PubKeyRequestProtoMsg {
    typeUrl: "/tendermint.privval.PubKeyRequest";
    value: Uint8Array;
}
/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequestAmino {
    chain_id?: string;
}
export interface PubKeyRequestAminoMsg {
    type: "/tendermint.privval.PubKeyRequest";
    value: PubKeyRequestAmino;
}
/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequestSDKType {
    chain_id: string;
}
/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponse {
    pubKey: PublicKey;
    error?: RemoteSignerError;
}
export interface PubKeyResponseProtoMsg {
    typeUrl: "/tendermint.privval.PubKeyResponse";
    value: Uint8Array;
}
/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponseAmino {
    pub_key?: PublicKeyAmino;
    error?: RemoteSignerErrorAmino;
}
export interface PubKeyResponseAminoMsg {
    type: "/tendermint.privval.PubKeyResponse";
    value: PubKeyResponseAmino;
}
/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponseSDKType {
    pub_key: PublicKeySDKType;
    error?: RemoteSignerErrorSDKType;
}
/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequest {
    vote?: Vote;
    chainId: string;
}
export interface SignVoteRequestProtoMsg {
    typeUrl: "/tendermint.privval.SignVoteRequest";
    value: Uint8Array;
}
/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequestAmino {
    vote?: VoteAmino;
    chain_id?: string;
}
export interface SignVoteRequestAminoMsg {
    type: "/tendermint.privval.SignVoteRequest";
    value: SignVoteRequestAmino;
}
/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequestSDKType {
    vote?: VoteSDKType;
    chain_id: string;
}
/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponse {
    vote: Vote;
    error?: RemoteSignerError;
}
export interface SignedVoteResponseProtoMsg {
    typeUrl: "/tendermint.privval.SignedVoteResponse";
    value: Uint8Array;
}
/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponseAmino {
    vote?: VoteAmino;
    error?: RemoteSignerErrorAmino;
}
export interface SignedVoteResponseAminoMsg {
    type: "/tendermint.privval.SignedVoteResponse";
    value: SignedVoteResponseAmino;
}
/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponseSDKType {
    vote: VoteSDKType;
    error?: RemoteSignerErrorSDKType;
}
/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequest {
    proposal?: Proposal;
    chainId: string;
}
export interface SignProposalRequestProtoMsg {
    typeUrl: "/tendermint.privval.SignProposalRequest";
    value: Uint8Array;
}
/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequestAmino {
    proposal?: ProposalAmino;
    chain_id?: string;
}
export interface SignProposalRequestAminoMsg {
    type: "/tendermint.privval.SignProposalRequest";
    value: SignProposalRequestAmino;
}
/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequestSDKType {
    proposal?: ProposalSDKType;
    chain_id: string;
}
/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponse {
    proposal: Proposal;
    error?: RemoteSignerError;
}
export interface SignedProposalResponseProtoMsg {
    typeUrl: "/tendermint.privval.SignedProposalResponse";
    value: Uint8Array;
}
/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponseAmino {
    proposal?: ProposalAmino;
    error?: RemoteSignerErrorAmino;
}
export interface SignedProposalResponseAminoMsg {
    type: "/tendermint.privval.SignedProposalResponse";
    value: SignedProposalResponseAmino;
}
/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponseSDKType {
    proposal: ProposalSDKType;
    error?: RemoteSignerErrorSDKType;
}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequest {
}
export interface PingRequestProtoMsg {
    typeUrl: "/tendermint.privval.PingRequest";
    value: Uint8Array;
}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequestAmino {
}
export interface PingRequestAminoMsg {
    type: "/tendermint.privval.PingRequest";
    value: PingRequestAmino;
}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequestSDKType {
}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {
}
export interface PingResponseProtoMsg {
    typeUrl: "/tendermint.privval.PingResponse";
    value: Uint8Array;
}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponseAmino {
}
export interface PingResponseAminoMsg {
    type: "/tendermint.privval.PingResponse";
    value: PingResponseAmino;
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
export interface MessageProtoMsg {
    typeUrl: "/tendermint.privval.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    pub_key_request?: PubKeyRequestAmino;
    pub_key_response?: PubKeyResponseAmino;
    sign_vote_request?: SignVoteRequestAmino;
    signed_vote_response?: SignedVoteResponseAmino;
    sign_proposal_request?: SignProposalRequestAmino;
    signed_proposal_response?: SignedProposalResponseAmino;
    ping_request?: PingRequestAmino;
    ping_response?: PingResponseAmino;
}
export interface MessageAminoMsg {
    type: "/tendermint.privval.Message";
    value: MessageAmino;
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
    typeUrl: string;
    encode(message: RemoteSignerError, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoteSignerError;
    fromPartial(object: Partial<RemoteSignerError>): RemoteSignerError;
    fromAmino(object: RemoteSignerErrorAmino): RemoteSignerError;
    toAmino(message: RemoteSignerError): RemoteSignerErrorAmino;
    fromAminoMsg(object: RemoteSignerErrorAminoMsg): RemoteSignerError;
    fromProtoMsg(message: RemoteSignerErrorProtoMsg): RemoteSignerError;
    toProto(message: RemoteSignerError): Uint8Array;
    toProtoMsg(message: RemoteSignerError): RemoteSignerErrorProtoMsg;
};
export declare const PubKeyRequest: {
    typeUrl: string;
    encode(message: PubKeyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PubKeyRequest;
    fromPartial(object: Partial<PubKeyRequest>): PubKeyRequest;
    fromAmino(object: PubKeyRequestAmino): PubKeyRequest;
    toAmino(message: PubKeyRequest): PubKeyRequestAmino;
    fromAminoMsg(object: PubKeyRequestAminoMsg): PubKeyRequest;
    fromProtoMsg(message: PubKeyRequestProtoMsg): PubKeyRequest;
    toProto(message: PubKeyRequest): Uint8Array;
    toProtoMsg(message: PubKeyRequest): PubKeyRequestProtoMsg;
};
export declare const PubKeyResponse: {
    typeUrl: string;
    encode(message: PubKeyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PubKeyResponse;
    fromPartial(object: Partial<PubKeyResponse>): PubKeyResponse;
    fromAmino(object: PubKeyResponseAmino): PubKeyResponse;
    toAmino(message: PubKeyResponse): PubKeyResponseAmino;
    fromAminoMsg(object: PubKeyResponseAminoMsg): PubKeyResponse;
    fromProtoMsg(message: PubKeyResponseProtoMsg): PubKeyResponse;
    toProto(message: PubKeyResponse): Uint8Array;
    toProtoMsg(message: PubKeyResponse): PubKeyResponseProtoMsg;
};
export declare const SignVoteRequest: {
    typeUrl: string;
    encode(message: SignVoteRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignVoteRequest;
    fromPartial(object: Partial<SignVoteRequest>): SignVoteRequest;
    fromAmino(object: SignVoteRequestAmino): SignVoteRequest;
    toAmino(message: SignVoteRequest): SignVoteRequestAmino;
    fromAminoMsg(object: SignVoteRequestAminoMsg): SignVoteRequest;
    fromProtoMsg(message: SignVoteRequestProtoMsg): SignVoteRequest;
    toProto(message: SignVoteRequest): Uint8Array;
    toProtoMsg(message: SignVoteRequest): SignVoteRequestProtoMsg;
};
export declare const SignedVoteResponse: {
    typeUrl: string;
    encode(message: SignedVoteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignedVoteResponse;
    fromPartial(object: Partial<SignedVoteResponse>): SignedVoteResponse;
    fromAmino(object: SignedVoteResponseAmino): SignedVoteResponse;
    toAmino(message: SignedVoteResponse): SignedVoteResponseAmino;
    fromAminoMsg(object: SignedVoteResponseAminoMsg): SignedVoteResponse;
    fromProtoMsg(message: SignedVoteResponseProtoMsg): SignedVoteResponse;
    toProto(message: SignedVoteResponse): Uint8Array;
    toProtoMsg(message: SignedVoteResponse): SignedVoteResponseProtoMsg;
};
export declare const SignProposalRequest: {
    typeUrl: string;
    encode(message: SignProposalRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignProposalRequest;
    fromPartial(object: Partial<SignProposalRequest>): SignProposalRequest;
    fromAmino(object: SignProposalRequestAmino): SignProposalRequest;
    toAmino(message: SignProposalRequest): SignProposalRequestAmino;
    fromAminoMsg(object: SignProposalRequestAminoMsg): SignProposalRequest;
    fromProtoMsg(message: SignProposalRequestProtoMsg): SignProposalRequest;
    toProto(message: SignProposalRequest): Uint8Array;
    toProtoMsg(message: SignProposalRequest): SignProposalRequestProtoMsg;
};
export declare const SignedProposalResponse: {
    typeUrl: string;
    encode(message: SignedProposalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignedProposalResponse;
    fromPartial(object: Partial<SignedProposalResponse>): SignedProposalResponse;
    fromAmino(object: SignedProposalResponseAmino): SignedProposalResponse;
    toAmino(message: SignedProposalResponse): SignedProposalResponseAmino;
    fromAminoMsg(object: SignedProposalResponseAminoMsg): SignedProposalResponse;
    fromProtoMsg(message: SignedProposalResponseProtoMsg): SignedProposalResponse;
    toProto(message: SignedProposalResponse): Uint8Array;
    toProtoMsg(message: SignedProposalResponse): SignedProposalResponseProtoMsg;
};
export declare const PingRequest: {
    typeUrl: string;
    encode(_: PingRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): PingRequest;
    fromPartial(_: Partial<PingRequest>): PingRequest;
    fromAmino(_: PingRequestAmino): PingRequest;
    toAmino(_: PingRequest): PingRequestAmino;
    fromAminoMsg(object: PingRequestAminoMsg): PingRequest;
    fromProtoMsg(message: PingRequestProtoMsg): PingRequest;
    toProto(message: PingRequest): Uint8Array;
    toProtoMsg(message: PingRequest): PingRequestProtoMsg;
};
export declare const PingResponse: {
    typeUrl: string;
    encode(_: PingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): PingResponse;
    fromPartial(_: Partial<PingResponse>): PingResponse;
    fromAmino(_: PingResponseAmino): PingResponse;
    toAmino(_: PingResponse): PingResponseAmino;
    fromAminoMsg(object: PingResponseAminoMsg): PingResponse;
    fromProtoMsg(message: PingResponseProtoMsg): PingResponse;
    toProto(message: PingResponse): Uint8Array;
    toProtoMsg(message: PingResponse): PingResponseProtoMsg;
};
export declare const Message: {
    typeUrl: string;
    encode(message: Message, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
    fromAmino(object: MessageAmino): Message;
    toAmino(message: Message): MessageAmino;
    fromAminoMsg(object: MessageAminoMsg): Message;
    fromProtoMsg(message: MessageProtoMsg): Message;
    toProto(message: Message): Uint8Array;
    toProtoMsg(message: Message): MessageProtoMsg;
};
