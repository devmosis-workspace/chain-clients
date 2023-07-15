import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { Vote, VoteSDKType, Proposal, ProposalSDKType } from "../types/types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export enum Errors {
  ERRORS_UNKNOWN = 0,
  ERRORS_UNEXPECTED_RESPONSE = 1,
  ERRORS_NO_CONNECTION = 2,
  ERRORS_CONNECTION_TIMEOUT = 3,
  ERRORS_READ_TIMEOUT = 4,
  ERRORS_WRITE_TIMEOUT = 5,
  UNRECOGNIZED = -1,
}
export const ErrorsSDKType = Errors;
export function errorsFromJSON(object: any): Errors {
  switch (object) {
    case 0:
    case "ERRORS_UNKNOWN":
      return Errors.ERRORS_UNKNOWN;
    case 1:
    case "ERRORS_UNEXPECTED_RESPONSE":
      return Errors.ERRORS_UNEXPECTED_RESPONSE;
    case 2:
    case "ERRORS_NO_CONNECTION":
      return Errors.ERRORS_NO_CONNECTION;
    case 3:
    case "ERRORS_CONNECTION_TIMEOUT":
      return Errors.ERRORS_CONNECTION_TIMEOUT;
    case 4:
    case "ERRORS_READ_TIMEOUT":
      return Errors.ERRORS_READ_TIMEOUT;
    case 5:
    case "ERRORS_WRITE_TIMEOUT":
      return Errors.ERRORS_WRITE_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Errors.UNRECOGNIZED;
  }
}
export function errorsToJSON(object: Errors): string {
  switch (object) {
    case Errors.ERRORS_UNKNOWN:
      return "ERRORS_UNKNOWN";
    case Errors.ERRORS_UNEXPECTED_RESPONSE:
      return "ERRORS_UNEXPECTED_RESPONSE";
    case Errors.ERRORS_NO_CONNECTION:
      return "ERRORS_NO_CONNECTION";
    case Errors.ERRORS_CONNECTION_TIMEOUT:
      return "ERRORS_CONNECTION_TIMEOUT";
    case Errors.ERRORS_READ_TIMEOUT:
      return "ERRORS_READ_TIMEOUT";
    case Errors.ERRORS_WRITE_TIMEOUT:
      return "ERRORS_WRITE_TIMEOUT";
    case Errors.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
export interface PingRequest {}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequestSDKType {}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponseSDKType {}
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
function createBaseRemoteSignerError(): RemoteSignerError {
  return {
    code: 0,
    description: ""
  };
}
export const RemoteSignerError = {
  encode(message: RemoteSignerError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): RemoteSignerError {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<RemoteSignerError>): RemoteSignerError {
    const message = createBaseRemoteSignerError();
    message.code = object.code ?? 0;
    message.description = object.description ?? "";
    return message;
  }
};
function createBasePubKeyRequest(): PubKeyRequest {
  return {
    chainId: ""
  };
}
export const PubKeyRequest = {
  encode(message: PubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): PubKeyRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<PubKeyRequest>): PubKeyRequest {
    const message = createBasePubKeyRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }
};
function createBasePubKeyResponse(): PubKeyResponse {
  return {
    pubKey: undefined,
    error: undefined
  };
}
export const PubKeyResponse = {
  encode(message: PubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PubKeyResponse {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial(object: Partial<PubKeyResponse>): PubKeyResponse {
    const message = createBasePubKeyResponse();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
function createBaseSignVoteRequest(): SignVoteRequest {
  return {
    vote: undefined,
    chainId: ""
  };
}
export const SignVoteRequest = {
  encode(message: SignVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): SignVoteRequest {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<SignVoteRequest>): SignVoteRequest {
    const message = createBaseSignVoteRequest();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  }
};
function createBaseSignedVoteResponse(): SignedVoteResponse {
  return {
    vote: undefined,
    error: undefined
  };
}
export const SignedVoteResponse = {
  encode(message: SignedVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SignedVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial(object: Partial<SignedVoteResponse>): SignedVoteResponse {
    const message = createBaseSignedVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
function createBaseSignProposalRequest(): SignProposalRequest {
  return {
    proposal: undefined,
    chainId: ""
  };
}
export const SignProposalRequest = {
  encode(message: SignProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): SignProposalRequest {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<SignProposalRequest>): SignProposalRequest {
    const message = createBaseSignProposalRequest();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  }
};
function createBaseSignedProposalResponse(): SignedProposalResponse {
  return {
    proposal: undefined,
    error: undefined
  };
}
export const SignedProposalResponse = {
  encode(message: SignedProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SignedProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  fromPartial(object: Partial<SignedProposalResponse>): SignedProposalResponse {
    const message = createBaseSignedProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
function createBasePingRequest(): PingRequest {
  return {};
}
export const PingRequest = {
  encode(_: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): PingRequest {
    return {};
  },
  fromPartial(_: Partial<PingRequest>): PingRequest {
    const message = createBasePingRequest();
    return message;
  }
};
function createBasePingResponse(): PingResponse {
  return {};
}
export const PingResponse = {
  encode(_: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): PingResponse {
    return {};
  },
  fromPartial(_: Partial<PingResponse>): PingResponse {
    const message = createBasePingResponse();
    return message;
  }
};
function createBaseMessage(): Message {
  return {
    pubKeyRequest: undefined,
    pubKeyResponse: undefined,
    signVoteRequest: undefined,
    signedVoteResponse: undefined,
    signProposalRequest: undefined,
    signedProposalResponse: undefined,
    pingRequest: undefined,
    pingResponse: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKeyRequest !== undefined) {
      PubKeyRequest.encode(message.pubKeyRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.pubKeyResponse !== undefined) {
      PubKeyResponse.encode(message.pubKeyResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.signVoteRequest !== undefined) {
      SignVoteRequest.encode(message.signVoteRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.signedVoteResponse !== undefined) {
      SignedVoteResponse.encode(message.signedVoteResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.signProposalRequest !== undefined) {
      SignProposalRequest.encode(message.signProposalRequest, writer.uint32(42).fork()).ldelim();
    }
    if (message.signedProposalResponse !== undefined) {
      SignedProposalResponse.encode(message.signedProposalResponse, writer.uint32(50).fork()).ldelim();
    }
    if (message.pingRequest !== undefined) {
      PingRequest.encode(message.pingRequest, writer.uint32(58).fork()).ldelim();
    }
    if (message.pingResponse !== undefined) {
      PingResponse.encode(message.pingResponse, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Message {
    return {
      pubKeyRequest: isSet(object.pubKeyRequest) ? PubKeyRequest.fromJSON(object.pubKeyRequest) : undefined,
      pubKeyResponse: isSet(object.pubKeyResponse) ? PubKeyResponse.fromJSON(object.pubKeyResponse) : undefined,
      signVoteRequest: isSet(object.signVoteRequest) ? SignVoteRequest.fromJSON(object.signVoteRequest) : undefined,
      signedVoteResponse: isSet(object.signedVoteResponse) ? SignedVoteResponse.fromJSON(object.signedVoteResponse) : undefined,
      signProposalRequest: isSet(object.signProposalRequest) ? SignProposalRequest.fromJSON(object.signProposalRequest) : undefined,
      signedProposalResponse: isSet(object.signedProposalResponse) ? SignedProposalResponse.fromJSON(object.signedProposalResponse) : undefined,
      pingRequest: isSet(object.pingRequest) ? PingRequest.fromJSON(object.pingRequest) : undefined,
      pingResponse: isSet(object.pingResponse) ? PingResponse.fromJSON(object.pingResponse) : undefined
    };
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.pubKeyRequest = object.pubKeyRequest !== undefined && object.pubKeyRequest !== null ? PubKeyRequest.fromPartial(object.pubKeyRequest) : undefined;
    message.pubKeyResponse = object.pubKeyResponse !== undefined && object.pubKeyResponse !== null ? PubKeyResponse.fromPartial(object.pubKeyResponse) : undefined;
    message.signVoteRequest = object.signVoteRequest !== undefined && object.signVoteRequest !== null ? SignVoteRequest.fromPartial(object.signVoteRequest) : undefined;
    message.signedVoteResponse = object.signedVoteResponse !== undefined && object.signedVoteResponse !== null ? SignedVoteResponse.fromPartial(object.signedVoteResponse) : undefined;
    message.signProposalRequest = object.signProposalRequest !== undefined && object.signProposalRequest !== null ? SignProposalRequest.fromPartial(object.signProposalRequest) : undefined;
    message.signedProposalResponse = object.signedProposalResponse !== undefined && object.signedProposalResponse !== null ? SignedProposalResponse.fromPartial(object.signedProposalResponse) : undefined;
    message.pingRequest = object.pingRequest !== undefined && object.pingRequest !== null ? PingRequest.fromPartial(object.pingRequest) : undefined;
    message.pingResponse = object.pingResponse !== undefined && object.pingResponse !== null ? PingResponse.fromPartial(object.pingResponse) : undefined;
    return message;
  }
};